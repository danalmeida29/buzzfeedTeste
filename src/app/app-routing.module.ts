import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizRoleComponent } from './components/quiz-role/quiz-role.component';
import { QuizDcMarvelComponent } from './components/quiz-dc-marvel/quiz-dc-marvel.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'quiz_rolezeiro', component: QuizRoleComponent},
  {path:'quiz_heroi', component: QuizComponent},
  {path:'quiz_dcMarvel', component: QuizDcMarvelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
