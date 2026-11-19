const profile = { name: "보리", level: 1 };

// 닉네임 추가, 레벨 수정, 닉네임 삭제를 순서대로 작성
profile.nickname = "bory";
profile.level = 2;
console.log(profile);
delete profile.nickname;

// 삭제한 속성이 profile 객체에 포함되었는지 출력
console.log("nickname" in profile);

// profile 객체의 모든 키를 출력
console.log("Profile keys: " + Object.keys(profile));
