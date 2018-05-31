import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Slide} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Questionnaire} from "../../interfaces/questionnaire";
import {TranslateService} from "@ngx-translate/core";

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
  questionnaires: Questionnaire[];
  // questionnaires: Questionnaire[] = [
  //   {
  //     id: 1,
  //     title: 'sample1',
  //     author: 'shiraki',
  //     questions: [
  //       {
  //         no: 1,
  //         type: 1,
  //         question: 'Select which you prefer',
  //         choices: [
  //           {
  //             id: 1,
  //             answer: 'A',
  //             img: null
  //           },
  //           {
  //             id: 2,
  //             answer: 'B',
  //             img: null
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: 'sample1',
  //     author: 'shiraki',
  //     questions: [
  //       {
  //         no: 1,
  //         type: 1,
  //         question: 'aaaaa',
  //         choices: [
  //           {
  //             id: 1,
  //             answer: 'A',
  //             img: null
  //           },
  //           {
  //             id: 2,
  //             answer: 'B',
  //             img: null
  //           },
  //           {
  //             id: 3,
  //             answer: 'D',
  //             img: null
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClient,
    public translate: TranslateService
  ) {

  }

  ionViewDidLoad() {
    // this.httpClient.get('https://prixsx9ge3.execute-api.ap-northeast-1.amazonaws.com/alpha/questionnaires',
    //   {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json'
    //     })
    //   })
    this.httpClient
      .get<{ questionnaires: Questionnaire[] }>('https://prixsx9ge3.execute-api.ap-northeast-1.amazonaws.com/alpha/questionnaires')
      .subscribe((data) => {
        this.questionnaires = data['Items'];
      });
  }

}
