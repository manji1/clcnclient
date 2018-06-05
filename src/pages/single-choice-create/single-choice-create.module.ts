import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {SingleChoiceCreatePage} from './single-choice-create';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    SingleChoiceCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(SingleChoiceCreatePage),
    TranslateModule.forChild()
  ],
})
export class SingleChoiceCreatePageModule {}
