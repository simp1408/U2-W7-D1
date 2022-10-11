
    
   class Persona{

    constructor(nome,cognome,data){
        this.nome=nome;
        this.cognome=cognome;
        this.data=data;
    }
    createDiv(){
        let tbody=document.getElementById('tbody');
        tbody.innerHTML +=`<tr><td>${this.nome}</td></tr>
                         <tr><td>${this.cognome}</td></tr>
                          <tr><td>${this.data}</td></tr>`   
    }

   }

   function add(){
    // dentro a new Persona ci metto i parametri del constractur 
    // e che verrano dal DOM
    // ABBIAMO CREATO UNA NUOVA PERSONA CON I VALORI DELL input
    
    let persona = new Persona(

        document.getElementById('nome').value,
        document.getElementById('cognome').value,
        document.getElementById('data').value
        )
        persona.createDiv();
   
   }

 
  

    



