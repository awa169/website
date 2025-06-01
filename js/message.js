function loadMessages() {
  const messages = JSON.parse(localStorage.getItem("messages") || "[]");
  const list = document.getElementById("message-list");
  list.innerHTML = "";
  messages.forEach(msg => {
    const li = document.createElement("li");
    li.textContent = msg;
    list.appendChild(li);
  });
}

function submitMessage() {
  const input = document.getElementById("message-input");
  const msg = input.value.trim();
  if (msg) {
    const messages = JSON.parse(localStorage.getItem("messages") || "[]");
    messages.push(msg);
    localStorage.setItem("messages", JSON.stringify(messages));
    input.value = "";
    loadMessages();
  }
}

loadMessages();
