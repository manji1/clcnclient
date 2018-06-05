import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {AnswerType} from "../../interfaces/questionnaire";
import {QuestionType} from '../../definitions/question-type';
import {T} from "@angular/core/src/render3";

/**
 * Generated class for the QuestionnaireCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionnaire-create',
  templateUrl: 'questionnaire-create.html',
})
export class QuestionnaireCreatePage {

  pageTitle: string;
  answerType: AnswerType[];
  title: string;
  titlePlaceholder: string;

  getAnswerType(values, type: QuestionType): AnswerType {
    return {
      typeId: type,
      typeText: values.QuestionType[type]
    };
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {
    translate.get([
      QuestionType[QuestionType.SINGLE_CHOICE],
      QuestionType[QuestionType.MULTI_CHOICE],
      QuestionType[QuestionType.IMAGE_CHOICE]
    ]).subscribe(values => {
      this.answerType = [
        {
          typeId: QuestionType.SINGLE_CHOICE,
          typeText: values.SINGLE_CHOICE
        },
        {
          typeId: QuestionType.MULTI_CHOICE,
          typeText: values.MULTI_CHOICE
        },
        {
          typeId: QuestionType.IMAGE_CHOICE,
          typeText: values.IMAGE_CHOICE
        }
      ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionnaireCreatePage');
  }

  goNextPage(typeId: number) {
    switch (typeId) {
      case QuestionType.SINGLE_CHOICE:
        this.navCtrl.push('SingleChoiceCreatePage');
    }
  }

}
