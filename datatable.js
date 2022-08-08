// -------------------------------------------------------------------  GLOBALI  ------------------------------------------------------------------------------------

var COLONNE = "columns": [
            { "0": "compilatoreEmail", "title": "Compiler email",},
            { "1": "dataRegistrazione", "title":"Registration date","width": "10%", },  // non usare type date altrimenti sort non funziona                    
            //  non funzionava tanto...   function (data) { return getDataDDMMYY_V2(data);}},  // non aggiungere ore e sec altrimenti sort non funziona
            { "2": "compilatoreCognome","title": "Lastname compiler",},
            { "3": "compilatoreNome","title": "Name compiler",},
            { "4": "compilatoreCognomeNome","title": "Compiler",},
            
            { "5": "statusItem","title": "Status Item",},
            { "6": "eliminatoreEmail","title": "Eliminator email",},
            { "7": "dataEliminazione", "title":"Date of elimination", "type": "date", "render": function (data, type, row) { 
                                                                                      var DataRegistrazioneString = getDataDDmmYYHHmmss(data);
                                                                                       return DataRegistrazioneString
                                                                                      },},
            { "8": "operatoreUltimoAggiornamento","title": "Operator last updtare",},
            { "9": "dataUltimoAggiornamento", "title":"Last update date", "type": "date", "render": function (data, type, row) { 
                                                                                       var DataRegistrazioneString = getDataDDmmYYHHmmss(data);
                                                                                       return DataRegistrazioneString
                                                                                      },  },
            
            { "10": "vehicleNumber","title": "Vehicle Number",},                  // Veiche Number
            { "11": "richiedenteEmail","title": "Driver email",},                  // Richiesta 
            { "12": "richiedenteCognome","title": "Driver lastname",},
            { "13": "richiedenteNome","title": "Driver name",},
            { "14": "richiedenteCognomeNome","title": "Driver",},
            
            { "15": "chilomentriPrevisti","title": "Expected kilometers","width": "10%",},
            { "16": "causale","title": "Motivation",},
            { "17": "dataPrelievo","title": "Pick-up date","render": function (data, type, row) { 
                                                                                       
                                                                                       return getDataDDMMYY_V2(data)
                                                                                      },  },
            { "18": "dataRestituzionePrevista","title": "Pick-up return", "type": "date-uk","render": function (data, type, row) { 
                                                                                       
                                                                                       return getDataDDMMYY_V2(data)
                                                                                      },  },
            { "19": "destinazione","title": "Destination",},
            { "20": "ente","title": "Company name",},
            { "21": "opzioniveicolo","title": "Vehicle option","width": "3%",},
            { "22": "oraprelievo","title": "Pick-up time","width": "3%",},
            { "23": "orarestituzione","title": "Return time","width": "3%",},
            { "24": "passeggeri","title": "Number of passengers","width": "3%",},
            { "25": "nomePasseggeri","title": "Passengers name",},
            { "26": "tipoVeicolo","title": "Vehicle type","width": "4%",},
            
            
            // Autorizzazione
            { "27": "autorizzatoreEmail","title": "Authorizer email",},
            { "28": "autorizzazioneStato","title": "Authorization status","render": function (data, type, row) { 
                                                                 
                                                                                       var newData = "<span data-stato-autorizzazione="+data.replace(/\s/g, '')+" class='lang-"+ data.replace(/\s/g, '') +"'>"+ data +"</span>";
                                                                                       return newData
                                                                                      },  },
            { "29": "dataAutorizzazione","title": "Date of authorization", "type": "date", "render": function (data, type, row) { 
                                                                                       var DataRegistrazioneString = getDataDDmmYYHHmmss(data);
                                                                                       return DataRegistrazioneString
                                                                                      },  },
            
            
            // Assegnazione
            { "30": "targa","title": "License plate",},
            { "31": "assegnazioneStato","title": "State assignment",},
            { "32": "assegnatoreEmail","title": "Assigner email",},
            
            { "33": "assegnazioneMyCard","title": "MyCard",},                                                         // ************************  NUOVO
            
            { "34": "assegnazioneData","title": "Assigner date", "type": "date", "render": function (data, type, row) { 
                                                                                       var DataRegistrazioneString = getDataDDmmYYHHmmss(data);
                                                                                       return DataRegistrazioneString
                                                                                      }, },
            
            
            // Restituzione
            { "35": "restituzioneStato","title": "Return status",},
            { "36": "dataRestituzione","title": "Return date", "type": "date", "render": function (data, type, row) { 
                                                                                       var DataRegistrazioneString = getDataDDmmYYHHmmss(data);
                                                                                       return DataRegistrazioneString
                                                                                      },  },
            { "37": "chilometriAllArrivo","title": "Kilometers to arrival",},
            { "38": "serbatoio","title": "Tank status",},
            { "39": "danni","title": "Damage",},
            { "40": "descrizioneDanni","title": "Damage description",},
            
            { "41": "Note","title": "Note",},
            { "42": "Check","title": "","orderable": false, "className": 'select-checkbox',"width": "2%",}
            
                 
        ];


// --------------------------------------------------------------------  SCRIVI RICHIESTE  -------------------------------------------------------------------------------------------

