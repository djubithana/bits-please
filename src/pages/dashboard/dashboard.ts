import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { PaymenthistoryPage } from '../paymenthistory/paymenthistory';
import { QrPage } from '../qr/qr';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

 

  openSettingsPage(){
    this.navCtrl.push(SettingsPage);
  }

  openPaymentHistory(){
    this.navCtrl.push(PaymenthistoryPage);
  }

  scanQR(){
    this.navCtrl.push(QrPage);
}

}
