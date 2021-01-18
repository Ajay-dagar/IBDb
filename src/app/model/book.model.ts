export interface BookModelServer {
    id: Number;
    title: String;
    category: String;
    description: String;
    image: String;
   
  }
  
  
  export interface serverResponse  {
    count: number;
    books: BookModelServer[]
  };
  