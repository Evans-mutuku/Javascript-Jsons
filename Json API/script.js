const fetchData = async () => {
  const listEl = document.querySelector("ul");
  await fetch("./data.json")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      data.forEach((post) => {
        listEl.insertAdjacentHTML("beforeend", `<li>${post.title}</li>`);
        listEl.insertAdjacentHTML("beforeend", `<p>${post.body}</p>`);
      });
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

fetchData();
