// Toggle chatbot visibility
document.addEventListener('DOMContentLoaded', function () {
    const chatboxButton = document.querySelector('.chatboxbutton');
    const chatboxSupport = document.querySelector('.chatbox__support');

    if (chatboxButton && chatboxSupport) {
        chatboxButton.addEventListener('click', function () {
            chatboxSupport.classList.toggle('chatbox__support--active');

            // Change button text based on state
            if (chatboxSupport.classList.contains('chatbox__support--active')) {
                this.textContent = 'X';
                this.style.backgroundColor = '#eee';
            } else {
                this.textContent = 'Open Chatbot';
                this.style.backgroundColor = '#eee';
            }
        });
    }

// Close chatbot when clicking outside
    document.addEventListener('click', function (event) {
        const chatbox = document.querySelector('.chatbox');
        const button = document.querySelector('.chatboxbutton');

        if (chatboxSupport.classList.contains('chatbox__support--active') &&
            !chatbox.contains(event.target) &&
            event.target !== button) {
            chatboxSupport.classList.remove('chatbox__support--active');
            button.textContent = 'Chatbot';
            button.style.backgroundColor = '#2c3e50';
        }
    });

// Popup functionality
    const popupLinks = document.querySelectorAll('.chatbot-dropdown-menu a');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.button7');

    popupLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const popupId = this.getAttribute('href');
            document.querySelector(popupId).style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            this.closest('.popup').style.display = 'none';
        });
    });


// Close popup when clicking outside
    popups.forEach(popup => {
        popup.addEventListener('click', function (e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
});

function showResponse(button, message) {
    const optionsDiv = button.parentElement;
    const responseDiv = optionsDiv.nextElementSibling;

   // Hide buttons
    optionsDiv.style.display = 'none';

   // Show response
    responseDiv.style.display = 'block';
    responseDiv.querySelector('#response-text').textContent = message;
}

function closeResponse(closeButton) {
    const responseDiv = closeButton.parentElement;
    const optionsDiv = responseDiv.previousElementSibling;

    responseDiv.style.display = 'none';

    optionsDiv.style.display = 'flex';
}

        popupLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const popupId = this.getAttribute('href');
                const popup = document.querySelector(popupId);

                popup.style.display = 'block';

                setTimeout(() => {
                    const chatbotContainer = document.querySelector('.chatbot-container');
                    chatbotContainer.scrollTop = 0;
                }, 10);
            });
        });
