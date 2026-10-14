// Los proyectos se declaran a mano, no se leen de GitHub. El tipo se declara
// aqui para que TypeScript no infiera un array vacio como never[].
export interface Project {
  id: number
  title: string
  category: string
  technologies: string
  image: string
  description: string
  link: string
}

export const config = {
  developer: {
    name: 'Santiago',
    fullName: 'Santiago Sarmiento',
    title: 'Desarrollador y fundador de Nexora',
    description:
      'Desarrollador y fundador de Nexora, enfocado en crear software, experiencias digitales y productos tecnológicos con una visión a largo plazo. Me interesa construir tecnología útil, cuidar cada detalle y entender los sistemas desde el código hasta su funcionamiento interno.',
  },
  social: {
    github: 'Saaarmyx',
    email: 'saaarmyx@gmail.com',
    location: 'Barranquilla, Colombia',
  },
  about: {
    title: 'Sobre mí',
    description:
      'Empecé a los 13 años escribiendo HTML y CSS, y desde entonces no he dejado de construir. Hoy desarrollo software, interfaces y productos con una visión a largo plazo, trabajando con React y Svelte en el frontend, Node.js y Python en el backend, y Flutter y Dart para móvil. Me interesa construir tecnología útil, cuidar cada detalle y entender los sistemas desde el código hasta su funcionamiento interno.',
  },
  experiences: [
    {
      position: 'Desarrollo multiplataforma y sistemas',
      company: 'Proyectos y autoaprendizaje',
      period: 'Hoy',
      location: 'Barranquilla, Colombia',
      description:
        'Entrada al desarrollo móvil multiplataforma con Flutter y Dart, y al trabajo cercano al hardware con Rust.',
      responsibilities: [
        'Desarrollar aplicaciones móviles con Flutter y Dart',
        'Aprender Rust y el razonamiento de bajo nivel que exige',
        'Integrar el desarrollo web con el móvil en un mismo criterio de trabajo',
      ],
      technologies: ['Flutter', 'Dart', 'Rust'],
    },
    {
      position: 'Frontend Developer',
      company: 'Proyectos',
      period: '2025',
      location: 'Barranquilla, Colombia',
      description:
        'El salto al desarrollo frontend profesional: componentes, estado y construcción de interfaces completas con React.',
      responsibilities: [
        'Construir interfaces completas con React y Svelte',
        'Trabajar el HTML y el CSS con criterio propio, no solo con lo aprendido en tutoriales',
        'Estructurar componentes reutilizables y mantener el código legible',
      ],
      technologies: ['React', 'Svelte', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      position: 'Fundamentos de JavaScript y Python',
      company: 'Proyectos',
      period: '2024',
      location: 'Barranquilla, Colombia',
      description:
        'Consolidación de JavaScript y entrada a Python como segundo lenguaje para resolver problemas de lógica y automatización.',
      responsibilities: [
        'Consolidar las bases de JavaScript con proyectos escritos desde cero',
        'Aprender Python aplicado a automatización y análisis',
        'Practicar lógica y resolución de problemas con dos lenguajes distintos',
      ],
      technologies: ['JavaScript', 'Python'],
    },
    {
      position: 'Edición de vídeo y bases de JavaScript',
      company: 'Autoaprendizaje',
      period: '2023',
      location: 'Barranquilla, Colombia',
      description:
        'Doble salto: por un lado la edición de vídeo con Premiere Pro; por otro, los primeros pasos en JavaScript.',
      responsibilities: [
        'Aprender edición de vídeo con Adobe Premiere Pro',
        'Dar los primeros pasos en JavaScript con ejercicios propios',
        'Conectar el trabajo audiovisual con scripting para automatizar tareas de edición',
      ],
      technologies: ['Adobe Premiere Pro', 'JavaScript'],
    },
    {
      position: 'Primeros pasos en desarrollo web',
      company: 'Autoaprendizaje',
      period: '2022',
      location: 'Barranquilla, Colombia',
      description:
        'Inicio en el desarrollo web aprendiendo a construir páginas desde cero con HTML y CSS, y a retocar el acabado visual con Adobe Illustrator.',
      responsibilities: [
        'Aprender los fundamentos de HTML y CSS escribiendo código sin tutoriales guiados',
        'Construir mis primeras páginas web y entender cómo se estructura un documento',
        'RETOCAR y dar acabado visual a los trabajos con Adobe Illustrator',
      ],
      technologies: ['HTML', 'CSS', 'Adobe Illustrator'],
    },
  ],
  // Pendiente de cargar. Los proyectos se declaran a mano, no se leen de GitHub.
  projects: [
    {
      id: 1,
      title: 'Nexora',
      category: 'Categoría',
      technologies: 'React, Node.js, MongoDB',
      image: '/images/nombre.png',
      description: 'Qué hace y qué resuelve.',
      link: 'https://github.com/Saaarmyx/...',
    },
    {
      id: 2,
      title: 'Nombre del proyecto',
      category: 'Categoría',
      technologies: 'React, Node.js, MongoDB',
      image: '/images/nombre.png',
      description: 'Qué hace y qué resuelve.',
      link: 'https://github.com/Saaarmyx/...',
    },
    {
      id: 3,
      title: 'Nombre del proyecto',
      category: 'Categoría',
      technologies: 'React, Node.js, MongoDB',
      image: '/images/nombre.png',
      description: 'Qué hace y qué resuelve.',
      link: 'https://github.com/Saaarmyx/...',
    },
    {
      id: 4,
      title: 'Nombre del proyecto',
      category: 'Categoría',
      technologies: 'React, Node.js, MongoDB',
      image: '/images/nombre.png',
      description: 'Qué hace y qué resuelve.',
      link: 'https://github.com/Saaarmyx/...',
    },
  ] as Project[],
  contact: {
    email: 'saaarmyx@gmail.com',
    github: 'https://github.com/Saaarmyx',
    twitter: 'https://x.com/Saaarmyx',
    instagram: 'https://instagram.com/Saaarmyx',
  },
  skills: {
    develop: {
      title: 'DESARROLLADOR',
      description: 'Software, web y móvil',
      details:
        'Construyo software, experiencias digitales y productos tecnológicos con una visión a largo plazo. Trabajo en el frontend con React, Svelte y JavaScript; en el backend con Node.js y Python; y en móvil con Flutter y Dart. Me interesa entender cada sistema de punta a punta, desde el código hasta su comportamiento interno.',
      tools: [
        'React',
        'Svelte',
        'JavaScript',
        'HTML',
        'CSS',
        'Node.js',
        'Python',
        'Dart',
        'Flutter',
      ],
    },
    design: {
      title: 'DISEÑO Y ENTORNO',
      description: 'Interfaz y herramientas de trabajo',
      details:
        'Diseño e interfaz son parte del trabajo, no un añadido: uso Figma e Illustrator para dar acabado a lo que construyo. El resto del día a día está en Git, GitHub, Bash, VS Code y Linux, que es donde se resuelve el grueso del trabajo real.',
      tools: ['Figma', 'Adobe Illustrator', 'Git', 'GitHub', 'Bash', 'VS Code', 'Linux'],
    },
  },
}
