import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { ForgotmypinPage } from "../forgotmypin/forgotmypin";

/**
 * Generated class for the BankLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: "banklogin.html"
})
export class BankloginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad BankLoginPage");
  }
  OnLoginBank() {}

  ScanFingerprint() {}

  forgotMyPin() {
    this.navCtrl.push(ForgotmypinPage);
  }
}
