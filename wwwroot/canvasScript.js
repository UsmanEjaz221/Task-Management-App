// JavaScript function to render an animated circular progress chart
window.renderCircularProgress = (completedTasks, totalTasks) => {
    const canvas = document.getElementById("circularProgressChart");
    const ctx = canvas.getContext("2d");

    const percentage = completedTasks / totalTasks; // Calculate percentage
    const startAngle = -Math.PI / 2; // Start from the top
    const endAngle = startAngle + percentage * 2 * Math.PI;

    // Animation variables
    let currentAngle = startAngle; // Start animation at the top
    const animationSpeed = 20; // Higher is slower
    const increment = (endAngle - startAngle) / 100; // Small angle increment

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a single frame
    const drawFrame = () => {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the background circle
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 10, 0, 2 * Math.PI);
        ctx.strokeStyle = "#d4d4d4";
        ctx.lineWidth = 15;
        ctx.stroke();

        // Draw the progress circle
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 10, startAngle, currentAngle);
        ctx.strokeStyle = "#6a67ce";
        ctx.lineWidth = 15;
        ctx.lineCap = "round"; // Rounded edges for progress line
        ctx.stroke();

        // Check if the animation is complete
        if (currentAngle < endAngle) {
            currentAngle += increment; // Increment angle
            requestAnimationFrame(drawFrame); // Call again for smooth animation
        }
    };

    drawFrame(); // Start the animation
};


window.initializeCalendar = () => {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // The view format (you can also use 'listWeek', 'timeGridDay', etc.)
        locale: 'en', // Language settings
        events: [
            {
                title: 'Meeting with John',
                start: '2024-12-23T10:00:00',
                end: '2024-12-23T11:00:00',
                description: 'Discuss the upcoming project tasks.'
            },
            {
                title: 'Deadline for Report',
                start: '2024-12-25T00:00:00',
                description: 'Submit the final report to the manager.'
            }
        ]
    });

    calendar.render(); // Renders the calendar
};
