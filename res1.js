const correctAnswers = {
    "page1-quiz-0": "1970",
    "page1-quiz-1": "45",
    "page1-quiz-2": "餅",
    "page1-quiz-3": "玄孫（孫の孫）",
    "page1-quiz-4": "三十分後に首つり、四十分後に火あぶり",
    "page1-quiz-5": "花火でオフィスが火事になった",
    "page1-quiz-6": "50円",
    "page1-quiz-7": "詐欺被害に遭う",
    "page1-quiz-8": "未来の国からはるばると",
    "page1-quiz-9": "スネ夫",
    "page2-quiz-0": "ハンディキャップ",
    "page2-quiz-1": "富士山",
    "page2-quiz-2": "インド",
    "page2-quiz-3": "狼男",
    "page2-quiz-4": "片岡",
    "page2-quiz-5": "公園のトイレになっていた",
    "page2-quiz-6": "11月3日",
    "page2-quiz-7": "ヒトマネロボット",
    "page2-quiz-8": "学生時代、漫画家を目指していた",
    "page2-quiz-9": "弟がいる",
  };
  
  // スコア計算
  const calculateScore = () => {
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
  
    for (const key in correctAnswers) {
        const userAnswer = localStorage.getItem(key); // ユーザーの回答を取得
        const correctAnswer = correctAnswers[key];
    
        if (userAnswer) {
          if (typeof correctAnswer === "string") {
            // 記述式の場合: 大小文字を無視し、余分な空白をトリムして比較
            if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
              score++;
            }
          } else {
            // 選択式の場合
            if (userAnswer === correctAnswer) {
              score++;
            }
          }
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
    window.location.href = "wdoraken.github.io"; // 最初のページ（または指定のページ）に戻る
  });
  
  // ページロード時に結果を表示
  document.addEventListener('DOMContentLoaded', showResult);
  
  
