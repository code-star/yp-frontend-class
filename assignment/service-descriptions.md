# service description

## services

**get current interest**
NAME: current-mortgage-interest-rate
METHOD: GET
URL: https://agile-wave-86684.herokuapp.com/current-mortgage-interest-rate
URL_PARAMS: NONE
RESPONSE: JSON

**max mortgage loan**
NAME: max-to-loan
METHOD: GET
URL: https://agile-wave-86684.herokuapp.com/max-to-loan
URL_PARAMS: income1 (integer), income2 (integer)
ERRORS: 400 (BAD REQUEST)
RESPONSE: JSON

## examples

REQUEST: https://agile-wave-86684.herokuapp.com/current-mortgage-interest-rate
RESPONSE: {"currentRate":2.2}

REQUEST: https://agile-wave-86684.herokuapp.com/max-to-loan?income1=20000&income2=40000
RESPONSE: {"maxToLoan":270000}
