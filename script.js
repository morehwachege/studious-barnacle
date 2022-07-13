class Production {
    constructor(shedA, shedB, shedC, shedD) {
        this.shedA = shedA;
        this.shedB = shedB;
        this.shedC = shedC;
        this.shedD = shedD;
        this.total = shedA + shedB + shedC + shedD;
    }
    returnTotal() {
        return this.total;
    }
    totalProduction() {
        console.log(`Your production in Shed A is ${this.shedA} litres per day `);
        console.log(`Your production in Shed B is ${this.shedB} litres per day `);
        console.log(`Your production in Shed C is ${this.shedC} litres per day `);
        console.log(`Your production in Shed D is ${this.shedD} litres per day `);
    }
    incomeOverTime(selling_price, time) {
        // console.log(`Your weekly income will be Ksh. ${(Math.floor((selling_price * time * this.total) / 7))}`);
        // console.log(`Your monthly income will be Ksh. ${(Math.floor((selling_price * time * this.total) / 30))}`)
        const months = {
            january: 31,
            february: 28,
            march: 31,
            april: 30,
            may: 31,
            june: 30,
            july: 31,
            august: 31,
            september: 30,
            october: 31,
            november: 30,
            december: 31
        }
        let monthlyIncome = Object.assign({}, months); // a detached copy of months
        let monthArray = new Array();
        for (const month in months){
            for( let income in monthlyIncome){
                if (month === income){
                    monthlyIncome[month] = (Math.floor(selling_price * months[month] * this.total)); // total income in a year
                }                
            }
            monthArray.push(month);
        };
        monthArray = monthArray.slice(0, time) // get array of months to calculate
        let sum = 0;
        for(let i = 0 ; i < monthArray.length; i++){
            sum += monthlyIncome[monthArray[i]]
        }
        // console.log(sum)
        return sum
    }
}
let prod = new Production(12, 3, 454, 32);
// console.log(prod.returnTotal())  // total amount of milk
// total income with time
console.log(prod.incomeOverTime(45, 3))
