window.addEventListener("keydown", (key) => {
    if (key.keyCode === 18){
        let pagename = window.prompt("Prompt Page");
        if (pagename == "list"){
            alert("Blog,")
            return
        }
        window.location.href = 'https://lenvxcodes.netlify.app/' + pagename
    }
});