function showSection(sectionId) {

    let sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.classList.add('hidden');
    });

    let activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');

    // 🔥 Scroll smoothly to section
    activeSection.scrollIntoView({
        behavior: "smooth"
    });
}