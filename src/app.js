const countries = [
["🇦🇫","Afghanistan","Kabul"],["🇦🇱","Albania","Tirana"],["🇩🇿","Algeria","Algiers"],
["🇦🇩","Andorra","Andorra la Vella"],["🇦🇴","Angola","Luanda"],["🇦🇬","Antigua and Barbuda","Saint John's"],
["🇦🇷","Argentina","Buenos Aires"],["🇦🇲","Armenia","Yerevan"],["🇦🇺","Australia","Canberra"],
["🇦🇹","Austria","Vienna"],["🇦🇿","Azerbaijan","Baku"],["🇧🇸","Bahamas","Nassau"],
["🇧🇭","Bahrain","Manama"],["🇧🇩","Bangladesh","Dhaka"],["🇧🇧","Barbados","Bridgetown"],
["🇧🇾","Belarus","Minsk"],["🇧🇪","Belgium","Brussels"],["🇧🇿","Belize","Belmopan"],
["🇧🇯","Benin","Porto-Novo"],["🇧🇹","Bhutan","Thimphu"],["🇧🇴","Bolivia","Sucre"],
["🇧🇦","Bosnia and Herzegovina","Sarajevo"],["🇧🇼","Botswana","Gaborone"],["🇧🇷","Brazil","Brasília"],
["🇧🇳","Brunei","Bandar Seri Begawan"],["🇧🇬","Bulgaria","Sofia"],["🇧🇫","Burkina Faso","Ouagadougou"],
["🇧🇮","Burundi","Gitega"],["🇨🇻","Cabo Verde","Praia"],["🇰🇭","Cambodia","Phnom Penh"],
["🇨🇲","Cameroon","Yaoundé"],["🇨🇦","Canada","Ottawa"],["🇨🇫","Central African Republic","Bangui"],
["🇹🇩","Chad","N'Djamena"],["🇨🇱","Chile","Santiago"],["🇨🇳","China","Beijing"],
["🇨🇴","Colombia","Bogotá"],["🇰🇲","Comoros","Moroni"],["🇨🇬","Congo","Brazzaville"],
["🇨🇷","Costa Rica","San José"],["🇨🇮","Côte d'Ivoire","Yamoussoukro"],["🇭🇷","Croatia","Zagreb"],
["🇨🇺","Cuba","Havana"],["🇨🇾","Cyprus","Nicosia"],["🇨🇿","Czechia","Prague"],
["🇩🇰","Denmark","Copenhagen"],["🇩🇯","Djibouti","Djibouti"],["🇩🇲","Dominica","Roseau"],
["🇩🇴","Dominican Republic","Santo Domingo"],["🇪🇨","Ecuador","Quito"],["🇪🇬","Egypt","Cairo"],
["🇸🇻","El Salvador","San Salvador"],["🇬🇶","Equatorial Guinea","Malabo"],["🇪🇷","Eritrea","Asmara"],
["🇪🇪","Estonia","Tallinn"],["🇸🇿","Eswatini","Mbabane"],["🇪🇹","Ethiopia","Addis Ababa"],
["🇫🇯","Fiji","Suva"],["🇫🇮","Finland","Helsinki"],["🇫🇷","France","Paris"],
["🇬🇦","Gabon","Libreville"],["🇬🇲","Gambia","Banjul"],["🇬🇪","Georgia","Tbilisi"],
["🇩🇪","Germany","Berlin"],["🇬🇭","Ghana","Accra"],["🇬🇷","Greece","Athens"],
["🇬🇩","Grenada","St. George's"],["🇬🇹","Guatemala","Guatemala City"],["🇬🇳","Guinea","Conakry"],
["🇬🇼","Guinea-Bissau","Bissau"],["🇬🇾","Guyana","Georgetown"],["🇭🇹","Haiti","Port-au-Prince"],
["🇭🇳","Honduras","Tegucigalpa"],["🇭🇺","Hungary","Budapest"],["🇮🇸","Iceland","Reykjavík"],
["🇮🇳","India","New Delhi"],["🇮🇩","Indonesia","Jakarta"],["🇮🇷","Iran","Tehran"],
["🇮🇶","Iraq","Baghdad"],["🇮🇪","Ireland","Dublin"],["🇮🇱","Israel","Jerusalem"],
["🇮🇹","Italy","Rome"],["🇯🇲","Jamaica","Kingston"],["🇯🇵","Japan","Tokyo"],
["🇯🇴","Jordan","Amman"],["🇰🇿","Kazakhstan","Astana"],["🇰🇪","Kenya","Nairobi"],
["🇰🇮","Kiribati","South Tarawa"],["🇰🇼","Kuwait","Kuwait City"],["🇰🇬","Kyrgyzstan","Bishkek"],
["🇱🇦","Laos","Vientiane"],["🇱🇻","Latvia","Riga"],["🇱🇧","Lebanon","Beirut"],
["🇱🇸","Lesotho","Maseru"],["🇱🇷","Liberia","Monrovia"],["🇱🇾","Libya","Tripoli"],
["🇱🇮","Liechtenstein","Vaduz"],["🇱🇹","Lithuania","Vilnius"],["🇱🇺","Luxembourg","Luxembourg"],
["🇲🇬","Madagascar","Antananarivo"],["🇲🇼","Malawi","Lilongwe"],["🇲🇾","Malaysia","Kuala Lumpur"],
["🇲🇻","Maldives","Malé"],["🇲🇱","Mali","Bamako"],["🇲🇹","Malta","Valletta"],
["🇲🇭","Marshall Islands","Majuro"],["🇲🇷","Mauritania","Nouakchott"],["🇲🇺","Mauritius","Port Louis"],
["🇲🇽","Mexico","Mexico City"],["🇫🇲","Micronesia","Palikir"],["🇲🇩","Moldova","Chișinău"],
["🇲🇨","Monaco","Monaco"],["🇲🇳","Mongolia","Ulaanbaatar"],["🇲🇪","Montenegro","Podgorica"],
["🇲🇦","Morocco","Rabat"],["🇲🇿","Mozambique","Maputo"],["🇲🇲","Myanmar","Naypyidaw"],
["🇳🇦","Namibia","Windhoek"],["🇳🇷","Nauru","Yaren"],["🇳🇵","Nepal","Kathmandu"],
["🇳🇱","Netherlands","Amsterdam"],["🇳🇿","New Zealand","Wellington"],["🇳🇮","Nicaragua","Managua"],
["🇳🇪","Niger","Niamey"],["🇳🇬","Nigeria","Abuja"],["🇰🇵","North Korea","Pyongyang"],
["🇲🇰","North Macedonia","Skopje"],["🇳🇴","Norway","Oslo"],["🇴🇲","Oman","Muscat"],
["🇵🇰","Pakistan","Islamabad"],["🇵🇼","Palau","Ngerulmud"],["🇵🇦","Panama","Panama City"],
["🇵🇬","Papua New Guinea","Port Moresby"],["🇵🇾","Paraguay","Asunción"],["🇵🇪","Peru","Lima"],
["🇵🇭","Philippines","Manila"],["🇵🇱","Poland","Warsaw"],["🇵🇹","Portugal","Lisbon"],
["🇶🇦","Qatar","Doha"],["🇷🇴","Romania","Bucharest"],["🇷🇺","Russia","Moscow"],
["🇷🇼","Rwanda","Kigali"],["🇰🇳","Saint Kitts and Nevis","Basseterre"],["🇱🇨","Saint Lucia","Castries"],
["🇻🇨","Saint Vincent and the Grenadines","Kingstown"],["🇼🇸","Samoa","Apia"],["🇸🇲","San Marino","San Marino"],
["🇸🇹","São Tomé and Príncipe","São Tomé"],["🇸🇦","Saudi Arabia","Riyadh"],["🇸🇳","Senegal","Dakar"],
["🇷🇸","Serbia","Belgrade"],["🇸🇨","Seychelles","Victoria"],["🇸🇱","Sierra Leone","Freetown"],
["🇸🇬","Singapore","Singapore"],["🇸🇰","Slovakia","Bratislava"],["🇸🇮","Slovenia","Ljubljana"],
["🇸🇧","Solomon Islands","Honiara"],["🇸🇴","Somalia","Mogadishu"],["🇿🇦","South Africa","Pretoria"],
["🇰🇷","South Korea","Seoul"],["🇸🇸","South Sudan","Juba"],["🇪🇸","Spain","Madrid"],
["🇱🇰","Sri Lanka","Sri Jayawardenepura Kotte"],["🇸🇩","Sudan","Khartoum"],["🇸🇷","Suriname","Paramaribo"],
["🇸🇪","Sweden","Stockholm"],["🇨🇭","Switzerland","Bern"],["🇸🇾","Syria","Damascus"],
["🇹🇯","Tajikistan","Dushanbe"],["🇹🇿","Tanzania","Dodoma"],["🇹🇭","Thailand","Bangkok"],
["🇹🇱","Timor-Leste","Dili"],["🇹🇬","Togo","Lomé"],["🇹🇴","Tonga","Nuku'alofa"],
["🇹🇹","Trinidad and Tobago","Port of Spain"],["🇹🇳","Tunisia","Tunis"],["🇹🇷","Türkiye","Ankara"],
["🇹🇲","Turkmenistan","Ashgabat"],["🇹🇻","Tuvalu","Funafuti"],["🇺🇬","Uganda","Kampala"],
["🇺🇦","Ukraine","Kyiv"],["🇦🇪","United Arab Emirates","Abu Dhabi"],["🇬🇧","United Kingdom","London"],
["🇺🇸","United States","Washington, D.C."],["🇺🇾","Uruguay","Montevideo"],["🇺🇿","Uzbekistan","Tashkent"],
["🇻🇺","Vanuatu","Port Vila"],["🇻🇦","Vatican City","Vatican City"],["🇻🇪","Venezuela","Caracas"],
["🇻🇳","Vietnam","Hanoi"],["🇾🇪","Yemen","Sana'a"],["🇿🇲","Zambia","Lusaka"],["🇿🇼","Zimbabwe","Harare"]
];

