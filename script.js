let totalProduction = function (shedA, shedB, shedC, shedD){
    console.log(`Your production in Shed A is ${shedA} litres per day `);
    console.log(`Your production in Shed A is ${shedB} litres per day `);
    console.log(`Your production in Shed A is ${shedC} litres per day `);
    console.log(`Your production in Shed A is ${shedD} litres per day `);
    let total = shedA + shedB + shedC + shedD;
    console.log(`The total production is ${total} litres per day`);
}
totalProduction(12,3,454,32)