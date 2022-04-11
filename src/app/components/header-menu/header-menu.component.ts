import { BasePage } from './../../pages/base/base.page';
import { ClassMediatorService } from './../../services/class-mediator.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {

  @Input() pages: any;
  constructor(private router:Router, private classMediatorService: ClassMediatorService) { }

  ngOnInit() {}


  navigateTo(basePage){
    if(basePage =='home'){
      this.router.navigateByUrl('home')
    }
    else{
      this.router.navigateByUrl('base')
      let navigation = {basePage: basePage, subPage:null}
      this.classMediatorService.setNextCurrentNavigation(navigation.basePage, navigation.subPage)
    }
  }

}
