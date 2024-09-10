const socket = io();

const messageInput = document.getElementById('message-input');
// const mess = "Client" + messageInput ;
const chatBox = document.getElementById('chat-box');
const sendBtn = document.getElementById('send-btn');
const bot = document.getElementById('parentraa');

sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

    socket.on('chat message', function (msg) {
        // let chat_container = document.createElement('div');
        // chat_container.style.border='0.1rem solid grey';
        // chat_container.color = 'white';
        // chat_container.style.border='0.1rem solid gray';
        // chat_container.style.padding='1rem 0 0 1rem';
        // chat_container.style.borderRadius='0.5rem';
        // chat_container.style.boxShadow='0px 4px 50px 0 #0E9E95';
        // chatBox.appendChild(chat_container);
        // let title_for = document.createElement('div');
        // title_for.textContent = bot.innerHTML;
        // title_for.style.color='white';
        // chat_container.appendChild(title_for);
        const message = document.createElement('div');
        message.className = 'message';
        message.textContent = msg;
        message.style.border='0.1rem solid gray';
        // chat_container.style.padding='1rem 0 0 1rem';
        message.style.borderRadius='0.5rem';
        message.style.boxShadow='0px 0px 20px 0 #0E9E95';
        message.style.margin='1.5rem 0 0 0' ; 

        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom



    });

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        socket.emit('chat message',bot.innerHTML+" " + messageText );
        messageInput.value = ''; // Clear the input field
    }
}


// unavailable and censure container 

let censure_container = document.getElementById("censure_container");
let censure_mechanism = document.querySelector("#censure_mechanism");
function cense(){
    censure_mechanism.style.display = 'block';
}

censure_container.addEventListener("click", cense);











