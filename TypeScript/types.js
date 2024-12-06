var isWinter = true;
var count = 5;
var names = ["Bran", "Jon", "Arya"];
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Bran;
function getName() {
    return "Bran";
}
function printName(stark) {
    console.log(stark.name);
}
printName({ name: "Joao" });
