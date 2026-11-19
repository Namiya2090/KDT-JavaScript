const status = "shipping";
let message = "";

// switch 구문
// 변수 status 값에 따라 case 본문 실행
switch (status) {
  case "paid":
    message = "결제 완료";
    break;
  case "shipping": // 해당 본문 실행
    message = "배송 중";
    break;
  case "done":
    message = "배송 완료";
    break;
  default:
    message = "상태 확인 필요";
}

// 출력
console.log("주문 상태: " + message);
