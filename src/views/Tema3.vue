<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Organizaciones comunitarias

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema3/img_1.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left") 
        .tarjeta.tarjeta--fondo-img-6.py-4.p-5.rounded-3.mb-4(data-aos="zoom-in-right")
          p.mb-0 Las organizaciones comunitarias representan una forma de asociación voluntaria entre personas que comparten intereses, necesidades o problemáticas comunes dentro de un territorio determinado. Estas organizaciones se constituyen con el propósito de promover el bienestar colectivo, fortalecer la participación ciudadana y gestionar proyectos que contribuyan al desarrollo social, económico y ambiental de las comunidades.
        p.mb-4(data-aos="zoom-in-right") En el contexto rural, las organizaciones comunitarias tienen una importancia estratégica, ya que facilitan la articulación entre los habitantes del territorio, las instituciones públicas y las organizaciones privadas. A través de estas estructuras organizativas, las comunidades pueden gestionar recursos, promover iniciativas productivas, fortalecer procesos de liderazgo local y participar activamente en la toma de decisiones que afectan su desarrollo.
        p.mb-0(data-aos="zoom-in-right") Las organizaciones comunitarias también cumplen un papel fundamental en la formulación, ejecución y seguimiento de proyectos comunitarios, ya que permiten canalizar las demandas de la población y promover procesos de desarrollo participativo.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1 Concepto
    .mb-0 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-9.order-2.order-lg-1.mb-3.mb-lg-0(data-aos="flip-left")
        .row.justify-content-center.align-items-center.mb-5
          .col-3.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema3/img_2.svg', class="img-fluid d-none d-lg-block")
          .col-12.col-lg-10
            p.mb-0(data-aos="zoom-in-right") Las organizaciones comunitarias pueden definirse como estructuras sociales conformadas por personas que se agrupan voluntariamente para trabajar de manera conjunta en la solución de problemas, la gestión de recursos y la promoción del desarrollo en su comunidad. Estas organizaciones se caracterizan por su naturaleza participativa, su orientación hacia el bienestar colectivo y su capacidad para movilizar esfuerzos comunitarios en torno a objetivos comunes.
        .tarjeta.color-secundario-10.p-4.rounded-4.mb-3.h-100.d-flex.align-items-center(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-3
            .col-12.col-lg-10
              p.mb-0 En el ámbito rural, las organizaciones comunitarias suelen surgir como respuesta a necesidades relacionadas con:
              ul.lista-ul.mb-3
                li
                  i.lista-ul__vineta 
                  span El acceso a recursos productivos.
                li
                  i.lista-ul__vineta 
                  span La mejora de la infraestructura rural.
                li
                  i.lista-ul__vineta 
                  span La comercialización de productos agrícolas.
                li
                  i.lista-ul__vineta 
                  span La defensa de los derechos territoriales.
                li
                  i.lista-ul__vineta 
                  span La protección del medio ambiente.
            
            .col-3.col-lg-2.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img_3.svg', class="img-fluid")
        p.mb-0(data-aos="zoom-in-right") La organización comunitaria permite fortalecer el capital social del territorio, entendido como la capacidad de las personas para cooperar, establecer relaciones de confianza y trabajar de manera conjunta para alcanzar metas compartidas.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema3/img_4.png', class="img-fluid")

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2 Tipos de organizaciones comunitarias
    .mb-0 
    
    p.mb-5(data-aos="zoom-in-right") Las organizaciones comunitarias pueden adoptar diferentes formas dependiendo de su estructura, objetivos y ámbito de acción. Entre los tipos más comunes en el contexto rural se encuentran:

    TabsB.color-primario.mb-0
      .pt-4.pt-md-5.pb-4.p-5(titulo="Juntas de acción comunal (J.A.C).")
        .row.justify-content-center.align-items-center.mb-5
          .col-3.col-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img_5.svg', class="img-fluid")
          .col-12.col-lg-10
            p.mb-0 Son organizaciones cívicas sin ánimo de lucro que buscan promover el desarrollo integral de las comunidades a nivel local. Estas organizaciones desempeñan un papel importante en la gestión de proyectos comunitarios, la promoción de la participación ciudadana y la articulación con las autoridades locales.
      .pt-4.pt-md-5.pb-4.p-5(titulo="Asociaciones de productores.")
        .row.justify-content-center.align-items-center.mb-5
          .col-3.col-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img_6.svg', class="img-fluid")
          .col-12.col-lg-10
            p.mb-0 Agrupan a campesinos o pequeños productores con el objetivo de mejorar la producción, la comercialización y el acceso a mercados. Estas asociaciones permiten fortalecer la capacidad productiva de los agricultores y facilitar el acceso a programas de apoyo institucional.
      .pt-4.pt-md-5.pb-4.p-5(titulo="Cooperativas rurales.")
        .row.justify-content-center.align-items-center.mb-5
          .col-3.col-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img_7.svg', class="img-fluid")
          .col-12.col-lg-10
            p.mb-0 Las cooperativas son organizaciones económicas basadas en principios de solidaridad, ayuda mutua y participación democrática. En el ámbito rural, las cooperativas pueden dedicarse a actividades como la producción agrícola, la comercialización de productos, el acceso a crédito o la prestación de servicios técnicos.
      .pt-4.pt-md-5.pb-4.p-5(titulo="Comités comunitarios.")
        .row.justify-content-center.align-items-center.mb-5
          .col-3.col-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img_8.svg', class="img-fluid")
          .col-12.col-lg-10
            p.mb-0 Los comités comunitarios son grupos de trabajo que se organizan para abordar temas específicos dentro de la comunidad, como la gestión del agua, la protección del medio ambiente, la educación rural o el desarrollo productivo.
      .pt-4.pt-md-5.pb-4.p-5(titulo="Organizaciones de segundo nivel.")
        .row.justify-content-center.align-items-center.mb-5
          .col-3.col-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/img_9.svg', class="img-fluid")
          .col-12.col-lg-10
            p.mb-0 Son organizaciones conformadas por varias asociaciones o grupos comunitarios que se articulan para fortalecer su capacidad de gestión y representación ante entidades públicas y privadas.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.3 Características 
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-3.col-lg-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img_10.svg', class="img-fluid d-none d-lg-block")
      .col-12.col-lg-11
        p.mb-0 Las organizaciones comunitarias presentan una serie de características que permiten su funcionamiento y sostenibilidad dentro del territorio.
    
    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 6.
      |  Características de las organizaciones comunitarias
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
            td.text-start Participación colectiva
            td.text-start Las decisiones y actividades se desarrollan con la participación de los integrantes de la comunidad.
            td.text-start Productores rurales participan en reuniones para definir actividades de un proyecto agrícola comunitario.
          tr.bg-table-01
            td.text-start Organización y trabajo en equipo
            td.text-start Las organizaciones distribuyen funciones y responsabilidades para alcanzar objetivos comunes.
            td.text-start Una asociación campesina organiza grupos de trabajo para desarrollar actividades productivas.
          tr
            td.text-start Objetivos comunes
            td.text-start Las organizaciones trabajan alrededor de necesidades e intereses compartidos por la comunidad.
            td.text-start La comunidad se organiza para fortalecer la comercialización de productos agropecuarios.
          tr.bg-table-01
            td.text-start Liderazgo comunitario
            td.text-start Promueven la participación de líderes que coordinan actividades y representan a la comunidad.
            td.text-start Líderes rurales gestionan apoyos institucionales para proyectos productivos.
          tr
            td.text-start Solidaridad y cooperación
            td.text-start Fomentan el apoyo mutuo y el trabajo colaborativo entre los integrantes.
            td.text-start Familias campesinas realizan jornadas comunitarias para adecuación de cultivos.
          tr.bg-table-01
            td.text-start Gestión de proyectos y recursos
            td.text-start Facilitan la formulación de proyectos y la gestión de apoyos técnicos y financieros.
            td.text-start Una cooperativa rural gestiona recursos para implementar sistemas de riego.
          tr
            td.text-start Representación comunitaria
            td.text-start Permiten que la comunidad participe y tenga representación ante entidades externas.
            td.text-start Una asociación campesina participa en mesas agropecuarias municipales.
          tr.bg-table-01
            td.text-start Fortalecimiento del desarrollo rural
            td.text-start Contribuyen al mejoramiento económico, social y productivo de las comunidades rurales.
            td.text-start Una organización rural impulsa proyectos de seguridad alimentaria y producción sostenible.

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.4 Estructura organizativa
    .mb-0 

    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img_11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es la forma en que una organización comunitaria distribuye funciones, responsabilidades, niveles de autoridad y mecanismos de coordinación para desarrollar sus actividades de manera ordenada y eficiente. Esta estructura permite organizar el trabajo colectivo, fortalecer la toma de decisiones y facilitar el cumplimiento de los objetivos comunitarios y productivos. La estructura organizativa puede variar según el tamaño, necesidades y tipo de organización comunitaria, pero generalmente incluye líderes, comités de trabajo, grupos operativos y mecanismos de participación comunitaria.

    p.mb-5(data-aos="zoom-in-right") Generalmente, las organizaciones comunitarias cuentan con los siguientes órganos de dirección:

    TabsA.color-secundario.mb-0.uno
      .tarjeta.color-secundario-10.p-5(titulo="Asamblea general")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-12.mb-0
            p.mb-3 Está conformada por todos los integrantes o asociados y permite analizar necesidades, definir acuerdos y orientar las acciones de la organización.
            p.mb-0 En este espacio se discuten temas relacionados con proyectos productivos, manejo de recursos, elección de representantes y fortalecimiento comunitario.
      .tarjeta.color-secundario-10.p-5(titulo="Junta directiva")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-12.mb-0
            p.mb-3 La junta directiva corresponde al grupo de personas encargadas de coordinar, administrar y orientar el funcionamiento de la organización comunitaria.
            p.mb-0 Generalmente está conformada por:
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta 
                span Presidente.
              li
                i.lista-ul__vineta 
                span Vicepresidente.
              li
                i.lista-ul__vineta 
                span Secretario.
              li
                i.lista-ul__vineta 
                span Tesorero.
              li
                i.lista-ul__vineta 
                span Vocales o coordinadores.
      .tarjeta.color-secundario-10.p-5(titulo="Representante legal")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-12.mb-0
            p.mb-0 El representante legal es la persona encargada de representar oficialmente a la organización ante entidades públicas, privadas y comunitarias. Su función principal consiste en realizar gestiones administrativas, firmar documentos y coordinar acciones relacionadas con proyectos y procesos organizativos.
      .tarjeta.color-secundario-10.p-5(titulo="Comités de trabajo")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-12.mb-0
            p.mb-3 Son grupos organizados dentro de la comunidad que se encargan de desarrollar actividades específicas relacionadas con los objetivos de la organización.
            p.mb-0 Tipos de comités más comunes:
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta 
                span Comité de producción. 
              li
                i.lista-ul__vineta 
                span Comité ambiental. 
              li
                i.lista-ul__vineta 
                span Comité de comercialización. 
              li
                i.lista-ul__vineta 
                span Comité financiero. 
              li
                i.lista-ul__vineta 
                span Comité de convivencia y participación.
      .tarjeta.color-secundario-10.p-5(titulo="Integrantes o asociados")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-12.mb-0
            p.mb-3 Son las personas que conforman la organización comunitaria y participan en las actividades, decisiones y procesos colectivos.
            p.mb-0 Representan la base principal de la organización y contribuyen al desarrollo de las iniciativas rurales mediante trabajo comunitario, participación y aportes productivos. 


    Separador

    #t_3_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.5 Roles de los integrantes
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema3/img_12.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 Las funciones, responsabilidades y actividades que asume cada persona dentro de una organización comunitaria o proyecto agropecuario. Estos roles permiten distribuir el trabajo de manera organizada, fortalecer la participación y facilitar el cumplimiento de los objetivos colectivos. Dentro de una organización comunitaria, los integrantes cumplen diferentes funciones relacionadas con la planificación, producción, administración, comercialización, seguimiento y gestión comunitaria. La adecuada distribución de roles favorece el trabajo en equipo, mejora la coordinación de actividades y fortalece el desarrollo organizativo de la comunidad. 

    p.mb-5(data-aos="zoom-in-right") Entre los roles más comunes se encuentran:
    
    .tarjeta.tarjeta--fondo-img-3.py-5.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
      .row.g-0.align-items-stretch
        .col-12.col-lg-3.d-flex
          figure.slyder-c-imagen.w-100
            img(src='@/assets/curso/tema3/img_13.png', class="img-fluid")
        .col-12.col-lg-9.ps-lg-5
          SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4.mb-0.h-100
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-4 Líder o representante legal
                p.mb-0 Representa legalmente a la organización ante entidades públicas y privadas y lidera los procesos comunitarios.
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta 
                    span Gestiona proyectos, convenios y apoyos institucionales.
                  li
                    i.lista-ul__vineta 
                    span Toma decisiones estratégicas y representa los intereses de la organización.
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-4 Junta directiva
                p.mb-0 Coordina, administra y organiza las actividades para el cumplimiento de los objetivos comunes.
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta 
                    span Planifica y coordina actividades, reuniones y proyectos.
                  li
                    i.lista-ul__vineta 
                    span Administra recursos y realiza seguimiento a los acuerdos.
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-4 Comités de trabajo
                p.mb-0 Grupos encargados de desarrollar actividades específicas y apoyar el funcionamiento de la organización.
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta 
                    span Ejecutan actividades y proyectos en áreas específicas.
                  li
                    i.lista-ul__vineta 
                    span Proponen soluciones, identifican necesidades y apoyan la toma de decisiones.
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-4 Integrantes o asociados
                p.mb-0 Son la base de la organización y participan activamente en las decisiones y actividades comunitarias.
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta 
                    span Participan en reuniones, asambleas y actividades.
                  li
                    i.lista-ul__vineta 
                    span Aportan ideas, trabajo y recursos para el desarrollo de proyectos.
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-4 Tesorero(a)
                p.mb-0 Administra los recursos económicos de la organización de manera responsable y transparente.
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta 
                    span Maneja los ingresos y egresos y lleva registros contables.
                  li
                    i.lista-ul__vineta 
                    span Presenta informes financieros y garantiza el buen uso de los recursos.
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-4 Secretario(a)
                p.mb-0 Lleva el control de la información, documentación y comunicaciones de la organización.
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta 
                    span Redacta actas, acuerdos y documentos importantes.
                  li
                    i.lista-ul__vineta 
                    span Mantiene la comunicación interna y externa y organiza archivos y registros.
</template>

<script>
export default {
  name: 'Tema3',
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
