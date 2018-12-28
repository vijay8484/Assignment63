import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template: `
    <button (click)="onClickMe()">Upper</button>
    {{clickMessage}}`

})
export class AppComponent {
   clickMessage = 'Marvellous Infosystems';

   onClickMe() {
     this.clickMessage = 'Educating for Better tomorrow';
   }
}
