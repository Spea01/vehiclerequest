// -------------------------------------------------------------------  V1.0.1 ------------------------------------------------------------------------------------

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
