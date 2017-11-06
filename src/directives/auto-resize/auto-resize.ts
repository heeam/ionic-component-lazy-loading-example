import {
	Directive,
	OnInit,
	HostListener,
	Inject,
	ElementRef
} from '@angular/core';

/**
 * Generated class for the AutoResizeDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: 'ion-textarea[auto-resize]' // Attribute selector
})
export class AutoResizeDirective implements OnInit {

	@HostListener('input', ['$event.target'])

	onInput(textArea: HTMLTextAreaElement): void {
		this.adjust();
	}

  constructor(
			@Inject(ElementRef) public element: ElementRef
  ) {
    console.log('Hello AutoResizeDirective Directive');
  }

	ngOnInit(): void {
		setTimeout(() => this.adjust(), 0);
	}

	adjust(): void {
		let textArea = this.element.nativeElement.querySelector("textarea");
		// let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
		textArea.style.overflow = 'hidden';
		textArea.style.height = 'auto';
		textArea.style.height = textArea.scrollHeight + "px";
	}

}
