import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransactionreceiptPage } from '../transactionreceipt/transactionreceipt';

/**
 * Generated class for the SupportedonlinestoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supportedonlinestores',
  templateUrl: 'supportedonlinestores.html',
})
export class SupportedonlinestoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportedonlinestoresPage');
  }
  processPayment(){
    this.navCtrl.push(TransactionreceiptPage);
  }
}
