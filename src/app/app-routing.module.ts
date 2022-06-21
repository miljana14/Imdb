import { FavouriteFilmsComponent } from './pages/favourite-films/favourite-films.component';
import { CommentListComponent } from './pages/comment-list/comment-list.component';
import { AddMarkComponent } from './pages/add-mark/add-mark.component';
import { FilmCollectionComponent } from './pages/film-collection/film-collection.component';
import { FilmComponent } from './pages/film/film.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'film-collection', component: FilmCollectionComponent},
  {path: 'favourite-films', component: FavouriteFilmsComponent},
  {path: 'film/:id', component: FilmComponent,
  children:[
    {path: 'comment-list', component: CommentListComponent},
    {path: 'add-mark', component: AddMarkComponent},
    {path:'', redirectTo: 'comment-list', pathMatch:'full'}
  ]},
  {path:'', redirectTo: '/film-collection', pathMatch:'full'},
  {path: '**', component: FilmCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
