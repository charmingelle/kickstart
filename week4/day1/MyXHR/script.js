class MyXHR extends XMLHttpRequest {
  get(url, callback) {
    const myCallback = e => {
      callback(JSON.parse(e.target.response));
      this.removeEventListener("load", myCallback);
    };

    this.addEventListener("load", myCallback);
    this.open("GET", url);
    this.send();
  }

  post(url, body, callback) {
    const myCallback = e => {
      callback(JSON.parse(e.target.response));
      this.removeEventListener("load", myCallback);
    };

    this.addEventListener("load", myCallback);
    this.open("POST", url);
    this.send(body);
  }
}

const xhr = new MyXHR();

xhr.get("list.json", data => {
  console.log(data);
});

// xhr.post();

// xhr.post("list.json", "my body", console.log);