let quizPool = [];
let quizIndex = 0;
let score = 0;
let lives = 3;
let answered = false;
let learningIndex = 0;

const $ = id => document.getElementById(id);

function flagCode(flag) {
  const chars = [...flag].filter(c => c.codePointAt(0) >= 0x1F1E6 && c.codePointAt(0) <= 0x1F1FF);
  return chars.map(c => String.fromCharCode(c.codePointAt(0) - 0x1F1E6 + 65)).join('').toLowerCase();
}

function flagImg(flag, name, cls='flag-img') {
  const code = flagCode(flag);
  return `<img class="${cls}" src="https://flagcdn.com/w80/${code}.png" alt="${name} flag" loading="lazy">`;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
  if (id === 'learn') renderCountries();
}

function renderCountries() {
  const q = ($('search').value || '').trim().toLowerCase();

  $('countries').innerHTML = countries
    .map((c, i) => ({ c, i }))
    .filter(item => item.c[1].toLowerCase().includes(q))
    .map(item => `
      <button type="button"
              class="country-btn"
              data-country-index="${item.i}"
              aria-label="Learn about ${item.c[1]}">
        ${flagImg(item.c[0], item.c[1])}
        <span class="country-name">${item.c[1]}</span>
      </button>
    `).join('');
}

function bindCountryButtons() {
  const container = $('countries');
  container.onclick = function(event) {
    const button = event.target.closest('.country-btn');
    if (!button || !container.contains(button)) return;

    event.preventDefault();
    event.stopPropagation();

    const index = Number(button.getAttribute('data-country-index'));
    if (Number.isInteger(index) && countries[index]) {
      openCountryModal(index, true);
    }
  };
}