function scriviRichieste(richieste){
  
  if (richieste==""){                                                                                // in caso di nessuna richiesta esce dalla funzione
    document.getElementById("loader").style.display = "none";                                            // ferma lo spinner
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
              /*/
              "initComplete": function(settings) { 
                                $('#TableRequests').colResizable({liveDrag:true});  // interferisce col modal va in overlap
                              },
              /*/
        
        // barra button
        


        
        dom: 'Bfrtip',
        buttons: [
            
            {
                text: '<span id="myBtn" class="lang-Newrequest">New request</span>',
                className: 'w3-button w3-blue w3-hover-blue',
                action: function () {
                                     resetForm();
                                     modalRequest.style.display = "block";
                                    },
            },
            {
                text: '<span class="lang-TastoMenuRestituzione">Restituzione</span>',
                className: 'w3-button w3-red w3-hover-red',
                action: function () {
                                      
                                      var idRigaSelezionata = $('#elenco-richieste tr.selected')[0].id;
                                      
                                      mostraDialogReturn(idRigaSelezionata);
                                      
                                   },
                enabled: false
                
            }
        ],      
             
               
        data: obj,
        
        
        createdRow: function( row, data, dataIndex ) {
        // Set the data-status attribute, and add a class
        $( row )
            .attr('id', ''+data[10]+'')
            .attr('data-status', data[5])
            .attr('data-autorizzazione', data[28].replace(/\s/g, ''))
            .attr('data-assegnazione', data[31])
            .attr('data-mycard', data[33])                                       //  *******************************  NUOVO
            .attr('data-targa', data[30]);
            //.addClass('context-menu-one btn btn-neutral');
            
            //.attr('data-restituzione-status', data[34])    // valore "Si" se restituita
            
            
        }, 
        
    
        
        rowCallback: function( row, data, index ) {         
        
        

        //$('td:eq(8)', row).addClass("lang-"+data[28].replace(/\s+/g, ''));  //  chiama la classe col contenuto senza spazzi serve per cambio lingua
        
        /*/
        if (data[34] == "Yes") {   // nasconde auto rientrate  --- non serv, ho modificato il get, non vengono elencate le restituite
           $(row).hide();
         }
        /*/
        
        },
    
    /*/
             // Compilazione
            { "data0": "targa", "title": "License plate", },
            { "visible":false, "data1": "marca", "title":"Brand", }, 
    
    /*/

     COLONNE,
        
        "select": {
            "style":    'os',
            "selector": 'td:first-child'
        },
        
          "columnDefs": [
          
          
            {              
                "targets": [0,2,3,4,5,6,7,8,9,10,11,12,13,15,21,22,23,24,25,26,29,31,32,34,35,36,37,38,39,40,41],                      // **************** NUOVO
                "visible": false
                
            },
            
            
            
            {
                "targets": [],
                "searchable": false
            }
            
        ], 
        
          
          "colReorder": {
 
           "order": [ 42,1,14,16,17,18,19,20,27,28,30,32 ],                                                 // ***************** NUOVO
           
           
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
          
        
    } );
   







// ------------------------------  assegna classe di riferimento per dizionario lingua  -----------------------------------------------

  var colCount = table.columns().header().length; 

  for (var i=0; i<colCount; i++){
    var nomeClasse = "lang-TableRequestsCol" + i;
    $( table.column( i ).header() ).addClass( nomeClasse );
  }



// ---- Assegna delle classi al datatable per usare il dizionario  -------------------------------------

  $(".previous").addClass("lang-TastoPrevious")  // tasti dataTable
  $(".next").addClass("lang-TastoNext")
  $(".dataTables_empty").addClass("lang-TableEmpty")
  






// ----------------------------------------------------------------  CAMBIO COLORE AL CLICK SU RIGA TABELLA  ----------------------------------------------------------------

$("#TableRequests tbody").on('click', 'tr[data-assegnazione="Yes"]', function() {           // con il tasto sinistro solo sulle richieste in pending così evita di processare quelle già processate
  
  if (this.classList.contains("selected")){
    this.classList.remove("selected");
    table.button( 1 ).enable(false)
  }else{
    $("#TableRequests .selected").removeClass('selected')
    this.classList.add("selected");
    table.button( 1 ).enable()
  }
});
    
    
    /*/
    $(this).toggleClass("selected");
    $(this).toggleClass("context-menu-one");
    
    table.button( 0 ).enable()
    
    })
    
});

/*
$("#TableRequests tbody").on('contextmenu', 'tr', function() {                                      // con il tasto destro
    $(this).toggleClass("selected");
});
/*/

/*/
$(document).click(function() {                                                                      // rimuove selezione quando click fuori dall'area
    $(".selected").removeClass("selected");
    $(".context-menu-one").removeClass("context-menu-one");
    table.button( 0 ).enable(false)
});
/*/

$("#TableRequests tbody").click(function(event) {                                                   // rimuove selezione quando click fuori dall'area
    
    event.stopPropagation();
});



document.getElementById("loader").style.display = "none";                                            // ferma lo spinner

/*/   
   $('#TableRequests thead tr:eq(1) th').off('click.DT');                                            // rimuove il click order dalla riga con i field di ricerca

   $('#TableRequests thead tr:eq(1) th').css("background", "none");                                  // rimuove da ogni cell le frecce per ordinare

   

   document.getElementById("TableRequests").style.visibility = "visible";                            // serve dopo avere aggiornato la tabella, nasconde difetti

   document.getElementById("mostranascondi").style.visibility = "visible";                           // visualizza il tasto mostra nascondi, nasconde difetti 
/*/




}
