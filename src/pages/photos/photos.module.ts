import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotosPage } from './photos';
import { OrderByPipeModule } from '../../pipes/order-by/order-by.module';
import { PhotoFrameComponentModule } from '../../components/photo-frame/photo-frame.module';

@NgModule({
  declarations: [
    PhotosPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotosPage),
    OrderByPipeModule,
    PhotoFrameComponentModule,
  ],
})
export class PhotosPageModule {}
