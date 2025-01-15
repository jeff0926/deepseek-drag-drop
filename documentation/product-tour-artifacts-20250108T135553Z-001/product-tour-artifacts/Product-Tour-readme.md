# UDEx Product Tour Web Component

This project is a web component that implements a product tour . It fetches HTML content from a specified URL, parses it to extract data, and dynamically generates the accordion sections and slides based on the retrieved data. A current sap.com example (5.2.24) : https://www.sap.com/products/scm/integrated-business-planning/product-tour.html

## Description

Use Case: The business requests a Product Tour. All they need to access to MS Word internal sharepoint. They edit the document populating the product-tour with content and images. Once previewed and approved the Product-tour is ready to publish and go live. This page is the data source for product-tour webcomponent(s). 

## Data Flow and Process

**Data Flow:**
1. The uDEX Product Tour web component is initialized.
2. It fetches HTML content from the specified URL.
3. This Adobe EDS product-tour Word document. : https://main--hlx-test--urfuwo.hlx.page/fragments/product-tours/integrated-business-planning
*You will need MS sharepoint credentials*
4. The fetched HTML content is parsed to extract structured data.
5. Based on the extracted data, the accordion sections and slides are dynamically generated.

**Process (run , edit, author, publish and view):** 

The web component accepts two parameters:

- data-config: URL of the HTML content to fetch.
- data-url-prefix: Prefix to prepend to relative image paths found in the fetched HTML content.

 Html implementation [index.html] :

  ```
  <product-tour 
        data-config="https://main--hlx-test--urfuwo.hlx.page/fragments/product-tours/integrated-business-planning.plain.html"
        data-url-prefix="https://main--hlx-test--urfuwo.hlx.page">
 </product-tour>
 ```
The web component *needs to include this reference to product-tour.js.* It contains the web component implementation.

 ```
<script src="product-tour.js"></script>
 ```
 
Two versions of *product-tour.js* are also available in the UDEx CDN as part of the gitHub build process:
This process makes available versioning and get the latest product-tour.js 

- versioned form: https://cdn.udex.services.sap.com/dxf/v0.0.1/product-tour/product-tour.js
- latest form: https://cdn.udex.services.sap.com/dxf/latest/product-tour/product-tour.js

**Refer to this repo for more details:** https://github.tools.sap/sapudex/digital-experience-fragments

## Create a Product Tour Online (Edit/Author): 

1. Open the sharepoint MS Word Product Your Template
The example word doc : https://main--hlx-test--urfuwo.hlx.page/fragments/product-tours/integrated-business-planning 
Direct Link to the word document: 
https://sap.sharepoint.com/:w:/r/sites/207899/_layouts/15/Doc.aspx?sourcedoc=%7B10CAA4CE-5D44-4196-BFC7-160A78F106DC%7D&file=integrated-business-planning.docx&action=default&mobileredirect=true
*You will need MS sharepoint credentials*
2. Edit the document and start constructing your Product Tour. 
3. Click 'preview' in the adobe EDS sidekick 
*You will need Adobe Sidekick chrome extension. Get it here {url} *
4. This publishes to the Adobe Edge preview service.  It also generaates a url. Note this Url
5. Append that url with 'plain.html"eg:  https://main--hlx-test--urfuwo.hlx.page/fragments/product-tours/integrated-business-planning.plain.html
6. Open: /product-tour/index.html 
7. Find the product-tour tag: 
  ```
  <product-tour 
        data-config="https://main--hlx-test--urfuwo.hlx.page/fragments/product-tours/integrated-business-planning.plain.html"
        data-url-prefix="https://main--hlx-test--urfuwo.hlx.page">
 </product-tour>
 ```
8. Enter the url you created above or use the example url that is already in index.html
9. Enter the root domain / section in the data-url-prefix="https://main--hlx-test--urfuwo.hlx.page" parameter
10. Save the file and view the file in your browser. 
 
## How to Run Locally (run , edit, author):

You can run the project locally without the need for a web server. Simply open the index.html file in a web browser.

To test locally without calling and external url you can adjust this paramter to .sample.plain.html data-config:
 ```
  <product-tour 
        data-config="./sample.plain.html"
        data-url-prefix="https://main--hlx-test--urfuwo.hlx.page">
 </product-tour>
 ```

***
*As of 5.2.24 - Don't change the data-url-prefix (data-url-prefix="https://main--hlx-test--urfuwo.hlx.page").*
***
 
## How to Clone the Repository

To clone the repository, run the following command in your terminal:

```git clone <repository-url>```

Alternatively, you can use Python's built-in HTTP server or Node.js's HTTP server:

Python:
Navigate to the project directory in the terminal and run:

```python -m http.server```
 
Node.js:
Install http-server globally:

```npm install -g http-server```

Navigate to the project directory, and run:
```http-server```

## Files in the Repository

- product-tour.js: Contains the web component implementation.
- product-tour-event.js: _.
- index.html: HTML file that includes the web component (AEM structure).
- local.html: HTML file that includes the web component (to run locally).
- .sample.plain.html : An example of the html that is parsed.

Jeff Conn