function Dog() {

}

Dog.prototype.bark = function(){
  console.log('ruff!');
}

function Lab() {}
Lab.prototype.bark = new Dog();


var fido = new Dog();

fido.bark();
console.log(fido);
