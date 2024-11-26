// Ensure the DOM is fully loaded before accessing the canvas
window.onload = function() {
    const canvas = document.getElementById('canvasAnimation');
    const ctx = canvas.getContext('2d');

    // Adjust the canvas size based on the window dimensions
    canvas.width = window.innerWidth;
    canvas.height = 400;  // Height of the animation area

    // Set the number of particles
    const numParticles = 100;
    const particles = [];

    // Particle constructor
    function Particle(x, y, size, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    // Create particles
    for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 4 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * 3 - 1.5;
        const speedY = Math.random() * 3 - 1.5;
        const color = 'rgba(255, 255, 255, ' + Math.random() + ')';
        particles.push(new Particle(x, y, size, color, speedX, speedY));
    }

    // Update and draw particles
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        particles.forEach((particle, index) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Recycle particles that go off-screen
            if (particle.x > canvas.width || particle.x < 0 || particle.y > canvas.height || particle.y < 0) {
                particles[index] = new Particle(Math.random() * canvas.width, Math.random() * canvas.height, particle.size, particle.color, Math.random() * 3 - 1.5, Math.random() * 3 - 1.5);
            }

            // Draw the particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });

        requestAnimationFrame(animateParticles); // Repeat the animation
    }

    // Start the animation
    animateParticles();
};


