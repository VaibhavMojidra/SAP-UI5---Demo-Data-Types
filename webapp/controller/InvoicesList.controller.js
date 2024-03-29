sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel"
	],function(Controller,JSONModel){
		"use strict";
		
		return Controller.extend("com.vaibhavmojidra.datatypesdemo.controller.InvoicesList",{
			onInit:function() {
				var oViewModel = new JSONModel({
					currency: "EUR"
				});
				this.getView().setModel(oViewModel, "myView");
			}
		});
	}
);