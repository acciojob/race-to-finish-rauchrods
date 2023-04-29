window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let p1 =  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(" ");
    }, Math.floor(Math.random()*5000) + 1000);
        
});

let p2 =  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(" ");
    }, Math.floor(Math.random()*5000) + 1000);
});

let p3 =  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(" ");
    }, Math.floor(Math.random()*5000) + 1000);
});
let p4 =  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(" ");
    }, Math.floor(Math.random()*5000) + 1000);
});
let p5 =  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(" ");
    }, Math.floor(Math.random()*5000) + 1000);
});
window.promises = [];
promises.push(p1,p2,p3,p4,p5);


Promise.any(promises).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
