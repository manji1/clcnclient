import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionnaireCreatePage } from './questionnaire-create';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    QuestionnaireCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionnaireCreatePage),
    TranslateModule.forChild()
  ],
})
export class QuestionnaireCreatePageModule {}
