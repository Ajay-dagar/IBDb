import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  key = "AIzaSyD6jQiHoyYPT0uSevY4cVtNz-B6ZiAgSq4";
  constructor(private httpClient: HttpClient) {}
  get(queryField: string) {
    return this.httpClient.get(
      `https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=39&keyes&key=${this.key}`
    );
  }
  getUserData(blogID) {
    return this.httpClient.get(
      `https://www.googleapis.com/books/v1/volumes/${blogID}`
    );
  }
}
