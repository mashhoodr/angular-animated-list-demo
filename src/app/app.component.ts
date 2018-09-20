import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