function openCountryModal(i, autoSpeak = false) {
  stopSpeaking();
  learningIndex = Math.max(0, Math.min(i, countries.length - 1));
  renderCountryModal(false);
}

function renderCountryModal(autoSpeak = false) {
  const c = countries[learningIndex];
  $('modalFlag').innerHTML = flagImg(c[0], c[1], 'modal-flag-img');
  $('modalCountryName').textContent = c[1];
  $('modalCapital').textContent = '🏛️ ' + c[2];
  $('modalCount').textContent = `Country ${learningIndex + 1} of ${countries.length}`;

  $('modalPrev').disabled = learningIndex === 0;
  $('modalNext').disabled = learningIndex === countries.length - 1;

  $('countryModal').classList.add('show');
  $('countryModal').setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  if (autoSpeak) speakCountry(c);
}

function closeCountryModal() {
  $('countryModal').classList.remove('show');
  $('countryModal').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function nextModalCountry() {
  stopSpeaking();
  if (learningIndex < countries.length - 1) {
    learningIndex++;
    renderCountryModal(false);
  }
}

function previousModalCountry() {
  stopSpeaking();
  if (learningIndex > 0) {
    learningIndex--;
    renderCountryModal(false);
  }
}

function showCountry(i, autoSpeak = true) {
  learningIndex = Math.max(0, Math.min(i, countries.length - 1));
  renderLearningCountry(autoSpeak);
}

function renderLearningCountry(autoSpeak = false) {
  const c = countries[learningIndex];
  const atFirst = learningIndex === 0;
  const atLast = learningIndex === countries.length - 1;

  $('countryCard').innerHTML = `
    <button type="button" class="flag-click-card" id="flagClickCard" title="Click the flag to hear the country and capital">
      ${flagImg(c[0],c[1],'bigflag-img')}
      <span class="flag-hint">👆 Click the flag</span>
    </button>

    <h2>${c[1]}</h2>
    <p class="small">Capital City</p>
    <div class="capital">🏛️ ${c[2]}</div>

    <div class="learning-actions">
      <button type="button" class="nav-btn" id="prevCountry" ${atFirst ? 'disabled' : ''}>← Previous</button>
      <button type="button" class="listen" id="listenCountry">🔊 Listen</button>
      <button type="button" class="nav-btn" id="nextCountry" ${atLast ? 'disabled' : ''}>Next →</button>
    </div>

    <div class="learn-count">Country ${learningIndex + 1} of ${countries.length}</div>`;

  $('prevCountry').addEventListener('click', () => {
    if (learningIndex > 0) {
      learningIndex--;
      renderLearningCountry(true);
    }
  });

  $('nextCountry').addEventListener('click', () => {
    if (learningIndex < countries.length - 1) {
      learningIndex++;
      renderLearningCountry(true);
    }
  });

  $('listenCountry').addEventListener('click', () => speakCountry(c));

  $('flagClickCard').addEventListener('click', () => {
    speakCountry(c);
    celebrate();
  });

  if (autoSpeak) speakCountry(c);
}

function speakCountry(c) {
  speakText(`${c[1]}. The capital is ${c[2]}.`);
  $('feedback')?.textContent;
}

function startQuiz() {
  quizPool = [...countries].sort(() => Math.random() - 0.5).slice(0,10);
  quizIndex = 0;
  score = 0;
  lives = 3;
  answered = false;
  $('nextBtn').textContent = 'Next ➜';
  $('nextBtn').onclick = nextQuestion;
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const c = quizPool[quizIndex];

  $('score').textContent = score;
  $('lives').textContent = lives;
  $('questionNumber').textContent = `Question ${quizIndex+1} / 10`;
  $('levelLabel').textContent = quizIndex < 4 ? '🌟 Easy' : quizIndex < 8 ? '🚀 Medium' : '🏆 Challenge';
  $('progressBar').style.width = ((quizIndex) / quizPool.length * 100) + '%';
  $('quizFlag').innerHTML = flagImg(c[0], c[1], 'quiz-flag-img');
  $('questionCountry').textContent = c[1];
  $('feedback').textContent = '';
  $('nextBtn').classList.add('hidden');

  let opts = [c[2]];
  while (opts.length < 4) {
    const x = countries[Math.floor(Math.random() * countries.length)][2];
    if (!opts.includes(x)) opts.push(x);
  }
  opts.sort(() => Math.random() - 0.5);

  $('options').innerHTML = opts.map((o,i) =>
    `<button type="button" class="option" data-answer="${encodeURIComponent(o)}" data-correct="${encodeURIComponent(c[2])}">
      <span class="letter">${String.fromCharCode(65+i)}</span>
      <span>${o}</span>
    </button>`
  ).join('');

  document.querySelectorAll('#options .option').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = decodeURIComponent(btn.dataset.answer);
      const correct = decodeURIComponent(btn.dataset.correct);
      answer(btn, selected, correct);
    });
  });
}

