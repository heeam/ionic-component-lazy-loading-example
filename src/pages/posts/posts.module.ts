import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsPage } from './posts';
import { OrderByPipeModule } from '../../pipes/order-by/order-by.module';
import { AutoResizeDirectiveModule } from '../../directives/auto-resize/auto-resize.module';

@NgModule({
  declarations: [
    PostsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostsPage),
    OrderByPipeModule,
    AutoResizeDirectiveModule,
  ],
})
export class PostsPageModule {}
