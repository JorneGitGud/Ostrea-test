import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    // voeg hier een nieuwe pagina toe. let op hoofdletters zoals voorbeeld.
    // geef de pagina content in services/data-provider.service.ts
    { title: 'Home', navigation: {basePage: 'home'}},
    { title: 'Bedrijfsjuristen', navigation:  {basePage: 'bedrijfsjuristen'}},
    { title: 'Company Formation', navigation: {basePage: 'companyFormation'}},
    { title: 'Belastingadviseurs', navigation: {basePage: 'belastingadviseurs'}},
    { title: 'Contact', navigation: {basePage: 'contact'}},
    { title: 'Blog', navigation: {basePage: 'blog'}},
  ];

  constructor() {}
}
