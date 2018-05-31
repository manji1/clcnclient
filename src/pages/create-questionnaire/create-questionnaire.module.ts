import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateQuestionnairePage } from './create-questionnaire';

@NgModule({
  declarations: [
    CreateQuestionnairePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateQuestionnairePage),
  ],
})
export class CreateQuestionnairePageModule {}
