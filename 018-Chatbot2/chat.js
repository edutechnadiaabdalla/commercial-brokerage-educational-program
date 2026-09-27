document.addEventListener('DOMContentLoaded', function () {
    const chatboxButton = document.querySelector('.chatboxbutton');
    const chatboxSupport = document.querySelector('.chatbox__support');
    const chatbox = document.querySelector('.chatbox');

    if (chatboxButton && chatboxSupport) {
        chatboxButton.addEventListener('click', function (e) {
            e.stopPropagation();
            chatboxSupport.classList.toggle('chatbox__support--active');
        });
    }

    document.addEventListener('click', function (event) {
        if (!chatbox || !chatboxSupport) return;
        if (chatboxSupport.classList.contains('chatbox__support--active') &&
            !chatbox.contains(event.target) &&
            event.target !== chatboxButton) {
            chatboxSupport.classList.remove('chatbox__support--active');
        }
    });

    const popupLinks = document.querySelectorAll('.chatbot-dropdown-menu a');
    popupLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const popupId = this.getAttribute('href');
            const popup = document.querySelector(popupId);
            if (popup) {
                popup.style.display = 'block';
                const chatbotContainer = document.querySelector('.chatbot-container');
                if (chatbotContainer) chatbotContainer.scrollTop = 0;
            }
        });
    });

    const closeButtons = document.querySelectorAll('.button7');
    closeButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            this.closest('.popup').style.display = 'none';
        });
    });

    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.addEventListener('click', function (e) {
            if (e.target === this) this.style.display = 'none';
        });
    });
});

function showResponse(button, message) {
    const optionsDiv = button.parentElement;
    const responseDiv = optionsDiv.nextElementSibling;
    optionsDiv.style.display = 'none';
    responseDiv.style.display = 'block';
    responseDiv.querySelector('#response-text').textContent = message;
}

function closeResponse(closeButton) {
    const responseDiv = closeButton.parentElement;
    const optionsDiv = responseDiv.previousElementSibling;
    responseDiv.style.display = 'none';
    optionsDiv.style.display = 'flex';
}