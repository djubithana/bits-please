import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SettingsPage } from '../pages/settings/settings';
import { BankloginPage } from '../pages/banklogin/banklogin';
import { LoginPage } from '../pages/login/login';
import { ForgotmypinPage } from '../pages/forgotmypin/forgotmypin';
import { RegisterPage } from '../pages/register/register';
import { PaymenthistoryPage } from '../pages/paymenthistory/paymenthistory';
import { QrPage } from '../pages/qr/qr';
import { SupportedonlinestoresPage } from '../pages/supportedonlinestores/supportedonlinestores';

import { QRScanner } from '@ionic-native/qr-scanner';
import { TransactionreceiptPage } from '../pages/transactionreceipt/transactionreceipt';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    SettingsPage,
    BankloginPage,
    LoginPage,
    ForgotmypinPage,
    RegisterPage,
    PaymenthistoryPage,
    QrPage,
    SupportedonlinestoresPage,
    TransactionreceiptPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    SettingsPage,
    BankloginPage,
    LoginPage,
    ForgotmypinPage,
    RegisterPage,
    PaymenthistoryPage,
    QrPage,
    SupportedonlinestoresPage,
    TransactionreceiptPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QRScanner,
    FingerprintAIO
  ]
})
export class AppModule {}
