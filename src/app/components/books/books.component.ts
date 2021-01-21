import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import {map} from "rxjs/operators";
declare let $: any;
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit,AfterViewInit {
  id: Number;
  books;
  thumbImages: any[] = [];

  constructor(private bookservice: BooksService,private route:ActivatedRoute) { }

  ngOnInit(): void {this.route.paramMap.pipe(map((param: ParamMap)=>{
         // @ts-ignore
        return param.params.id;
      })).subscribe(bookid=>{
  this.id=bookid;
  this.bookservice.getSinglebook(this.id).subscribe(book=>{
    this.books=book;
    if(book.image!==null){
      this.thumbImages=book.image.split(';');
    }
  })
});
   
  }
  ngAfterViewInit():void{
   
    // Product Main img Slick
    $('#product-main-img').slick({
      infinite: true,
      speed: 300,
      dots: false,
      arrows: true,
      fade: true,
      asNavFor: '#product-imgs',
    });

    // Product imgs Slick
    $('#product-imgs').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: 0,
      vertical: true,
      asNavFor: '#product-main-img',
      responsive: [{
        breakpoint: 991,
        settings: {
          vertical: false,
          arrows: false,
          dots: true,
        }
      },
      ]
    });

    // Product img zoom
    var zoomMainProduct = document.getElementById('product-main-img');
    if (zoomMainProduct) {
      $('#product-main-img .product-preview').zoom();
    }
  }

}
