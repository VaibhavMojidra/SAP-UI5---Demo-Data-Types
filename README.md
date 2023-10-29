# SAP UI5 Demo Data Types

SAP UI5 provides a variety of data types that can be used to format, parse, and validate data. The available data types inherit from the `sap.ui.model.SimpleType` class ¹. Here are some of the commonly used data types in SAP UI5:

- `sap.ui.model.type.Integer`: Used to format and validate integer values.
- `sap.ui.model.type.Date`: Used to format and validate date values.
- `sap.ui.model.type.Currency`: Used to format and validate currency values.

In addition to these simple types, it is also possible to define custom data types by creating a subclass of `SimpleType` and implementing the methods `formatValue`, `parseValue`, and `validateValue` ¹. The constructor of a simple type can accept parameters such as `formatOptions` and `constraints`.

SAP UI5 supports three types of model implementation: JSON Model, XML Model, and OData Model ². JSON Model supports data in JavaScript Object Notation format and supports two-way data binding. XML Model supports XML data and supports two-way data binding. OData Model creates OData requests and handles responses accordingly, but only supports OData compliant data.

---

### Code Explaination 


Refer to [/webapp/view/InvoicesList.view.xml](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Data-Types/blob/master/webapp/view/InvoicesList.view.xml "InvoicesList.view.xml")


The view is defined using the **MVC** architecture, where the `List` control is the view, the `ObjectListItem` control is the template, and the `InvoicesList` controller is the controller. 

The `List` control displays a list of items, which are bound to the `Invoices` model. The `ObjectListItem` control defines the template for each item in the list. The `title` property of the `ObjectListItem` control displays the product name and quantity of each invoice item. The `number` property displays the extended price of each item in the list, along with its currency. The currency is obtained from the `myView` model, which is defined in the controller.

The `numberUnit` property specifies the unit of measure for the extended price, which is also obtained from the `myView` model.

The code uses **data binding** to bind properties of controls to properties of models. The `parts` array in the `number` property specifies that two properties are bound to this control: `ExtendedPrice` and `currency`. The `type` property specifies that this control should use a currency formatter to format its value.

---

[![Vaibhav Mojidra - 1.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Data-Types/master/screenshot/1.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)