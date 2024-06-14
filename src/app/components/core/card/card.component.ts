import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() item: any;
  cutText(text: string) {
    const cuttedText = text?.length >= 18 ? text.slice(0, 18) + "..." : text;
    return cuttedText;
  }
  beautifulText(text: string) {
    const Text = text.slice(0, 1).toUpperCase() + text.slice(1).toLocaleLowerCase()
    return Text;
  }
}
