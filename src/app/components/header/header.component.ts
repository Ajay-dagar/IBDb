import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: boolean;
  constructor(public userService:UserService) { }

  ngOnInit(): void {

    this.userService.authState$.subscribe(authState => this.authState = authState);
  }

}
