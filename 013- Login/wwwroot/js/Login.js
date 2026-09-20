
//جديد
// ✅ عند تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", () => {

    /* 🎯 تحريك الملصقات عند التركيز أو الكتابة */
    const inputs = document.querySelectorAll(".input-box input");
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.parentElement.classList.add("active");
        });

        input.addEventListener("blur", () => {
            if (input.value === "") {
                input.parentElement.classList.remove("active");
            }
        });

        // للحالة المحفوظة (auto-filled)
        if (input.value !== "") {
            input.parentElement.classList.add("active");
        }
    });

    /* 🌌 تأثير الجزيئات (Particles Background) */
    const particleContainer = document.getElementById("particles");

    if (particleContainer) {
        const numParticles = 25;
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");
            particle.style.width = `${Math.random() * 6 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.opacity = Math.random();
            particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
            particleContainer.appendChild(particle);
        }
    }

    /* 📱 إصلاح تأخير اللمس في الموبايل */
    const buttons = document.querySelectorAll("button, .btn");
    buttons.forEach(btn => {
        btn.addEventListener("touchstart", () => {
            btn.click();
        });
    });
});
