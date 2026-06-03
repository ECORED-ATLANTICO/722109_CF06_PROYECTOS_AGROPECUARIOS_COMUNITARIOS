<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Grupos étnicos

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los grupos étnicos representan comunidades humanas que comparten una identidad cultural, histórica, lingüística y territorial común. Estas comunidades poseen formas propias de organización social, sistemas de conocimiento tradicional, prácticas productivas y cosmovisiones que se han transmitido de generación en generación.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema4/img_2.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-4(data-aos="zoom-in-right") En el contexto del desarrollo rural, el reconocimiento de los grupos étnicos es fundamental para promover procesos de inclusión, respeto por la diversidad cultural y protección de los derechos colectivos. Los proyectos comunitarios que se desarrollan en territorios donde habitan grupos étnicos deben considerar sus particularidades culturales, sus sistemas de organización y sus formas tradicionales de manejo del territorio.
        p.mb-0(data-aos="zoom-in-right") En muchos países de América Latina, los grupos étnicos han desempeñado un papel fundamental en la conservación de la biodiversidad, la protección de los ecosistemas y el desarrollo de prácticas productivas sostenibles. Por esta razón, los procesos de desarrollo rural sostenible deben incorporar enfoques diferenciales que reconozcan y valoren la diversidad cultural de los territorios.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1 Concepto
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema4/img_3.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 Un grupo étnico se define como una colectividad humana que comparte elementos culturales comunes como el idioma, las tradiciones, las prácticas sociales, las creencias, la historia y el sentido de pertenencia a un territorio específico. La identidad étnica se construye a partir de la interacción entre factores culturales, sociales e históricos que permiten a una comunidad diferenciarse de otros grupos sociales. Esta identidad se expresa a través de costumbres, sistemas de conocimiento, formas de organización y prácticas culturales propias. Los grupos étnicos suelen mantener una relación estrecha con el territorio que habitan, ya que este constituye la base de su organización social, su sistema productivo y su cosmovisión del mundo.

    p.mb-0(data-aos="zoom-in-right") En Colombia y otros territorios rurales, los grupos étnicos desempeñan un papel fundamental en la conservación de la diversidad cultural, la protección de los recursos naturales y el fortalecimiento de prácticas productivas tradicionales. 

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2 Tipos 
    .mb-0 

    .row.justify-content-center.align-items-start.mb-0
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema4/img_4.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-3(data-aos="zoom-in-right") En muchos países latinoamericanos se reconocen diferentes tipos de grupos étnicos, los cuales presentan características culturales, sociales y territoriales particulares.
        p.mb-3(data-aos="zoom-in-right") Entre los principales grupos étnicos se encuentran:
        TabsA.color-secundario.mb-3.dos
          .tarjeta.color-secundario-10.p-5(titulo="Comunidades indígenas")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Originarios que habitan diferentes territorios y conservan sistemas culturales, organizativos y espirituales propios. Estas comunidades mantienen una estrecha relación con la naturaleza y el territorio, considerando los recursos naturales como parte fundamental de su identidad.
          .tarjeta.color-secundario-10.p-5(titulo="Comunidades afrodescendientes")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-3 Están conformadas por poblaciones con herencia cultural africana, que han desarrollado prácticas sociales, culturales y productivas propias en diferentes territorios.
                p.mb-0 Estas comunidades se caracterizan por fortalecer procesos de trabajo colectivo, comunitarios y conservación cultural.
          .tarjeta.color-secundario-10.p-5(titulo="Pueblo Rrom o gitano")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Comunidad étnica con identidad cultural, y social propia, reconocida por conservar tradiciones relacionadas con la movilidad, el comercio y las artesanías. Esta comunidad mantiene prácticas culturales y formas de organización transmitidas de generación en generación.
          .tarjeta.color-secundario-10.p-5(titulo="Comunidades raizales y palenqueras")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Son grupos étnicos que poseen identidad cultural, lingüística e histórica propia, asociada principalmente a territorios insulares y procesos de resistencia cultural y comunitaria.
      

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3 Características
    .mb-0

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema4/img_5.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left") 
        .tarjeta.tarjeta--fondo-img-6.py-4.p-5.rounded-3.mb-4(data-aos="zoom-in-right")
          p.mb-0 Las características permiten comprender los elementos culturales, sociales, organizativos y territoriales que identifican a estas comunidades dentro de la sociedad. Estas características reflejan la manera en que los grupos étnicos conservan sus tradiciones, conocimientos ancestrales, formas de organización y relación con el entorno natural. Los grupos étnicos presentan características que los diferencian de otros grupos sociales y que reflejan su identidad cultural y su forma de organización comunitaria. Entre las principales características se destacan:

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 7.
      |  Características de los grupos étnicos
    .tabla-a.mb-0(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-3 Característica
            th.col-auto.col-lg-auto Descripción
            th.col-auto.col-lg-auto Ejemplo 
        tbody
          tr
            td.text-start Identidad cultural
            td.text-start Conservan costumbres, tradiciones, creencias y formas de vida propias.
            td.text-start Comunidades indígenas mantienen ceremonias y prácticas agrícolas ancestrales.
          tr.bg-table-01
            td.text-start Relación con el territorio
            td.text-start Mantienen vínculos históricos, culturales y productivos con el entorno donde habitan.
            td.text-start Comunidades afrodescendientes que desarrollan actividades agrícolas y pesqueras tradicionales.
          tr
            td.text-start Conocimientos ancestrales
            td.text-start Preservan saberes tradicionales relacionados con producción, salud y ambiente.
            td.text-start Uso de semillas nativas y técnicas tradicionales de cultivo.
          tr.bg-table-01
            td.text-start Organización comunitaria
            td.text-start Poseen formas propias de liderazgo, participación y toma de decisiones.
            td.text-start Cabildos indígenas coordinan procesos comunitarios y territoriales.
          tr
            td.text-start Diversidad cultural y lingüística
            td.text-start Conservan lenguas, expresiones culturales y manifestaciones artísticas propias.
            td.text-start Comunidades raizales mantienen su lengua y tradiciones culturales.
          tr.bg-table-01
            td.text-start Trabajo colectivo
            td.text-start Promueven la cooperación y el apoyo comunitario para el bienestar común.
            td.text-start Jornadas comunitarias para actividades agrícolas y ambientales.
          tr
            td.text-start Conservación ambiental
            td.text-start Implementan prácticas orientadas al cuidado de los recursos naturales.
            td.text-start Protección de bosques, fuentes hídricas y biodiversidad local.
          tr.bg-table-01
            td.text-start Transmisión generacional
            td.text-start Los conocimientos y tradiciones se transmiten entre generaciones.
            td.text-start Adultos mayores enseñan prácticas agrícolas tradicionales a jóvenes rurales.

    Separador

    #t_4_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.4 Dimensiones socioculturales 
    .mb-0

    p.mb-3(data-aos="zoom-in-right") Las dimensiones socioculturales de los grupos étnicos abarcan los diferentes aspectos que conforman su identidad y su forma de vida dentro del territorio. Permiten comprender las costumbres, valores, tradiciones, formas de organización, prácticas culturales y dinámicas sociales que caracterizan a una población rural o comunitaria.
    p.mb-4(data-aos="zoom-in-right") Entre estas dimensiones se encuentran:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1.mb-3.mb-lg-0(data-aos="flip-left")
        .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-12 col-lg-6").p-2.rounded-3
            .tarjeta--color-color-primario-5.h-100
              .tarjeta--19.mb-4 
              h5.mb-3.text-center Dimensión cultural
              p.mb-3.text-center Incluye las tradiciones, costumbres, prácticas religiosas, expresiones artísticas y sistemas de valores que caracterizan a cada grupo étnico.
            .tarjeta--color-color-primario-5.h-100
              .tarjeta--20.mb-4 
              h5.mb-3.text-center Dimensión social
              p.mb-3.text-center Se refiere a las formas de organización comunitaria, las relaciones familiares, las normas de convivencia y los mecanismos de toma de decisiones dentro de la comunidad.
            .tarjeta--color-color-primario-5.h-100
              .tarjeta--21.mb-4 
              h5.mb-3.text-center Dimensión económica
              p.mb-3.text-center Comprende las actividades productivas tradicionales que desarrollan las comunidades étnicas, como la agricultura, la pesca, la recolección de productos forestales y la artesanía.
            .tarjeta--color-color-primario-5.h-100
              .tarjeta--22.mb-4 
              h5.mb-3.text-center Dimensión territorial
              p.mb-3.text-center El territorio constituye un elemento central en la vida de los grupos étnicos, ya que representa el espacio donde se desarrollan sus prácticas culturales, sociales y productivas.
            .tarjeta--color-color-primario-5.h-100
              .tarjeta--23.mb-4 
              h5.mb-3.text-center Dimensión espiritual
              p.mb-3.text-center Muchos grupos étnicos poseen una cosmovisión que integra elementos espirituales y naturales, lo que influye en su relación con el entorno y en sus prácticas de manejo del territorio.
      .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema4/img_11.png', class="img-fluid")

    p.mb-0(data-aos="zoom-in-right") Comprender estas dimensiones permite diseñar proyectos de desarrollo que respeten la diversidad cultural y promuevan la inclusión social.

    Separador

    #t_4_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.5 Normativa nacional e internacional
    .mb-0

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img_12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es el conjunto de leyes, acuerdos, políticas, tratados y lineamientos que orientan las actividades sociales, ambientales, productivas y económicas desarrolladas por las comunidades y organizaciones en diferentes territorios. Estas normas buscan garantizar la protección de los derechos humanos, el desarrollo sostenible, la seguridad alimentaria, la conservación ambiental y el fortalecimiento de las actividades agropecuarias y comunitarias.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Normativa nacional

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-3(data-aos="zoom-in-right") La normativa nacional corresponde a las leyes, decretos, políticas y reglamentos establecidos por el Estado para regular las actividades desarrolladas dentro del país.
        p.mb-3(data-aos="zoom-in-right") En Colombia, estas normas orientan aspectos relacionados con:
        .row.align-items-stretch.mb-0
          .col-12.col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-right")
            .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
              .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
                figure
                  img(src='@/assets/curso/tema4/img_13.svg', class="img-fluid") 
              h5.mb-0 Producción agropecuaria.
          .col-12.col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-right")
            .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
              .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
                figure
                  img(src='@/assets/curso/tema4/img_13.svg', class="img-fluid") 
              h5.mb-0 Medio ambiente.
          .col-12.col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-right")
            .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
              .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
                figure
                  img(src='@/assets/curso/tema4/img_13.svg', class="img-fluid") 
              h5.mb-0 Participación comunitaria. 
          .col-12.col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-right")
            .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
              .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
                figure
                  img(src='@/assets/curso/tema4/img_13.svg', class="img-fluid") 
              h5.mb-0 Derechos rurales.
          .col-12.col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-right")
            .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
              .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
                figure
                  img(src='@/assets/curso/tema4/img_13.svg', class="img-fluid") 
              h5.mb-0 Comercialización.
          .col-12.col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-right")
            .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
              .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
                figure
                  img(src='@/assets/curso/tema4/img_13.svg', class="img-fluid") 
              h5.mb-0 Seguridad alimentaria.
          .col-12.col-lg-6.col-xl-4.mb-4(data-aos="zoom-in-right")
            .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
              .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
                figure
                  img(src='@/assets/curso/tema4/img_13.svg', class="img-fluid") 
              h5.mb-0 Desarrollo territorial.
        p.mb-3(data-aos="zoom-in-right") A continuación, se presentan algunas normas e instituciones nacionales que regulan y orientan el desarrollo agropecuario, ambiental y territorial en Colombia
      .col-12.col-md-8.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema4/img_14.png', class="img-fluid")

    .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
      SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-4").p-2.rounded-3
        .tarjeta--color-secundario-10.h-100
          .tarjeta--24.mb-4 
          h5.mb-3.text-center Constitución Política de Colombia
          p.mb-3.text-center Reconoce derechos sociales, ambientales y comunitarios.
        .tarjeta--color-secundario-10.h-100
          .tarjeta--25.mb-4 
          h5.mb-3.text-center Ministerio de Agricultura y Desarrollo Rural
          p.mb-3.text-center Formula políticas para el desarrollo agropecuario y rural.
        .tarjeta--color-secundario-10.h-100
          .tarjeta--26.mb-4 
          h5.mb-3.text-center ICA Instituto Colombiano Agropecuario
          p.mb-3.text-center Regula la sanidad agropecuaria y la producción agrícola y pecuaria.
        .tarjeta--color-secundario-10.h-100
          .tarjeta--27.mb-4 
          h5.mb-3.text-center Ministerio de Ambiente y Desarrollo Sostenible
          p.mb-3.text-center Regula la protección ambiental y el manejo de recursos naturales.
        .tarjeta--color-secundario-10.h-100
          .tarjeta--28.mb-4 
          h5.mb-3.text-center SENA Servicio Nacional de Aprendizaje
          p.mb-3.text-center Fortalece la formación y el emprendimiento rural.
        .tarjeta--color-secundario-10.h-100
          .tarjeta--29.mb-4 
          h5.mb-3.text-center Ley de desarrollo rural y asociatividad (Ley 1876 de 2017)
          p.mb-3.text-center Promueve la organización y el fortalecimiento de las comunidades rurales.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Normatividad internacional

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-0(data-aos="zoom-in-right") Son los acuerdos, tratados y lineamientos establecidos por organismos y organizaciones internacionales orientados a promover el desarrollo sostenible, la seguridad alimentaria, los derechos humanos y la protección ambiental. Estas normas sirven como referencia para el diseño e implementación de políticas y proyectos comunitarios en diferentes países.
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left")
        .tarjeta.tarjeta--fondo-img-1.py-4.p-3.rounded-3.mb-0(data-aos="zoom-in-right")
          SlyderA(tipo="a").tarjeta.tarjeta--blanca.py-4.p-3.mb-0
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-4 Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO)
                p.mb-5 Promueve la seguridad alimentaria, la agricultura sostenible y el desarrollo rural.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-4 Naciones Unidas (ONU)
                p.mb-5 Impulsa los derechos humanos, la paz, el desarrollo sostenible y la cooperación entre países.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-4 Objetivos de Desarrollo Sostenible (ODS)
                p.mb-5 Orientan acciones globales para erradicar la pobreza, proteger el planeta y garantizar el bienestar de todas las personas.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-4 Convenios ambientales internacionales
                p.mb-5 Promueven la protección del medio ambiente, la conservación de la biodiversidad y el uso sostenible de los recursos naturales.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-4 Organización Internacional del Trabajo (OIT)
                p.mb-5 Protege los derechos laborales, promueve condiciones de trabajo dignas y el empleo decente.
</template>

<script>
export default {
  name: 'Tema4',
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
