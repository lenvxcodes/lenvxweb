window.addEventListener("keydown", (key) => {
    if (key.keyCode === 18){
        let promptpage = window.prompt("Prompt Page");
        if (promptpage === "list"){
            alert("Blog.")
            return
        }
	if (promptpage === "dr blog"){
        window.location.href = 'https://lenvxcodes.netlify.app/blog'
	return
	}
	if (promptpage === "help"){
	alert("dr - page redirector. list - page list. new - alerts what's new! src - source")
	return
	}
	if (promptpage === "new"){
	alert("whats new?: Added a new logo.")
	return
    }	
	if (promptpage === "src"){
		window.location.href = 'https://github.com/lenvxcodes/lenvxweb'
		return
	}	
	else{
	alert("Invalid Response/Canceled")
	return
	}
    }
});
