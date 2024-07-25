<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Las TIC en la comunicación y colaboración en línea
    .spacer
    .corner-box.color-b3.p-4.mb-5.m-custom(data-aos="fade-right")
      .row.align-items-center
        .col-lg-3
          .wrap-overflow
            figure
              img.nW(src="@/assets/curso/t1-4.png", style="width: 210px" alt="personaje animado")
        .col-lg-9
          p.text-xl ¿Sabe para qué han sido creadas las TIC?  
            span.text-normal El tratamiento de la información en referencia a la comunicación y colaboración en línea hace repensar que las TIC fueron creadas para determinar las herramientas que permiten el acceso a todo tipo de datos en diferentes formas digitales. Estas se representan en:
          .wrap-player
            audio(controls='')
              source(src='@/assets/curso/las-tic.mp3' type='audio/mpeg')
              |  Your browser does not support the audio tag.
    
    //-- below Row card list
    .row.mb-5.justify-content-center
      .col-10.col-md-5.col-lg-2.m-2
        figure(data-aos="flip-left")
          img.nW(src="@/assets/curso/t1-n1.svg", alt="Formas en que se representan los diferentes tipos de datos.").m-auto

      .col-10.col-md-5.col-lg-2.m-2
        figure(data-aos="flip-left")
          img.nW(src="@/assets/curso/t1-n2.svg", alt="Formas en que se representan los diferentes tipos de datos.").m-auto

      .col-10.col-md-5.col-lg-2.m-2
        figure(data-aos="flip-left")
          img.nW(src="@/assets/curso/t1-n3.svg", alt="Formas en que se representan los diferentes tipos de datos.").m-auto

      .col-10.col-md-5.col-lg-2.m-2
        figure(data-aos="flip-left")
          img.nW(src="@/assets/curso/t1-n4.svg", alt="Formas en que se representan los diferentes tipos de datos.").m-auto

      .col-10.col-md-5.col-lg-2.m-2
        figure(data-aos="flip-left")
          img.nW(src="@/assets/curso/t1-n5.svg", alt="Formas en que se representan los diferentes tipos de datos.").m-auto

    p.mb-5  Y se presentan en los diferentes dispositivos, como:

    //-- below Row card 2 list
    .row.mb-5.justify-content-center
      .col-10.col-md-5.col-lg-2.m-2
        figure(data-aos="flip-up")
          img.nW(src="@/assets/curso/t1-n6.svg", alt="Formas en que se representan los diferentes tipos de dispositivos.").m-auto

      .col-10.col-md-5.col-lg-2.m-2
        figure(data-aos="flip-up")
          img.nW(src="@/assets/curso/t1-n7.svg", alt="Formas en que se representan los diferentes tipos de dispositivos.").m-auto

      .col-10.col-md-5.col-lg-2.m-2
        figure(data-aos="flip-up")
          img.nW(src="@/assets/curso/t1-n8.svg", alt="Formas en que se representan los diferentes tipos de dispositivos.").m-auto
    
    p.mb-5(data-aos="slide-left")  En los móviles se encuentran los #[em smartphones], que hacen parte de la cotidianidad de la mayoría de personas, de forma inmersiva e interactiva.
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .bloque-texto-a.color-acento-botones.p-3.p-md-5.mb-5.dir-ltr
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4.shadow-box
                p La comunicación está ligada a la transformación de la sociedad y con ella el descubrir nuevas formas y medios de hacerlo. Por ello, los medios digitales no son ajenos a su desarrollo y evolución y están implícitos para lograr una comunicación efectiva y pertinente, lo que genera una identificación con los semejantes y haga parte de una sociedad, con características intrínsecas y de comportamiento logrando una identidad. Es una forma de aprender quién se es: desde la empatía y hoy con los medios de comunicación digital se traduce en el “yo virtual”.
            .col-lg-4
              figure(data-aos="flip-left")
                img.nW(src="@/assets/curso/t1-i1.svg", alt="imagen decorativa").m-auto


    p.mb-5(data-aos="slide-left")  La definición de las TIC puede tener diferentes connotaciones desde el punto de vista del autor, a manera de repaso se puede decir que son:
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .bloque-texto-a.color-acento-botones.p-3.p-md-5.mb-5.dir-ltr
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4.shadow-box
                p El conjunto de herramientas de innovación para gestionar la información, almacenarla, recuperarla y enviarla de una parte a otra, que es procesada y puede ser entendida en diferentes canales de comunicación para lograr una renovación cultural.
            .col-lg-4
              figure(data-aos="flip-left")
                img.nW(src="@/assets/curso/t1-i2.svg", alt="imagen decorativa").m-auto

    .row.mb-5
      .col-lg-2.mb-4.mb-lg-0
        figure(data-aos="flip-left")
          img.nW(src="@/assets/curso/t1-ic1.svg", alt="imagen decorativa").m-auto
      .col-lg-10
        p Teniendo en cuenta la afirmación de que la tecnología ha incluido nuevas formas de comunicación y ha permeado todos los entornos de los seres humanos y, por ende, la vida social misma, se debe tener en cuenta que la apropiación de las nuevas herramientas de comunicación y colaboración en línea no es un proceso endógeno, solo es una condición de necesidad causada, por ello se deben valorar los factores, ventajas y desventajas que posee para llevarlas a práctica desde lo social. A continuación, conozcamos unos ítems importantes sobre este tema.
    .row.mb-5.justify-content-center
      .col-lg-8
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t1-info1.svg', alt='ejemplo del uso de la tecnología')
          .tarjeta.color-b3.p-3.shadow-box(x="12%" y="30%")
            p El intercambio permite establecer vínculos y relaciones para lograr un YO integral en la sociedad. 
          .tarjeta.color-b3.p-3.shadow-box(x="6%" y="62%")
            p Responsabilidad y ética social para compartir sentimientos, experiencias y anécdotas.
          .tarjeta.color-b3.p-3.shadow-box(x="12%" y="92%")
            p La forma de comunicar y establecer estrechos lazos se da como un proceso natural al ser humano, por lo que no es propio de la tecnología.        
          .tarjeta.color-b3.p-3.shadow-box(x="93%" y="40%")
            p El mundo digital crea los preceptos en todas las esferas sociales, millones de datos se comparten, se divulgan.
          .tarjeta.color-b3.p-3.shadow-box(x="93%" y="80%")
            p La socialización tiende a delimitarse desde la interacción de un dispositivo. 

    .row.mb-5
      .col-lg-7
        p.mb-4(data-aos="slide-left")  Es importante saber que las TIC se encuentran ya inmersas en las actividades diarias y han generado gran impacto, tanto individual como colectivo en la sociedad actual, causando efectos positivos y negativos que más adelante se confrontarán al relacionarlas con la realidad, territorio e identidad como persona.
        .cajon.color-acento-botones.p-4(data-aos="flip-up")
          p.mb-0  Es importante tener presente que existe una manipulación e influencia de los medios de comunicación masiva en el discernimiento personal, afectando conductas y actitudes, alterando la conciencia social hacia los demás y cómo se ven desde otra perspectiva en diferentes tejidos sociales orientados a desarrollar una identidad que cohesiona las relaciones entre las personas, realizando teorías de comunicación diferentes a las habituales.   
      .col-lg-5
        figure(data-aos="flip-left")
          img.nW(src="@/assets/curso/t1-i3.svg", alt="imagen decorativa").m-auto

    .spacer
    .corner-box.color-b2.p-4.mb-5.m-custom
      .row.align-items-center
        .col-lg-3.mb-4.mb-lg-0
          .wrap-overflow
            figure(data-aos="fade-up")
              img.nW(src="@/assets/curso/t2-i8.png", style="width: 220px" alt="personaje animado")
        .col-lg-9
          p.text-xl 
            span.text-normal La influencia de las TIC en la vida y la sociedad depende de lo que se realice con las nuevas tecnologías: 
            span ¿alejas a los que tienes cerca y acercas a los que tienes lejos?

    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1  Características  y clasificación de las TIC
    p.mb-5  Las Tecnologías de Información y Comunicación poseen diferentes características que, por ser dinámicas y ágiles, hacen que los procesos comunicacionales entre las personas se hagan más fáciles; dentro de las más representativas se encuentran: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/bex-n5uTzic?si=y8g7_tCUfUKbt2k1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-5
      .col-lg-7
        p.mb-3  Los preceptos sociales de comunicación han logrado un cambio de paradigma, porque dadas las características y nuevas posibilidades que te presentan, las TIC han hecho que los seres humanos interactúen de forma diferente y más efectiva. Con una buena utilización de las mismas, se amplían las oportunidades, recursos y servicios de cómo hacerlo, rompiendo barreras de una forma flexible lo que permite la inclusión en todos los sectores, así, es capaz de reconfigurar la estructura normal de la comunicación humana, convergiendo en la interacción de los individuos de una sociedad que se conoce como globalización.
        p.mb-3.text-bold  Existen diferentes argumentos para poder clasificar las TIC, porque por ser tan flexibles muchos autores hacen clasificaciones dependiendo del uso o las herramientas de las cuales están compuestas.

      .col-lg-5
        figure(data-aos="fade-up")
          img.nW(src="@/assets/curso/t1-i4.jpg", alt="imagen decorativa").m-auto
          
    .spacer
    .corner-box.color-b1.p-4.mb-5.m-custom.flipped-corners
      .row.align-items-center.justify-content-center
        .col-lg-8
          p.text-xl ¿Sabías que es importante reconocer que las herramientas se han convertido en las aliadas para el desarrollo del mundo digital, porque giran de una forma interconectada en torno a tres medios fundamentales: la informática, la microelectrónica y las telecomunicaciones?
        .col-lg-2
          .wrap-overflow
            figure(data-aos="flip-left")
              img(src="@/assets/curso/i1.png", style="width: 220px" alt="personaje animado")


    p.mb-5  A continuación, se podrá conocer una de las clasificaciones de las TIC:
    .row.justify-content-center
      .col-lg-8
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t1-info2.svg', alt='ejemplo del uso de la tecnología')
          .tarjeta.color-b3.p-3.shadow-box(x="82%" y="27%")
            p Permiten estructurar nuevos medios para la generación del aprendizaje.
          .tarjeta.color-b3.p-3.shadow-box(x="90%" y="58%")
            p Posibilitan el envío y recepción de información para compartir cualquier tipo de información.       
          .tarjeta.color-b3.p-3.shadow-box(x="82%" y="89%")
            p Comparten información desde cualquier esfera social, son participativas, posibilitan el intercambio y la generación de nuevas formas de interacción.         

    p.mb-5 Las TIC son utilizadas para gestionar información de todo tipo y son consideradas las más efectivas a la hora de comunicar y colaborar con contenidos en línea.
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-acento-botones.p-3.p-md-5.mb-5.dir-ltr(data-aos="flip-left")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4.shadow-box
                p El acceso a los datos se realiza de manera equitativa en todas las esferas sociales (económicas, sociales, políticas, culturales, educativas y científicas), siendo que la información es pública, logrando que el binomio espacio-tiempo no sea un obstáculo. Esto hace que la interacción y colaboración entre los individuos de una sociedad pueda hacer construcción colectiva de conocimiento.
            .col-lg-4
              figure(data-aos="flip-left")
                img.nW(src="@/assets/curso/t1-i5.svg", alt="imagen decorativa").m-auto

    p.mb-5(data-aos="slide-left")  Para determinar una clasificación de las TIC, hay que tener en cuenta los medios y los enfoques en las que se están utilizando; hoy en día y en ese contexto, se puede decir que estas innovadoras herramientas se pueden determinar así:

    .row.justify-content-center
      .col-md-8.col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t1-p1.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Tradicionales
              p.small Conocidas como MASS-Media, utilizan canales de difusión masiva tales como la televisión, la radio, los periódicos y pretenden llegar a un receptor colectivo, ya que la información no es controlada; es de tipo global e indiscriminada dentro de un mundo digital social.
      .col-md-8.col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t1-p2.svg", alt="Imagen decorativa")
          .text.p-2
            .row.px-lg-3.mb-lg-2
              p.h3.mb-0 En red e informáticas
              p.small A través de la incursión de dispositivos electrónicos y digitales se incrementa la interactividad, ofreciendo gran cantidad de servicios, que buscan la colaboración e intercambio de información entre los usuarios. Los medios digitales son inmersivos y muy rápidos, por ello se han desarrollado diferentes opciones como la inteligencia artificial, las redes neuronales, la realidad virtual y aumentada.
      .col-md-8.col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t1-p3.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Interactivas
              p.small Las herramientas son mucho más versátiles, pues hoy en día es muy común encontrar tableros electrónicos en un ambiente de formación donde la experiencia de usuario se hace cada vez más inclusiva.
      .clearfix
      .col-md-8.col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t1-p4.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Transmisivas
              p.small Apoyan los procesos de comunicación en los seres humanos, llevando un mensaje al receptor, dependiendo de sus gustos y aficiones. Cada vez las bibliotecas virtuales toman más fuerza, los pódcast, los videojuegos, la TV digital.
      .col-md-8.col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t1-p5.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Activas
              p.small Son utilizadas en la educación para potenciar los aprendizajes en diferentes canales y medios, además en los procesos de productividad en empresas, a través de herramientas multimedia les de gran impacto y hasta los buscadores de información generan una experiencia personalizada según cada usuario digital.

    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2  Ventajas y desventajas del proceso comunicacional en línea

    p.mb-5 El uso de las TIC en los procesos comunicacionales en línea debe ser en pro del desarrollo integral de una sociedad, pero es importante saber que existen múltiples ventajas y desventajas que pueden poner en peligro la identidad e integridad tanto física como emocional humana, pues la comunicación como proceso endógeno del ser humano se debe potencializar para el crecimiento y desarrollo del ser. 
    .spacer
    .corner-box.color-b3.p-4
      .row.align-items-center
        .col-lg-3
          .wrap-overflow
            figure(data-aos="flip-left")
              img.nW(src="@/assets/curso/t1-nn.png", style="width: 220px" alt="personaje animado")
        .col-lg-9
          p.text-xl ¿Sabías que las herramientas comunicacionales que brindan las TIC no son neutras, positivas o negativas; todo depende de cómo se usen? 
            span.text-normal A continuación, te invitamos a conocer sus ventajas y desventajas. 

    .row.justify-content-center
      .col-md-8.col-lg-4.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/ventajas.png' alt='AvatarTop' style="top: 50px")
          .tarjeta.bg-white.p-4.w-100.shadow-3
            .p-4.rounded-3(style="border: 4px solid #22F0B0" )
                h2.text-center.mt-4 Ventajas
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-check(style="color:#22F0B0 ")
                    p.mb-0 Mayor velocidad en la comunicación 
                  li.d-flex
                    i.fas.fa-check(style="color:#22F0B0 ")
                    p.mb-0 Acceso a diversas plataformas de comunicación
                  li.d-flex
                    i.fas.fa-check(style="color:#22F0B0 ")
                    p.mb-0 Simplemente de procesos comunicativos 
                  li.d-flex
                    i.fas.fa-check(style="color:#22F0B0 ")
                    p.mb-0 Nuevas formas de comunicación
                  li.d-flex
                    i.fas.fa-check(style="color:#22F0B0 ")
                    p.mb-0 Herramientas colaborativas
                  li.d-flex
                    i.fas.fa-check(style="color:#22F0B0 ")
                    p.mb-0 Intercambio de todo tipo de información 
      .col-md-8.col-lg-4.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/desventajas.png' alt='AvatarTop' style="top: 50px")
          .tarjeta.bg-white.p-4.w-100.shadow-3.h-100
            .p-4.rounded-3(style="border: 4px solid #FFCF19" ).h-100
                h2.text-center.mt-4 Desventajas
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-check(style="color:#FFCF19 ")
                    p.mb-0 Datos en manos de terceros
                  li.d-flex
                    i.fas.fa-check(style="color:#FFCF19 ")
                    p.mb-0 Acceso digital
                  li.d-flex
                    i.fas.fa-check(style="color:#FFCF19 ")
                    p.mb-0 Delincuencia #[i online]
                  li.d-flex
                    i.fas.fa-check(style="color:#FFCF19 ")
                    p.mb-0 Publicidad invasiva
                  li.d-flex
                    i.fas.fa-check(style="color:#FFCF19 ")
                    p.mb-0 Adicciones #[i online]
                  li.d-flex
                    i.fas.fa-check(style="color:#FFCF19 ")
                    p.mb-0 Falta de interpersonalidad
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass" scoped>
.bg-curve-soft
  background: url('../assets/curso/bg-curve.svg')
  background-position: bottom
  background-repeat: none
  background-size: cover
</style>
