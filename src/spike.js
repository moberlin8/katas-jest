var rules = {3: "Fizz", 5: "Buzz", 7: "Bang", 11: "Pop"};

var words = Object.keys(rules);
console.log('There are ' + words.length + ' words');
let product =1;
for (var i = 0; i < words.length; i++) {
    let number =words[i];
    console.log(rules[number]+' ' + words[i]);
    product=product*words[i];

}
console.log('The product of numbers = '+product);