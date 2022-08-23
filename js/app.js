// all player selection button 
document.getElementById('player1_btn').addEventListener('click', function () {
    playerSelection('max-well', 'player1_btn');
});
document.getElementById('player2_btn').addEventListener('click', function () {
    playerSelection('villers', 'player2_btn');
});
document.getElementById('player3_btn').addEventListener('click', function () {
    playerSelection('gayle', 'player3_btn');
});
document.getElementById('player4_btn').addEventListener('click', function () {
    playerSelection('boult', 'player4_btn');
});
document.getElementById('player5_btn').addEventListener('click', function () {
    playerSelection('zampa', 'player5_btn');
});
document.getElementById('player6_btn').addEventListener('click', function () {
    playerSelection('anderson', 'player6_btn');
});
document.getElementById('player7_btn').addEventListener('click', function () {
    playerSelection('babar', 'player7_btn');
});
document.getElementById('player8_btn').addEventListener('click', function () {
    playerSelection('archer', 'player8_btn');
});
document.getElementById('player9_btn').addEventListener('click', function () {
    playerSelection('warner', 'player9_btn');
});


// calcutale button actions 
document.getElementById('calculate_button').addEventListener('click', function () {
    const playerRate = parseFloat(document.getElementById('playerRate').value);
    document.getElementById('playerRate').value = '';
    const players = document.getElementById('PlayerNameContainer').childNodes.length;
    const actualPlayers = players - 1;
    const previousPlayerExpense = document.getElementById('playerExpense').innerText;
    if (isNaN(playerRate)) {
        alert("Please input a numeric value!");
    } else {
        const newPlayerExpense = playerRate * actualPlayers;
        document.getElementById('playerExpense').innerText = newPlayerExpense;

    }

});


// calculate total button functionality 
document.getElementById('calculate_total').addEventListener('click', function () {

    const PlayerExpense = parseFloat(document.getElementById('playerExpense').innerText);
    const previousManagerSelary = parseFloat(document.getElementById('managerSelary').value);
    document.getElementById('managerSelary').value = '';
    const previousCoachSelary = parseFloat(document.getElementById('coachSelary').value);
    document.getElementById('coachSelary').value = '';
    if (isNaN(PlayerExpense) || isNaN(previousManagerSelary) || isNaN(previousCoachSelary)) {
        alert('Please input a numeric value!');
    } else {
        const newGrandTotal = PlayerExpense + previousManagerSelary + previousCoachSelary;
        document.getElementById('grandTotal').innerText = newGrandTotal;

    }

});