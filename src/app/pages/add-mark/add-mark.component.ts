import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film, FilmComment } from 'src/app/domain/models';
import { FilmDataService } from 'src/app/services/film-data.service';

@Component({
  selector: 'app-add-mark',
  templateUrl: './add-mark.component.html',
  styleUrls: ['./add-mark.component.css']
})
export class AddMarkComponent implements OnInit {

  commentForm? : FormGroup;
  // comments: FilmComment[] =[];
  // comment?: FilmComment;
  filmId?: number;
  film?: Film;
  // showAddComment = false;

  constructor(private activeRoute: ActivatedRoute,
    private filmData: FilmDataService,
    private router: Router,
    private fb: FormBuilder) { }

     ngOnInit(): void {
      this.filmId = Number(this.activeRoute.parent?.snapshot.paramMap.get('id'));
       this.buildForm();
     }


    buildForm(comment?: FilmComment){

      this.commentForm = this.fb.group(
        {
          username: [comment?.username, Validators.required],
          mark: [comment?.mark, [Validators.required, Validators.min(1), Validators.max(10)] ],
          comment: [comment?.comment, Validators.maxLength(50)]

        }
      )

    }

    showControlError(controlName: string ){
      const control = this.commentForm?.get(controlName);
      return control?.errors && (control.dirty || control.touched);
    }

    controlHasError(controlName: string,errorKey: string){
      const control = this.commentForm?.get(controlName);
      return control?.hasError(errorKey);
    }


  onSave() {
    if (this.filmId) {
      const comment = this.commentForm?.getRawValue();
      this.filmData.addCommentToFilm(comment, this.filmId);
      
    }
  }


}
