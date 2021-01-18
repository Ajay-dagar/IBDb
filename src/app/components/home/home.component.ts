import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModelServer, serverResponse } from 'src/app/model/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books:BookModelServer[]=[];
  constructor(private bookservice: BooksService,private router: Router) { }
 
  ngOnInit(): void {
    this.bookservice.getAllBooks().subscribe((prods: serverResponse)=>{
      this.books=prods.books;
      console.log(this.books);
    }); 
  }
selectBook(id:Number)
{
  this.router.navigate(['/books',id]).then();
}
}
