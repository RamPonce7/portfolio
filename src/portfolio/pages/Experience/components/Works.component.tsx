import { Box, Grid, Paper, Stack, Typography, useTheme } from "@mui/material"
import WorkComponent from "./Work.component"
import { IWork } from "../../../interfaces/work.interface"
import { useLangContext } from "../../../state/lang/langContext"

const works: IWork[] = [
    {
        company: 'Clara Card',
        role: 'Software Specialist ',
        from: '10/2022',
        to: 'today',
        goals: {
            ENG: [
                'Working in the team responsible for managing third-party and services payments, I developed a transaction approval module, where a monetary threshold was established, triggering the necessity for company owner approval for transactions surpassing this threshold and avoiding possible instances of fraud.'
                , 'Working on a Lending platform, rendering dynamically  forms in order for the user to be able to request a loan selecting the amount, reason and the pay period. '
                , 'Developing with React(Typescript), Hook, Context, Axios and Material UI.Improve UI/UX.'
                , 'Working on a MicroFrontend architecture.'
            ],
            ESP: [
                'Colaborando en el equipo encargado de la gestión de pagos de terceros y servicios, diseñé un módulo de aprobación de transacciones. En este módulo, se estableció un límite monetario que requería la aprobación del propietario de la empresa para cualquier transacción que lo superara, con el fin de prevenir posibles casos de fraude.'
                , 'Trabajando en una plataforma de préstamos, generando dinámicamente formularios para que el usuario pueda solicitar un préstamo seleccionando el monto, la razón y el período de pago.'
                , 'Desarrollo con React(Typescript), Hook, Context, Router, Axios y Material UI.'
                , 'Mejoras de UI/UX.'
                , 'Trabajando en una arquitectura de MicroFrontend.'
            ]
        }

    },
    {
        company: '3PillarGlobal ',
        role: 'Senior Software Engineer III',
        from: '06/2021',
        to: '10/2022',
        goals: {
            ENG: [
                ' Working on a Report and Chart project. I developed a module for creating new  reports or select  reports created in the past and showing that information in charts, and I developed a kind of shopping cart, using Redux to select templates and create new charts or reports.'
                , 'Improve UI/UX.'
                , 'Working on a real estate web application, showing all the facilities, position on the map, photos, spaces inside and outside the door and architectural maps, developed with Angular 12, Material Design Components and RxJs. '
                , 'Developing with React(Js), Hooks and redux.'
                , 'Cover 90% of code with Unit Testings.'
            ],
            ESP: [
                'Desarrollo de un proyecto de Informes y Gráficos. Creación de nuevos informes o selección de informes creados previamente y visualización de esa información en gráficos. También desarrollé una especie de carrito de compras, utilizando Redux para seleccionar plantillas y crear nuevos gráficos o informes.'
                , 'Mejoras de UI/UX.'
                , 'Desarrollo de una aplicación web inmobiliaria que muestra todas las instalaciones, la posición en el mapa, fotos, espacios interiores y exteriores, así como planos arquitectónicos. Esta aplicación se desarrolló utilizando Angular 12, Componentes de Material Design y RxJs.'
                , 'Desarrollo con React(Js), Hooks and redux.'
                , 'Cubrir el 90% del código con pruebas unitarias.'
            ]
        },
    },
    {
        company: 'Coltomoney',
        role: 'Product Lead',
        from: '02/2020',
        to: '06/2021',
        goals: {
            ENG: [
                'Leader of design and development  for the fintech PAGOFON, based on Material Design (Google) standards, use of MarvelApp for Mockups.'
                , 'Leader of Transactional API for App functionality complying with security standards with OAuth2, JWT; using technologies like Spring Cloud, Spring Boot, Docker, MongoDB, Oracle.'
            ],
            ESP: [
                'Líder de diseño y desarrollo para la fintech PAGOFON, basado en los estándares de Material Design (Google), utilizando MarvelApp para los mockups.'
                , 'Líder de API Transaccional para la funcionalidad de la aplicación, cumpliendo con los estándares de seguridad con OAuth2 y JWT; utilizando tecnologías como Spring Cloud, Spring Boot, Docker, MongoDB y Oracle.'
            ]
        },
    },
    {
        company: 'Coltomex',
        role: 'Innovation Lead/ Sr Web Developer',
        from: '06/2018',
        to: '02/2020',
        goals: {
            ENG: [
                'Front End development and integration for Omni-Channel platform, integrating WhatsApp and Messenger, use of WebSockets and RxJS for real-time communication, API consumption, design with SASS, using Angular 8 framework.'
                , 'Development of survey application to measure customer satisfaction and opinion, survey form manager. using Angular 8 framework'
                , 'Innovation in DevOps, migrating services to architectures based on Docker Swarm, increasing from 50 requests to more than 1000 per second. Managing Swarm Architecture  with more than 20 nodes.'
                , 'Project with BANAMEX, BigData and Machine Learning for Targeted Marketing, using clustering and classification techniques, based on their purchasing behavior, processing more than 50 million movements monthly. (Apache Spark).'
            ],
            ESP: [
                'Desarrollo e integración de Front-End para una plataforma Omni-Channel, integrando WhatsApp y Messenger, utilizando WebSockets y RxJS para la comunicación en tiempo real, consumo de API, diseño con SASS y el uso del framework Angular 8.'
                , 'Desarrollo de una aplicación de encuestas para medir la satisfacción y la opinión del cliente, con un gestor de formularios de encuestas, utilizando el framework Angular 8.'
                , 'Innovación en DevOps, migrando servicios a arquitecturas basadas en Docker Swarm, aumentando de 50 solicitudes a más de 1000 por segundo. Gestión de la arquitectura Swarm con más de 20 nodos.'
                , 'Proyecto con BANAMEX, Big Data y Aprendizaje Automático para Marketing Dirigido, utilizando técnicas de agrupación y clasificación basadas en su comportamiento de compra, procesando más de 50 millones de movimientos mensuales (utilizando Apache Spark).'
            ]
        },
    },
    {
        company: 'Go Sharp',
        role: 'Developer',
        from: '06/2017',
        to: '06/2018',
        goals: {
            ENG: [
                'Use of new Hadoop, Kafka and Storm technologies, reducing batch processing times.'

            ],
            ESP: [
                'Utilización de las nuevas tecnologías Hadoop, Kafka y Storm para reducir los tiempos de procesamiento por lotes.'
            ]
        },
    },
    {
        company: 'División Creativa',
        role: 'Web Developer',
        from: '01/2015',
        to: '06/2017',
        goals: {
            ENG: [
                'Web application development (YaSalte.com) to search for experiences, events and restaurants.'
                , 'API development to obtain photos, comments and location of establishments from google maps.'
                , 'Development of a recommendation algorithm based on user behavior in the system.'
                , 'Development of a search algorithm based on match for words and phrases.'
                , 'UI / UX improvement in all company projects using Material Design'

            ],
            ESP: [
                'Desarrollo de una aplicación web (YaSalte.com) para buscar experiencias, eventos y restaurantes..'
                , 'Desarrollo de una API para obtener fotos, comentarios y la ubicación de establecimientos desde Google Maps.'
                , 'Desarrollo de un algoritmo de recomendación basado en el comportamiento del usuario en el sistema.'
                , 'Desarrollo de un algoritmo de búsqueda basado en coincidencias de palabras y frases.'
                , 'Mejoras de UI / UX en los proyectos de la empresa con  Material Design'
            ]
        },
    },
]


export const WorksComponent = () => {

    const theme = useTheme()
    const { w } = useLangContext()
    return (
        <Box sx={{
            [theme.breakpoints.up('md')]: {
                ml: '320px'
            },

        }}>
            {works.map((work, index) => (<WorkComponent work={work} key={index} index={index} />))}

            <Paper sx={{
                padding: 2,
                display: 'none',
                mt: 1,
                [theme.breakpoints.only('xs')]: {
                    display: 'block'

                },
            }}>
                <Grid container alignItems={'center'}>
                    <Grid item xs={12} mb={1}>
                        <Typography variant='body1' fontWeight={600} color={theme.palette.primary.dark} >
                            {w('education')}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} mb={1}>
                        <Stack>
                            <Typography variant='body2' mt={1} >
                                {w('school')}
                            </Typography>
                            <Typography variant='caption' mt={1} color="text.secondary">
                                {w('career')}
                            </Typography>
                            <Typography variant='caption' mt={1} color="text.secondary">
                                <i> 07/2013 - 07/2017</i>
                            </Typography>


                        </Stack>
                    </Grid>
                </Grid>
            </Paper>

        </Box>
    )
}
