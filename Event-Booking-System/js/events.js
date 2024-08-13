document.addEventListener('DOMContentLoaded', () => {
    fetch('data/events.json')
        .then(response => response.json())
        .then(events => {
            const eventList = document.getElementById('event-list');
            events.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card';
                eventCard.innerHTML = `
                    <img src="${event.image}" alt="${event.title}">
                    <h3>${event.title}</h3>
                    <p>${event.date}</p>
                    <p>${event.description}</p>
                    <a href="event-details.html?id=${event.id}">View Details</a>
                `;
                eventList.appendChild(eventCard);
            });
        })
        .catch(error => console.error('Error loading events:', error));
});
