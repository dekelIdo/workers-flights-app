export interface Flight {
    num: number;
    from: string;
    from_date: string | Date;
    to: string;
    to_date: string | Date;
    plane: string;
    duration: number;
    from_gate: string;
    to_gate: string;
  }