var xhr = new XMLHttpRequest();

function loadPageContent(page) {
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            document.getElementById("mainContent").innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'templates/'+page+'.html');
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