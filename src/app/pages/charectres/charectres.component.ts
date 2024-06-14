import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../../components/shared/navbar/navbar.component';
import { CardComponent } from '../../components/core/card/card.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CharectersService } from '../../services/charecters/charecters.service';

@Component({
  selector: 'app-charectres',
  standalone: true,
  imports: [NavbarComponent, CardComponent, CommonModule, HttpClientModule],
  templateUrl: './charectres.component.html',
})
export class CharectresComponent implements OnInit {
  httpClient = inject(HttpClient);
  search = "";

  constructor(private CharectersService: CharectersService) { }

  ngOnInit(): void {
    this.fetchData();
  }
  getSearchText() {
    return this.CharectersService.searchText;
  }
  getFilterData() {
    return this.CharectersService.filteredData;
  }
  fetchData() {
    this.CharectersService.fetchData().subscribe((data: any) => {
      this.CharectersService.Data = data.results;
      this.CharectersService.filteredData = data.results;
     });
  }
}
