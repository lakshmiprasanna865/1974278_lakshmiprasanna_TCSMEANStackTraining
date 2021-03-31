import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  quizzes: Quiz[]=[];

  currentQuiz =0;
  answerSelected = false;
  correctAnswers =0;
  incorrectAnswers = 0;

  constructor(public quizService: TestService) {}

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
  }

  onAnswer(option:any){
    this.currentQuiz++;
    this.answerSelected=true;
  

  if(option){
    this.correctAnswers++;
  }else{
    this.incorrectAnswers++;
  }
}

}
