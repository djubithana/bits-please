import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { PaymenthistoryPage } from '../paymenthistory/paymenthistory';
import { QrPage } from '../qr/qr';
import { SupportedonlinestoresPage } from '../supportedonlinestores/supportedonlinestores';
import { BankloginPage } from '../banklogin/banklogin';

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

  public balance:number = null;
  public placeholderbalance:number = null;
  public price:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.placeholderbalance = 5000;
    this.balance = 5000;
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
    this.navCtrl.setRoot(QrPage);
}

shopOnline(){
this.navCtrl.push(SupportedonlinestoresPage);
}

onClickBank(){
  this.navCtrl.push(BankloginPage);
}

}
