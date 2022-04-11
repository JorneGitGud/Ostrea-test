import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-item',
  templateUrl: './base-item.component.html',
  styleUrls: ['./base-item.component.scss'],
})
export class BaseItemComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {}


}
