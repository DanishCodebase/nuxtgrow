// document
//   .getElementById("LoginForm")
//   .addEventListener("submit", async function (e) {
//     e.preventDefault();

//     let t = document.getElementById("nam").value;
//     let r = document.getElementById("phone").value;
//     let n = t.replace(/\s+$/, "");

//     try {
//       const response = await fetch(
//         "https://api.jotform.com/form/233248955667471/submissions?apiKey=7d0a4252d0feba7675514b3081e96634"
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const data = await response.json();
//       const matchedSubmission = data.content.find((submission) => {
//         let name = submission.answers["1"].answer.replace(/\s+$/, "");
//         let phone = submission.answers["2"].answer;
//         return name === n && phone === r;
//       });

//       if (matchedSubmission) {
//         window.location.href = "https://resilientgrow.in/free-access";
//       } else {
//         document.getElementById("error").style.display = "block";
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to fetch data from JotForm.");
//     }
//   });

// document.getElementById("LoginForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   let t = document.getElementById("nam").value,
//     r = document.getElementById("phone").value,
//     n = t.replace(/\s+$/, "");
//   fetch(
//     "https://api.jotform.com/form/233248955667471/submissions?apiKey=7d0a4252d0feba7675514b3081e96634"
//   )
//     .then((e) => {
//       if (e.ok) return e.json();
//       throw Error("Failed to fetch data");
//     })
//     .then((e) => {
//       let t = e.content.find((e) => {
//         let t = e.answers["1"].answer.replace(/\s+$/, ""),
//           a = e.answers["2"].answer;
//         return t === n && a === r;
//       });
//       t
//         ? (window.location.href = "https://resilientgrow.in/free-access")
//         : (document.getElementById("error").style.display = "block");
//     })
//     .catch((e) => {
//       console.error("Error:", e), alert("Failed to fetch data from JotForm.");
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelectorAll(".c-video"),
    t = document.querySelectorAll(".svg");
  function l() {
    (document.querySelector(".pop-up").style.opacity = "1"),
      (document.querySelector(".pop-up").style.visibility = "visible");
  }
  e.forEach((e) => {
    e.addEventListener("click", l);
  }),
    t.forEach((e) => {
      e.addEventListener("click", l);
    });
});
document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".pop-up").style.visibility = "hidden";
  document.body.style.overflow = "";
});
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("login").style.visibility = "hidden";
  document.body.style.overflow = "";
});
document.querySelector(".member1").addEventListener("click", function () {
  document.querySelector(".pop-up").style.visibility = "hidden";
  // document.body.style.overflow = "hidden";
  document.querySelector(".pop-up").style.opacity = "0";
  document.getElementById("login").style.visibility = "visible";
  // document.body.style.overflow = "hidden";
  document.getElementById("login").style.opacity = "1";
});
document.querySelector(".member").addEventListener("click", function () {
  document.querySelector(".pop-up").style.visibility = "visible";
  // document.body.style.overflow = "hidden";
  document.querySelector(".pop-up").style.opacity = "1";
  document.getElementById("login").style.visibility = "hidden";
  // document.body.style.overflow = "hidden";
  document.getElementById("login").style.opacity = "0";
});
