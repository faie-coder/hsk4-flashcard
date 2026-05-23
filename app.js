// ระบบจดจำคำที่จำยาก: {wordNumber: {views: count, flips: count, lastSeen: timestamp}}
let difficultWords=JSON.parse(localStorage.getItem('hsk4_difficult')||'{}');
let showDifficult=false;
let currentRange=null; // '1-300', '301-600', '601-900', '901-1200'

// Resolve topic for a vocabulary word
function resolveTopic(v){
  return topicMap[v.n]||null;
}

function updateFilterCounts(){
  const topicCounts={all:vocab.length};
  vocab.forEach(v=>{
    const t=resolveTopic(v);
    if(t){
      topicCounts[t]=(topicCounts[t]||0)+1;
    }
  });
  document.querySelectorAll('.filter-radio[data-filter="topic"]').forEach(label=>{
    const value=label.dataset.value;
    label.dataset.count=topicCounts[value]??0;
  });

  // Update compound counts
  const compoundCounts={all:vocab.length};
  COMPOUNDS.forEach(c=>{
    compoundCounts[c.key]=vocab.filter(v=>c.match(v)).length;
  });
  document.querySelectorAll('#compoundDropdown .compound-dropdown-item[data-key]').forEach(item=>{
    const key=item.dataset.key;
    item.dataset.count=compoundCounts[key]??0;
  });

  // Update radical counts
  const radicalCounts={all:vocab.length};
  RADICALS.forEach(r=>{
    radicalCounts[r.key]=vocab.filter(v=>r.match(v)).length;
  });
  document.querySelectorAll('#radicalDropdown .compound-dropdown-item[data-key]').forEach(item=>{
    const key=item.dataset.key;
    item.dataset.count=radicalCounts[key]??0;
  });
}

function syncFilterCheckedStyles(){
  document.querySelectorAll('.filter-radio').forEach(label=>{
    const input=label.querySelector('input[type="radio"]');
    if(input){
      label.classList.toggle('checked',input.checked);
    }
  });
}

function updateFilterBtnText(){
  const btnValue=document.getElementById('filterBtnValue');
  const filterBtn=document.getElementById('filterBtn');
  if(!btnValue)return;

  let text='หมวดหมู่';
  if(currentTopic!=='all'){
    text=topicNames[currentTopic];
  }
  btnValue.textContent=`(${text})`;

  if(filterBtn){
    filterBtn.classList.toggle('active',currentTopic!=='all');
  }
}

function updateRadicalBtnText(){
  const btnValue=document.getElementById('radicalBtnValue');
  const radicalBtn=document.getElementById('radicalBtn');
  if(!btnValue)return;

  if(radicalMode){
    const radical=RADICALS.find(r=>r.key===radicalMode);
    btnValue.textContent=radical?`(${radical.key})`:'';
  }else{
    btnValue.textContent='';
  }

  if(radicalBtn){
    radicalBtn.classList.toggle('active',radicalMode!==null);
  }
}

function toggleCompoundDropdown(){
  const dropdown=document.getElementById('compoundDropdown');
  const overlay=document.getElementById('compoundDropdownOverlay');
  if(!dropdown||!overlay)return;
  dropdown.classList.toggle('show');
  overlay.classList.toggle('show');
  if(dropdown.classList.contains('show')){
    dropdown.scrollTop=0;
  }
}

function setCompound(key,el){
  compoundMode=key;
  // Reset topic and radical filters
  currentTopic='all';
  radicalMode=null;
  page=1;
  learned.clear();

  const btnValue=document.getElementById('compoundBtnValue');
  const compoundBtn=document.getElementById('compoundBtn');
  if(btnValue){
    if(key){
      const compound=COMPOUNDS.find(c=>c.key===key);
      btnValue.textContent=`(${compound.key})`;
    }else{
      btnValue.textContent='';
    }
  }
  if(compoundBtn){
    compoundBtn.classList.toggle('active',key!==null);
  }

  document.querySelectorAll('#compoundDropdown .compound-dropdown-item').forEach(item=>{
    item.classList.remove('active');
  });
  if(el){
    el.classList.add('active');
  }

  // Reset topic sidebar
  syncRadioSelection('topic','all');
  updateFilterBtnText();

  // Reset radical button
  const radicalBtnValue=document.getElementById('radicalBtnValue');
  const radicalBtn=document.getElementById('radicalBtn');
  if(radicalBtnValue)radicalBtnValue.textContent='';
  if(radicalBtn)radicalBtn.classList.remove('active');
  document.querySelectorAll('#radicalDropdown .compound-dropdown-item').forEach(item=>item.classList.remove('active'));

  const dropdown=document.getElementById('compoundDropdown');
  const overlay=document.getElementById('compoundDropdownOverlay');
  if(dropdown){
    dropdown.classList.remove('show');
  }
  if(overlay){
    overlay.classList.remove('show');
  }

  render();
}

function toggleRadicalDropdown(){
  const dropdown=document.getElementById('radicalDropdown');
  const overlay=document.getElementById('radicalDropdownOverlay');
  if(!dropdown||!overlay)return;
  dropdown.classList.toggle('show');
  overlay.classList.toggle('show');
  if(dropdown.classList.contains('show')){
    dropdown.scrollTop=0;
  }
}

function setRadical(key,el){
  radicalMode=key;
  // Reset topic and compound filters
  currentTopic='all';
  compoundMode=null;
  page=1;
  learned.clear();

  const btnValue=document.getElementById('radicalBtnValue');
  const radicalBtn=document.getElementById('radicalBtn');
  if(btnValue){
    if(key){
      const radical=RADICALS.find(r=>r.key===key);
      btnValue.textContent=`(${radical.key})`;
    }else{
      btnValue.textContent='';
    }
  }
  if(radicalBtn){
    radicalBtn.classList.toggle('active',key!==null);
  }

  document.querySelectorAll('#radicalDropdown .compound-dropdown-item').forEach(item=>{
    item.classList.remove('active');
  });
  if(el){
    el.classList.add('active');
  }

  // Reset topic sidebar
  syncRadioSelection('topic','all');
  updateFilterBtnText();

  // Reset compound button
  const compoundBtnValue=document.getElementById('compoundBtnValue');
  const compoundBtn=document.getElementById('compoundBtn');
  if(compoundBtnValue)compoundBtnValue.textContent='';
  if(compoundBtn)compoundBtn.classList.remove('active');
  document.querySelectorAll('#compoundDropdown .compound-dropdown-item').forEach(item=>item.classList.remove('active'));

  const dropdown=document.getElementById('radicalDropdown');
  const overlay=document.getElementById('radicalDropdownOverlay');
  if(dropdown){
    dropdown.classList.remove('show');
  }
  if(overlay){
    overlay.classList.remove('show');
  }

  render();
}

function toggleFilterSidebar(){
  const sidebar=document.getElementById('filterSidebar');
  const overlay=document.getElementById('filterSidebarOverlay');
  if(!sidebar||!overlay)return;
  sidebar.classList.toggle('show');
  overlay.classList.toggle('show');
  if(sidebar.classList.contains('show')){
    sidebar.scrollTop=0;
  }
  syncFilterCheckedStyles();
  updateFilterCounts();
}

function resetAllFilters(){
  practiceMode=false;
  showDifficult=false;
  currentTopic='all';
  compoundMode=null;
  radicalMode=null;
  page=1;
  learned.clear();
  syncRadioSelection('topic','all');
  updateFilterBtnText();

  const btnValue=document.getElementById('compoundBtnValue');
  const compoundBtn=document.getElementById('compoundBtn');
  if(btnValue)btnValue.textContent='';
  if(compoundBtn)compoundBtn.classList.remove('active');

  const radicalBtnValue=document.getElementById('radicalBtnValue');
  const radicalBtn=document.getElementById('radicalBtn');
  if(radicalBtnValue)radicalBtnValue.textContent='';
  if(radicalBtn)radicalBtn.classList.remove('active');

  document.querySelectorAll('.compound-dropdown-item').forEach(item=>{
    item.classList.remove('active');
  });

  render();
}

function showAllFlashcards(){
  practiceMode=false;
  showDifficult=false;
  currentTopic='all';
  currentRange=null;
  compoundMode=null;
  radicalMode=null;
  page=1;
  learned.clear();
  search='';
  
  // Hide character breakdown if showing
  if(typeof hideCharBreakdown === 'function') hideCharBreakdown();
  
  // Clear search input if exists
  const searchInput=document.getElementById('searchInput');
  if(searchInput)searchInput.value='';
  
  syncRadioSelection('topic','all');
  updateFilterBtnText();
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
  
  // Highlight the menu item
  document.querySelectorAll('.menu-item').forEach(m=>m.classList.remove('active'));
  event.currentTarget.classList.add('active');
  
  render();
  document.querySelector('.wrap').scrollIntoView({behavior:'smooth'});
}

function showRangeFlashcards(start,end){
  practiceMode=false;
  showDifficult=false;
  currentTopic='all';
  currentRange=`${start}-${end}`;
  compoundMode=null;
  radicalMode=null;
  page=1;
  learned.clear();
  search='';
  
  // Hide character breakdown if showing
  if(typeof hideCharBreakdown === 'function') hideCharBreakdown();
  
  // Clear search input if exists
  const searchInput=document.getElementById('searchInput');
  if(searchInput)searchInput.value='';
  
  syncRadioSelection('topic','all');
  updateFilterBtnText();
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
  
  // Close submenu if exists
  const submenu=document.getElementById('submenuFlashcards');
  if(submenu)submenu.classList.remove('show');
  
  // Highlight the menu item
  document.querySelectorAll('.menu-item').forEach(m=>m.classList.remove('active'));
  if(event&&event.currentTarget)event.currentTarget.classList.add('active');
  
  render();
  document.querySelector('.wrap').scrollIntoView({behavior:'smooth'});
}

