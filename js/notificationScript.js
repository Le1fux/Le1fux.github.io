// notificationScript.js
document.addEventListener('DOMContentLoaded', function() {
    const notificationTrigger = document.getElementById('notification-trigger');
    const notificationContainer = document.getElementById('notification-container');

    notificationTrigger.addEventListener('click', function() {
        // Check if the notification is currently displayed
        if (notificationContainer.style.display === 'none' || notificationContainer.style.display === '') {
            // Make it visible
            notificationContainer.style.display = 'block';
            // Use a timeout to allow the display change to take effect before changing opacity
            setTimeout(() => {
                notificationContainer.style.opacity = '1';
                notificationContainer.style.transform = 'translateY(0)';
            }, 10); // Delay to ensure the display change is registered
        } else {
            // Hide the notification
            notificationContainer.style.opacity = '0';
            notificationContainer.style.transform = 'translateY(-20px)';
            // Use a timeout to wait for the transition to finish before setting display to none
            setTimeout(() => {
                notificationContainer.style.display = 'none';
            }, 300); // Match this duration with your CSS transition time
        }
    });

    // Optional: Close notification when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target !== notificationTrigger && !notificationContainer.contains(event.target)) {
            notificationContainer.style.opacity = '0';
            notificationContainer.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                notificationContainer.style.display = 'none';
            }, 300);
        }
    });
});