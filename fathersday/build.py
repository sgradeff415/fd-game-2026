#!/usr/bin/env python3
"""Generates hour01.html ... hour12.html and finale.html from data.js labels."""
import os

LABELS = {
    1:"Easy", 2:"Funny", 3:"Family memory", 4:"The dessert",
    5:"The hike", 6:"Music", 7:"Classic Dad", 8:"What I admire",
    9:"Bucket list", 10:"En espa\u00f1ol", 11:"Lyric", 12:"Final riddle"
}

PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hour {n} \u2014 Happy Father's Day</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
<main class="wrap">
  <p class="eyebrow">A Father's Day Game &middot; Hour {n} of 12</p>
  <h1 class="hour">Hour {n}<small>{label}</small></h1>

  <section class="envelope">
    <p class="riddle" id="riddle"></p>
  </section>

  <div class="answer-block" id="answer-block">
    <div class="field">
      <input type="text" id="answer" placeholder="Type your answer\u2026" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">
      <button id="submit">Open it</button>
    </div>
    <div class="feedback" id="feedback"></div>
    <div class="tries" id="tries"></div>
  </div>

  <div class="reveal" id="reveal">
    <div class="solved-badge" id="badge"></div>
    <p class="answer-was" id="answer-was" style="display:none"></p>
    <p class="note" id="note"></p>
  </div>

  <div class="board-card">
    <p class="board-title">Our picture, one piece at a time</p>
    <div class="board" id="board"></div>
    <p class="board-count" id="board-count"></p>
  </div>

  <p class="foot">Wait for the next email to keep going. {navlink}</p>
</main>

<script src="data.js"></script>
<script src="game.js"></script>
<script>
  const R = RIDDLES.find(r => r.id === {n});
  document.getElementById("riddle").textContent = R.prompt;
  initRiddle(R);
  renderBoard();
</script>
</body>
</html>
"""

FINALE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Happy Father's Day</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
<main class="wrap">
  <p class="eyebrow" style="text-align:center">The Whole Picture</p>
  <h1 class="hour" style="text-align:center">Happy Father's Day</h1>

  <img class="finale-photo" src="full.jpg" alt="Our family">

  <p class="finale-note" id="finale-note"></p>

  <div class="finale-sign">
    <span class="wax"></span>
  </div>
</main>
<script src="data.js"></script>
<script>
  document.getElementById("finale-note").textContent = FINALE_NOTE;
</script>
</body>
</html>
"""

out = os.path.dirname(os.path.abspath(__file__))
for n in range(1,13):
    nxt = "" if n==12 else f'<a href="hour{n+1:02d}.html">Already have the next one?</a>'
    if n==12:
        nxt = '<a href="finale.html">See the whole picture &rarr;</a>'
    html = PAGE.format(n=n, label=LABELS[n], navlink=nxt)
    with open(os.path.join(out,f"hour{n:02d}.html"),"w") as f:
        f.write(html)
with open(os.path.join(out,"finale.html"),"w") as f:
    f.write(FINALE)
print("generated 12 hour pages + finale")
