// var name1 = 'Hoa'
// let name2 = 'Nam'
// const name3 = 'Minh'

// console.log('name1',name1)
// console.log('name2',name2)
// console.log('name3',name3)

// function logName() {
//     var name = 'Hoa'
//     console.log(name)
// }
// logName()

// function logName() {
//     const name = 'Hoa'
//     console.log(name)
// }
// logName()

// function logName() {
//     if (true){
//         const myName = 'Hoa'
//     }
//     console.log(myName)
// }

// logName()

// function sumByNormalFn(a, b) {
//     console.log('a:',a)
//     console.log('b:',b)
//     console.log(a +b)
// }

// const sum = function(a,b){
//     console.log(a + b)
// }
// const sumByArrow = (a,b) => {
//     console.log(a+b)
// }

// const a= `toi la "Nam" lop:
// '9E'`

// const b='9E'
// const a=`toi la "Nam" lop:'${b}`

// const fnA=() => {

// }
// const fnB=(a) => {

// }
// const fnC =a => {

// }

// const sum =(a,b) =>{
//     return a + b
// }
// const sum1 =(a,b) => a + b

// sum(2,6)
// function sum(a,b) {
//     console.log(a+ b)
// }
// const sum = (a,b) => a + b

// function test() {
//     console.log('reactjs',a)
//     var a=5;
//     let b=6;
//     const c=7;
// }
// test()
// function test1() {
//     var a
//     let b
//     const c
//     console.
//     log('reactjs')
//     a=5;
//     b=6;
//     c=7;
// }

// const a=6

// if(a==1){
//     console.log('a==1')
// }else if (a==2){
//     console.log('a==2')
// }else if (a==3){
//     console.log('a==3')
// }else {
//     console.log('a is not eqals 1,2,3')
// }
function setClass(rate) {
    rate=Number(rate)
    if(typeof(rate)!=='number'||rate<1){
        return 'Ko dc xep lop'
    }
    if(rate==1){
        return 'D'
    } else if(rate==2){
        return 'C'
    }else if(rate==3){
        return 'B'
    }else{
        return 'A'
    }
}