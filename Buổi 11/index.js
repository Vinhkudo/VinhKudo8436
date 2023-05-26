let meetRoom = [
    "vu", "Vinh", "Hoang", "Dung"
];
console.log(meetRoom);
console.log(meetRoom[1]);
console.log(meetRoom[meetRoom.length - 1])

//Mảng 2 chiều sử dụng kiểu dữ liẹu mảng bên trong mảng
 let numberList = [
    [1,3,5],
    [2,4,6],
    [3,7,9]
];
console.log(numberList); // để in ra mảng 
console.log(numberList[2][1]) // để ra phần tử 4 có toạ độ là (2;1)

//thêm phần tử vào cuối mảng

meetRoom.push("Thuỷ Tiên");
console.log(meetRoom);

// Xoá phần tử cuối trong mảng : pop sẽ k truyền vào gì

meetRoom.pop();
console.log(meetRoom);

//thêm phần tử vào đầu mảng: unshift xoá phần tử đầu thì dùng shift

meetRoom.unshift("Thuỷ Tiên")
console.log(meetRoom);
// nối mảng

let meetRoom2 = ["Tiên", "Tiến"]
let allMeet = meetRoom.concat(meetRoom2);
console.log(allMeet);

//chuyển tất cả phần tử thành 1 phần tử nào đó
// console.log(allMeet.fill("Thuỷ Tiên"));
// chuyển các phần tử trong khoảng 3-7 thành 1 phần tử nào đó
console.log(allMeet.fill("Thuỷ Tiên", 3,7));

//tìm kiếm phần tử sử dụng hàm indexOf
console.log(allMeet.indexOf("Vinh"));

//kiểm tra xem mảng có bao gồm phần tử đó hay k?
console.log(allMeet.includes("Vinh"));

//biến mảng nhiều phần tử thành chuỗi gồm 1 phần tử 
// console.log(allMeet.join(""));

//đảo ngược các phần tử trong mảng dùng: reverse

//cắt phần tử để lấy ra trong mảng dùng slice

//sắp xếp mảng : sort
let numList = [1, 3, 7, 5, 9, 2];
console.log("Kết quả là:", numList.sort());

//thêm xoá phần tử của mảng ở bất kì vị trí phần tử nào của mảng: splice

//vòng lặp với mảng

for(let i = 0; i< allMeet.length; i++){
    console.log(`Phần tử thứ ${i} là: `, allMeet[i]);
}

//các cách in các phần tử trong mảng khác:
//trả về giá trị:
for(let value of allMeet){
    console.log(`Phần tử ${i} là: `, value);
}
//trả về index:
for(let value2 in allMeet){
    console.log(`Phần tử ${i} là: `, value2);
}