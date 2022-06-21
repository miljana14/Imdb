import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/domain/models';
import { FilmDataService } from 'src/app/services/film-data.service';

@Component({
  selector: 'app-favourite-films',
  templateUrl: './favourite-films.component.html',
  styleUrls: ['./favourite-films.component.css']
})
export class FavouriteFilmsComponent implements OnInit {

  favouriteFilms?: Film[];

  filteredFilms?: Film[] = [];

  constructor(private filmData: FilmDataService, private router: Router) { }

  ngOnInit(): void {
    this.favouriteFilms = [...this.filmData.findFavourites()];
    this.filteredFilms =[...this.favouriteFilms];
  }


  openFilm(film: Film) {
    this.router.navigate(['film', film.id])
  }

  onFilterWordChange(filterWord: string){
    this.filteredFilms = this.favouriteFilms?.filter(favouriteFilms => !filterWord || favouriteFilms.title.toUpperCase().includes(filterWord.toUpperCase()));
  }
}
