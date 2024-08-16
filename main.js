const userUrlInput = document.getElementById("user-url");
const methodSelect = document.querySelector(".method-select");
const submitButton = document.querySelector(".submit");
const responseBody = document.querySelector(".response-body");
const requestBody = document.querySelector(".request-body");
let errorMessage = document.querySelector(".error");

submitButton.addEventListener("click", () => {
  const method = methodSelect.value;
  if (method === "GET") {
    getResponse();
  } else if (method === "POST") {
    postResponse();
  }
});

async function getResponse() {
  const url = userUrlInput.value;

  if (!url) {
    errorMessage.innerText = "Please enter a valid URL";
    errorMessage.style.color = "red";
    return;
  } else {
    errorMessage.innerText = "";
  }

  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${error.message}`);
    }

    const data = await response.json();
    responseBody.value = JSON.stringify(data, null, 2);
  } catch (error) {
    responseBody.value = `Error: ${error.message}`;
  }
}

async function postResponse() {
  const url = userUrlInput.value;
  const body = requestBody.value;

  // if (!url || !body) {
  //   errorMessage.innerText = "Please enter a valid URL";
  //   errorMessage.style.color = "red";
  //   return;
  // } else {
  //   errorMessage.innerText = "";
  // }

  try {
    const response = await fetch(url, {
      method: "POST",
      body: body,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    responseBody.value = JSON.stringify(data);
    console.log(response);
  } catch (error) {
    responseBody.value = `Error: ${error.message}`;
  }
}
