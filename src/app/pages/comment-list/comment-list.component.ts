import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film, FilmComment } from 'src/app/domain/models';
import { FilmDataService } from 'src/app/services/film-data.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  filmId?: number;
  films?: Film[];
  comments?: FilmComment[] ;

  constructor(private activeRoute: ActivatedRoute, private filmData: FilmDataService, private router: Router) { }

  ngOnInit(): void {
    this.filmId = Number(this.activeRoute.parent?.snapshot.paramMap.get('id'));
    this.comments = this.filmData.getAllComments(this.filmId);
  }


}
