// TODO: TIL 폼 등록 기능을 구현하세요
// 1. 폼 요소와 목록 요소를 querySelector로 선택합니다.
// 2. 폼의 submit 이벤트를 감지하여 새 TIL 항목을 목록에 추가합니다.
const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

const savedTils = JSON.parse(localStorage.getItem("tils") || "[]");
savedTils.forEach(til => addTilItem(til.date, til.title, til.content));


tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const date = document.querySelector("#til-date").value;
  const title = document.querySelector("#til-title").value;
  const content = document.querySelector("#til-content").value;

  // 데이터 저장
  savedTils.push({ date, title, content });
  localStorage.setItem("tils", JSON.stringify(savedTils));

  // 화면 추가 및 리셋
  addTilItem(date, title, content);
  tilForm.reset();
});

function addTilItem(date, title, content) {
  const tilItem = document.createElement("article");
  tilItem.className = "til-item";

  const timeEl = document.createElement("time");
  timeEl.textContent = date;

  const titleEl = document.createElement("h3");
  titleEl.textContent = title;

  const contentEl = document.createElement("p");
  contentEl.textContent = content;

  tilItem.appendChild(timeEl);
  tilItem.appendChild(titleEl);
  tilItem.appendChild(contentEl);

  tilList.appendChild(tilItem);
}
