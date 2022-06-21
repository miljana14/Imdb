import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFilmComponent } from './filter-film.component';

describe('FilterFilmComponent', () => {
  let component: FilterFilmComponent;
  let fixture: ComponentFixture<FilterFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
