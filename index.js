document.addEventListener('DOMContentLoaded', () => {
  const inputText = document.getElementById('inputText');
  const convertBtn = document.getElementById('convertBtn');
  const outputText = document.getElementById('outputText');

  convertBtn.addEventListener('click', () => {
    let text = inputText.value.trim();
    if (!text) return alert('문장을 입력해주세요!');

    let words = text.split(/\s+/);
    words = shuffleArray(words);

    let scrambledText = `(${words.join(' / ')})`;
    outputText.textContent = scrambledText;

    // 클립보드에 복사
    navigator.clipboard
      .writeText(scrambledText)
      .then(() => alert('결과가 복사되었습니다!'))
      .catch((err) => console.error('복사 실패:', err));
  });

  // 배열을 랜덤으로 섞는 함수
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
});
