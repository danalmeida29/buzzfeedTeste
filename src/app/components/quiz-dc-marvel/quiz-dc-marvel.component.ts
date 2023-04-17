import { Component, OnInit } from '@angular/core';
import quiz_dcMarvel from '../../../assets/data/quiz_dcMarvel.json'

@Component({
  selector: 'app-quiz-dc-marvel',
  templateUrl: './quiz-dc-marvel.component.html',
  styleUrls: ['./quiz-dc-marvel.component.scss']
})
export class QuizDcMarvelComponent implements OnInit {


  constructor() { }

  title: string = "";

  questions: any;
  questionSelected: any;
  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  answers: string[] = [];
  answerSelected: string = "";

  finished: boolean = false;


  ngOnInit(): void {
    if(quiz_dcMarvel){
      this.finished = false
      this.title = quiz_dcMarvel.title
      this.questions = quiz_dcMarvel.questions
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
      this.answerSelected = quiz_dcMarvel.results[finalAnswer as keyof typeof quiz_dcMarvel.results]
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
