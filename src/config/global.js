export default {
  global: {
    componenteFormativo: 'Las TIC en la comunicación y colaboración en línea',
    descripcionCurso:
      'Las Tecnologías de Información y Comunicación han logrado importantes transformaciones en las bases de la sociedad actual, apropiando en el diario vivir diferentes herramientas digitales indispensables en la comunicación y la colaboración en línea, por ende, se hace indispensable conocer recursos informáticos para este fin, logrando incorporar una identidad digital pertinente y apropiada en la era digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.png'),
      },
    ],
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
        titulo: 'Las TIC en la comunicación y colaboración en línea',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características y clasificación de las TIC',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Ventajas y desventajas en el proceso comunicacional en línea',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Recursos informáticos en la comunicación y colaboración en línea',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'La comunicación síncrona y asíncrona',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Navegación y principios de seguridad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas y plataformas colaborativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto, usos y características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'El ciudadano digital del siglo XXI',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Herramientas digitales de uso gubernamental, personal y empresarial',
            hash: 't_3_3',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: 'Las TIC en la comunicación y colaboración en línea',
      referencia:
        'Belloch, C. (2017). Las tecnologías de información y comunicación. Universidad de Valencia.',
      tipo: 'PDF',
      link: 'https://www.uv.es/~bellochc/pdf/pwtic1.pdf ',
    },
    {
      tema: 'Las TIC en la comunicación y colaboración en línea',
      referencia:
        'Sánchez, E. (2008). Las Tecnologías de Información y Comunicación TIC desde una perspectiva social. <em>Revista Electrónica Educare</em>, 12, pp. 155-162.',
      tipo: 'PDF',
      link: 'https://www.redalyc.org/pdf/1941/194114584020.pdf ',
    },
    {
      tema: 'Navegación y principios de seguridad',
      referencia:
        'Instituto Nacional de Ciberseguridad. (2021). <em>Privacidad y seguridad en Internet.</em>',
      tipo: 'PDF',
      link:
        'https://www.aepd.es/sites/default/files/2019-11/guia-privacidad-y-seguridad-en-internet.pdf ',
    },
    {
      tema: 'El ciudadano digital del siglo XXI',
      referencia:
        'Guerrero, S. y Ripio, R. (2018). <em>La Ciudad Digital al Servicio del Ciudadano del Siglo XXI - Un ecosistema abierto de innovación.</em>',
      tipo: 'PDF',
      link:
        'https://www.minsait.com/sites/default/files/newsroom_documents/laciudaddigitalalserviciodelciudadanodelsigloxxi_0.pdf ',
    },
    {
      tema: 'El ciudadano digital del siglo XXI',
      referencia:
        'MinTIC. (2019). <em>Modelo de Madurez de Ciudades y Territorios Inteligentes.</em>',
      tipo: 'PDF',
      link:
        'https://gobiernodigital.mintic.gov.co/692/articles-179102_recurso_2.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Alfabetización digital',
      significado:
        'proceso formativo en habilidades y competencias básicas en el uso de las TIC y de la navegación en la red Internet.',
    },
    {
      termino: 'Amenaza',
      significado:
        'persona, evento o actividad para causar un daño potencial a otra persona por un sistema informático con fines delictivos.',
    },
    {
      termino: 'Automatizar',
      significado:
        'acción de usar herramientas informáticas en procesos que se llevaban tradicionalmente (manuales).',
    },
    {
      termino: 'Comunicación',
      significado:
        'proceso de interactuar, compartir y divulgar información propia de los seres humanos o individuos de una sociedad.',
    },
    {
      termino: 'Comunicación asíncrona',
      significado:
        'llamada comunicación diferida en el tiempo cuando no están conectadas al mismo tiempo.',
    },
    {
      termino: 'Comunicación síncrona',
      significado:
        'llamada comunicación simultánea o de tiempo real, cuando dos personas o un grupo están conectados e interactúan al tiempo.',
    },
    {
      termino: 'Herramienta de navegación',
      significado:
        'un programa que permite encontrar y visualizar información de hipertexto como Google Chrome, Opera, Edge entre otros.',
    },
    {
      termino: 'Herramienta de colaboración',
      significado:
        'herramientas digitales que permiten y promueven el trabajo en equipo, para la construcción colectiva de conocimiento o compartir experiencias.',
    },
    {
      termino: 'Medios interactivos',
      significado:
        'permiten interactuar de forma bidireccional, se usa normalmente para el intercambio de información entre las personas en medios digitales.',
    },
    {
      termino: 'Página web',
      terminoHtml: 'Página <em>web</em>',
      significado:
        'documento electrónico escrito normalmente en un lenguaje llamado HTML, que permite la visualización de contenidos de internet, contienen enlaces y datos multimedia',
    },
    {
      termino: 'Smartphone',
      terminoHtml: '<em>Smartphone</em>',
      significado:
        'teléfono celular inteligente, con la posibilidad de poderse actualizar, instalar programas y ser altamente productivo por las aplicaciones que contiene.',
    },
  ],
  referencias: [
    {
      referencia:
        'Belloch C, (2017) Las tecnologías de información y comunicación, Universidad de Valencia.',
      link: 'https://www.uv.es/~bellochc/pdf/pwtic1.pdf',
    },
    {
      referencia:
        'Cabero Almenara, J. (2015). Reflexiones educativas sobre las tecnologías de la información y la comunicación (TIC). Revista Tecnología, Ciencia Y Educación, (1), 19–27.',
      link: 'https://doi.org/10.51302/tce.2015.27',
    },
    {
      referencia: 'Cisco, (2021), el cambiante entorno de la red.',
      link:
        'http://itroque.edu.mx/cisco/cisco1/course/module1/1.4.1.3/1.4.1.3.html',
    },
    {
      referencia:
        'Flores D, (2020), La comunicación humana, San Luís Potosí: Universidad Autónoma de San Luís Potosí.',
      link:
        'http://www.ingenieria.uaslp.mx/Documents/Apuntes/HUMANIDADES%20B.pdf',
    },
    {
      referencia:
        'Guerrero S, Ripio R, (2018), La Ciudad Digital al Servicio del Ciudadano del Siglo XXI, Un ecosistema abierto de innovación, ',
      link:
        'https://www.minsait.com/sites/default/files/newsroom_documents/laciudaddigitalalserviciodelciudadanodelsigloxxi_0.pdf',
    },
    {
      referencia:
        'Instituto nacional de seguridad, (2021), Privacidad y seguridad en internet.',
      link:
        'https://www.aepd.es/sites/default/files/2019-11/guia-privacidad-y-seguridad-en-internet.pdf',
    },
    {
      referencia:
        'Mintic, (Diciembre de 2019),Modelo de Madurez de Ciudades y Territorios Inteligentes.',
      link:
        'https://gobiernodigital.mintic.gov.co/692/articles-179102_recurso_2.pdf',
    },
    {
      referencia:
        'Molina A, Roque, , Garcés B,, Rojas Y, Dulzaides M,, & Selín M. (2015). El proceso de comunicación mediado por las tecnologías de la información. Ventajas y desventajas en diferentes esferas de la vida social. <i>MediSur</i>, 13(4), 481-493. ',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1727-897X2015000400004&lng=es&tlng=es.',
    },
    {
      referencia:
        'Moreno E, (3 de octubre de 2010), Definición y clasificación de las TIC.',
      link: 'https://mariylastic.weebly.com',
    },
    {
      referencia:
        'Sánchez E, (20 de noviembre de 2017) Las tecnologías de información y comunicación TIC desde una perspectiva social.',
      link: 'https://www.redalyc.org/pdf/1941/194114584020.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Pedro Javier Lozada Villota',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional distrito capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate',
          cargo: 'Diseñador de Contenidos Digitales web',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes García',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jorge Armando Villamizar Moreno',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edgar Mauricio Cortes García',
          cargo: 'Actividad didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Fabian Robles Mendez',
          cargo: 'Desarrollo Front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andres Mauricio Santaella Ochoa',
          cargo: 'Soporte Front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
