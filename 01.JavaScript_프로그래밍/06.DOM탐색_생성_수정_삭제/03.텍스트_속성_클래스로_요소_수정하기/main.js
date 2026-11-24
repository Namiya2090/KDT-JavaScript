// id 속성 값이 notice인 요소
const selectionNotice = document.querySelector("#notice");

// class 속성 값이 item인 요소들
const selectionItems = document.querySelectorAll(".item");
// class 속성 값이 unknown인 요소
const selectionMissing = document.querySelector(".unknown");

// selectionNotice 요소 안의 h2 요소의 텍스트를 출력(둘 중 하나라도 없으면 실행 X)
if (selectionNotice) {
  const selectionHeading = selectionNotice.querySelector("h2");
  if (selectionHeading) console.log(selectionHeading.textContent);
}

// selectionitems 요소들의 개수 출력
console.log(selectionItems.length);
// selectionItems 요소들의 텍스트의 앞뒤 공백을 제거해 모두 출력
selectionItems.forEach((selectionItem) => {
  console.log(selectionItem.textContent.trim());
});

// selectionMissing 요소 출력
console.log(selectionMissing);

// --------------------

// id 속성 값이 products인 요소
const selectionProducts = document.querySelector("#products");

// selectionProducts 요소 안의 h2 요소를 출력(둘 중 하나라도 없으면 실행 X)
if (selectionProducts) {
  const selectionProductTitle = selectionProducts.querySelector("h2");
  if (selectionProductTitle) console.log(selectionProductTitle.textContent);
}

// selectionProducts 요소 안의 class 속성 값이 sold-out인 요소들의 개수를 출력
// soldOutItems NodeList에 값이 하나라도 있으면 첫 번째 값의 텍스트의 앞뒤 공백을 제거해 출력
if (selectionProducts) {
  const soldOutItems = selectionProducts.querySelectorAll(".sold-out");
  console.log(soldOutItems.length);
  if (soldOutItems.length > 0) console.log(soldOutItems[0].textContent.trim());
}

// --------------------

// class 속성 값이 status인 요소
const modStatus = document.querySelector(".status");
// id 속성 값이 submit-button인 요소
const modButton = document.querySelector("#submit-button");

if (modStatus) {
  // modStatus 요소의 텍스트의 앞뒤 공백을 제거해 출력
  // modStatus 요소의 텍스트를 "제출 완료"로 변경
  // modStatus 요소의 텍스트를 출력
  console.log(modStatus.textContent.trim());
  modStatus.textContent = "제출 완료";
  console.log(modStatus.textContent);

  // modStatus 요소의 속성 값을 변경 및 삭제 후 출력해보기
  console.log(modStatus.getAttribute("data-state"));
  modStatus.setAttribute("data-state", "complete");
  console.log(modStatus.getAttribute("data-state"));
  modStatus.removeAttribute("data-state");
  console.log(modStatus.getAttribute("data-state"));

  // modStatus 요소의 클래스 제거 및 추가
  modStatus.classList.remove("is-pending");
  modStatus.classList.add("is-complete");
  console.log(modStatus.getAttribute("class"));

  // modStatus 요소의 클래스 전환
  modStatus.classList.toggle("is-important");
  console.log(modStatus.getAttribute("class"));
  modStatus.classList.toggle("is-important");
  console.log(modStatus.getAttribute("class"));
}

// disabled 속성을 제거해 버튼 활성화하기
if (modButton) {
  modButton.setAttribute("disabled", "false");
  console.log(modButton.getAttribute("disabled"));
  modButton.removeAttribute("disabled");
  console.log(modButton.getAttribute("disabled"));
}
