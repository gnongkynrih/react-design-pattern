export interface User {
  name: string;
  age: number;
  country: string;
  books?: string[];
}
export interface Book {
  name: string;
  pages: number;
  title: string;
  price: number;
}
