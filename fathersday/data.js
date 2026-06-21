/* ============================================================
   EDIT THIS FILE TO CHANGE RIDDLES, ANSWERS, HINTS, OR NOTES.
   You never need to touch any other file.

   Each riddle has:
     id        : the hour number (1-12). Do not change.
     piece     : which puzzle piece this unlocks (1-12). Do not change.
     prompt    : the riddle text Dad reads.
     answers   : array of acceptable answers. Matching is fuzzy
                 (ignores caps, spaces, punctuation, small typos),
                 so you usually only need 1-2 spellings.
     hints     : exactly two hints. First shown after 1 wrong guess,
                 second after 2 wrong guesses.
     note      : the memory message shown when he gets it right
                 (or after the answer is revealed).
   ============================================================ */

const RIDDLES = [
  {
    id: 1,
    piece: 1,
    prompt: "What were the two words that would wake me up as a kid, no matter if I was sleeping or you said it very quietly?",
    answers: ["ice cream"],
    hints: [
      "It's a frozen.",
      "Starts with 'ice'."
    ],
    note: "One of my favorite things about you is that you don't take yourself too seriously. You'll play house music way too loud and dance around the house, or somehow make me or Carly laugh when we're pissed off, or bolt off to some Burning Man party or concert with your wife. Your energy is contagious!"
  },
  {
    id: 2,
    piece: 2,
    prompt: "The name of my pink soccer team that you coached.",
    answers: ["bubblishous", "bubbalicious", "bubble gum", "bubblicious"],
    hints: [
      "sticky",
      "chewy"
    ],
    note: "There were plenty of times you pushed me when I didn't want to be pushed. At the time I probably rolled my eyes. Looking back, I'm really glad you did. You helped me become someone who works hard and doesn't quit when things get difficult."
  },
  {
    id: 3,
    piece: 3,
    prompt: "What artist (that I remember) did you play the most in the car when we were kids?",
    answers: ["jack johnson"],
    hints: [
      "southlake tahoe concert",
      "pancakes"
    ],
    note: "You don't make a big deal about the things you do. Your humbleness is admirable. But know that I always recognize all you do."
  },
  {
    id: 4,
    piece: 4,
    prompt: "If it's on the menu, what is the dessert that you and I would get?",
    answers: ["tiramisu"],
    hints: [
      "think coffee.",
      "think dessert lasagna"
    ],
    note: "One thing I've noticed as I've gotten older is how much you genuinely care about people. Not because you have to, you just do. Family, friends, your little work team, you always want the people around you to do well. That's something I've always admired about you."
  },
  {
    id: 5,
    piece: 5,
    prompt: "What hike would neither of us do again?",
    answers: ["freel peak", "freal peak"],
    hints: [
      "knee pain",
      "tallest peak in tahoe!"
    ],
    note: "I hope I'm still as curious as you when I'm your ripe old age. You're always reading something, building something, talking about AI, thinking of a business idea. You make learning look fun."
  },
  {
    id: 6,
    piece: 6,
    prompt: "The song you pinned me against my whole life.",
    answers: ["dont stop believing", "dont stop believin"],
    hints: [
      "DOOOOONT S..",
      "journey"
    ],
    note: "I don't always take your advice right away... but somehow you usually end up being right. Thanks for always helping me think things through."
  },
  {
    id: 7,
    piece: 7,
    prompt: "The most famous Paul pestering line / question.",
    answers: [
      "lets go workout", "want to go workout", "lets workout",
      "want to go to the gym", "want to go biking", "lets go to the gym"
    ],
    hints: [
      "out of breath",
      "get rid of the belly"
    ],
    note: "A lot of what I have today started because you and mother worked hard to give me all these opportunities. I don't think I've thanked y'all for that!"
  },
  {
    id: 8,
    piece: 8,
    prompt: "One of the things I admire most about you.",
    answers: ["thoughtfulness", "thoughtful"],
    hints: [
      "thinking",
      "thinking with care"
    ],
    note: "Whether it's my job, a random business idea, or whatever project I'm excited about that week, you're always interested. It makes me want to keep sharing things with you."
  },
  {
    id: 9,
    piece: 9,
    prompt: "What is the number one spot on our bucket list of places to go?",
    answers: ["brazil", "south america"],
    hints: [
      "kite surfing",
      "new years"
    ],
    note: "You're someone I'd choose to spend time with even if you weren't my dad."
  },
  {
    id: 10,
    piece: 10,
    prompt: "How do you say \u201cmy daughter likes house music\u201d in Spanish?",
    answers: [
      "a mi hija le gusta la musica de house",
      "a mi hija le gusta la musica house",
      "mi hija le gusta la musica de house",
      "mi hija le gusta la musica house",
      "a mi hiha le gusta la musica de house",
      "a mi hiha le gusta la musica house"
    ],
    hints: [
      "no hints hehe",
      "nope"
    ],
    note: "The older I get, the more I realize that I ended up looking for a lot of your qualities in the people I respect, whether that's in work or in my personal life."
  },
  {
    id: 11,
    piece: 11,
    prompt: "Your biggest fan.",
    answers: ["you", "syd", "sydney", "your daughter", "your daughters", "my loving daughter", "my loving daughters"],
    hints: [
      "only your favorite daughter",
      "The name starts with 'S'."
    ],
    note: "I genuinely have fun talking to you, and I don't think everyone gets to say that about their father."
  },
  {
    id: 12,
    piece: 12,
    prompt: "I'm not a therapist, but I hear every work rant.\nI'm not a boss, but I always have a plan.\nI'm not ChatGPT, but I still love talking AI.\nWho am I?",
    answers: ["paul", "me", "father", "dad"],
    hints: [
      "hmm I wonder who that could be!!",
      "Its you, \"Dad.\""
    ],
    note: "I love how our \u201cquick calls\u201d are almost never actually quick. Somehow we always end up talking for an hour about work, AI, or whatever random idea one of us is excited about."
  }
];

/* Closing note shown on the finale page (email 13). */
const FINALE_NOTE = `Father Paul,

Thank you for being my biggest supporter.

Everything I've accomplished started with you.

Happy Father's Day!

I love you.`;
