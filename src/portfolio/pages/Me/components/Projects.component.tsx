import { Grid, useTheme } from "@mui/material"
import { ProjectComponent } from "./Project.component"
import { IProject } from "../../../interfaces/project.interface"


const projects: IProject[] = [
    {
        background: 'movies-react.png',
        link: 'https://ramponce7.com/projects/movies_react/',
        github: 'https://github.com/RamPonce7/movies-react',
        title: {
            ENG: 'New Movies App! (React)',
            ESP: 'Nueva Movies App! (React)'
        },
        techs: ['react', 'ts'],
        description: {
            ENG: [
                'Web application developed in React. Connected to a movie API using Axios.'
                , 'Using React Context API as the state management solution.'
                , 'On the homepage, an updated list of the latest movies released in theaters is displayed. Users can explore these movies and obtain detailed information about the plot and reviews.'
                , 'For a seamless user experience, the infinite scroll functionality is implemented.'
                , 'The user interface has been designed using the Material-UI (MUI) library, giving it a modern look.'

            ],
            ESP: [
                'Aplicación web desarrollada en React. Conectada a una API de películas usando Axios.'
                , 'Utilizando la API de Context de React como solución de gestión de estado.'
                , 'En la página principal, se muestra una lista actualizada de las últimas películas que se han estrenado en cine. Los usuarios pueden explorar estas películas y obtener información detallada sobre la sinopsis y las críticas.'
                , 'Para una experiencia de usuario sin interrupciones, se implementa la funcionalidad de infinite scroll.'
                , 'La interfaz de usuario ha sido diseñada utilizando la biblioteca Material-UI (MUI), lo que le confiere un aspecto moderno'
            ]
        }
    },
    {
        background: 'ios-calculator.png',
        link: 'https://ramponce7.com/demos/ios-calculator.html',
        github: 'https://github.com/RamPonce7/calculator-ios',
        title: {
            ENG: 'iOS Calculator (React Native)',
            ESP: 'Calculadora ios (React Native)'
        },
        techs: ['rn', 'ts'],
        description: {
            ENG: [
                'A calculator designed and developed in React Native that blends the aesthetics and functionality of iOS with the versatility to operate on both mobile operating systems, iOS and Android.'
            ],
            ESP: [
                'Calculadora diseñada y desarrollada en React Native que combina la estética y la funcionalidad de iOS con la versatilidad de funcionar en ambos sistemas operativos móviles, iOS y Android.'
            ]
        }
    },
    {
        background: 'portfolio.png',
        link: '/',
        github: 'https://github.com/RamPonce7/portfolio',
        title: {
            ENG: 'Portfolio (React)',
            ESP: 'Portafolio (React)'
        },
        techs: ['react', 'ts'],
        description: {
            ENG: [
                'My portfolio website is a window into my professional journey and my skills in the software development field. Here, you can see a collection of projects I have worked on, from web applications to mobile apps, all built using cutting-edge technologies like React, React Native, Angular, and TypeScript.'
                , "In my portfolio, you'll also find details about my work experiences and the courses I've completed, which have helped me grow and improve as a developer."
                , 'I hope this site gives you a good idea about me and my technical abilities.'
            ],
            ESP: [
                'Mi sitio web de portafolio es una ventana a mi trayectoria profesional y mis habilidades en el mundo del desarrollo de software. Aquí, puedes explorar una colección de proyectos en los que he trabajado, desde aplicaciones web hasta aplicaciones móviles, todos desarrollados con tecnologías punteras como React, React Native, Angular y TypeScript.'
                , 'En mi portafolio, también encontrarás detalles sobre mis experiencias laborales y los cursos que he completado, que me han ayudado a crecer y evolucionar como desarrollador.'
                , 'Espero que este sitio te brinde una visión completa de mi perfil y mis capacidades técnicas.'
            ]
        }
    },
    {
        background: 'movies.png',
        link: 'https//ramponce7.com/projects/movies_angular/',
        github: 'https://github.com/RamPonce7/Angular/tree/master/movie',
        title: {
            ENG: 'Movies App (Angular Legacy)',
            ESP: 'Aplicación de Películas (Angular Legacy)'
        },
        techs: ['angular', 'ts'],
        description: {
            ENG: [
                'This project is a user-friendly web application developed with Angular. It provides a comprehensive catalog of your favorite movies. With a modern Material Design interface, users can easily browse and discover an extensive collection of movies.',
                'Access an extensive database of movies, including the latest releases and timeless classics. Get detailed information about each movie, including plot summaries and user ratings. Enjoy a responsive design that works seamlessly on both desktop computers and mobile devices.'],
            ESP: [`Este proyecto es una aplicación web fácil de usar, desarrollada con Angular. Ofrece un catálogo completo de tus películas favoritas. Con una interfaz moderna de Material Design, los usuarios pueden explorar y descubrir una amplia colección de películas de manera sencilla.`,

                `Accede a una amplia base de datos de películas, incluyendo los estrenos más recientes y clásicos atemporales. Obtén información detallada sobre cada película, incluyendo sinopsis y calificaciones de usuarios.Calificaciones de Usuarios. Disfruta de un diseño adaptable que funciona perfectamente en computadoras de escritorio y dispositivos móviles.`],



        }
    }

]


const ProjectsComponent = () => {
    const theme = useTheme()
    return (
        <Grid container width={'100%'} sx={{
            [theme.breakpoints.down('md')]: {
                ml: 0
            },
            ml: 1
        }} >
            {projects.map((project, index) => (<ProjectComponent project={project} key={index} index={projects.length - (index + 1)} />))}
        </Grid>
    )
}

export default ProjectsComponent