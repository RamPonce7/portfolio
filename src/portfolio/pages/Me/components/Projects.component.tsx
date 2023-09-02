import { Grid, useTheme } from "@mui/material"
import { ProjectComponent } from "./Project.component"
import { IProject } from "../../../interfaces/project.interface"


const projects: IProject[] = [{
    background: 'portfolio.png',
    link: '/',
    github: 'https://github.com/RamPonce7/Angular/tree/master/movie',
    title: {
        ENG: 'Portfolio',
        ESP: 'Portafolio'
    },
    techs: ['react', 'ts'],
    description: {
        ENG: [
            'My portfolio website is a window into my professional journey and my skills in the software development field. Here, you can see a collection of projects I have worked on, from web applications to mobile apps, all built using cutting-edge technologies like React, React Native, Angular, and TypeScript.'
            , "In my portfolio, you'll also find details about my work experiences and the courses I've completed, which have helped me grow and improve as a developer."
            , 'I hope this site gives you a good idea about me and my technical abilities. .'
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
    link: 'http://ramponce7.com/projects/movies_angular/',
    github: 'https://github.com/RamPonce7/Angular/tree/master/movie',
    title: {
        ENG: 'Movies App',
        ESP: 'Aplicación de Películas'
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