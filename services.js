document.addEventListener("DOMContentLoaded", function () {
    const servicesListContainer = document.getElementById('servicesListContainer');
    const serviceForm = document.getElementById('serviceForm');

    function getRandomDay() {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const randomIndex = Math.floor(Math.random() * days.length);
        return days[randomIndex];
    }

    function createServiceItem(busName, date, expense) {
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('service-item');
        serviceItem.innerHTML = `
            <h3>Service Report</h3>
            <ul>
                <li><strong>Bus Name:</strong> ${busName}</li>
                <li><strong>Date:</strong> ${date}</li>
                <li><strong>Day:</strong> ${getRandomDay()}</li>
                <li><strong>Expense:</strong> $${expense}</li>
            </ul>
        `;
        return serviceItem;
    }

    window.addNewServiceReport = function () {
        const busName = document.getElementById('busName').value;
        const date = document.getElementById('date').value;
        const expense = document.getElementById('expense').value;

        if (busName && date && expense) {
            const newServiceItem = createServiceItem(busName, date, expense);
            servicesListContainer.appendChild(newServiceItem);

            // Clear form fields
            serviceForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    };

    
    for (let i = 1; i <= 8; i++) {
        const busName = `Bus ${i}`;
        const date = `January ${i}, 2024`;
        const expense = i * 100;

        const serviceItem = createServiceItem(busName, date, expense);
        servicesListContainer.appendChild(serviceItem);
    }
});
