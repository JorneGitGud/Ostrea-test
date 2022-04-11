import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  // Pas hier de linkerkant van de homepagina aan.
  leftText : any[] = [
    {
      title: "Met recht uw vertrouwen waard.",
      text: ["Ostrea Juristen is als enige Nederlandstalige aanbieder van Engelse vennootschappen (Limiteds, Limited Liability Partnerships en IBC's) door het Britse handelsregister geautoriseerd als erkend company formation agent. Met meer dan 30 jaar ervaring is Ostrea bovendien één van de oudste in het ondernemings- en bedrijfsrecht gespecialiseerde kantoren. De Ostrea groep heeft eigen kantoren in Engeland en in Servië. Ostrea Nederland vindt u aan de Laan van Meerdervoort 415 in Den Haag.",
              "Adresgegevens van de verschillende Ostrea vestigingen vindt u onder aan deze pagina."]
    },
    {
      title: "De International Business Corporation (IBC)",
      text: ["De International Business Corporation biedt de hoogst mogelijke graad van bescherming voor bestuurders en directie van de onderneming. Met effectief vaak niet meer dan hooguit een paar honderd euro vennootschapsbelasting per jaar de perfecte ondernemingsvorm voor zowel ondernemers die maximaal willen profiteren van alle mogelijkheden en vrijstellingen van het internationaal belastingrecht als voor ondernemers en particulieren die optimale privacy en bescherming zoeken"],
      linkText: "Lees meer.....",
      linkUrl: "/home"
    },
    {
      title: "De Euro-BV",
      text: ["Een Nederlandse werkmaatschappij binnen 24 uur volledig beschermd en operationeel ingeschreven bij de Kamer van Koophandel. Inclusief alle documenten en kosten compleet €485,-. Direct oprichten of meer weten?"],
      linkText: "Lees meer.....",
      linkUrl: "/home"
    },
    {
      title: "De Engelse Limited (Ltd.)",
      text: ["Tegen minimale kosten maar wel beter beschermd dan met de Nederlandse BV (geen uitkeringstoets). Voor de belastingdienst volkomen gelijk aan de Nederlandse BV. Compleet ingeschreven bij de Nederlandse Kamer van Koophandel voor € 275,- inclusief alle akten en documenten. Dus geen verborgen of bijkomende kosten."],
      linkText: "Lees meer.....",
      linkUrl: "/home"
    },
    {
      title: "Doorstarten bij Faillissement",
      text: ["Wanneer u als ondernemer, eventueel met steun van derden, wilt en kunt doorstarten, dan mag, in de filosofie van Ostrea, een oud, een dreigend of zelfs een lopend faillissement daarbij niet in de weg staan"],
      linkText: "Lees meer.....",
      linkUrl: "/home"
    },
    {
      title: "Helder Prijsbeleid",
      text: ["Ostrea streeft naar een helder \"alles inclusief\" prijsbeleid. U betaalt daarom nooit extra voor inschrijvingen, documenten, kantoorkosten, registered office, leges etc. alle prijzen en tarieven zijn inclusief alle kosten, Ostrea geeft u daarmee de zekerheid dat onaangename verrassingen achteraf u bespaard zullen blijven."],
      linkText: "Lees meer.....",
      linkUrl: "/home"
    },

  ]

  // hier kun je het textveld aan de rechterkant aanpassen
  rightText : string[] = [
    "Voor het oprichten van een Engelse Limited (Ltd. of LLP.) en daarop gebaseerde vennootschapsstructuren bent u bij Ostrea aan het juiste adres",
    "Ostrea Consult Limited, is het enige Nederlandstalige kantoor dat door het Britse Handelsregister (Companies House) is erkend en gevolmachtigd als Authorized Company Formation Agent.",
    "Ostrea is daardoor ook het enige Nederlandstalige kantoor dat zelfstandig rechtstreeks online Engelse Limited Companies voor haar cliënten kan oprichten, registreren en onderhouden in het Britse handelsregister.",
    "Ostrea is met betrekking tot het Britse Know Your Customeren (KYC) en Anti Money Laundring (AML) beleid bij de Britse Financiële en Fiscale autoriteit Her Majesty's Reveneu en Customs (HMRC) als Fit and Proper aproved trust en companie service provider geregistreerd onder nummer: XCML 00000132186",
    "Met meer dan 1000 registraties per jaar is Ostrea bovendien veruit de belangrijkste aanbieder van Engelse vennootschappen op de Nederlandstalige markt.",
    "Het Britse Handelsregister 'Companies House' recommandeert Ostrea op haar website als aanbevolen Authorized Company Formation Agent voor electronische oprichting en webfilling"
  ]

  constructor() {}

}
