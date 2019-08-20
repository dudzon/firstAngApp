import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<{ featureSelected: string }>();
  constructor() {}

  ngOnInit() {}
  // onSelect(feature: string) {
  //   // console.log(type);
  //   this.featureSelected.emit({
  //     featureSelected: feature
  //   });
  // }
}
