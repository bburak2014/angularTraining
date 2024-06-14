import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharectersService } from '../../services/charecters/charecters.service';
@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [],
  templateUrl: './character-details.component.html',
})
export class CharacterDetailsComponent {
  constructor(private activeRoute: ActivatedRoute, private CharectersService: CharectersService) { }
  charecterData: any;

  ngOnInit(): void {
    let charecterId = this.activeRoute.snapshot.paramMap.get("id");
    charecterId && this.CharectersService.fetchDataDetail(charecterId).subscribe((result) => {
      this.charecterData = result;
 
    })
  }
}
