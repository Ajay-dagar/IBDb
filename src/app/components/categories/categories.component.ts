import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CategoryModelServer, serverResponseC } from 'src/app/model/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category:string;
  categories:CategoryModelServer[]=[];


  constructor(private categoryservice: CategoriesService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {this.route.paramMap.pipe(map((param: ParamMap)=>{
         // @ts-ignore
        return param.params.category;
      })).subscribe(categoryid=>{
  this.category=categoryid;
  this.categoryservice.getSingleCategory(this.category).subscribe((book:serverResponseC)=>{
    this.categories=book.books;
  });
});
}
selectBook(id:Number)
{
  this.router.navigate(['/books',id]).then();
}
}
