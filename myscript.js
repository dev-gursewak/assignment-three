let countries = ["India", "Canada", "Australia", "United States", "Nepal"];
countries.forEach((element) => {console.log(element)});



function calculateNumberToothbrushForLife(age, amountPerMonth){
    let maxAge = 98;
    console.log(`You will need ${(maxAge-age)*amountPerMonth*12} toothbrushed to last you until the age of ${maxAge}`);
}


calculateNumberToothbrushForLife(56, 2);
calculateNumberToothbrushForLife(23, 1);