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
        console.log(`Your production in Shed B is ${this.shedB} litres per day `);
        console.log(`Your production in Shed C is ${this.shedC} litres per day `);
        console.log(`Your production in Shed D is ${this.shedD} litres per day `);
    }
    incomeOverTime(selling_price, time){
        console.log(`Your weekly income will be Ksh. ${(Math.floor((selling_price * time * this.total)/7))}`);
        console.log(`Your monthly income will be Ksh. ${(Math.floor((selling_price * time * this.total)/30))}`)
    }
}
let prod =  new Production(12, 3, 454, 32);
console.log(prod.returnTotal())  // total amount of milk
// total income with time
console.log(prod.incomeOverTime(45, 3))
