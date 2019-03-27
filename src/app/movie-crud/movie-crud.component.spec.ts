import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCRUDComponent } from './movie-crud.component';

describe('MovieCRUDComponent', () => {
  let component: MovieCRUDComponent;
  let fixture: ComponentFixture<MovieCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
