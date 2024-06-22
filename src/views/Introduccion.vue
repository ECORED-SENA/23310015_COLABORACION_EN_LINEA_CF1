<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .clearfix
    .spacer
    .corner-box.color-b1.p-4.mb-5.m-custom
      .row.align-items-center
        .col-lg-3
          .wrap-overflow
            figure(data-aos="flip-left")
              img.nW(src="@/assets/curso/i0.png", alt="personaje animado")
        .col-lg-9
          p.text-xl ¿Conoces los hitos que han marcado las formas de comunicación y las diferentes transformaciones frente al comportamiento de las personas en la utilización de herramientas digitales? 
            span.text-normal En el siguiente recurso, se explica sobre ello. 
          .wrap-player
            audio(controls='')
              source(src='@/assets/curso/intro.mp3' type='audio/mpeg')
              |  Your browser does not support the audio tag.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/DY4IJ1yLuH8?si=0dKYhtGgTdHiBlX3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    //--https://www.youtube.com/embed/oHGhb7QoRik"

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
