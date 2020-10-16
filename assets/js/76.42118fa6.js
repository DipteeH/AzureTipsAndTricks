(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{431:function(e,t,a){"use strict";a.r(t);var s=a(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("An introduction to Azure Automation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=pQ9dQ13B2vM&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=50?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use Azure Automation with PowerShell"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"provide-static-app-settings-values-in-an-arm-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provide-static-app-settings-values-in-an-arm-template"}},[e._v("#")]),e._v(" Provide Static App Settings Values in an ARM Template")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/blog/tip162.html"}},[e._v("Part 1")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/blog/tip163.html"}},[e._v("Part 2 - This Post")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/blog/tip164.html"}},[e._v("Part 3")])],1)]),e._v(" "),a("h4",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[e._v("#")]),e._v(" Intro")]),e._v(" "),a("p",[e._v("Building on my previous Azure Tips and Tricks post about what ARM templates are and why you should care, I wanted to give you a quick recipe for a common development task. You’ve already seen that you can automate deploying a web app (and many other resources), but can you also copy configuration information like app settings with your ARM template? Yes!")]),e._v(" "),a("h4",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("p",[e._v("Go ahead and click "),a("strong",[e._v("Create a resource")]),e._v(" inside the Azure Portal and select "),a("strong",[e._v("Web App")]),e._v(".")]),e._v(" "),a("p",[e._v("Enter a "),a("strong",[e._v("Name")]),e._v(" and a "),a("strong",[e._v("Resource Group")]),e._v(" for your web app and click "),a("strong",[e._v("Automation options")]),e._v(" at the bottom before you hit "),a("strong",[e._v("Create")]),e._v(" in order to start creating your ARM template.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/new_webapp.png")}}),e._v(" "),a("p",[e._v("After you click "),a("strong",[e._v("Automation options")]),e._v(", then this is what you will see:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/arm_template.png")}}),e._v(" "),a("p",[e._v("The template to create a web app (or any other Azure resource) is simply a JSON file with multiple values describing how your web app is going to be deployed.")]),e._v(" "),a("h4",{attrs:{id:"create-static-app-settings-for-your-azure-app-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-static-app-settings-for-your-azure-app-service"}},[e._v("#")]),e._v(" Create Static App Settings for your Azure App Service")]),e._v(" "),a("p",[e._v("To make things as easy as possible, let’s assume for now that you want to add the exact same settings every time you deploy your web app template.")]),e._v(" "),a("p",[e._v("Go to "),a("strong",[e._v("Deploy")]),e._v(" then "),a("strong",[e._v("Edit Template")]),e._v(" and paste the following settings fragment overwriting your template’s resource section. (You could, of course, add as many keys as your web app needs.)")]),e._v(" "),a("p",[e._v("Make note that we are adding three names and 3 values for "),a("strong",[e._v("MyFirstName")]),e._v(", "),a("strong",[e._v("MyLastName")]),e._v(", and "),a("strong",[e._v("MySSN")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  "resources": [\n  {\n    "apiVersion": "2016-03-01",\n    "name": "[parameters(\'name\')]",\n    "type": "Microsoft.Web/sites",\n    "properties": {\n        "name": "[parameters(\'name\')]",\n        "siteConfig": {\n            "appSettings": [\n            {\n              "name": "MyFirstName",\n              "value": "Michael"\n            },\n            {\n              "name": "MyLastName",\n              "value": "Crump"\n            },\n            {\n              "name": "MySSN",\n              "value": "355-643-3356"\n            }\n          ]\n        },\n        "serverFarmId": "[concat(\'/subscriptions/\', parameters(\'subscriptionId\'),\'/resourcegroups/\', parameters(\'serverFarmResourceGroup\'), \'/providers/Microsoft.Web/serverfarms/\', parameters(\'hostingPlanName\'))]",\n        "hostingEnvironment": "[parameters(\'hostingEnvironment\')]"\n    },\n    "location": "[parameters(\'location\')]"\n  }],\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br")])]),a("p",[e._v("Press "),a("strong",[e._v("Save")]),e._v(" and ensure the "),a("strong",[e._v("Basic")]),e._v(" and "),a("strong",[e._v("Settings")]),e._v(" is filled out. Agree to the terms and check the "),a("strong",[e._v("Purchase")]),e._v(" option.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/customdeployment.png")}}),e._v(" "),a("p",[e._v("Note: If it says failure to deploy, then give it a shot again. I have had this happened but maybe it is only happening since I use the Preview.")]),e._v(" "),a("p",[e._v("Your Azure App Settings (for "),a("strong",[e._v("MyFirstName")]),e._v(", "),a("strong",[e._v("MyLastName")]),e._v(", and "),a("strong",[e._v("MySSN")]),e._v(") will now be deployed.")]),e._v(" "),a("p",[e._v("After deployment, navigate to your "),a("strong",[e._v("App Service")]),e._v(" and go to "),a("strong",[e._v("Application Settings")]),e._v(" and you'll see your site deployed along with the settings (for "),a("strong",[e._v("MyFirstName")]),e._v(", "),a("strong",[e._v("MyLastName")]),e._v(", and "),a("strong",[e._v("MySSN")]),e._v(") that we specified earlier.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/create_resource1.png")}}),e._v(" "),a("p",[e._v("Come back tomorrow and we'll take a look at adding parameters!")])])}),[],!1,null,null,null);t.default=r.exports}}]);