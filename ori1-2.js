const pagePrefix = "page2"; // 1ページ目の識別子

document.getElementById('next-button').addEventListener('click', () => {
    window.location.href = "res1.html"; // 特定のページに進む
  });
  
  
  document.getElementById('prev-button').addEventListener('click', () => {
    window.location.href = "ori1-1.html"; // 特定のページに戻る
  });
  
  const quiz = [
      {
        type: 'text',
        question: '①【ゴルフ】について、のび助はゴルフの大会で優勝したことを自慢したが、そのエピソードは何というタイトル（ひみつ道具の名前がタイトル）の話に描かれているか。',
        correct:'ハンディキャップ'
      }, 
      {
        type: 'choice',
        question: '②【あやとり】について、のび太のあやとりの作品名として誤っているものを答えよ。',
        answers: [ '銀河', '富士山','ほうき星', '踊るチョウ'],
        correct: '富士山'
      },
      {
        type: 'choice',
        question: '③【弟】について、のび助の弟の一人であるのび郎は、日本とある国を行き来している。その国はどこか。',
        answers: [ 'ドイツ', 'インド','エジプト','カナダ'],
        correct: 'インド'
      },
      {
        type: 'choice',
        question: '④【のび太を厳しく叱ったり】について、のび太は自身の作文で、ママの怒った時の顔は何より恐ろしいと語ったか。',
        answers: [ 'ヤマンバ', '狼男','鬼ばば','魔女'],
        correct: '狼男'
      },
      {
        type: 'text',
        question: '⑤【約20年前】について、玉子の旧姓を漢字で答えよ。',
      　correct: '片岡'
      },
      {
        type: 'choice',
        question: '⑥【タイムマシンを使用】について、現在野比家がある土地は未来ではどうなっていたか。',
        answers: [ '公園のトイレになっていた', '高層マンションが建っていた','空き家になっていた','ショッピングモールが建っていた'],
        correct: '公園のトイレになっていた'
      },
      {
        type: 'choice',
        question: '空欄Aに入る日付を答えよ。',
        answers: [ '8月7日', '9月3日','11月3日','11月22日'],
        correct: '11月3日'
      },
      {
        type: 'text',
        question: '空欄Bに入るひみつ道具の名前を答えよ。',
        correct: 'ヒトマネロボット'
      },
      {
        type: 'choice',
        question: 'のび助について、誤っているものは次のうちどれか。',
        answers: [ '自動車免許を持っていない', 'タバコが好きである','ジャイアンツファンである','学生時代、漫画家を目指していた'],
        correct: '学生時代、漫画家を目指していた'
      },
      {
        type: 'choice',
        question: '玉子について、正しいものは次のうちどれか。',
        answers: [ '弟がいる', '貧乏ゆすりが癖','猫が好きである','実はお酒に強い'],
        correct: '弟がいる'
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
  
      if (q.type === 'choice') {
        // 選択式の場合
        q.answers.forEach(answer => {
          const label = document.createElement('label');
          label.classList.add('d-block');
          
          const input = document.createElement('input');
          input.type = 'radio';
          input.name = `quiz-${index}`;
          input.value = answer;
  
          // 保存された回答を復元
          const savedAnswer = localStorage.getItem(`${pagePrefix}-quiz-${index}`);
          if (savedAnswer === answer) {
            input.checked = true;
          }
  
          input.addEventListener('change', () => {
            localStorage.setItem(`${pagePrefix}-quiz-${index}`, input.value);
          });
  
          label.appendChild(input);
          label.appendChild(document.createTextNode(answer));
          questionDiv.appendChild(label);
        });
      } else if (q.type === 'text') {
        // 記述式の場合
        const textInput = document.createElement('textarea');
        textInput.name = `quiz-${index}`;
        textInput.rows = 3;
        textInput.style.width = '100%';
  
        // 保存された回答を復元
        const savedAnswer = localStorage.getItem(`${pagePrefix}-quiz-${index}`);
        if (savedAnswer) {
          textInput.value = savedAnswer;
        }
  
        textInput.addEventListener('input', () => {
          localStorage.setItem(`${pagePrefix}-quiz-${index}`, textInput.value);
        });
  
        questionDiv.appendChild(textInput);
      }
  
      $quizContainer.appendChild(questionDiv);
    });
  };


  // 初期化
  document.addEventListener('DOMContentLoaded', initQuiz);