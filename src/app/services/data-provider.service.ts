import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {


  // hieronder vind je de content van de pagina's
  // je kan zelf makkelijk content toevoegen door het voorbeeld te copieeren en zelf in te vullen.
  // let goed op dat de naam van het object de zelfde naam heeft als de naam waarmee er naar 'gelinkt' wordt.

  // voorbeeld:

  // voorbeeldPagina = [
  //   {
  //     title: 'titelVanSubPagina',
  //     content: [
  //       {
  //         title: 'titelVanParagraaf',
  //          type: 'text'//        ,
  //          text: [
  //           "GeefHierTextAanParagraag",
  //         ],
  //         navigation:{basePage: 'eventueleLinkNaarPagina', subPage:'linkNaarParagraaf'},
  //         linkText: 'eventueleLinkTitel',
  //       },
  //     ]
  //   }
  // ]


  bedrijfsjuristen = [
    {
      title: 'Bedrijfsjuristen',
      content: [
        {
          title: 'Ostrea Nederland Bedrijfsjuristen',
         type: 'text',
          text: [
            "Ostrea Nederland is een in het ondernemingsrecht gespecialiseerde rechtskundige adviespraktijk. Of het nu gaat om incasso's, leveringsvoorwaarden, arbeidsrechtelijke geschillen, huurzaken of intellectueel eigendomsrecht of het opzetten van vennootschapsrechtelijke structuren, alle ondernemingsrechtelijke specialismen zijn bij Ostrea Juristen of binnen de Ostrea groep aanwezig. Dat is de kracht van Ostrea Juristen. Bedrijfsjuristen pur sang met alle voor ondernemers belangrijke specialismen onder een dak of binnen de Ostrea groep aanwezig.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Arbeidsrecht',
         type: 'text',
          text: [
            "Het hedendaags arbeidsrecht mag, vergeleken met dat van een aantal jaren terug, een verademing worden genoemd. Werkgever en werknemer worden door de overheid niet meer volledig in een zot keurslijf van overdreven ontslagbescherming en afgedwongen solidariteit geperst dat beiden de lust tot werken doet ontgaan. Toch neemt ook het hedendaags arbeidsrecht nog steeds niet te onderschatten risico's met zich mee.",
          ],
          navigation:{basePage: 'Arbeidsrecht', subPage:null},
          linkText: 'Lees verder',
        },
        {
          title: 'Faillissementsrecht',
         type: 'text',
          text: [
            "Een faillissement lost zelden daadwerkelijk iets op, meestal zijn zowel de gefailleerde als de aanvrager en de overige schuldeisers, uiteindelijk bij een faillissement niet gebaat. Door de 'wie het eerst komt, het eerst maalt' mentaliteit die bij de afhandeling van faillissementen vaak heerst, zien zij hun rechten nogal eens aangetast. Met name leveranciersrechten en eigendomsvoorbehouden worden bij beslaglegging en faillissement vaak ruimhartig genegeerd, ook het regelmatig door de fiscus gebruikte bodembeslag blijkt in de praktijk vaak veel te lichtvaardig te worden ingeroepen en houdt dan ook geen stand wanneer het adequaat wordt bestreden.",
          ],
          navigation:{basePage: 'Faillissementsrecht', subPage:null},
          linkText: 'Lees verder',
        },
        {
          title: 'Incasso',
         type: 'text',
          text: [
            "Incassoprocedures worden door de juristen van Qstrea in principe op basis van 'no-cure-no-pay' uitgevoerd. Zeker wanneer leveringsvoorwaarden met deugdelijke bepalingen t.a.v. van betalingstermijnen en de overschrijding daarvan worden gehanteerd zal vrijwel altijd op 'no-cure-no-pay' basis kunnen worden geïncasseerd waardoor er voor u alleen bij succesvolle incasso kosten ontstaan.",
          ],
          navigation:{basePage: 'Incasso', subPage:null},
          linkText: 'Lees verder',
        },
        {
          title: 'Leveringsvoorwaarden',
         type: 'text',
          text: [
            'Voorkomen is beter dan genezen. Goede leverings- en betalingsvoorwaarden scheppen duidelijkheid voor leverancier en afnemer. Dat zorgt er niet alleen voor dat geschillen eenvoudiger kunnen worden opgelost maar voorkomt vaak z elfs dat er geschillen ontstaan. Leveringsvoorwaarden stellen wij uiteraard graag voor u op en ook de zorg voor het deponeren en publiceren daarvan nemen wij u graag uit handen.',
          ],
          navigation:{basePage: 'Leveringsvoorwaarden', subPage:null},
          linkText: 'Lees verder',
        },
        {
          title: 'Handelsnaam en Merkenrecht',
         type: 'text',
          text: [
            'De uiteindelijke basis voor een succesvolle onderneming is de reputatie. Wie altijd perfecte waar levert voor de laagste prijs maar om onverklaarbare reden de naam heeft onbetrouwbaar te zijn, heeft als ondernemer nauwelijks overlevingskans. Het opbouwen van een goede naam vergt hoge investeringen; alles wat u investeert in de kwaliteit van uw producten, de kwaliteit van uw dienstverlening en in reclame, investeert u in feite in niets anders dan in een goede reputatie.',
          ],
          navigation:{basePage: 'Handelsnaam en Merkenrecht', subPage:null},
          linkText: 'Lees verder',
        },
      ],
    },
    {
      title: 'Arbeidsrecht',
      content: [
        {
          title: 'De gepretendeerde schijnconstructie',
         type: 'text',
          text: [
            'Het hedendaags arbeidsrecht mag, vergeleken met dat van een aantal jaren terug, een verademing worden genoemd. Werkgever en werknemer worden door de overheid niet meer volledig in een zot keurslijf van overdreven ontslagbescherming en afgedwongen solidariteit geperst dat beiden de lust tot werken doet ontgaan.',
            "Toch neemt ook het hedendaags arbeidsrecht nog steeds niet te onderschatten risico's met zich mee",
            'Met name wanneer opdrachtgever en opdrachtnemer het met elkaar eens zijn dat beiden in de ander geen werkgever of werknemer zien en geen van beide een arbeidsrelatie ambieert doen zich steeds vaker situaties voor waarin de met de arbeidswet- en regelgeving belaste instanties er alles aan doen in de betreffende relatie toch elementen te ontdekken waarmee deze in het keurslijf van een arbeidsverhouding kan worden gedwongen.',
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Pas op met VAR, BGL of standaardcontracten',
         type: 'text',
          text: [
            'In situaties waarin opdrachtgever en opdrachtnemer zich veilig waanden doordat vooraf een z.g. VAR of BGL is aangevraagd is zelfs het fenomeen ontstaan dat juist met name het aanvragen van de betreffende verklaring door het UWV of de belastingdienst in gerechtelijke procedures als argument wordt genoemd dat partijen zich er bewust van moeten zijn geweest dat feitelijk van een arbeidsrelatie sprake is.',
            'Hoewel opdrachtgever en opdrachtnemer elkaar als gelijkwaardige zakenpartners beschouwen en geen van beiden een arbeidsrelatie wil pretendeert de met het toezicht belaste ambt, vaak het UWV of de Belastingdienst, dat sprake is van een schijnconstructie, uitsluitend bedoeld om de arbeidsverhouding te verhullen. Onder arbeidsrecht-juristen wordt deze redeneringen wel aangeduid als "de gepretendeerde schijnconstructie".',
            'Kunt u het nog volgen, waarschijnlijk niet en u bent zeker niet de enige. Het arbeidsrecht zit barstensvol voetangels en klemmen. Wilt u als opdrachtgever of als opdrachtnemer er zeker van zijn dat u in een ZZP situatie geen arbeidsrelatie zal worden opgedrongen met daarbij mogelijk naheffingen, boetes of, Nederland wordt steeds gekker, zelfs een strafrechtelijke vervolging, laat dan, voordat u een opdracht geeft of aanvaardt, eerst de in het arbeidsrecht gespecialiseerde juristen van Ostrea de situatie voor u beoordelen.',
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
      ],
    },
    {
      title: 'Faillissementsrecht',
      content: [
        {
          title: 'Doorstarten of opnieuw starten',
         type: 'text',
          text: [
            "Ostrea helpt ondernemers en ondernemingen die in zwaar weer verkeren bij het op verantwoorde wijze realiseren van een doorstart of een nieuwe start.",
            "Wanneer een ondernemer of onderneming, in een (dreigende) faillissementssituatie wil en kan doorstarten dan mag, in de filosofie van Ostrea Juristen, een oud, een dreigend en zelfs een lopend faillissement daar niet bij in de weg staan. De expertise van Ostrea op het gebied van het faillissementsrecht en het Nederlands en het internationaal vennootschapsrecht staat er borg voor dat, aan de door of opnieuw startende ondernemer en zijn eventuele kapitaalverschaffers, de zekerheid wordt geboden dat de onderneming ongestoord verder kan.",
            "Ook mogelijke privé-schulden en schuldeisers van de door een faillissement getroffen ondernemer kunnen dan een geslaagde doorstart niet in de weg staan. De kans dat deze tenslotte hun vordering geheel of gedeeltelijk voldaan krijgen neemt door een ongehinderde doorstart uiteindelijk alleen maar toe."
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Voorkomen is beter dan genezen',
         type: 'text',
          text: [
            "Een faillissement lost zelden daadwerkelijk iets op. Meestal zijn zowel de gefailleerde als de aanvrager, evenals de overige schuldeisers, uiteindelijk bij een faillissement niet gebaat. Door de 'wie het eerst komt, het eerst maalt' mentaliteit die bij de afhandeling van faillissementen vaak heerst, zien zij hun rechten nogal eens aangetast.",
            "Met name leveranciersrechten en eigendomsvoorbehouden worden bij beslaglegging en faillissement nogal eens genegeerd. Zeker het door de belasting-deurwaarder vaak gebruikte bodembeslag blijkt in de praktijk vaak veel te lichtvaardig te zijn ingeroepen en houdt dan ook geen stand wanneer het adequaat wordt bestreden.",
            "Als het enigszins mogelijk is zal Ostrea dan ook proberen te voorkomen dat er een formeel faillissement wordt uitgesproken, het zelf aanvragen van een faillissement is iets wat wij alleen in zeer uitzonderlijke gevallen zullen adviseren."
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'De International Business Corporation (IBC)',
         type: 'text',
          text: [
            "In een (dreigende) faillissementssituatie blijkt de International Business Corporation (IBC) vaak de aangewezen oplossing om een geslaagde doorstart te kunnen realiseren. Doordat de aandelen van de IBC zijn ondergebracht in een onafhankelijke participatiemaatschappij is het eenvoudig derden, belanghebbenden en leveranciers die de nieuwe start mogelijk willen maken de zekerheid te verschaffen dat zij niet het risico lopen dat de curator in het faillissement van de oude onderneming beslag op de rechtmatig verkregen goederen of de aandelen van de nieuwe onderneming legt.",
            "De International Business Corporation leent zich er daardoor bij uitstek voor om ondanks een (dreigende) faillissements-situatie of zelfs na of gedurende een persoonlijk faillissement of een WSNP traject toch te kunnen blijven werken en ondernemen. Daarnaast is de IBC ook uitermate geschikt om als zelfstandige entiteit ingeval van een faillissements-situatie met de curator in onderhandeling te treden om vandaar uit een bod te doen op de bezittingen van de failliete onderneming of om van daaruit in overleg met de curator een doorstart te realiseren.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Raad en Daad',
         type: 'text',
          text: [
            "Ostrea helpt graag om samen met u een plan van aanpak op te stellen en uit te voeren en zal u daarbij in voorkomend geval ook vertegenwoordigen en voor of namens u de onderhandelingen voeren met of eventuele vragen beantwoorden van schuldeisers en curatoren of ingeval van een WSNP traject de bewindvoerder.",
            "Wilt u weten hoe Ostrea Juristen u in uw specifieke situatie kan bijstaan in een (dreigende) faillissementssituatie of bij het doorstarten gedurende een WSNP traject belt u dan tijdens kantooruren voor een vrijblijvend informatief gesprek telefoonnummer 085-330 1020",
            "Wilt u meer weten over de International Business Corporation (IBC)?"
          ],
          navigation:{basePage: '', subPage:null},
          linkText: 'Lees dan hier verder over de International Business Corporation (IBC).',
        },
      ],
    },
    {
      title: 'Incasso',
      content: [
        {
          title: 'No Cure, No Pay',
         type: 'text',
          text: [
            "Goede leverings- en betalingsvoorwaarden scheppen duidelijkheid voor leverancier en afnemer. Dat zorgt er niet alleen voor dat geschillen eenvoudiger kunnen worden opgelost maar voorkomt vaak zelfs dat er geschillen ontstaan.",
            "Incassoprocedures worden door Ostrea altijd op basis van duidelijke afpraken vooraf uitgevoerd. Afhankelijk van de aard van uw incassoportefuille wordt zo mogelijk gewerkt tegen een vaste vergoeding per debiteur. Zeker wanneer leveringsvoorwaarden met deugdelijke bepalingen t.a.v. van betalingstermijnen en de overschrijding daarvan worden gehanteerd zal vaak zelfs op 'no cure, no pay' basis kunnen worden geïncasseerd. Voor u ontstaan er dan alleen bij een succesvolle incasso kosten. Kosten die, dankzij goede leveringsvoorwaarden, veelal voor een groot deel op de schuldenaar zullen kunnen worden verhaald."
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
      ],
    },
    {
      title: 'Leveringsvoorwaarden',
      content: [
        {
          title: 'Voorkomen beter dan genezen',
         type: 'text',
          text: [
            "Goede leverings- en betalingsvoorwaarden scheppen duidelijkheid voor leverancier en afnemer. Dat zorgt er niet alleen voor dat geschillen eenvoudiger kunnen worden opgelost maar voorkomt vaak zelfs dat er geschillen ontstaan.",
            "Leveringsvoorwaarden toegespitst op de specifieke eisen van uw onderneming stellen wij graag, samen met u, voor u op en ook de zorg voor het deponeren en publiceren daarvan nemen wij u graag uit handen.",
            "Incassoprocedures worden door Ostrea zeker wanneer leveringsvoorwaarden met deugdelijke bepalingen t.a.v. van betalingstermijnen en de overschrijding daarvan worden gehanteerd vaak zelfs op 'no cure, no pay' basis kunnen worden geïncasseerd. Voor u ontstaan er dan alleen bij een succesvolle incasso kosten. Kosten die, dankzij goede leveringsvoorwaarden, veelal voor een groot deel op de schuldenaar zullen kunnen worden verhaald."
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
      ],
    },
    {
      title: 'Handelsnaam en Merkenrecht',
      content: [
        {
          title: 'Een goede naam',
         type: 'text',
          text: [
            "De uiteindelijke basis voor een succesvolle onderneming is de reputatie. Wie altijd perfecte waar levert voor de laagste prijs maar om onverklaarbare reden de naam heeft onbetrouwbaar te zijn, heeft als ondernemer nauwelijks overlevingskans. Het opbouwen van een goede naam vergt hoge investeringen; alles wat u investeert in de kwaliteit van uw producten, de kwaliteit van uw dienstverlening en in reclame, investeert u in feite in niets anders dan in een goede reputatie."
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Uw concurrent schaamt zich nergens voor',
         type: 'text',
          text: [
            "Wanneer uw concurrent er uiteindelijk met uw goede naam vandoor gaat verliest u dubbel, uw investeringen zijn voor niets geweest en uw concurrent profiteert ervan. Hetzelfde geldt voor nieuwe uitvindingen of producten die u ontwikkelt. Wanneer u niet voorkomt dat de concurrent daar gebruik van maakt, heeft u daar geen voordeel maar zelfs nadeel van. Het deponeren en beschermen van een merk, een handelsnaam en een intellectueel eigendom is voor de moderne onderneming letterlijk van levensbelang.",
            "Bij het deponeren en beschermen van deze rechten is naast juridische expertise vaak ook toegespitste technische kennis noodzakelijk. Ostrea helpt u graag en schakelt zonodig ook de juiste deskundigen in. Wanneer desondanks dan toch concurrenten uw rechten willen misbruiken dan staat Ostrea u graag bij om de schade te verhalen en vooral om het die concurrenten onmogelijk te maken door te gaan met het beschadigen van uw goede naam."
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
      ],
    },
    {
      title: 'Vergunningen en bestuursrecht',
      content: [
        {
          title: 'Vele overheden',
         type: 'text',
          text: [
            "Het recht omtrent het nemen van besluiten en beschikkingen en de verlening of weigering van vergunningen door de verschillende daarmee belaste overheden en bestuursorganen in Nederland is uitermate divers. Allereerst moet, wanneer een hogere of lagere overheid of bestuursorgaan een beschikking neemt of weigert, worden nagegaan of die beschikking door het betreffend orgaan had mogen worden genomen en of de beschikking aan alle eisen van behoorlijk bestuur voldoet"
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Behoorlijk bestuur',
         type: 'text',
          text: [
            "Bij die eisen van behoorlijk bestuur zijn dan met name de vragen of er een redelijke belangenafweging is gemaakt en of de beschikking wel ten behoeve van het doel van de betreffende regelgeving is genomen naast alle andere eisen van behoorlijk bestuur van groot belang.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Termijnen',
         type: 'text',
          text: [
            "Ook dienen alle beroeps en bezwaar termijnen zorgvuldig te worden bewaakt en is het van het grootste belang een juiste inschatting van de bewijstechnische kant van de zaak te maken. In tegenstelling tot het burgerlijk recht en het strafrecht wordt het bestuursrecht voornamelijk gekenmerkt door een vrije bewijsleer. Partijen moeten zoveel mogelijk bewijs aanleveren om hun stellingen aannemelijk te maken en de bestuursrechter is vrij in de beoordeling daarvan.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Bezint eer gij begint',
         type: 'text',
          text: [
            "Bepaald niet de eenvoudigste tak van sport in het Nederlands recht en ook niet altijd de meest bevredigende. Overheden hebben bij de bestuursrechter, afhankelijk van het soort zaak, namelijk vaak een streepje voor omdat deze, zoals dat heet alleen maar marginaal toetsen. Dat betekent in de praktijk dat zelfs als de rechter zelf eigenlijk vind dat u het grootste gelijk van de wereld maar de rechter zich kan voorstellen dat er redelijk denkende mensen zijn die vinden dat de overheid in het gelijk gesteld moet worden de rechter, wettelijk verplicht is in uw nadeel te beslissen.",
            "Maar zelfs als de overheid door de rechter in het ongelijk zijn gesteld, kan deze in veel gevallen opnieuw de door de burger gevraagde beslissing kunnen weigeren alleen dan op gronden die in overeenstemming zijn met de uitspraak van de bestuursrechter. Bijvoorbeeld wordt eerst de vestiging van een buurtsuper geweigerd op basis van een bestemmingsplan, daarna op basis van te verwachten verkeersoverlast en wanneer ook dat door de rechter niet wordt gehonoreerd ook nog eens in verband met de te verwachten milleuproblemen.",
            "De ondernemer mag al die tijd zijn winkel niet openen en is misschien wel 6 jaar verder tegen de tijd dat de vergunning uiteindelijk wordt verleend. Het is daarom verstandiger eerst een toezegging van de vergunning verlenende instantie te hebben alvorens wezenlijk in bepaalde bedrijfsactiviteiten te investeren. Procederen tegen de overheid is, hoewel uiteindelijk lang niet altijd zonder resultaat, meestal niet de meest aangewezen methode om succesvol te ondernemen.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Beloofd is beloofd',
         type: 'text',
          text: [
            "Anders ligt het natuurlijk als een vergunningverlenende instantie afspraken niet nakomt of aantoonbaar verwachtingen heeft gewekt of wanneer een bestaande ondernemer door overheidshandelen in de problemen dreigt te komen.",
            "Wanneer u als ondernemer geconfronteerd wordt met problemen omtrent vergunningen, subsidies, ontheffingen, bestemmingsplannen enz. schroom ook dan niet een afspraak te maken met de bedrijfsjuristen van Ostrea.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },

      ],
    },
    {
      title: 'Onderneming en Strafrecht',
      content: [
        {
          title: 'Feitelijk onmogelijk',
         type: 'text',
          text: [
            "In het privéleven is het strafrecht voor de meeste ondernemers iets waarmee zij hooguit op de televisie worden geconfronteerd. Wanneer de auto fout wordt geparkeerd of het gaspedaal te diep wordt ingetrapt valt dat tegenwoordig onder de administratieve handhaving van het C.J.I.B. waardoor de meesten van ons het leven door kunnen zonder zich bij de strafrechter te moeten verantwoorden.",
            "In tegenstelling echter tot de meeste \"gewone\" burgers loopt de goedwillende ondernemer, hoe zorgvuldig hij zich ook gedraagt, altijd het risico vroeg of laat met het strafrecht en de strafrechter in aanraking te komen. Fiscale wetgeving, arbeidsverhoudingen, financiële transacties en milieuregels zijn zo gecompliceerd en ondoorzichtig dat hoewel een ieder wordt geacht de wet te kennen het voor de ondernemer feitelijk onmogelijk is zeker te weten geen strafbare of ogenschijnlijk strafbare feiten te begaan.",
            "Legio zijn ook de voorbeelden van wettelijke bepalingen die om correct te worden nageleefd de overtreding van een andere bepaling met zich meebrengen.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Schrijnend misbruik van strafrecht',
         type: 'text',
          text: [
            "Zelfs schroomt een enkele keer de overheid niet om doelbewust misbruik van deze situatie te maken. Een van de meest bekende en schrijnende voorbeelden daarvan is misschien wel de familie van der Valk van het Hotel Retaurant Concern die midden jaren negentig, als betrof het het oprollen van een maffiabende, collectief werd gearresteerd. Het was voor iedere min of meer ingewijde direct volstrekt duidelijk dat van der Valk niets wezenlijk strafbaars viel te verwijten en dat de oude Gerrit van der Valk, die er om bekend stond geen hoge pet van belastingambtenaren op te hebben, over bepaalde fiscale vraagstukken een andere mening had dan de belastinginspecteur maar dat van fraude of zelfs van sjoemelen op geen enkele wijze sprake was.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Traumatische ervaring',
         type: 'text',
          text: [
            "Uiteindelijk is deze hele affaire dan ook uitgelopen op een schikking die fiscaal gezien waarschijnlijk een enorme meevaller voor het van der Valk concern heeft betekend, het sluimerende fiscale geschil is voor een fractie afgekocht",
            "Achteraf moet hier geconcludeerd worden dat een strafvervolging niet de aangewezen weg was. De belastinginspecteur had middels afwijken van de aangifte, conserverende beslagen en aanslagen van der Valk kunnen dwingen de belastingrechter te adieren. De fiscus zou dan mogelijk zelfs wel een nog veel groter bedrag hebben kunnen incasseren, maar de familie van der Valk zou in elk geval een niet te onderschatten traumatische ervaring zijn bespaard.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Strafrecht advocaten',
         type: 'text',
          text: [
            "Wanneer u of uw onderneming onverhoopt als verdachte met het strafrecht zou worden geconfronteerd dan brengen wij u graag in contact met een van de met ons kantoor samenwerkende in het fiscaal- faillissements- of het ondernemingsrecht gespecialiseerde strafrechtadvocaten.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
      ],
    },


  ];

  companyFormation = [
    {
      title: 'Company Formation',
      content: [
        {
          title: 'Officieel Erkend Company formation Agent',
         type: 'text',
          text: [
            "Voor het oprichten van van een Engelse Limited (Ltd. of Llp.) of een International Business Corporation (IBC) is Ostrea bij uitstek uw partner. Ostrea Consult Limited is het enige Nederlandstalige kantoor dat officieel door het Britse Handelsregister (Companies House) is erkend en gevolmachtigd als Authorized Company Formation Agent.",
            "Ostrea is daardoor ook het enige Nederlandstalige kantoor dat zelfstandig rechtstreeks online Engelse Limited Companies kan oprichten, registreren en onderhouden in het Britse handelsregister."
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'De Engelse Limited (Ltd.)',
         type: 'text',
          text: [
            "Aanmerkelijk betere bescherming tegen privé-aansprakelijkheid en aantasting van uw privé-vermogen dan met de Nederlandse BV dankzij het ontbreken van de uitkeringstoets. Bovendien aanmerkelijk goedkoper en veel sneller en eenvoudiger op te richten dan de Nederlandse BV. Compleet ingeschreven bij de Nederlandse Kamer van Koophandel. Inclusief uw Engelse kantooradres en alle documenten en kosten € 275,-",
          ],
          navigation:{basePage: 'companyFormation', subPage:'De Engelse Limited'},
          linkText: 'Lees meer...',
        },
        {
          title: 'De Limited Liability Partnership of LLP',
         type: 'text',
          text: [
            "Ideaal voor kleine en startende ondernemers die met behoud van startersaftrek, MKB winstvrijstelling en de kleine ondernemersregeling toch goed beschermd willen zijn wanneer de onderneming onverhoopt in zwaar weer zou komen of failliet zou gaan en niet met hun privé-vermogen aansprakelijk gesteld willen kunnen worden. Beter beschermd dan met de Nederlandse BV maar in Nederland voor de belastingheffing gelijk aan de eenmanszaak. Compleet ingeschreven bij de Nederlandse Kamer van Koophandel. Inclusief alle documenten en kosten € 485,-",
          ],
          navigation:{basePage: 'companyFormation', subPage:'De Limited Liability Partnership of LLP'},
          linkText: 'Lees meer...',
        },
        {
          title: 'De Euro-BV',
         type: 'text',
          text: [
            "Een Nederlandse werkmaatschappij, fiscaal volstrekt gelijk aan de Nederlandse BV maar dan wel zonder de aansprakelijkheids risico's van de uitkeringstoets van de Nederlandse BV en dankzij het volledig on-line oprichten letterlijk binnen enkele uren operationeel. Inclusief alle documenten en kosten € 485,-.",
          ],
          navigation:{basePage: 'companyFormation', subPage:'De Euro-BV'},
          linkText: 'Lees meer...',
        },
        {
          title: 'De International Business Corporation (IBC)',
         type: 'text',
          text: [
            "De International Business Corporation biedt de hoogst mogelijke graad van bescherming voor bestuurders en directie van de onderneming. Met effectief doorgaans niet meer dan hooguit een paar honderd euro vennootschapsbelasting per jaar, de perfecte ondernemingsvorm voor zowel ondernemers die maximaal willen profiteren van alle mogelijkheden en vrijstellingen van het internationaal belastingrecht als voor ondernemers en particulieren die optimale privacy en bescherming van hun privévermogen zoeken.",
          ],
          navigation:{basePage: 'companyFormation', subPage:'De International Business Corporation (IBC)'},
          linkText: 'Lees meer...',
        },
        {
          title: 'Doorstarten bij Faillissement',
         type: 'text',
          text: [
            "Wanneer u als ondernemer, eventueel met steun van derden, wil en kán doorstarten, dan mag, in de filosofie van Ostrea Juristen, een oud, een dreigend of zelfs een lopend faillissement daarbij niet in de weg staan.",
          ],
          navigation:{basePage: 'companyFormation', subPage:'Doorstarten bij Faillissement'},
          linkText: 'Lees meer...',
        },
        {
          title: 'Helder Prijsbeleid',
         type: 'text',
          text: [
            "Ostrea Juristen streeft naar een transparant ''alles inclusief'' prijsbeleid. U betaalt daarom nooit extra voor inschrijvingen, documenten, kantoorkosten, registered office, BTW, VAT, leges of wat dan ook. Ostrea hanteert geen vanaf prijzen maar kiest voor duidelijke voorlichting en een helder prijsbeleid. Alle prijzen en tarieven zijn inclusief alle kosten. Ostrea geeft u daarmee de zekerheid dat onaangename financiële verrassingen achteraf u bespaard zullen blijven.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
      ]
    },
    {
      title: 'De International Business Corporation (IBC)',
      content: [
        {
          title: 'Minimale belastingafdracht en uw privé vermogen beter beschermd',
         type: 'text',
          text: [
            "Beter dan met de International Business Corporation (IBC) kunt u uw privé-vermogen als bestuurder of directeur van een onderneming niet tegen de risico's van mogelijke privè-aansprakelijkheid of beslaglegging beschermen. De IBC biedt de hoogst mogelijke graad van bescherming voor bestuurders en directie van de onderneming en maakt het,ook voor ondernemers die uitsluitend of voornamelijk in Nederland actief zijn, mogelijk om toch optimaal te profiteren van de legale mogelijkheden die het Europees en het internationaal belastingrecht bieden.",
            "De International Business Corporation (IBC) is een in het internationaal zakenverkeer veel gebruikte ondernemingsvorm waarin vermogensbestanddelen, activiteiten en eigendomsrechten kunnen worden ondergebracht. Afhankelijk van het doel, de structuur en de manier waarop wordt gewerkt betaalt u met de IBC in bepaalde gevallen effectief zelfs geen of ten hoogste enkele honderden euro's vennootschapsbelasting per jaar.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Geen DGA (Directeur Groot Aandeelhouders) salaris',
         type: 'text',
          text: [
            "Een belangrijk voordeel voor ondernemers die willen ondernemen vanuit en met de bescherming van een Nederlandse BV of Engelse Ltd is dat zij zich, wanneer deze BV of Ltd is ondergebracht in een IBC, niet zien geconfronteerd met het zogenaamde DGA salaris. Immers kwalificeren zij welliswaar als directeur maar op geen enkele manier als aandeelhouder van de onderneming. Het Directeur Groot Aandeelhouders salaris is dus niet van toepassing. Dit neemt met zich mee dat de directeur, wanneer deze voldoende heeft aan een salaris van €20.000,- per jaar hij dat salaris tegen het tarief van de Inkomstenbelasting ten laste van de bruto winst uit de onderneming kan halen, over de winst die in de vennootschap achter blijft is dan slechts 15% vennootschapsbelasting verschuldigd.",
            "Een vaak nog belangrijker voordeel van deze ondernemingsvorm is dat allerlei kosten, die wanneer een Directeur Groot Aandeelhouder (DGA) de directie voert, een zogenaamd gemengd zakelijk/privékarakter hebben en daardoor maar gedeeltelijk door de vennootschap als kosten mogen worden afgetrokken en vanwege het privé genoten voordeel, bij de directeur als inkomen worden belast nu volledig ten laste van de onderneming mogen worden gebracht zonder dat van enige privé-bijtelling sprake is. Denk hierbij b.v. aan horeca-uitgaven en hotelovernachtingen waarbij ook de partner aanwezig is of een wat extremer voorbeeld, een representatief zeiljacht dat door de onderneming wordt aangeschaft om zo nu en dan zakenrelaties op uit te kunnen nodigen. Helaas, op de privé-bijtelling voor de auto heeft dit geen invloed omdat deze zowel voor medewerkers als directeuren en aandeelhouder of andere bij de onderneming betrokkenen gelijk is.",
            "Wanneer u als directeur van de IBC aan een daaronder werkende vennootschap een geldlening verstrekt dan is de rente die u daarover ontvangt voor u onbelast omdat die rente inkomsten voor u, omdat u zelf niet als aandeelhouder kwalificeert, in box 3 vallen, voor de onderneming is die rente echter een volledige aftrekpost.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Veel verschillende toepassingsmogelijkheden.',
         type: 'text',
          text: [
            "De IBC leent zich voor een haast oneindig aantal in het internationale zaken- en handelsverkeer zinvolle toepassingen, en wordt ondermeer gebruikt om:",
          ],
          list: [
            "het verplichte DGA salaris te voorkomen",
            "op te treden als holding boven een Nederlandse BV. (Lees meer)",
            "binnen of buitenlands onroerend goed in onder te brengen.",
            "familievermogen veilig en vrij van Nederlandse belastingen te beleggen of te beheren. (Lees meer)",
            "yachten, schepen en pleziervaartuigen te registreren. (Lees meer)",
            "licenties, merkrechten en patenten te beheren.",
            "een doorstart in een faillissementssituatie te faciliteren.",
            "nalatenschappen te beheren.",
            "privacy en vertrouwelijkheid te waarborgen.",
            "internationaal medewerkers en vertegenwoordigers te recruteren.",
            "een buitenlandse werkmaatschappij in onder te brengen.",
            "een combinatie van bovenstaande en andere redenen te dienen.",

          ],
        },
        {
         type: 'text',
          text: [
            "En last but not least:",
          ],
          list: [
            "om ten behoeve van een expat ZZP onderneming in een Joint Venture deel te nemen.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: 'Lees meer...',
        },
        {
          title: 'Geen trust of APV',
         type: 'text',
          text: [
            "De aandelen van de IBC worden ondergebracht in een onafhankelijke beheersmaatschappij. De voorwaarden waaronder deze beheersmaatschappij de aandelen houdt zijn zodanig dat de directeur of de bestuurders van de IBC en de daaronder liggende vennootschappen en ondernemingen nooit als aandeelhouder of eigenaar (DGA) kunnen worden aangemerkt en er ook op geen enkele wijze sprake is van een trust of Afgescheiden Particulier Vermogen (APV).",
            "Als directeur of bestuurder van de IBC kunt u daardoor naar eer en geweten derden die u daar naar zouden kunnen vragen -denk daarbij aan de belastingdienst maar ook aan concurrenten, curatoren en andere partijen die daar nieuwsgierig naar zijn- naar waarheid verklaren dat u geen eigenaar of aandeelhouder van de door u bestuurde ondernemingen of daarin aanwezige goederen bent en dat u ook niet bent betrokken bij een trust of APV. Zolang u geen inkomen uit de IBC onttrekt hoeft u zelfs het bestaan van de IBC bij het doen van uw belastingaangifte niet te melden.",
            "De IBC wordt bij oprichting direct voorzien van een geregistreerd kantooradres (registered office). Desgewenst kunt u de IBC ook onmiddellijk voorzien van een zakelijke betaalrekening met internetbankieren en creditcard/pinpas zodat u ook vrijwel onmiddellijk met de IBC aan het werk kunt.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Eerlijk en helder prijsbeleid',
         type: 'text',
          text: [
            "Voor oprichting en registratie van de International Business Corporation betaalt u, inclusief alle daaraan verbonden diensten en kosten voor het eerste jaar: € 1650,-",
            "Na dat eerste jaar bedragen de kosten voor het in stand houden van de International Business Corporation en alle daaraan verbonden diensten en kosten € 1250,- per jaar.",
            "Ostrea streeft naar een helder ”alles inclusief” prijsbeleid. U betaalt daarom nooit extra voor inschrijvingen, documenten, kantoorkosten, registered office, BTW, VAT, leges of wat dan ook. Ostrea hanteert geen vanaf prijzen maar kiest voor duidelijke voorlichting en een helder prijsbeleid. Alle prijzen en tarieven zijn inclusief alle kosten.",
            "Ostrea geeft u daarmee de zekerheid dat onaangename financiële verrassingen achteraf u bespaard blijven.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Nu direct zelf online oprichten en registreren:',
         type: 'text',
          text: [
            "U kunt de IBC nu direct eenvoudig zelf online oprichten door op de groene knop hieronder te klikken, Ostrea zorgt er dan voor dat u daar dan ook letterlijk binnen enkele uren (4 office hours) operationeel mee aan het werk kunt.",
            "Betalen doet u veilig met uw bankpas via IDeal of met uw Visa- of Mastercard in een beveiligde netwerkomgeving (Let u daarbij wel op het slotje in uw browser).",
            "Nu direct zelf online oprichten en registreren:",
          ],
          button:{buttonText:"Ga verder", navigation:{basePage: 'companyFormation', subPage:'Online oprichten'}},
          navigation:{basePage: '', subPage:null},
          linkText: 'of bel 085-330 1020',
        },
      ]
    },
    {
      title: 'De Euro-BV',
      content: [
        {
          title: 'Vlugger, Veiliger en Voordeliger',
         type: 'text',
          text: [
            "De Euro-BV is eigenlijk een combinatie van twee verschillende vennootschappen te weten een Nederlandse Werkmaatschappij, de Commanditaire Vennootschap (CV) en een Engelse Limited (Ltd.) die in de CV deelneemt als beherend vennoot. Doordat de Engelse Limited in de Euro-BV als beherend vennoot optreed, wordt voorkomen dat u zelf als ondernemer privé-aansprakelijk zou kunnen worden gesteld. Deze structuur combineert alle juridische en fiscale voordelen van de gewone Nederlandse BV met die van de Engelse Limited.",
            "Doordat de werkmaatschappij een Nederlandse Commanditaire Vennootschap is, heeft de onderneming een volledig Nederlandse uitstraling. Doordat in geval van de Euro-BV niet de limited maar de CV bij de Nederlandse Kamer van Koophandel wordt ingeschreven ontstaan er geen verplichtingen op basis van de wet formeel buitenlandse vennootschappen. Bestuurders en aandeelhouder zijn niet privé-aansprakelijk.",
            "De Euro-BV biedt naast alle juridische, fiscale en praktische voordelen van de Nederlandse BV bovendien:",
          ],
          list: [
            "Betere bescherming privé-vermogen door ontbreken uitkeringstoets.",
            "Snel zelf op te richten vanachter uw bureau.",
            "Binnen enkele (kantoor) uren operationeel.",
            "Lage oprichtingskosten kosten.",
            "Géén transactiekosten volstorten.",
            "Eenvoudig en kosteloos, zonder notaris, overdraagbaar.",
            "Directie-wijzigingen kosteloos zonder notaris.",
            "Statuten-wijzigingen kosteloos zonder notaris.",
            "Aandelenoverdracht kosteloos zonder notaris.",
            "Gewone Nederlandse uitstraling vennootschapsvorm(CV).",
          ],
          text2:[
            "Of korter gezegd: de Euro-BV biedt alle voordelen van de Engelse Limited maar niet de soms als onwenselijk ervaren exotische uitstraling die de toevoeging Ltd. aan de bedrijfsnaam heeft maar de zuiver Nederlandse uitstraling van de CV."
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Binnen één werkdag operationeel',
         type: 'text',
          text: [
            "Ostrea Corporate Services UK Ltd. is als enige Nederlandstalige kantoor erkend en geautoriseerd door het Britse Handelsregister (Companies House) om rechtstreeks vanuit haar eigen kantoren online-oprichtingen en wijzigingen in het Britse Handelsregister door te voeren en te registreren. Desgewenst kan de Euro-BV zonder dat u zelf, op wat voor een manier dan ook, als eigenaar of aandeelhouder wordt geregistreerd of qualificeert worden ondergebracht in een \"anonieme en belastingvrije\" IBC (International Bussiness Corporation), en letterlijk binnen enkele uren operationeel handelen en bij de Nederlandse Kamer van Koophandel worden ingeschreven.",
            "De Euro-BV kent slechts een beperkte publicatieplicht en een aandelenoverdracht of statuten-wijzigingen regelt u kosteloos bij Ostrea, zonder tussenkomst van een notaris. Bij de Nederlandse BV is de tussenkomst van een notaris voor een dergelijke wijziging wettelijk verplicht en zijn de daaraan verbonden kosten vaak vergelijkbaar met of zelfs hoger dan de kosten van oprichting."
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Geen uitkeringstoets',
         type: 'text',
          text: [
            "Door de z.g. uitkeringstoets van art 2:216 BW zijn de mogelijkheden om de aandeelhouders en bestuurders van de Nederlandse BV, zeker als het gaat om vorderingen van het UVW of de Belastingdienst, privé aansprakelijk te stellen angstaanjagend verruimd. Het doen van privé-opnamen kan haast niet meer veilig zonder een accountantsverklaring.",
            "Misschien wel het belangrijkste voordeel van de Euro-BV is dat de \"uitkeringstoets\" van art 2:216 BW op de Euro-BV niet van toepassing is. art 2:216 BW is speciaal geschreven voor de Nederlandse BV. Op de Engelse Ltd. de Euro-BV maar ook op bijvoorbeeld de Nederlandse NV of stichting of andere vennootschappen is art 2:216 BW dus uitdrukkelijk niet van toepassing. De normale regels voor bestuurdersaansprakelijkheid ingeval van fraude of wanbeheer zijn dat natuurlijk wel.",
            "Voor ondernemers die door- of herstarten na een faillissement is het belangrijk te weten dat Ostrea de aandelen van de Euro-BV probleemloos kan onderbrengen in een International Business Compagnie (IBC), waardoor ook omgekeerd privé-schuldeisers of curatoren van de failliete ondernemer zich op geen enkele wijze op de rechtmatig verkregen goederen van de nieuwe onderneming kunnen of mogen verhalen.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Eerlijk en Helder prijsbeleid',
         type: 'text',
          text: [
            "Voor een Euro-BV betaalt u € 485,- compleet, vrij op naam. Dat is inclusief:",
          ],
          list: [
            "Kosten en fee oprichten.",
            "Oprichtingsakte Commanditaire Vennootschap",
            "Commandite service Commanditaire Vennootschap",
            "Registratie Britse handelsregister.",
            "Origineel Certificate of incorparation.",
            "Origineel Current appointments report.",
            "Memorandum of association.",
            "Articles of association.",
            "Kosten registred office (uw verplichte kantooradres in Engeland).",
            "Voorbereiden en indienen annual accounts en annual returns.",
            "Alle fee's, kosten, documenten en diensten voor de eerste 12 maanden."
          ],
          text2: [
            "Voor het jaarlijks onderhoud van de Euro-BV, zoals het verzorgen, voorbereiden en deponeren van de jaarstukken en jaarbalans (annual returns en annual accounts), de leges aan het Britse handelsregister en het aanhouden van het wettelijk verplichte Engelse registred office betaalt u daarna € 275,- per jaar. Voor de eerste 12 maanden zijn deze kosten zoals gezegd in de prijs inbegrepen, er zijn bij Ostrea nooit verborgen of bijkomende kosten.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'Compleet met holding',
         type: 'text',
          text: [
            "Er zijn veel redenen te bedenken waarom u als ondernemer uw onderneming in een Euro-BV onder zou willen brengen. Wanneer het fiscaal effect daarvan een belangrijke overweging is dan is het belangrijk dat u uw Euro-BV onderbrengt in een holding. Het adagium onder belastingadviseurs is niet voor niets: \"Een BV is geen BV\". Ostrea biedt daarom de Euro-BV (Ltd.& commanditaire vennootschap) ook compleet aan in combinatie met een holding (Ltd.)",
            "De Euro-BV met holding biedt alle juridische, fiscale en practische voordelen die de Engelse Limited en de Euro-BV bieden boven de Nederlandse BV. Dankzij de persoonlijke holding geniet u daarnaast mede dankzij de z.g Moeder-Dochter vrijstelling de volgende, voornamelijk fiscale, voordelen:"
          ],
          list: [
            "Vrijstelling van dividendbelasting bij winstuitkering aan Holding.",
            "Bij verkoop van een dochtermaatschappij door holding geen winstbelasting verschuldigd.",
            "Meerdere werkmaatschappijen onder dezelfde holding mogelijk"
          ],
          text2: [
            "Voor een Euro-BV compleet met holding betaalt u € 650,- vrij op naam.",
            "Ook hier zijn alle kosten en documenten en alle diensten voor de eerste 12 maanden zoals altijd bij Ostrea in de prijs inbegrepen. Na de eerste 12 maanden betaald u voor het jaarlijks onderhoud, de fee aan het britse handelsregister en het registred office van de beide Engelse limiteds in deze structuur € 550,- per jaar."
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
        {
          title: 'International Business Corporation',
         type: 'text',
          text: [
            "De Euro-BV is kortom de ideale ondernemingsvorm voor de startende kleine ondernemer. Zoekt u maximaal fiscaal profijt of wilt u doorstarten in een faillissementssituatie.",
          ],
          navigation:{basePage: 'companyFormation', subPage:'De International Business Corporation (IBC)'},
          linkText: 'Lees dan verder over de International Business Corporation (IBC)',
        },
        {
          title: 'De Euro-BV nu direct zelf online oprichten',
         type: 'text',
          text: [
            "U kunt uw Euro-BV of Euro-BV met persoonlijke holding nu direct zelf online oprichten door op de groene knop hieronder te klikken, u kunt dan vandaag nog operationeel met de Euro-BV aan het werk. Toch nog iets niet duidelijk of wilt u hulp en advies bij het oprichten belt u ons dan tijdens kantooruren geheel vrijblijvend op onderstaand telefoonnummer.",
          ],
          navigation:{basePage: '', subPage:null},
          linkText: '',
        },
      ]
    },
    {
      title: 'Online oprichten',
      content: [
        {
          title: 'Direct aan de slag',
          type: 'form',
          text: [
            // form text niet hier invoeren
            "Zie components/form-item.html om de text te veranderen",
          ],
        },
      ]
    }
  ]


  constructor() {
   }

   getBasePage(name){
     return this[name];
   }
}
