<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Proyectos comunitarios agropecuarios

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema1/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 Un proyecto comunitario no solo implica la implementación de una actividad productiva, sino que integra procesos de organización social, fortalecimiento institucional, sostenibilidad ambiental y viabilidad financiera. Su esencia radica en la construcción participativa, donde la comunidad no es únicamente beneficiaria, sino protagonista en la toma de decisiones.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1	Concepto, tipos y alcance
    .mb-0 

    p.mb-3(data-aos="zoom-in-right") Un proyecto comunitario es un conjunto organizado de actividades planificadas, orientadas a resolver una necesidad colectiva previamente identificada en un territorio específico, mediante la participación de la comunidad beneficiaria. En el contexto rural, estos proyectos buscan mejorar las condiciones productivas, sociales, económicas y ambientales de las familias campesinas; fortaleciendo la autogestión y el desarrollo sostenible. Además de fortalecer la producción agropecuaria, los proyectos comunitarios promueven valores como la solidaridad, la cooperación, la participación social y el uso sostenible de los recursos naturales, contribuyendo al desarrollo rural sostenible y al bienestar colectivo. 

    .row.justify-content-center.align-items-center.mb-5
      .col-3.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_2.svg', class="img-fluid d-none d-lg-block")
      .col-12.col-lg-11
        p.mb-3(data-aos="zoom-in-right") Estos proyectos se construyen a partir de las necesidades, intereses y potencialidades del territorio, involucrando activamente a campesinos, asociaciones, organizaciones comunitarias e instituciones que trabajan de manera conjunta para alcanzar objetivos comunes.
        p.mb-0(data-aos="zoom-in-right") Un proyecto comunitario se caracteriza por:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_3.png', class="img-fluid")
      .col-12.col-lg-9.mb-0(data-aos="zoom-in-right")
        AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-sistema-h")
          div(titulo="Responder a una problemática real del territorio")
            p.mb-0 Deben surgir de necesidades o dificultades reales que afecten a la comunidad rural, como problemas de producción, comercialización, acceso al agua o deterioro ambiental. 
          div(titulo="Contar con diagnóstico previo")
            p.mb-0 Antes de formular un proyecto, es necesario realizar un diagnóstico que permita conocer las problemáticas, recursos y necesidades del territorio. 
          div(titulo="Involucrar actores locales")
            p.mb-0 Los proyectos deben contar con la participación de campesinos, asociaciones, instituciones y demás actores del territorio, ya que su experiencia y compromiso fortalecen el desarrollo y sostenibilidad de las iniciativas comunitarias.
          div(titulo="Tener objetivos claros y medibles")
            p.mb-0 Los objetivos del proyecto deben indicar de forma precisa qué se quiere lograr, en cuánto tiempo y con qué resultados esperados, permitiendo organizar actividades y evaluar avances.
          div(titulo="Integrar sostenibilidad económica, social y ambiental")
            p.mb-0 Los proyectos comunitarios deben generar beneficios económicos, promover el bienestar social y proteger los recursos naturales para garantizar procesos productivos sostenibles en el tiempo.
          div(titulo="Promover el fortalecimiento organizativo")
            p.mb-0 Los proyectos deben contribuir al trabajo asociativo, el liderazgo comunitario y la participación rural, fortaleciendo la capacidad de la comunidad para gestionar iniciativas y mejorar sus condiciones de vida.

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-10.mb-3.mb-lg-0(data-aos="flip-left")
        .cajon.color-secundario.p-4(data-aos="zoom-in-right")
          p.mb-0 Además, estos proyectos deben alinearse con los planes de desarrollo municipal, departamental y nacional, así como con políticas públicas relacionadas con el sector agropecuario y el desarrollo rural.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Tipos de proyectos comunitarios

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-0(data-aos="zoom-in-right") Pueden clasificarse según las actividades que desarrollan, las necesidades que atienden y los beneficios que generan en la comunidad rural. Cada tipo de proyecto busca fortalecer el territorio desde diferentes dimensiones productivas, sociales, ambientales y económicas. En el sector rural agropecuario se distinguen principalmente los siguientes:
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left")
        .tarjeta.tarjeta--fondo-img-1.py-4.p-3.rounded-3.mb-0(data-aos="zoom-in-right")
          SlyderA(tipo="a").tarjeta.tarjeta--blanca.py-4.p-3.mb-0
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 Proyectos agrícolas
                p.mb-0 Son proyectos orientados a la producción de cultivos destinados al consumo familiar, comercialización o transformación agroindustrial. 
                p.mb-0 #[strong Ejemplo:] una comunidad campesina implementa huertas comunitarias para producir hortalizas y abastecer los mercados locales.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 Proyectos pecuarios
                p.mb-0 Se enfocan en la producción y manejo de animales para la obtención de alimentos, generación de ingresos y fortalecimiento económico de las familias rurales.
                p.mb-0 #[strong Ejemplo:] una asociación rural desarrolla un proyecto de producción avícola para mejorar los ingresos de pequeños productores.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 Proyectos agroindustriales
                p.mb-0 Buscan transformar materias primas agropecuarias para agregar valor a los productos y mejorar las oportunidades de comercialización.
                p.mb-0 #[strong Ejemplo:] un grupo comunitario implementa una planta artesanal para procesar frutas y producir pulpas y mermeladas.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 Proyectos ambientales y sostenibles
                p.mb-0 Promueven la conservación de los recursos naturales y la implementación de prácticas agropecuarias responsables con el medio ambiente.
                p.mb-0 #[strong Ejemplo:] una comunidad desarrolla jornadas de reforestación y conservación de fuentes hídricas para proteger el recurso agua.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 Proyectos de seguridad alimentaria
                p.mb-0 Están dirigidos a garantizar el acceso de las familias rurales a alimentos suficientes, nutritivos y saludables.
                p.mb-0 #[strong Ejemplo:] varias familias implementan huertas caseras y sistemas integrados de producción para fortalecer el autoconsumo.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 Proyectos asociativos y de comercialización
                p.mb-0 Fortalecen la organización comunitaria y mejoran los procesos de comercialización de productos agropecuarios mediante el trabajo colectivo.
                p.mb-0 #[strong Ejemplo:] productores agrícolas crean una cooperativa para vender sus productos directamente en mercados campesinos.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 Proyectos de capacitación y asistencia técnica
                p.mb-0 Buscan fortalecer los conocimientos y capacidades de la comunidad mediante procesos de formación y acompañamiento técnico agropecuario.
                p.mb-0 #[strong Ejemplo:] una institución desarrolla capacitaciones sobre producción agroecológica y manejo sostenible del suelo para pequeños productores rurales.
            .row.justify-content-center.align-items-center
              .col-10.mb-0
                h5.mb-3 Proyectos de infraestructura rural
                p.mb-0 Se orientan al mejoramiento de espacios, instalaciones y servicios necesarios para fortalecer las actividades agropecuarias y comunitarias.
                p.mb-0 #[strong Ejemplo:] una comunidad construye un centro de acopio para almacenar y comercializar productos agrícolas de manera organizada.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Alcance

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-3(data-aos="zoom-in-right") El alcance de un proyecto comunitario agropecuario corresponde a la definición clara de los límites, objetivos, actividades, beneficiarios, recursos y resultados que se esperan alcanzar durante el desarrollo de una iniciativa comunitaria en el territorio rural. Permite establecer qué se va a realizar, cómo se desarrollará, quiénes participarán, hasta dónde llegará el proyecto y cuáles transformaciones se esperan generar en la comunidad desde el punto de vista productivo, social, económico y ambiental.
        .row.justify-content-center.align-items-start.mb-0
          .col-2.col-lg-1.mb-3.mb-lg-0.p-0(data-aos="flip-left")
            figure.p-1
              img(src='@/assets/curso/tema1/img_6.svg', class="img-fluid d-none d-lg-block")
          .col-12.col-lg-11.mb-3.mb-lg-0(data-aos="flip-left")
            p.mb-3(data-aos="zoom-in-right") En los proyectos comunitarios, el alcance no solo contempla aspectos técnicos y productivos, sino también el impacto que las acciones pueden generar en la calidad de vida de las familias campesinas, el fortalecimiento organizativo y la sostenibilidad del territorio.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_7.png', class="img-fluid")

    .tarjeta.tarjeta--fondo-img-2.py-5.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
      .tarjeta.tarjeta--blanca.py-5.p-4.mb-0
        LineaTiempoC.color-acento-botones(text-small).mb-0
          .row.justify-content-center.align-items-center(titulo="Límites")
            .col-10.mb-0
              p.mb-0 Definición clara de hasta dónde llegará la iniciativa comunitaria en términos de tiempo, cobertura, actividades y recursos disponibles. Permiten establecer qué acciones harán parte del proyecto y cuáles quedan fuera de su ejecución.
          .row.justify-content-center.align-items-center(titulo="Objetivos")
            .col-10.mb-0
              p.mb-0 Los objetivos representan los propósitos que se desean alcanzar mediante la ejecución del proyecto comunitario agropecuario. Deben ser claros, alcanzables y medibles para facilitar el seguimiento y evaluación del proyecto.
          .row.justify-content-center.align-items-center(titulo="Actividades")
            .col-10.mb-0
              p.mb-0 Acciones específicas que se desarrollan para cumplir los objetivos planteados. Estas pueden incluir procesos productivos, capacitaciones, asistencia técnica, reuniones comunitarias o actividades ambientales.
          .row.justify-content-center.align-items-center(titulo="Beneficiarios ")
            .col-10.mb-0
              p.mb-0 Son las personas, familias, asociaciones o comunidades que recibirán los beneficios directos o indirectos del proyecto comunitario agropecuario.
          .row.justify-content-center.align-items-center(titulo="Recursos")
            .col-10.mb-0
              p.mb-0 Elementos humanos, técnicos, materiales, tecnológicos y financieros necesarios para desarrollar las actividades del proyecto. La disponibilidad y adecuada administración de los recursos influye directamente en la viabilidad y sostenibilidad de la iniciativa comunitaria.
          .row.justify-content-center.align-items-center(titulo="Resultados")
            .col-10.mb-0
              p.mb-0 Son los cambios, logros o beneficios que se esperan alcanzar al finalizar el proyecto. Estos resultados pueden ser productivos, sociales, económicos, ambientales u organizativos.

    p.mb-0(data-aos="zoom-in-right") Un alcance bien definido evita desviaciones y facilita el control y seguimiento.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2 Metodologías para la formulación y estructuración de proyectos
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-3(data-aos="zoom-in-right") Las metodologías para formular y estructurar proyectos comunitarios agropecuarios son las formas organizadas de planear y desarrollar una iniciativa rural. Estas incluyen técnicas y herramientas que ayudan a identificar las necesidades de la comunidad, analizar problemas, organizar información y definir las acciones necesarias para alcanzar los objetivos del proyecto. Su aplicación permite que los proyectos se construyan de manera clara, ordenada y acorde con las condiciones sociales, productivas, económicas y ambientales del territorio. Además, facilitan la administración de recursos, la toma de decisiones y el seguimiento de las actividades propuestas.
        p.mb-0(data-aos="zoom-in-right") Entre las principales metodologías para la formulación de proyectos agropecuarios tenemos:
      .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_9.png', class="img-fluid")

    TabsA.color-secundario.mb-0.uno
      .tarjeta.color-secundario-10.p-5(titulo="Marco lógico")
        .row.justify-content-center.align-items-center.mb-0
          .col-4.col-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img_10.svg', class="img-fluid")
          .col-12.col-lg-10.mb-0
            p.mb-0 Organiza y planifica proyectos de manera estructurada permitiendo definir claramente los objetivos, actividades, recursos, indicadores y resultados esperados, facilitando el seguimiento y evaluación del proyecto.
            p.mb-0 Esta metodología ayuda a identificar qué se quiere lograr, cómo se va a realizar y cuáles serán los medios para verificar el cumplimiento de los objetivos planteados.
      .tarjeta.color-secundario-10.p-5(titulo="Enfoque participativo rural (EPR)")
        .row.justify-content-center.align-items-center.mb-0
          .col-4.col-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img_11.svg', class="img-fluid")
          .col-12.col-lg-10.mb-0
            p.mb-0 Promueve la participación de las comunidades rurales en la identificación de necesidades, análisis de problemas y construcción de soluciones para el territorio.
            p.mb-0 Utiliza herramientas como: mapas parlantes, líneas de tiempo, diagramas de flujo, matrices de priorización.
      .tarjeta.color-secundario-10.p-5(titulo="Planificación estratégica")
        .row.justify-content-center.align-items-center.mb-0
          .col-4.col-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img_12.svg', class="img-fluid")
          .col-12.col-lg-10.mb-0
            p.mb-0 Proceso que permite definir objetivos, metas y acciones para orientar el desarrollo de un proyecto a corto, mediano y largo plazo.
            p.mb-0 Esta metodología ayuda a organizar recursos, establecer prioridades y tomar decisiones que contribuyan al fortalecimiento y sostenibilidad de las iniciativas comunitarias.
      .tarjeta.color-secundario-10.p-5(titulo="Árbol de problemas y árbol de objetivos")
        .row.justify-content-center.align-items-center.mb-0
          .col-4.col-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img_13.svg', class="img-fluid")
          .col-12.col-lg-10.mb-0
            p.mb-0 Herramienta utilizada para identificar una problemática principal, sus causas y consecuencias dentro de la comunidad. A partir de este análisis, se construye el árbol de objetivos, que transforma los problemas identificados en soluciones y metas de mejora.

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.3 Actores, participación comunitaria y gestión del proyecto
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_14.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-4(data-aos="zoom-in-right") El desarrollo de proyectos comunitarios requiere del trabajo conjunto entre las personas, organizaciones e instituciones que hacen parte del territorio rural. La participación comunitaria fortalece la construcción colectiva de soluciones, facilita la toma de decisiones y promueve el compromiso de los actores involucrados en cada etapa del proyecto. Asimismo, una adecuada gestión permite coordinar recursos, actividades y responsabilidades para alcanzar objetivos que contribuyan al bienestar social, productivo y ambiental de la comunidad.
        p.mb-0(data-aos="zoom-in-right") Los proyectos comunitarios involucran múltiples actores que cumplen roles específicos, entre los más importantes tenemos:

    .tarjeta.tarjeta--fondo-img-3.py-5.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4.mb-0
        .row.justify-content-center.align-items-center.mb-0
          .col-10.col-lg-7.mb-3.mb-lg-0
            h5.mb-3 Comunidad beneficiaria
            p.mb-0 Está conformada por las personas, familias o grupos sociales que reciben los beneficios directos o indirectos del proyecto comunitario agropecuario. Generalmente, corresponde a productores rurales, asociaciones campesinas o comunidades del territorio que presentan una necesidad o problemática específica.
          .col-10.col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img_16.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-10.col-lg-7.mb-3.mb-lg-0
            h5.mb-3 Organizaciones comunitarias
            p.mb-0 Son grupos organizados de la comunidad que trabajan de manera colectiva para promover el desarrollo social, económico y productivo del territorio. Estas pueden ser asociaciones campesinas, cooperativas, juntas de acción comunal o grupos productivos rurales.
          .col-10.col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img_17.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-10.col-lg-7.mb-3.mb-lg-0
            h5.mb-3 Entidades púbicas
            p.mb-0 Son instituciones del Estado que apoyan el desarrollo de proyectos mediante programas, recursos, asistencia técnica, capacitación o acompañamiento institucional.
          .col-10.col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img_18.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-10.col-lg-7.mb-3.mb-lg-0
            h5.mb-3 Entidades privadas
            p.mb-0 Corresponden a empresas, fundaciones u organizaciones no gubernamentales que participan en proyectos comunitarios mediante inversión, asesoría, capacitación o apoyo técnico y financiero.
          .col-10.col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img_19.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-10.col-lg-7.mb-3.mb-lg-0
            h5.mb-3 Cooperación internacional
            p.mb-0 Está conformada por organismos, agencias o instituciones extranjeras que apoyan proyectos de desarrollo rural mediante recursos económicos, asistencia técnica, capacitación o programas de fortalecimiento comunitario.
          .col-10.col-lg-3.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img_20.png', class="img-fluid")

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Participación comunitaria

    p.mb-4(data-aos="zoom-in-right") Es el proceso mediante el cual las personas, grupos y organizaciones de una comunidad intervienen activamente en la identificación de necesidades, toma de decisiones, planificación, ejecución y evaluación de proyectos orientados al bienestar colectivo.
    p.mb-4(data-aos="zoom-in-right") En los proyectos comunitarios agropecuarios, la participación permite que las familias rurales aporten sus conocimientos, experiencias y capacidades para construir soluciones acordes con las realidades del territorio. Además, fortalece el sentido de pertenencia, el trabajo colaborativo y el compromiso de la comunidad con las actividades desarrolladas.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0
        .tarjeta.tarjeta-icono-esquina.color-acento-contenido-10.p-4
          .tarjeta-icono-esquina__icono.mb-3
            figure
              img(src='@/assets/curso/tema1/img_21.svg', class="img-fluid")
          .tarjeta-icono-esquina__contenido
            .tarjeta-icono-esquina__contenido
              h4.tarjeta-icono-esquina__titulo Característica

              ul.lista-ul.mb-0
                li.mb-3
                  i.lista-ul__vineta
                  span
                    strong Inclusiva 
                    br
                    |  Integra campesinos, asociaciones, mujeres y jóvenes rurales.

                li.mb-3
                  i.lista-ul__vineta
                  span
                    strong Colaborativa
                    br
                    |  Promueve el trabajo conjunto y la participación activa.

                li.mb-3
                  i.lista-ul__vineta
                  span
                    strong Organizada
                    br
                    |  Requiere coordinación, comunicación y distribución de responsabilidades.

                li.mb-0
                  i.lista-ul__vineta
                  span
                    strong Orientada al bienestar común
                    br
                    |  Busca beneficios sociales, productivos y económicos para toda la comunidad.
      .col-12.col-lg-4.mb-3.mb-lg-0
        .tarjeta.tarjeta-icono-esquina.color-terciario-10.p-4
          .tarjeta-icono-esquina__icono.mb-3
            figure
              img(src='@/assets/curso/tema1/img_22.svg', class="img-fluid")
          .tarjeta-icono-esquina__contenido
            h4.tarjeta-icono-esquina__titulo Importancia
            ul.lista-ul.mb-0
              li.mb-4
                i.lista-ul__vineta
                span Favorece la integración comunitaria y la construcción de soluciones colectivas.
              li.mb-4
                i.lista-ul__vineta
                span Fortalece el compromiso, la organización y el sentido de pertenencia frente al proyecto.
              li.mb-4
                i.lista-ul__vineta
                span Facilita el cumplimiento de actividades y objetivos del proyecto.
              li.mb-0
                i.lista-ul__vineta
                span Contribuye al desarrollo rural sostenible y al mejoramiento de la calidad de vida.

      .col-12.col-lg-4.mb-3.mb-lg-0
        .tarjeta.tarjeta-icono-esquina.color-primario-10.p-4
          .tarjeta-icono-esquina__icono.mb-3
            figure
              img(src='@/assets/curso/tema1/img_23.svg', class="img-fluid")
          .tarjeta-icono-esquina__contenido
            h4.tarjeta-icono-esquina__titulo Formas de participación
            ul.lista-ul.mb-0
              li.mb-4
                i.lista-ul__vineta
                span Reuniones, talleres y espacios de diálogo para compartir ideas, analizar problemas y tomar decisiones juntos.
              li.mb-4
                i.lista-ul__vineta
                span Jornadas comunitarias, actividades grupales y proyectos asociativos para alcanzar objetivos comunes.
              li.mb-4
                i.lista-ul__vineta
                span Comités de trabajo, asignación de funciones, cronogramas y reuniones de seguimiento para coordinar y evaluar acciones.
              li.mb-0
                i.lista-ul__vineta
                span Participación en proyectos productivos, actividades ambientales, capacitaciones y estrategias que mejoren las condiciones de vida.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Gestión del proyecto

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_24.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-4(data-aos="zoom-in-right") La gestión del proyecto corresponde al proceso de planificación, organización, ejecución y seguimiento de las actividades necesarias para desarrollar una iniciativa de manera eficiente y cumplir los objetivos establecidos. 
        .tarjeta.tarjeta--fondo-img-4.py-4.p-5.rounded-3.mb-4(data-aos="zoom-in-right")
          p.mb-4 En los proyectos comunitarios agropecuarios, la gestión permite coordinar recursos, distribuir responsabilidades y organizar las acciones productivas, sociales y administrativas que se desarrollan dentro de la comunidad. Además, facilita el control de tiempos, costos y actividades para garantizar el adecuado funcionamiento del proyecto.
          p.mb-0 Una buena gestión contribuye al fortalecimiento organizativo, mejora la toma de decisiones y favorece el cumplimiento de metas orientadas al desarrollo rural sostenible y al bienestar de la comunidad.
        p.mb-4(data-aos="zoom-in-right") Entre los elementos que lo componen tenemos:

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-9.order-2.order-lg-1.mb-3.mb-lg-0(data-aos="flip-left")
        TabsA.color-secundario.mb-3.uno
          .tarjeta.color-secundario-10.p-5(titulo="Planificación")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Consiste en definir los objetivos, actividades, recursos, tiempos y estrategias necesarias para desarrollar el proyecto de manera organizada. 
                p.mb-0 #[strong Ejemplo:] la comunidad establece las actividades y cronograma para implementar un proyecto de huertas comunitarias.
          .tarjeta.color-secundario-10.p-5(titulo="Organización")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Permite distribuir responsabilidades, coordinar tareas y establecer funciones entre los participantes del proyecto.
                p.mb-0 #[strong Ejemplo:] una asociación campesina asigna responsables para producción, compras y seguimiento del proyecto.
          .tarjeta.color-secundario-10.p-5(titulo="Recursos")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Incluye los recursos humanos, técnicos, materiales y financieros necesarios para ejecutar las actividades del proyecto.
                p.mb-0 #[strong Ejemplo:] la comunidad aporta mano de obra y una entidad local suministra herramientas e insumos agrícolas.
          .tarjeta.color-secundario-10.p-5(titulo="Cronograma")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Es la programación de actividades y tiempos establecidos para desarrollar las diferentes etapas del proyecto.
                p.mb-0 #[strong Ejemplo:] el proyecto agrícola organiza sus actividades de siembra, mantenimiento y cosecha durante seis meses.
          .tarjeta.color-secundario-10.p-5(titulo="Seguimiento y control")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Permite verificar el avance de las actividades, identificar dificultades y tomar decisiones para mejorar el desarrollo del proyecto.
                p.mb-0 #[strong Ejemplo:] la comunidad realiza reuniones periódicas para evaluar el cumplimiento de las actividades programadas.
          .tarjeta.color-secundario-10.p-5(titulo="Evaluación")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Consiste en analizar los resultados e impactos alcanzados con el proyecto para determinar el cumplimiento de los objetivos.
                p.mb-0 #[strong Ejemplo:] la asociación rural evalúa si el proyecto mejoró la producción y los ingresos de las familias campesinas.
          .tarjeta.color-secundario-10.p-5(titulo="Comunicación")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Facilita el intercambio de información entre los actores del proyecto y fortalece la coordinación de actividades. 
                p.mb-0 #[strong Ejemplo:] la comunidad realiza reuniones informativas para socializar avances y dificultades del proyecto. 
      .col-12.col-md-8.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_26.png', class="img-fluid")

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.4 Técnicas de monitoreo, evaluación y ajuste
    .mb-0 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_27.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La implementación de proyectos comunitarios agropecuarios requiere mecanismos de control y análisis que permitan verificar el comportamiento de las actividades ejecutadas, medir el nivel de cumplimiento de los objetivos y determinar la efectividad de las estrategias aplicadas en el territorio. En este contexto, las técnicas de monitoreo, evaluación y ajuste constituyen herramientas de gestión orientadas al seguimiento sistemático de los procesos, la identificación de desviaciones operativas y la toma de decisiones para el mejoramiento continuo del proyecto.

    .row.justify-content-center.align-items-center.mb-5
      .col-3.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_28.svg', class="img-fluid d-none d-lg-block")
      .col-12.col-lg-11
        p.mb-3(data-aos="zoom-in-right") Estas técnicas permiten consolidar información relevante sobre el desempeño productivo, organizativo, financiero y social de la iniciativa, facilitando la optimización de recursos, el fortalecimiento de la participación comunitaria y la sostenibilidad de las acciones desarrolladas. Su aplicación favorece la capacidad de adaptación del proyecto frente a cambios del entorno, riesgos productivos o nuevas necesidades identificadas durante la fase de identificación.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Técnicas de monitoreo

    p.mb-5(data-aos="zoom-in-right") Las técnicas de monitoreo corresponden a los mecanismos utilizados para realizar seguimiento permanente al desarrollo de las actividades y verificar el comportamiento operativo del proyecto durante su ejecución. Su finalidad es controlar el avance de los procesos, validar el cumplimiento de las metas establecidas e identificar oportunamente situaciones que puedan afectar el desempeño de la iniciativa comunitaria. Entre las más importantes tenemos:

    .row.justify-content-center.mb-5
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="100" tabindex="0")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img_29.png", alt="Observación directa en campo del proyecto")
          .crd_hover_txt--body
            h4 Observación directa
            p Consiste en verificar presencialmente las condiciones reales en las que se desarrollan las actividades del proyecto dentro del territorio. La observación directa resulta fundamental para evaluar variables relacionadas con el manejo de cultivos, estado sanitario animal, conservación de recursos naturales, funcionamiento de infraestructura productiva y nivel de participación comunitaria.
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="200" tabindex="1")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img_30.png", alt="Registro de actividades del proyecto")
          .crd_hover_txt--body
            h4 Registro de actividades
            p Se basa en sistematizar datos sobre actividades desarrolladas, recursos utilizados, tiempos de ejecución, participación de beneficiarios y resultados obtenidos. Los registros pueden elaborarse mediante formatos físicos o digitales, bitácoras técnicas, listas de asistencia, reportes de producción, informes de avance y matrices de seguimiento.
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="300" tabindex="3")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img_31.png", alt="Reunión de seguimiento del proyecto")
          .crd_hover_txt--body
            h4 Reuniones de seguimiento
            p Son espacios de análisis técnico y organizativo orientados a revisar el comportamiento del proyecto, evaluar avances y coordinar acciones de mejora. Estas reuniones permiten fortalecer la comunicación entre los actores involucrados y facilitan la toma de decisiones de manera participativa.
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="400" tabindex="4")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img_32.png", alt="Indicadores de seguimiento del proyecto")
          .crd_hover_txt--body
            h4 Indicadores de seguimiento
            p Son instrumentos de medición utilizados para evaluar el nivel de avance y cumplimiento de los objetivos del proyecto. Permiten analizar de manera cuantitativa y cualitativa el comportamiento de las actividades ejecutadas y los resultados alcanzados. Los indicadores pueden relacionarse con productividad, participación, sostenibilidad ambiental, eficiencia financiera y fortalecimiento organizativo.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Evaluación y ajuste

    p.mb-5(data-aos="zoom-in-right") La evaluación y el ajuste constituyen procesos estratégicos dentro de la gestión de proyectos comunitarios agropecuarios, orientados al análisis de resultados, la verificación del cumplimiento de objetivos y la implementación de acciones de mejora durante la ejecución de la iniciativa. Estas técnicas permiten valorar el desempeño técnico, organizativo, social y productivo del proyecto, identificando logros, limitaciones y oportunidades de fortalecimiento.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 1.
      |  Proceso de evaluación y ajuste de proyectos comunitarios
    .tabla-a.mb-0(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-2 Proceso
            th.col-auto.col-lg-auto Propósito
            th.col-auto.col-lg-auto Técnicas utilizadas
            th.col-auto.col-lg-4 Aplicación en proyectos comunitarios 
        tbody
          tr
            td Evaluación 
            td.text-start Analizar el cumplimiento de objetivos, resultados e impactos generados por el proyecto.
            td.text-start Evaluación de resultados, encuestas, entrevistas, análisis comparativo y evaluación participativa.
            td.text-start Permite identificar logros, dificultades, nivel de participación y beneficios obtenidos por la comunidad rural.
          tr.bg-table-01
            td Ajuste
            td.text-start Implementar mejoras o acciones correctivas para fortalecer el desarrollo del proyecto.
            td.text-start Reprogramación de actividades, redistribución de recursos, mejoramiento de estrategias y toma de decisiones comunitarias.
            td.text-start Facilita adaptar el proyecto frente a cambios del entorno, dificultades productivas o nuevas necesidades del territorio.

    Separador

    #t_1_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.5 Indicadores, presupuesto y cronograma
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-3(data-aos="zoom-in-right") La planificación y organización de un proyecto comunitario agropecuario requieren herramientas que permitan orientar las actividades, administrar adecuadamente los recursos y verificar el cumplimiento de los objetivos propuestos. En este contexto, los indicadores, el presupuesto y el cronograma constituyen elementos fundamentales para la gestión eficiente de las iniciativas rurales.
        .row.justify-content-center.align-items-center.mb-3
          .col-3.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema1/img_33.svg', class="img-fluid d-none d-lg-block")
          .col-12.col-lg-10
            p.mb-0(data-aos="zoom-in-right") Los indicadores facilitan la medición de avances y resultados mediante datos que permiten evaluar el desempeño del proyecto. El presupuesto permite organizar y controlar los recursos financieros necesarios para ejecutar las actividades programadas, garantizando un uso adecuado de los recursos disponibles. Por su parte, el cronograma establece la distribución de actividades y tiempos de ejecución, facilitando la coordinación y seguimiento de las acciones desarrolladas.
        p.mb-0(data-aos="zoom-in-right") La articulación de estos componentes fortalece la planificación operativa del proyecto, mejora la toma de decisiones y contribuye al cumplimiento de metas orientadas al desarrollo productivo, organizativo y sostenible de la comunidad rural. 
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_34.png', class="img-fluid")

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Indicadores

    .bloque-texto-g.color-acento-contenido-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_35.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los indicadores son herramientas de medición utilizadas para verificar el avance, desempeño y cumplimiento de los objetivos establecidos en un proyecto comunitario agropecuario. Permiten obtener información clara y organizada sobre los resultados alcanzados, facilitando el seguimiento de las actividades y la evaluación de los impactos generados en la comunidad rural. En los proyectos comunitarios, los indicadores ayudan a analizar si las acciones desarrolladas están contribuyendo al fortalecimiento productivo, organizativo, social, económico y ambiental del territorio. Además, permiten identificar dificultades, realizar ajustes oportunos y mejorar la toma de decisiones durante la ejecución del proyecto.

    .row.justify-content-center.align-items-center.mb-3
      .col-3.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_36.svg', class="img-fluid d-none d-lg-block")
      .col-12.col-lg-11
        p.mb-3(data-aos="zoom-in-right") Los indicadores pueden expresarse mediante datos numéricos, porcentajes, cantidades, niveles de participación o cambios observados en la comunidad. Su adecuada formulación facilita el control y la evaluación de los procesos desarrollados.
        p.mb-0(data-aos="zoom-in-right") Entre los tipos de indicadores más utilizados se encuentran:

    .row.justify-content-center.align-items-center.mb-5 
      .col-12.col-lg-8
        .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-12 col-lg-6").p-2.rounded-3
            .tarjeta--color-color-primario-5.h-100
              .tarjeta--01.mb-4 
              h5.mb-3.text-center De cumplimiento
              p.mb-0.text-center Permiten verificar si las actividades programadas se ejecutaron según lo establecido.
              p.mb-3.text-center #[strong Ejemplos:] cantidad de talleres realizados frente a los talleres programados.
            .tarjeta--color-color-primario-5.h-100
              .tarjeta--02.mb-4
              h5.mb-3.text-center De producción
              p.mb-0.text-center Miden los resultados relacionados con las actividades productivas del proyecto.
              p.mb-3.text-center #[strong Ejemplos:] kilogramos de producción agrícola obtenidos por ciclo de cultivo.
            .tarjeta--color-color-primario-5.h-100
              .tarjeta--03.mb-4
              h5.mb-3.text-center Financieros
              p.mb-0.text-center Evalúan el manejo y utilización de los recursos económicos del proyecto.
              p.mb-3.text-center #[strong Ejemplos:] porcentaje de ejecución del presupuesto asignado.
            .tarjeta--color-color-primario-5.h-100
              .tarjeta--04.mb-4
              h5.mb-3.text-center De participación
              p.mb-0.text-center Analizan el nivel de involucramiento de la comunidad en las actividades del proyecto.
              p.mb-3.text-center #[strong Ejemplos:] número de productores rurales que participan en las reuniones comunitarias.
            .tarjeta--color-color-primario-5.h-100
              .tarjeta--05.mb-4
              h5.mb-3.text-center Ambientales
              p.mb-0.text-center Evalúan el impacto ambiental y las prácticas sostenibles implementadas.
              p.mb-3.text-center #[strong Ejemplos:] reducción del uso de agroquímicos en los sistemas productivos.
            .tarjeta--color-color-primario-5.h-100
              .tarjeta--06.mb-4
              h5.mb-3.text-center Impacto social
              p.mb-0.text-center Miden los cambios generados en las condiciones de vida y organización de la comunidad.
              p.mb-3.text-center #[strong Ejemplos:] incremento en los ingresos familiares de los productores beneficiados.
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-out-up")
        figure
          img(src='@/assets/curso/tema1/img_43.png', class="img-fluid")

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Presupuesto

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_44.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-4(data-aos="zoom-in-right") Corresponde a la planificación financiera que permite organizar, calcular y controlar los recursos económicos necesarios para desarrollar un proyecto comunitario agropecuario. A través del presupuesto se estiman los costos de las actividades, materiales, insumos, servicios y recursos humanos requeridos para cumplir los objetivos propuestos.
        .tarjeta.tarjeta--fondo-img-4.py-4.p-5.rounded-3.mb-4(data-aos="zoom-in-right")
          p.mb-4 En los proyectos comunitarios, el presupuesto facilita la administración adecuada de los recursos disponibles y permite prever las inversiones necesarias para ejecutar las actividades de manera organizada y sostenible. Además, contribuye a evitar gastos innecesarios, fortalecer el control financiero y garantizar la viabilidad económica de la iniciativa.
          p.mb-0 La elaboración del presupuesto debe realizarse teniendo en cuenta las necesidades reales del proyecto, las condiciones productivas del territorio y la disponibilidad de recursos económicos, técnicos y comunitarios.

    .subtitulo-destacado.subtitulo-destacado--mini.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_47.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Elementos de un presupuesto

    .row.justify-content-center.align-items-start.mb-4
      .col-12.col-lg-9.mb-0(data-aos="zoom-in-right")
        AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-sistema-h")
          div(titulo="Costos de insumos y materiales")
            p.mb-0 Son todos los bienes y materiales necesarios para el desarrollo de las actividades productivas y operativas del proyecto. Los insumos representan recursos fundamentales para garantizar el funcionamiento adecuado de los procesos agropecuarios.
            p.mb-0 #[strong Ejemplos:] semillas, fertilizantes, abonos, medicamentos veterinarios.
          div(titulo="Mano de obra")
            p.mb-0 Recurso humano necesario para ejecutar las actividades del proyecto. Incluye tanto el trabajo comunitario como el personal técnico o especializado requerido para determinadas labores productivas, administrativas o de acompañamiento.
          div(titulo="Transporte y logística")
            p.mb-0 Contempla los costos asociados al traslado de personas, insumos, materiales, herramientas y productos relacionados. También incluye la organización de actividades relacionadas con almacenamiento, distribución y entrega de productos o materiales.
          div(titulo="Capacitación y asistencia técnica")
            p.mb-0 Recursos destinados a fortalecer los conocimientos, capacidades y habilidades mediante procesos de formación y acompañamiento técnico. En este se pueden contemplar: talleres formativos, asesorías técnicas, procesos de transferencia de conocimiento.
          div(titulo="Infraestructura y equipos")
            p.mb-0 Inversiones en adecuación, construcción o adquisición de espacios, instalaciones, maquinaria y equipos necesarios para el proyecto. Incluye: corrales, invernaderos, sistemas de riego, equipos de procesamiento, tanques de almacenamiento, maquinaria agrícola.
      .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_45.png', class="img-fluid")

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Cronograma

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_46.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-3(data-aos="zoom-in-right") El cronograma es una herramienta de planificación que permite organizar y distribuir las actividades de un proyecto comunitario agropecuario en un periodo de tiempo determinado. Su función principal es establecer el orden, duración y fechas de ejecución de cada actividad, facilitando el seguimiento y control de las acciones programadas.
        p.mb-3(data-aos="zoom-in-right") En los proyectos comunitarios, el cronograma permite coordinar las tareas productivas, administrativas, organizativas y formativas necesarias para alcanzar los objetivos planteados. Además, contribuye a optimizar el uso de recursos, mejorar la distribución de responsabilidades y garantizar el cumplimiento de las metas dentro de los tiempos establecidos.
        p.mb-0(data-aos="zoom-in-right") Los aspectos que se deben tener en cuenta en la construcción de cronogramas son los siguientes:

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 2.
      |  Aspectos claves para la construcción de cronogramas
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-3 Aspecto
            th.col-auto.col-lg-auto Descripción
            th.col-auto.col-lg-auto Importancia en proyectos comunitarios
        tbody
          tr
            td.text-start Definición de actividades
            td.text-start Identifica las tareas necesarias para desarrollar el proyecto.
            td.text-start Permite organizar las acciones productivas y comunitarias.
          tr.bg-table-01
            td.text-start Asignación de tiempos
            td.text-start Establece la duración de cada actividad.
            td.text-start Facilita el cumplimiento de metas y cronogramas productivos.
          tr
            td.text-start Distribución de responsabilidades
            td.text-start Define responsables para cada tarea.
            td.text-start Fortalece la organización y participación comunitaria.
          tr.bg-table-01
            td.text-start Seguimiento de avances
            td.text-start Permite verificar el cumplimiento de actividades.
            td.text-start Ayuda a identificar retrasos y necesidades de ajuste.
          tr
            td.text-start Organización de recursos
            td.text-start Coordina recursos humanos, materiales y financieros.
            td.text-start Mejora la eficiencia en la ejecución del proyecto.
          tr.bg-table-01
            td.text-start Flexibilidad
            td.text-start Permite realizar modificaciones frente a imprevistos.
            td.text-start Favorece la adaptación a condiciones climáticas y productivas.

    .subtitulo-destacado.subtitulo-destacado--mini.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_47.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Herramientas para la construcción de cronogramas:

    .row.justify-content-center.align-items-start.mb-0
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_48.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left")
        TabsA.color-secundario.mb-3.uno
          .tarjeta.color-secundario-10.p-5(titulo="Diagrama de Gantt")
            p.mb-0 Herramienta gráfica utilizada para representar visualmente las actividades del proyecto y el tiempo de ejecución de cada una. 
          .tarjeta.color-secundario-10.p-5(titulo="Calendario de actividades")
            p.mb-0 Permite distribuir actividades según días, semanas o meses específicos, facilitando la organización temporal de las acciones del proyecto y mejora la coordinación entre los participantes.
          .tarjeta.color-secundario-10.p-5(titulo="Matriz de planificación")
            p.mb-3 Organiza información relacionada con:
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta 
                span Actividades.
              li
                i.lista-ul__vineta 
                span Responsables.
              li
                i.lista-ul__vineta 
                span Tiempos.
              li
                i.lista-ul__vineta 
                span Recursos.
              li
                i.lista-ul__vineta 
                span Indicadores.
              li
                i.lista-ul__vineta 
                span Resultados esperados.
          .tarjeta.color-secundario-10.p-5(titulo="Software y herramientas digitales")
            p.mb-3 Actualmente existen herramientas tecnológicas que permiten elaborar cronogramas de manera más organizada y dinámica. Entre las más utilizadas se encuentran:
            ul.lista-ul.mb-0
              li
                i.lista-ul__vineta 
                span Microsoft Excel.
              li
                i.lista-ul__vineta 
                span Microsoft Project.
              li
                i.lista-ul__vineta 
                span Trello.
              li
                i.lista-ul__vineta 
                span Asana.
              li
                i.lista-ul__vineta 
                span Google Calendar.

    Separador

    #t_1_6.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.6 Gestión de recursos, proveedores y de financiación
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema1/img_49.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 La ejecución de proyectos comunitarios agropecuarios requiere procesos de organización y administración que permitan garantizar el uso adecuado de los recursos necesarios para el desarrollo de las actividades programadas. En este contexto, la gestión de recursos, proveedores y financiación constituye un componente fundamental para asegurar la viabilidad operativa, económica y productiva de las iniciativas comunitarias.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_50.png', class="img-fluid")
      .col-12.col-lg-10.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-3(data-aos="zoom-in-right") La gestión de recursos permite planificar, distribuir y controlar los elementos humanos, técnicos, materiales y financieros requeridos para el cumplimiento de los objetivos del proyecto. Por su parte, los proveedores cumplen una función importante al suministrar insumos, equipos, herramientas y servicios necesarios para fortalecer los procesos productivos y organizativos de la comunidad rural. Asimismo, la financiación comprende las estrategias, fuentes y mecanismos utilizados para obtener los recursos económicos que permitan ejecutar y sostener las actividades del proyecto.
        p.mb-0(data-aos="zoom-in-right") La adecuada articulación de estos elementos favorece la optimización de recursos, fortalece la capacidad de gestión comunitaria y contribuye al desarrollo eficiente y sostenible de los proyectos agropecuarios en el territorio rural.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Gestión de recursos 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-3(data-aos="zoom-in-right") La gestión de recursos es el proceso mediante el cual se planifican, organizan, administran y controlan los recursos necesarios para el desarrollo de un proyecto comunitario agropecuario. Su finalidad es garantizar que los recursos humanos, técnicos, materiales, financieros y naturales sean utilizados de manera eficiente para cumplir los objetivos planteados y fortalecer el desarrollo sostenible de la comunidad rural.
        p.mb-0(data-aos="zoom-in-right") En los proyectos comunitarios, la adecuada gestión de recursos permite optimizar esfuerzos, evitar desperdicios, mejorar la productividad y fortalecer la capacidad organizativa de la comunidad. Además, facilita la distribución de responsabilidades, el control de actividades y la sostenibilidad de las acciones implementadas en el territorio.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_51.png', class="img-fluid")

    .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
      SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-4").p-2.rounded-3
        .tarjeta--color-secundario-10.h-100
          .tarjeta--07.mb-4 
          h5.mb-3.text-center A. Identificación de recursos
          ul.lista-ul.text-center.mb-0
            li
              i.lista-ul__vineta 
              span Detectar los recursos necesarios para el proyecto. 
            li
              i.lista-ul__vineta 
              span Determinar la disponibilidad interna y externa. 
        .tarjeta--color-secundario-10.h-100
          .tarjeta--08.mb-4 
          h5.mb-3.text-center B. Planificación de recursos
          ul.lista-ul.text-center.mb-0
            li
              i.lista-ul__vineta 
              span Definir cómo y cuándo se utilizarán los recursos. 
            li
              i.lista-ul__vineta 
              span Establecer actividades, tiempos, responsables y presupuesto. 
        .tarjeta--color-secundario-10.h-100
          .tarjeta--09.mb-4 
          h5.mb-3.text-center C. Distribución de recursos
          ul.lista-ul.text-center.mb-0
            li
              i.lista-ul__vineta 
              span Asignar los recursos a las personas o áreas responsables. 
            li
              i.lista-ul__vineta 
              span Garantizar la disponibilidad de insumos, herramientas y equipos. 
        .tarjeta--color-secundario-10.h-100
          .tarjeta--10.mb-4 
          h5.mb-3.text-center D. Ejecución de actividades
          ul.lista-ul.text-center.mb-0
            li
              i.lista-ul__vineta 
              span Desarrollar las actividades programadas según lo planificado. 
            li
              i.lista-ul__vineta 
              span Utilizar correctamente los recursos disponibles. 
        .tarjeta--color-secundario-10.h-100
          .tarjeta--11.mb-4 
          h5.mb-3.text-center E. Seguimiento y control
          ul.lista-ul.text-center.mb-0
            li
              i.lista-ul__vineta 
              span Verificar el uso adecuado de los recursos. 
            li
              i.lista-ul__vineta 
              span Monitorear el avance de las actividades y los resultados. 
        .tarjeta--color-secundario-10.h-100
          .tarjeta--12.mb-4 
          h5.mb-3.text-center F. Evaluación y mejora
          ul.lista-ul.text-center.mb-0
            li
              i.lista-ul__vineta 
              span Evaluar los resultados obtenidos frente a los objetivos. 
            li
              i.lista-ul__vineta 
              span Identificar oportunidades de mejora y definir acciones correctivas. 
        .tarjeta--color-secundario-10.h-100
          .tarjeta--13.mb-4 
          h5.mb-3.text-center G. Fortalecimiento del proyecto
          ul.lista-ul.text-center.mb-0
            li
              i.lista-ul__vineta 
              span Implementar mejoras para optimizar el uso de los recursos. 
            li
              i.lista-ul__vineta 
              span Promover la sostenibilidad y continuidad de la iniciativa.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Proveedores

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema1/img_59.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left")
        p.mb-4(data-aos="zoom-in-right") Son personas, empresas, asociaciones o entidades encargadas de suministrar bienes, insumos, herramientas, equipos o servicios necesarios para el desarrollo de un proyecto comunitario agropecuario. Su función es garantizar la disponibilidad de los recursos requeridos para ejecutar las actividades productivas, organizativas y administrativas de manera eficiente y oportuna.
        .tarjeta.tarjeta--fondo-img-4.py-4.p-5.rounded-3.mb-0(data-aos="zoom-in-right")
          p.mb-0 En los proyectos comunitarios rurales, los proveedores cumplen un papel estratégico porque contribuyen al abastecimiento de materiales esenciales para la producción agrícola, pecuaria, ambiental y agroindustrial. Además, influyen directamente en aspectos como calidad, costos, tiempos de entrega y sostenibilidad de las actividades desarrolladas en el territorio.
      
    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-lg-6.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema1/img_60.png', class="img-fluid") 
          h5.mb-0 a. Proveedores de insumos agrícolas y pecuarios
          p.mb-0 Recursos que pueden suministrar
          ul.lista-ul.text-center.mb-0
            li
              i.lista-ul__vineta 
              span Semillas.
            li
              i.lista-ul__vineta 
              span Fertilizantes.
            li
              i.lista-ul__vineta 
              span Abonos orgánicos.
            li
              i.lista-ul__vineta 
              span Alimento animal.
            li
              i.lista-ul__vineta 
              span Medicamentos veterinarios.
            li
              i.lista-ul__vineta 
              span Productos fitosanitarios.
      .col-12.col-lg-6.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema1/img_61.png', class="img-fluid") 
          h5.mb-0 b. Proveedores de herramientas y equipos
          p.mb-0 Recursos que pueden suministrar
          ul.lista-ul.text-center.mb-0
            li
              i.lista-ul__vineta 
              span Herramientas agrícolas.
            li
              i.lista-ul__vineta 
              span Equipos de riego.
            li
              i.lista-ul__vineta 
              span Maquinaria.
            li
              i.lista-ul__vineta 
              span Equipos de procesamiento.
            li
              i.lista-ul__vineta 
              span Equipos de almacenamiento.
      .col-12.col-lg-6.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema1/img_62.png', class="img-fluid") 
          h5.mb-0 c. Proveedores de servicios técnicos
          p.mb-0 Servicios que pueden ofrecer
          ul.lista-ul.text-center.mb-0
            li
              i.lista-ul__vineta 
              span Asistencia técnica agropecuaria.
            li
              i.lista-ul__vineta 
              span Capacitaciones.
            li
              i.lista-ul__vineta 
              span Mantenimiento de equipos.
            li
              i.lista-ul__vineta 
              span Asesorías administrativas.
            li
              i.lista-ul__vineta 
              span Servicios veterinarios.
      .col-12.col-lg-6.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema1/img_63.png', class="img-fluid")
          h5.mb-0 d. Proveedores logísticos y de transporte
          p.mb-0 Servicios que pueden suministrar
          ul.lista-ul.text-center.mb-0
            li
              i.lista-ul__vineta 
              span Transporte de productos.
            li
              i.lista-ul__vineta 
              span Distribución de insumos.
            li
              i.lista-ul__vineta 
              span Almacenamiento.
            li
              i.lista-ul__vineta 
              span Servicios de carga y descarga.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 1.
      |    Proceso básico de gestión de proveedores
    figure(data-aos="flip-left").mb-5
      img(src='@/assets/curso/tema1/img_64.svg', class="img-fluid d-none d-lg-block", alt="La figura muestra el  proceso básico de gestión de proveedores. El proceso inicia con la identificación de necesidades, seguida de la búsqueda de proveedores, selección y evaluación, y compra o contratación. Posteriormente continúa con la entrega y verificación de recursos o servicios, el uso de los recursos, el seguimiento y evaluación del desempeño, y finaliza con el mejoramiento y continuidad del proceso. Cada etapa incluye un ícono representativo relacionado con verificación, búsqueda, evaluación, contratación, entrega, operación, control y crecimiento, facilitando la comprensión visual del proceso de gestión de proveedores.").mb-3
      img(src='@/assets/curso/tema1/img_65.svg', class="img-fluid d-block d-lg-none", alt="La figura muestra el  proceso básico de gestión de proveedores. El proceso inicia con la identificación de necesidades, seguida de la búsqueda de proveedores, selección y evaluación, y compra o contratación. Posteriormente continúa con la entrega y verificación de recursos o servicios, el uso de los recursos, el seguimiento y evaluación del desempeño, y finaliza con el mejoramiento y continuidad del proceso. Cada etapa incluye un ícono representativo relacionado con verificación, búsqueda, evaluación, contratación, entrega, operación, control y crecimiento, facilitando la comprensión visual del proceso de gestión de proveedores.").mb-3
      figcaption Nota. SENA, (2026). 

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema1/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Gestión de financiación

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_66.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es el conjunto de acciones orientadas a identificar, obtener, organizar y administrar los recursos económicos necesarios para desarrollar un proyecto comunitario agropecuario. Su propósito es asegurar la disponibilidad de recursos financieros que permitan ejecutar las actividades programadas, fortalecer la sostenibilidad de la iniciativa y contribuir al cumplimiento de los objetivos productivos, sociales y organizativos de la comunidad.

    .row.justify-content-center.align-items-center.mb-3
      .col-3.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_67.svg', class="img-fluid d-none d-lg-block")
      .col-12.col-lg-11
        p.mb-3(data-aos="zoom-in-right") En los proyectos comunitarios rurales, la financiación cumple un papel fundamental, ya que permite cubrir costos relacionados con insumos, infraestructura, asistencia técnica, transporte, capacitación y demás requerimientos operativos necesarios para el funcionamiento del proyecto. Asimismo, facilita la puesta en marcha de iniciativas productivas que promueven el mejoramiento de las condiciones de vida y el fortalecimiento del desarrollo rural.
    
    h4.mb-5(data-aos="zoom-in-right") Características de la gestión financiera

    .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
      SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-4").p-2.rounded-3
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--14.mb-4 
          p.mb-3.text-center #[strong Planificada:] la financiación debe organizarse de acuerdo con las necesidades, actividades y objetivos del proyecto.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--15.mb-4 
          p.mb-3.text-center #[strong Organizada:] los recursos económicos deben distribuirse adecuadamente según prioridades y actividades programadas.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--16.mb-4 
          p.mb-3.text-center #[strong Transparente:] la gestión financiera debe garantizar claridad en el manejo de los recursos y rendición de cuentas a la comunidad.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--17.mb-4 
          p.mb-3.text-center #[strong Sostenible:] la financiación debe contribuir a la permanencia y continuidad del proyecto en el tiempo.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--18.mb-4 
          p.mb-3.text-center #[strong Participativa:] la comunidad debe participar en la toma de decisiones relacionadas con el uso y administración de los recursos financieros.

    p.mb-5(data-aos="zoom-in-right") Las fuentes de financiación pueden provenir de aportes comunitarios, entidades públicas, empresas privadas, organismos internacionales o mecanismos de crédito y microfinanzas. Entre los más comunes tenemos:

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 3.
      |  Tipos de fuentes de financiación
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-3 Tipo de fuente de financiación
            th.col-auto.col-lg-auto Descripción
            th.col-auto.col-lg-auto Entidades u organizaciones relacionadas
        tbody
          tr
            td.text-start Fuentes propias o comunitarias
            td.text-start Recursos aportados por la comunidad, asociaciones o productores rurales.
            td.text-start Asociaciones campesinas, cooperativas y comunidad beneficiaria.
          tr.bg-table-01
            td.text-start Fuentes públicas
            td.text-start Recursos provenientes de entidades gubernamentales para fortalecer el desarrollo rural.
            td.text-start Alcaldías, gobernaciones, ADR, Ministerio de Agricultura, SENA, FINAGRO y Banco Agrario.
          tr
            td.text-start Fuentes privadas
            td.text-start Apoyos económicos y técnicos provenientes de empresas, fundaciones y organizaciones privadas.
            td.text-start Fundaciones empresariales, empresas agroindustriales, cooperativas y ONG nacionales.
          tr.bg-table-01
            td.text-start Fuentes internacionales
            td.text-start Recursos de organismos internacionales orientados al desarrollo rural sostenible.
            td.text-start FAO, PNUD, BID, Banco Mundial, Unión Europea y USAID.
          tr
            td.text-start Créditos y microfinanzas
            td.text-start Mecanismos financieros que facilitan acceso a préstamos para proyectos rurales.
            td.text-start Banco Agrario, cooperativas financieras y fondos rotatorios rurales.

    .row.justify-content-center.mb-0(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
            figure.mb-0
              img(src='@/assets/curso/tema1/img_73.svg', alt='').img-fluid
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                h5.mb-1 Fuentes de financiación en Colombia.
                p.mb-0 Lo invitamos a visitar el siguiente enlace en donde podrá apreciar algunas de las instituciones que ofrecen fuentes de financiación para proyectos de inversión.
              .bloque-enlace__accion
                a.boton-enlace(href="https://www.youtube.com/watch?v=eR6DYs0A82o&t=10s" target="_blank" rel="noopener noreferrer")
                  span.boton-enlace__texto Enlace
                  i.fab.fa-youtube.boton-enlace__icono
                  
                  

    Separador

    #t_1_7.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.7 Normatividad aplicable
    .mb-0 

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_75.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Integra el conjunto de disposiciones legales, técnicas y administrativas que regulan el desarrollo de proyectos comunitarios agropecuarios, asegurando que las actividades productivas y organizacionales se ejecuten conforme a los lineamientos vigentes. Su aplicación en el entorno rural permite garantizar la protección ambiental, el cumplimiento sanitario, el fortalecimiento de la producción agropecuaria y el desarrollo sostenible de las comunidades campesinas. De igual manera, facilita la articulación con entidades de apoyo, el acceso a recursos de financiación y la participación en procesos de comercialización.

    .tarjeta.tarjeta--fondo-img-3.py-5.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
      .row.g-0.align-items-stretch
        .col-12.col-lg-3.d-flex
          figure.slyder-c-imagen.w-100
            img(src='@/assets/curso/tema1/img_76.png', class="img-fluid")
        .col-12.col-lg-9.ps-lg-5
          SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4.mb-0.h-100
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-3 Normatividad ambiental
                p.mb-0 Orientadas a la protección, conservación y uso sostenible de los recursos naturales en actividades agropecuarias y rurales.
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta #[strong Aspectos que regula:]
                    p.mb-0 Uso del agua, conservación del suelo, manejo de residuos, protección ambiental y producción sostenible. 
                  li
                    i.lista-ul__vineta #[strong Entidades relacionadas:]
                    p.mb-0 Ministerio de Ambiente y Desarrollo Sostenible, Corporaciones Autónomas Regionales (CAR), autoridades ambientales locales.
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-3 Normatividad sanitaria y fitosanitaria
                p.mb-0 Normas que establecen condiciones para garantizar la sanidad animal, vegetal y la inocuidad de los productos agropecuarios.
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta #[strong Aspectos que regula:]
                    p.mb-0 Control de plagas y enfermedades, manejo sanitario animal, inocuidad alimentaria y uso de productos veterinarios y fitosanitarios.
                  li
                    i.lista-ul__vineta #[strong Entidades relacionadas:]
                    p.mb-0 ICA, INVIMA, Secretarías de Salud y Agricultura.
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-3 Normatividad laboral
                p.mb-0 Disposiciones relacionadas con las condiciones de trabajo y prevención de riesgos laborales dentro de las actividades productivas.
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta #[strong Aspectos que regula:]
                    p.mb-0 Seguridad y salud en el trabajo, uso de elementos de protección personal, prevención de accidentes y condiciones laborales.
                  li
                    i.lista-ul__vineta #[strong Entidades relacionadas:]
                    p.mb-0 Ministerio de Trabajo, ARL, entidades de inspección laboral.
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-3 Normatividad comercial y administrativa
                p.mb-0 Normas que regulan el funcionamiento administrativo, comercial y legal de organizaciones y proyectos rurales.
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta #[strong Aspectos que regula:]
                    p.mb-0 Registro de asociaciones, comercialización de productos, contabilidad, facturación, contratos y formalización empresarial.
                  li
                    i.lista-ul__vineta #[strong Entidades relacionadas:]
                    p.mb-0 Cámara de Comercio, DIAN, Alcaldías Municipales.
            .row.justify-content-center.align-items-center.mb-0
              .col-10.col-lg-10.mb-3.mb-lg-0
                h5.mb-3 Normatividad agropecuaria y rural
                p.mb-0 Conjunto de disposiciones orientadas al fortalecimiento de la producción agropecuaria y el desarrollo rural sostenible.
                ul.lista-ul.mb-0
                  li
                    i.lista-ul__vineta #[strong Aspectos que regula:]
                    p.mb-0 Producción agrícola y pecuaria, buenas prácticas agropecuarias, asociatividad y programas de desarrollo rural.
                  li
                    i.lista-ul__vineta #[strong Entidades relacionadas:]
                    p.mb-0 Ministerio de Agricultura y Desarrollo Rural, Agencia de Desarrollo Rural (ADR), SENA.
    
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
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
