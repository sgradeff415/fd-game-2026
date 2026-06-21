# Dad's Father's Day Game — Setup

A 12-riddle game for Dad. One riddle per hour, each one he solves adds a
piece to a hidden family photo. A 13th email reveals the finished picture
and your closing note.

---

## 1. What's in this folder

| File | What it is | Do you edit it? |
|------|-----------|-----------------|
| `data.js` | All riddles, answers, hints, memory notes, closing note | **YES — this is the only file you edit** |
| `hour01.html` … `hour12.html` | The 12 riddle pages | No |
| `finale.html` | The final reveal page | No |
| `style.css`, `game.js` | Look + logic | No |
| `pieces/` | The 12 puzzle-piece images | No |
| `full.jpg` | The full photo for the finale | No |
| `build.py` | Regenerates the HTML pages from data | Only if you change hour labels |

### Changing a riddle, answer, hint, or note
Open `data.js`, edit the text, save. That's it — the pages read from it live.
(You only re-run `build.py` if you change the little labels like "Music" or "Easy.")

---

## 2. Put it online (GitHub Pages — free)

1. Go to github.com → **New repository**. Name it something Dad won't guess,
   e.g. `fd-game-2026`. Set it to **Public** (Pages needs public on the free
   plan). Click **Create**.
2. On the new repo page, click **uploading an existing file**.
3. Drag in **everything in this folder** — all the `.html` files, `style.css`,
   `game.js`, `data.js`, `full.jpg`, AND the `pieces` folder. Commit.
4. Go to the repo's **Settings → Pages**.
5. Under "Build and deployment", Source = **Deploy from a branch**,
   Branch = **main**, folder = **/ (root)**. Save.
6. Wait ~1 minute. The page will show your live URL, like:
   `https://YOURNAME.github.io/fd-game-2026/`

Your 13 links are:
```
https://YOURNAME.github.io/fd-game-2026/hour01.html
https://YOURNAME.github.io/fd-game-2026/hour02.html
   ...
https://YOURNAME.github.io/fd-game-2026/hour12.html
https://YOURNAME.github.io/fd-game-2026/finale.html
```
Open `hour01.html` yourself first to confirm it loads.

---

## 3. Schedule the 13 emails (Gmail)

Gmail lets you schedule a send: write the email, click the **arrow next to
Send → Schedule send → pick date & time**.

Send one per hour. Example for a 8am start:

| Email | Send at | Link to include |
|-------|---------|-----------------|
| 1 | 8:00 AM | hour01.html |
| 2 | 9:00 AM | hour02.html |
| 3 | 10:00 AM | hour03.html |
| 4 | 11:00 AM | hour04.html |
| 5 | 12:00 PM | hour05.html |
| 6 | 1:00 PM | hour06.html |
| 7 | 2:00 PM | hour07.html |
| 8 | 3:00 PM | hour08.html |
| 9 | 4:00 PM | hour09.html |
| 10 | 5:00 PM | hour10.html |
| 11 | 6:00 PM | hour11.html |
| 12 | 7:00 PM | hour12.html |
| 13 (finale) | 8:00 PM | finale.html |

Each email just needs a line like:
> **Hour 4 is here.** You've got until 11am. Tap to open today's riddle:
> [link]

Because the riddle goes live the moment the email arrives, the email schedule
*is* the one-hour clock — there's no countdown to fail. If he's slow, the worst
that happens is the next email shows up.

---

## 4. How the game behaves (so you know what he'll see)

- He types an answer. **Matching is forgiving** — caps, spaces, punctuation,
  accents, and small typos are all accepted.
- **Wrong guess → hint 1. Wrong again → hint 2. Wrong a third time → it shows
  him the answer** and the memory note, and still gives him the puzzle piece.
  He's never locked out.
- Every solved (or revealed) riddle drops a piece into the photo board at the
  bottom of the page. The board is the same across all pages — it remembers
  progress on his device.
- By the finale, all 12 pieces are placed and the full photo + your note show.

**One caveat:** progress is saved in his browser. If he does the whole game on
**one device in one browser** (his phone, say), the puzzle fills up perfectly.
If he switches from phone to laptop midway, the new device starts the board
fresh — but the finale page always shows the complete photo regardless, so the
ending is safe.

---

## 5. Two things to check before you start
- The answers in `data.js` are the ones you gave me. Skim them once more.
- I wrote the **hints** myself (you hadn't given me any). Read all 24 in
  `data.js` and rewrite any that give too much away or not enough.
