document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.light-flash-container');
    const numberOfLines = 10; // Adjust the number of lines as needed

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    for (let i = 0; i < numberOfLines; i++) {
        const line = document.createElement('div');
        line.classList.add('light-flash-line');
        line.style.top = `${Math.random() * 100}vh`; // Random vertical position
        line.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random duration between 3 and 6 seconds
        line.style.transform = `rotate(${Math.random() * 90 - 45}deg)`; // Random angle between -45 and 45 degrees
        line.style.background = `linear-gradient(to right, transparent, ${getRandomColor()}, transparent)`; // Random color

        container.appendChild(line);
    }
});
