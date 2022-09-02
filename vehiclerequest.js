let JSON_COLONNE = '{ "columns" : ['
               + '{ "0":"compilatoreEmail" , "title":"Compiler email" },'
               + '{ "1":"dataRegistrazione" , "title":"Registration date" , "width":"10%"},'
               + '{ "2":"compilatoreCognome" , "title":"Lastname compiler" },'
               + '{ "3":"compilatoreNome", "title":"Name compiler" },'
               + '{ "4":"compilatoreCognomeNome" , "title":"Compiler" },'
               + '{ "5":"statusItem","title":"Status Item" },'
               + '{ "6":"eliminatoreEmail" , "title":"Eliminator email" },'
               + '{ "7":"dataEliminazione" , "title":"Date of elimination", "type": "date" },'
               + '{ "8":"operatoreUltimoAggiornamento" , "title":"Operator last updtare" },'
               + '{ "9":"dataUltimoAggiornamento" , "title":"Last update date", "type": "date" },'
               + '{ "10":"vehicleNumber" , "title":"Vehicle Number" },'
               + '{ "11":"richiedenteEmail" , "title": "Driver email" },'
               + '{ "12":"richiedenteCognome" , "title":"Driver lastname" },'
               + '{ "13":"richiedenteNome" , "title":"Driver name" },'
               + '{ "14":"richiedenteCognomeNome" , "title":"Driver" },'
               + '{ "15":"chilomentriPrevisti" , "title":"Expected kilometers" , "width":"10%" },'
               + '{ "16":"causale" , "title":"Motivation" },'
               + '{ "17":"dataPrelievo" , "title":"Pick-up date" },'
               + '{ "18":"dataRestituzionePrevista" , "title":"Pick-up return", "type":"date-uk" },'
               + '{ "19":"destinazione" , "title":"Destination"},'
               + '{ "20":"ente" , "title":"Company name"},'
               + '{ "21":"opzioniveicolo" , "title":"Vehicle option" , "width":"3%" },'
               + '{ "22":"oraprelievo" , "title":"Pick-up time" , "width":"3%" },'
               + '{ "23":"orarestituzione", "title":"Return time" , "width":"3%" },'
               + '{ "24":"passeggeri" , "title":"Number of passengers" , "width":"3%" },'
               + '{ "25":"nomePasseggeri" , "title":"Passengers name" },'
               + '{ "26":"tipoVeicolo" , "title":"Vehicle type" , "width":"4%"},'
               + '{ "27":"autorizzatoreEmail" , "title":"Authorizer email" },'
               + '{ "28":"autorizzazioneStato" , "title":"Authorization status" },'
               + '{ "29":"dataAutorizzazione" , "title":"Date of authorization" , "type":"date"},'
               + '{ "30":"targa" , "title":"License plate" },'
               + '{ "31":"assegnazioneStato" , "title":"State assignment" },'
               + '{ "32":"assegnatoreEmail" , "title":"Assigner email" },'
               + '{ "33":"assegnazioneMyCard" , "title":"MyCard" }, '
               + '{ "34":"assegnazioneData" , "title":"Assigner date" , "type":"date" },'
               + '{ "35":"restituzioneStato" , "title":"Return status" },'
               + '{ "36":"dataRestituzione" , "title":"Return date" , "type":"date" },' 
               + '{ "37":"chilometriAllArrivo" , "title":"Kilometers to arrival" },'
               + '{ "38":"serbatoio" , "title":"Tank status" },'
               + '{ "39":"danni" , "title":"Damage" },'
               + '{ "40":"descrizioneDanni" , "title":"Damage description" },'
               + '{ "41":"Note" , "title":"Note" },'
               + '{ "42":"Check","title":"" , "orderable":false , "className": "select-checkbox", "width": "2%"}]}';



// -----------------------------------------------------------  CONVERTE DATA IN DATASTRING  -------------------------------------------------------------------------------------------------

function getDataDDMMYY_V2(data) {

//if (data.length > 10) {
var dataISO = new Date (data);
var giorno = dataISO.getDate();
var month = dataISO.getMonth() + 1;
var year = String(dataISO.getFullYear()) ;
                                                                                                           
if ( giorno < 10 ) {      
  giorno = "0" + giorno    
}  else {
giorno = String(giorno) 
}
                                                                                                           
if ( month < 10 ) {     
  month = "0" + month    
} else {
month = String(month)
}
                                                                                                      


return (giorno +"/"+ month +"/"+ year)


}



// -----------------------------------------------------------  CONVERTE DATA IN DATASTRING  ---------------------------------------------------------------------

function getDataDDmmYYHHmmss(data) {
  var dataISO = new Date (data);
  var giorno = dataISO.getDate();
  var month = dataISO.getMonth() + 1;
  var HH = dataISO.getHours();
  var MM = dataISO.getMinutes();
  var SS = dataISO.getSeconds();
  
  if ( giorno < 10 ) { 
      giorno = "0" + giorno
    }
  
  if ( month < 10 ) { 
    month = "0" + month
    }
  
  var dataString = giorno  + "/" + month + "/" + dataISO.getFullYear() +" "+ HH + ":" + MM + ":" + SS;
    
  if ( dataString == "NaN/NaN/NaN" ) {
    dataString = ""
          }

  return dataString

}






// --------------------------------------------------------------  SCRIVI RICHIESTE  -----------------------------------------------------------------------------