function syncRadioSelection(name,value){
  document.querySelectorAll(`input[type="radio"][name="${name}"]`).forEach(r=>{
    r.checked=r.value===value;
  });
  syncFilterCheckedStyles();
}

function getFiltered(){
  if(practiceMode){
    return practiceWords;
  }
  if(showDifficult){
    const difficultNums=getDifficultWordNumbers();
    return vocab.filter(v=>difficultNums.includes(v.n));
  }
  return vocab.filter(v=>{
    const q=search.toLowerCase();
    const ms=!q||v.h.includes(q)||v.p.toLowerCase().includes(q)||v.m.toLowerCase().includes(q);
    const mt=currentTopic==="all"?true:resolveTopic(v)===currentTopic;
    let mc=true;
    if(compoundMode){
      const compound=COMPOUNDS.find(c=>c.key===compoundMode);
      if(compound){
        mc=compound.match(v);
      }
    }
    let mr=true;
    if(radicalMode){
      const radical=RADICALS.find(r=>r.key===radicalMode);
      if(radical){
        mr=radical.match(v);
      }
    }
    let mrng=true;
    if(currentRange){
      const [rStart,rEnd]=currentRange.split('-').map(Number);
      mrng=v.n>=rStart&&v.n<=rEnd;
    }
    return ms&&mt&&mc&&mr&&mrng;
  });
}

function updateStats(){
  const lc=[...learned].filter(n=>filtered.some(v=>v.n===n)).length;
  document.getElementById("memCount").textContent=`จำได้ ${lc} คำ`;
  document.getElementById("totalLearned").textContent=`(ทั้งหมด ${learned.size} คำ)`;
  document.getElementById("pfill").style.width=filtered.length?Math.round(lc/filtered.length*100)+"%":"0%";
}

// Helper function to parse example text
function parseExample(ex){
  if(!ex)return null;
  const parts=ex.split('<br>');
  if(parts.length>=3){
    return{
      zh:parts[0],
      pinyin:parts[1],
      th:parts[2].replace(/[()]/g,'')
    };
  }
  return null;
}

function render(){
  filtered=getFiltered();
  const dispCountEl=document.getElementById("dispCount");
  if(showDifficult){
    dispCountEl.innerHTML=`${filtered.length} คำ <button class="tab" style="margin-left:8px;padding:4px 12px;font-size:12px" onclick="clearAllDifficult()">Clear All</button>`;
  }else if(currentTopic!=="all"){
    dispCountEl.innerHTML=`${filtered.length} คำ <span style="color:var(--accent);margin-left:8px;font-size:12px">(${topicNames[currentTopic]})</span>`;
  }else if(currentRange){
    dispCountEl.innerHTML=`${filtered.length} คำ <span style="color:var(--accent);margin-left:8px;font-size:12px">(คำที่ ${currentRange})</span>`;
  }else{
    dispCountEl.textContent=filtered.length+" คำ";
  }
  const totalP=Math.ceil(filtered.length/PAGE);
  if(page>totalP)page=1;
  const slice=filtered.slice((page-1)*PAGE,page*PAGE);
  
  document.getElementById("grid").innerHTML=slice.map(v=>{
      const ex=parseExample(v.ex);
      return`
      <div class="card-wrapper">
        <div class="card${learned.has(v.n)?" flipped":""}" onclick="flip(${v.n})" data-n="${v.n}">
          <div class="card-face card-front">
            <span class="card-number">#${v.n}</span>
            <button class="learned-btn" style="top:8px;right:8px" onclick="event.stopPropagation();speakChinese('${v.h}')" title="ฟังเสียง">🔊</button>
            <button class="stroke-btn-small" style="top:8px;right:48px" onclick="event.stopPropagation();showStrokeOrder(${v.n})" title="ดูลำดับการลากเส้น">✍️</button>
            ${showDifficult?`<button class="learned-btn${learned.has(v.n)?' done':''}" style="top:8px;right:88px" onclick="event.stopPropagation();toggleLearned(${v.n})" title="ทำเครื่องหมายว่าจำได้">✓</button>`:''}
            <span class="hanzi">${v.h}</span>
            <span class="pinyin${showPinyin?'':' hidden'}">${v.p}</span>
            <span class="cat-label">${topicNames[resolveTopic(v)]||'-'}</span>
            <span class="flip-hint">คลิกเพื่อดูความหมาย</span>
          </div>
          <div class="card-face card-back">
            <span class="card-number">#${v.n}</span>
            <button class="stroke-btn-small" style="top:8px;right:8px" onclick="event.stopPropagation();showStrokeOrder(${v.n})" title="ดูลำดับการลากเส้น">✍️</button>
            <span class="meaning">${v.m}</span>
            ${ex?`
            <div class="back-label">ตัวอย่างประโยค</div>
            <div class="example-sentence">${ex.zh}</div>
            <div class="pinyin-light">${ex.pinyin}</div>
            <div class="meaning-light">${ex.th}</div>
            `:''}
          </div>
        </div>
      </div>`;
  }).join("");
  
  const pc=document.getElementById("pageCtrl");
  if(totalP<=1){pc.innerHTML="";return;}
  let btns=`<button class="page-btn" onclick="goPage(${page-1})" ${page<=1?"disabled":""}>◀</button>`;
  const start=Math.max(1,page-2),end=Math.min(totalP,page+2);
  if(start>1)btns+=`<button class="page-btn" onclick="goPage(1)">1</button>${start>2?'<span class="pinfo">…</span>':""}`;
  for(let i=start;i<=end;i++)btns+=`<button class="page-btn${i===page?" active":""}" onclick="goPage(${i})">${i}</button>`;
  if(end<totalP)btns+=`${end<totalP-1?'<span class="pinfo">…</span>':""}<button class="page-btn" onclick="goPage(${totalP})">${totalP}</button>`;
  btns+=`<button class="page-btn" onclick="goPage(${page+1})" ${page>=totalP?"disabled":""}>▶</button>`;
  btns+=`<span class="pinfo">${page}/${totalP} (${(page-1)*PAGE+1}–${Math.min(page*PAGE,filtered.length)})</span>`;
  pc.innerHTML=btns;
  updateStats();
}

function flip(n){
  // ติดตามการ flip
  if(!difficultWords[n]){
    difficultWords[n]={views:0,flips:0,lastSeen:Date.now()};
  }
  difficultWords[n].flips++;
  difficultWords[n].lastSeen=Date.now();
  
  if(learned.has(n)){
    learned.delete(n);
    // ถ้ากลับมาดูอีกครั้ง แสดงว่าจำยาก
    difficultWords[n].views++;
  }else{
    learned.add(n);
  }
  
  localStorage.setItem('hsk4_difficult',JSON.stringify(difficultWords));
  updateDifficultCount();
  
  const el=document.querySelector(`[data-n="${n}"]`);
  if(el)el.classList.toggle("flipped");
  updateStats();
}

function toggleLearned(n){
  if(learned.has(n)){
    learned.delete(n);
  }else{
    learned.add(n);
    // ถ้าอยู่ในหน้าคำจำยาก ให้ลบคำนี้ออกจากรายการคำจำยาก
    if(showDifficult && difficultWords[n]){
      delete difficultWords[n];
      localStorage.setItem('hsk4_difficult',JSON.stringify(difficultWords));
      updateDifficultCount();
    }
  }
  render();
  updateStats();
}

function goPage(p){
  filtered=getFiltered();
  const max=Math.ceil(filtered.length/PAGE);
  page=Math.max(1,Math.min(p,max));
  render();
  document.querySelector(".wrap").scrollIntoView({behavior:"smooth"});
}

function setTopic(topic,el){
  practiceMode=false;
  showDifficult=false;
  currentTopic=topic;
  // Reset compound and radical filters
  compoundMode=null;
  radicalMode=null;
  page=1;
  learned.clear();
  syncRadioSelection('topic',topic);
  updateFilterBtnText();
  // Reset compound button
  const compoundBtnValue=document.getElementById('compoundBtnValue');
  const compoundBtn=document.getElementById('compoundBtn');
  if(compoundBtnValue)compoundBtnValue.textContent='';
  if(compoundBtn)compoundBtn.classList.remove('active');
  document.querySelectorAll('#compoundDropdown .compound-dropdown-item').forEach(item=>item.classList.remove('active'));
  // Reset radical button
  const radicalBtnValue=document.getElementById('radicalBtnValue');
  const radicalBtn=document.getElementById('radicalBtn');
  if(radicalBtnValue)radicalBtnValue.textContent='';
  if(radicalBtn)radicalBtn.classList.remove('active');
  document.querySelectorAll('#radicalDropdown .compound-dropdown-item').forEach(item=>item.classList.remove('active'));
  toggleFilterSidebar();
  render();
}

function startPractice(el){
  practiceMode=true;
  showDifficult=false;
  page=1;
  
  // สุ่มคำศัพท์ 50 คำจากทั้งหมด
  const shuffled=[...vocab].sort(()=>Math.random()-0.5);
  practiceWords=shuffled.slice(0,50);
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
  
  // อัพเดท UI
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  document.querySelectorAll(".menu-item").forEach(m=>m.classList.remove("active"));
  if(el)el.classList.add("active");
  
  render();
}

