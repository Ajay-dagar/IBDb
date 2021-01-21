export interface CategoryModelServer {
    id: Number;
    name:string;
    category: String;
    image: String;
   
  }
  
  export interface serverResponseC  {
    count: number;
    books: CategoryModelServer[]
  };