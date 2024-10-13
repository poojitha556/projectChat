document.getElementById('startButton')?.addEventListener('click', function() {
    window.location.href = 'signup.html';
});

document.getElementById('userForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const projectName = document.getElementById('projectName').value;
    const projectMode = document.getElementById('projectMode').value;

    localStorage.setItem('username', username);
    localStorage.setItem('projectName', projectName);
    localStorage.setItem('projectMode', projectMode);

    window.location.href = 'chat.html';
});

document.getElementById('sendMessage')?.addEventListener('click', function() {
    const message = document.getElementById('messageInput').value;
    const chatWindow = document.getElementById('chatWindow');

    if (message.trim() !== "") {
        chatWindow.innerHTML += `<p><strong>${localStorage.getItem('username')}:</strong> ${message}</p>`;
        document.getElementById('messageInput').value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the bottom
    }
});
