import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmCollectionComponent } from './pages/film-collection/film-collection.component';
import { FilmComponent } from './pages/film/film.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterFilmComponent } from './pages/filter-film/filter-film.component';
import { AddMarkComponent } from './pages/add-mark/add-mark.component';
import { CommentListComponent } from './pages/comment-list/comment-list.component';
import { FavouriteFilmsComponent } from './pages/favourite-films/favourite-films.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmCollectionComponent,
    FilmComponent,
    FilterFilmComponent,
    AddMarkComponent,
    CommentListComponent,
    FavouriteFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
