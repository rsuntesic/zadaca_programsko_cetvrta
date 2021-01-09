let zagrade = (string) => {
    let stog = [];

    let otvori = {
        '{': '}',
        '[': ']'
        ,
        '(': ')'
    };

    let zatvori = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < string.length; i++) {

        let slovo = string[i];

        if (otvori[slovo]) {

            stog.push(slovo);

        } else if (zatvori[slovo]) {

            if (otvori[stog.pop()] !== slovo) return false;
        }
    }
    return stog.length === 0;
} 

console.log(zagrade("[()]()()")); // → true
console.log(zagrade("{[((()))]}")); // → true
console.log(zagrade("({)}")); // → fals