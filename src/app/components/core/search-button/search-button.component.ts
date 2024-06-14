import { Component } from '@angular/core';
import { CharectersService } from '../../../services/charecters/charecters.service';
@Component({
  selector: 'app-search-button',
  standalone: true,
  imports: [],
  templateUrl: './search-button.component.html',
})
export class SearchButtonComponent {
  constructor(private CharectersService: CharectersService) { }
  
  getSearchText() {
    return this.CharectersService.searchText;
  }
  getFilteredData() {
    return this.CharectersService.filteredData;
  }
  getData() {
    return this.CharectersService.Data;
  }

  handleclick() {
    const searchText = this.CharectersService.searchText.toLowerCase();
    const Data = this.CharectersService.Data;
    const optionSelected = this.CharectersService.ComboBoxOption;
  
    if (!optionSelected.gender && !optionSelected.status && !searchText) {
      this.CharectersService.filteredData = Data;
      return;
    }
  
    let filteredData: any;
    filteredData = Data.filter((item: any) => {
      let match = false;
      let selectMatch = true;
  
      match = item.name.toLowerCase().includes(searchText) || item.type.toLowerCase().includes(searchText);
  
      if (optionSelected.gender) {
        selectMatch = selectMatch && item.gender.toLowerCase() === optionSelected.gender;
      }
  
      if (optionSelected.status) {
        selectMatch = selectMatch && item.status.toLowerCase() === optionSelected.status;
      }
  
      return match && selectMatch;
    });
  
    this.CharectersService.filteredData = filteredData;
  }
}

