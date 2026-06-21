/* ============================================================
   Game engine. You should not need to edit this file.
   Progress (which pieces are earned) is saved in the browser
   so the puzzle board fills up across all the pages.
   ============================================================ */

const STORE_KEY = "fathersday_progress_v1";

function loadProgress(){
  try{ return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch(e){ return {}; }
}
function saveProgress(p){
  try{ localStorage.setItem(STORE_KEY, JSON.stringify(p)); }catch(e){}
}
/* mark a piece earned. status: "solved" or "revealed" */
function earnPiece(pieceNum, status){
  const p = loadProgress();
  if(!p[pieceNum]) p[pieceNum] = status;       // don't downgrade a solve to a reveal
  saveProgress(p);
}

/* ---- fuzzy matching ---- */
function normalize(s){
  return (s||"")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")   // strip accents
    .replace(/[^a-z0-9 ]/g," ")                          // punctuation -> space
    .replace(/\s+/g," ")
    .trim();
}
/* Levenshtein distance for typo tolerance */
function lev(a,b){
  const m=a.length,n=b.length;
  if(!m) return n; if(!n) return m;
  let prev=Array.from({length:n+1},(_,i)=>i),cur=new Array(n+1);
  for(let i=1;i<=m;i++){
    cur[0]=i;
    for(let j=1;j<=n;j++){
      const cost=a[i-1]===b[j-1]?0:1;
      cur[j]=Math.min(cur[j-1]+1,prev[j]+1,prev[j-1]+cost);
    }
    [prev,cur]=[cur,prev];
  }
  return prev[n];
}
function isMatch(guess, answers){
  const g = normalize(guess);
  if(!g) return false;
  for(const a of answers){
    const na = normalize(a);
    if(g === na) return true;
    if(na.length > 3 && g.includes(na)) return true;   // answer contained in guess
    // typo tolerance: allow ~15% edit distance, min 1, max 3
    const tol = Math.max(1, Math.min(3, Math.floor(na.length*0.15)));
    if(lev(g, na) <= tol) return true;
  }
  return false;
}

/* ---- render the puzzle board ---- */
function renderBoard(justPlaced){
  const board = document.getElementById("board");
  if(!board) return;
  const p = loadProgress();
  board.innerHTML = "";
  let count = 0;
  for(let i=1;i<=12;i++){
    const cell = document.createElement("div");
    cell.className = "cell";
    if(p[i]){
      count++;
      const img = document.createElement("img");
      img.src = `pieces/piece_${String(i).padStart(2,"0")}.jpg`;
      img.alt = "";
      cell.appendChild(img);
      if(i === justPlaced) cell.classList.add("justplaced");
    }else{
      cell.classList.add("locked");
    }
    board.appendChild(cell);
  }
  const c = document.getElementById("board-count");
  if(c) c.textContent = `${count} of 12 pieces placed`;
}

/* ---- wire up a single riddle page ---- */
function initRiddle(riddle){
  const input   = document.getElementById("answer");
  const submit  = document.getElementById("submit");
  const feedback= document.getElementById("feedback");
  const triesEl = document.getElementById("tries");
  const reveal  = document.getElementById("reveal");
  const noteEl  = document.getElementById("note");
  const badge   = document.getElementById("badge");
  const answerWas = document.getElementById("answer-was");

  let wrong = 0;            // wrong-guess counter
  const MAX = 3;            // 1st wrong -> hint1, 2nd -> hint2, 3rd -> reveal answer

  // If already completed earlier, show the reveal immediately.
  const prog = loadProgress();
  if(prog[riddle.piece]){
    showReveal(prog[riddle.piece] === "solved" ? "solved" : "revealed");
    return;
  }

  function showReveal(mode){
    document.getElementById("answer-block").style.display = "none";
    noteEl.textContent = riddle.note;
    if(mode === "solved"){
      badge.innerHTML = `<span class="wax"></span> You got it`;
      badge.className = "solved-badge";
      answerWas.style.display = "none";
    }else{
      badge.innerHTML = `<span class="wax"></span> Answer revealed`;
      badge.className = "solved-badge revealed";
      answerWas.style.display = "block";
      answerWas.innerHTML = `The answer was <b>${riddle.answers[0]}</b>.`;
    }
    reveal.classList.add("show");
    earnPiece(riddle.piece, mode);
    renderBoard(riddle.piece);
  }

  function handle(){
    const val = input.value;
    if(!val.trim()) return;
    if(isMatch(val, riddle.answers)){
      feedback.textContent = "";
      showReveal("solved");
      return;
    }
    wrong++;
    if(wrong < MAX){
      const hint = riddle.hints[wrong-1] || riddle.hints[riddle.hints.length-1];
      feedback.className = "feedback hint";
      feedback.textContent = "Hint: " + hint;
      triesEl.textContent = wrong === 1
        ? "One hint left, then the answer."
        : "Last hint — next try shows the answer.";
      input.value = "";
      input.focus();
    }else{
      // out of hints -> reveal answer, still earn the piece
      showReveal("revealed");
    }
  }

  submit.addEventListener("click", handle);
  input.addEventListener("keydown", e=>{ if(e.key==="Enter") handle(); });
  input.focus();
}
