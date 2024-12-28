// Чат с поддержкой
function toggleChat() {
  var chatBox = document.getElementById("chatBox");
  chatBox.style.display = (chatBox.style.display === "block") ? "none" : "block";

// Если чат открыт, генерируем сообщение от робота
if (chatBox.style.display === "block") {
  var chatBody = document.getElementById("chatBody");
  var messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.innerHTML = `
      <div class="robot-avatar">
          <img src="https://cdn.icon-icons.com/icons2/1371/PNG/512/robot01_90832.png"  alt="Robot Avatar">
      </div>
      <div class="message-text">
          <p>Данная опция пока недоступна, вы можете связаться с нами по нашим соцсетям. Благодарим вас за терпение!</p>
      </div>
  `;
  chatBody.appendChild(messageElement);
}
}



function sendMessage() {
  var messageInput = document.getElementById("messageInput");
  var message = messageInput.value;

  // Проверяем, если сообщение "ок", то робот отвечает "пирожок"
  if (message.toLowerCase() === "никита") {
    var chatBody = document.getElementById("chatBody");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `
      <div class="user-message">
          <p>${message}</p>
      </div>
      <div class="robot-avatar">
          <img src="https://cdn.icon-icons.com/icons2/1371/PNG/512/robot01_90832.png"  alt="Robot Avatar">
      </div>
      <div class="message-text">
          <p>Никита - это вождь племени баобаб, проживающих на юге Африки.</p>
      </div>
    `;
    chatBody.appendChild(messageElement);
    
    // Очистка поля ввода после отправки сообщения
    messageInput.value = "";
  } else {
    // Отправка остальных сообщений
    // Здесь можно добавить код для отправки сообщения на сервер или обработки его другим образом
    // После отправки сообщения, можно добавить его в чат:
    var chatBody = document.getElementById("chatBody");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `
      <div class="user-message">
          <p>${message}</p>
      </div>
    `;
    chatBody.appendChild(messageElement);

    // Очистка поля ввода после отправки сообщения
    messageInput.value = "";
  }
}


