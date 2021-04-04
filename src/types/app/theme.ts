export interface Size {
  width: number;
  height: number;
}

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