function scriviRichieste(richieste, nomeTabella){
  const obj_colonne = JSON.parse(JSON_COLONNE);                        //  *******************************  NUOVO

  if (richieste==""){                                                  // in caso di nessuna richiesta esce dalla funzione
    document.getElementById("loader").style.display = "none";          // ferma lo spinner
    return false
  }
  
  var obj = JSON.parse(richieste);
  
  
  var table = $('#TableRequests').on( 'init.dt', function() {
                                                              setTimeout(function(){ 
                                                                                     initialize(); 
                                                                                    }, 0);
                                                             }).DataTable({
              pageLength: 10,
              info: false,
              searching: false,                             // elimina lo spazio sopra la tabella
              orderCellsTop: false,
              colReorder: true,
              select: 'single',
              ordering: false,
              lengthChange: false,
              
              initComplete: function(settings, json) {
    var dataCompletamento = Date.now();
    
    console.timeEnd("caricamento tabella");
  },
        
      dom: 'Bfrtip',
      
      buttons:  BOTTONI ,
       
        data: obj,
        
        createdRow: function(row, data, dataIndex ){
                      creaRiga( row, data, dataIndex, nomeTabella )
                    }, 

        rowCallback: function( row, data, index ) {         
                       rigaCallback( row, data, index, nomeTabella )
        },
        
        
 
    
    columns: obj_colonne.columns,
    
        "select": {
            "style":    'os',
            "selector": 'td:first-child'
        },
        
          "columnDefs": COLONNEDEFINIZIONE, 
        
          
          "colReorder": {
 
           "order": COLONNAORDINE,                                                 // ***************** NUOVO
           
           
           "reorderCallback": function () {
                var country_select = document.getElementById("country_select");
                if(country_select.value!=""){
                var language = country_select.value;
                                          
                $('span[class*="lang"]').each(function(){
                  var LangVar = (this.className).split(" ");
                  
                  
                    for (var i=0; i<LangVar.length; i++){
                      if (LangVar[i].startsWith('lang') == true) {
                        var newLangVar = LangVar[i].replace('lang-','');
                        var Text = window['WORDS_'+language][newLangVar];
                        $(this).text(Text)
                      };
                    };
                  
                });
              } else {
                var language = "IT";
              }
              }
           
          
          },
          
          "order": [[1, 'desc']],   // in alternativa asc
        
    });

selezioneDellaRiga(table);

dizionarioBarraTitoli(table);

document.getElementById("loader").style.display = "none";

}



// ---------------------------------------------------------  DIZIONARIO BARRA TITOLO  ----------------------------------------------------------------------------

function dizionarioBarraTitoli(table, prefissoClasse){
  // assegna classe di riferimento per dizionario lingua  

  var colCount = table.columns().header().length; 

  for (var i=0; i<colCount; i++){
    //var nomeClasse = "lang-TableRequestsCol" + i;
    
    var nomeClasse = prefissoClasse + i;
    
    $( table.column( i ).header() ).addClass( nomeClasse );
  }
}



// ---------------------------------------------------------  INIZIALIZZA  -----------------------------------------------

function initialize() {
  var $dropdown = $("#country_select");    
  $.each(LanguageList, function(key, value) {
    $dropdown.
      append($("<option/>").
      val(key).
      text(value));
    });

  
  $(".previous").addClass("lang-TastoPrevious")  // tasti dataTable
  $(".next").addClass("lang-TastoNext")
  $(".dataTables_empty").addClass("lang-TableEmpty")
  
  loadsLanguage("IT");
}



// ----------------------------------------------  SELEZIONE DELLA LINGUA  ------------------------------------------------

function loadsLanguage(lang){
  /*fills all the span tags with class=lang pattern*/ 
  $('span[class*="lang"],a[class*="lang"],h1[class^="lang"],h2[class*="lang"],swal-title[class*="lang"],button[class^="lang"],td[class*="lang"],select option[class^="lang"],div[class^="lang"],th[class*="lang"],label[class*="lang"]').each(function(){
    
    
    //var LangVar = (this.className).replace('lang-','');
    
    var LangVar = (this.className).split(" ");

    
    for (var i=0; i<LangVar.length; i++){
     
     
     if (LangVar[i].startsWith("lang") == true) {
       var newLangVar = LangVar[i].replace('lang-','');
       var Text = window["WORDS_"+lang][newLangVar];
       $(this).text(Text)
     }
    } 
  });
  
  $('input[class^="lang"]').each(function(){                             // traduce i placeholder
    var LangVar = (this.className).split(" ");
    for (var i=0; i<LangVar.length; i++){
      if (LangVar[i].startsWith("lang") == true) {
        var newLangVar = LangVar[i].replace('lang-','');
        var Text = window["WORDS_"+lang][newLangVar];
        $(this).attr("placeholder", Text);
      }
    } 
  });
  
  
  $('textarea[class^="lang"]').each(function(){                             // traduce i placeholder
    var LangVar = (this.className).split(" ");
    for (var i=0; i<LangVar.length; i++){
      if (LangVar[i].startsWith("lang") == true) {
        var newLangVar = LangVar[i].replace('lang-','');
        var Text = window["WORDS_"+lang][newLangVar];
        $(this).attr("placeholder", Text);
      }
    } 
  });  
  
}


// ------------------------  CAMBIO COLORE AL CLICK SU RIGA TABELLA  --------------------------------------------------------------

function selezioneDellaRiga(table){
  
  $("#TableRequests tbody").on('click', CONDIZIONERIGAPERSELEZIONE, function() {    // con il tasto sinistro solo sulle richieste in pending così evita di processare quelle già processate
  
  if (this.classList.contains("selected")){
    this.classList.remove("selected");
    azioniRigaDeSelezionata(this, table)
    
  }else{
    $("#TableRequests .selected").removeClass('selected')
    this.classList.add("selected");
    azioniRigaSelezionata(this, table)
  }

});
    
$("#TableRequests tbody").click(function(event) {               // rimuove selezione quando click fuori dall'area
    
    event.stopPropagation();
});

}

