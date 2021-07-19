// ES 1
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// ES 2
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Consigli del giorno:
// Iniziate col riflettere sugli step che dovete eseguire, scrivendoli in italiano sotto forma di commenti
// Facciamo un passo alla volta e verifichiamo i nostri passi col console.log.
// Quando tutto funziona col console.log possiamo preoccuparci di eseguire in pagina!


// esercizio 1
    // var student = {name:"Loris", surname:"Resmini", age:26}; 
    // var text = "";
    // var key;
    // for (key in student) {
    //   text += student[key] + " ";
    // }
    // document.getElementById("student-placeholder").innerHTML = text;

// esercizio 2

    const students = [
        {name: 'loris', surname: 'resmini', age: 26 },
        {name: 'simone', surname: 'servodidio', age: 28},
        {name: 'alexi', surname: 'melis', age: 21},
    ]

    console.log('lista base: ');
    for (var i = 0; i < students.length; i++){
        var currentStudent = students[i];
        // stampo i dati di tutti gli studenti nell'arrey base
        console.log(currentStudent);
    }

    newStudent = {name: '', surname: '', age: '',} 
    //raccolgo i dati dello studente da aggiungere
    newStudent.name = prompt('inserisci il tuo nome');
    newStudent.surname = prompt('inserisci il tuo cognome');
    newStudent.age = parseInt(prompt('inserisci la tua età'));
    console.log('il nuovo studente è ' + newStudent.name + ' ' + newStudent.surname + ' ' + 'età: ' + newStudent.age);
    //inserisco il nuovo studente nell'arrey
    students.push(newStudent);

    console.log('lista aggiornata: ');
    for (var i = 0; i < students.length; i++){
        var currentStudent = students[i];
        // stampo i dati di tutti gli studenti nell'arrey aggiornata
        console.log(currentStudent);
    }