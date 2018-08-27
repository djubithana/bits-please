import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QRScanner, QRScannerStatus  } from '@ionic-native/qr-scanner';

/**
 * Generated class for the QrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr',
  templateUrl: 'qr.html',
})
export class QrPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner:QRScanner, 
    public alertCtrl: AlertController) {

      window.document.querySelector('ion-app').classList.add('transparentBody');

    
    // Optionally request the permission early
this.qrScanner.prepare()
.then((status: QRScannerStatus) => {
  if (status.authorized) {
    // camera permission was granted
    //alert('authorized');

    // start scanning
    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
      console.log('Scanned something', text);
      this.alert("Result", "Top Up successful");
      this.qrScanner.hide(); // hide camera preview
      scanSub.unsubscribe(); // stop scanning
      this.navCtrl.pop();
    });

    this.qrScanner.resumePreview();

    // show camera preview
    this.qrScanner.show()
    .then((data : QRScannerStatus)=> { 
      console.log('datashowing', data.showing);
    },err => {
      this.alert("Error", err);

    });

    // wait for user to scan something, then the observable callback will be called

  } else if (status.denied) {
    this.alert("Denied", "Permission denied");
    // camera permission was permanently denied
    // you must use QRScanner.openSettings() method to guide the user to the settings page
    // then they can grant the permission from there
  } else {
    // permission was denied, but not permanently. You can ask for permission again at a later time.
    
  }
})
.catch((e: any) => {
  this.alert("Error", e);
});
  }

  alert(header:string, message: string) {
    this.alertCtrl
      .create({
        title: header,
        subTitle: message,
        buttons: ["OK"]
      })
      .present();
  }

  ionViewDidLoad() {
    window.document.querySelector('ion-app').classList.remove('transparentBody');
    console.log('ionViewDidLoad QrPage');
  }

}
