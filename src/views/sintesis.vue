<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/sintesis/img_1.png', class="img-fluid")
      .col-12.col-lg-9.mb-1.mb-lg-0(data-aos="flip-left")
        p.mb-4(data-aos="zoom-in-right") El componente formativo “Gestión de proyectos comunitarios y desarrollo rural sostenible”, ofrece al aprendiz los principales elementos relacionados con los proyectos comunitarios agropecuarios, incluyendo su formulación, planificación, gestión de recursos, financiación, seguimiento y normatividad aplicable. Además, destaca la importancia de la comunidad campesina, sus características socioculturales, actividades económicas, contexto político y la interacción con entidades públicas y privadas. 
        .tarjeta.tarjeta--fondo-img-4.py-4.p-5.rounded-3.mb-4(data-aos="zoom-in-right")
          p.mb-1 De igual manera, se desarrollan aspectos asociados a las organizaciones comunitarias, sus tipos, estructura organizativa y roles de los integrantes, así como el reconocimiento de los grupos étnicos, sus características, dimensiones socioculturales y normativas de protección. Asimismo, se presentan las fuentes de información y los métodos de consulta utilizados en la formulación de proyectos, junto con la relevancia del plan de acción como herramienta para la organización, ejecución y seguimiento de actividades.
        p.mb-3(data-aos="zoom-in-right") Finalmente, se aborda la gestión ambiental mediante temas relacionados con requerimientos ambientales, normatividad, manejo del recurso hídrico, disposición de residuos, reducción de emisiones y sostenibilidad ambiental, promoviendo prácticas responsables orientadas al desarrollo rural sostenible.

    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="La figura detalla la estructura jerárquica que sintetiza el contenido del componente formativo:  Gestión de proyectos comunitarios y desarrollo rural sostenible, el cual aborda temas relacionados con los proyectos comunitarios agropecuarios, incluyendo su concepto, tipos, alcance, metodologías para la formulación y estructuración, participación comunitaria, monitoreo, evaluación, indicadores, presupuesto, cronograma, gestión de recursos, financiación y normatividad aplicable. Asimismo, desarrolla aspectos asociados a la comunidad campesina, sus características socioculturales, contexto político, actividades económicas, dimensión ambiental e interacciones con entidades públicas y privadas. También incluye contenidos sobre organizaciones comunitarias, tipos de organizaciones, características, estructura organizativa y roles de los integrantes, además de temas relacionados con los grupos étnicos, sus características, dimensiones socioculturales y normativas nacionales e internacionales. De igual manera, presenta información sobre fuentes de información y métodos de consulta utilizados para la recolección y análisis de datos, así como contenidos relacionados con el plan de acción, sus características, importancia y aplicación. Finalmente, aborda la gestión ambiental mediante temas relacionados con requerimientos ambientales, normatividad, gestión del recurso hídrico, manejo y disposición de residuos, reducción de emisiones de gases y sostenibilidad ambiental.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Síntesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
