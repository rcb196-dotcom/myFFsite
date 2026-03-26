document.addEventListener("DOMContentLoaded", function () {

// listener: jungle fact rotater 
    let factBtn = document.getElementById("factBtn");

    if (factBtn) {

        let facts = [
            "Cheetahs can accelerate from 0 to 60 mph in just a few seconds.",
            "Tigers have unique stripe patterns like fingerprints.",
            "Lions spend most of their day resting—up to 20 hours!",
            "Cheetahs use their tails to steer while running at high speeds.",
            "Tigers are the only big cats that enjoy swimming regularly.",
            "Jungle vines can grow over 150 feet long.",
            "Some tropical frogs glow in the dark to avoid predators."
        ];

        let index = 0;

        factBtn.addEventListener("click", function () {

            let factText = document.getElementById("factText");

            if (factText) {
                factText.innerHTML = facts[index];
                index = (index + 1) % facts.length;
            }
        });
    }

// hover glow
    let images = document.querySelectorAll("img");

    images.forEach(function (img) {
        img.addEventListener("mouseover", function () {
            img.classList.add("glow");
        });

        img.addEventListener("mouseout", function () {
            img.classList.remove("glow");
        });
    });

// listener: character trait reveal 
    let characters = document.querySelectorAll(".charactergrid section");

    let traits = [
        "Brave and always ready for adventure.",
        "Fast, playful, and full of energy.",
        "A strong leader who cares about his friends."
    ];

    characters.forEach(function (card, index) {

        card.addEventListener("click", function () {

            let existing = card.querySelector(".trait");

            if (existing) {
                existing.remove();
            } else {
                let trait = document.createElement("p");
                trait.classList.add("trait");
                trait.innerHTML = traits[index];
                card.appendChild(trait);
            }

        });

    });

// listener: sunset mode 
    let junglePage = document.querySelector(".jungle-page");

    if (junglePage) {
        junglePage.addEventListener("dblclick", function () {
            junglePage.classList.toggle("sunset");
        });
    }

});