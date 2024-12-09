document.getElementById("cut").addEventListener("click", () => {
  (document.querySelector(".phonepe").style.opacity = "0"),
    (document.querySelector(".phonepe").style.visibility = "hidden");
  document.querySelector(".phonepe").style.display = "none";
});

document.querySelector(".qr").addEventListener("click", () => {
  // alert("working");
  (document.querySelector(".phonepe").style.opacity = "1"),
    (document.querySelector(".phonepe").style.visibility = "visible");
  document.querySelector(".phonepe").style.display = "block";
});
