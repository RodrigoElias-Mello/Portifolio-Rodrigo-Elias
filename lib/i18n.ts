import { featuredProjects, projectCaseStudyLabels, type Project, type ProjectCaseStudyKey } from "./project-case-studies"

export type Language = "pt" | "en" | "es"

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: "pt", label: "PT-BR", flag: "🇧🇷" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "es", label: "ES", flag: "🇪🇸" },
]

type Content = {
  meta: { title: string; description: string }
  skipToContent: string
  nav: { about: string; skills: string; projects: string; experience: string; education: string; contact: string }
  hero: {
    available: string
    greeting: string
    name: string
    role: string
    intro: string
    stats: { projects: string; responsive: string; accessible: string }
    ctaProjects: string
    ctaContact: string
    codeComment: string
  }
  about: {
    tag: string
    title: string
    profileBadge: string
    profileImageAlt: string
    seeProjects: string
    getInTouch: string
    card1Title: string
    card1Text: string
    card2Title: string
    card2Text: string
    card3Title: string
    card3Text: string
    statEducation: string
    statEducationValue: string
    statFocus: string
    statFocusValue: string
    statApproach: string
    statApproachValue: string
  }
  skillsSection: {
    tag: string
    title: string
    subtitle: string
    frontend: string
    analysis: string
    tools: string
    soft: string
  }
  skills: {
    frontend: string[]
    analysis: string[]
    tools: string[]
    soft: string[]
  }
  projectsSection: {
    tag: string
    title: string
    subtitle: string
    categories: string[]
    caseStudyLabels: Record<ProjectCaseStudyKey, string>
    performanceNote: string
    challengeLabel: string
    solutionLabel: string
    contributionLabel: string
    learningsLabel: string
    impactLabel: string
    techLabel: string
    showLess: string
    seeCaseStudy: string
    seeProject: string
    moreComing: string
    seeGithub: string
  }
  projects: Project[]
  experienceSection: {
    tag: string
    title: string
    responsibilitiesLabel: string
    achievementsLabel: string
    ready: string
  }
  experience: {
    title: string
    subtitle: string
    company: string
    period: string
    description: string
    responsibilities: string[]
    achievements: string[]
    skills: string[]
  }
  educationSection: {
    tag: string
    title: string
    coursesLabel: string
  }
  education: {
    degree: string
    institution: string
    period: string
    courses: string[]
  }
  contact: {
    tag: string
    title: string
    subtitle: string
    getInTouch: string
    terminalText: string
  }
  footer: {
    role: string
    tagline: string
    navigation: string
    connect: string
    rights: string
    madeWith: string
  }
  backToTop: string
}

