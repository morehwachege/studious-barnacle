const month = document.querySelector('#selectMilk');
const report = document.querySelector('.report');
const reportGen = document.querySelector('.reportGen');
const items = document.createElement('h4');
const itemsGen = document.createElement('h4');
let header = document.querySelector('.main-header');
let generate = document.querySelector('.generate')
let monthA = {};
const submit = document.querySelector('.input-form');
let shed1 = document.querySelector('#shed1');
let shed2 = document.querySelector('#shed2');
let shed3 = document.querySelector('#shed3');
let shed4 = document.querySelector('#shed4');
const months = {
    january: 31,
    february: 29,
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



report.appendChild(items);

reportGen.appendChild(itemsGen);

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

        let monthlyIncome = Object.assign({}, months); // a detached copy of months
        let monthArray = new Array();
        for (const month in months) {
            for (let income in monthlyIncome) {
                if (month === income) {
                    monthlyIncome[month] = (Math.floor(selling_price * months[month] * this.total)); // total income in a year
                    monthA[month] = (Math.floor(selling_price * months[month] * this.total));
                };
            };
            monthArray.push(month);
        };
        let listIncome = Object.keys(monthlyIncome);
        listIncome.forEach(function (item) {
            console.log(`Your income for ${item} is ${monthlyIncome[item]}`);
        })
        monthArray = monthArray.slice(0, time); // get array of months to calculate
        let sum = 0;
        for (let i = 0; i < monthArray.length; i++) {
            sum += monthlyIncome[monthArray[i]]
        };
        // console.log(sum)
        return sum;
    }
}
// let prod = new Production(shed1.value, shed2.value, shed3.value, shed4.value);

if(submit){
    submit.onsubmit = function () {
        shed1 = Number(shed1.value);
        shed2 = Number(shed2.value);
        shed3 = Number(shed3.value);
        shed4 = Number(shed4.value);
    
        let prod = new Production(shed1, shed2, shed3, shed4);
        console.log(prod.incomeOverTime(45, 3));
        // console.log(monthA)
    
        if (generate) {
            generate.addEventListener('click', () => {
    
                setTimeout(function () {
                    // header.style.display = 'none';
                    document.querySelector('header').style.display = 'none';
                    document.querySelector('nav').style.display = 'none';
                    document.querySelector('form').style.display = 'none';
                    document.querySelector('select').style.display = 'none';
                    document.querySelector('.title').style.display = 'none';
                    document.querySelector('.new-title').style.display = 'block';
                    // debugger;
    
                    for (let key in monthA) {
                        items.innerHTML += `The total production for ${key} is ${monthA[key]} litres. Production per day is ${monthA[key] / 30} litres<br>`;
                    }
                    window.print();
                    window.location.reload();
                });
            })
        }
    
    
        if (month) {
            month.addEventListener('change', () => {
    
                for (let key in monthA) {
                    if (month.value == key) {
                        // console.log(`Your income for ${month.value} is ${monthA[key]}`)
                        items.innerHTML = `Your total production for ${key} is ${monthA[key]} litres. Production per day is ${monthA[key] / 30} litres<br>`;
                        items.style.marginTop = '30px';
                    };
                };
            });
        } else {
            console.log('month not available');
        }
        // debugger;
        alert('Your report is ready')
        return false;
    
    };
}


// console.log(monthA);
// Object.keys(monthA).forEach(function (key) {
//     items.innerHTML += `Your total production for ${key} is ${monthA[key]} litres per day <br>`;
//     console.log(key, monthA[key]);
// });
// console.log(shed1.value)
