import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteFilmsComponent } from './favourite-films.component';

describe('FavouriteFilmsComponent', () => {
  let component: FavouriteFilmsComponent;
  let fixture: ComponentFixture<FavouriteFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
