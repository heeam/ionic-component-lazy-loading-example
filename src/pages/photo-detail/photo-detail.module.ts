import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoDetailPage } from './photo-detail';
import { PhotoFrameComponentModule } from '../../components/photo-frame/photo-frame.module';

@NgModule({
  declarations: [
    PhotoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoDetailPage),
    PhotoFrameComponentModule,
  ],
})
export class PhotoDetailPageModule {}
