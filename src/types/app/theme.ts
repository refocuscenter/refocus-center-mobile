export interface Point {
    x: number;
    y: number;
}

export interface Gradient {
    locations: number[];
    colors: string[];
    start: Point;
    end: Point;
}