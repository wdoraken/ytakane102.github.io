const pagePrefix = "page2"; // 1ページ目の識別子

document.getElementById('next-button').addEventListener('click', () => {
    window.location.href = "test3.html"; // 特定のページに進む
  });
  
  
  document.getElementById('prev-button').addEventListener('click', () => {
    window.location.href = "test.html"; // 特定のページに戻る
  });
  
  const quiz = [
      {
        question: 'のび太のお母さんはペットが嫌いである。',
        answers: [ '正', '誤'],
        correct: '正'
      }, 
      {
        question: '二十世紀のおとのさま」は、のび太がおとのさまになる話である。',
        answers: [ '正', '誤'],
        correct: '誤'
      },
      {
        question: 'ドラえもんの座高は129.3cmである。',
        answers: [ '正', '誤'],
        correct: '誤'
      },
      {
        question: 'ドラミちゃんは、ひげが生えている。',
        answers: [ '正', '誤'],
        correct: '誤'
      },
      {
        question: 'スモールライトの効力には時間制限がある。',
        answers: [ '正', '誤'],
      　correct: '正'
      },
    ];
  
    const $doc = document;
  const $quizContainer = $doc.getElementById('quiz-container');
  const $submitQuiz = $doc.getElementById('submit-quiz');
  const $quizResult = $doc.getElementById('quiz-result');

  const initQuiz = () => {
    quiz.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('mb-4');
      
      // 質問文を追加
      const questionTitle = document.createElement('p');
      questionTitle.textContent = `${index + 1}. ${q.question}`;
      questionDiv.appendChild(questionTitle);
      
      // 選択肢を追加
      q.answers.forEach(answer => {
        const label = document.createElement('label');
        label.classList.add('d-block');
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `quiz-${index}`; // 質問ごとに一意のname属性
        input.value = answer;
  
        // 回答の保存イベントリスナーを設定
        input.addEventListener('change', () => {
          const questionId = input.name; // 例: quiz-1
          localStorage.setItem(`${pagePrefix}-${questionId}`, input.value); // 回答を保存
        });
  
        // 保存された回答をチェック
        const savedAnswer = localStorage.getItem(`${pagePrefix}-quiz-${index}`);
        if (savedAnswer === answer) {
          input.checked = true; // 選択状態を復元
        }
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(answer));
        questionDiv.appendChild(label);
      });
      
      $quizContainer.appendChild(questionDiv);
    });
  };
  
  // 初期化
  document.addEventListener('DOMContentLoaded', initQuiz);