// index.js

document.addEventListener('DOMContentLoaded', () => {
    fetch('data/events.json')
        .then(response => response.json())
        .then(events => {
            const eventContainer = document.getElementById('event-container');
            events.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.classList.add('event-card');
                eventCard.innerHTML = `
                    <img src="${event.image}" alt="${event.title}">
                    <div class="event-info">
                        <h3>${event.title}</h3>
                        <p>${event.description}</p>
                        <p><strong>Date:</strong> ${event.date}</p>
                        <button onclick="window.location.href='event-details.html?id=${event.id}'">View Details</button>
                    </div>
                `;
                eventContainer.appendChild(eventCard);
            });
        })
        .catch(error => console.error('Error loading events:', error));
});
