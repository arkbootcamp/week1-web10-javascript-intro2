// konsep 1
// const sayHello = () =>{
//   console.log("hello wordl");
// }
// const newSayHello = sayHello
// newSayHello()

// konsep 2

// const sayHello2 = ()=>{
//   console.log("hello world");
// }


// contoh 1
// const masteeSayHello = (callback)=>{
//   callback()
// }

// masteeSayHello(sayHello2)

// contoh 2
let myMoney = 10000
const print = (price)=>{
  console.log("Rp. "+price+" .-");
}
const upgrade = (price)=>{
  myMoney = myMoney + price
}

const sumPrice = (value1, value2, callback)=>{
  const result = value1 + value2
  callback(result)
}

sumPrice(10000, 5000, upgrade)
console.log(myMoney);

