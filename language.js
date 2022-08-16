// ----------------------------------------------------------------  MULTILANGUAGE  ----------------------------------------------------------------

var LanguageList = {
  "IT" : "Italiano",
  "EN" : "English"
  
};

//languages Objects
var WORDS_EN = {
  "text1" : "text One",
  "text2" : "text Two",
  "Newrequest":"New request",
  "titolo" : "Veichle Request - Request",
  "assegnazione" : "Assignment",
  "bt_assegna" : "Assign",
  "Driver":"Driver (vehicle manager)",
  "DriverPlaceholder":"Full name",
  "Car":"Car",
  
  "Newrequest":"New request",
  "Pickupdate":"Pick-up date",
  "Pickuptime":"Pick-up time",
  "Returndate":"Return date",
  "Returntime":"Return time",
  
  "Destination":"Destination",
  "DestinationPlacehoolder":"Destination location",
  
  "Companyname":"Company name",
  "CompanynamePlacehoolder":"Company destination",
  
  "Kilometres":"Kilometres (roundtrip)",
  "Vehicletype":"Vehicle type",
  "None":"None",
  "Swissstamp": "Swiss stamp",
  "Snowtires": "Snow tires",
  "Swissstampsnowtires":"Swiss stamp and Snow tires",
  "Vehicleoption":"Vehicle option",
  "Numberofpassengers":"Number of passengers",
  "Passengers":"Passengers",
  "NomePasseggeriPlacehoolder":"Full name of all passengers",
  "Motivation":"Motivation",
  "MotivationPlacehoolder":"Short description of the reason",
  
  "Request":"Request",
  "TastoPrevious":"Previous",
  "TastoNext":"Next",
  "TableEmpty":"There are no vehicle requests",
  "Pending":"Pending",
  "Allowed":"Allowed",
  "Notallowed":"Not allowed",
  "Car" : "Car",
  "Van" : "Van",
  "Shuttle" : "Shuttle bus",
  
  "TableRequestsCol1" : "Registration date",
  "TableRequestsCol2" : "Driver",
  "TableRequestsCol3" : "Causal",
  "TableRequestsCol4" : "Data pik-up",
  "TableRequestsCol5" : "Data return",
  "TableRequestsCol6" : "Destination",
  "TableRequestsCol7" : "Company",
  "TableRequestsCol8" : "Authorize email",
  "TableRequestsCol9" : "Authorization status",
  "TableRequestsCol10" : "License plate",
  
  "tableAssignmentCol0": "License plate",
  "tableAssignmentCol1": "Brand",
  "tableAssignmentCol2": "Model",
  "tableAssignmentCol3": "Status",
  "tableAssignmentCol4": "Tank status",
  "tableAssignmentCol5": "Kilometers",
  "tableAssignmentCol6": "Mycard",
  "tableAssignmentCol7": "Tire",
  "tableAssignmentCol8": "Type",
  "Ready": "Ready",
  "Summer": "Summer",
  "Winter": "Winter",
  "Yes": "Yes",
  
  "TastoMenuRestituzione": "Return",
  "btnReturn" : "Return",
  "MyModalReturn" : "Return",
  "Return": "Return",
  
  "Kilometers" : "Kilometers",
  "Kilometerstothefinish" : "Kilometers to the finish",
  "Fueltank" : "Fuel tank",
  "Fuelstatus" : "Status",
  "Damage" : "Damage",
  "VehicleDamage":"Vehicle Damage",
  "Descriptionofthedamagetothevehicle":"Description of the damage to the vehicle",
  "MyCardReturn":"MyCard return",                                                      // ****************  NUOVO
  
  "Notesoranyreports":"Notes or any reports",
  "DescriptionNotesoranyreports":"Notes or any reports",
  "Reserve":"Reserve",
  "No":"No",
  "Yes":"Yes",
  "TastoPrevious":"Previous",
  "TastoNext":"Next",
  "TableEmpty":"There are no vehicle requests",
  "Descriptionofthedamage":"Description of the damage"
  
  
};

