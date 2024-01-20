document.addEventListener("DOMContentLoaded", function () {
    const bookingHistoryContainer = document.getElementById('bookingHistory');

    function createBookingHistoryItem(busName, date, approved) {
        const bookingHistoryItem = document.createElement('tr');
        bookingHistoryItem.innerHTML = `
            <td>${busName}</td>
            <td>${date}</td>
            <td>${approved ? 'Yes' : 'No'}</td>
        `;
        return bookingHistoryItem;
    }

    for (let i = 1; i <= 10; i++) {
        const busName = `Bus ${i}`;
        const date = `January ${i}, 2024`;
        const approved = i % 2 === 0;

        const bookingHistoryItem = createBookingHistoryItem(busName, date, approved);
        bookingHistoryContainer.appendChild(bookingHistoryItem);
    }
});
