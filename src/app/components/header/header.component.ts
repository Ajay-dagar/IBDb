import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModelServer, serverResponse } from 'src/app/model/book.model';
import { UserService } from 'src/app/services/user.service';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: boolean;
  books:BookModelServer[]=[];
  constructor(public userService:UserService,private router: Router,private bookservice:BooksService) { }

  ngOnInit(): void {

    this.userService.authState$.subscribe(authState => this.authState = authState);
   /* this.bookservice.getAllBooks().subscribe((prods: serverResponse)=>{
      this.books=prods.books;//id: Number; title: String; 
      
    }); */
  }
 /* selectBookbyname(name:string)
{
  this.router.navigate(['/books/n',name]).then();
}*/

 /* searchData(event) {
    this.search = event.target.value
    console.log(this.search)
    console.log(this.filter)
    this.empService.searchData(this.search).subscribe((res) => {
      console.log("Filter Response", res);
      if (res) {
        this.employees = res
        if (res.length === 0) {
          this.noData = true
        } else {
          this.noData = false
        }
      }
    },
      (err) => {
        console.log(err);
        console.log("error")
      })
  }*/

}
