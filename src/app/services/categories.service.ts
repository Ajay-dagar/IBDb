import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryModelServer } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private url = environment.serverURL;
  constructor(private http:HttpClient) { }
  getAllCategories()
  {
    return this.http.get(this.url + "/categories");//localhost:3000/api/categories
  }
  getSingleCategory(category:string)/*:Observable<CategoryModelServer>*/ {
    return this.http.get(this.url + '/categories/' + category);////localhost:3000/api/categories/category
  }
}
