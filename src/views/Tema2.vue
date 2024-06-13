<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Recursos informáticos en la comunicación y colaboración en línea
    .row.mb-5.slideInUp
      .col-lg-2
        figure(data-aos="flip-left")
          img.nW(src="@/assets/curso/t2-ic1.svg", alt="imagen decorativa")
      .col-lg-10
        p Las personas cuando ingresan a la red no solo quieren consumir recursos y servicios, pues cuando estas se conectan, lo hacen principalmente para comunicarse y poder subir contenidos y estar más presentes digitalmente. Y de manera constante se está colaborando con los demás, esto hace que se generen habilidades y competencias de trabajo en equipo y aprendizaje continuo.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .bloque-texto-a.color-acento-botones.p-3.p-md-5.mb-5.dir-ltr
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4.shadow-box
                p Las herramientas y recursos que se proporcionan para la comunicación y colaboración en línea aprovechan diferentes formas y entornos desde los servicios de voz, video y teleconferencias en las actividades de colaboración. Así, la capacidad de colaborar en línea mejora todos los procesos comunicacionales de los usuarios, pues esta se hace de forma rápida y sencilla, rompiendo barreras y fronteras, y logra que su efectividad e innovación sean mucho más productivas en cualquier campo de aplicación.
            .col-lg-4.mb-4.mb-lg-0
              figure(data-aos="flip-left")
                img.nW(src="@/assets/curso/t2-i1.svg", alt="imagen decorativa")

    p.mb-5  La construcción de nuevos conocimientos y la colaboración en línea permiten el desenvolvimiento en entornos de comunicación fluidos, de forma autónoma y determinando la gestión de servicios como pieza clave en el mundo digital. Comunicarse y compartir recursos son habilidades que se deben dominar a través de las metodologías activas y así es como los avances informáticos posibilitan dichas labores en los entornos digitales.
    .spacer
    .corner-box.color-b2.p-4.mb-5.m-custom
      .row.align-items-center
        .col-lg-3
          .wrap-overflow
            figure(data-aos="flip-left")
              img(src="@/assets/curso/t2-i2.png", alt="personaje animado")
        .col-lg-9
          p.text-xl ¿Conoces las características clave para la comunicación y colaboración en línea? 
            span.text-normal A continuación, conozcamos cada una de ellas:
          //--.wrap-player
            audio(controls='')
              source(src='https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3' type='audio/mpeg')
              |  Your browser does not support the audio tag.
    br
    TabsB.color-secundario.mb-5
      .py-4.py-md-5(titulo="Apropiación de las competencias digitales" :icono="require('@/assets/curso/t3-tab-ic1.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Apropiación de las competencias digitales
            p Para apropiar el conocimiento de manera efectiva, se debe ser parte activa en el desarrollo de competencias digitales y tener una definición clara de la comunicación y colaboración digital; estas se pueden traducir en las acciones o actividades que un individuo desarrolla en un entorno digital, que no es otra cosa que la forma de expresarse, intercambiar o interactuar con otras personas en entornos virtuales, trasladando los entornos físicos y, por ende, se requiere de un conglomerado de conocimientos y habilidades para comunicarse y compartir con los demás.
          .col-md-4
            figure.slideInRight
              img(src='@/assets/curso/t2-t1.svg', alt='imagen decorativa')
      .py-4.py-md-5(titulo="Comunicación digital" :icono="require('@/assets/curso/t3-tab-ic2.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Comunicación digital
            p La comunicación digital, además de ser de tipo personal, va mucho más allá frente a las posibilidades que estas brindan, porque los entornos digitales permiten una serie de ventajas que se encuentran ligadas a las oportunidades. El uso constante y creciente de herramientas colaborativas en línea suponen nuevos retos de compartir, crear y divulgar información a través de las diferentes plataformas existentes, por ejemplo, Facebook, Twitter, YouTube, entre otras.
          .col-md-4
            figure.slideInRight
              img(src='@/assets/curso/t2-t2.svg', alt='imagen decorativa')

      .py-4.py-md-5(titulo="La vida digital" :icono="require('@/assets/curso/t3-tab-ic3.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 La vida digital
            p La realidad actual es clara, pues cada vez se ve en aumento dichos entornos virtuales y digitales, lo que hace presumir que la base de la sociedad está cambiando y acoplándose a las nuevas tendencias informáticas, que ha volcado todas las actividades sociales y la forma de hacer las cosas y combinadas con la vida digital.
          .col-md-4
            figure.slideInRight
              img(src='@/assets/curso/t2-t3.svg', alt='imagen decorativa')

    .row.mb-5
      .col-lg-5.d-none.d-md-block
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t2-i3.svg', alt='imagen decorativa')
      .col-lg-7
        p.text-bold.mb-3 Los siguientes son los aspectos a tener en cuenta en los entornos digitales:
        ul.lista-ul
          li(data-aos="flip-up")
            i.fas.fa-check
            p.mb-0 Interactuar a través de medios digitales y saber aplicarlos desde diferentes contextos.
          li(data-aos="flip-up")
            i.fas.fa-check
            p.mb-0  Compartir todo tipo de información y contenidos digitales de manera colaborativa.
          li(data-aos="flip-up")
            i.fas.fa-check
            p.mb-0  Participar en comunidades virtuales, ya sean personales, públicas o privadas para encontrar las herramientas y tecnologías más adecuadas.
          li(data-aos="flip-up")
            i.fas.fa-check
            p.mb-0  Usar herramientas y tecnologías digitales para la colaboración.
          li(data-aos="flip-up")
            i.fas.fa-check
            p.mb-0  Realizar producciones digitales con recursos que sean apropiados para un gran conjunto de personas.
          li(data-aos="flip-up")
            i.fas.fa-check
            p.mb-0  Tener un comportamiento en la red adecuado para tener una buena comunicación.
          li(data-aos="flip-up")
            i.fas.fa-check
            p.mb-0  Poseer una identidad digital, siendo parte de una comunidad en línea, teniendo en cuenta la importancia de la protección en el mundo digital.




    #t_2_1.titulo-segundo
      h2 2.1 La comunicación síncrona y asíncrona
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .bloque-texto-a.color-acento-botones.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              .h4 Las nuevas metodologías activas del siglo XXI han requerido que los medios de comunicación se amplíen con los canales de interacción.
            .col-lg-8
              .bloque-texto-a__texto.p-4.shadow-box
                p Allí se necesita que los actores involucrados en estos procesos sean parte cooperante y colaborativa, exigiendo que cada quien se convierta en el propio protagonista de lo que comunica y desarrolle en estos medios digitales, por su inmediatez dichos procesos comunicativos favorecen sustancialmente la posibilidad de aumentar tus conocimientos.
    
    .corner-box.color-b3.p-4.mb-5.m-custom.flipped-corners
      .row.align-items-center.justify-content-center
        .col-lg-8
          p.text-xl 
            span.text-normal  Es así como las diversas herramientas digitales de comunicación te dan un abanico de opciones para analizarlas y clasificarlas según su uso y escoger las más idóneas.  
            span Teniendo en cuenta la forma de cómo se puede intercambiar información y en el tiempo que estas se realicen, se puede tener dos tipos de comunicación: sincrónicas y asincrónicas, esto es, en función de la simultaneidad con la que se envía y recibe cada mensaje. 
          //--.wrap-player
            audio(controls='')
              source(src='https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3' type='audio/mpeg')
              |  Your browser does not support the audio tag.
        .col-lg-2
          .wrap-overflow
            figure(data-aos="flip-left")
              img(src="@/assets/curso/t1-4.png", alt="personaje animado")
        

    .row.mb-5.slideInUp
      .col-lg-2
        figure(data-aos="flip-left")
          img.nW(src="@/assets/curso/t2-ic2.svg", alt="imagen decorativa")
      .col-lg-10(data-aos="flip-right")
        p En todo proceso de comunicación y participativo en medios digitales, la comunicación sincrónica y asincrónica toma un valor relevante, ya que las dos formas dan mejores posibilidades de cómo comunicarse con quien se desee y en el momento que se quiera, ya sea por medio de mensajería, chats, foros entre otros; así, el conocer las posibilidades de las herramientas de comunicación será vital para elegir las que más se ajuste a las actividades y sea relevante a la hora de compartir y comunicar.
    .spacer
    .corner-box.color-b1.p-4.mb-5.m-custom
      .row.align-items-center
        .col-lg-3
          .wrap-overflow
            figure(data-aos="flip-left")
              img(src="@/assets/curso/t2-i5.png", alt="personaje animado")
        .col-lg-9
          p.text-xl ¿Sabes acerca de la diversidad de herramientas digitales?  
            span.text-normal Te invitamos a conocer su clasificación. 
          //--.wrap-player
            audio(controls='')
              source(src='https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3' type='audio/mpeg')
              |  Your browser does not support the audio tag.

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Herramientas síncronas")
        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0
            h4 Herramientas síncronas
            p.mb-4 Te permiten tener una comunicación en tiempo real, para ello los individuos involucrados deben tener una conexión al mismo momento.
            .row.justify-content-center
              .col-lg-3
                .tarjeta.color-p1.text-center.p-4.h-100(data-aos="flip-up")
                  figure
                    img.nW.centered(src="@/assets/curso/t3-c1.svg", alt="icono decorativo")
                  h3  Chat
                  p Comunicación escrita a través de Internet entre dos o más personas.
              .col-lg-3
                .tarjeta.color-p2.text-center.p-4.h-100(data-aos="flip-up")
                  figure
                    img.nW.centered(src="@/assets/curso/t3-c2.svg", alt="icono decorativo")
                  h3  Videoconferencia
                  p Comunicación mediante audio y video de forma simultánea. 
              .col-lg-3
                .tarjeta.color-p1.text-center.p-4.h-100(data-aos="flip-up")
                  figure
                    img.nW.centered(src="@/assets/curso/t3-c3.svg", alt="icono decorativo")
                  h3  Pizarra digital
                  p Conversaciones con audio y video de forma simultánea para clases y reuniones.
              .col-lg-3
                .tarjeta.color-p2.text-center.p-4.h-100(data-aos="flip-up")
                  figure
                    img.nW.centered(src="@/assets/curso/t3-c4.svg", alt="icono decorativo")
                  h3  Mensajería instantánea
                  p Comunicación de mensajes escritos, audios y videos en tiempo real. 

      .py-3.py-md-4(titulo="Herramientas asíncronas")
        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0
            h4 Herramientas asíncronas
            p.mb-4 La comunicación asincrónica es la que se permite en tiempo compartido y no hay necesidad que los participantes involucrados estén conectados al mismo tiempo.
            .row.justify-content-center
              .col-lg-4
                .tarjeta.color-p1.text-center.p-4.h-100(data-aos="flip-up")
                  figure
                    img.nW.centered(src="@/assets/curso/t3-c5.svg", alt="icono decorativo")
                  h3  Correo electrónico
                  p Permite enviar y recibir información de manera instantánea.
              .col-lg-4
                .tarjeta.color-p2.text-center.p-4.h-100(data-aos="flip-up")
                  figure
                    img.nW.centered(src="@/assets/curso/t3-c6.svg", alt="icono decorativo")
                  h3  Lista de distribución
                  p Posibilita enviar mensajes a partir de categorías de usuario. 
              .col-lg-4
                .tarjeta.color-p2.text-center.p-4.h-100(data-aos="flip-up")
                  figure
                    img.nW.centered(src="@/assets/curso/t3-c6.svg", alt="icono decorativo")
                  h3  Foros
                  p Aplicación que permite la discusión y opiniones en línea.  
              .clearfix.mb-4
              .col-lg-4
                .tarjeta.color-p1.text-center.p-4.h-100(data-aos="flip-up")
                  figure
                    img.nW.centered(src="@/assets/curso/t3-c7.svg", alt="icono decorativo")
                  h3  Wikis
                  p Son webs que permite la edición de contenido de manera colaborativa.
              .col-lg-4
                .tarjeta.color-p2.text-center.p-4.h-100(data-aos="flip-up")
                  figure
                    img.nW.centered(src="@/assets/curso/t3-c8.svg", alt="icono decorativo")
                  h3  Documentos compartidos
                  p Permite subir a la nube información para que se pueda acceder desde diferentes dispositivos.

    h3.titulo-tercero Acceso al mundo digital
    p.mb-5  Los accesos y herramientas del mundo digital generan brechas que han propiciado diversos cambios en la sociedad actual, han transformado la forma como se genera la comunicación con los demás, de relacionarse, frente a las compras o venta de productos, cómo se aprende y hasta su utilización en entornos laborales, incluyendo entre ellas, el ocio y el entretenimiento.
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Interacción en el mundo digital")
        .row.justify-content-center
          .col-md-6
            figure
              img.nW.centered(src="@/assets/curso/t2-i6.jpg", alt="icono decorativo")
          .col-md-6.mb-4.mb-md-0
            h4 Interacción en el mundo digital
            p.mb-3 El mundo cambia y seguirá tomando nuevos rumbos de forma sustancial y acelerada, encaminado a ser más digital, debido a que millones de personas tienen acceso ilimitado a Internet a través de los dispositivos como computadores, celulares, tabletas e incluso televisores de tipo #[em Smart] y las innumerables herramientas y aplicaciones que presentan múltiples posibilidades de estar conectados y en constante comunicación de forma permanente. 
            p Esta posibilidad de comunicación de forma inmediata con las demás personas ha permitido obtener información al instante de todo lo que pasa en el mundo, al igual que aprender, enseñar, adquirir productos y servicios y las nuevas oportunidades en todas las esferas de la sociedad en cualquier momento y lugar.

          
      .py-3.py-md-4(titulo="Inclusión en el mundo digital")
        .row.justify-content-center
          .col-md-6
            figure
              img.nW.centered(src="@/assets/curso/t2-i6.jpg", alt="icono decorativo")
          .col-md-6.mb-4.mb-md-0
            h4 Inclusión en el mundo digital
            p El mundo digital debe ser inclusivo, su acceso es ilimitado y público para que así se pueda acceder a él sin restricciones y cuando se esté preparado. Para ello es importante tener en cuenta que la información está al alcance de la mano y sería deseable que el conocimiento generado con dicha información, pueda ser compartido.

      .py-3.py-md-4(titulo="Brecha digital")
        .row.justify-content-center
          .col-md-6
            figure
              img.nW.centered(src="@/assets/curso/t2-i6.jpg", alt="icono decorativo")
          .col-md-6.mb-4.mb-md-0
            h4 Brecha digital
            p.mb-3 No se puede dejar de lado, y mucho menos ignorar que, muchas veces, la ignorancia tecnológica genera una brecha digital. A esto se le debe dar solución por medio de iniciativas que den cabida a cualquier individuo al <b>nuevo mundo digital</b>, tomando como referente lo siguiente:
            ul.lista-ul
              li
                i.fas.fa-check
                p <b>Alfabetización digital como competencia básica</b>, se debe garantizar que todas las personas logren aprender a utilizar de forma adecuada las herramientas tecnológicas que mejoran la calidad de vida.
              li
                i.fas.fa-check
                p #[b Mejorar el aprovechamiento y el acceso a Internet], para estar inmersos en los cambios digitales y ser parte del mundo digital se debe garantizar una conexión en todos los rincones del planeta, muchos países han adoptado medidas públicas de conexión a Internet en parques, bibliotecas, colegios, universidades, lo que acerca a todas las posibilidades de ser parte de este nuevo fenómeno social para lograr una inclusión social completa.
              li
                i.fas.fa-check
                p #[b Ofrecer contenidos en Internet que sean fáciles y accesibles], la información debe ser simple y pensada para todo tipo de personas, edades, costumbres, etc., como eje social del conocimiento.

      .py-3.py-md-4(titulo="Conexión en el mundo digital")
        .row.justify-content-center
          .col-md-6
            figure
              img.nW.centered(src="@/assets/curso/t2-i6.jpg", alt="icono decorativo")
          .col-md-6.mb-4.mb-md-0
            h4 Conexión en el mundo digital
            p Bill Gates, presidente de la compañía Microsoft, advirtió sobre la evolución del acceso digital diciendo: #[b “habrá dos tipos de negocios en el siglo XXI, aquellos que estén en Internet y aquellos que ya no existan”], aduciendo dicha frase hasta el punto en que “si una persona no está conectada, no existe”.


    Separador
    br
    br
    #t_2_2.titulo-segundo
      h2 2.2 Navegación y principios de seguridad

    .corner-box.color-b4.p-4.mb-5.m-custom
      .row.align-items-center
        .col-lg-3
          .wrap-overflow
            figure(data-aos="flip-left")
              img(src="@/assets/curso/t2-i6.png", alt="personaje animado")
        .col-lg-9
          p.text-xl El mundo digital se puede explorar por medio de un dispositivo electrónico ya sea portátil o fijo que posea una conexión para explorar todo lo que esté al alcance y se quiera.  
            span.text-normal La gran convergencia del uso masivo de dichos dispositivos inteligentes, en especial el uso de celulares como los <i>smartphones</i>, y la aparición de las redes de datos cada vez más veloces, hacen que todos los servicios de navegación en la red se puedan consumir en cualquier lugar y hora.
          .wrap-player
            audio(controls='')
              source(src='@/assets/curso/navegacion_y_principios.mp3' type='audio/mpeg')
              |  Your browser does not support the audio tag.

    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .bloque-texto-a.color-acento-botones.p-3.p-md-5.mb-5.dir-ltr
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4.shadow-box
                p.mb-3  Para poder acceder a toda la información que hay en Internet, basta con dar clic o pulsar #[em #[b touch]] en los enlaces que se encuentran en las diferentes páginas electrónicas, lo que permite ingresar a un mundo de opciones, según las necesidades.
                p.mb-4  Para navegar en la red, se debe:
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    p.mb-0 Tener la última versión de los navegadores.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    p.mb-0 Configurar la página de home del navegador con un buscador de confianza.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    p.mb-0 Digitar las direcciones electrónicas completas y así evitar páginas fraudulentas.                   
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    p.mb-0  Poner en favoritos las páginas que más se visiten. 
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    p.mb-0  Acceder a páginas seguras y certificadas.
                  li 
                    .lista-ol--cuadro__vineta
                      span 6
                    p.mb-0  Evitar usar las opciones de atrás y adelante, pues esto aumenta el tráfico de datos.                   
                  li 
                    .lista-ol--cuadro__vineta
                      span 7
                    p.mb-0  Aceptar los <i>plugin o cookies</i> de sitios de confianza.
                  li 
                    .lista-ol--cuadro__vineta
                      span 8
                    p.mb-0 Utilizar pestañas de navegación para optimizar la navegación.                    


            .col-lg-4.mb-4.mb-lg-0
              figure(data-aos="flip-left")
                img.nW(src="@/assets/curso/t2-i7.svg", alt="imagen decorativa")

    .spacer
    .corner-box.color-b2.p-4.mb-5.m-custom
      .row.align-items-center
        .col-lg-3
          .wrap-overflow
            figure(data-aos="fade-up")
              img.nW(src="@/assets/curso/t2-i8.png", alt="personaje animado")
        .col-lg-9
          p.text-xl ¿Conoces los peligros y amenazas que ponen en peligro tu información e integridad?  
            span.text-normal Aquí te damos algunos consejos y principios de seguridad prácticos para que navegues de forma segura.
          //--.wrap-player
            audio(controls='')
              source(src='https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3' type='audio/mpeg')
              |  Your browser does not support the audio tag.

    .neg-margin-x.bg-soft-green.mb-5
      .tarjeta.p-4.mb-5
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              p No accedas a enlaces sospechosos, esta es una práctica muy común de los ciberdelincuentes para hacerte caer en fraudes o infectarte con códigos maliciosos para robar información, pueden estar presentes en mensajes, correos electrónicos, noticias falsas, entre otros.
            .col-md-6
              figure
                img(src='@/assets/curso/t3-s1.png', alt='imagen decorativa')  
          .row
            .col-md-6.mb-4.mb-md-0
              p No accedas a sitios #[em web] no seguros, debes tener en cuenta que la dirección que estés visitando debe contener un candado al frente de la URL, hoy en día con la existencia de la ingeniería social, pueden recomendarte sitios de tu interés para captar tu atención, pero el único fin es robar tus datos e información.
            .col-md-6
              figure
                img(src='@/assets/curso/t3-s2.png', alt='imagen decorativa')  

          .row
            .col-md-6.mb-4.mb-md-0
              p Analiza los resultados que te brindan los buscadores, muchas veces lo que arrojan tus búsquedas se prioriza en el navegador de primero, las páginas que no son certificadas o seguras.
            .col-md-6
              figure
                img(src='@/assets/curso/t3-s3.png', alt='imagen decorativa')  

          .row
            .col-md-6.mb-4.mb-md-0
              p Evita realizar transacciones comerciales, la información es muy sensible como contraseñas o claves de tarjetas de crédito que pueden caer en manos inescrupulosas, si es así comprueba que el protocolo seguro https://, siempre esté presente.
            .col-md-6
              figure
                img(src='@/assets/curso/t3-s4.png', alt='imagen decorativa')  

          .row
            .col-md-6.mb-4.mb-md-0
              p Cierra tus sesiones, a veces olvidas salir de tus cuentas dejando toda tu información a la orden de la mano de otro usuario que puede usar tu información con fines delictivos o bajar tu reputación.
            .col-md-6
              figure
                img(src='@/assets/curso/t3-s5.png', alt='imagen decorativa')  

          .row
            .col-md-6.mb-4.mb-md-0
              p Navega por incógnito, hoy en día algunos navegadores tienen esa opción para que tus datos e información no se almacenen en tus dispositivos, sobre todo cuando realices cualquier operación que tenga información sensible.
            .col-md-6
              figure
                img(src='@/assets/curso/t3-s6.png', alt='imagen decorativa')  

          .row
            .col-md-6.mb-4.mb-md-0
              p No realices descargas de archivos o programas de páginas no oficiales y verifica que las aplicaciones de seguridad de tu navegador estén actualizadas.
            .col-md-6
              figure
                img(src='@/assets/curso/t3-s7.png', alt='imagen decorativa')  

          .row
            .col-md-6.mb-4.mb-md-0
              p Cambia tus contraseñas, es importante que tu seguridad esté siempre latente, con periodicidad hay que renovar tus claves, que sean alfanuméricas y que sean diferentes, no uses siempre la misma en todo.
            .col-md-6
              figure
                img(src='@/assets/curso/t3-s8.png', alt='imagen decorativa')  

          .row
            .col-md-6.mb-4.mb-md-0
              p No te registres en todo, muchas veces entregas información personal en toda la red, y lo que hacen los ciberdelincuentes es recopilar tu información para atacarte, solo regístrate si es necesario y sabes si es confiable.
            .col-md-6
              figure
                img(src='@/assets/curso/t3-s9.png', alt='imagen decorativa')  
          .row
            .col-md-6.mb-4.mb-md-0
              p Lee los avisos, alertas o mensajes, estás acostumbrado a dar aceptar a todo, tómate tu tiempo y revisa que estás aceptando, tal cual como dices en la vida real “leer la letra pequeña del contrato”.  
            .col-md-6
              figure
                img(src='@/assets/curso/t3-s10.png', alt='imagen decorativa')  

    h3.titulo-tercero Servicios de internet
    p.mb-5  La red posee una gran cantidad de servicios que son aplicables de acuerdo con las funcionalidades que estos prestan para poder realizar todas las actividades digitales, entre los más utilizados están:
    .neg-margin-x.bg-soft-green.mb-5
      .tarjeta.p-4.mb-5
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Correo electrónico
              p Comúnmente conocido por el anglicismo <i>e-mail</i>, es uno de los servicios más populares, su principal objetivo es el enviar y recibir información por medio de una casilla de correo, su ventaja es la inmediatez del servicio, el mensaje enviado basta solo segundos para que esté en su destino; para ello existen gratuitos y de pago, que radican en sus funcionalidades extendidas. Una dirección de <i>e-mail</i> está compuesta por el nombre o identificador que debe ser único, la arroba y el dominio a quién pertenece el servicio, este puede enviar o recibir todo tipo de información (sonido, texto, imagen, videos, animación).
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n1.png', alt='imagen decorativa')  
          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Buscadores
              p Este servicio es muy usado en Internet, porque permite encontrar información a través de una palabra clave, recupera la información por medio de un robot de búsqueda llamado #[em spider], localizando los recursos buscados y traídos a manera de lista para que usuario pueda acceder a todos los contenidos. Normalmente vienen acompañados de una breve descripción para saber qué tipo de contenido encontró, posiblemente el que más uses sea el que provee Google, pero no es el único, en la red hay un abanico amplio de opciones, los buscadores científicos, de bancos de imágenes, académicos, entre otros.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n2.png', alt='imagen decorativa')  

          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Mensajería, chat o IRC
              p Permite la comunicación instantánea con dos o más participantes, comúnmente conocido como chat, funciona hoy en día de manera síncrona y asíncrona donde los mensajes pueden contener diferente tipo de información, entre los más populares podemos encontrar  WhatsApp o Facebook Messenger.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n3.png', alt='imagen decorativa')                 

          .row
            .col-md-6.mb-4.mb-md-0
              .h4 La <i>World Wide Web</i> (www)
              p Es el servicio más popular, sus siglas en inglés #[em World Wide Web], o telaraña mundial, es donde se alojan todas las páginas, sitios o portales #[b web], que por medio de una dirección electrónica o URL, pueden ser accedidos en cualquier parte del mundo; la transferencia de información se realiza mediante un protocolo llamado http (protocolo de transferencia de hipertextos).
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n4.png', alt='imagen decorativa')                 

          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Noticias o <i>news</i>
              p Llamados grupos de noticias, es un servicio donde un grupo de computadores mediante un servidor de información brindan la oportunidad de crear, distribuir y organizar información de diferentes temáticas y llegar a los usuarios según sus intereses particulares.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n5.png', alt='imagen decorativa')   

          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Transferencia de archivos o FTP
              p Es un servicio utilizado por personas o empresas que necesitan compartir grandes volúmenes de información de forma segura y rápida, se hace punto a punto, comúnmente, y se desarrolla para que las personas puedan enviar o recibir paquetes de datos e información. 
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n6.png', alt='imagen decorativa')   

          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Comercio electrónico
              p Es un servicio que se ha utilizado como el mejor modelo de negocios para ofrecer u obtener bienes y servicios en la red por medios digitales, a los que se pueden acceder por medios de catálogos y hasta aplicaciones móviles.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n7.png', alt='imagen decorativa')   

          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Foros
              p Espacio dirigido a un grupo de personas o individuos que comparten intereses, normalmente se abre con un tema o pregunta debate donde todos los usuarios registrados o anónimos pueden opinar sobre el tema, se hace de forma secuencial según los post publicados organizados por fecha y relevancia.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n8.png', alt='imagen decorativa')   

          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Wikis
              p Este tipo de servicio, es utilizado para poder generar contenido en línea de manera colaborativa, habrás escuchado la famosa Wikipedia, que no es más que un sitio donde todos pueden ir aportando información para construir un gran compendio de contenidos, un claro ejemplo y que de seguro lo usas muy frecuentemente es la plataforma YouTube, donde cada usuario aporta para que el servicio pueda ser consumido.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n9.png', alt='imagen decorativa')   

          .row
            .col-md-6.mb-4.mb-md-0
              .h4 Redes sociales
              p Este servicio de colaboración en línea son comunidades digitales estructuradas para compartir información y los usuarios se unen según sus intereses, valores o ideas comunes, existen de tipo científico, académico, comercial entre otros, la más conocida mundialmente es Facebook.
            .col-md-6
              figure
                img(src='@/assets/curso/t2-n10.png', alt='imagen decorativa')   



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
