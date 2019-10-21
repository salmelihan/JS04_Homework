/** Write a script that can generate random addresses
As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
Your script should randomly select one item from each of these arrays and then use them to construct a random address
Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
node random-address.js
=> 34578 Dolphin Street, Wonka NY, 44506 **/

// Assignment 2: Random Address Generator
/**
 * @author Saleh Almelihan <saleh.melinan@gmail.com>
 */

/**---------------------------------------------------Assignment(2) Solution---------------------------------------------------------------**/

// * Creating arrays that contain dummy data
let streetNumber = ['1878', '777', '374', '2332', '5566'];
let streetName = ['Brockton Avenue', 'Memorial Drive', 'Hartford Avenue', 'Oak Street', 'Parkhurst Rd'];
let cityName = ['Abington', 'Avon', 'Bellingham', 'Brockton', 'Chelmsford'];
let stateName = ['AL', 'AK', 'AZ', 'AR','CA'];
let zipCode = ['2351', '2322', '2019', '2301', '1824'];

// * This funcation will retrive random number from 0 to 4
function getRandomNumber(){
    generateRandomNumber = Math.floor(Math.random() * 5);
    return generateRandomNumber
}

// * RandomAddress is variable that contatins address of the following format "34578 Dolphin Street, Wonka NY, 44506".
// * It has getRandomNumber funcation which is randomly retrive a number between 0 to 4 that represent arrays index
randomAddress = streetNumber[getRandomNumber()] + ' ' + streetName[getRandomNumber()] + ', ' + cityName[getRandomNumber()] + ' ' + stateName[getRandomNumber()] + ', ' + zipCode[getRandomNumber()];

// * Here is to print the value to the console
console.log(randomAddress);

/**-------------------------------------------------------------------------------------------------------------------------------------**/

