let totalProduction = function (shedA, shedB, shedC, shedD) {
    console.log(`Your production in Shed A is ${shedA} litres per day `);
    console.log(`Your production in Shed A is ${shedB} litres per day `);
    console.log(`Your production in Shed A is ${shedC} litres per day `);
    console.log(`Your production in Shed A is ${shedD} litres per day `);
    let total = shedA + shedB + shedC + shedD;
    console.log(`The total production is ${total} litres per day`);
    let totalMilk = function total() {
        return total;
    }
}
class Production {
    constructor(shedA, shedB, shedC, shedD) {
        this.shedA = shedA;
        this.shedB = shedB;
        this.shedC = shedC;
        this.shedD = shedD;
    }
    totalProduction() {
        console.log(`Your production in Shed A is ${this.shedA} litres per day `);
        console.log(`Your production in Shed A is ${this.shedB} litres per day `);
        console.log(`Your production in Shed A is ${this.shedC} litres per day `);
        console.log(`Your production in Shed A is ${this.shedD} litres per day `);
    }
}
let gem = totalProduction(12, 3, 454, 32)
const incomeOverTime = function (rate, time) {
    // time in days

}
console.log(gem)