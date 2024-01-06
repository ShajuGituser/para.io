document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Check for user's preference in local storage
    let darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

    // Apply initial mode
    setMode(darkModeEnabled);

    // Toggle dark and light modes
    darkModeToggle.addEventListener('click', function () {
        darkModeEnabled = !darkModeEnabled;
        setMode(darkModeEnabled);
        // Save user's preference to local storage
        localStorage.setItem('darkModeEnabled', darkModeEnabled);
    });

    function setMode(darkMode) {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
});
