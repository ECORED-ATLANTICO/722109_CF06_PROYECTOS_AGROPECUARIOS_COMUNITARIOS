export default {
  global: {
    Name: 'Gestión de proyectos comunitarios y desarrollo rural sostenible',
    Description:
      'Este componente formativo desarrolla herramientas para la gestión de proyectos comunitarios orientados al desarrollo rural sostenible. Aborda la formulación, ejecución y evaluación de iniciativas, promoviendo la participación comunitaria, la organización social y el uso responsable de los recursos naturales, integrando conocimientos teóricos y prácticos para fortalecer el bienestar y la sostenibilidad rural.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Proyectos comunitarios agropecuarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto, tipos y alcance',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Metodologías para la formulación y estructuración de proyectos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Actores, participación comunitaria y gestión del proyecto',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Técnicas de monitoreo, evaluación y ajuste',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Indicadores, presupuesto y cronograma',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Gestión de recursos, proveedores y gestión de financiación',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Normatividad aplicable',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunidad campesina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características socioculturales de la comunidad campesina',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Contexto político',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Actividades económicas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Dimensión ambiental',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Interacciones con entidades públicas y privadas',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Organizaciones comunitarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de organizaciones comunitarias',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Características',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Estructura organizativa',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Roles de los integrantes',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Grupos étnicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Características',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Dimensiones socioculturales',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Normativa nacional e internacional',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fuentes de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Métodos de consulta',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Plan de acción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos e importancia',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Características del plan de acción',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Aplicación del plan de acción',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Gestión ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Tipos de requerimientos ambientales',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Características de la gestión ambiental rural',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Normativa ambiental',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Gestión del recurso hídrico',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo: 'Técnicas de manejo y disposición de residuos',
            hash: 't_7_6',
          },
          {
            numero: '7.7',
            titulo: 'Criterios de reducción de emisiones de gases',
            hash: 't_7_7',
          },
          {
            numero: '7.8',
            titulo: 'Sostenibilidad ambiental',
            hash: 't_7_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722109_CF06_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Comunidad',
      significado:
        'Conjunto de personas que comparten un territorio, intereses, cultura o necesidades comunes y que interactúan para mejorar sus condiciones de vida.',
    },
    {
      termino: 'Concertación',
      significado:
        'Proceso de diálogo y acuerdo entre diferentes actores para tomar decisiones colectivas en beneficio de la comunidad.',
    },
    {
      termino: 'Cronograma',
      significado:
        'Herramienta de planificación que organiza las actividades de un proyecto en un periodo de tiempo determinado.',
    },
    {
      termino: 'Desarrollo rural',
      significado:
        'Proceso de mejoramiento de las condiciones sociales, económicas y ambientales de las poblaciones que habitan en zonas rurales.',
    },
    {
      termino: 'Diagnóstico participativo',
      significado:
        'Metodología que permite identificar problemas, necesidades y potencialidades de una comunidad mediante la participación de sus integrantes.',
    },
    {
      termino: 'Gestión comunitaria',
      significado:
        'Proceso mediante el cual una comunidad organiza, planifica y ejecuta acciones para resolver necesidades o mejorar su entorno.',
    },
    {
      termino: 'Indicadores',
      significado:
        'Medidas o variables que permiten evaluar el avance y los resultados de un proyecto.',
    },
    {
      termino: 'Línea base',
      significado:
        'Información inicial que describe la situación de una comunidad antes de iniciar un proyecto, utilizada como referencia para medir cambios.',
    },
    {
      termino: 'Participación comunitaria',
      significado:
        'Intervención activa de los miembros de la comunidad en la toma de decisiones y en la ejecución de proyectos.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'Documento que establece las actividades, responsables, recursos y tiempos necesarios para cumplir los objetivos de un proyecto.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'Estimación de los recursos financieros necesarios para desarrollar las actividades de un proyecto.',
    },
    {
      termino: 'Proyecto comunitario',
      significado:
        'Conjunto de actividades planificadas que buscan solucionar problemas o mejorar las condiciones de vida de una comunidad.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Capacidad de mantener en el tiempo los beneficios de un proyecto sin afectar los recursos naturales o sociales.',
    },
    {
      termino: 'Territorio',
      significado:
        'Espacio geográfico donde se desarrollan actividades sociales, económicas y culturales de una comunidad.',
    },
    {
      termino: 'Trabajo colaborativo',
      significado:
        'Forma de organización en la que varias personas o grupos cooperan para alcanzar objetivos comunes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asana. (2026, enero 14). <em>Project management phases: 5 steps to improve your workflow</em>.',
      link: 'https://asana.com/es/resources/project-management-phases',
    },
    {
      referencia:
        'Martínez, A. (1995). <em>El diagnóstico participativo: una herramienta de trabajo para las comunidades</em>. Bib. Orton IICA / CATIE.',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=QdkOAQAAIAAJ&oi=fnd&pg=PA10&dq=Diagn%C3%B3stico+participativo&ots=-iV_K4ng6C&sig=TQfTuQvMzTTGF4aZTj3wR-59894&redir_esc=y#v=onepage&q=Diagn%C3%B3stico%20participativo&f=false',
    },
    {
      referencia:
        'RoleCatcher. (2024). <em>Métodos de consulta</em>. RoleCatcher.',
      link:
        'https://rolecatcher.com/es/habilidades/conocimiento/negocios-administracion-y-derecho/negocios-y-administracion/metodos-de-consulta/',
    },
    {
      referencia:
        'Rus Arias, E. (2020, octubre 1). <em>Etapas de un proyecto</em>. Economipedia.',
      link: 'https://economipedia.com/definiciones/etapas-de-un-proyecto.html',
    },
    {
      referencia:
        'Teamleader. (2025, abril 17). <em>¿Qué es y para qué sirve un diagrama de Gantt?</em>',
      link: 'https://www.teamleader.eu/es/blog/diagrama-de-gantt',
    },
    {
      referencia:
        'Tristancho, C. (2025). <em>Seguimiento de proyectos: qué es y cómo hacerlo</em>. ProjectManager.',
      link: 'https://www.projectmanager.com/es/seguimiento-de-proyectos',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Nacional Ecosistema de Recursos Educativos Digitales (RED) - Profesional 06',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto Temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
