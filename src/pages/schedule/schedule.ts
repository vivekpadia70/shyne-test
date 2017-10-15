import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarPage } from '../../pages/calendar/calendar';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  date: Date;
  constructor(public navCtrl: NavController, public navParams: NavParams, public mCtrl: ModalController) {
    this.date = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }
  openCal(){
    let modal = this.mCtrl.create(CalendarPage);
    modal.onDidDismiss(data => {
      console.log(data);
      this.date = data;
    });
    modal.present();
  }

}
