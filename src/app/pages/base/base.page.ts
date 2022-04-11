import { DataProviderService } from './../../services/data-provider.service';
import { ClassMediatorService } from './../../services/class-mediator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.page.html',
  styleUrls: ['./base.page.scss'],
})
export class BasePage implements OnInit {

  title: string;
  currentPage: any;
  currentGroup: any;

  constructor(private classMediatorService: ClassMediatorService, private dataProviderService:DataProviderService) {
    this.classMediatorService.currentNavigation.subscribe((navigation) => {

      console.log(navigation);


      this.title = navigation.basePage;
      this.currentPage = dataProviderService.getBasePage(navigation.basePage);

      if(navigation.subPage || navigation.subPage != null){
        this.currentGroup = this.currentPage[navigation.subPage];
      }
      else{
        this.currentGroup = this.currentPage[0];
      }

    });
  }

  ngOnInit() {}

  setCurrentGroup(group){
    this.currentGroup = group;
  }


  // add current page to routing
  goTo(navigation){
    if(this.currentPage == navigation.BasePage)

   this.currentPage.forEach(subPage => {
     if(subPage.title == event){
       this.currentGroup = subPage
     }
   });
  }
}


// {
//   title: 'title1',
//   content: [
//     {
//       title: 'subtitle1',
//       text: [
//         "text",
//       ],
//       linkUrl: '',
//       linkText: 'LEESVERDER',
//     },
//   ],
// },
