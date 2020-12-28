(function (){
    'use strict';

    const express = require("express")
        , endpoints = require("../endpoints")
        , helpers = require("../../helpers")
        , app = express();

    app.get("/BankController/createAccount", function (req, res, next) {
        const op = 'operation=createAccount&';
        const url = req.url.toString();
        console.log(url);
        const subUrl = url.substring(url.indexOf("?") + 1);
        console.log(subUrl);
        helpers.simpleHttpRequest(endpoints.accountUrl + op + subUrl, res, next);
    });

    app.get("/BankController/withdraw", function (req, res, next) {
        const op = 'operation=withdraw&';
        const url = req.url.toString();
        console.log(url);
        const subUrl = url.substring(url.indexOf("?") + 1);
        console.log(subUrl);
        helpers.simpleHttpRequest(endpoints.accountUrl + op + subUrl, res, next);
    });

    app.get("/BankController/deposit", function (req, res, next) {
        const op = 'operation=createAccount&';
        const url = req.url.toString();
        console.log(url);
        const subUrl = url.substring(url.indexOf("?") + 1);
        console.log(subUrl);
        helpers.simpleHttpRequest(endpoints.accountUrl + op + subUrl, res, next);
    });

    app.get("/BankController/transfer", function (req, res, next) {
        const op = 'operation=transfer&';
        const url = req.url.toString();
        console.log(url);
        const subUrl = url.substring(url.indexOf("?") + 1);
        console.log(subUrl);
        helpers.simpleHttpRequest(endpoints.accountUrl + op + subUrl, res, next);
    });

    app.get("/BankController/allCustomerAccounts", function (req, res, next) {
        const op = 'operation=allCustomerAccounts&';
        const url = req.url.toString();
        console.log(url);
        const subUrl = url.substring(url.indexOf("?") + 1);
        console.log(subUrl);
        helpers.simpleHttpRequest(endpoints.accountUrl + op + subUrl, res, next);
    });


    module.exports = app;
}());