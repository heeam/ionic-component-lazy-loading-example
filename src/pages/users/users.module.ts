import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPage } from './users';
import { OrderByPipeModule } from '../../pipes/order-by/order-by.module';

@NgModule({
  declarations: [
    UsersPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
    OrderByPipeModule,
  ],
})
export class UsersPageModule {}
