import { Component, Input,EventEmitter } from '@angular/core';
import { TextInputComponent } from '../../core/text-input/text-input.component';
import { SelectBoxComponent } from '../../core/select-box/select-box.component';
import { SearchButtonComponent } from '../../core/search-button/search-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TextInputComponent,SelectBoxComponent,SearchButtonComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
 
  placeHolder = "";
  defaultSelectboxOption="";
  selectBoxOptions=[];
}
