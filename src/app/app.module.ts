import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { BankLoginPage } from "../pages/bank-login/bank-login";
import { ForgotMyPinPage } from "../pages/forgot-my-pin/forgot-my-pin";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { SettingsPage } from "../pages/settings/settings";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BankLoginPage,
    ForgotMyPinPage,
    LoginPage,
    RegisterPage,
    SettingsPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BankLoginPage,
    ForgotMyPinPage,
    LoginPage,
    RegisterPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