export const translations: Record<Language, Content> = {
  pt: {
    meta: {
      title: "Rodrigo Elias | Desenvolvedor Web & Analista de Sistemas",
      description:
        "Desenvolvedor Web e Analista de Sistemas. Construo interfaces acessíveis e responsivas, combinando desenvolvimento frontend com análise técnica de sistemas.",
    },
    skipToContent: "Ir para conteúdo principal",
    nav: {
      about: "Sobre",
      skills: "Competências",
      projects: "Projetos",
      experience: "Experiência",
      education: "Formação",
      contact: "Contato",
    },
    hero: {
      available: "Disponível para oportunidades",
      greeting: "Olá, eu sou",
      name: "Rodrigo Elias",
      role: "Desenvolvedor Web & Analista de Sistemas",
      intro:
        "Transformo desafios em soluções digitais de alto impacto. Combino desenvolvimento frontend com análise técnica para criar interfaces acessíveis, performáticas e que geram resultados reais.",
      stats: { projects: "Projetos", responsive: "Responsivos", accessible: "Acessível" },
      ctaProjects: "Ver Projetos",
      ctaContact: "Entrar em Contato",
      codeComment: "// Perfil profissional",
    },
    about: {
      tag: "// Minha Jornada Profissional",
      title: "Sobre Mim",
      profileBadge: "Frontend & Análise Técnica",
      profileImageAlt: "Retrato profissional de Rodrigo Elias sorrindo, usando terno preto e camisa branca.",
      seeProjects: "Ver Projetos",
      getInTouch: "Entrar em Contato",
      card1Title: "Orientado a Resultados",
      card1Text:
        "Minha paixão por criar experiências digitais se traduz em soluções que otimizam processos e melhoram a interação do usuário. Cada projeto que desenvolvo tem como foco entregar valor mensurável, seja através de interfaces mais intuitivas, código mais performático ou sistemas mais eficientes.",
      card2Title: "Visão Holística",
      card2Text:
        "Minha formação em Análise e Desenvolvimento de Sistemas me proporcionou uma base sólida para entender não apenas o \u201Ccomo\u201D, mas também o \u201Cporquê\u201D por trás de cada solução. Essa visão me permite atuar desde a concepção até a validação, garantindo qualidade em todo o ciclo de desenvolvimento.",
      card3Title: "Aprendizado Contínuo",
      card3Text:
        "Acredito que o melhor código é aquele que resolve problemas reais de forma elegante e eficiente. Busco constantemente aprender novas tecnologias e metodologias, mantendo-me atualizado com as melhores práticas do mercado para entregar soluções que superem expectativas.",
      statEducation: "Formação",
      statEducationValue: "ADS",
      statFocus: "Foco",
      statFocusValue: "Frontend",
      statApproach: "Abordagem",
      statApproachValue: "Performance",
    },
    skillsSection: {
      tag: "// Tecnologias e Habilidades",
      title: "Competências Técnicas",
      subtitle: "Tecnologias e metodologias que utilizo para criar soluções digitais de alto impacto.",
      frontend: "Frontend Development",
      analysis: "Análise de Sistemas",
      tools: "Ferramentas & Métodos",
      soft: "Soft Skills",
    },
    skills: {
      frontend: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Design Responsivo", "Acessibilidade (WCAG)"],
      analysis: ["Testes Funcionais", "Validação de Regras", "Análise de Logs", "SQL & Banco de Dados", "Documentação Técnica"],
      tools: ["Git & GitHub", "VS Code", "Figma", "Ambientes Cloud", "Metodologias Ágeis", "CI/CD Básico"],
      soft: ["Resolução de Problemas", "Comunicação Técnica", "Trabalho em Equipe", "Aprendizado Contínuo", "Pensamento Analítico"],
    },
    projectsSection: {
      tag: "// Estudos de Caso",
      title: "Projetos",
      subtitle:
        "Cada projeto representa um desafio único e uma oportunidade de entregar valor através de soluções bem pensadas.",
      categories: ["Todos", "Frontend", "Fullstack", "Aplicação web", "Site institucional"],
      caseStudyLabels: projectCaseStudyLabels.pt,
      performanceNote: "Não foram realizados testes de desempenho nem uma auditoria independente de segurança nesta análise pública.",
      challengeLabel: "O Desafio",
      solutionLabel: "A Solução",
      contributionLabel: "Minha Contribuição",
      learningsLabel: "Aprendizados",
      impactLabel: "Impacto",
      techLabel: "Tecnologias",
      showLess: "Mostrar Menos",
      seeCaseStudy: "VER ESTUDO DE CASO",
      seeProject: "Ver Projeto",
      moreComing: "// Mais projetos em desenvolvimento...",
      seeGithub: "Ver GitHub Profile",
    },
    projects: [
      featuredProjects.pt.sicon,
      featuredProjects.pt.ecoverde,
      {
        name: "Feline Care",
        category: "Frontend",
        description:
          "Aplicação web dedicada ao cuidado de felinos com informações sobre saúde, nutrição e bem-estar animal.",
        challenge:
          "Tutores de gatos buscavam uma fonte confiável e organizada de informações sobre cuidados felinos, desde alimentação até saúde preventiva.",
        solution:
          "Desenvolvi uma aplicação com arquitetura de informação clara, categorizando conteúdos por temas de cuidado, com busca facilitada e design amigável.",
        contribution:
          "Responsável pelo design da experiência do usuário, desenvolvimento frontend completo e organização da estrutura de conteúdo.",
        learnings:
          "Aperfeiçoei habilidades em arquitetura de informação e criação de interfaces que priorizam a legibilidade e navegação intuitiva.",
        impact:
          "Recurso centralizado que ajuda tutores a cuidar melhor de seus felinos com informações organizadas e acessíveis.",
        tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Font Awesome", "Netlify"],
        highlights: ["UX Focado no Usuário", "Arquitetura de Informação", "Design Acessível", "Navegação Intuitiva"],
        link: "https://felinecare25.netlify.app/",
      },
      {
        name: "Tech Consult",
        category: "Frontend",
        description:
          "Landing page profissional para consultoria em tecnologia com apresentação de serviços, cases de sucesso e formulário de contato.",
        challenge:
          "Empresas de consultoria tecnológica precisavam de uma presença digital que transmitisse credibilidade, expertise e facilitasse a captação de leads qualificados.",
        solution:
          "Criei uma landing page de alta conversão com design profissional, seções estratégicas de serviços, depoimentos e CTAs otimizados para geração de leads.",
        contribution:
          "Desenvolvi o design completo, implementei animações de scroll, formulário de contato funcional e otimizei para SEO básico.",
        learnings:
          "Aprofundei conhecimentos em design de conversão, copywriting para web e técnicas de otimização de landing pages.",
        impact:
          "Presença digital profissional que fortalece a credibilidade da marca e facilita o primeiro contato com potenciais clientes.",
        tech: ["HTML5", "CSS3", "JavaScript", "Google Fonts", "Font Awesome", "Netlify"],
        highlights: ["Design Conversivo", "CTAs Estratégicos", "Formulário Integrado", "SEO Otimizado"],
        link: "https://techconsult25.netlify.app/",
      },
      featuredProjects.pt.electoral,
      {
        name: "Lord Perrout Advocacia",
        category: "Fullstack",
        description:
          "Site institucional para escritório de advocacia com apresentação de áreas de atuação, equipe e canais de atendimento.",
        challenge:
          "Escritório de advocacia precisava de uma presença digital sofisticada que transmitisse seriedade, competência e facilitasse o contato de potenciais clientes.",
        solution:
          "Desenvolvi um site institucional moderno com Next.js, apresentando áreas de atuação de forma clara, perfis da equipe e múltiplos canais de contato.",
        contribution:
          "Arquitetei o projeto com Next.js, implementei design responsivo com Tailwind CSS, e configurei deploy contínuo na Vercel.",
        learnings: "Consolidei conhecimentos em Next.js, Tailwind CSS e boas práticas de deploy com Vercel.",
        impact:
          "Presença digital premium que eleva a percepção de marca do escritório e facilita o contato de novos clientes.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React", "Vercel"],
        highlights: ["Next.js App Router", "Design Premium", "Performance A+", "Deploy Automatizado"],
        link: "https://v0-lordperrout-advocacia.vercel.app/",
      },
      featuredProjects.pt.eliasTechnology,
      featuredProjects.pt.dvPremium,
      {
        name: "Brasa Sabor",
        category: "Frontend",
        description:
          "Website para o Brasa Sabor, apresentando a identidade do negócio, seu cardápio e os principais canais de contato para os clientes.",
        challenge:
          "Criar uma presença digital atrativa e objetiva para facilitar o acesso às informações do restaurante e aproximar o público do negócio.",
        solution:
          "Desenvolvi uma experiência web responsiva com apresentação visual dos produtos, navegação simples e acesso direto ao site publicado.",
        contribution:
          "Implementei a interface frontend, organizei a hierarquia das informações e priorizei uma experiência clara em dispositivos móveis.",
        learnings:
          "Aprimorei a criação de interfaces para negócios de alimentação, com foco em apresentação visual e conversão de visitantes em clientes.",
        impact:
          "Presença digital acessível que ajuda o Brasa Sabor a divulgar seu negócio e facilita a descoberta de seus produtos pelos clientes.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
        highlights: ["Website Institucional", "Design Responsivo", "Negócio Local", "Experiência Mobile"],
        link: "https://brasa-sabor.vercel.app/",
      },
    ],
    experienceSection: {
      tag: "// Trajetória Profissional",
      title: "Experiência Profissional",
      responsibilitiesLabel: "Principais Responsabilidades",
      achievementsLabel: "Conquistas e Impacto",
      ready: "> Pronto para novos desafios e oportunidades",
    },
    experience: {
      title: "Aux. Administrativo",
      subtitle: "(Foco em Análise Técnica de Sistemas)",
      company: "HERA Informática",
      period: "11/2025 – 01/2026",
      description:
        "Atuação com foco técnico em análise e validação de sistemas corporativos, garantindo qualidade, conformidade e documentação adequada das soluções implementadas.",
      responsibilities: [
        "Análise e validação de regras de negócio em sistemas corporativos, garantindo aderência aos requisitos",
        "Execução de testes funcionais com documentação detalhada de cenários e resultados",
        "Investigação de incidentes técnicos através de análise de logs e rastreamento de problemas",
        "Consultas e validações em banco de dados para verificação de integridade de dados",
        "Elaboração de documentação técnica e manuais de usuário para sistemas internos",
        "Interface direta com equipes de desenvolvimento para reporte de bugs e melhorias",
      ],
      achievements: [
        "Documentação técnica que padronizou processos de validação",
        "Identificação proativa de inconsistências em regras de negócio",
        "Suporte técnico que reduziu tempo de resolução de incidentes",
      ],
      skills: ["SQL", "Análise de Logs", "Documentação Técnica", "Testes Funcionais", "Cloud", "Metodologias Ágeis"],
    },
    educationSection: {
      tag: "// Background Acadêmico",
      title: "Formação",
      coursesLabel: "Cursos Complementares",
    },
    education: {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "Universidade Estácio de Sá",
      period: "Conclusão: 07/2025",
      courses: [
        "Montagem e Manutenção de Computadores – FAETEC",
        "Técnico em Eletrônica – Escola Técnica ITU",
        "Web Designer (Illustrator e Photoshop) – Microlins",
        "Desenvolvimento Web Completo – Udemy (em andamento)",
      ],
    },
    contact: {
      tag: "// Vamos Conversar",
      title: "Contato",
      subtitle:
        "Estou disponível para novas oportunidades e projetos. Se você busca um profissional comprometido com qualidade e resultados, vamos conversar!",
      getInTouch: "Entrar em Contato",
      terminalText: '"Vamos construir algo incrível juntos!"',
    },
    footer: {
      role: "Desenvolvedor Web & Analista de Sistemas",
      tagline: "Transformando desafios em soluções digitais de alto impacto.",
      navigation: "Navegação",
      connect: "Conecte-se",
      rights: "© 2026 Rodrigo Elias. Todos os direitos reservados.",
      madeWith: "Feito com",
    },
    backToTop: "Voltar ao topo",
  },
  en: {
    meta: {
      title: "Rodrigo Elias | Web Developer & Systems Analyst",
      description:
        "Web Developer and Systems Analyst. I build accessible, responsive interfaces, combining frontend development with technical systems analysis.",
    },
    skipToContent: "Skip to main content",
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      available: "Available for opportunities",
      greeting: "Hi, I'm",
      name: "Rodrigo Elias",
      role: "Web Developer & Systems Analyst",
      intro:
        "I turn challenges into high-impact digital solutions. I combine frontend development with technical analysis to create accessible, performant interfaces that deliver real results.",
      stats: { projects: "Projects", responsive: "Responsive", accessible: "Accessible" },
      ctaProjects: "View Projects",
      ctaContact: "Get in Touch",
      codeComment: "// Professional profile",
    },
    about: {
      tag: "// My Professional Journey",
      title: "About Me",
      profileBadge: "Frontend & Technical Analysis",
      profileImageAlt: "Professional portrait of Rodrigo Elias smiling in a black suit and white shirt.",
      seeProjects: "View Projects",
      getInTouch: "Get in Touch",
      card1Title: "Results-Oriented",
      card1Text:
        "My passion for creating digital experiences translates into solutions that optimize processes and improve user interaction. Every project I build focuses on delivering measurable value, whether through more intuitive interfaces, more performant code, or more efficient systems.",
      card2Title: "Holistic Vision",
      card2Text:
        "My degree in Systems Analysis and Development gave me a solid foundation to understand not just the \u201Chow\u201D, but also the \u201Cwhy\u201D behind every solution. This vision lets me work from conception to validation, ensuring quality throughout the development cycle.",
      card3Title: "Continuous Learning",
      card3Text:
        "I believe the best code is the one that solves real problems elegantly and efficiently. I constantly seek to learn new technologies and methodologies, staying up to date with industry best practices to deliver solutions that exceed expectations.",
      statEducation: "Education",
      statEducationValue: "SAD",
      statFocus: "Focus",
      statFocusValue: "Frontend",
      statApproach: "Approach",
      statApproachValue: "Performance",
    },
    skillsSection: {
      tag: "// Technologies and Skills",
      title: "Technical Skills",
      subtitle: "Technologies and methodologies I use to create high-impact digital solutions.",
      frontend: "Frontend Development",
      analysis: "Systems Analysis",
      tools: "Tools & Methods",
      soft: "Soft Skills",
    },
    skills: {
      frontend: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Responsive Design", "Accessibility (WCAG)"],
      analysis: ["Functional Testing", "Rule Validation", "Log Analysis", "SQL & Databases", "Technical Documentation"],
      tools: ["Git & GitHub", "VS Code", "Figma", "Cloud Environments", "Agile Methodologies", "Basic CI/CD"],
      soft: ["Problem Solving", "Technical Communication", "Teamwork", "Continuous Learning", "Analytical Thinking"],
    },
    projectsSection: {
      tag: "// Case Studies",
      title: "Projects",
      subtitle:
        "Each project represents a unique challenge and an opportunity to deliver value through well-thought-out solutions.",
      categories: ["All", "Frontend", "Fullstack", "Web app", "Institutional site"],
      caseStudyLabels: projectCaseStudyLabels.en,
      performanceNote: "No performance tests or independent security audit were performed for this public review.",
      challengeLabel: "The Challenge",
      solutionLabel: "The Solution",
      contributionLabel: "My Contribution",
      learningsLabel: "Learnings",
      impactLabel: "Impact",
      techLabel: "Technologies",
      showLess: "Show Less",
      seeCaseStudy: "VIEW CASE STUDY",
      seeProject: "View Project",
      moreComing: "// More projects in development...",
      seeGithub: "View GitHub Profile",
    },
    projects: [
      featuredProjects.en.sicon,
      featuredProjects.en.ecoverde,
      {
        name: "Feline Care",
        category: "Frontend",
        description:
          "Web application dedicated to cat care with information on health, nutrition, and animal well-being.",
        challenge:
          "Cat owners were looking for a reliable and organized source of information on feline care, from feeding to preventive health.",
        solution:
          "I developed an application with clear information architecture, categorizing content by care topics, with easy search and a friendly design.",
        contribution:
          "Responsible for user experience design, complete frontend development, and content structure organization.",
        learnings:
          "I improved my skills in information architecture and creating interfaces that prioritize readability and intuitive navigation.",
        impact:
          "Centralized resource that helps owners better care for their cats with organized and accessible information.",
        tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Font Awesome", "Netlify"],
        highlights: ["User-Focused UX", "Information Architecture", "Accessible Design", "Intuitive Navigation"],
        link: "https://felinecare25.netlify.app/",
      },
      {
        name: "Tech Consult",
        category: "Frontend",
        description:
          "Professional landing page for a technology consultancy presenting services, success cases, and a contact form.",
        challenge:
          "Technology consulting companies needed a digital presence that conveyed credibility, expertise, and made it easier to capture qualified leads.",
        solution:
          "I created a high-conversion landing page with a professional design, strategic service sections, testimonials, and CTAs optimized for lead generation.",
        contribution:
          "I developed the complete design, implemented scroll animations, a functional contact form, and optimized for basic SEO.",
        learnings:
          "I deepened my knowledge of conversion design, web copywriting, and landing page optimization techniques.",
        impact:
          "Professional digital presence that strengthens brand credibility and facilitates first contact with potential clients.",
        tech: ["HTML5", "CSS3", "JavaScript", "Google Fonts", "Font Awesome", "Netlify"],
        highlights: ["Conversion Design", "Strategic CTAs", "Integrated Form", "SEO Optimized"],
        link: "https://techconsult25.netlify.app/",
      },
      featuredProjects.en.electoral,
      {
        name: "Lord Perrout Law Firm",
        category: "Fullstack",
        description:
          "Institutional website for a law firm presenting practice areas, team, and contact channels.",
        challenge:
          "The law firm needed a sophisticated digital presence that conveyed seriousness, competence, and made it easier for potential clients to get in touch.",
        solution:
          "I developed a modern institutional website with Next.js, clearly presenting practice areas, team profiles, and multiple contact channels.",
        contribution:
          "I architected the project with Next.js, implemented responsive design with Tailwind CSS, and set up continuous deployment on Vercel.",
        learnings: "I consolidated my knowledge of Next.js, Tailwind CSS, and best deployment practices with Vercel.",
        impact:
          "Premium digital presence that elevates the firm's brand perception and makes it easier for new clients to get in touch.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React", "Vercel"],
        highlights: ["Next.js App Router", "Premium Design", "A+ Performance", "Automated Deploy"],
        link: "https://v0-lordperrout-advocacia.vercel.app/",
      },
      featuredProjects.en.eliasTechnology,
      featuredProjects.en.dvPremium,
      {
        name: "Brasa Sabor",
        category: "Frontend",
        description:
          "Website for Brasa Sabor, presenting the business identity, menu, and main contact channels for customers.",
        challenge:
          "Create an attractive and objective digital presence that makes restaurant information easy to access and brings the audience closer to the business.",
        solution:
          "I built a responsive web experience with visual product presentation, simple navigation, and direct access to the published website.",
        contribution:
          "I implemented the frontend interface, organized the information hierarchy, and prioritized a clear experience on mobile devices.",
        learnings:
          "I improved my ability to create interfaces for food businesses, focusing on visual presentation and converting visitors into customers.",
        impact:
          "An accessible digital presence that helps Brasa Sabor promote its business and makes it easier for customers to discover its products.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
        highlights: ["Institutional Website", "Responsive Design", "Local Business", "Mobile Experience"],
        link: "https://brasa-sabor.vercel.app/",
      },
    ],
    experienceSection: {
      tag: "// Professional Path",
      title: "Professional Experience",
      responsibilitiesLabel: "Key Responsibilities",
      achievementsLabel: "Achievements and Impact",
      ready: "> Ready for new challenges and opportunities",
    },
    experience: {
      title: "Administrative Assistant",
      subtitle: "(Focus on Technical Systems Analysis)",
      company: "HERA Informática",
      period: "11/2025 – 01/2026",
      description:
        "Technical focus on analysis and validation of corporate systems, ensuring quality, compliance, and proper documentation of implemented solutions.",
      responsibilities: [
        "Analysis and validation of business rules in corporate systems, ensuring adherence to requirements",
        "Execution of functional tests with detailed documentation of scenarios and results",
        "Investigation of technical incidents through log analysis and problem tracking",
        "Database queries and validations to verify data integrity",
        "Development of technical documentation and user manuals for internal systems",
        "Direct interface with development teams to report bugs and improvements",
      ],
      achievements: [
        "Technical documentation that standardized validation processes",
        "Proactive identification of inconsistencies in business rules",
        "Technical support that reduced incident resolution time",
      ],
      skills: ["SQL", "Log Analysis", "Technical Documentation", "Functional Testing", "Cloud", "Agile Methodologies"],
    },
    educationSection: {
      tag: "// Academic Background",
      title: "Education",
      coursesLabel: "Complementary Courses",
    },
    education: {
      degree: "Systems Analysis and Development",
      institution: "Universidade Estácio de Sá",
      period: "Completion: 07/2025",
      courses: [
        "Computer Assembly and Maintenance – FAETEC",
        "Electronics Technician – Escola Técnica ITU",
        "Web Designer (Illustrator and Photoshop) – Microlins",
        "Complete Web Development – Udemy (in progress)",
      ],
    },
    contact: {
      tag: "// Let's Talk",
      title: "Contact",
      subtitle:
        "I'm available for new opportunities and projects. If you're looking for a professional committed to quality and results, let's talk!",
      getInTouch: "Get in Touch",
      terminalText: '"Let\'s build something amazing together!"',
    },
    footer: {
      role: "Web Developer & Systems Analyst",
      tagline: "Turning challenges into high-impact digital solutions.",
      navigation: "Navigation",
      connect: "Connect",
      rights: "© 2026 Rodrigo Elias. All rights reserved.",
      madeWith: "Made with",
    },
    backToTop: "Back to top",
  },
  es: {
    meta: {
      title: "Rodrigo Elias | Desarrollador Web & Analista de Sistemas",
      description:
        "Desarrollador Web y Analista de Sistemas. Construyo interfaces accesibles y responsivas, combinando el desarrollo frontend con el análisis técnico de sistemas.",
    },
    skipToContent: "Ir al contenido principal",
    nav: {
      about: "Sobre",
      skills: "Competencias",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Formación",
      contact: "Contacto",
    },
    hero: {
      available: "Disponible para oportunidades",
      greeting: "Hola, soy",
      name: "Rodrigo Elias",
      role: "Desarrollador Web & Analista de Sistemas",
      intro:
        "Transformo desafíos en soluciones digitales de alto impacto. Combino el desarrollo frontend con el análisis técnico para crear interfaces accesibles, performantes y que generan resultados reales.",
      stats: { projects: "Proyectos", responsive: "Responsivos", accessible: "Accesible" },
      ctaProjects: "Ver Proyectos",
      ctaContact: "Ponerse en Contacto",
      codeComment: "// Perfil profesional",
    },
    about: {
      tag: "// Mi Trayectoria Profesional",
      title: "Sobre Mí",
      profileBadge: "Frontend & Análisis Técnico",
      profileImageAlt: "Retrato profesional de Rodrigo Elias sonriendo, con traje negro y camisa blanca.",
      seeProjects: "Ver Proyectos",
      getInTouch: "Ponerse en Contacto",
      card1Title: "Orientado a Resultados",
      card1Text:
        "Mi pasión por crear experiencias digitales se traduce en soluciones que optimizan procesos y mejoran la interacción del usuario. Cada proyecto que desarrollo se enfoca en entregar valor medible, ya sea a través de interfaces más intuitivas, código más performante o sistemas más eficientes.",
      card2Title: "Visión Holística",
      card2Text:
        "Mi formación en Análisis y Desarrollo de Sistemas me brindó una base sólida para entender no solo el \u201Ccómo\u201D, sino también el \u201Cporqué\u201D detrás de cada solución. Esta visión me permite trabajar desde la concepción hasta la validación, garantizando calidad en todo el ciclo de desarrollo.",
      card3Title: "Aprendizaje Continuo",
      card3Text:
        "Creo que el mejor código es aquel que resuelve problemas reales de forma elegante y eficiente. Busco constantemente aprender nuevas tecnologías y metodologías, manteniéndome actualizado con las mejores prácticas del mercado para entregar soluciones que superen las expectativas.",
      statEducation: "Formación",
      statEducationValue: "ADS",
      statFocus: "Enfoque",
      statFocusValue: "Frontend",
      statApproach: "Enfoque",
      statApproachValue: "Rendimiento",
    },
    skillsSection: {
      tag: "// Tecnologías y Habilidades",
      title: "Competencias Técnicas",
      subtitle: "Tecnologías y metodologías que utilizo para crear soluciones digitales de alto impacto.",
      frontend: "Desarrollo Frontend",
      analysis: "Análisis de Sistemas",
      tools: "Herramientas & Métodos",
      soft: "Habilidades Blandas",
    },
    skills: {
      frontend: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Diseño Responsivo", "Accesibilidad (WCAG)"],
      analysis: ["Pruebas Funcionales", "Validación de Reglas", "Análisis de Logs", "SQL & Bases de Datos", "Documentación Técnica"],
      tools: ["Git & GitHub", "VS Code", "Figma", "Entornos Cloud", "Metodologías Ágiles", "CI/CD Básico"],
      soft: ["Resolución de Problemas", "Comunicación Técnica", "Trabajo en Equipo", "Aprendizaje Continuo", "Pensamiento Analítico"],
    },
    projectsSection: {
      tag: "// Casos de Estudio",
      title: "Proyectos",
      subtitle:
        "Cada proyecto representa un desafío único y una oportunidad de entregar valor a través de soluciones bien pensadas.",
      categories: ["Todos", "Frontend", "Fullstack", "Aplicación web", "Sitio institucional"],
      caseStudyLabels: projectCaseStudyLabels.es,
      performanceNote: "No se realizaron pruebas de rendimiento ni una auditoría de seguridad independiente en esta revisión pública.",
      challengeLabel: "El Desafío",
      solutionLabel: "La Solución",
      contributionLabel: "Mi Contribución",
      learningsLabel: "Aprendizajes",
      impactLabel: "Impacto",
      techLabel: "Tecnologías",
      showLess: "Mostrar Menos",
      seeCaseStudy: "VER ESTUDIO DE CASO",
      seeProject: "Ver Proyecto",
      moreComing: "// Más proyectos en desarrollo...",
      seeGithub: "Ver Perfil de GitHub",
    },
    projects: [
      featuredProjects.es.sicon,
      featuredProjects.es.ecoverde,
      {
        name: "Feline Care",
        category: "Frontend",
        description:
          "Aplicación web dedicada al cuidado de felinos con información sobre salud, nutrición y bienestar animal.",
        challenge:
          "Los dueños de gatos buscaban una fuente confiable y organizada de información sobre el cuidado felino, desde la alimentación hasta la salud preventiva.",
        solution:
          "Desarrollé una aplicación con arquitectura de información clara, categorizando contenidos por temas de cuidado, con búsqueda facilitada y un diseño amigable.",
        contribution:
          "Responsable del diseño de la experiencia de usuario, desarrollo frontend completo y organización de la estructura de contenido.",
        learnings:
          "Perfeccioné habilidades en arquitectura de información y creación de interfaces que priorizan la legibilidad y la navegación intuitiva.",
        impact:
          "Recurso centralizado que ayuda a los dueños a cuidar mejor de sus felinos con información organizada y accesible.",
        tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Font Awesome", "Netlify"],
        highlights: ["UX Centrado en el Usuario", "Arquitectura de Información", "Diseño Accesible", "Navegación Intuitiva"],
        link: "https://felinecare25.netlify.app/",
      },
      {
        name: "Tech Consult",
        category: "Frontend",
        description:
          "Landing page profesional para una consultoría tecnológica con presentación de servicios, casos de éxito y formulario de contacto.",
        challenge:
          "Las empresas de consultoría tecnológica necesitaban una presencia digital que transmitiera credibilidad, experiencia y facilitara la captación de leads calificados.",
        solution:
          "Creé una landing page de alta conversión con diseño profesional, secciones estratégicas de servicios, testimonios y CTAs optimizados para la generación de leads.",
        contribution:
          "Desarrollé el diseño completo, implementé animaciones de scroll, un formulario de contacto funcional y optimicé para SEO básico.",
        learnings:
          "Profundicé conocimientos en diseño de conversión, copywriting para web y técnicas de optimización de landing pages.",
        impact:
          "Presencia digital profesional que fortalece la credibilidad de la marca y facilita el primer contacto con clientes potenciales.",
        tech: ["HTML5", "CSS3", "JavaScript", "Google Fonts", "Font Awesome", "Netlify"],
        highlights: ["Diseño de Conversión", "CTAs Estratégicos", "Formulario Integrado", "SEO Optimizado"],
        link: "https://techconsult25.netlify.app/",
      },
      featuredProjects.es.electoral,
      {
        name: "Lord Perrout Abogacía",
        category: "Fullstack",
        description:
          "Sitio institucional para un bufete de abogados con presentación de áreas de actuación, equipo y canales de atención.",
        challenge:
          "El bufete de abogados necesitaba una presencia digital sofisticada que transmitiera seriedad, competencia y facilitara el contacto de clientes potenciales.",
        solution:
          "Desarrollé un sitio institucional moderno con Next.js, presentando las áreas de actuación de forma clara, perfiles del equipo y múltiples canales de contacto.",
        contribution:
          "Diseñé el proyecto con Next.js, implementé diseño responsivo con Tailwind CSS y configuré el despliegue continuo en Vercel.",
        learnings: "Consolidé conocimientos en Next.js, Tailwind CSS y buenas prácticas de despliegue con Vercel.",
        impact:
          "Presencia digital premium que eleva la percepción de marca del bufete y facilita el contacto de nuevos clientes.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React", "Vercel"],
        highlights: ["Next.js App Router", "Diseño Premium", "Rendimiento A+", "Despliegue Automatizado"],
        link: "https://v0-lordperrout-advocacia.vercel.app/",
      },
      featuredProjects.es.eliasTechnology,
      featuredProjects.es.dvPremium,
      {
        name: "Brasa Sabor",
        category: "Frontend",
        description:
          "Sitio web para Brasa Sabor, presentando la identidad del negocio, su menú y los principales canales de contacto para los clientes.",
        challenge:
          "Crear una presencia digital atractiva y objetiva para facilitar el acceso a la información del restaurante y acercar al público al negocio.",
        solution:
          "Desarrollé una experiencia web responsiva con presentación visual de los productos, navegación sencilla y acceso directo al sitio publicado.",
        contribution:
          "Implementé la interfaz frontend, organicé la jerarquía de la información y prioricé una experiencia clara en dispositivos móviles.",
        learnings:
          "Perfeccioné la creación de interfaces para negocios de alimentación, enfocándome en la presentación visual y la conversión de visitantes en clientes.",
        impact:
          "Una presencia digital accesible que ayuda a Brasa Sabor a promocionar su negocio y facilita que los clientes descubran sus productos.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
        highlights: ["Sitio Institucional", "Diseño Responsivo", "Negocio Local", "Experiencia Mobile"],
        link: "https://brasa-sabor.vercel.app/",
      },
    ],
    experienceSection: {
      tag: "// Trayectoria Profesional",
      title: "Experiencia Profesional",
      responsibilitiesLabel: "Principales Responsabilidades",
      achievementsLabel: "Logros e Impacto",
      ready: "> Listo para nuevos desafíos y oportunidades",
    },
    experience: {
      title: "Aux. Administrativo",
      subtitle: "(Enfoque en Análisis Técnico de Sistemas)",
      company: "HERA Informática",
      period: "11/2025 – 01/2026",
      description:
        "Actuación con enfoque técnico en el análisis y validación de sistemas corporativos, garantizando calidad, conformidad y documentación adecuada de las soluciones implementadas.",
      responsibilities: [
        "Análisis y validación de reglas de negocio en sistemas corporativos, garantizando la adherencia a los requisitos",
        "Ejecución de pruebas funcionales con documentación detallada de escenarios y resultados",
        "Investigación de incidentes técnicos mediante análisis de logs y rastreo de problemas",
        "Consultas y validaciones en bases de datos para verificar la integridad de los datos",
        "Elaboración de documentación técnica y manuales de usuario para sistemas internos",
        "Interfaz directa con equipos de desarrollo para reportar errores y mejoras",
      ],
      achievements: [
        "Documentación técnica que estandarizó los procesos de validación",
        "Identificación proactiva de inconsistencias en reglas de negocio",
        "Soporte técnico que redujo el tiempo de resolución de incidentes",
      ],
      skills: ["SQL", "Análisis de Logs", "Documentación Técnica", "Pruebas Funcionales", "Cloud", "Metodologías Ágiles"],
    },
    educationSection: {
      tag: "// Background Académico",
      title: "Formación",
      coursesLabel: "Cursos Complementarios",
    },
    education: {
      degree: "Análisis y Desarrollo de Sistemas",
      institution: "Universidade Estácio de Sá",
      period: "Finalización: 07/2025",
      courses: [
        "Montaje y Mantenimiento de Computadoras – FAETEC",
        "Técnico en Electrónica – Escola Técnica ITU",
        "Web Designer (Illustrator y Photoshop) – Microlins",
        "Desarrollo Web Completo – Udemy (en curso)",
      ],
    },
    contact: {
      tag: "// Hablemos",
      title: "Contacto",
      subtitle:
        "Estoy disponible para nuevas oportunidades y proyectos. Si buscas un profesional comprometido con la calidad y los resultados, ¡hablemos!",
      getInTouch: "Ponerse en Contacto",
      terminalText: '"¡Construyamos algo increíble juntos!"',
    },
    footer: {
      role: "Desarrollador Web & Analista de Sistemas",
      tagline: "Transformando desafíos en soluciones digitales de alto impacto.",
      navigation: "Navegación",
      connect: "Conéctate",
      rights: "© 2026 Rodrigo Elias. Todos los derechos reservados.",
      madeWith: "Hecho con",
    },
    backToTop: "Volver arriba",
  },
}