function answer(btn, selected, correct) {
  if (answered) return;
  answered = true;

  document.querySelectorAll('#options .option').forEach(b => {
    b.disabled = true;
    b.style.pointerEvents = 'none';
  });

  if (selected === correct) {
    score++;
    btn.classList.add('correct');
    $('feedback').textContent = '🎉 Correct! +1 ⭐ Great job!';
    celebrate();
    speakText('Correct! Great job!');
  } else {
    lives--;
    btn.classList.add('wrong');
    document.querySelectorAll('#options .option').forEach(b => {
      if (decodeURIComponent(b.dataset.answer) === correct) b.classList.add('correct');
    });
    $('feedback').textContent = `😊 Nice try! Correct answer: ${correct}`;
    speakText(`Nice try. The correct answer is ${correct}.`);
  }

  $('score').textContent = score;
  $('lives').textContent = lives;
  $('nextBtn').classList.remove('hidden');
}

function nextQuestion() {
  if (quizIndex >= quizPool.length - 1 || lives <= 0) {
    finishQuiz();
    return;
  }
  quizIndex++;
  renderQuestion();
}

function finishQuiz() {
  const best = Number(localStorage.getItem('abcdBestScore') || 0);
  if (score > best) localStorage.setItem('abcdBestScore', score);
  $('bestScore').textContent = Math.max(score,best);
  $('finalScore').textContent = score;
  $('stars').textContent = score >= 9 ? '⭐⭐⭐' : score >= 6 ? '⭐⭐' : '⭐';
  $('resultMessage').textContent =
    score >= 9 ? '🌟 Amazing! You are a Country Champion!' :
    score >= 6 ? '👏 Great work! Keep exploring!' :
    '💪 Good try! Play again and learn more!';
  showScreen('result');
}

