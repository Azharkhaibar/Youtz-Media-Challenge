document.addEventListener("DOMContentLoaded", function () {
    const reservationForm = document.getElementById('vehicleReservationForm');

    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const employeeName = document.getElementById('employeeName').value;
        const department = document.getElementById('department').value;
        const vehicleType = document.getElementById('vehicleType').value;
        const purpose = document.getElementById('purpose').value;
        const reservationDate = document.getElementById('reservationDate').value;
        const approval = document.getElementById('approval').value;

        
        console.log('Reservation Request Submitted:');
        console.log('Employee Name:', employeeName);
        console.log('Department:', department);
        console.log('Vehicle Type:', vehicleType);
        console.log('Purpose of Use:', purpose);
        console.log('Reservation Date:', reservationDate);
        console.log('Approval Status:', approval);
      
        if (approval === 'approved') {
            alert('Reservation Approved!');
        } else if (approval === 'rejected') {
            alert('Reservation Rejected!');
        } else {
            alert('Reservation Pending Approval.');
        }
        reservationForm.reset();
    });
});
