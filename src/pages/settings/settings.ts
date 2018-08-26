import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { settings } from "cluster";
/*import { DashboardPage } from "../home/home"; */

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SettingsPage");
  }
  OnToggle() {}
  OnClickMenuIcon() {
    /** this.navCtrl.push(DashboardPage);*/
  }
}
