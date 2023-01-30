//Let us create our own logger function.
var logger = function (output) {
    console.log(output)
}

export var appName = "ES6 Review";

export var dummyFunction = function () {
    return "I am a dummy function";
}

export const genericFunction = () => {
    const languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    const [firstLang, secondLang, ...otherLangs] = languages; //assign first element in languages array to firstLang and second element to secondLang.
    return `First language is ${firstLang} and the second is ${secondLang}
The remaining languages are ${otherLangs}`
}

export const multiplier = (...numbers) => {

    if (numbers.length < 2) {
        throw new Error(`Illegal arguments counts. Arguments must be greater than 1.
        You sent only ${numbers.length} number(s)`)
    }

    let product = 1;

    for (let number of numbers) {
        product = product * number;
    }

    return product;
}

//static methods
export class CustomMath {
    static sqrt(a) {
        return Math.sqrt(a);
    }
    static pow(a, b) {
        return Math.pow(a, b);
    }
}




export default logger;