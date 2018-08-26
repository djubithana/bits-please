import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotMyPinPage } from './forgot-my-pin';

@NgModule({
  declarations: [
    ForgotMyPinPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotMyPinPage),
  ],
})
export class ForgotMyPinPageModule {}
