import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumsPage } from './albums';
import { OrderByPipeModule } from '../../pipes/order-by/order-by.module';

@NgModule({
  declarations: [
    AlbumsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumsPage),
    OrderByPipeModule,
  ],
})
export class AlbumsPageModule {}
