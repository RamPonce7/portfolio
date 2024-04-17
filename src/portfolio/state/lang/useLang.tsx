import { useState } from "react"

const langWords: any = {
    esp: {
        resume: 'CV',
        experience: 'Trayectoria',
        portfolio: 'Mi trabajo',
        name: 'Ivan Ramses Martinez Ponce',
        education: 'Educación',
        school: 'IPN ESCOM',
        career: 'Ingeniería en Sistemas Computacionales',
        current_stack: 'Stack actual',
        today: 'Actualmente',
        description_1: 'Desarrollador FrontEnd React y Angular (Js y Ts), con más de 8 años de experiencia creando aplicaciones web robustas.',
        description_2: ' Desarrollador Mobile  con más de 2 años de experiencia en ReactNative y Flutter.',
        description_3: 'Experiencia trabajando en equipo y con metodologías ágiles (Scrum)',
        courses_title: 'Cursos',
        projects_title: 'Proyectos',

        //Course 18 Flutter Expert
        course_title_18: 'Flutter Experto',
        course_about_18: 'Flutter Experto.',

        //Course 17 Redux Toolkit
        course_title_17: 'Redux Toolkit',
        course_about_17: 'Redux Toolkit.',

        //Course 16 ReactJs Intermediate
        course_title_16: 'ReactJs Avanzado / NextJs',
        course_about_16: 'ReactJs Avanzado / NextJs.',
        //Course 0 ReactNative Intermediate / Expert
        course_title_15: 'React Native Intermedio',
        course_about_15: 'Desarrollar aplicaciónes con conexión http usando Axios, implementación de navegación para múltiples pantallas, manejo de Estado local y usando Context, estilos, Diseño Flex, Notificaciones Push Google Maps ',
        //Course 1 NgRx
        course_title_14: 'Angular Redux con NgRx ',
        course_about_14: 'Angular Redux NgRx ',
        //Course 2 ReactNative Intermediate / Expert
        course_title_13: 'React Native  Básico',
        course_about_13: 'Desarrollar aplicaciones usando expo-cli y react-native-cli, manejando el estado en una sola pantalla.',
        //Course 3 ReactJs Intermediate
        course_title_12: 'ReactJs Intermedio',
        course_about_12: 'ReactJs Intermedio.',
        //Course 4  JavaScript ECS6+
        course_title_11: 'JavaScript ECS6+',
        course_about_11: ' JavaScript ECS6+.',
        //Course 5 Flutter  Intermediate
        course_title_10: 'Flutter  Intermedio',
        course_about_10: 'Flutter  Intermedio.',
        //Course 6 React JS Fundamentals
        course_title_9: 'React JS Fundamentos',
        course_about_9: 'React JS Fundamentos.',
        //Course 7 React Modern JavaScript
        course_title_8: 'JavaScript Moderno',
        course_about_8: 'JavaScript Moderno.',
        //Course 8 SASS
        course_title_7: 'SASS',
        course_about_7: 'SASS.',
        //Course 9 Flutter Basic
        course_title_6: 'Flutter Básico',
        course_about_6: 'Flutter Básico.',
        //Course 10 Big Data with Apache Spark
        course_title_5: 'Big Data con Apache Spark',
        course_about_5: 'Big Data con Apache Spark.',
        //Course 11 Docker Docker Swarm
        course_title_4: 'Docker Swarm',
        course_about_4: 'Docker Swarm.',
        //Course 12 Angular Intermediate / Expert 
        course_title_3: 'Angular Intermedio / Experto ',
        course_about_3: 'Angular Intermediato / Experto .',
        //Course 13 Angular Basic
        course_title_2: 'Angular Básico ',
        course_about_2: 'Angular Básico.',
        //Course 14 Docker Basic
        course_title_1: 'Docker Básico ',
        course_about_1: 'Docker Básico.',
        //Course 15 Git
        course_title_0: 'Git Fundamentos',
        course_about_0: 'Git Fundamentos',
    },
    eng: {
        resume: 'Resume',
        name: 'Ivan Ramses Martinez Ponce',
        experience: 'Experience',
        portfolio: 'Portfolio',
        current_stack: 'Current Stack',
        today: 'Today',
        education: 'Education',
        school: 'Computer Superior School',
        career: 'Computer Systems Engineer',
        description_1: 'FrontEnd React and Angular (Js & Ts) developer, with 8+ years of experience creating professional web applications.',
        description_2: 'Mobile Developer 2+ years experience with ReactNative and Flutter.',
        description_3: 'Experience with collaborative work and Agile (Scrum)',
        courses_title: 'Courses',
        projects_title: 'Projects',
        //Course 18 Flutter Expert
        course_title_18: 'Flutter Expert',
        course_about_18: 'Flutter Expert.',

        //Course 17 Redux Toolkit
        course_title_17: 'Redux Toolkit',
        course_about_17: 'Redux Toolkit.',
        //Course 16 ReactJs Intermediate
        course_title_16: 'ReactJs Advance / NextJs',
        course_about_16: 'ReactJs Advance / NextJs.',

        //Course 0 ReactNative Intermediate / Expert
        course_title_15: 'React Native Intermediate ',
        course_about_15: 'Developing apps with http request using Axios, navigation screens, manage state locally and general using Context, styles, Flex Design, Push Notifications, Google Maps.',
        //Course 1 NgRx
        course_title_14: 'Angular Redux with NgRx ',
        course_about_14: 'Angular Redux NgRx ',
        //Course 2 ReactNative Basic
        course_title_13: 'React Native  Basic',
        course_about_13: 'Developing apps with expo and react-native-cli, managing the state in only one screen.',
        //Course 3 ReactJs Intermediate
        course_title_12: 'ReactJs Intermediate',
        course_about_12: 'ReactJs Intermediate.',
        //Course 4  JavaScript ECS6+
        course_title_11: 'JavaScript ECS6+',
        course_about_11: ' JavaScript ECS6+.',
        //Course 5 Flutter  Intermediate
        course_title_10: 'Flutter  Intermediate',
        course_about_10: 'Flutter  Intermediate.',
        //Course 6 React JS Fundamentals
        course_title_9: 'React JS Fundamentals',
        course_about_9: 'React JS Fundamentals.',
        //Course 7 React Modern JavaScript
        course_title_8: 'Modern JavaScript',
        course_about_8: 'Modern JavaScript.',
        //Course 8 SASS
        course_title_7: 'SASS',
        course_about_7: 'SASS.',
        //Course 9 Flutter Basic
        course_title_6: 'Flutter Basic',
        course_about_6: 'Flutter Basic.',
        //Course 10 Big Data with Apache Spark
        course_title_5: 'Big Data with Apache Spark',
        course_about_5: 'Big Data with Apache Spark.',
        //Course 11 Docker Docker Swarm
        course_title_4: 'Docker Swarm',
        course_about_4: 'Docker Swarm.',
        //Course 12 Angular Intermediate / Expert 
        course_title_3: 'Angular Intermediate / Expert ',
        course_about_3: 'Angular Intermediate / Expert .',
        //Course 13 Angular Basic
        course_title_2: 'Angular Basic ',
        course_about_2: 'Angular Basic.',
        //Course 14 Docker Basic
        course_title_1: 'Docker Basic ',
        course_about_1: 'Docker Basic.',
        //Course 14 Git Fundamentals
        course_title_0: 'Git Fundamentals',
        course_about_0: 'Git Fundamentals',
    }
}

export const useLang = () => {
    const [lang, setLang] = useState<'ENG' | 'ESP'>('ENG')

    const getWord = (key: string): string => {
        const translated = lang === 'ENG' ? langWords.eng[key] : langWords.esp[key]
        return translated !== undefined ? translated : key
    }

    return {
        w: getWord,
        lang,
        setLang
    }
}
