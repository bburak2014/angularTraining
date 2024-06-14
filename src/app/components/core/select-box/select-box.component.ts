import { Component, Input } from '@angular/core';
import { CharectersService } from '../../../services/charecters/charecters.service';
@Component({
  selector: 'app-select-box',
  standalone: true,
  imports: [],
  templateUrl: './select-box.component.html',
})
export class SelectBoxComponent {
  @Input() defaultSelectboxOption = "";
  @Input() id: any;
  @Input() selectBoxOptions: string[] = [];
   isSelectDisabled = false;
  constructor(private CharectersService: CharectersService) { }
  getData() {
    return this.CharectersService.Data;
  }
  handleSelect(event: any) {
    const optionSelected = event.target.value.toLowerCase();
    this.isSelectDisabled = true;
    if (this.id === "gender") {
      this.CharectersService.ComboBoxOption.gender = optionSelected;

    }
    else if (this.id === "status") {
      this.CharectersService.ComboBoxOption.status = optionSelected;
    }

  }
}
