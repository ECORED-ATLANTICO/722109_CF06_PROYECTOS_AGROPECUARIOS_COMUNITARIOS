<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-acento-contenido-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/introduccion/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El componente formativo Gestión de proyectos comunitarios y desarrollo rural sostenible se orienta a fortalecer las competencias técnicas, sociales y administrativas necesarias para la formulación, ejecución, seguimiento y evaluación de iniciativas productivas en contextos rurales. En el marco del programa proyectos agropecuarios comunitarios, este módulo busca preparar al aprendiz para liderar procesos organizativos y productivos que respondan a las necesidades reales del territorio, promoviendo la participación de la comunidad y la sostenibilidad integral de los sistemas agropecuarios.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        p.mb-3(data-aos="zoom-in-right") La gestión de proyectos comunitarios constituye una herramienta estratégica para el desarrollo rural, ya que permite articular recursos, actores y conocimientos en torno a objetivos comunes. En este sentido, el componente aborda conceptos fundamentales como la formulación de proyectos, el análisis de línea base, la planificación estratégica, la identificación de riesgos, la gestión financiera, el monitoreo y la evaluación de resultados. Asimismo, integra enfoques transversales como la participación campesina, el enfoque diferencial, la sostenibilidad ambiental, la seguridad y salud en el trabajo y la gestión de la información.
        p.mb-0(data-aos="zoom-in-right") El desarrollo rural sostenible exige una visión integral que reconozca las dinámicas socioculturales de la comunidad campesina, la diversidad étnica, las organizaciones comunitarias y la interacción con entidades públicas y privadas. Por ello, este componente promueve la concertación, la negociación, la comunicación efectiva y la construcción colectiva de soluciones, fortaleciendo el tejido social y la gobernanza territorial.
      .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/introduccion/img_2.png', class="img-fluid")

</template>

<script>
export default {
  name: 'Introduccion',
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

<style lang="sass"></style>
