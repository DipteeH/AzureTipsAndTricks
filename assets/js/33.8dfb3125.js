(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{388:function(t,e,r){"use strict";r.r(e);var o=r(42),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/iot-hub/about-iot-hub?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure IoT Hub Overview"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("h3",{attrs:{id:"creating-an-iot-hub-for-the-iot-button"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-iot-hub-for-the-iot-button"}},[t._v("#")]),t._v(" Creating an IoT Hub for the IoT Button")]),t._v(" "),r("h4",{attrs:{id:"the-series-so-far"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-series-so-far"}},[t._v("#")]),t._v(" The Series So Far")]),t._v(" "),r("p",[t._v("At Build 2018, we first saw the "),r("a",{attrs:{href:"http://aka.ms/button?WT.mc_id=akams-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoT Button"),r("OutboundLink")],1),t._v(". I started "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=OdGHWwRBf_c?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("exploring the device"),r("OutboundLink")],1),t._v(" with the very first unboxing and decided to create a mini-series to walk you how to use the device from start to finish. The series (so far) is located below")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip122.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("This post - Creating an IoT for the IoT Button"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip123.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuring and Setting up the IoT Button"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip124.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating the Azure Logic App for our IoT Button"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip125.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Azure Function to call our Logic App with the IoT Button"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("I recently recorded a fun video with my daughter unboxing the new "),r("a",{attrs:{href:"http://aka.ms/button?WT.mc_id=akams-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoT Button"),r("OutboundLink")],1),t._v(" that was handed out at Build 2018.")]),t._v(" "),r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/OdGHWwRBf_c?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}}),t._v(" "),r("h4",{attrs:{id:"we-need-an-iot-hub-captain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#we-need-an-iot-hub-captain"}},[t._v("#")]),t._v(" We need an IoT Hub, Captain!")]),t._v(" "),r("p",[t._v("Before we can start enjoying the IoT Button, we first need to setup an IoT Hub.")]),t._v(" "),r("p",[t._v("Go inside of the Azure Portal and search for "),r("strong",[t._v("IoT Hub")]),t._v(" and begin to create one. Fill out the following information, but keep notepad open and save the "),r("strong",[t._v("IoT Hub Name")]),t._v(".")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/iotbutton1.png")}}),t._v(" "),r("p",[t._v("Make sure that you select the "),r("strong",[t._v("Free Tier")]),t._v(" and you can leave the rest at defaults. If you already have an IoT Hub with a free tier, then you'll need to either use that one or delete it to create another free tier.")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/iotbutton2.png")}}),t._v(" "),r("p",[t._v("Once it creates, save your Hostname as you'll use that later.")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/iotbutton3.png")}}),t._v(" "),r("p",[t._v("You'll want to click on "),r("strong",[t._v("Shared Access Policies")]),t._v(" and then "),r("strong",[t._v("iothubowner")]),t._v(" and copy and paste the "),r("strong",[t._v("Conneection String - Primary")]),t._v(" for later use.")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/iotbutton4.png")}}),t._v(" "),r("p",[t._v("Now download "),r("a",{attrs:{href:"https://github.com/Azure/azure-iot-sdks/releases?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Device Explorer"),r("OutboundLink")],1),t._v(" for Windows or you can use the iothub-explorer tool for Mac. Now paste in your IoT Hub Connection string and press "),r("strong",[t._v("Update")]),t._v(". You should see SAS populate.")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/iotbutton5.png")}}),t._v(" "),r("p",[t._v("Switch over to the "),r("strong",[t._v("Management")]),t._v(" tab and click "),r("strong",[t._v("Create")]),t._v(" and give it a name and select "),r("strong",[t._v("Auto-Generate Keys")]),t._v(", and then "),r("strong",[t._v("Create")]),t._v(".")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/iotbutton6.png")}}),t._v(" "),r("p",[t._v("The keys are now created, copy them someplace safe.")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/iotbutton7.png")}}),t._v(" "),r("p",[t._v("Right click on the newly created device and select "),r("strong",[t._v("Copy connection string for selected device")]),t._v(". Now that you have they keys, we'll need to configure the device tomorrow.")])])}),[],!1,null,null,null);e.default=a.exports}}]);