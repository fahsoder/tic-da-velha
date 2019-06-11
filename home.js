function selectPlayer(numberOfPlayers) {
    if (numberOfPlayers === 1) {
        document.getElementById('singlePlayerGame').setAttribute('hidden', false);
        document.getElementById('multiPlayerGame').setAttribute('hidden', true);
    } else {
        document.getElementById('singlePlayerGame').setAttribute('hidden', true);
        document.getElementById('multiPlayerGame').setAttribute('hidden', false);
    }
}