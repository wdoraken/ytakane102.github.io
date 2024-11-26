// 正解データ（全20問）
const correctAnswers = {
    "page1-quiz-0": "藤子・F・不二雄",
    "page1-quiz-1": "四次元ポケット",
    "page1-quiz-2": "のび太の恐竜",
    "page1-quiz-3": "水田わさび",
    "page1-quiz-4": "のび太の地球交響楽",
    "page2-quiz-0": "正",
    "page2-quiz-1": "誤",
    "page2-quiz-2": "誤",
    "page2-quiz-3": "誤",
    "page2-quiz-4": "正",
    "page3-quiz-0": "ノンちゃん",
    "page3-quiz-1": "練馬区",
    "page3-quiz-2": "ドラえもんの日記帳",
    "page3-quiz-3": "イキアタリバッタリサイキンメーカー",
    "page3-quiz-4": "ジャイ子が描いたマンガ",
    "page3-quiz-5": "スネ夫",
    "page3-quiz-6": "ワニ皮のバッグ",
    "page3-quiz-7": "缶切り",
    "page3-quiz-8": "ジャイアン",
    "page3-quiz-9": "庭石"
  };
  
  // スコア計算
  const calculateScore = () => {
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
  
    for (const key in correctAnswers) {
      const userAnswer = localStorage.getItem(key); // 回答を取得
      if (userAnswer === correctAnswers[key]) {
        score++;
      }
    }
  
    return { score, totalQuestions };
  };

  // 画像を選択して表示
  　　const showImage = (score) => {
    　　const resultImage = document.getElementById('result-image');
    　　let imagePath = "";
      
        // スコアに応じた画像パスを設定
        if (score === 0) {
          imagePath = "zeroscore.jpg"; // 0点の場合
        } else if (score <= 5) {
          imagePath = "ahoka.jpeg"; // 1〜5点の場合
        } else if (score <= 10) {
          imagePath = "goodluck.jpg"; // 6〜10点の場合
        } else if (score <= 14) {
          imagePath = "yarune.jpg"; // 11〜14点の場合
        } else if (score <= 19) {
          imagePath = "great.jpg"; // 15〜19点の場合
        } else if (score === 20) {
          imagePath = "perfect.jpg"; // 20点の場合
        }
      
        // 画像を表示
        resultImage.innerHTML = `<img src="${imagePath}" alt="結果画像" style="max-width: 100%; height: auto;">`;
      };
  
  // 結果表示
  const showResult = () => {
    const { score, totalQuestions } = calculateScore();
    const resultText = document.getElementById('result-text');
    resultText.textContent = `あなたのスコアは ${score} / ${totalQuestions} 点です！`;

    // スコアに応じた画像を表示
  showImage(score);
  };

  

  

  // 「最初に戻る」ボタンの動作
  document.getElementById('retry-button').addEventListener('click', () => {
    localStorage.clear(); // 保存されたデータをクリア
    window.location.href = "ytkane102.github.io"; // 最初のページ（または指定のページ）に戻る
  });
  
  // ページロード時に結果を表示
  document.addEventListener('DOMContentLoaded', showResult);
  
  
