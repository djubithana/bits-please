import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
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
  bool:boolean = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.bool = true);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SettingsPage");
  }
}
