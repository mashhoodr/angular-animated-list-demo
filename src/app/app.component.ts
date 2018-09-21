import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn',[
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {

  counter = 5;
  list = [1,2,3,4];
  
  add(){
    this.list.push(this.counter++);
  }
  
  remove(index) {
    if(!this.list.length) return;
    this.list.splice(index,1);
  }
}
