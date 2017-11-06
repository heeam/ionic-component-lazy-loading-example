import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostDetailPage } from './post-detail';
import { AutoResizeDirectiveModule } from '../../directives/auto-resize/auto-resize.module';

@NgModule({
  declarations: [
    PostDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PostDetailPage),
    AutoResizeDirectiveModule,
  ],
})
export class PostDetailPageModule {}
