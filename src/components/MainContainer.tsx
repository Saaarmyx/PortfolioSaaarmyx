import { PropsWithChildren, useEffect, useRef, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStackNew from "./TechStackNew";
import CallToAction from "./CallToAction";
import setSplitText from "./utils/splitText";
import { initialFX } from "./utils/initialFX";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [isMobile] = useState<boolean>(window.innerWidth <= 768);
  const [shouldRenderCharacter, setShouldRenderCharacter] = useState(false);
  const introStarted = useRef(false);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // Sustituye a la pantalla de carga: arranca las animaciones de entrada y
  // desbloquea el scroll del body sin bloquear la pagina primero.
  useEffect(() => {
    if (introStarted.current) return;
    introStarted.current = true;

    // Un frame para que Navbar haya montado y registrado Lenis.
    const id = requestAnimationFrame(() => initialFX());

    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1024) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;
    const win = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const mountCharacter = () => setShouldRenderCharacter(true);

    if (typeof win.requestIdleCallback === "function") {
      idleId = win.requestIdleCallback(mountCharacter, { timeout: 1500 });
    } else {
      timeoutId = setTimeout(mountCharacter, 1200);
    }

    return () => {
      if (idleId !== undefined && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <main className="main-body">
      <div className="container-main">
        <Cursor />
        <Navbar />
        <SocialIcons />
        {isDesktopView && !isMobile && shouldRenderCharacter && children}
        <div className="container-main">
          <Landing />
          <About />
          <WhatIDo />
          <Career />
          <Work />
          <TechStackNew />
          <CallToAction />
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default MainContainer;
