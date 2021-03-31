import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})

export class TestService {
  quizzes: Quiz[] = [
    {
      question: 'Which vegetable gives Popeye his strength',
      answer: [
        { option:'Broccoli', correct:false},
        { option:'Spinach', correct:true},
        { option:'Asparagus', correct:false},
        { option:'Lentils', correct:false}
      ]
    },
    {
      question: 'Who was the ancient Greek goddess of love and beauty',
      answer: [
        { option:'Aphrodite', correct:true},
        { option:'Calliope', correct:false},
        { option:'Athena', correct:false},
        { option:'Calypso', correct:false}
      ]
    },
    {
      question: 'Which alcoholic drink is made from the leaves of the agave plant and gets its name from an area around a Mexican city',
      answer: [
        { option:'Tequila', correct:true},
        { option:'Singani', correct:false},
        { option:'Chicha', correct:false},
        { option:'Kasiri', correct:false}
      ]
    },
    {
      question: 'What does the Q in IQ stand for',
      answer: [
        { option:'Quantity', correct:false},
        { option:'Quorum', correct:false},
        { option:'Quality', correct:false},
        { option:'Quotient', correct:true}
      ]
    },
    {
      question: 'What is the name of Superman’s home planet',
      answer: [
        { option:'Argon', correct:false},
        { option:'Rann', correct:false},
        { option:'Krypton', correct:true},
        { option:'Qward', correct:false}
      ]
    },
    {
      question: 'According to legend, kissing which stone in Ireland gives you the gift of the gab',
      answer: [
        { option:'The Blarney Stone', correct:true},
        { option:'The Baloney Stone', correct:false},
        { option:'The Rosetta Stone', correct:false},
        { option:'The Stone of Destiny', correct:false}
      ]
    },
    {
      question: 'In which U.S. city is NASA’s Mission Control Center located',
      answer: [
        { option:'Huntsville, Alabama', correct:false},
        { option:'Houston, Texas', correct:true},
        { option:'Hampton, Virginia', correct:false},
        { option:'Cape Canaveral, Florida', correct:false}
      ]
    },
    {
      question: 'What is the Latin word for “beyond”, often used as a prefix to signify an extreme',
      answer: [
        { option:'Extra', correct:false},
        { option:'Super', correct:false},
        { option:'Ultra', correct:true},
        { option:'Mega', correct:false}
      ]
    },
    {
      question: 'Bronze is mainly an alloy of tin and which other metal',
      answer: [
        { option:'Brass', correct:false},
        { option:'Lead', correct:false},
        { option:'Iron', correct:false},
        { option:'Copper', correct:true}
      ]
    },
    {
      question: 'In meteorology, what name is given to a line of equal pressure on a map',
      answer: [
        { option:'Isotherm', correct:false},
        { option:'Isobar', correct:true},
        { option:'Isochor', correct:false},
        { option:'Isoquant', correct:false}
      ]
    }
  ]

  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}
