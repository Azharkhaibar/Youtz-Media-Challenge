document.addEventListener("DOMContentLoaded", function () {
    const fuelConsumptionData = [
        { oilName: "Pertalite", oilPrice: "50,000" },
        { oilName: "Pertamax", oilPrice: "55,000" },
        { oilName: "Pertamax", oilPrice: "75,000" },
        { oilName: "Pertamax Turbo", oilPrice: "80,000" },
  
    ];

    function displayFuelConsumption() {
        const fuelCardContainer = document.getElementById('fuelCardContainer');

        fuelConsumptionData.forEach((item, index) => {
            const fuelCard = createFuelCard(item, index + 1);
            fuelCardContainer.appendChild(fuelCard);
        });
    }

    function createFuelCard(item, index) {
        const fuelCard = document.createElement('div');
        fuelCard.classList.add('fuel-card');
        fuelCard.innerHTML = `
            <h3>${index}. Fuel Consumption</h3>
            <table>
                <tr>
                    <th>Oil Name</th>
                    <th>Oil Price</th>
                </tr>
                <tr>
                    <td>${item.oilName}</td>
                    <td>${item.oilPrice}</td>
                </tr>
            </table>
        `;
        return fuelCard;
    }

    function addFuel() {
        const oilNameInput = document.getElementById('oilName');
        const oilPriceInput = document.getElementById('oilPrice');

        const newOilName = oilNameInput.value.trim();
        const newOilPrice = oilPriceInput.value.trim();

        if (newOilName && newOilPrice) {
            const newItem = { oilName: newOilName, oilPrice: newOilPrice };
            const newIndex = fuelConsumptionData.length + 1;
            
            fuelConsumptionData.push(newItem);

            const fuelCardContainer = document.getElementById('fuelCardContainer');
            const newFuelCard = createFuelCard(newItem, newIndex);
            fuelCardContainer.appendChild(newFuelCard);
            oilNameInput.value = '';
            oilPriceInput.value = '';
        } else {
            alert('Please enter both oil name and oil price.');
        }
    }

    
    displayFuelConsumption();

    const addFuelBtn = document.getElementById('addFuelBtn');
    addFuelBtn.addEventListener('click', addFuel);
});

