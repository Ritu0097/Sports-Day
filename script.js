function OpeningCeremony(callback) {
    console.log("Let the games begin");
    setTimeout(() => {
        const score = { red: 0, blue: 0, green: 0, yellow: 0 };
        Race100M(score, callback);
    }, 1000);
}
function Race100M(score, callback) {
    const colors = ["red", "blue", "green", "yellow"];
    const times = colors.map((color) => Math.floor(Math.random() * 6) + 10);
    times.sort((a, b) => a - b);
    score[colors[times.indexOf(times[0])]] += 50;
    score[colors[times.indexOf(times[1])]] += 25;
    console.log("Race100M completed. Updated score:", score);
    setTimeout(() => {
        LongJump(score, callback);
    }, 3000);
}
function LongJump(score, callback) {
    const color = ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)];
    score[color] += 150;
    console.log(`${color} won the Long Jump. Updated score:`, score);
    setTimeout(() => {
      HighJump(score, callback);
    }, 2000);
  }
function HighJump(score, callback) {
    const input = prompt("What colour secured the highest jump?");
    if (input) {
      const color = input.toLowerCase();
      if (color in score) {
        score[color] += 100;
        console.log(`${color} secured the highest jump. Updated score:`, score);
      } else {
        console.log("Event was cancelled");
      }
    } else {
      console.log("Event was cancelled");
    }
    AwardCeremony(score);
}
function AwardCeremony(score) {
    const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log(
      `${sortedScores[0][0]} came first with ${sortedScores[0][1]} points. ${sortedScores[1][0]} came second with ${sortedScores[1][1]} points. ${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`
    );
  }
  OpeningCeremony(() => {});