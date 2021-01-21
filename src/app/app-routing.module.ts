import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SavelistComponent } from './components/savelist/savelist.component';
import { ProfileGuard } from './guard/profile.guard';

const routes: Routes = [
  {
    path:'' ,component:HomeComponent
  },
  {
    path:'books/:id' ,component:BooksComponent
  },
  {
    path:'savelist' ,component:SavelistComponent
  },
  {
    path:'login' ,component:LoginComponent
  },
  {
    path:'profile' ,component:ProfileComponent,canActivate:[ProfileGuard]
  },
  {
    path:'register' ,component:RegisterComponent
  },
  {
    path:'categories/:category' ,component:CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
