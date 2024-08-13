document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');

    fetch('data/events.json')
        .then(response => response.json())
        .then(events => {
            const event = events.find(event => event.id == eventId);
            const eventInfo = document.getElementById('event-info');
            eventInfo.innerHTML = `
                <h2>${event.title}</h2>
                <img src="${event.image}" alt="${event.title}">
                <p>${event.date}</p>
                <p>${event.details}</p>
                <p>Price: $${event.price}</p>
            `;
        })
        .catch(error => console.error('Error loading event details:', error));

    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const ticketType = document.getElementById('ticket-type').value;
        const quantity = document.getElementById('quantity').value;

        const bookingDetails = {
            event: eventId,
            ticketType: ticketType,
            quantity: quantity
        };

        localStorage.setItem('booking', JSON.stringify(bookingDetails));
        window.location.href = 'confirmation.html';
    });
});
