(function (){
    'use strict';

    var util = require('util');

    module.exports = {
        accountUrl:  util.format("http://%s:8080/Account-1.0/AccountController?", process.env.ACCOUNT_HOST),
        customerUrl: util.format("http://%s:8080/Customer-1.0/CustomerController?", process.env.CUSTOMER_HOST),
    };
}());