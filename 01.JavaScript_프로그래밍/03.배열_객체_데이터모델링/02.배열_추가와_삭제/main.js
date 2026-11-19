const waiting = ["보리", "모모", "두부"];

// 초코를 끝에 추가하고 보리를 앞에서 꺼내기
waiting.push("초코");
waiting.shift();
console.log("대기 명단: " + waiting);

// 대기를 취소한 두부를 제거
waiting.splice(1, 1);
console.log("대기 명단: " + waiting);
