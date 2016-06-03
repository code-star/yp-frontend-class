var xhr = new XMLHttpRequest();

function loadPageContent(page) {
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            document.getElementById("mainContent").innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'templates/'+page+'.html');
    if(page === "rente") {
        loadMortageRate();
    }
    xhr.send();
}

function displayIncome() {
    var incomeDisplay = document.querySelector('#incomeDisplay');
    var incomeRange = document.querySelector('#incomeRange');

    incomeDisplay.innerHTML = incomeRange.value;
}

function displayPartnerIncome() {
    var incomePartnerDisplay = document.querySelector('#incomePartnerDisplay');
    var incomePartnerRange = document.querySelector('#incomePartnerRange');

    incomePartnerDisplay.innerHTML = incomePartnerRange.value;
    changeIncomeResult(incomePartnerRange.value);
}

function changeIncomeResult(partnerIncome) {
    var incomeResultAmountElement = document.querySelector('#incomeResultAmount');
    var incomeAmount = incomeResultAmountElement.textContent;

    if(parseInt(partnerIncome) < parseInt(incomeAmount)) {
        incomeResultAmountElement.innerHTML = parseInt(incomeAmount) - Math.round(Math.random() * 10000);
    }
    else {
        incomeResultAmountElement.innerHTML = parseInt(incomeAmount) + Math.round(Math.random() * 10000);
    }

}

function displayMortgage() {
    var incomeDisplay = document.querySelector('#incomeDisplay');
    var incomeRange = document.querySelector('#mortgageRange');
    var incomeResultAmount = document.querySelector('#incomeResultAmount');

    incomeResultAmount.innerHTML = (incomeRange.value / 100) ;
    incomeDisplay.innerHTML = incomeRange.value;
}

function loadMortageRate() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("currentRate").innerHTML = JSON.parse(xhttp.responseText).currentRate;
        }
    };
    xhttp.open("GET", "http://agile-wave-86684.herokuapp.com/current-mortgage-interest-rate", true);
    xhttp.send();
}