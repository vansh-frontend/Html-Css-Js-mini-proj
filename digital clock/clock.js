const clock = document.getElementById('digital-clock');

        setInterval(() => {
            const date = new Date();
            clock.innerHTML = date.toLocaleTimeString();
        }, 1000);
