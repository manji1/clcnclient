import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Slide} from 'ionic-angular';

/**
 * Generated class for the QuestionnairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'QuestionnairePage'
})
@Component({
  selector: 'page-questionnaire',
  templateUrl: 'questionnaire.html',
})
export class QuestionnairePage {

  slides: Slide[];
  questionnaires: {
    id: number,
    title: string,
    author: string,
    questions: {
      no: number,
      type: number,
      question: string,
      choices: {
        id: number,
        answer: string,
        img: any
      }[]
    }[]
  }[] = [
    {
      id: 1,
      title: 'sample1',
      author: 'shiraki',
      questions: [
        {
          no: 1,
          type: 1,
          question: 'Select which you prefer',
          choices: [
            {
              id: 1,
              answer: 'A',
              img: null
            },
            {
              id: 2,
              answer: 'B',
              img: null
            }
          ]
        }
      ]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionnairePage');
  }

}
