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

const submitFormData = () => {
  const formEl = document.querySelector("form");
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = new URLSearchParams(formData);

    fetch("https://reqres.in/api/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    });
  });
};

submitFormData();
