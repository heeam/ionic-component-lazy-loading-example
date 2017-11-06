import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentsPage } from './comments';
import { OrderByPipeModule } from '../../pipes/order-by/order-by.module';
import { AutoResizeDirectiveModule } from '../../directives/auto-resize/auto-resize.module';

@NgModule({
  declarations: [
    CommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentsPage),
    OrderByPipeModule,
    AutoResizeDirectiveModule,
  ],
})
export class CommentsPageModule {}
