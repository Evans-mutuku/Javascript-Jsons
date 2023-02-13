const fetchData = async () => {
  const listEl = document.querySelector("ul");
  await fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((post) => {
        listEl.insertAdjacentHTML("beforeend", `<li>${post.title}</li>`);
      });
      console.log(data);
    });
};

fetchData();
