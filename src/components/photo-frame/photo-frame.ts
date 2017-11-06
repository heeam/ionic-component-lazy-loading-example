import {
	Component,
	Input
} from '@angular/core';

import {
	ToastController
} from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Photo } from '../../models/photo.interface';

/**
 * Generated class for the PhotoFrameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'photo-frame',
  templateUrl: 'photo-frame.html'
})
export class PhotoFrameComponent {

  @Input() item: Observable<Photo>;

  constructor(
  	public toastCtrl: ToastController
  ) {
    console.log('Hello PhotoFrameComponent Component');
  }

	presentToast(message: string, position?: string) {
		let toast = this.toastCtrl.create({
			message: message || '',
			duration: 1000,
			position: position || 'top',
			showCloseButton: true
		});
		toast.present();
	}

}
