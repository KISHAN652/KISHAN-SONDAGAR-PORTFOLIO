document.addEventListener('DOMContentLoaded', () => {
    initChatbot();
});

function initChatbot() {
    const chatbotToggler = document.querySelector('.chatbot-toggler');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatBody = document.querySelector('.chat-body');
    const suggestionsContainer = document.querySelector('.chat-suggestions');
    const closeBtn = document.querySelector('.chat-close-btn');

    // Chatbot Data
    const botData = {
        "Tell me about Kishan": "Hi! I’m Kishan 🚀, a passionate frontend web developer who loves coding 💻 and building interactive, user-friendly web experiences 🌐.",
        "Kishan's Projects": "Healthcare Chatbot 🤖, ToDo App (PWA) ✅📱, Weather App (PWA) ☀️🌧️, Portfolio Website 💼🌐, E-commerce Website 🛒, Micro-interaction Gallery ✨🖱️, Job Portal 💼📄, Spotify Clone 🎵🎧, Online Code Editor 💻🧠, Expense Tracker 💰📊, Admin Dashboard 📊⚙️.",
        "Skills": "HTML, CSS, JavaScript 🌐, Responsive Design 📐, PWA 📱, UI/UX & Micro-interactions ✨, Python & Flask 🐍, AI & API Integrations 🤖.",
        "Education": "BCA Graduate 🎓 with strong focus on frontend development and hands-on projects.",
        "Career Goals": "Become a full-time frontend developer 👨‍💻 and work on impactful, scalable products 🚀.",
        "Availability": "Open for freelancing 💼 and full-time frontend opportunities 👨‍💻.",
        "Contact": "Email: gajjarsk111@gmail.com ✉️"
    };

    let isChatOpen = false;

    // Toggle Chat
    function toggleChat() {
        isChatOpen = !isChatOpen;
        chatbotContainer.classList.toggle('open');
        chatbotToggler.classList.toggle('open');

        // Initial Greeting if first open and empty
        const messages = chatBody.querySelectorAll('.message');
        if (isChatOpen && messages.length === 0) {
            simulateBotResponse("Hello! I'm Kishan's Portfolio Bot 🤖. How can I help you today?");
        }
    }

    chatbotToggler.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleChat();
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleChat();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (isChatOpen &&
            !chatbotContainer.contains(e.target) &&
            !chatbotToggler.contains(e.target)) {
            toggleChat();
        }
    });

    // Handle Quick Question Click
    function handleSuggestionClick(question) {
        addMessage(question, 'user');

        // Remove typing indicator if exists
        const existingTyping = document.querySelector('.typing-indicator');
        if (existingTyping) existingTyping.remove();

        // Simulate thinking delay
        showTypingIndicator();

        setTimeout(() => {
            const response = botData[question] || "I'm not sure about that, but feel free to ask something else!";
            removeTypingIndicator();
            addMessage(response, 'bot');
        }, 1000);
    }

    // Add Message to Chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);

        let content = '';
        if (sender === 'bot') {
            content = `
                <div class="bot-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-text">${text}</div>
            `;
        } else {
            content = `<div class="message-text">${text}</div>`;
        }

        messageDiv.innerHTML = content;
        chatBody.appendChild(messageDiv);
        scrollToBottom();
    }

    // Typing Indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('typing-indicator');
        typingDiv.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        chatBody.appendChild(typingDiv);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const typing = document.querySelector('.typing-indicator');
        if (typing) typing.remove();
    }

    function simulateBotResponse(text) {
        showTypingIndicator();
        setTimeout(() => {
            removeTypingIndicator();
            addMessage(text, 'bot');
        }, 800);
    }

    function scrollToBottom() {
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Initialize Suggestions
    function initSuggestions() {
        suggestionsContainer.innerHTML = '';
        Object.keys(botData).forEach(key => {
            const chip = document.createElement('div');
            chip.classList.add('suggestion-chip');
            chip.textContent = key;
            chip.addEventListener('click', () => handleSuggestionClick(key));
            suggestionsContainer.appendChild(chip);
        });
    }

    initSuggestions();
}
