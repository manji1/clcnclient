import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'QuestionnairePage';
  tab2Root = 'QuestionnaireCreatePage';
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
