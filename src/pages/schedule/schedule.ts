import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarPage } from '../../pages/calendar/calendar';
import { WorkerProvider } from '../../providers/worker/worker';

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
  data;
  compare_date;
  constructor(public navCtrl: NavController, public navParams: NavParams, public mCtrl: ModalController, public workerService: WorkerProvider) {
    this.date = new Date();
    this.compare_date = this.date.toDateString();
    console.log(this.workerService.worker)
    this.data = this.workerService.worker;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }
  openCal(){
    let modal = this.mCtrl.create(CalendarPage);
    modal.onDidDismiss(data => {
      console.log(data);
      this.date = data;
      this.compare_date = this.date.toDateString();
    });
    modal.present();
  }


  compare_dates(today, data){
    let first_date = new Date(today);
    console.log(first_date);
    let second_date = new Date(data);
    console.log(second_date)
    if(first_date.getTime() === second_date.getTime())
      return true;
    else
      return false;
  }
}
