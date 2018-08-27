import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { FingerprintAIO} from '@ionic-native/fingerprint-aio';

/**
 * Generated class for the TransactionreceiptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactionreceipt',
  templateUrl: 'transactionreceipt.html',
})
export class TransactionreceiptPage {

  public dbp:DashboardPage;
  public price:number = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private faio:FingerprintAIO) {
    this.price=4000;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionreceiptPage');
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Pin',
      message: "Enter your 6-digit pincode",
      inputs: [
        {
          name: '6-digit pincode',
          placeholder: '6-digit pincode'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: data => {
            console.log('Confirm clicked');
            this.runFingerprintScanner();
          }
        }
      ]
    });
    prompt.present();
  }


cancelTransaction(){
this.navCtrl.setRoot(DashboardPage);
}

confirmTransaction(){
this.showPrompt();
}

runFingerprintScanner(){
  this.faio.show({
    clientId: 'Fingerprint-demo',
    clientSecret:'password'
  })
  .then(result =>{
    this.navCtrl.setRoot(DashboardPage, {price:"4000"});
  }

  )
  console.log("this works")
}

}
