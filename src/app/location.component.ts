import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class Location {
  @Input() locname:string = 'Farm';
  @Input() min:number = 2;
  @Input() max:number = 5;
  @Output() chaching = new EventEmitter<number>();
  onClick() {
    let x:number = Math.floor(Math.random()*(this.max-this.min+1))+Number(this.min);
    console.log("Your roll:", x)
    this.chaching.emit(x);
  }
}
