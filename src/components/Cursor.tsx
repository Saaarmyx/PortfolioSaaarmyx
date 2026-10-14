import { useEffect, useRef } from "react";
import "./styles/Cursor.css";

/**
 * Cursor personalizado.
 *
 * Antes este componente creaba un tween de GSAP nuevo en CADA frame para mover
 * un unico div, y ademas suavizaba dos veces (lerp lento + tween de 0.1s). Eso
 * hacia que el cursor fuera muy tarde y rebotara detras del raton.
 *
 * Ahora se mueve con un unico paso de interpolacion y se escribe el transform
 * directamente, sin intermediarios.
 */

// Cuanto mayor, mas pegado al raton. 0.3 reacciona sin parecer rigido.
const SMOOTHING = 0.3;

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Se inicializa en el centro para que no entre desde la esquina.
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };

    let pinned = false;
    let frameId = 0;

    const onMouseMove = (event: MouseEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    // Delegacion en lugar de listener por elemento: asi tambien cubre los
    // elementos con data-cursor que se anaden despues del montaje.
    const onPointerOver = (event: MouseEvent) => {
      const origin = event.target as HTMLElement | null;
      const element = origin?.closest?.("[data-cursor]") as HTMLElement | null;
      if (!element) return;

      const mode = element.dataset.cursor;

      if (mode === "icons") {
        const rect = element.getBoundingClientRect();
        // Fija el cursor sobre el bloque de iconos hasta que se salga.
        pinned = true;
        target.x = rect.left;
        target.y = rect.top;
        current.x = rect.left;
        current.y = rect.top;

        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        cursor.classList.add("cursor-icons");
      }

      if (mode === "disable") {
        cursor.classList.add("cursor-disable");
      }
    };

    const onPointerOut = (event: MouseEvent) => {
      const origin = event.target as HTMLElement | null;
      const element = origin?.closest?.("[data-cursor]") as HTMLElement | null;
      if (!element) return;

      cursor.classList.remove("cursor-disable", "cursor-icons");
      pinned = false;
    };

    const loop = () => {
      frameId = requestAnimationFrame(loop);

      if (pinned) return;

      current.x += (target.x - current.x) * SMOOTHING;
      current.y += (target.y - current.y) * SMOOTHING;

      cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onPointerOver, { passive: true });
    document.addEventListener("mouseout", onPointerOut, { passive: true });

    loop();

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onPointerOver);
      document.removeEventListener("mouseout", onPointerOut);
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;