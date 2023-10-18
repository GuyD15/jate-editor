const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('Prompt available');
    console.log('Event details: ' + e);
    e.preventDefault();
    // storing the event
    window.storedPrompt = e;
    // Displaying the installation button
    installButton.classList.remove('hidden');
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const eventPrompt = window.deferredPrompt;
    if (!eventPrompt) {
        return;
    }
    // show the prompt
    eventPrompt.prompt();
    // reset the deferred prompt 
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('install')
    window.deferredPrompt = null;
});
