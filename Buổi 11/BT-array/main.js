/* Bài Tập 01
let myColorList = ["Red", "Green", "White", "Black"];

function xuliMang(listColor){
    let result =  listColor[0];
    for (let i = 1; i <listColor.length; i++ ){
        result = result + ` + ${listColor[i]}`
    }
    return result;
}
console.log(xuliMang(myColorList));
*/

// Bài Tập 02
// let inputUser = prompt("Nhập vào dãy số tuỳ ý:")
// // chuyển dãy số đó về 1 mảng
// let numberList = inputUser.split("");
// let str = " ";
// //duyệt qua mảng
// for(let i = 0; i<numberList.length;i++){
//     str = str + `${numberList[i]}`
//     if (numberList[i]%2 == 0 && numberList[i+1]%2==0) {
//         str = str + "-"
//     }
// }
// console.log(str) 

// Bài tập 03
let inputUser03 = prompt("Nhập vào chuỗi kí tự:")
let textList = inputUser03.split("");
let text03 = '';
for (let i = 0; i<textList.length; i++ ){
    if(textList[i] === textList[i].toUpperCase()){
        text03 = text03 + textList[i].toLowerCase();
    }else{
        text03 = text03 + textList[i].toUpperCase();
    }
}
console.log(text03);

