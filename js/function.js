
// noyakhali-donation

document.querySelector('#Donate-now-btn1').addEventListener('click', function () {


    const donateAmount = document.querySelector('#Amount-1').value;
    const donateAmountTk = Number(donateAmount);
    const donateFund = document.querySelector('#donate-balance1').innerText;
    const donateFundTk = Number(donateFund);
    const donateFundBalance = donateFundTk + donateAmountTk;

    document.getElementById('donate-balance1').innerText = donateFundBalance;

    if (isNaN(donateAmount) || donateAmount < 0) {
        alert('Invalid balance.please try again')
    }
    document.querySelector('#Amount-1').value = '';

});

//feni donation club  

document.querySelector('#Donate-now-btn2').addEventListener('click', function () {


    const donateAmount = document.querySelector('#Amount-2').value;
    const donateAmountTk = Number(donateAmount);
    const donateFund = document.querySelector('#donate-balance2').innerText;
    const donateFundTk = Number(donateFund);
    const donateFundBalance = donateFundTk + donateAmountTk;

    document.getElementById('donate-balance2').innerText = donateFundBalance;

    if (isNaN(donateAmount) || donateAmount < 0) {
        alert('Invalid balance.please try again')
    }
    document.querySelector('#Amount-2').value = '';

});


// donate in quta 

document.querySelector('#Donate-now-btn3').addEventListener('click', function () {


    const donateAmount = document.querySelector('#Amount-3').value;
    const donateAmountTk = Number(donateAmount);
    const donateFund = document.querySelector('#donate-balance3').innerText;
    const donateFundTk = Number(donateFund);
    const donateFundBalance = donateFundTk + donateAmountTk;

    document.getElementById('donate-balance3').innerText = donateFundBalance;

    if (isNaN(donateAmount) || donateAmount < 0) {
        alert('Invalid balance.please try again')
    }
    document.querySelector('#Amount-3').value = '';

});

// function for onclick
//btn one

function onclickBtn1(){

    const inputAmount = document.getElementById('Amount-1').value;
    const inputTk = Number(inputAmount)

    const heroBalance = document.getElementById('main-balance').innerText;
    const balanceAmount = Number(heroBalance);

    const currentBalance = balanceAmount - inputTk;

    document.getElementById('main-balance').innerText = currentBalance;

    console.log('clicked' , currentBalance)
};

//btn two

function onclickBtn2(){

    const inputAmount = document.getElementById('Amount-2').value;
    const inputTk = Number(inputAmount)

    const heroBalance = document.getElementById('main-balance').innerText;
    const balanceAmount = Number(heroBalance);

    const currentBalance = balanceAmount - inputTk;

    document.getElementById('main-balance').innerText = currentBalance;

    console.log('clicked' , currentBalance)
};

//btn three

function onclickBtn3(){

    const inputAmount = document.getElementById('Amount-3').value;
    const inputTk = Number(inputAmount)

    const heroBalance = document.getElementById('main-balance').innerText;
    const balanceAmount = Number(heroBalance);

    const currentBalance = balanceAmount - inputTk;

    document.getElementById('main-balance').innerText = currentBalance;

    console.log('clicked' , currentBalance)
};

