import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {QuestionType} from '../../definitions/question-type';
import {Choice} from "../../interfaces/questionnaire";

/**
 * Generated class for the SingleChoiceCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-choice-create',
  templateUrl: 'single-choice-create.html',
})
export class SingleChoiceCreatePage {

  choices: Choice[];

  constructor(public navCtrl: NavController, public navParams: NavParams, translate: TranslateService,
              public modalCtrl: ModalController) {
    this.choices = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleChoiceCreatePage');
  }

  // addChoice(choice: Choice) {
  //   if (!choice.answer)
  //   this.choices.push({
  //     id: this.choices.length,
  //     answer: 'a',
  //     img: null
  //   })
  // }
  addChoice() {
    let addModal = this.modalCtrl.create('ChoiceCreatePage');
    addModal.onDidDismiss(choice => {
      if (choice) {
        this.choices.push(choice);
      }
    })
    addModal.present();
  }

  fixChoice(choice: Choice) {
    // if (!choice.answer) {
    //   this.choices.
    // }
  }

}
