module.exports = function toReadable (number) {
    const array0_19 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const arrayOfDecades20_100 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundredNumber = "hundred";

    if (number <= 19) {
        for (let i=0; i<array0_19.length; i++) {
            if (number === i) {
                return array0_19[i];
            }
        }
    }

    if (number <= 99) {
        let firstDigit = Math.trunc(number / 10);
        let secondDigit = number % 10;
        let result = "";

        for (let j=0; j<arrayOfDecades20_100.length; j++) {
            if (firstDigit === j+2) {
                result += arrayOfDecades20_100[j];
            }
        }

        if (secondDigit !== 0) {
            for (let i=0; i<array0_19.length; i++) {
                if (secondDigit === i) {
                    return result += " " + array0_19[i];
                }
            }
        } else {
            return result;
        }


    }

    if (number < 1000) {
        let firstDigit2 = Math.trunc(number / 100);
        let secondDigit2 = Number(String(number)[1]);
        let thirdDigit = number % 10;
        let result2 = "";

        if ((secondDigit2 === 0) && (thirdDigit === 0)) {
            for (let i=0; i<array0_19.length; i++) {
                if (firstDigit2 === i) {
                    return result2 += array0_19[i] + " " + hundredNumber;
                }
            }
        } else {
            for (let i=0; i<array0_19.length; i++) {
                if (firstDigit2 === i) {
                    result2 += array0_19[i] + " " + hundredNumber + " ";
                }
            }
        }

        if (number % 100 <= 19) {
            for (let i=0; i<array0_19.length; i++) {
                if (number % 100 === i) {
                    return result2 += array0_19[i];
                }
            }
        }

        if (secondDigit2 !== 0) {
            for (let j=0; j<arrayOfDecades20_100.length; j++) {
                if (secondDigit2 === j+2) {
                    result2 += arrayOfDecades20_100[j];
                }

            }
        } else {
            return result2;
        }

        if (thirdDigit !== 0) {
            for (let i=0; i<array0_19.length; i++) {
                if (thirdDigit === i) {
                    return result2 += " " + array0_19[i];
                }
            }
        } else {
            return result2;
        }
    }
}
