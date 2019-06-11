function selectPlayer(numberOfPlayers) {
    if (numberOfPlayers === 1) {
        console.log('xalxalxa', 1);
        document.getElementById('singlePlayerGame').removeAttribute('hidden');
        document.getElementById('multiPlayerGame').setAttribute('hidden', "true");
        document.getElementById('select-mode').setAttribute('hidden',  "true");
    } else {
        console.log('xalxalxa', 2);
        document.getElementById('singlePlayerGame').setAttribute('hidden');
        document.getElementById('multiPlayerGame').removeAttribute('hidden');
        document.getElementById('select-mode').setAttribute('hidden');
    }
}

function voltarSelecaoModo() {
    console.log('xalxalxa', 123);
    document.getElementById('singlePlayerGame').setAttribute('hidden');
    document.getElementById('multiPlayerGame').setAttribute('hidden');
    document.getElementById('select-mode').removeAttribute('hidden');
}