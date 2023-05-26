/* for ... in 
 vd for(let key in numbers){
    console.log(numbers[key]);
 }
 for(let v of numbers){
    console.log(v);
 }

*/
function tenHam(thamso){
    console.log(thamso)
}
tenHam('giá trị truyền vào cho tham số')

//Hàm có giá trị trả về
function hamCogiatritrave(){
    return"Giá trị trả về sau khi hàm thực thi"
}
hamCogiatritrave();
tenHam(hamCogiatritrave())

function tinhTong(a, b){
    let tong = a + b;
    return tong;
}
var tong = tinhTong(6,7);
console.log(tong)

// biểu thức hàm
var expFunction = function(ts){
    // khối lệnh hàm
    console.log(ts);
}
expFunction('function');

(function(ts){
    console.log(ts)
})('TIFE') // ít dùng vì k có tính tái sử dụng

//ARROW FUNCTION
var arrowfunc = (ts) =>{
    //Khối lệnh
}
var arrowfunction = (ts1) => console.log(ts1);
arrowfunction('arrow function')