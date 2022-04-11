import { ClassMediatorService } from './../../services/class-mediator.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent implements OnInit {

  @Input() title: string;
  @Input() text: string[];
  @Input() list: string[];
  @Input() button: any;
  @Input() text2: string[];
  @Input() imgUrl: string;
  @Input() linkText: string;
  @Input() navigation: any;

  // @Output() clickedLink : EventEmitter<any> = new EventEmitter();

  constructor(private classMediatorService:ClassMediatorService) { }

  ngOnInit() {}

  goTo(basePage, subPage){
    this.classMediatorService.setNextCurrentNavigation(basePage, subPage)
  }

  // emitClickedLink(basePage, subPage){
  //   let navigation = {basePage: basePage, subPage:subPage}
  //   this.clickedLink.emit(navigation)
  // }
}
