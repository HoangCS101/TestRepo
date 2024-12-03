document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButton = document.getElementById('learn-more');
    const spaceFacts = document.getElementById('space-facts');

    const facts = [
        "The Sun is 93 million miles away from Earth.",
        "A day on Venus is longer than a year on Venus.",
        "Jupiter has 79 moons!",
        "Neutron stars are so dense that a sugar-cube-sized amount of material would weigh a billion tons.",
        "There are more stars in the universe than grains of sand on Earth."
    ];

    learnMoreButton.addEventListener('click', () => {
        spaceFacts.innerHTML = facts
            .map(fact => `<li>${fact}</li>`)
            .join('');
    });
});

/* Navigate to the Solar System page */
function navigateToSolarSystem() {
    window.location.href = 'solar-system.html';
}
