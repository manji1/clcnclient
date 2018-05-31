import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {AnswerType} from "../../interfaces/questionnaire";

/**
 * Generated class for the CreateQuestionnairePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-questionnaire',
  templateUrl: 'create-questionnaire.html',
})
export class CreateQuestionnairePage {

  answerType: AnswerType[];

  constructor(public navCtrl: NavController, public navParams: NavParams, translate: TranslateService) {
    translate.get([
      'SINGLE_CHOICE',
      'MULTI_CHOICE',
      'IMG_CHOICE'
    ]).subscribe(values => {
      this.answerType = [
        {
          typeId: 1,
          typeText: values.SINGLE_CHOICE
        },
        {
          typeId: 2,
          typeText: values.MULTI_CHOICE
        },
        {
          typeId: 3,
          typeText: values.IMG_CHOICE
        }
      ]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateQuestionnairePage');
  }

  goNextPage() {

  }

}
