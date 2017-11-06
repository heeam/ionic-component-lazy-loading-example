import { NgModule } from '@angular/core';
import { PhotoFrameComponent } from './photo-frame';

import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
  	PhotoFrameComponent
	],
  imports: [
    IonicModule,
	],
	exports: [
		PhotoFrameComponent
	]
})
export class PhotoFrameComponentModule { }