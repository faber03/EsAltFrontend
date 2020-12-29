(function (){
    'use strict';

    const express = require("express")
        , endpoints = require("../endpoints")
        , helpers = require("../../helpers")
        , app = express();

    app.get("/bank/customers/:cf", function (req, res, next) {

    	const reqUrl = endpoints.customerUrl + "/" + req.params.cf;
    	console.log(reqUrl)
    	
    	res.setHeader("Content-Type", "application/json");
        helpers.simpleHttpRequest(reqUrl/*+ op + subUrl*/, res, next);
    });
    
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
        		}, res, next);
    });

    module.exports = app;
}());