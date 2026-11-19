// 예약명, 몇회 예약인지 출력하는 함수
function showNotice(name, count = 1) {
  console.log(`${name}: ${count}회 예약`);
}

showNotice("보리", 2);
showNotice("모모");
showNotice("두부", 0);
