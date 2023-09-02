export interface IProject {
    background: string,
    title: {
        ENG: string;
        ESP: string;
    };
    github?: string;
    link?: string;
    techs: string[];
    description: {
        ENG: string[];
        ESP: string[];
    };
}