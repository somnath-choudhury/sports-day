// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Step1 of promise")
//     }, 1000);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Step2 of promise")
//     }, 3000);
// })
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Step3 of promise")
//     }, 5000);
// })

// promise1.then((data1) => {
//     console.log(`Step1 done ${data1}`)
//     return promise2;
// }).then((data2) => {
//     console.log(`Step2 done ${data2}`);
//     return promise3;
// }).then((data3) => {
//     console.log(`Step3 done ${data3}`);
// }).catch((err) => {
//     console.log(`error ${err}`)
// }) //this catch catches any errors in promises that comes along the way. Be it in step1 or step2

// document.addEventListener('DOMContentLoaded', () => {
//     const age = document.getElementById("age")
//     const name = document.getElementById("name")
//     const form = document.getElementById("userForm")

    

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();

//         const ageValue = age.value.trim();
//         const nameValue = name.value.trim();

//         if (ageValue === '' || nameValue === ''){
//             alert("Please enter valid details")
//             return
//         }
//         try {
//             const promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (ageValue >= 18) {
//                     resolve(`Welcome ${nameValue}. You can vote.`)
//                 }
//                 else {
//                     reject(`Oh sorry ${nameValue}. You aren't old enough.`);
//                 }
//             }, 4000);
//         });

//         promise
//         .then((message) => {
//             alert(message)
//         })
//         .catch((errMessage) => {
//             alert(errMessage)
//         })
//         }
//         catch(err) {
//             console.log(`Unexpected error: ${err}`)
//         }
        
//     })
// })

// document.addEventListener("DOMContentLoaded", () => {
//     const outputDiv = document.getElementById("output");

//     const initialPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([1,2,3,4])
//         }, 3000);
//     })

//     initialPromise.then((arr) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 const evens = arr.filter((n) => n % 2 === 0)
//                 outputDiv.textContent = evens
//                 resolve(evens)
//             }, 1000)
//         })
//     }).then((evens) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 const doubled = evens.map((n) => n * 2)
//                 outputDiv.textContent = doubled;
//                 resolve(doubled) 
//             }, 2000);
//         })
//     }).catch((err) => {
//         outputDiv.textContent = `Error ${err}`
//     })
// })

// document.addEventListener('DOMContentLoaded', () => {
//     const outputDiv = document.getElementById("output");
//     const submitBtn = document.getElementById("btn")
//     const input = document.getElementById("ip")

//     submitBtn.addEventListener("click", () => {
//         const inputValue = input.value;
//         const initialPromise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 outputDiv.textContent = `Result: ${inputValue}`
//                 resolve(inputValue)
//             }, 2000);
//     });

//     initialPromise
//       .then((original) => {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             const multiplied = original * 2;
//             outputDiv.textContent = `Result: ${multiplied}`;
//             resolve(multiplied);
//           }, 2000);
//         });
//       })
//       .then((multiplied) => {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             const subtracted = multiplied - 3;
//             outputDiv.textContent = `Result: ${subtracted}`;
//             resolve(subtracted);
//           }, 1000);
//         });
//       })
//       .then((subtracted) => {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             const divided = subtracted / 2;
//             outputDiv.textContent = `Result: ${divided}`;
//             resolve(divided);
//           }, 1000);
//         });
//       })
//       .then((divided) => {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             const added = divided + 10;
//             outputDiv.textContent = `Result: ${added}`;
//           }, 1000);
//         });
//       })
//       .catch((err) => {
//         console.log(`Error ${err}`)
//       })
//     })

    
// })

// Utility function to log messages to the page
function log(message, type = "info") {
  const output = document.getElementById("output");
  const p = document.createElement("p");
  p.textContent = message;
  if (type === "winner") p.style.color = "green";
  if (type === "cancelled") p.style.color = "red";
  output.appendChild(p);
  output.scrollTop = output.scrollHeight; // auto scroll
}

// Opening Ceremony
function OpeningCeremony(callback) {
  log("🏁 Opening Ceremony has started...");

  const score = { red: 0, blue: 0, green: 0, yellow: 0 };

  let seconds = 3;
  const interval = setInterval(() => {
    log(`Starting in ${seconds}...`);
    seconds--;
    if (seconds < 0) {
      clearInterval(interval);
      log("🚩 Let the games begin!");
      if (typeof callback === "function") callback(score, Race100M);
    }
  }, 1000);
}

// 100M Race
function Race100M(score, callback) {
  log("Race 100M started...");

  setTimeout(() => {
    const times = {
      red: Math.floor(Math.random() * 6) + 10,
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
      yellow: Math.floor(Math.random() * 6) + 10,
    };

    const sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);

    log(`Race results: ${JSON.stringify(times)}`);
    log(`🏆 1st place: ${sorted[0][0]} (+50)`);
    log(`🥈 2nd place: ${sorted[1][0]} (+25)`);

    score[sorted[0][0]] += 50;
    score[sorted[1][0]] += 25;

    log("Updated scores: " + JSON.stringify(score) + "\n");

    if (typeof callback === "function") callback(score, LongJump);
  }, 3000);
}

// Long Jump
function LongJump(score, callback) {
  log("🏃 Long Jump event started...");

  setTimeout(() => {
    const colors = ["red", "blue", "green", "yellow"];
    const winner = colors[Math.floor(Math.random() * colors.length)];
    log(`Long Jump winner: ${winner} (+150)`, "winner");

    score[winner] += 150;
    log("Updated scores: " + JSON.stringify(score) + "\n");

    if (typeof callback === "function") callback(score, HighJump);
  }, 2000);
}

// High Jump (with input field)
function HighJump(score, callback) {
  log("🏋️ High Jump event started...");
  const section = document.getElementById("highJumpSection");
  section.style.display = "block";

  const button = document.getElementById("highJumpBtn");
  const input = document.getElementById("highJumpInput");

  button.onclick = () => {
    const color = input.value.toLowerCase().trim();

    if (["red", "blue", "green", "yellow"].includes(color)) {
      log(`High Jump winner: ${color} (+100)`, "winner");
      score[color] += 100;
    } else {
      log("High Jump event was cancelled. No points awarded.", "cancelled");
    }

    log("Updated scores: " + JSON.stringify(score) + "\n");

    section.style.display = "none";
    input.value = "";

    if (typeof callback === "function") {
      callback(score, AwardCeremony); // pass to Award Ceremony
    } else {
      console.error("❌ Next callback is not a function!");
    }
  };
}

// Award Ceremony
function AwardCeremony(score) {
  log("🏅 Award Ceremony started!");
  const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);

  sorted.forEach(([color, points], idx) => {
    const place = idx === 0 ? "🥇 1st" : idx === 1 ? "🥈 2nd" : idx === 2 ? "🥉 3rd" : "4th";
    log(`${place}: ${color} with ${points} points`, idx < 3 ? "winner" : "info");
  });
}

// Start the event when the page loads
document.addEventListener("DOMContentLoaded", () => {
  OpeningCeremony(Race100M);
});
