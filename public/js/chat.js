const messageList = document.getElementById("messages");

const chatId = document.getElementById("chatId").innerText;
const userEmail = document.getElementById("userEmail").innerText;

let socket;
let room;

function connectToWebsocket() {
    socket = io("http://localhost:3001");


// socket.emit("room", room);

    socket.on("connect", () => {
        console.log(`Connected to server as ${userEmail}. Socket id : ${socket.id}`);
    });

    socket.on("new_message", (message) => {
        const listItem = document.createElement("li");
        listItem.innerText = message.message;
        messageList.appendChild(listItem);
    });
}

function loadMessagesHistory(messages) {
    messages.forEach((message) => {
        const listItem = document.createElement("li");
        listItem.innerText = message.message;
        messageList.appendChild(listItem);
    })
}

// Get chat from server
fetch(`/chat/${chatId}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        loadMessagesHistory(data.messages)
        connectToWebsocket();
    })
    .catch((error) => {
        console.error('Error fetching user data:', error);
    });

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("messageForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the message value
        const messageInput = document.getElementById("message");
        const message = messageInput.value;

        try {
            // Send the message data to the server
            const response = await fetch(`/chat/${chatId}/new`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({message: message}),
            });

            if (response.ok) {
                // Clear the input field
                messageInput.value = "";
            } else {
                console.error("Failed to send message");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });
});