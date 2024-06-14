import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharectersService {
  searchText: string = "";
  filteredData:any;
  Data:any;
  ComboBoxOption:any=[];

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get("https://rickandmortyapi.com/api/character");
  }
  fetchDataDetail(id:string) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }

}
