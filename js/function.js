
// noyakhali-donation

document.querySelector('#Donate-now-btn1').addEventListener('click', function () {


    const donateAmount = document.querySelector('#Amount-1').value;
    const donateAmountTk = Number(donateAmount);
    const donateFund = document.querySelector('#donate-balance1').innerText;
    const donateFundTk = Number(donateFund);

    if (isNaN(donateAmount) || donateAmount < 0 || donateAmount === '') {
        alert('Invalid balance.please try again')
        
        return

    }else{
    const donateFundBalance = donateFundTk + donateAmountTk;

    document.getElementById('donate-balance1').innerText = donateFundBalance;

    onclickBtn1();

    addTransaction1();

    


    document.querySelector('#Amount-1').value = '';

    }
});

//feni donation club  

document.querySelector('#Donate-now-btn2').addEventListener('click', function () {


    const donateAmount = document.querySelector('#Amount-2').value;
    const donateAmountTk = Number(donateAmount);
    const donateFund = document.querySelector('#donate-balance2').innerText;
    const donateFundTk = Number(donateFund);

    if (isNaN(donateAmount) || donateAmount < 0 || donateAmount === '') {
        alert('Invalid balance.please try again')

        return

    } else {
        const donateFundBalance = donateFundTk + donateAmountTk;

        document.getElementById('donate-balance2').innerText = donateFundBalance;

        onclickBtn2();
        addTransaction2();


        document.querySelector('#Amount-2').value = '';
    }
});


// donate in quta 

document.querySelector('#Donate-now-btn3').addEventListener('click', function (event) {


    const donateAmount = document.querySelector('#Amount-3').value;
    const donateAmountTk = Number(donateAmount);
    const donateFund = document.querySelector('#donate-balance3').innerText;
    const donateFundTk = Number(donateFund);

    if (isNaN(donateAmount) || donateAmount < 0 || donateAmount === '') {
        alert('Invalid balance.please try again')

        return

    } else {
        const donateFundBalance = donateFundTk + donateAmountTk;

        document.getElementById('donate-balance3').innerText = donateFundBalance;

        onclickBtn3();
        addTransaction3();


        document.querySelector('#Amount-3').value = '';

    }


});

// function for onclick
//btn one

function onclickBtn1() {

    const inputAmount = document.getElementById('Amount-1').value;
    const inputTk = Number(inputAmount)

    const heroBalance = document.getElementById('main-balance').innerText;
    const balanceAmount = Number(heroBalance);

    const currentBalance = balanceAmount - inputTk;

    document.getElementById('main-balance').innerText = currentBalance;

    console.log('clicked', currentBalance)
};

//btn two

function onclickBtn2() {

    const inputAmount = document.getElementById('Amount-2').value;
    const inputTk = Number(inputAmount)

    const heroBalance = document.getElementById('main-balance').innerText;
    const balanceAmount = Number(heroBalance);

    const currentBalance = balanceAmount - inputTk;

    document.getElementById('main-balance').innerText = currentBalance;

    console.log('clicked', currentBalance)
};

//btn three

function onclickBtn3() {

    const inputAmount = document.getElementById('Amount-3').value;
    const inputTk = Number(inputAmount)

    const heroBalance = document.getElementById('main-balance').innerText;
    const balanceAmount = Number(heroBalance);

    const currentBalance = balanceAmount - inputTk;

    document.getElementById('main-balance').innerText = currentBalance;

    console.log('clicked', currentBalance)
};

//navigation 
// donation page
document.getElementById('donation-btn').addEventListener('click', function () {

    document.querySelector('#History-container').classList.add('hidden');
    document.querySelector('#donation-page').classList.add('hidden');

    document.querySelector('#donation-btn').classList.add('bg-[#B4F461]')

    document.querySelector('#History-btn').classList.remove('bg-[#B4F461]')

    document.getElementById('donation-page').classList.remove('hidden')

    console.log('clicked')
});

//history page

document.querySelector('#History-btn').addEventListener('click', function () {
    document.querySelector('#History-container').classList.add('hidden');
    document.querySelector('#donation-page').classList.add('hidden');

    document.querySelector('#History-btn').classList.add('bg-[#B4F461]')

    document.querySelector('#donation-btn').classList.remove('bg-[#B4F461]')


    document.getElementById('History-container').classList.remove('hidden')

    console.log('clicked')
})



