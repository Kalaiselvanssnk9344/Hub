
document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-btn');

    let responses = {};

    // Load responses from JSON file
    fetch('responses.json')
        .then(response => response.json())
        .then(data => {
            responses = data;
        })
        .catch(error => console.error('Error loading responses:', error));

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');

        const symbol = document.createElement('span');
        symbol.classList.add('message-symbol');
        symbol.textContent = sender === 'user' ? '👤' : '🤖';

        const text = document.createElement('span');
        text.classList.add('message-text');
        text.textContent = message;

        messageElement.appendChild(symbol);
        messageElement.appendChild(text);

        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function handleUserInput() {
        const messageText = userInput.value.trim();
        if (messageText) {
            addMessage('user', messageText);
            userInput.value = '';

            const botResponse = responses[messageText] || "I didn't understand that. Could you please rephrase?";
            setTimeout(() => {
                addMessage('bot', botResponse);
            }, 500); // Simulate delay
        }
    }

    sendButton.addEventListener('click', handleUserInput);

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleUserInput();
        }
    });
});




// chatbot box display 
let chat_open_container = document.getElementById("chat_open_container");
let chat_bot_input_to_chatbox_container = document.querySelector("#chat_bot_input_to_chatbox_container");
let cancel_chatbot = document.getElementById("cancel_chatbot");
function chatboxshow(){
chat_bot_input_to_chatbox_container.style.display = "block";
chat_open_container.style.display='none';
}
function hidechatbox(){
chat_bot_input_to_chatbox_container.style.display = "none";
chat_open_container.style.display='flex';

}

chat_open_container.addEventListener("click", chatboxshow);
cancel_chatbot.addEventListener("click", hidechatbox);



