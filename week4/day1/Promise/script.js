class MyXHR extends XMLHttpRequest {
  get(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open("GET", url);
      xhr.send();
      xhr.addEventListener("load", event =>
        resolve(JSON.parse(event.target.response))
      );
      xhr.addEventListener("error", error => reject(error));
    });
  }

  post(url, body) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open("POST", url);
      xhr.send(body);
      xhr.addEventListener("load", event =>
        resolve(JSON.parse(event.target.response))
      );
      xhr.addEventListener("error", error => reject(error));
    });
  }
}

const xhr = new MyXHR();

// xhr
//   .get("comments.json")
//   .then(response1 => response1.comments)
//   .then(comments => {
//     return xhr.get("replies.json").then(response2 => {
//       response2.replies.map(reply => {
//         if (comments[reply.commentId - 1].hasOwnProperty("replies")) {
//           comments[reply.commentId - 1].replies = [
//             ...comments[reply.commentId - 1].replies,
//             reply
//           ];
//         } else {
//           comments[reply.commentId - 1].replies = [reply];
//         }
//       });
//       return comments;
//     });
//   })
//   .then(comments => console.log("comments", comments))
//   .catch(error => console.error("error", error));

// Promise.all([xhr.get("comments.json"), xhr.get("replies.json")])
//   .then(data => {
//     const [{ comments }, { replies }] = data;

//     replies.map(reply => {
//       if (comments[reply.commentId - 1].hasOwnProperty("replies")) {
//         comments[reply.commentId - 1].replies = [
//           ...comments[reply.commentId - 1].replies,
//           reply
//         ];
//       } else {
//         comments[reply.commentId - 1].replies = [reply];
//       }
//     });
//     return comments;
//   })
//   .then(comments => console.log("comments", comments));

(async () => {
  const data = await Promise.all([
    xhr.get("comments.json"),
    xhr.get("replies.json")
  ]);
  const [{ comments }, { replies }] = data;

  replies.map(reply => {
    if (comments[reply.commentId - 1].replies) {
      comments[reply.commentId - 1].replies = [
        ...comments[reply.commentId - 1].replies,
        reply
      ];
    } else {
      comments[reply.commentId - 1].replies = [reply];
    }
  });
  console.log("comments", comments);
})();
