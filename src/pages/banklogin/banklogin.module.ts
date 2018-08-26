import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankloginPage } from './banklogin';

@NgModule({
  declarations: [
    BankloginPage,
  ],
  imports: [
    IonicPageModule.forChild(BankloginPage),
  ],
})
export class BankloginPageModule {}
