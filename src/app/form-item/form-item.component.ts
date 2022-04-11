import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
})
export class FormItemComponent implements OnInit {

 choices = [
    {
      id: 0,
      name: 'International Business Corporation (IBC)',
      price: 1650
    },
    {
      id: 1,
      name: 'Nederlandse BV (onder IBC holding)',
      price: 2250
    },
    {
      id: 2,
      name: 'Euro-BV',
      price: 485
    },
    {
      id: 3,
      name: 'Euro-BV met holding',
      price: 650
    },
    {
      id: 4,
      name: 'Engelse LLP',
      price: 485
    },
    {
      id: 5,
      name: 'Engelse Limited',
      price: 275
    },
  ]
  userSelectedType = 0

  text = [
        "U kunt hier uw Engelse Limted, LLP, BV, Euro-BV, of International Business Corporation (IBC), nu direct zelf online oprichten en daar ook letterlijk binnen enkele uren mee aan het werk. Uiterlijk 4 uur (office hours) na goedkeuring van uw bestelling en betaling (IDeal, bankpas of creditcard) wordt op de website van het Britse handelsregister \"Companies House\" de oprichting van uw onderneming met de bijbehorende gegevens en het company-nummer gepubliceerd. Vanaf dat moment bent u volledig bevoegd om met en namens de nieuwe onderneming te handelen.",
        "Uiterlijk de volgende werkdag ontvangt u alle verdere gegevens en documenten. Met die documenten kunt u de vennootschap volledig rechtsgeldig vertegenwoordigen en, indien gewenst, inschrijven bij de Nederlandse Kamer van Koophandel waar u dan ook onmiddellijk een uittreksel, RSIN en BTW nummer voor de onderneming krijgt."
  ]

  noChoiceMade=true;

  form =[
    {
     title: null,
     fields: [
        {
          name: 'Gewenste naam Limited',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
     ]
    },
    {
     title: 'Werkmaatschappij',
     fields: [
        {
          name: 'Gewenste naam werkmij',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
        {
          name: 'Activiteitenomschrijving',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
        {
          name: 'Vestigingsadres',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
        {
          name: 'Postcode',
          value: '',
          appearsIn:[0,1,2,3,4,5]
        },
        {
          name: 'Plaats',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
     ]
    },
    {
     title: 'Directeur',
     fields: [
        {
          name: 'Aanhef',
          value: '',
          type: 'check',
          appearsIn:[0,1,2,3,4,5]
        },
        {
          name: 'Alle voornamen directeur',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
        {
          name: 'Achternaam directeur',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
     ]
    },
    {
      title: null,
      fields:[
        {
          name: 'Adres',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
        {
          name: 'Postcode',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
        {
          name: 'Woonplaats',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
        {
          name: 'Land',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
      ]
    },
    {
      title: null,
      fields:[
        {
          name: 'Geboortedatum',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
        {
          name: 'Geboorteplaats',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
        {
          name: 'Nationaliteit',
          value: '',
          type: 'text',
          appearsIn:[0,1,2,3,4,5]
        },
     ]
    },
  ]


  constructor() { }

  ngOnInit() {}

  setNoChoiceMade(bool){
    this.noChoiceMade = bool;
  }

}
