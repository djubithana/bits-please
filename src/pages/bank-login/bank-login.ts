import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { ForgotMyPinPage } from "../forgot-my-pin/forgot-my-pin";

/**
 * Generated class for the BankLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-bank-login",
  templateUrl: "bank-login.html"
})
export class BankLoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad BankLoginPage");
  }
  OnLoginBank() {}

  ScanFingerprint() {}

  forgotMyPin() {
    this.navCtrl.push(ForgotMyPinPage);
  }
}
