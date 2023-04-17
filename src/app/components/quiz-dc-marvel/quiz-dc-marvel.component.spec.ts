import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDcMarvelComponent } from './quiz-dc-marvel.component';

describe('QuizDcMarvelComponent', () => {
  let component: QuizDcMarvelComponent;
  let fixture: ComponentFixture<QuizDcMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizDcMarvelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDcMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
