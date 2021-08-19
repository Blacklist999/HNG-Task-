const add = function (a,b) {
  return a +b;
};
console.log (add(55,1,1001));





//const user = {
  //name: 'Ahmed',
 // cities: ['Lekki', 'Oworo', 'Akute'],
  //printPlacesLived: function (){
    //this.cities.forEach((city) => {
      //console.log(this.name + ' has lived in ' + city);
    //});
  //}
//};
//user.printPlacesLived();




const multiplier = {
 numbers:['2','4','6','8','10','12',],
 multiplyby:'2',
printMultiply() {
  return this.numbers.map((numbers) => numbers * this.multiplyby);
}
};
console.log (multiplier.printMultiply());

const divider = {
  numbers:['10','20','30','40','50','60','70',],
  dividedby:'10',
  divided(){
    return this.numbers.map((numbers) => numbers / this.dividedby);
  }
};
console.log (divider.divided());
