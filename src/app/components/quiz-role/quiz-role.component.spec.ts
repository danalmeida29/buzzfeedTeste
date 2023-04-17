import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizRoleComponent } from './quiz-role.component';

describe('QuizRoleComponent', () => {
  let component: QuizRoleComponent;
  let fixture: ComponentFixture<QuizRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
