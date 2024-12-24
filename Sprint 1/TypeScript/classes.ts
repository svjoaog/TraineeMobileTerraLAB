class Stark{
    name: string = "Brandon";
    static castle: string = "Winterfell";
    saying: string;

    constructor(){
        this.saying = "Winterfell";
    }

    hellos1(person: string){
        console.log("Hello, " + person);
    }
}

let ned = new Stark();

class AwesomePerson extends Stark{
    hellos1(){
        console.log("a lot!");
        super.hellos1("Bran");
    }
}

module Utility{
    export class useful{
        timesTwo(n: number){
            return n * 2;
        }
    }
}

// /<reference path="classes.ts" />

//let var = new Utility.useful();

// tsc util.ts TimesTwo.ts --out util.js  :combinar dois arquivos em um