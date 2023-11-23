const firstMusicPlayButton = document.querySelector<HTMLElement>("main > section > section > div > div > button"); // 「▶︎はじめから再生」ボタン
const numOfMusics = document.querySelector("ol")?.children.length;
const lastMusicTitle = document.querySelector<HTMLElement>(`ol > div:nth-child(${numOfMusics}) > div > div.ellipsis-text > p`)?.innerText;

const audioElm = document.querySelector("div > audio");
audioElm?.addEventListener("ended", () => {
  const currentMusicTitle = document.querySelector<HTMLElement>("div > section > div > div > div > div > div > p")?.innerText;
  if (currentMusicTitle === lastMusicTitle) {
    firstMusicPlayButton?.click(); 
  }
});