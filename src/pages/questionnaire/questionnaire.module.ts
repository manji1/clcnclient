import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {QuestionnairePage} from './questionnaire';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    QuestionnairePage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionnairePage),
    TranslateModule.forChild()
  ],
})
export class QuestionnairePageModule {
}
