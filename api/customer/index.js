(function (){
    'use strict';

    const express = require("express")
        , endpoints = require("../endpoints")
        , helpers = require("../../helpers")
        , app = express();

   /* app.get("/BankController/createCust", function (req, res, next) {
        const op = 'operation=createCust&';
        const url = req.url.toString();
        console.log(url);
        const subUrl = url.substring(url.indexOf("?") + 1);
        console.log(subUrl);
        helpers.simpleHttpRequest(endpoints.customerUrl + op + subUrl, res, next);
    });*/
    
    app.post("/bank/customers", function (req, res, next) {
        const op = 'customers';
        const url = req.url.toString();
        console.log(url);
        const subUrl = url.substring(url.indexOf("?") + 1);
        console.log(subUrl);
        helpers.httpPost("http://customer:8080/Customer-1.0/api-v1/customers", res, next);
    });

    module.exports = app;
}());