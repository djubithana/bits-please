import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Alert } from "ionic-angular";
import { AlertController } from "ionic-angular";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  OnLogin() {
    this.DeviceSettingsPrompt();
  }

  DeviceSettingsPrompt() {
    const confirm = this.alertCtrl.create({
      title: "Main device settings",
      message:
        "Is this your main device you will be using with this app? If this is your main device, we will keep you logged in. All you have to do the next time you login is type your PIN or use our fingerscan feature.",
      buttons: [
        {
          text: "Yes",
          handler: () => {
            console.log("Yes clicked");
          }
        },
        {
          text: "No",
          handler: () => {
            console.log("No clicked");
          }
        }
      ]
    });
    confirm.present();
  }
}