function getDifficultWordNumbers(){
  // คำที่จำยาก: flips >= 3 หรือ views >= 2 (กลับมาดูซ้ำ)
  return Object.keys(difficultWords)
    .filter(n=>{
      const w=difficultWords[n];
      return w.flips>=3||w.views>=2;
    })
    .map(n=>parseInt(n))
    .sort((a,b)=>{
      // เรียงตามความยาก (flips + views มากที่สุดก่อน)
      const scoreA=(difficultWords[a].flips||0)+(difficultWords[a].views||0)*2;
      const scoreB=(difficultWords[b].flips||0)+(difficultWords[b].views||0)*2;
      return scoreB-scoreA;
    });
}

function updateDifficultCount(){
  const count=getDifficultWordNumbers().length;
  const el=document.getElementById('difficultCount');
  if(el)el.textContent=count;
}

function showDifficultWords(el){
  practiceMode=false;
  showDifficult=true;
  page=1;
  learned.clear(); // เคลียร์การ์ดที่ถูกพลิก
  
  // Hide character breakdown if showing
  if(typeof hideCharBreakdown === 'function') hideCharBreakdown();
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
  
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  document.querySelectorAll(".menu-item").forEach(m=>m.classList.remove("active"));
  if(el){
    el.classList.add("active");
  }else{
    event.currentTarget.classList.add("active");
  }
  
  render();
}

function startWritingPracticeDifficult(){
  const difficultNums=getDifficultWordNumbers();
  if(difficultNums.length===0){
    alert('ยังไม่มีคำที่จำยาก');
    return;
  }
  const words=vocab.filter(v=>difficultNums.includes(v.n));
  writingWords=[...words].sort(()=>Math.random()-0.5).slice(0,10);
  writingIndex=0;
  writingScore=0;
  writingAnswers=[];
  document.getElementById('writingTitle').textContent=`✍️ แบบฝึกหัดเขียน (คำที่จำยาก)`;
  document.getElementById('writingTotal').textContent=writingWords.length;
  document.getElementById('writingModal').classList.add('show');
  showWritingQuestion();
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
}

function removeDifficult(n){
  if(confirm('ลบคำนี้ออกจากรายการคำที่จำยากหรือไม่?')){
    delete difficultWords[n];
    localStorage.setItem('hsk4_difficult',JSON.stringify(difficultWords));
    updateDifficultCount();
    render();
  }
}

function clearAllDifficult(){
  if(confirm('ลบคำที่จำยากทั้งหมดหรือไม่?')){
    difficultWords={};
    localStorage.setItem('hsk4_difficult',JSON.stringify(difficultWords));
    updateDifficultCount();
    render();
  }
}

// เกมจับคู่
let gameWords=[];
let gameCards=[];
let selectedCards=[];
let matchedPairs=0;
let gameStartTime=0;
let gameTimer=null;
let gameShowPinyin=true;

function renderGameCards(){
  const grid=document.getElementById('gameGrid');
  grid.innerHTML=gameCards.map((card,idx)=>`
    <div class="game-card" data-idx="${idx}" onclick="selectGameCard(${idx})">
      ${card.type==='zh'?(gameShowPinyin?`<div style="font-size:24px;font-weight:600;margin-bottom:4px;font-family:'Noto Serif SC',serif">${card.text}</div><div style="font-size:12px;color:#6B7280;font-family:'Noto Sans SC',sans-serif">${card.pinyin}</div>`:`<div style="font-size:24px;font-weight:600;font-family:'Noto Serif SC',serif">${card.text}</div>`):`<div>${card.text}</div>`}
    </div>
  `).join('');
  
  document.getElementById('matchedCount').textContent=matchedPairs;
}

function toggleGamePinyinUnified(){
  // Check if this is enhanced game (has gameMode variable set to specific mode)
  if(typeof gameMode!=='undefined'&&(gameMode==='chinese-thai'||gameMode==='chinese-pinyin')){
    // Enhanced game
    gameShowPinyinEnhanced=!gameShowPinyinEnhanced;
    const pinyinToggle=document.getElementById('gamePinyinToggle');
    if(pinyinToggle)pinyinToggle.textContent=gameShowPinyinEnhanced?'ซ่อน Pinyin':'แสดง Pinyin';
    // Re-render cards
    const grid=document.getElementById('gameGrid');
    grid.innerHTML=gameCards.map((card,idx)=>`
      <div class="game-card" data-idx="${idx}" onclick="selectGameCard(${idx})">
        ${card.type==='zh'?(gameMode==='chinese-thai'?(gameShowPinyinEnhanced?`<div style="font-size:24px;font-weight:600;margin-bottom:4px;font-family:'Noto Serif SC',serif">${card.text}</div><div style="font-size:12px;color:#6B7280;font-family:'Noto Sans SC',sans-serif">${card.pinyin}</div>`:`<div style="font-size:24px;font-weight:600;font-family:'Noto Serif SC',serif">${card.text}</div>`):`<div style="font-size:24px;font-weight:600;font-family:'Noto Serif SC',serif">${card.text}</div>`):`<div>${card.text}</div>`}
      </div>
    `).join('');
  }else{
    // Simple game (always Chinese-Thai mode)
    gameShowPinyin=!gameShowPinyin;
    const pinyinToggle=document.getElementById('gamePinyinToggle');
    if(pinyinToggle)pinyinToggle.textContent=gameShowPinyin?'ซ่อน Pinyin':'แสดง Pinyin';
    renderGameCards();
  }
}

function selectGameCard(idx){
  const card=gameCards[idx];
  const el=document.querySelector(`[data-idx="${idx}"]`);
  
  // ถ้าการ์ดนี้ถูกเลือกแล้วหรือจับคู่แล้ว ไม่ทำอะไร
  if(el.classList.contains('selected')||el.classList.contains('matched'))return;
  
  // เลือกการ์ด
  el.classList.add('selected');
  selectedCards.push({idx,card});
  
  // ถ้าเลือกครบ 2 ใบ
  if(selectedCards.length===2){
    const [first,second]=selectedCards;
    
    // ตรวจสอบว่าเป็นคู่กันหรือไม่
    if(first.card.pair===second.card.pair){
      // ถูกต้อง!
      setTimeout(()=>{
        document.querySelector(`[data-idx="${first.idx}"]`).classList.remove('selected');
        document.querySelector(`[data-idx="${first.idx}"]`).classList.add('matched');
        document.querySelector(`[data-idx="${second.idx}"]`).classList.remove('selected');
        document.querySelector(`[data-idx="${second.idx}"]`).classList.add('matched');
        
        matchedPairs++;
        document.getElementById('matchedCount').textContent=matchedPairs;
        
        // ชนะเกม
        if(matchedPairs===gamePairCount){
          clearInterval(gameTimer);
          setTimeout(()=>{
            showGameOverModal();
          },500);
        }
        
        selectedCards=[];
      },300);
    }else{
      // ผิด!
      setTimeout(()=>{
        document.querySelector(`[data-idx="${first.idx}"]`).classList.add('wrong');
        document.querySelector(`[data-idx="${second.idx}"]`).classList.add('wrong');
        
        setTimeout(()=>{
          document.querySelector(`[data-idx="${first.idx}"]`).classList.remove('selected','wrong');
          document.querySelector(`[data-idx="${second.idx}"]`).classList.remove('selected','wrong');
          selectedCards=[];
        },500);
      },300);
    }
  }
}

function updateGameTime(){
  const elapsed=Math.floor((Date.now()-gameStartTime)/1000);
  const mins=Math.floor(elapsed/60);
  const secs=elapsed%60;
  document.getElementById('gameTime').textContent=`${mins}:${secs.toString().padStart(2,'0')}`;
}

function showGameOverModal(){
  const gameOverModal=document.getElementById('gameOverModal');
  const gameContainer=document.querySelector('.game-container');
  const timeText=document.getElementById('gameTime').textContent;
  document.getElementById('gameOverTime').textContent=timeText;
  gameOverModal.style.display='flex';
  // Auto scroll to show the modal in viewport
  gameContainer.scrollTo({top:0,behavior:'smooth'});
}

function showGameResultModal(){
  const gameResultModal=document.getElementById('gameResultModal');
  const timeText=document.getElementById('gameTime').textContent;
  document.getElementById('gameResultTime').textContent=timeText;
  gameResultModal.style.display='flex';
}

function closeGame(){
  document.getElementById('gameModal').classList.remove('show');
  document.getElementById('gameOverModal').style.display='none';
  document.getElementById('gameResultModal').style.display='none';
  if(gameTimer)clearInterval(gameTimer);
  // ซ่อนปุ่ม toggle Pinyin
  const pinyinToggle=document.getElementById('gamePinyinToggle');
  if(pinyinToggle)pinyinToggle.style.display='none';
  showHamburgerMenu();
}

// === Character Breakdown Functions ===
let showingCharBreakdown = false;
let currentCharFilter = 'all';

function showCharBreakdown(){
  showingCharBreakdown = true;
  
  // Hide grid and pagination
  document.getElementById('grid').style.display = 'none';
  document.getElementById('pageCtrl').style.display = 'none';
  document.querySelector('.progress').style.display = 'none';
  document.querySelector('.header-sticky .controls').style.display = 'none';
  document.querySelector('.page-title').textContent = '🧩 โครงสร้างคำ — แยกตัวอักษร';
  
  // Show character breakdown section
  const cbSection = document.getElementById('charBreakdownSection');
  cbSection.style.display = 'block';
  
  // Render data if not already rendered
  if(!document.getElementById('cbGrid').hasChildNodes()){
    renderCharBreakdown(charBreakdownData);
  }
  document.getElementById('cbCount').textContent = charBreakdownData.length + ' คำ';
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
  
  // Scroll to top
  document.querySelector('.wrap').scrollIntoView({behavior:'smooth'});
}

