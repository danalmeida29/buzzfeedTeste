import { Component, OnInit } from '@angular/core';
import quiz_questions from '../../../assets/data/quiz_questions.json';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  title: string = "";

  questions: any;
  questionSelected: any;
  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  answers: string[] = [];
  answerSelected: string = "";

  finished: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    if(quiz_questions){
      this.finished = false
      this.title = quiz_questions.title
      this.questions = quiz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length
    }
  }
/**
 * Método que identifica qual respota foi escolhida pelo o usuário.
 * @param value 
 */
  playerChoose(value: string){
    this.answers.push(value)
    this.nextStep()
  }
/**
 * Método para ir para a próxima questão 
 */
  async nextStep(){
    this.questionIndex+=1
    if(this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }else{
      const finalAnswer: string = await this.checkResult(this.answers)
      this.finished = true
      this.answerSelected = quiz_questions.results[finalAnswer as keyof typeof quiz_questions.results]
    }
  }
/**
 * Método que valida e calcula o resultado final 
 * @param answers 
 * @returns 
 */
  async checkResult(answers:string[]){
    const result = answers.reduce((previous, current, i, arr )=>{
      if(arr.filter(item => item === previous).length > arr.filter(item => item === current).length){
        return previous
      }else{
        return current
      }
    })

    return result
  }

}
