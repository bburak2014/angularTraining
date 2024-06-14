import { Component,Input,Inject } from '@angular/core';
import { CharectersService } from '../../../services/charecters/charecters.service';
@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [],
  templateUrl: './text-input.component.html',
})
export class TextInputComponent {
  @Input() placeHolder="";
   search:any;
  
    constructor(@Inject(CharectersService) private CharectersService: CharectersService) {}

  onSearchChange($event:any) {
    this.search =$event.target.value;
    this.CharectersService.searchText = $event.target.value.toLowerCase();

    }
    
}
