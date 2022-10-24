window.addEventListener("keydown", (key) => {
    if (key.keyCode === 18){
        let pagename = window.prompt("Prompt Page");
        window.location.href = 'https://lenvxcodes.netlify.app/' + pagename
    }
});