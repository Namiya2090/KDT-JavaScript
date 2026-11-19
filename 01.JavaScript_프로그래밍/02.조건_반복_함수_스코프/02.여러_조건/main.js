const age = 20;
const hasTicket = true;
const hasPass = false;

// 나이가 18세 이상이고 티켓이나 초대장 중 하나라도 보유
const allowed = age >= 18 && (hasTicket || hasPass);

// 출력
console.log("입장 가능 여부: " + allowed);
