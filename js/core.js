function playerSelection(playerId, buttonId) {
    const selectedPlayers = document.getElementById('PlayerNameContainer').childNodes.length;
    // no selection alert 
    const noSelectionAlert = document.getElementById('NoneAlert');
    noSelectionAlert.innerText = '';

    // selection validation, button dissabled option 
    if (selectedPlayers < 6) {
        const player_name = document.getElementById(playerId).innerText;
        const li = document.createElement('li');

        li.innerText = player_name;
        PlayerNameContainer.appendChild(li);
        document.getElementById(buttonId).setAttribute('disabled', true);
        return;
    } else {
        alert("you can't hire more than 5 foreign players!");
    }

}

