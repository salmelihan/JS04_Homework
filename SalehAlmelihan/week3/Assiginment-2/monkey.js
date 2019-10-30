monkey = function (name, species, foodsEaten) {
    this.name = name;
    this.species = species;
    this.foodsEaten = [foodsEaten];
}
monkey.prototype.eatSomthing = function (food) {
    this.foodsEaten.push(food)
}
monkey.prototype.introduce = function () {
    console.log(this.name + ' is a monkey that is from the species :' + this.species)
}
let monkey1 = new monkey('Hadi', 'mammals', 'Banana');
console.log(monkey1.foodsEaten)
monkey1.eatSomthing('oranges')
console.log(monkey1.foodsEaten)
monkey1.introduce();

let monkey2 = new monkey('Adama', 'mammals', 'Elderberry')
monkey2.introduce()


let monkey3 = new monkey('Roben', 'mammals', 'Cherry')
monkey3.introduce()