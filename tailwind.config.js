// tailwind.config.js
module.exports = {
    content: [
        './app.php',
        './**/*.php', // your WP theme PHP (index.php, page.php, etc.)
        './resources/js/**/*.vue', // all Vue SFCs
        './resources/js/**/*.js', // any JS modules
    ],

    // Optional: use class-based dark mode for explicit control
    // darkMode: 'class',
};
