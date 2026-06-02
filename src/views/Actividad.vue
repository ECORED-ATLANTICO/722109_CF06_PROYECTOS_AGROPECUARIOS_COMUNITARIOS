<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Prueba de conocimientos sobre Gestión de proyectos comunitarios.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos, principios y herramientas relacionados con la gestión de proyectos comunitarios y el desarrollo rural sostenible, y se permita identificar el nivel de apropiación de los conocimientos por parte del aprendiz y su capacidad para reconocer elementos clave en la formulación, planificación y ejecución de proyectos orientados al desarrollo de las comunidades rurales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es un proyecto comunitario?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una actividad individual para generar ingresos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un conjunto de acciones planificadas para resolver necesidades de una comunidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un plan exclusivo de instituciones públicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un documento administrativo sin aplicación práctica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento permite conocer la situación inicial antes de ejecutar un proyecto?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cronograma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Línea base.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Informe final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el objetivo principal de los indicadores de gestión?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar a los participantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir el avance y los resultados del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calcular el presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar informes técnicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes es una característica de la comunidad campesina?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Dependencia del entorno rural y de actividades agropecuarias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Actividades exclusivamente industriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Participación únicamente política.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ausencia de organización social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 5,
          texto: '¿Qué son las organizaciones comunitarias?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizaciones internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Empresas privadas rurales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entidades gubernamentales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Grupos de personas que se organizan para resolver necesidades comunes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 6,
          texto: '¿Cuál es uno de los métodos de participación comunitaria?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Supervisión técnica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Auditoría contable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Asambleas comunitarias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Informes financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 7,
          texto: '¿Cuál es la función del cronograma de actividades?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir el presupuesto del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elaborar informes financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar el trabajo de los líderes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar el tiempo de ejecución de las actividades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 8,
          texto:
            '¿Qué herramienta se utiliza para representar gráficamente las actividades de un proyecto en el tiempo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Línea base.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diagnóstico participativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diagrama de Gantt.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Flujo de caja.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 9,
          texto: '¿Cuál es uno de los objetivos de la gestión ambiental?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la producción industrial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteger y conservar los recursos naturales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el uso del suelo rural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 10,
          texto: '¿Qué busca la seguridad y salud en el trabajo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la productividad laboral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar condiciones seguras para los trabajadores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el número de proyectos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el presupuesto del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 11,
          texto: '¿Qué son las fuentes de financiación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sistemas de control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registros contables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Documentos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recursos económicos para ejecutar proyectos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de los siguientes es un ejemplo de fuente de financiación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Convocatorias públicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Manuales de operación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Informes técnicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cronogramas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 13,
          texto: '¿Qué es un plan de acción?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Documento que organiza actividades, responsables y recursos para alcanzar objetivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registro financiero del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lista de participantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Informe de resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 14,
          texto: '¿Qué busca el diagnóstico participativo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar el trabajo de la comunidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar problemas y necesidades con participación comunitaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar informes técnicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar evaluaciones financieras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 15,
          texto: '¿Qué elemento forma parte del presupuesto de un proyecto?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagnóstico social.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Informe técnico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costos directos e indirectos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cronograma de actividades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es un componente del proceso administrativo aplicado a proyectos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagnóstico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluación financiera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistematización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planeación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 17,
          texto: '¿Qué permite la gestión de la información en un proyecto?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar y analizar datos para la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar el trabajo de los agricultores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 18,
          texto: '¿Qué son los elementos de protección personal (EPP)?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Equipos utilizados para la producción agrícola.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dispositivos que protegen la integridad física de los trabajadores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Herramientas administrativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Equipos de comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es una técnica de negociación importante en el trabajo comunitario?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imposición de decisiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Supervisión administrativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Control financiero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Escucha activa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
        {
          id: 20,
          texto: '¿Qué busca el desarrollo rural sostenible?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la explotación de recursos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejorar la calidad de vida rural sin afectar el ambiente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la participación social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar las actividades agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión de proyectos comunitarios y desarrollo rural.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la gestión de proyectos comunitarios y desarrollo rural.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
