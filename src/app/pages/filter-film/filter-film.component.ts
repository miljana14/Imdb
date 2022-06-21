import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-film',
  templateUrl: './filter-film.component.html',
  styleUrls: ['./filter-film.component.css']
})
export class FilterFilmComponent implements OnInit {

  filterWord = '';

  @Output() filterWordChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: any){
    this.filterWordChange.emit(event.target.value);
  }
}
