function makeCode() {
  let positions = shuffle([0, 1, 2, 3, 4, 5, 6, 7]);
  code = [];
  for (let i = 0; i < 4; i++) {
    code.push(colors[positions[i]]);
  }
  console.log(code);
  return code;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
