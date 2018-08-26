import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankLoginPage } from './bank-login';

@NgModule({
  declarations: [
    BankLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(BankLoginPage),
  ],
})
export class BankLoginPageModule {}
