import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionreceiptPage } from './transactionreceipt';

@NgModule({
  declarations: [
    TransactionreceiptPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionreceiptPage),
  ],
})
export class TransactionreceiptPageModule {}
