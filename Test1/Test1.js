// hàm tạo mảng ngẫu nhiên
const randomArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

// tạo 3 mảng ngẫu nhiên a,b,c
let a = randomArray(2, 10);
let b = randomArray(5, 10);
let c = randomArray(3, 10);

console.log(a);
console.log(b);
console.log(c);

// hàm tổ hợp phần tử các mảng trên 
const combinationOf = (one, two, three) => {
  let res = [];
  one.forEach((a) => {
    two.forEach((b) => {
      three.forEach((c) => {
        res.push([a, b, c]);
      });
    });
  });
  return res ;
};

const result = combinationOf(a, b, c);
console.log(result);