function hideCharBreakdown(){
  showingCharBreakdown = false;
  currentCharFilter = 'all';
  
  // Show grid and pagination
  document.getElementById('grid').style.display = 'grid';
  document.getElementById('pageCtrl').style.display = 'block';
  document.querySelector('.progress').style.display = 'flex';
  document.querySelector('.header-sticky .controls').style.display = 'flex';
  document.querySelector('.page-title').textContent = 'การ์ดคำศัพท์';
  
  // Hide character breakdown section
  document.getElementById('charBreakdownSection').style.display = 'none';
  
  // Reset search input
  document.getElementById('cbSearchInput').value = '';
  
  // Reset filter buttons
  document.querySelectorAll('.cb-char-filter-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('.cb-char-filter-btn[data-char="all"]').classList.add('active');
}

function filterByChar(char, btn){
  currentCharFilter = char;
  
  // Update button styles
  document.querySelectorAll('.cb-char-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  // Get search value
  const searchValue = document.getElementById('cbSearchInput').value;
  
  // Apply both filters
  applyCharFilters(searchValue);
}

function applyCharFilters(searchValue){
  let filtered = charBreakdownData;
  
  // Apply character filter
  if(currentCharFilter !== 'all'){
    filtered = filtered.filter(d => d.c.some(ch => ch.ch === currentCharFilter));
  }
  
  // Apply search filter
  if(searchValue.trim()){
    const lq = searchValue.toLowerCase();
    filtered = filtered.filter(d => 
      d.w.includes(searchValue) || 
      d.p.toLowerCase().includes(lq) ||
      d.m.includes(searchValue) || 
      d.fm.includes(searchValue) ||
      d.c.some(ch => ch.ch.includes(searchValue) || ch.cm.includes(searchValue) || ch.cp.toLowerCase().includes(lq))
    );
  }
  
  renderCharBreakdown(filtered);
}

function buildCbRow(d){
  let eq = '';
  eq += '<div class="cb-result-card">'
    + '<div class="cb-result-header">' + d.p + '</div>'
    + '<div class="cb-result-body">'
      + '<div class="cb-result-han">' + d.w + '</div>'
      + '<div class="cb-result-meaning">' + d.m + '</div>'
    + '</div>'
  + '</div>';
  eq += '<span class="cb-op">=</span>';
  d.c.forEach(function(ch, i){
    if(i > 0) eq += '<span class="cb-op">+</span>';
    eq += '<div class="cb-char-card">'
      + '<div class="cb-char-pinyin">' + ch.cp + '</div>'
      + '<div class="cb-char-han">' + ch.ch + '</div>'
      + '<div class="cb-char-meaning">' + ch.cm + '</div>'
      + '</div>';
  });
  return '<div class="cb-row"><div class="cb-equation">' + eq + '</div>'
    + (d.fm && d.fm !== d.m ? '<div class="cb-fm">💡 ' + d.fm + '</div>' : '')
    + '</div>';
}

function renderCharBreakdown(data){
  const grid = document.getElementById('cbGrid');
  grid.innerHTML = data.map(buildCbRow).join('');
  document.getElementById('cbCount').textContent = data.length + ' คำ';
}

function filterCharBreakdown(q){
  applyCharFilters(q);
}


// Show hamburger menu (used after closing modals)
function showHamburgerMenu(){
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(menuBtn){
    menuBtn.classList.remove('hide');
  }
}

function toggleSidebar(){
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  sidebar.classList.toggle('show');
  overlay.classList.toggle('show');
  menuBtn.classList.toggle('hide');
}

function togglePinyin(){
  showPinyin=!showPinyin;
  localStorage.setItem('hsk4_showPinyin',showPinyin);
  document.getElementById('pinyinToggleText').textContent=showPinyin?'ซ่อน Pinyin':'แสดง Pinyin';
  render();
  // ถ้า modal บทความเปิดอยู่ ให้ re-render บทความด้วย
  const articleModal=document.getElementById('articleModal');
  if(articleModal.classList.contains('show')){
    if(currentArticle){
      showArticleContent(currentArticle.id);
    }else{
      showSampleArticles(currentArticleRange);
    }
  }
}

function toggleSubmenu(id){
  const submenu=document.getElementById(id);
  submenu.classList.toggle('show');
  const toggle=submenu.previousElementSibling;
  const chevron=toggle.querySelector('.chevron');
  if(chevron){
    chevron.style.transform=submenu.classList.contains('show')?'rotate(90deg)':'rotate(0deg)';
  }
}

// แบบฝึกหัดเขียน
let writingWords=[];
let writingIndex=0;
let writingScore=0;
let writingAnswers=[];
let writingWriter=null;
let writingChars=[];
let writingCharIndex=0;
let showWritingOutline=false;
let hasWrittenStrokes=false;

function startWritingPractice(start,end){
  const words=vocab.filter(v=>v.n>=start&&v.n<=end);
  writingWords=[...words].sort(()=>Math.random()-0.5).slice(0,10);
  writingIndex=0;
  writingScore=0;
  writingAnswers=[];
  document.getElementById('writingTitle').textContent=`✍️ แบบฝึกหัดเขียน (คำที่ ${start}-${end})`;
  document.getElementById('writingTotal').textContent=writingWords.length;
  document.getElementById('writingModal').classList.add('show');
  showWritingQuestion();
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
}

function startWritingPracticeByTopic(topic){
  const words=vocab.filter(v=>resolveTopic(v)===topic);
  if(words.length===0){
    alert('ไม่มีคำศัพท์ในหมวดหมู่นี้');
    return;
  }
  writingWords=[...words].sort(()=>Math.random()-0.5).slice(0,10);
  writingIndex=0;
  writingScore=0;
  writingAnswers=[];
  const topicLabel=topicNames[topic]||topic;
  document.getElementById('writingTitle').textContent=`✍️ แบบฝึกหัดเขียน (${topicLabel})`;
  document.getElementById('writingTotal').textContent=writingWords.length;
  document.getElementById('writingModal').classList.add('show');
  showWritingQuestion();
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
  
  // Close submenu if exists
  const submenu=document.getElementById('submenuWriting');
  if(submenu)submenu.classList.remove('show');
}

function showWritingQuestion(){
  if(writingIndex>=writingWords.length){
    showWritingSummary();
    return;
  }
  const word=writingWords[writingIndex];
  // Split word into individual characters
  writingChars=word.h.split('');
  writingCharIndex=0;
  
  document.getElementById('writingProgress').textContent=`คำที่ ${writingIndex+1}/${writingWords.length} (ตัวอักษร ${writingCharIndex+1}/${writingChars.length})`;
  document.getElementById('writingWord').textContent=word.h;
  document.getElementById('writingPinyin').textContent=word.p;
  document.getElementById('writingMeaning').textContent=word.m;
  document.getElementById('writingFeedback').textContent='';
  
  // Initialize HanziWriter for current character
  initWritingWriter(writingChars[writingCharIndex]);
}

function initWritingWriter(character){
  const canvas=document.getElementById('writingCanvas');
  canvas.innerHTML='';
  hasWrittenStrokes=false;
  
  writingWriter=HanziWriter.create('writingCanvas', character, {
    width: 300,
    height: 300,
    padding: 30,
    strokeAnimationSpeed: 1,
    delayBetweenStrokes: 200,
    showOutline: showWritingOutline,
    showCharacter: false,
    outlineColor: '#D1D5DB',
    strokeColor: '#1F2937',
    strokeWidth: 10,
    radicalColor: '#3B82F6',
    drawingWidth: 16,
    onLoadCharDataError: function(reason){
      console.error('Failed to load character data:', reason);
      canvas.innerHTML='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#EF4444;"><div>ไม่สามารถโหลดข้อมูลตัวอักษรได้</div><div style="font-size:14px;margin-top:8px;">ลองกดปุ่ม "ล้าง" หรือข้ามไปคำถัดไป</div></div>';
    },
    onComplete: function(){
      // Quiz completed successfully
    }
  });
  
  // Enable quiz mode for user writing
  try{
    writingWriter.quiz({
      onMistake: function(strokeData) {
        // Mistake handling
        hasWrittenStrokes=true;
      },
      onCorrectStroke: function(strokeData) {
        // Correct stroke handling
        hasWrittenStrokes=true;
      },
      onComplete: function() {
        // Auto-advance to next character when writing is complete
        checkWriting();
      }
    });
  }catch(e){
    console.error('Quiz error:', e);
    canvas.innerHTML='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#EF4444;"><div>เกิดข้อผิดพลาด</div><div style="font-size:14px;margin-top:8px;">ลองกดปุ่ม "ล้าง"</div></div>';
  }
}

function toggleWritingOutline(){
  showWritingOutline=!showWritingOutline;
  const btn=document.getElementById('outlineToggleBtn');
  if(btn){
    btn.textContent=showWritingOutline?'👁️ ซ่อนตัวอักษร':'👁️‍🗨️ แสดงตัวอักษร';
  }
  if(writingWriter){
    if(showWritingOutline){
      writingWriter.showOutline();
    }else{
      writingWriter.hideOutline();
    }
  }
}

function clearWritingCanvas(){
  if(writingWriter){
    writingWriter.cancelQuiz();
    writingWriter.quiz();
  }
}

function checkWriting(){
  const word=writingWords[writingIndex];
  const currentChar=writingChars[writingCharIndex];
  const feedback=document.getElementById('writingFeedback');
  
  // Check if user actually wrote something
  if(!hasWrittenStrokes){
    feedback.textContent=`❌ กรุณาเขียนตัวอักษร "${currentChar}" ก่อนกดไปต่อ`;
    feedback.className='exercise-feedback wrong';
    return;
  }
  
  // Mark current character as correct
  writingAnswers.push({
    word: word.h,
    character: currentChar,
    correct: true,
    userAnswer: 'handwriting'
  });
  
  writingScore++;
  
  feedback.textContent=`✅ ตัวอักษร "${currentChar}" บันทึกแล้ว`;
  feedback.className='exercise-feedback correct';
  
  setTimeout(()=>{
    writingCharIndex++;
    if(writingCharIndex>=writingChars.length){
      // All characters in current word done, move to next word
      writingIndex++;
      showWritingQuestion();
    }else{
      // Move to next character in current word
      document.getElementById('writingProgress').textContent=`คำที่ ${writingIndex+1}/${writingWords.length} (ตัวอักษร ${writingCharIndex+1}/${writingChars.length})`;
      document.getElementById('writingFeedback').textContent='';
      initWritingWriter(writingChars[writingCharIndex]);
    }
  },1000);
}

function showWritingSummary(){
  const correctCount=writingAnswers.filter(a=>a.correct).length;
  const totalCount=writingAnswers.length;
  
  document.querySelector('#writingModal .exercise-controls').style.display='none';
  
  let summaryHtml=`<h3>📊 ผลลัพธ์แบบฝึกหัดเขียน</h3>`;
  summaryHtml+=`<p style="font-size:18px;margin:16px 0;">คะแนน: <strong>${correctCount}</strong>/${totalCount} ตัวอักษร</p>`;
  summaryHtml+=`<div style="max-height:300px;overflow-y:auto;">`;
  summaryHtml+=`<table style="width:100%;border-collapse:collapse;">`;
  summaryHtml+=`<tr style="background:#F3F4F6;"><th style="padding:8px;text-align:left;">คำ</th><th style="padding:8px;text-align:left;">ตัวอักษร</th><th style="padding:8px;text-align:left;">ผลลัพธ์</th></tr>`;
  
  writingAnswers.forEach((ans,i)=>{
    const statusClass=ans.correct?'correct':'wrong';
    const statusText=ans.correct?'✅ ถูกต้อง':'❌ ผิด';
    summaryHtml+=`<tr style="border-bottom:1px solid #E5E7EB;"><td style="padding:8px;">${ans.word}</td><td style="padding:8px;">${ans.character}</td><td style="padding:8px;" class="exercise-feedback ${statusClass}" style="display:inline;">${statusText}</td></tr>`;
  });
  
  summaryHtml+=`</table></div>`;
  summaryHtml+=`<button class="exercise-btn" onclick="closeWritingModal()" style="margin-top:16px;">ปิด</button>`;
  
  document.getElementById('writingFeedback').innerHTML=summaryHtml;
}

function closeWritingModal(){
  document.getElementById('writingModal').classList.remove('show');
  if(writingWriter){
    writingWriter=null;
  }
  showHamburgerMenu();
}

// แบบฝึกหัดอ่านตอบคำถาม
let readingQuestions=[];
let readingIndex=0;
let readingScore=0;
let readingAnswers=[];

function startReadingQuiz(start,end){
  const words=vocab.filter(v=>v.n>=start&&v.n<=end);
  const shuffled=[...words].sort(()=>Math.random()-0.5).slice(0,15);
  readingQuestions=shuffled.map(word=>{
    const wrongOptions=[...words.filter(v=>v.n!==word.n)].sort(()=>Math.random()-0.5).slice(0,3);
    const options=[...wrongOptions.map(v=>v.m),word.m].sort(()=>Math.random()-0.5);
    return{word,options};
  });
  readingIndex=0;
  readingScore=0;
  readingAnswers=[];
  document.getElementById('readingTitle').textContent=`📖 อ่าน แล้วตอบคำถาม (คำที่ ${start}-${end})`;
  document.getElementById('readingTotal').textContent=readingQuestions.length;
  document.getElementById('readingModal').classList.add('show');
  showReadingQuestion();
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
}

function showReadingQuestion(){
  if(readingIndex>=readingQuestions.length){
    showReadingSummary();
    return;
  }
  const q=readingQuestions[readingIndex];
  document.getElementById('readingProgress').textContent=readingIndex+1;
  document.getElementById('readingScore').textContent=readingScore;
  document.getElementById('readingQuestion').textContent=`"${q.word.h}" (${q.word.p}) แปลว่าอะไร?`;
  document.getElementById('readingFeedback').textContent='';
  
  const optionsHtml=q.options.map((opt,i)=>`<div class="reading-option" onclick="selectReadingOption('${opt}',${i})">${opt}</div>`).join('');
  document.getElementById('readingOptions').innerHTML=optionsHtml;
}

function selectReadingOption(answer,idx){
  const q=readingQuestions[readingIndex];
  const options=document.querySelectorAll('.reading-option');
  options.forEach(opt=>opt.classList.remove('selected'));
  options[idx].classList.add('selected');
  
  const isCorrect=answer===q.word.m;
  if(isCorrect){
    readingScore++;
  }
  
  readingAnswers.push({
    word: q.word.h,
    pinyin: q.word.p,
    correctAnswer: q.word.m,
    userAnswer: answer,
    correct: isCorrect
  });
  
  options[idx].classList.add(isCorrect?'correct':'wrong');
  if(!isCorrect){
    options.forEach(opt=>{
      if(opt.textContent===q.word.m)opt.classList.add('correct');
    });
  }
  
  document.getElementById('readingFeedback').textContent=isCorrect?'✅ ถูกต้อง!':'❌ ผิด';
  document.getElementById('readingFeedback').className=`exercise-feedback ${isCorrect?'correct':'wrong'}`;
  
  options.forEach(opt=>opt.style.pointerEvents='none');
  
  setTimeout(()=>{
    readingIndex++;
    showReadingQuestion();
  },1500);
}

function showReadingSummary(){
  const correctCount=readingAnswers.filter(a=>a.correct).length;
  const totalCount=readingAnswers.length;
  
  document.querySelector('#readingModal .exercise-controls').style.display='none';
  
  let summaryHtml=`<h3>📊 ผลลัพธ์แบบฝึกหัดอ่านตอบคำถาม</h3>`;
  summaryHtml+=`<p style="font-size:18px;margin:16px 0;">คะแนน: <strong>${correctCount}</strong>/${totalCount}</p>`;
  summaryHtml+=`<div style="max-height:300px;overflow-y:auto;">`;
  summaryHtml+=`<table style="width:100%;border-collapse:collapse;">`;
  summaryHtml+=`<tr style="background:#F3F4F6;"><th style="padding:8px;text-align:left;">คำ</th><th style="padding:8px;text-align:left;">คำตอบที่ถูก</th><th style="padding:8px;text-align:left;">คำตอบของคุณ</th><th style="padding:8px;text-align:left;">ผลลัพธ์</th></tr>`;
  
  readingAnswers.forEach((ans,i)=>{
    const statusClass=ans.correct?'correct':'wrong';
    const statusText=ans.correct?'✅ ถูกต้อง':'❌ ผิด';
    summaryHtml+=`<tr style="border-bottom:1px solid #E5E7EB;"><td style="padding:8px;">${ans.word} (${ans.pinyin})</td><td style="padding:8px;">${ans.correctAnswer}</td><td style="padding:8px;">${ans.userAnswer}</td><td style="padding:8px;" class="exercise-feedback ${statusClass}" style="display:inline;">${statusText}</td></tr>`;
  });
  
  summaryHtml+=`</table></div>`;
  summaryHtml+=`<button class="exercise-btn" onclick="closeReadingModal()" style="margin-top:16px;">ปิด</button>`;
  
  document.getElementById('readingFeedback').innerHTML=summaryHtml;
}

function closeReadingModal(){
  document.getElementById('readingModal').classList.remove('show');
  showHamburgerMenu();
}

// แบบฝึกหัดเรียงประโยค
let orderingQuestions=[];
let orderingIndex=0;
let orderingScore=0;
let currentOrderingWords=[];
let selectedOrdering=[];
let orderingAnswers=[];
let showOrderingPinyin=false;

function startSentenceOrdering(start,end){
  const words=vocab.filter(v=>v.n>=start&&v.n<=end&&v.ex);
  const shuffled=[...words].sort(()=>Math.random()-0.5).slice(0,15);
  orderingQuestions=shuffled.map(word=>{
    const exParts=word.ex.split('<br>');
    const chineseSentence=exParts[0];
    const pinyinSentence=exParts[1];
    const thaiSentence=exParts[2];
    const wordsArr=chineseSentence.replace(/[。，！？、]/g,'').split('').filter(c=>!/[，。！？、\s]/.test(c));
    return{word,chineseSentence,pinyinSentence,thaiSentence,wordsArr};
  });
  orderingIndex=0;
  orderingScore=0;
  orderingAnswers=[];
  showOrderingPinyin=false;
  document.getElementById('orderingTitle').textContent=`🔤 เรียงประโยค (คำที่ ${start}-${end})`;
  document.getElementById('orderingTotal').textContent=orderingQuestions.length;
  document.getElementById('orderingModal').classList.add('show');
  showOrderingQuestion();
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
}

function showOrderingQuestion(){
  if(orderingIndex>=orderingQuestions.length){
    showOrderingSummary();
    return;
  }
  const q=orderingQuestions[orderingIndex];
  document.getElementById('orderingProgress').textContent=orderingIndex+1;
  document.getElementById('orderingScore').textContent=orderingScore;
  document.getElementById('orderingHint').textContent=q.thaiSentence;
  document.getElementById('orderingPinyin').textContent=q.pinyinSentence;
  document.getElementById('orderingPinyin').style.display=showOrderingPinyin?'block':'none';
  document.getElementById('orderingResult').textContent='';
  document.getElementById('orderingFeedback').textContent='';
  
  currentOrderingWords=[...q.wordsArr].sort(()=>Math.random()-0.5);
  selectedOrdering=[];
  renderOrderingWords();
}

function toggleOrderingPinyin(){
  showOrderingPinyin=!showOrderingPinyin;
  document.getElementById('orderingPinyin').style.display=showOrderingPinyin?'block':'none';
  document.querySelector('.ordering-toggle-area .writing-toggle-btn').textContent=showOrderingPinyin?'🔤 ซ่อน Pinyin':'🔤 แสดง Pinyin';
}

function renderOrderingWords(){
  const wordsHtml=currentOrderingWords.map((word,i)=>`<div class="ordering-word" onclick="selectOrderingWord(${i})">${word}</div>`).join('');
  document.getElementById('orderingWords').innerHTML=wordsHtml;
  document.getElementById('orderingResult').textContent=selectedOrdering.join('');
}

function selectOrderingWord(idx){
  const word=currentOrderingWords[idx];
  selectedOrdering.push(word);
  currentOrderingWords.splice(idx,1);
  renderOrderingWords();
}

function checkOrdering(){
  const q=orderingQuestions[orderingIndex];
  const result=selectedOrdering.join('');
  const correct=q.wordsArr.join('');
  const feedback=document.getElementById('orderingFeedback');
  
  const isCorrect=result===correct;
  if(isCorrect){
    orderingScore++;
  }
  
  orderingAnswers.push({
    chinese: q.chineseSentence,
    pinyin: q.pinyinSentence,
    thai: q.thaiSentence,
    correctAnswer: correct,
    userAnswer: result,
    correct: isCorrect
  });
  
  if(isCorrect){
    feedback.textContent='✅ ถูกต้อง!';
    feedback.className='exercise-feedback correct';
  }else{
    feedback.textContent='❓ ลองอีกครั้ง (เฉลย: ' + correct + ')';
    feedback.className='exercise-feedback wrong';
  }
  
  setTimeout(()=>{
    orderingIndex++;
    showOrderingQuestion();
  },2000);
}

function resetOrdering(){
  selectedOrdering=[];
  currentOrderingWords=[...orderingQuestions[orderingIndex].wordsArr].sort(()=>Math.random()-0.5);
  document.getElementById('orderingResult').textContent='';
  document.getElementById('orderingFeedback').textContent='';
  renderOrderingWords();
}

function showOrderingSummary(){
  const correctCount=orderingAnswers.filter(a=>a.correct).length;
  const totalCount=orderingAnswers.length;
  
  document.querySelector('#orderingModal .exercise-controls').style.display='none';
  
  let summaryHtml=`<h3>📊 ผลลัพธ์แบบฝึกหัดเรียงประโยค</h3>`;
  summaryHtml+=`<p style="font-size:18px;margin:16px 0;">คะแนน: <strong>${correctCount}</strong>/${totalCount}</p>`;
  summaryHtml+=`<div style="max-height:300px;overflow-y:auto;">`;
  summaryHtml+=`<table style="width:100%;border-collapse:collapse;">`;
  summaryHtml+=`<tr style="background:#F3F4F6;"><th style="padding:8px;text-align:left;">ประโยคจีน</th><th style="padding:8px;text-align:left;">คำตอบที่ถูก</th><th style="padding:8px;text-align:left;">คำตอบของคุณ</th><th style="padding:8px;text-align:left;">ผลลัพธ์</th></tr>`;
  
  orderingAnswers.forEach((ans,i)=>{
    const statusClass=ans.correct?'correct':'wrong';
    const statusText=ans.correct?'✅ ถูกต้อง':'❌ ผิด';
    summaryHtml+=`<tr style="border-bottom:1px solid #E5E7EB;"><td style="padding:8px;">${ans.chinese}</td><td style="padding:8px;">${ans.correctAnswer}</td><td style="padding:8px;">${ans.userAnswer}</td><td style="padding:8px;" class="exercise-feedback ${statusClass}" style="display:inline;">${statusText}</td></tr>`;
  });
  
  summaryHtml+=`</table></div>`;
  summaryHtml+=`<button class="exercise-btn" onclick="closeOrderingModal()" style="margin-top:16px;">ปิด</button>`;
  
  document.getElementById('orderingFeedback').innerHTML=summaryHtml;
}

function closeOrderingModal(){
  document.getElementById('orderingModal').classList.remove('show');
  showHamburgerMenu();
}

function showSimilarWords(){
  // Hide character breakdown if showing
  if(typeof hideCharBreakdown === 'function') hideCharBreakdown();
  
  const content=document.getElementById('similarContent');
  let html='<div class="similar-list-view" id="similarListView">';
  
  html+='<div class="similar-list">';
  similarWords.forEach((pair,index)=>{
    html+=`
      <div class="similar-card" onclick="showSimilarDetail(${index})">
        <div class="similar-card-header">
          <div>
            <div class="similar-char">${pair.word1}</div>
            <div class="similar-char-label">${pair.pinyin1}</div>
          </div>
          <div>
            <div class="similar-char">${pair.word2}</div>
            <div class="similar-char-label">${pair.pinyin2}</div>
          </div>
        </div>
        <div class="similar-meaning">${pair.meaning1} vs ${pair.meaning2}</div>
        <div class="similar-diff-box">🔍 คลิกเพื่อดูความแตกต่าง</div>
      </div>
    `;
  });
  html+='</div></div>';
  
  html+='<div class="similar-detail-view" id="similarDetailView"></div>';
  
  content.innerHTML=html;
  document.getElementById('similarModal').classList.add('show');
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
}

function showSimilarDetail(index){
  const pair=similarWords[index];
  const listView=document.getElementById('similarListView');
  const detailView=document.getElementById('similarDetailView');
  
  listView.classList.add('hidden');
  detailView.classList.add('active');
  
  let html=`
    <button class="similar-back-btn" onclick="backToSimilarList()">← กลับไปรายการ</button>
    <div class="similar-detail-content">
      <div class="similar-detail-header">
        <div class="similar-detail-box">
          <div class="similar-detail-title">คำที่ 1</div>
          <div class="similar-detail-char">${pair.word1}</div>
          <div class="similar-detail-pinyin">${pair.pinyin1}</div>
          <div class="similar-detail-meaning">${pair.meaning1}</div>
          <div class="similar-example">
            <div class="similar-example-zh">${pair.example1.split('<br>')[0]}</div>
            <div class="similar-example-py">${pair.example1.split('<br>')[1]}</div>
            <div class="similar-example-th">${pair.example1.split('<br>')[2]}</div>
          </div>
        </div>
        <div style="font-size:32px;color:var(--accent);font-weight:600">vs</div>
        <div class="similar-detail-box">
          <div class="similar-detail-title">คำที่ 2</div>
          <div class="similar-detail-char">${pair.word2}</div>
          <div class="similar-detail-pinyin">${pair.pinyin2}</div>
          <div class="similar-detail-meaning">${pair.meaning2}</div>
          <div class="similar-example">
            <div class="similar-example-zh">${pair.example2.split('<br>')[0]}</div>
            <div class="similar-example-py">${pair.example2.split('<br>')[1]}</div>
            <div class="similar-example-th">${pair.example2.split('<br>')[2]}</div>
          </div>
        </div>
      </div>
      <div class="similar-diff-highlight">
        <strong>📌 ความแตกต่าง:</strong><br><br>
        ${pair.difference}
      </div>
    </div>
  `;
  
  detailView.innerHTML=html;
}

function backToSimilarList(){
  document.getElementById('similarListView').classList.remove('hidden');
  document.getElementById('similarDetailView').classList.remove('active');
}

function closeSimilarModal(){
  document.getElementById('similarModal').classList.remove('show');
  document.getElementById('similarListView').classList.remove('hidden');
  document.getElementById('similarDetailView').classList.remove('active');
  showHamburgerMenu();
}

let currentArticle=null;
let currentArticleRange='all';


function showSampleArticles(range='all'){
  currentArticleRange=range;
  
  // Hide character breakdown if showing
  if(typeof hideCharBreakdown === 'function') hideCharBreakdown();
  
  const content=document.getElementById('articleContent');
  
  // กรองบทความตามช่วง
  let filteredArticles=sampleArticles;
  if(range!=='all'){
    filteredArticles=sampleArticles.filter(a=>a.range===range);
  }
  
  let html='<div class="article-range-filter">';
  const ranges=['all','1-300','301-600','601-900','901-1200'];
  const rangeLabels=['ทั้งหมด','1-300','301-600','601-900','901-1200'];
  ranges.forEach((r,i)=>{
    const activeClass=r===range?'active':'';
    html+=`<button class="article-range-btn ${activeClass}" onclick="showSampleArticles('${r}')">${rangeLabels[i]}</button>`;
  });
  html+='</div>';
  
  html+='<div class="article-list">';
  filteredArticles.forEach(article=>{
    const pinyinHtml=showPinyin?` <span style="font-size:13px;color:#6B7280;font-weight:400">(${article.pinyin})</span>`:'';
    html+=`<div class="article-item" onclick="showArticleContent(${article.id})">
      <div class="article-item-title">${article.id}. ${article.title}${pinyinHtml}</div>
      <div class="article-item-desc">${article.desc} - ${article.content.length} ประโยค - <span style="color:#3B82F6">คำศัพท์ ${article.range}</span></div>
    </div>`;
  });
  html+='</div>';
  content.innerHTML=html;
  document.getElementById('articleModal').classList.add('show');
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
}

function showArticleContent(id){
  currentArticle=sampleArticles.find(a=>a.id===id);
  if(!currentArticle)return;
  const content=document.getElementById('articleContent');
  let html=`<button class="article-back-btn" onclick="showArticleList()">← กลับไปรายการบทความ</button>`;
  const pinyinHtml=showPinyin?`<span style="font-size:14px;color:#6B7280;font-weight:400">(${currentArticle.pinyin})</span>`:'';
  html+=`<div class="article-content"><h3>${currentArticle.id}. ${currentArticle.title} ${pinyinHtml}</h3>`;
  currentArticle.content.forEach(para=>{
    const pinyinLine=showPinyin?`<span style="color:#6B7280;font-size:13px">${para.pinyin}</span><br>`:'';
    html+=`<div class="article-para">
      <span class="zh-word" onclick="lookupWord('${para.zh}')">${para.zh}</span><br>
      ${pinyinLine}
      <span style="color:#059669">${para.th}</span>
    </div>`;
  });
  html+='</div>';
  content.innerHTML=html;
}

function showArticleList(){
  showSampleArticles(currentArticleRange);
}

function closeArticle(){
  document.getElementById('articleModal').classList.remove('show');
  currentArticle=null;
  showHamburgerMenu();
}

// เพิ่ม event listener สำหรับปิด modal เมื่อกดที่ overlay
document.addEventListener('DOMContentLoaded',function(){
  const modals=['articleModal','strokeModal','gameModal','writingModal','readingModal','orderingModal','similarModal','listeningModal','randomQuizModal'];
  const closeFunctions={
    articleModal:closeArticle,
    strokeModal:closeStrokeModal,
    gameModal:closeGame,
    writingModal:closeWriting,
    readingModal:closeReading,
    orderingModal:closeOrdering,
    similarModal:closeSimilarModal,
    listeningModal:closeListening,
    randomQuizModal:closeRandomQuiz
  };
  
  modals.forEach(modalId=>{
    const modal=document.getElementById(modalId);
    if(modal){
      modal.addEventListener('click',function(e){
        // ถ้ากดที่ modal เอง (overlay) ไม่ใช่ที่ container
        if(e.target===modal){
          if(closeFunctions[modalId]){
            closeFunctions[modalId]();
          }
        }
      });
    }
  });
});

function lookupWord(zhText){
  const word=vocab.find(v=>zhText.includes(v.h));
  if(word){
    alert(`${word.h} (${word.p})\nความหมาย: ${word.m}\nตัวอย่าง: ${word.ex?word.ex.replace(/<br>/g,' '):'ไม่มี'}`);
  }
}

function speakChinese(text){
  if('speechSynthesis' in window){
    // หยุดเสียงที่กำลังพูดอยู่
    speechSynthesis.cancel();
    
    const utterance=new SpeechSynthesisUtterance(text);
    utterance.lang='zh-CN';
    utterance.rate=0.8;
    utterance.pitch=1;
    
    // พยายามใช้เสียงจีน
    const voices=speechSynthesis.getVoices();
    const chineseVoice=voices.find(voice=>voice.lang.includes('zh'));
    if(chineseVoice){
      utterance.voice=chineseVoice;
    }
    
    speechSynthesis.speak(utterance);
  }else{
    alert('เบราว์เซอร์ของคุณไม่รองรับ Text-to-Speech');
  }
}

// HanziWriter stroke order functions
let strokeWriters=[];
let currentStrokeWord='';
let strokeCharData=[];

function showStrokeOrder(wordIndex){
  const word=vocab[wordIndex-1];
  if(!word)return;
  currentStrokeWord=word.h;
  const characters=word.h.split('');
  const container=document.getElementById('strokeCharacters');
  container.innerHTML='';
  strokeWriters=[];
  strokeCharData=[];
  document.getElementById('strokeTitle').innerHTML=`✍️ ${word.h} <span style="font-size:14px;color:#6B7280">(${word.p})</span>`;
  document.getElementById('strokeInfo').textContent=`${characters.length} ตัวอักษร - ดูการเขียนทีละตัวจากซ้ายไปขวา`;
  
  characters.forEach((char,index)=>{
    const charDiv=document.createElement('div');
    charDiv.className='stroke-character';
    const canvasId=`stroke-canvas-${index}`;
    charDiv.innerHTML=`<div id="${canvasId}" class="stroke-character-canvas"></div><div class="stroke-character-label">${index+1}. ${char}</div>`;
    container.appendChild(charDiv);
    const writer=HanziWriter.create(canvasId,char,{
      width:150,
      height:150,
      padding:5,
      strokeAnimationSpeed:1,
      delayBetweenStrokes:400,
      strokeColor:'#1F2937',
      radicalColor:'#3B82F6',
      highlightColor:'#EF4444',
      outlineColor:'#E5E7EB',
      drawingWidth:4,
      showCharacter:false,
      showOutline:true
    });
    strokeWriters.push(writer);
    strokeCharData.push({char,writer,index});
  });
  
  document.getElementById('strokeModal').classList.add('show');
  
  // เริ่ม animation ตัวแรก
  setTimeout(()=>{animateSequentially(0);},300);
}

function animateSequentially(idx){
  if(idx>=strokeWriters.length)return;
  const writer=strokeWriters[idx];
  writer.animateCharacter({onComplete:()=>{
    // หน่วงเวลาเล็กน้อยแล้วเริ่มตัวถัดไป
    setTimeout(()=>{animateSequentially(idx+1);},200);
  }});
}

function replayAllStrokes(){
  // ซ่อนตัวอักษรทั้งหมดก่อน
  strokeWriters.forEach(w=>w.hideCharacter());
  // เริ่ม animation ตัวแรก
  setTimeout(()=>{animateSequentially(0);},300);
}

function closeStrokeModal(){
  document.getElementById('strokeModal').classList.remove('show');
  strokeWriters=[];
  currentStrokeWord='';
  showHamburgerMenu();
}

// ===== Listening Dictation =====
let listeningWords=[];
let currentListeningIndex=0;
let listeningScore=0;

function startListeningDictation(){
  listeningWords=vocab.sort(()=>Math.random()-0.5).slice(0,10);
  currentListeningIndex=0;
  listeningScore=0;
  document.getElementById('listeningModal').classList.add('show');
  document.getElementById('listeningTotal').textContent=listeningWords.length;
  loadListeningWord();
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
}

function loadListeningWord(){
  if(currentListeningIndex>=listeningWords.length){
    showListeningComplete();
    return;
  }
  const word=listeningWords[currentListeningIndex];
  document.getElementById('listeningCurrent').textContent=currentListeningIndex+1;
  document.getElementById('listeningScore').textContent=listeningScore;
  document.getElementById('listeningWord').textContent='?';
  document.getElementById('listeningInput').value='';
  document.getElementById('listeningResult').innerHTML='';
  document.getElementById('listeningResult').className='listening-result';
}

function playListeningAudio(){
  const word=listeningWords[currentListeningIndex];
  speakChinese(word.h);
}

function checkListeningAnswer(){
  const word=listeningWords[currentListeningIndex];
  const userAnswer=document.getElementById('listeningInput').value.trim();
  const resultDiv=document.getElementById('listeningResult');
  
  if(userAnswer===word.h){
    listeningScore++;
    resultDiv.className='listening-result correct';
    resultDiv.innerHTML=`✓ ถูกต้อง! ${word.h} (${word.p}) = ${word.m}`;
    document.getElementById('listeningScore').textContent=listeningScore;
    setTimeout(()=>{
      currentListeningIndex++;
      loadListeningWord();
    },1500);
  }else{
    resultDiv.className='listening-result wrong';
    resultDiv.innerHTML=`✗ ผิด! คำตอบที่ถูกคือ: ${word.h} (${word.p}) = ${word.m}<br>คุณพิมพ์: ${userAnswer||'(ว่างเปล่า)'}`;
  }
}

function skipListening(){
  const word=listeningWords[currentListeningIndex];
  const resultDiv=document.getElementById('listeningResult');
  resultDiv.className='listening-result';
  resultDiv.innerHTML=`คำตอบ: ${word.h} (${word.p}) = ${word.m}`;
  setTimeout(()=>{
    currentListeningIndex++;
    loadListeningWord();
  },1500);
}

function showListeningComplete(){
  const resultDiv=document.getElementById('listeningResult');
  resultDiv.className='listening-result correct';
  resultDiv.innerHTML=`🎉 เสร็จสิ้น!<br>คะแนน: ${listeningScore}/${listeningWords.length} (${Math.round(listeningScore/listeningWords.length*100)}%)`;
  document.getElementById('listeningWord').textContent='✓';
}

function closeListening(){
  document.getElementById('listeningModal').classList.remove('show');
}

// ===== Random Quiz =====
let quizWords=[];
let currentQuizIndex=0;
let quizScore=0;
let quizMode='easy';
let quizHistory=[];

function startRandomQuiz(){
  quizWords=vocab.sort(()=>Math.random()-0.5).slice(0,10);
  currentQuizIndex=0;
  quizScore=0;
  quizHistory=[];
  quizMode='easy';
  quizAnswerChecked=false;
  document.getElementById('quizCheckBtn').textContent='ตรวจคำตอบ';
  document.getElementById('quizCheckBtn').style.display='inline-block';
  document.getElementById('randomQuizModal').classList.add('show');
  document.getElementById('quizTotal').textContent=quizWords.length;
  document.getElementById('quizChart').style.display='none';
  loadQuizQuestion();
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
}

function setQuizMode(mode){
  quizMode=mode;
  document.querySelectorAll('.quiz-mode-btn').forEach(btn=>btn.classList.remove('active'));
  event.target.classList.add('active');
  currentQuizIndex=0;
  quizScore=0;
  quizHistory=[];
  quizAnswerChecked=false;
  document.getElementById('quizCheckBtn').textContent='ตรวจคำตอบ';
  document.getElementById('quizCheckBtn').style.display='inline-block';
  loadQuizQuestion();
}

function loadQuizQuestion(){
  if(currentQuizIndex>=quizWords.length){
    showQuizComplete();
    return;
  }
  quizAnswerChecked=false;
  document.getElementById('quizCheckBtn').textContent='ตรวจคำตอบ';
  const word=quizWords[currentQuizIndex];
  document.getElementById('quizCurrent').textContent=currentQuizIndex+1;
  document.getElementById('quizScore').textContent=quizScore;
  document.getElementById('quizResult').innerHTML='';
  document.getElementById('quizResult').className='listening-result';
  
  const questionDiv=document.getElementById('quizQuestion');
  const answerArea=document.getElementById('quizAnswerArea');
  
  if(quizMode==='easy'){
    questionDiv.innerHTML=`${word.h} (${word.p})<br>ความหมายคือ?`;
    const options=[word.m];
    while(options.length<4){
      const randomWord=vocab[Math.floor(Math.random()*vocab.length)];
      if(!options.includes(randomWord.m))options.push(randomWord.m);
    }
    options.sort(()=>Math.random()-0.5);
    answerArea.innerHTML=options.map(opt=>
      `<div class="reading-option" onclick="selectQuizOption(this,'${opt}')">${opt}</div>`
    ).join('');
  }else if(quizMode==='medium'){
    questionDiv.innerHTML=`(${word.p}) = ${word.m}<br>เติมคำที่หายไป:`;
    const blanked=word.h.split('').map((c,i)=>i===0?'___':c).join('');
    answerArea.innerHTML=`<p style="font-size:24px;margin-bottom:12px">${blanked}</p><input type="text" class="quiz-input" id="quizInput" placeholder="เติมตัวอักษรที่หายไป...">`;
  }else{
    questionDiv.innerHTML=`${word.p}<br>${word.m}<br>เขียนเป็นภาษาจีน:`;
    answerArea.innerHTML=`<input type="text" class="quiz-input" id="quizInput" placeholder="เขียนตัวอักษรจีน...">`;
  }
}

function selectQuizOption(el,answer){
  document.querySelectorAll('.reading-option').forEach(opt=>opt.classList.remove('selected'));
  el.classList.add('selected');
  el.dataset.answer=answer;
}

let quizAnswerChecked=false;

function checkAndNextQuiz(){
  const word=quizWords[currentQuizIndex];
  const resultDiv=document.getElementById('quizResult');
  const checkBtn=document.getElementById('quizCheckBtn');
  
  if(!quizAnswerChecked){
    // ตรวจคำตอบ
    let isCorrect=false;
    
    if(quizMode==='easy'){
      const selected=document.querySelector('.reading-option.selected');
      if(!selected){
        resultDiv.className='listening-result';
        resultDiv.innerHTML='กรุณาเลือกคำตอบ';
        return;
      }
      isCorrect=selected.dataset.answer===word.m;
      if(isCorrect){
        selected.classList.add('correct');
      }else{
        selected.classList.add('wrong');
        document.querySelectorAll('.reading-option').forEach(opt=>{
          if(opt.textContent===word.m)opt.classList.add('correct');
        });
      }
    }else{
      const userAnswer=document.getElementById('quizInput').value.trim();
      if(quizMode==='medium'){
        isCorrect=userAnswer===word.h[0];
      }else{
        isCorrect=userAnswer===word.h;
      }
    }
    
    if(isCorrect){
      quizScore++;
      resultDiv.className='listening-result correct';
      resultDiv.innerHTML='✓ ถูกต้อง!';
      document.getElementById('quizScore').textContent=quizScore;
    }else{
      resultDiv.className='listening-result wrong';
      if(quizMode==='medium'){
        resultDiv.innerHTML=`✗ ผิด! คำตอบที่ถูกคือ: ${word.h[0]}`;
      }else if(quizMode==='hard'){
        resultDiv.innerHTML=`✗ ผิด! คำตอบที่ถูกคือ: ${word.h}`;
      }else{
        resultDiv.innerHTML='✗ ผิด!';
      }
    }
    
    quizHistory.push({word,isCorrect});
    quizAnswerChecked=true;
    checkBtn.textContent='ข้อถัดไป →';
    
    // ถ้าคำตอบถูก ไปข้อถัดไปอัตโนมัติ
    if(isCorrect){
      setTimeout(()=>{
        currentQuizIndex++;
        quizAnswerChecked=false;
        checkBtn.textContent='ตรวจคำตอบ';
        loadQuizQuestion();
      },800);
    }
  }else{
    // ไปข้อถัดไป
    currentQuizIndex++;
    quizAnswerChecked=false;
    checkBtn.textContent='ตรวจคำตอบ';
    loadQuizQuestion();
  }
}

function showQuizComplete(){
  document.getElementById('quizChart').style.display='block';
  document.getElementById('chartScore').textContent=quizScore;
  document.getElementById('chartTotal').textContent=quizWords.length;
  const percentage=(quizScore/quizWords.length*100);
  document.getElementById('chartBar').style.width=percentage+'%';
  
  const resultDiv=document.getElementById('quizResult');
  resultDiv.className='listening-result correct';
  resultDiv.innerHTML=`🎉 เสร็จสิ้น!<br>คะแนน: ${quizScore}/${quizWords.length} (${Math.round(percentage)}%)`;
  document.getElementById('quizQuestion').textContent='ทำแบบทดสอบเสร็จสิ้น!';
  document.getElementById('quizAnswerArea').innerHTML='';
  document.getElementById('quizCheckBtn').style.display='none';
}

function closeRandomQuiz(){
  document.getElementById('randomQuizModal').classList.remove('show');
}

// ===== Enhanced Memory Card Game =====
let gameMode='chinese-thai';
let gamePairCount=15;
let gameShowPinyinEnhanced=true;

function startMatchingGame(mode='chinese-thai',pairCount=15){
  gameMode=mode||'chinese-thai';
  gamePairCount=pairCount||15;
  
  const randomWords=vocab.sort(()=>Math.random()-0.5).slice(0,gamePairCount);
  let zhCards=[];
  let otherCards=[];
  
  if(gameMode==='chinese-thai'){
    randomWords.forEach((w,i)=>{
      zhCards.push({idx:i*2,text:w.h,pinyin:w.p,pair:i,type:'zh'});
      otherCards.push({idx:i*2+1,text:w.m,pair:i,type:'th'});
    });
  }else if(gameMode==='chinese-pinyin'){
    randomWords.forEach((w,i)=>{
      zhCards.push({idx:i*2,text:w.h,pinyin:w.p,pair:i,type:'zh'});
      otherCards.push({idx:i*2+1,text:w.p,pair:i,type:'py'});
    });
  }
  
  zhCards.sort(()=>Math.random()-0.5);
  otherCards.sort(()=>Math.random()-0.5);
  
  gameCards=[];
  for(let i=0;i<zhCards.length;i++){
    gameCards.push(zhCards[i]);
    gameCards.push(otherCards[i]);
  }
  
  matchedPairs=0;
  selectedCards=[];
  gameStartTime=Date.now();
  
  const grid=document.getElementById('gameGrid');
  grid.innerHTML=gameCards.map((card,idx)=>`
    <div class="game-card" data-idx="${idx}" onclick="selectGameCard(${idx})">
      ${card.type==='zh'?(gameMode==='chinese-thai'?(gameShowPinyinEnhanced?`<div style="font-size:24px;font-weight:600;margin-bottom:4px;font-family:'Noto Serif SC',serif">${card.text}</div><div style="font-size:12px;color:#6B7280;font-family:'Noto Sans SC',sans-serif">${card.pinyin}</div>`:`<div style="font-size:24px;font-weight:600;font-family:'Noto Serif SC',serif">${card.text}</div>`):`<div style="font-size:24px;font-weight:600;font-family:'Noto Serif SC',serif">${card.text}</div>`):`<div>${card.text}</div>`}
    </div>
  `).join('');
  
  document.getElementById('matchedCount').textContent='0';
  document.getElementById('totalPairs').textContent=gamePairCount;
  document.getElementById('gameTime').textContent='0:00';
  
  // Close sidebar on mobile (but keep hamburger menu visible)
  const sidebar=document.getElementById('sidebar');
  const overlay=document.getElementById('sidebarOverlay');
  const menuBtn=document.querySelector('.mobile-menu-btn');
  if(window.innerWidth<=1024){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.classList.remove('hide');
  }
  
  document.getElementById('gameModal').classList.add('show');
  
  // แสดง/ซ่อนปุ่ม toggle Pinyin ตามโหมด
  const pinyinToggle=document.getElementById('gamePinyinToggle');
  if(pinyinToggle){
    if(gameMode==='chinese-thai'){
      pinyinToggle.style.display='inline-block';
      pinyinToggle.textContent=gameShowPinyinEnhanced?'ซ่อน Pinyin':'แสดง Pinyin';
    }else{
      pinyinToggle.style.display='none';
    }
  }
  
  const gameOverModal=document.getElementById('gameOverModal');
  if(gameOverModal)gameOverModal.style.display='none';
  
  if(gameTimer)clearInterval(gameTimer);
  gameTimer=setInterval(updateGameTime,1000);
}

updateDifficultCount();
document.getElementById('pinyinToggleText').textContent=showPinyin?'ซ่อน Pinyin':'แสดง Pinyin';
updateFilterCounts();
updateFilterBtnText();
updateRadicalBtnText();
render();
