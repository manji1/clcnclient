import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Camera} from "@ionic-native/camera";

/**
 * Generated class for the ChoiceCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choice-create',
  templateUrl: 'choice-create.html',
})
export class ChoiceCreatePage {

  @ViewChild('fileInput') fileInput;
  isReadyToSave: boolean;
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, translate: TranslateService,
              public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera) {
    this.form = formBuilder.group({
      profilePic: [''],
      name: ['', Validators.required]
    });
    this.form.valueChanges.subscribe(() => {
      this.isReadyToSave = this.form.valid;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoiceCreatePage');
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then(data => {
        this.form.patchValue({
          'profilePic': 'data:image/jpg;base64,' + data
        });
      }, (err) => {
        alert('Unable to take photo');
      });
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({
        'profilePic': imageData
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')';
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() {
    if (!this.form.valid) {
      return;
    }
    this.viewCtrl.dismiss(this.form.value);
  }

}
