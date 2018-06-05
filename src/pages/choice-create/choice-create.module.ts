import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoiceCreatePage } from './choice-create';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ChoiceCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ChoiceCreatePage),
    TranslateModule.forChild()
  ],
})
export class ChoiceCreatePageModule {}
