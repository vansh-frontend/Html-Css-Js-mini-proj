
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const output = document.querySelector(".cards");

  form.onsubmit = async (e) => {
    e.preventDefault();
    output.innerHTML = "";

    const res = await fetch(input.value);
    const data = await res.json();

    const list = Array.isArray(data) ? data : [data];

    for (let item of list) {
      const box = document.createElement("div");
      box.className = "box";

      for (let key in item) {
        box.innerHTML += `
          <div class="row">
            <span class="key">${key}</span>
            <span class="value">${item[key]}</span>
          </div>
        `;
      }

      output.appendChild(box);
    }
  };
