const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// [x]: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';

    // [x]: Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', async () => {
        event.prompt();
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed!';
    });
});



// [x]: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // butInstall.setAttribute('disabled');
    // butInstall.textContent = 'Installed!';
    console.log("installed!")
});
