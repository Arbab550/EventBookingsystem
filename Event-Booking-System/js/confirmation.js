document.addEventListener('DOMContentLoaded', () => {
    const booking = JSON.parse(localStorage.getItem('booking'));

    if (booking) {
        fetch('data/events.json')
            .then(response => response.json())
            .then(events => {
                const event = events.find(event => event.id == booking.event);
                const confirmationDetails = document.getElementById('confirmation-details');
                confirmationDetails.innerHTML = `
                    <h2>Thank You for Your Booking!</h2>
                    <p><strong>Event:</strong> ${event.title}</p>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Ticket Type:</strong> ${booking.ticketType}</p>
                    <p><strong>Quantity:</strong> ${booking.quantity}</p>
                    <button onclick="window.print()">Print Confirmation</button>
                `;
            })
            .catch(error => console.error('Error loading booking details:', error));
    } else {
        document.getElementById('confirmation-details').innerHTML = '<p>No booking found.</p>';
    }
});
