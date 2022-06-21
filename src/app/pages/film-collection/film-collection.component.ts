import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/domain/models';
import { FilmDataService } from 'src/app/services/film-data.service';

@Component({
  selector: 'app-film-collection',
  templateUrl: './film-collection.component.html',
  styleUrls: ['./film-collection.component.css']
})
export class FilmCollectionComponent implements OnInit {

  films?: Film[];
  film?: Film;
  favourite?: boolean;

  filteredFilms?: Film[] = [];

  constructor(private filmData: FilmDataService, private router: Router) { }

  ngOnInit(): void {
    this.films = [...this.filmData.getAll()];
    this.filteredFilms =[...this.films];
  }


  openFilm(film: Film) {
    this.router.navigate(['film', film.id])
  }

  onFilterWordChange(filterWord: string){
    this.filteredFilms = this.films?.filter(film => !filterWord || film.title.toUpperCase().includes(filterWord.toUpperCase()));
  }

  addFilmToFavourite(filmId: number) {
    this.filmData.addFilmToFavourite(filmId);
    this.router.navigate(['favourite-films']);
  }
}
