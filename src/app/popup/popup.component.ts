import { Component, Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']

})
export class PopupComponent {
  @Output() close = new EventEmitter<void>();
  @Input() content: string = '';

  onClose(){
    this.close.emit();
  }
}
