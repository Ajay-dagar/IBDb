import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BookModelServer } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
 // SERVER_URL=environment.serverURL;
  private url = environment.serverURL;
  constructor(private http:HttpClient) { }
  /* fetch data from db*/
  getAllBooks()
  {
    return this.http.get(this.url + "/books");//localhost:3000/api/books
  }

  getSinglebook(id: Number): Observable<BookModelServer> {
    return this.http.get<BookModelServer>(this.url + '/books/' + id);////localhost:3000/api/books/id
  }

/*
  getbookbyname(name: string): Observable<BookModelServer> {
    return this.http.get<BookModelServer>(this.url + '/books/n/' + name);////localhost:3000/api/books/n/name
  }*/
}
