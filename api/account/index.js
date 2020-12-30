(function (){
    'use strict';

    const express = require("express")
        , endpoints = require("../endpoints")
        , helpers = require("../../helpers")
        , app = express();

    //CREATE ACCOUNT
    //.../api-v1/bank/accounts?cf=XXX
    app.post("/bank/accounts", function (req, res, next) {
//        const op = 'operation=createAccount&';
//        const url = req.url.toString();
//        console.log(url);
//        const subUrl = url.substring(url.indexOf("?") + 1);
//        console.log(subUrl);
    	
    	const reqUrl = endpoints.accountUrl + "?cf=" + req.query.cf;
    	console.log(reqUrl)
    	
    	helpers.httpPost(reqUrl, 
        		{ 
					body: req.body,
					headers: 
					{						
						accept: '*/*',
						"content-type": "text/plain"
					}
        		}, "/bank/accounts", res, next);
    });
    
    //GET BALANCE
    //.../api-v1/bank/accounts/{accountId}
    app.get("/bank/accounts/:accountId", function (req, res, next) {

    	const reqUrl = endpoints.accountUrl + "/" + req.params.accountId;
    	console.log(reqUrl)
    	
    	res.setHeader("Content-Type", "text/plain");
        helpers.httpGet(reqUrl/*+ op + subUrl*/, res, next);
    });
    
    //DEPOSIT
    //.../api-v1/bank/accounts/{accountId}/deposits
    app.post("/bank/accounts/:accountId/deposits", function (req, res, next) {

    	const reqUrl = endpoints.accountUrl + "/" + req.params.accountId + "/deposits";
    	console.log(reqUrl)
    	
    	res.setHeader("Content-Type", "text/plain");
        helpers.httpPost(reqUrl, 
        		{ 
					body: req.body,
					headers: 
					{						
						accept: '*/*',
						"content-type": "text/plain"
					}
				}, "/bank/accounts", res, next);
    });
    
    //WITHDRAWS
    //.../api-v1/bank/accounts/{accountId}/withdraws
    app.post("/bank/accounts/:accountId/withdraws", function (req, res, next) {

    	const reqUrl = endpoints.accountUrl + "/" + req.params.accountId + "/withdraws";
    	console.log(reqUrl)
    	
    	res.setHeader("Content-Type", "text/plain");
        helpers.httpPost(reqUrl, 
        		{ 
					body: req.body,
					headers: 
					{						
						accept: '*/*',
						"content-type": "text/plain"
					}
				}, "/bank/accounts", res, next);
    });
    
    //TRANSFERS
    //.../api-v1/bank/accounts/transfers?source=XXX&destination=XXX
    app.post("/bank/accounts/transfers", function (req, res, next) {

    	const reqUrl = endpoints.accountUrl + "/transfers?source=" + req.query.source + "&destination=" + req.query.destination;
    	console.log(reqUrl)
    	
    	res.setHeader("Content-Type", "text/plain");
        helpers.httpPost(reqUrl, 
        		{ 
					body: req.body,
					headers: 
					{						
						accept: '*/*',
						"content-type": "text/plain"
					}
				}, "/bank/accounts", res, next);
    });

    //SET BALANCE
    //.../api-v1/bank/accounts/{accountId}
    app.put("/bank/accounts/:accountId", function (req, res, next) {

        const reqUrl = endpoints.accountUrl + "/" + req.params.accountId;
        console.log(reqUrl)

        res.setHeader("Content-Type", "text/plain");
        helpers.httpPut(reqUrl,
            {
                body: req.body,
                headers:
                    {
                        accept: '*/*',
                        "If-Modified-Since": req.header("if-Modified-Since"),
                        "content-type": "text/plain"
                    }
            }, "/bank/accounts", res, next);
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