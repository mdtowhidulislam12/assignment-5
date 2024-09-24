

function showSectionById(id) {
    document.querySelector('#History-container').classList.add('hidden');
    document.querySelector('#donation-page').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}


//create element for history

//donation-1
function addTransaction1() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    const currentTime = now.toLocaleTimeString([], options);

    const amount = document.getElementById('Amount-1').value;

    const transactionContainer = document.getElementById('History-container');
    const newTransaction = document.createElement('div');
    newTransaction.style.border = '1px solid gray-500';
    newTransaction.style.borderRadius = '1rem';
    newTransaction.style.padding = '10px';

    const transactionContent = `
    <div class = " border rounded-lg p-4">
       <p class = "text-xl font-bold"> ${amount} Taka is donated for famine-2024 at Noyakhali,Bangladesh. </P> <br>
       <p> Date: ${date}     Time: ${currentTime} (Bangladesh standard time) </p>
       </div>
    `;
    newTransaction.innerHTML = transactionContent;

    transactionContainer.appendChild(newTransaction);

};

//donation-2
function addTransaction2() {
    const now = new Date();
    const date = now.toLocaleDateString();

    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    const currentTime = now.toLocaleTimeString([], options);

    const amount = document.getElementById('Amount-2').value;

    const transactionContainer = document.getElementById('History-container');
    const newTransaction = document.createElement('div');
    newTransaction.style.border = '1px solid gray-500';
    newTransaction.style.borderRadius = '1rem';
    newTransaction.style.padding = '10px';

    const transactionContent = `
    <div class = " border rounded-lg p-4">
       <p class = "text-xl font-bold"> ${amount} Taka is donated for flood relief in Feni,Bangladesh. </P> <br>
       <p> Date: ${date}     Time: ${currentTime} (Bangladesh standard time) </p>
       </div>
    `;
    newTransaction.innerHTML = transactionContent;

    transactionContainer.appendChild(newTransaction);

};

//donation-3

function addTransaction3() {
    const now = new Date();
    const date = now.toLocaleDateString();

    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    const currentTime = now.toLocaleTimeString([], options);

    const amount = document.getElementById('Amount-3').value;

    const transactionContainer = document.getElementById('History-container');
    const newTransaction = document.createElement('div');
    newTransaction.style.border = '1px solid gray-500';
    newTransaction.style.borderRadius = '1rem';
    newTransaction.style.padding = '10px';

    const transactionContent = `
    <div class = " border rounded-lg p-4">
       <p class = "text-xl font-bold"> ${amount} Taka is donated for Aid fir injured in the Quota movement,Bangladesh. </P> <br>
       <p> Date: ${date}     Time: ${currentTime} (Bangladesh standard time) </p>
       </div>
    `;
    newTransaction.innerHTML = transactionContent;

    transactionContainer.appendChild(newTransaction);

};

