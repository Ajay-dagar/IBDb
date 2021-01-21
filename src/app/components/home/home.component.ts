import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModelServer, serverResponse } from 'src/app/model/book.model';
import { CategoryModelServer, serverResponseC } from 'src/app/model/category';
import { BooksService } from 'src/app/services/books.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories:CategoryModelServer[]=[];
  books:BookModelServer[]=[];
  constructor(private bookservice: BooksService,private categoryservice: CategoriesService,private router: Router) { }
 
  ngOnInit(): void {
    this.bookservice.getAllBooks().subscribe((prods: serverResponse)=>{
      this.books=prods.books;
      console.log(this.books);
      this.logIt();
    }); 
   
  }
  logIt(): void {
    this.categoryservice.getAllCategories().subscribe((prods: serverResponseC)=>{
      this.categories=prods.books;
    }); 
    
   
  }
selectBook(id:Number)
{
  this.router.navigate(['/books',id]).then();
}
selectCategory(category:string)
{
  this.router.navigate(['/categories',category]).then();
}

}
