export interface IWork {
    company: string;
    role: string;
    from: string;
    to: string;
    goals: {
        ENG: string[];
        ESP: string[];
    };
}