// 광고 가리기
(function hideDom() {
  arguments[0].forEach(dom => {
    if(dom){
      if(dom.length === undefined) dom.style.display="none";
      else dom.forEach(v => v.style.display="none");
    }
  });
})([
  document.querySelector(".google-auto-placed"),
  document.querySelectorAll(".thebook-section--center")[0],
  document.querySelectorAll(".mdl-layout__header-row")[1],
  document.querySelectorAll(".mdl-grid")[2],
  document.querySelectorAll(".mdl-grid")[5],
  document.querySelector(".google-auto-placed"),
  document.querySelectorAll(".thebook-vsp"),
  document.querySelectorAll('ins'),
]);

const url = document.location.href.split("/")[2]
if(url === "thebook.io") {
  const menu = document.querySelectorAll('.thebook-section--center')[3];
  // 메뉴 상위로 이동
  document.getElementById("thebook-main").insertAdjacentElement('afterbegin', menu);
  // 스타일 삽입
  const css = `
  #thebook-main > section:first-child{max-width: 100%; margin-right: 10%;}
  .mdl-layout-spacer{flex-grow: 0;}
  .gas > .mdl-grid.mdl-grid--no-spacing{justify-content: flex-end;}
  `
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
      style.styleSheet.cssText = css;
  } else {
      style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
}