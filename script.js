class Production {
    constructor(shedA, shedB, shedC, shedD) {
        this.shedA = shedA;
        this.shedB = shedB;
        this.shedC = shedC;
        this.shedD = shedD;
        this.total = shedA + shedB + shedC + shedD;
    }
    returnTotal(){
        return this.total;
    }
    totalProduction() {
        console.log(`Your production in Shed A is ${this.shedA} litres per day `);
        console.log(`Your production in Shed A is ${this.shedB} litres per day `);
        console.log(`Your production in Shed A is ${this.shedC} litres per day `);
        console.log(`Your production in Shed A is ${this.shedD} litres per day `);
    }
}
let prod =  new Production(12, 3, 454, 32);
console.log(prod.returnTotal())
// let gem = totalProduction(12, 3, 454, 32)
// const incomeOverTime = function (rate, time) {
//     // time in days

// }
// console.log(gem)