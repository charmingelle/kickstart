const xhr = new XMLHttpRequest();

xhr.open("GET", "list.json");
xhr.send();

xhr.addEventListener("load", e => {
  document.body.innerHTML = `<ul>${JSON.parse(e.target.response)
    .list.map(
      item => `<li><span>${item.author}: </span><span>${item.text}</span></li>`
    )
    .join("")}</ul>`;
});
