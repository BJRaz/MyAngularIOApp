import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  @Input() name : string;
  @Output() yo = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    
  }

  clicked(): void {
    console.log("I'm depressed...");
    this.yo.emit(null);
  }

}
