# service description

## services

**get current interest**
NAME: current-mortgage-interest-rate
METHOD: GET
URL: http://agile-wave-86684.herokuapp.com/current-mortgage-interest-rate
URL_PARAMS: NONE
ERRORS: 404 (NOT FOUND), 500 (INTERNAL SERVER ERROR) 
RESPONSE: JSON

**max mortgage loan**
NAME: max-to-loan
METHOD: GET
URL: http://agile-wave-86684.herokuapp.com/max-to-loan
URL_PARAMS: income1 (integer), income2 (integer)
ERRORS: 400 (BAD REQUEST), 404 (NOT FOUND), 500 (INTERNAL SERVER ERROR) 
RESPONSE: JSON

## examples

REQUEST: http://agile-wave-86684.herokuapp.com/current-mortgage-interest-rate
RESPONSE: {"currentRate":2.2}

REQUEST: http://agile-wave-86684.herokuapp.com/max-to-loan?income1=20000&income2=40000
RESPONSE: {"maxToLoan":270000}