let indianVoice = null;
let voicesReady = false;

function loadIndianVoice() {
  if (!('speechSynthesis' in window)) return;

  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return;

  voicesReady = true;

  indianVoice =
    voices.find(v => (v.lang || '').toLowerCase() === 'en-in') ||
    voices.find(v => (v.lang || '').toLowerCase().startsWith('en-in')) ||
    voices.find(v => /india|indian/i.test(v.name || '')) ||
    voices.find(v => (v.lang || '').toLowerCase() === 'en-gb') ||
    voices.find(v => (v.lang || '').toLowerCase().startsWith('en-')) ||
    voices[0];

  console.log('ABCD voice:', indianVoice?.name, indianVoice?.lang);
}

function stopSpeaking() {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  window.speechSynthesis.resume();
}

function speakText(text) {
  if (!('speechSynthesis' in window)) {
    alert('Your browser does not support voice. Please use Microsoft Edge or Chrome.');
    return;
  }

  stopSpeaking();
  loadIndianVoice();

  const utterance = new SpeechSynthesisUtterance(String(text));
  utterance.rate = 0.78;
  utterance.pitch = 1.05;
  utterance.volume = 1;
  utterance.lang = 'en-IN';

  if (indianVoice) {
    utterance.voice = indianVoice;
    utterance.lang = indianVoice.lang || 'en-IN';
  }

  utterance.onstart = () => console.log('ABCD voice started');
  utterance.onend = () => console.log('ABCD voice ended');
  utterance.onerror = (e) => {
    console.error('ABCD voice error:', e.error);

    // Retry once with the browser's default voice if the selected
    // Indian/English voice cannot be played.
    if (e.error !== 'canceled' && e.error !== 'interrupted') {
      window.speechSynthesis.cancel();
      const retry = new SpeechSynthesisUtterance(String(text));
      retry.lang = 'en-IN';
      retry.rate = 0.78;
      retry.pitch = 1.05;
      retry.volume = 1;
      window.speechSynthesis.speak(retry);
    }
  };

  window.speechSynthesis.speak(utterance);
}

if ('speechSynthesis' in window) {
  loadIndianVoice();
  window.speechSynthesis.onvoiceschanged = loadIndianVoice;
}
function speakQuestion() {
  if (!quizPool.length) return;
  const c = quizPool[quizIndex];
  speakText(`What is the capital of ${c[1]}?`);
}

function celebrate() {
  const symbols = ['⭐','🎉','✨','🌟','🎈'];
  for (let i=0;i<18;i++) {
    const el=document.createElement('div');
    el.className='confetti';
    el.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left=Math.random()*100+'vw';
    el.style.animationDelay=Math.random()*0.35+'s';
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),1800);
  }
}

$('bestScore').textContent = localStorage.getItem('abcdBestScore') || '0';
$('search').addEventListener('input', renderCountries);
bindCountryButtons();

$('countryModal').addEventListener('click', (event) => {
  const target = event.target;

  if (target.id === 'countryModalBackdrop') {
    closeCountryModal();
    return;
  }

  const closeBtn = target.closest('#closeCountryModal');
  if (closeBtn) {
    event.preventDefault();
    event.stopPropagation();
    closeCountryModal();
    return;
  }

  const nextBtn = target.closest('#modalNext');
  if (nextBtn && !nextBtn.disabled) {
    event.preventDefault();
    event.stopPropagation();
    nextModalCountry();
    return;
  }

  const prevBtn = target.closest('#modalPrev');
  if (prevBtn && !prevBtn.disabled) {
    event.preventDefault();
    event.stopPropagation();
    previousModalCountry();
    return;
  }

  const listenBtn = target.closest('#modalListen');
  if (listenBtn) {
    event.preventDefault();
    event.stopPropagation();
    speakCountry(countries[learningIndex]);
    return;
  }

  const testVoiceBtn = target.closest('#modalVoiceTest');
  if (testVoiceBtn) {
    event.preventDefault();
    event.stopPropagation();
    speakText('Hello! This is the ABCD Country Game voice. India is a beautiful country.');
    return;
  }

  const flagArea = target.closest('#modalFlag');
  if (flagArea) {
    event.preventDefault();
    event.stopPropagation();
    speakCountry(countries[learningIndex]);
    celebrate();
  }
});

document.addEventListener('keydown', (event) => {
  if (!$('countryModal').classList.contains('show')) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    closeCountryModal();
  }
  if (event.key === 'ArrowRight') nextModalCountry();
  if (event.key === 'ArrowLeft') previousModalCountry();
});

renderCountries();
