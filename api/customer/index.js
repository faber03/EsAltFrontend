(function (){
    'use strict';

    const express = require("express")
        , endpoints = require("../endpoints")
        , helpers = require("../../helpers")
        , app = express();

    //GET CUSTOMER
    //.../api-v1/bank/customers/{custCF}
    app.get("/bank/customers/:cf", function (req, res, next) {

    	const reqUrl = endpoints.customerUrl + "/" + req.params.cf;
    	console.log(reqUrl)
    	
    	res.setHeader("Content-Type", "application/json");
        helpers.httpGet(reqUrl/*+ op + subUrl*/, res, next);
    });
    
    //CREATE CUSTOMER
    //.../api-v1/bank/customers
    app.post("/bank/customers", function (req, res, next) {        
        const reqUrl = endpoints.customerUrl;
        console.log(reqUrl);
        helpers.httpPost(reqUrl, 
        		{ 
					json: req.body,
					headers: 
					{
						accept: '*/*'
					}
        		}, "/bank/customers", res, next);
    });

    module.exports = app;
}());