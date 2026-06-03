<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Gestión ambiental

    .bloque-texto-t.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema7/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 En el contexto rural, la gestión ambiental busca promover el uso sostenible de los recursos naturales, garantizando que las actividades productivas se desarrollen de manera responsable y respetuosa con los ecosistemas.

    p.mb-0(data-aos="zoom-in-right") La gestión ambiental adquiere una gran importancia debido a la relación directa que existe entre las actividades productivas y el aprovechamiento de recursos como el suelo, el agua, la biodiversidad y los ecosistemas rurales. Por esta razón, la implementación de procesos de gestión ambiental permite fortalecer la sostenibilidad de los proyectos, mejorar las condiciones del entorno y promover prácticas productivas responsables que contribuyan al bienestar de las comunidades rurales y la conservación del medio ambiente.

    Separador

    #t_7_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.1 Concepto
    .mb-0 
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img_2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La gestión ambiental en proyectos comunitarios agropecuarios es el proceso mediante el cual las comunidades rurales planifican, organizan, ejecutan y supervisan acciones orientadas al manejo adecuado de los recursos naturales y la prevención de impactos ambientales derivados de las actividades agrícolas, pecuarias y comunitarias. Este proceso integra prácticas de conservación ambiental, producción sostenible, uso eficiente de recursos y participación comunitaria, con el propósito de garantizar el desarrollo equilibrado de las actividades productivas sin afectar negativamente el entorno natural.

    Separador

    #t_7_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.2 Tipos de requerimientos ambientales
    .mb-0 

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0
        p.mb-4(data-aos="zoom-in-right") Son las condiciones, normas, medidas y acciones que deben cumplirse para garantizar que las actividades desarrolladas dentro de un proyecto comunitario agropecuario se realicen de manera responsable con el medio ambiente. Estos requerimientos buscan prevenir, controlar y minimizar los impactos ambientales que puedan generarse sobre los recursos naturales, los ecosistemas y las comunidades rurales.
        p.mb-0(data-aos="zoom-in-right") Entre los principales tipos se encuentran:
      .col-12.col-lg-8.mb-3.mb-lg-0(data-aos="flip-left")
        .tarjeta.tarjeta--fondo-img-1.py-4.p-3.rounded-3.mb-0(data-aos="zoom-in-right")
          SlyderA(tipo="a").tarjeta.tarjeta--blanca.py-4.p-3.mb-0
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-4 Permisos ambientales
                p.mb-5 Autorizaciones otorgadas por las autoridades ambientales para realizar actividades que puedan generar uso o afectación de recursos naturales.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-4 Licencias ambientales
                p.mb-5 Instrumentos legales que autorizan la ejecución de proyectos, obras o actividades que pueden producir impactos ambientales significativos.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-4 Planes de manejo ambiental
                p.mb-5 Conjunto de medidas y acciones orientadas a prevenir, mitigar, controlar y corregir impactos ambientales generados por un proyecto.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-4 Evaluaciones de impacto ambiental
                p.mb-5 Estudios técnicos que identifican y analizan los posibles efectos ambientales de un proyecto sobre el entorno natural y social.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-4 Registros de uso de recursos 
                p.mb-5 Documentos o controles que permiten llevar seguimiento al aprovechamiento y utilización de recursos como agua, suelo, flora o fauna.

    Separador

    #t_7_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.3 Características de la gestión ambiental rural
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema7/img_3.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0
        p.mb-4(data-aos="zoom-in-right") La gestión ambiental en el ámbito rural presenta características orientadas a promover el uso sostenible de los recursos naturales y el equilibrio entre las actividades productivas y la conservación del entorno. Estas características permiten fortalecer el desarrollo rural sostenible, mejorar las condiciones ambientales del territorio y reducir los impactos negativos generados por las actividades humanas y agropecuarias.
        .tarjeta.color-secundario-10.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10
              p.mb-0 Algunas de sus principales características son:
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta 
                  span Uso sostenible del suelo agrícola.
                li
                  i.lista-ul__vineta 
                  span Conservación de la biodiversidad.
                li
                  i.lista-ul__vineta 
                  span Manejo adecuado del agua.
                li
                  i.lista-ul__vineta 
                  span Protección de ecosistemas naturales.
                li
                  i.lista-ul__vineta 
                  span Promoción de prácticas agroecológicas.
                li
                  i.lista-ul__vineta 
                  span Participación comunitaria en la conservación del territorio.
              p.mb-3(data-aos="zoom-in-right") Estas acciones contribuyen al desarrollo de sistemas productivos sostenibles.
            .col-3.col-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img_3.svg', class="img-fluid")

    Separador

    #t_7_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.4 Normativa ambiental
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") La normatividad ambiental corresponde al conjunto de leyes, normas, reglamentos y disposiciones orientadas a la protección, conservación y uso sostenible de los recursos naturales y el medio ambiente. Estas normas regulan las actividades humanas y productivas con el propósito de prevenir, controlar y reducir los impactos ambientales que puedan afectar los ecosistemas y la calidad de vida de las comunidades.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-3.mb-lg-0
        .tarjeta.tarjeta--fondo-img-4.py-4.p-5.rounded-3.mb-0(data-aos="zoom-in-right")
          p.mb-0 Entre las principales normas ambientales en Colombia se destacan:
          ul.lista-ul.mb-4
            li
              i.lista-ul__vineta 
              span Ley 99 de 1993, que creó el Sistema Nacional Ambiental (SINA).
            li
              i.lista-ul__vineta  
              span Decreto 1076 de 2015, que compila la normativa ambiental.
            li
              i.lista-ul__vineta  
              span Normas relacionadas con el uso del agua, manejo de residuos y protección de ecosistemas.
          p.mb-0 Entre las entidades que regula la normatividad ambiental tenemos:
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema7/img_4.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema7/img_5.png', class="img-fluid")
      .col-12.col-lg-8.mb-3.mb-lg-0(data-aos="flip-left") 
        .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
            .tarjeta--color-secundario-10.h-100
              .tarjeta--30.mb-4 
              h5.mb-3.text-center Ministerio de Ambiente y Desarrollo Sostenible
              p.mb-3.text-center Formula políticas, lineamientos y normas ambientales para la protección, conservación y uso sostenible de los recursos naturales del país.
            .tarjeta--color-secundario-10.h-100
              .tarjeta--31.mb-4 
              h5.mb-3.text-center CAR Corporaciones Autónomas Regionales
              p.mb-3.text-center Ejercen autoridad ambiental en su jurisdicción, regulando, controlando y realizando seguimiento al uso, aprovechamiento y conservación de los recursos naturales renovables y del medio ambiente.
            .tarjeta--color-secundario-10.h-100
              .tarjeta--32.mb-4 
              h5.mb-3.text-center Autoridades ambientales locales
              p.mb-3.text-center Realizan seguimiento, control y vigilancia ambiental en el territorio, promoviendo el cumplimiento de la normatividad ambiental vigente.
            .tarjeta--color-secundario-10.h-100
              .tarjeta--33.mb-4 
              h5.mb-3.text-center ICA Instituto Colombiano Agropecuario
              p.mb-3.text-center Regula y controla aspectos sanitarios y ambientales relacionados con la producción agropecuaria para proteger la salud animal, vegetal y ambiental, y contribuir a la seguridad alimentaria del país.
            .tarjeta--color-secundario-10.h-100
              .tarjeta--34.mb-4 
              h5.mb-3.text-center Ministerio de Agricultura y Desarrollo Rural
              p.mb-3.text-center Promueve el desarrollo del sector agropecuario mediante prácticas sostenibles, productivas e innovadoras, fortaleciendo la competitividad rural y el cuidado del medio ambiente.

    p.mb-0(data-aos="zoom-in-right") Estas regulaciones buscan garantizar la sostenibilidad ambiental y el equilibrio ecológico.

    Separador

    #t_7_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.5 Gestión del recurso hídrico
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") Son las acciones, estrategias y procesos orientados a la protección, conservación, uso eficiente y aprovechamiento sostenible del agua. Su finalidad es garantizar la disponibilidad y calidad del recurso hídrico para el desarrollo de actividades humanas, productivas, ambientales y comunitarias, promoviendo el equilibrio entre las necesidades de la población y la conservación de los ecosistemas.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-3.mb-lg-0
        .tarjeta.color-acento-contenido-5.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10
              p.mb-0 La gestión del agua implica:
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta 
                  span Uso eficiente del recurso.
                li
                  i.lista-ul__vineta 
                  span Protección de fuentes hídricas.
                li
                  i.lista-ul__vineta 
                  span Control de la contaminación.
                li
                  i.lista-ul__vineta 
                  span Implementación de sistemas de riego sostenibles.
                li
                  i.lista-ul__vineta 
                  span Conservación de cuencas hidrográficas.
              p.mb-0 Un manejo adecuado del agua contribuye a la seguridad alimentaria y al equilibrio de los ecosistemas.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema7/img_11.png', class="img-fluid")

    Separador

    #t_7_6.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.6 Técnicas de manejo y disposición de residuos
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema7/img_12.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0
        p.mb-3(data-aos="zoom-in-right") Prácticas y acciones orientadas a la clasificación, tratamiento, aprovechamiento y eliminación adecuada de los residuos generados en actividades domésticas, agrícolas, pecuarias y comunitarias. Su finalidad es reducir los impactos negativos sobre el ambiente, proteger la salud de la comunidad y promover el uso sostenible de los recursos naturales.
        p.mb-3(data-aos="zoom-in-right") En los proyectos comunitarios agropecuarios, el manejo adecuado de residuos es fundamental para prevenir la contaminación del suelo, el agua y el aire, además de fortalecer prácticas productivas sostenibles y procesos de aprovechamiento de materiales orgánicos e inorgánicos.
        p.mb-3(data-aos="zoom-in-right") Entre las principales técnicas se encuentran:
        TabsA.color-secundario.mb-3.dos
          .tarjeta.color-secundario-10.p-5(titulo="Separación en la fuente")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Consiste en clasificar los residuos desde el lugar donde se generan, con el fin de facilitar su aprovechamiento, reciclaje, tratamiento o disposición final. 
          .tarjeta.color-secundario-10.p-5(titulo="Reciclaje")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Permite recuperar, transformar y reutilizar materiales que aún pueden aprovecharse después de su uso inicial. Su objetivo principal es disminuir la generación de residuos, reducir la contaminación y promover el uso eficiente de los recursos naturales.
          .tarjeta.color-secundario-10.p-5(titulo="Compostaje")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Proceso natural de descomposición de residuos orgánicos que permite obtener abono orgánico o compost, utilizado para mejorar la fertilidad del suelo y fortalecer la producción agrícola sostenible.
          .tarjeta.color-secundario-10.p-5(titulo="Reutilización de materiales")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Radica en dar un nuevo uso a materiales, elementos o residuos antes de desecharlos, prolongando su vida útil y reduciendo la generación de residuos.
          .tarjeta.color-secundario-10.p-5(titulo="Disposición final adecuada")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Eliminación segura y controlada de residuos que no pueden ser reciclados, reutilizados o aprovechados. Esta técnica busca prevenir afectaciones ambientales y riesgos para la salud humana mediante el manejo responsable de los residuos.

    p.mb-0(data-aos="zoom-in-right") Estas prácticas permiten reducir el impacto ambiental de las actividades productivas y promover una cultura de responsabilidad ambiental.

    Separador

    #t_7_7.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.7 Criterios de reducción de emisiones de gases
    .mb-0 

    .bloque-texto-g.color-acento-contenido-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img_13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los criterios de reducción de emisiones de gases son las prácticas y lineamientos orientados a disminuir la liberación de gases contaminantes y gases de efecto invernadero generados por actividades productivas, agropecuarias, industriales y comunitarias. Estos criterios buscan reducir los impactos negativos sobre el ambiente, mejorar la calidad del aire y contribuir a la mitigación del cambio climático. En los proyectos comunitarios agropecuarios, la reducción de emisiones de gases está relacionada con el manejo sostenible de los recursos naturales, la implementación de prácticas productivas responsables y el uso eficiente de insumos, energía y sistemas de producción. 

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 9.
      |  Criterios de reducción de emisión de gases
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-3 Criterio de reducción
            th.col-auto.col-lg-auto Descripción general
            th.col-auto.col-lg-auto Acciones principales
        tbody
          tr
            td.text-start Uso eficiente de energía
            td.text-start Busca disminuir el consumo energético y reducir emisiones contaminantes.
            td.text-start Uso de energías renovables, mantenimiento de equipos y optimización del consumo eléctrico.
          tr.bg-table-01
            td.text-start Reducción de quemas agrícolas
            td.text-start Evita emisiones generadas por la quema de residuos vegetales y coberturas naturales.
            td.text-start Compostaje, aprovechamiento de residuos orgánicos y manejo sostenible de cultivos.
          tr
            td.text-start Manejo sostenible de residuos
            td.text-start Promueve técnicas adecuadas para reducir contaminación y emisiones derivadas de residuos.
            td.text-start Reciclaje, reutilización, compostaje y disposición adecuada de residuos.
          tr.bg-table-01
            td.text-start Conservación y reforestación
            td.text-start Favorece la captura de carbono y protección de ecosistemas rurales.
            td.text-start Reforestación, conservación de bosques y recuperación de áreas degradadas.
          tr
            td.text-start Producción agropecuaria sostenible
            td.text-start Impulsa prácticas productivas responsables con el ambiente.
            td.text-start Agricultura agroecológica, uso racional de fertilizantes y rotación de cultivos.
          tr.bg-table-01
            td.text-start Educación y sensibilización ambiental
            td.text-start Fortalece conocimientos y prácticas relacionadas con sostenibilidad ambiental.
            td.text-start Capacitaciones, campañas ambientales y participación comunitaria.

    p.mb-0(data-aos="zoom-in-right") Estas medidas ayudan a disminuir la huella ambiental de las actividades productivas.

    Separador

    #t_7_8.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.8 Sostenibilidad ambiental
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") La sostenibilidad ambiental se refiere a la capacidad de utilizar los recursos naturales de manera responsable, garantizando su disponibilidad para las generaciones futuras. Este enfoque promueve un equilibrio entre el desarrollo económico, el bienestar social y la conservación del medio ambiente. En el desarrollo rural, la sostenibilidad ambiental se relaciona con prácticas productivas responsables, conservación del territorio y fortalecimiento de la cultura ambiental en las comunidades.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 10.
      |  Componentes de sostenibilidad ambiental
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-3 Componente
            th.col-auto.col-lg-auto Descripción general
            th.col-auto.col-lg-auto Beneficios principales
        tbody
          tr
            td.text-start Conservación de recursos naturales
            td.text-start Protección del agua, suelo, flora y fauna.
            td.text-start Conservación ambiental y disponibilidad de recursos.
          tr.bg-table-01
            td.text-start Producción agropecuaria sostenible
            td.text-start Implementación de prácticas productivas responsables con el ambiente.
            td.text-start Reducción de contaminación y sostenibilidad productiva.
          tr
            td.text-start Manejo adecuado de residuos
            td.text-start Separación, reciclaje y disposición adecuada de residuos.
            td.text-start Disminución de contaminación ambiental.
          tr.bg-table-01
            td.text-start Uso eficiente del recurso hídrico
            td.text-start Aprovechamiento responsable y ahorro de agua.
            td.text-start Optimización del consumo de agua.
          tr
            td.text-start Educación y cultura ambiental
            td.text-start Formación y sensibilización sobre cuidado ambiental.
            td.text-start Fortalecimiento de la conciencia ambiental.
          tr.bg-table-01
            td.text-start Prevención de impactos ambientales
            td.text-start Control y reducción de afectaciones ambientales.
            td.text-start Protección del entorno rural.
          tr
            td.text-start Protección de la biodiversidad
            td.text-start Conservación de especies y ecosistemas.
            td.text-start Equilibrio ecológico y conservación natural.
          tr.bg-table-01
            td.text-start Participación comunitaria ambiental
            td.text-start Vinculación de la comunidad en acciones ambientales.
            td.text-start Fortalecimiento del compromiso comunitario.
          tr
            td.text-start Cumplimiento de normatividad ambiental
            td.text-start Aplicación de normas y requerimientos ambientales.
            td.text-start Cumplimiento legal y sostenibilidad.
          tr.bg-table-01
            td.text-start Mejoramiento continuo
            td.text-start Evaluación y ajuste de prácticas ambientales.
            td.text-start Fortalecimiento permanente del proyecto.

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .bloque-audio
          .bloque-audio__imagen
            figure.mb-0
              img(src='@/assets/curso/tema1/img_78.png', alt='Equipo de grabación de audio').img-fluid
          .bloque-audio__contenido
            p.bloque-audio__etiqueta.mb-2 XXXXXX
            TarjetaAudio.color-acento-botones.mb-0(
              texto="<h5 class='bloque-audio__titulo-player mb-0'>XXXXXX</h5>"
              :audio="require('@/assets/curso/tema1/img_78.png')"
              @audio-hover="mostrarIndicadorTarjetaAudio = true"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
</template>

<script>
export default {
  name: 'Tema7',
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
