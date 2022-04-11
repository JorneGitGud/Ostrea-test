import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassMediatorService {

  // basePage

  currentNavigation = new BehaviorSubject<any>({basePage: 'companyFormation', subPage:'Online oprichten'})

  setNextCurrentNavigation(basePage, subPage){
    let navigation = {basePage: basePage, subPage:subPage}
    this.currentNavigation.next(navigation)
  }

  constructor() { }
}
