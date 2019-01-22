var age = 20;
if (age >= 1 && age <= 17) {
  console.log("Учеба");
}
else if (age >= 18 && age <= 64) {
  console.log("Работа");
}
else if (age >= 65 && age <= 100) {
  console.console.log("Пенсия");
}
else {
  console.log("У вас интересный возраст!");
}


var arr = [1,2,3,4,5,6,7,8,9];
for (i in arr) {
switch (arr[i]) {
  case 1:
  console.log(arr[i] + ' разработчик');
    break;

  case 2:
  case 3:
  case 4:
  console.log(arr[i] + ' разработчика');
    break;

  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  console.log(arr[i] + ' разработчиков');
    break;
  }
}
