const sample = 'this is sample text with  number inside, some postcode 12-123 and phone  number 501-502-503';

const postCode = new RegExp(`\\d{2}-\\d{3}`);
let postCodeTestResult = postCode.test(sample);
console.log(postCodeTestResult);

const phoneNumber = new RegExp(`\\d{3}-\\d{3}-\\d{3}`);
let phoneNumberTestResult = phoneNumber.test(sample);
console.log(phoneNumberTestResult);

const threeDigits = new RegExp(`\\d{3}`, 'g');
let matches = sample.matchAll(threeDigits);
for (const match of matches) {
    console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
}

const doubleWhiteSpaces = new RegExp(`\\s{2}`, 'g');
let replacedText = sample.replaceAll(doubleWhiteSpaces, ' ');
console.log(replacedText);
