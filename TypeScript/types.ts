var isWinter : boolean = true;

var count : Number = 5;

var names : String[] = ["Bran", "Jon", "Arya"];

//enum Starks {Jon, Bran, Eddard, Catlyn};

//var cat : Starks = Starks.Bran;

function getName () : string{
    return "Bran";
}

//colocar interrogação para virar opcional
interface Stark {
    name : string;
    age?: number;
}

function printName(stark : Stark){
    console.log(stark.name);
}

//printName({name:"Joao"});