export interface Task {
    id?: number, // Cuando creamos una id podria no venir
    text: string,
    day: string,
    reminder: boolean,
}