var WORDS_IT = {
  "text1" : "testo uno",
  "text2" : "testo due",
  "Newrequest":"Nuova richiesta",
  "titolo" : "Veichle Request - Richiesta",
  "assegnazione" : "Assegnazione",
  "bt_assegna" : "Assegna",
  "Driver":"Autista (responsabile del veicolo)",
  "DriverPlaceholder":"Nome e cognome",
  "Newrequest":"Nuova richiesta",
  "Pickupdate":"Data di prelievo",
  "Pending":"In attesa",
  "Allowed":"Autorizzato",
  "Notallowed":"Non autorizzato",
  "Car" : "Auto",
  "Van" : "Furgone",
  "Shuttle" : "Navetta",
  
  "Pickuptime":"Ora di prelievo",
  "Returndate":"Data di restituzione",
  "Returntime":"Ora di restituzione",
  "Destination":"Destinazione",
  "DestinationPlacehoolder":"Luogo di destinazione",
  "NomePasseggeriPlacehoolder":"Nome e cognome di tutti i passeggeri",
  
  "Companyname":"Ente",
  "CompanynamePlacehoolder":"Ente di destinazione...",
  
  "Vehicletype":"Tipo di veicolo",
  "Vehicleoption":"Opzioni veicolo",
  "None":"Nessuno",
  "Swissstamp": "Bollino Svizzera",
  "Snowtires": "Gomme da neve",
  "Swissstampsnowtires":"Bollino Svizzera e gomme da neve",
  
  "Kilometres":"Chilometri (a/r)",
  "Passengers":"Passeggeri",
  "Numberofpassengers":"Numero di passeggeri",
  "Motivation":"Causale",
  "MotivationPlacehoolder":"Breve descrizione della causale",
  
  "Request":"Richiedi",
  "TastoPrevious":"Indietro",
  "TastoNext":"Avanti",
  "TableEmpty":"Non ci sono richieste veicolo",
  //Compilatore Email	Data Registrazione	Compilatore Cognome	Compilatore Nome	Compilatore Cognome Nome	Status Item	Eliminatore Email	Data eliminazione	Operatore ultimo aggiornamento	Data ultimo aggiornamento
  

  "TableRequestsCol0" : "",
  "TableRequestsCol1" : "Data di registrazione",
  "TableRequestsCol2" : "Autista",
  "TableRequestsCol3" : "Causale",
  "TableRequestsCol4" : "Data di prelievo",
  "TableRequestsCol5" : "Data di restituzione",
  "TableRequestsCol6" : "Destinazione",
  "TableRequestsCol7" : "Ente",
  "TableRequestsCol8" : "Email autorizzatore",
  "TableRequestsCol9" : "Stato dell'autorizzazione",
  "TableRequestsCol10" : "Targa",

  "tableAssignmentCol0": "Targa",
  "tableAssignmentCol1": "Costruttore",
  "tableAssignmentCol2": "Modello",
  "tableAssignmentCol3": "Stato",
  "tableAssignmentCol4": "Carburante",
  "tableAssignmentCol5": "Chilometri",
  "tableAssignmentCol6": "Mycard",
  "tableAssignmentCol7": "Gomme",
  "tableAssignmentCol8": "Tipo",
  
  "Ready": "Pronta",
  "Summer": "Estive",
  "Winter": "Invernali",
  "Yes": "Si",
  
  "TastoMenuRestituzione" : "Restituzione",
  "Return": "Restituzione",
  "MyModalReturn" : "Restituzione",
  
  "Kilometers" : "Chilometri",
  "Kilometerstothefinish" : "Chilometri all'arrivo",
  "Fueltank" : "Serbatoio",
  "Fuelstatus" : "Livello carburante",
  "Reserve":"Riserva",
  "Damage" : "Danni",
  "Descriptionofthedamagetothevehicle":"Descrizione danni del veicolo",
  "Notesoranyreports":"Note o eventuali segnalazioni",
  "VehicleDamage":"Danni al veicolo",
  "No":"No",
  "Yes":"Si",
  "MyCardReturn":"Restituzione della MyCard",                                                      // ****************  NUOVO
  
  "TastoPrevious":"Indietro",
  "TastoNext":"Avanti",
  "TableEmpty":"Non ci sono richieste veicolo",
  "DescriptionNotesoranyreports":"Note o eventuali segnalazioni",
  "Descriptionofthedamage":"Descrizione del danno"
  
};

