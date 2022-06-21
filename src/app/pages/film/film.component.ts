import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Film, FilmComment } from 'src/app/domain/models';
import { FilmDataService } from 'src/app/services/film-data.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  filmForm? : FormGroup;
  film?: Film;
  comment?: FilmComment;
  showAddComment = false;


  constructor(private acitveRoute: ActivatedRoute,
    private filmData: FilmDataService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadFilmData();
    this.buildForm(this.film);
  }

  loadFilmData() {
    const filmId = Number(this.acitveRoute.snapshot.paramMap.get('id'));
    this.film = this.filmData.getById(filmId);
  }

  buildForm(film?: Film) {
    this.filmForm = this.fb.group(
      {
        id: [film?.id],
        title: [film?.title, [Validators.required, Validators.minLength(10)] ],
        description: [film?.description],
        actors: [film?.actors],
        averageMark: [film?.averageMark],
        marks: [film?.marks],
        images: [film?.images]
      }
    )
    }


    get average(){
      if(this.comment?.mark){
      this.film?.marks?.push(this.comment?.mark);
    }

      const arrAvg = this.film?.marks?.reduce((a,b) => a + b, 0);
      const len = this.film?.marks?.length;
      if(len && arrAvg){
        return arrAvg / len;
      }
      return  0;
    }
}

