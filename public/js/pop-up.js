(window.onbeforeunload = () => {
  for (let e of document.getElementsByTagName("form")) e.reset();
}),
  document.getElementById("myForm").addEventListener("submit", function (e) {
    var t;
    e.preventDefault();
    let r = document.getElementById("name"),
      a = document.getElementById("Number");
    if (((t = a.value), !/^[6-9]\d{9}$/.test(t))) {
      (a.value = ""),
        (a.placeholder = "Please enter valid number"),
        a.classList.add("error-message");
      return;
    }
    fetch(
      "https://api.jotform.com/form/233248955667471/submissions?apiKey=7d0a4252d0feba7675514b3081e96634"
    )
      .then((e) => {
        if (e.ok) return e.json();
        throw Error("Failed to fetch data");
      })
      .then((e) => {
        e.content.find((e) => {
          let t = e.answers["1"].answer,
            s = e.answers["2"].answer;
          return (t === r.value && s === a.value) || s === a.value;
        })
          ? ((a.value = ""),
            (a.placeholder = "This phone number is already registered."),
            a.classList.add("error-message"))
          : document.getElementById("myForm").submit();
      })
      .catch((e) => {
        console.error("Error:", e), alert("Failed to fetch data from JotForm.");
      });
  });
