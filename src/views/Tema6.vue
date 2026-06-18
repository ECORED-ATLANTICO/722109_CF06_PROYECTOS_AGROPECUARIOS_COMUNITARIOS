<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Plan de acción

    .bloque-texto-g.color-acento-contenido-20.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un plan de acción constituye una guía operativa que orienta la implementación de las estrategias definidas en la fase de formulación del proyecto. Su función principal es traducir los objetivos generales y específicos en actividades concretas que puedan ejecutarse de manera organizada, eficiente y coordinada entre los diferentes actores involucrados.

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.1 Concepto
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-3.mb-lg-0
        p.mb-3(data-aos="flip-left") El plan de acción es una herramienta de planificación que permite organizar de manera estructurada las actividades necesarias para alcanzar los objetivos de un proyecto, programa o proceso organizacional. En el contexto de los proyectos comunitarios y del desarrollo rural sostenible, el plan de acción facilita la definición clara de las tareas, responsables, recursos, tiempos de ejecución y mecanismos de seguimiento requeridos para lograr los resultados esperados.
        p.mb-0(data-aos="flip-left") En los procesos de desarrollo comunitario, el plan de acción también cumple un papel fundamental en la participación social, ya que permite que los miembros de la comunidad identifiquen sus responsabilidades, aportes y compromisos dentro de las actividades planificadas. De esta manera, se fortalece la corresponsabilidad y el trabajo colectivo en la ejecución de las iniciativas de desarrollo.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema6/img_2.png', class="img-fluid")

    p.mb-0(data-aos="flip-left") Adicionalmente, el plan de acción facilita el seguimiento y control del proyecto, pues establece indicadores, tiempos y responsables que permiten evaluar el avance de las actividades y realizar ajustes oportunos cuando sea necesario.

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.2 Tipos e importancia
    .mb-0 

    p.mb-4(data-aos="flip-left") Los planes de acción pueden clasificarse de diferentes maneras dependiendo de su propósito, alcance y duración dentro de un proyecto o proceso organizacional. En el ámbito de los proyectos comunitarios se pueden identificar principalmente los siguientes tipos:

    .row.justify-content-center.mb-5
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="100" tabindex="0")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema6/img_3.png", alt="Observación directa en campo del proyecto")
          .crd_hover_txt--body
            h4 Estratégico
            p Está orientado al cumplimiento de objetivos de largo plazo y se relaciona con la visión general del proyecto o de la organización comunitaria. Define las grandes líneas de intervención, prioridades y metas que se desean alcanzar en el proceso de desarrollo.
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="100" tabindex="0")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema6/img_4.png", alt="Observación directa en campo del proyecto")
          .crd_hover_txt--body
            h4 Operativo
            p Detalla las actividades específicas que deben ejecutarse para cumplir los objetivos del proyecto en el corto o mediano plazo. Incluye tareas concretas, responsables, recursos requeridos y cronogramas de ejecución.
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="100" tabindex="0")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema6/img_5.png", alt="Observación directa en campo del proyecto")
          .crd_hover_txt--body
            h4 Participativo
            p Se caracteriza por ser construido de manera conjunta entre los diferentes actores involucrados en el proyecto, incluyendo líderes comunitarios, organizaciones sociales, entidades públicas, organizaciones no gubernamentales y técnicos facilitadores.
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="100" tabindex="0")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema6/img_6.png", alt="Observación directa en campo del proyecto")
          .crd_hover_txt--body
            h4 Correctivo
            p Se elabora cuando se identifican desviaciones, problemas o dificultades en la ejecución del proyecto. Su objetivo es implementar medidas correctivas que permitan mejorar el desempeño de las actividades y garantizar el cumplimiento de los objetivos planteados.

    p.mb-5(data-aos="flip-left") El plan de acción es un instrumento fundamental para la gestión eficiente de proyectos comunitarios y procesos de desarrollo rural, ya que permite organizar de manera sistemática las acciones necesarias para alcanzar los resultados esperados. Una de las principales ventajas del plan de acción es que facilita la claridad en la ejecución de las actividades, evitando improvisaciones y permitiendo que todos los actores involucrados conozcan sus responsabilidades dentro del proyecto. Esto contribuye a mejorar la coordinación entre los equipos de trabajo y a optimizar el uso de los recursos disponibles.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema6/img_7.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left")
        .tarjeta.tarjeta--fondo-img-4.py-4.p-5.rounded-3.mb-0(data-aos="zoom-in-right")
          p.mb-0 Asimismo, el plan de acción permite establecer prioridades, identificar las actividades más relevantes y asignar recursos de manera adecuada. Esto resulta especialmente importante en proyectos comunitarios donde los recursos económicos, humanos y materiales suelen ser limitados. Otra de las razones por las cuales el plan de acción es importante radica en su utilidad para el seguimiento y evaluación del proyecto. Al contar con un cronograma definido y con indicadores de avance, es posible medir el progreso de las actividades y tomar decisiones oportunas para corregir desviaciones o mejorar los resultados.

    Separador

    #t_6_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.3 Características del plan de acción
    .mb-0 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img_8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Permiten organizar, orientar y ejecutar de manera adecuada las actividades necesarias para el cumplimiento de los objetivos de un proyecto comunitario. Estas características facilitan la planificación ordenada de tareas, la asignación de responsabilidades, el uso eficiente de recursos y el seguimiento de las acciones programadas. En los proyectos comunitarios agropecuarios, un plan de acción debe ser claro, organizado, participativo y flexible, permitiendo responder a las necesidades de la comunidad y garantizar el desarrollo eficiente de las actividades productivas, sociales y organizativas.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 8.
      |  Características del plan de acción en proyectos comunitarios
    .tabla-a.mb-0(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-3 Característica
            th.col-auto.col-lg-auto Descripción general
            th.col-auto.col-lg-auto Aplicación en proyectos comunitarios 
        tbody
          tr
            td.text-start Claridad
            td.text-start El plan debe presentar actividades, objetivos y responsabilidades de manera comprensible y organizada.
            td.text-start Facilita que la comunidad entienda las acciones y tareas del proyecto.
          tr.bg-table-01
            td.text-start Organización
            td.text-start Permite estructurar actividades, tiempos, recursos y responsables de forma ordenada.
            td.text-start Mejora la coordinación de actividades agrícolas y comunitarias.
          tr
            td.text-start Uso eficiente de recursos
            td.text-start Permite planificar adecuadamente recursos humanos, técnicos y financieros.
            td.text-start Optimiza el uso de insumos, herramientas y presupuesto comunitario.
          tr.bg-table-01
            td.text-start Flexibilidad
            td.text-start El plan puede ajustarse según cambios o necesidades del proyecto y la comunidad.
            td.text-start Facilita responder a situaciones climáticas, económicas o sociales.
          tr
            td.text-start Orientación a objetivos
            td.text-start Todas las actividades deben estar dirigidas al cumplimiento de metas específicas.
            td.text-start Favorece el desarrollo eficiente del proyecto comunitario agropecuario.
          tr.bg-table-01
            td.text-start Viabilidad
            td.text-start Las actividades propuestas deben ser realizables según los recursos y capacidades disponibles.
            td.text-start Garantiza que las acciones puedan ejecutarse adecuadamente en la comunidad.
          tr
            td.text-start Sostenibilidad
            td.text-start Promueve acciones que contribuyan al fortalecimiento social, económico y ambiental del proyecto.
            td.text-start Favorece la permanencia y continuidad de los procesos comunitarios.

    Separador

    #t_6_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.4 Aplicación del plan de acción
    .mb-0 

    p.mb-5(data-aos="flip-left") La aplicación del plan de acción implica la puesta en marcha de las actividades definidas durante la fase de planificación del proyecto. Este proceso requiere la coordinación de recursos humanos, técnicos, financieros y logísticos para garantizar el cumplimiento de los objetivos establecidos. En el contexto de los proyectos comunitarios, la implementación del plan de acción suele desarrollarse a través de diferentes etapas:

    .tarjeta.tarjeta--fondo-img-3.py-5.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
      .row.g-0.align-items-stretch
        .col-12.col-lg-3.d-flex
          figure.slyder-c-imagen.w-100
            img(src='@/assets/curso/tema6/img_9.png', class="img-fluid").mb-2
        .col-12.col-lg-9.ps-lg-5
          SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4.mb-0.h-100
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-3 Socialización del plan
                p.mb-5 Antes de iniciar la ejecución de las actividades, es importante presentar el plan de acción a la comunidad y a los actores involucrados en el proyecto. Esto permite generar consenso, aclarar responsabilidades y fortalecer la participación colectiva.
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-3 Asignación de responsabilidades
                p.mb-0 Cada actividad del plan debe contar con responsables claramente definidos, quienes serán los encargados de coordinar su ejecución y de reportar los avances obtenidos.
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-3 Gestión de recursos
                p.mb-0 Durante la ejecución del plan es necesario asegurar la disponibilidad de los recursos necesarios para desarrollar las actividades programadas, incluyendo insumos, equipos, financiamiento y talento humano.
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-3 Ejecución de actividades
                p.mb-0 Consiste en la realización de las acciones programadas según el cronograma establecido. Esta fase requiere un trabajo coordinado entre los diferentes participantes del proyecto.
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-3 Seguimiento y control
                p.mb-0 El seguimiento permite verificar el cumplimiento de las actividades y evaluar los avances del proyecto. A través de reuniones periódicas, informes de avance y revisión de indicadores, se pueden identificar dificultades y tomar decisiones para mejorar la ejecución.
</template>

<script>
export default {
  name: 'Tema6',
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
