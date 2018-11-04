import { Component, Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']

})
export class PopupComponent {
  //Close popup event emiter
  @Output() close = new EventEmitter<void>(); 
  //Popup content data binding
  @Input() content: string = '';

  /**
   * Close popup event handler
   */
  onClose(){
    this.close.emit();
  }
}
