import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentDetailPage } from './comment-detail';
import { AutoResizeDirectiveModule } from '../../directives/auto-resize/auto-resize.module';

@NgModule({
  declarations: [
    CommentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentDetailPage),
    AutoResizeDirectiveModule,
  ],
})
export class CommentDetailPageModule {}
