window.addEventListener('DOMContentLoaded', () => {
    // Example: Expose Node.js version to the renderer process safely
    document.getElementById('node-version').innerText = process.versions.node;
});
