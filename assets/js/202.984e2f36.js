(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{554:function(e,t,n){"use strict";n.r(t);var a=n(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("🔥  The FREE Azure Developer Guide eBook is available "),n("a",{attrs:{href:"http://aka.ms/azuredevebook",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("💡 Learn more : "),n("a",{attrs:{href:"https://aka.ms/kedaquickstart?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes Event-driven Autoscaling (KEDA) Quickstart"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("📺 Watch the video : "),n("a",{attrs:{href:"leave-blank?WT.mc_id=youtube-azuredevtips-azureappsdev"}},[e._v("Azure Functions on Kubernetes with KEDA")]),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"azure-functions-on-kubernetes-with-keda-part-2-of-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#azure-functions-on-kubernetes-with-keda-part-2-of-2"}},[e._v("#")]),e._v(' Azure Functions on Kubernetes with KEDA Part 2 of 2"')]),e._v(" "),n("h4",{attrs:{id:"azure-functions-running-in-kubernetes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#azure-functions-running-in-kubernetes"}},[e._v("#")]),e._v(" Azure Functions Running in Kubernetes")]),e._v(" "),n("p",[e._v("This post is par of a series of posts:")]),e._v(" "),n("ol",[n("li",[n("RouterLink",{attrs:{to:"/blog/tip277.html"}},[e._v("Azure Functions on Kubernetes with KEDA Part 1 of 2 - Creating and building a containerized Azure Function")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/blog/tip278.html"}},[e._v("Azure Functions on Kubernetes with KEDA Part 1 of 2 (this post) - Running the Azure Function in AKS with KEDA")])],1)]),e._v(" "),n("p",[e._v("In the previous post, we've created a containerized "),n("a",{attrs:{href:"https://azure.microsoft.com/services/functions?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Function"),n("OutboundLink")],1),e._v(" that is triggered by an "),n("a",{attrs:{href:"https://azure.microsoft.com/services/storage/queues?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage Queue"),n("OutboundLink")],1),e._v(". In this post, we'll deploy that Function to "),n("a",{attrs:{href:"https://azure.microsoft.com/services/kubernetes-service?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service (AKS)"),n("OutboundLink")],1),e._v(" and install "),n("a",{attrs:{href:"https://keda.sh?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("KEDA"),n("OutboundLink")],1),e._v(" to scale it.")]),e._v(" "),n("h4",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),n("ul",[n("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),n("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),n("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),n("li",[e._v("You'll need the "),n("a",{attrs:{href:"https://visualstudio.microsoft.com/downloads/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest version of Visual Studio"),n("OutboundLink")],1),e._v(" with the Azure workload installed. Alternatively, you can use "),n("a",{attrs:{href:"https://code.visualstudio.com?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),n("OutboundLink")],1),e._v(" with the "),n("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Function extension"),n("OutboundLink")],1),e._v(" installed")]),e._v(" "),n("li",[e._v("You need Docker on your PC to develop container-based applications. Download it "),n("a",{attrs:{href:"https://store.docker.com/editions/community/docker-ce-desktop-windows?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("The "),n("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),n("OutboundLink")],1),e._v(". You can "),n("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("download it for Windows, Linux or Mac"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Node.js, which includes npm that we need to install the "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Core Tools"),n("OutboundLink")],1),e._v(". You can "),n("a",{attrs:{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("download Node.js here"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Azure Functions Core Tools"),n("OutboundLink")],1)])]),e._v(" "),n("h4",{attrs:{id:"running-a-containerized-azure-function-in-aks-at-scale-with-keda"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-a-containerized-azure-function-in-aks-at-scale-with-keda"}},[e._v("#")]),e._v(" Running a containerized Azure Function in AKS at scale with KEDA")]),e._v(" "),n("p",[e._v("We have a container that contains an Azure Function with a queue-based trigger on our local machine. Let's deploy that to Azure Kubernetes Service (AKS) and run it at scale with KEDA. We'll start by creating an Azure Kubernetes Service using the Azure portal:")]),e._v(" "),n("ol",[n("li",[e._v("Go to the "),n("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Click the "),n("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),n("li",[e._v("Search for "),n("strong",[e._v("kubernetes")]),e._v(" and click on the result to start creating an AKS cluster\na. This brings you to the create blade of Azure Kubernetes Service\nb. Select a "),n("strong",[e._v("Resource Group")]),e._v(" or create a new one\nc. Fill in a name for "),n("strong",[e._v("Kubernetes cluster name")]),e._v("\nd. Select a "),n("strong",[e._v("Region")]),e._v(" to deploy the cluster to\ne. Select a Kubernetes "),n("strong",[e._v("version")]),e._v(". You should select the latest default version\nf. Leave the rest as it is and click "),n("strong",[e._v("Review + create")]),e._v(" and "),n("strong",[e._v("Create")]),e._v(" after that. The AKS cluster will now be deployed, which can take a few minutes")])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/64createaks.png")}}),e._v(" "),n("p",[e._v("(Create Azure Kubernetes Service in the Azure portal)")]),e._v(" "),n("p",[e._v("In Azure, we now have an AKS cluster and an Azure Storage Queue. And locally, we have a container with a queue-based Azure Function in it. Let's install KEDA on AKS and deploy the container to AKS.")]),e._v(" "),n("ol",[n("li",[e._v("Open the Azure CLI on your local machine")]),e._v(" "),n("li",[e._v("Next, we need to connect to the AKS in Azure. You can do that with the following command where you insert your resource group name and AKS name:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("az aks get-credentials -g <yourresourcegroup> -n <youraksclustername> --overwrite-existing\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Let's check if we are connected and if AKS is up and running with the command below. This will show the AKS nodes and should say that their status is "),n("strong",[e._v("Ready")])])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("kubectl get nodes\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[e._v("Alright. Now we install KEDA on AKS. This will enable the container to behave like an Azure Function running in consumption mode. It will be able to scale to 0 instances when needed and will automatically scale up when the the Function needs to run more. You can install KEDA on AKS with this command:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("func kubernetes install --namespace keda\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ol",{attrs:{start:"5"}},[n("li",[e._v("When KEDA is installed, we can deploy the container to AKS and start running it. The command below builds the container with the Function in it and deploys it to AKS. It leverages the docker CLI to build and deploy the image. Be sure to have docker connected to your account with "),n("strong",[e._v("docker login")]),e._v(". Replace the <name-of-function-deployment> with the name of your Function app. And replace <container-registry-username>  with your username for the Docker container registry")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("func kubernetes deploy --name <name-of-function-deployment> --registry <container-registry-username>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("That's it. The container with the Function is now deployed and running in AKS. The Function will run whenever a new message is put on the Azure Storage Queue. Let's test if KEDA actually scales the container when there are multiple messages on the queue.")]),e._v(" "),n("ol",[n("li",[e._v("In the Azure CLI, run the following command to see what is running in AKS:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("kubectl get deploy\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("This will show that there is nothing running. 0 instances ot the queuefunctionapp are running, which is what we want. There are no queue messages to process, so we don't want any containers running.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/64nothingrunning.png")}}),e._v(" "),n("p",[e._v("(No Azure Functions containers running in AKS)")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("We can use a simple console application to put many messages on the queue in a short time:\na. Open Visual Studio\nb. Click "),n("strong",[e._v("File > New Project")]),e._v("\nc. Select "),n("strong",[e._v("Console App (.NET Core)")]),e._v(" and click "),n("strong",[e._v("Next")]),e._v("\nd. Pick a "),n("strong",[e._v("location")]),e._v(" for the app and give it a "),n("strong",[e._v("name")]),e._v("\ne. Click "),n("strong",[e._v("Create")]),e._v(" to create the console application\nf. Once it is created, "),n("strong",[e._v("right-click the project file")]),e._v(" and click "),n("strong",[e._v("Manage NuGet Packages")]),e._v("\ng. Search for and install the NuGet package "),n("strong",[e._v("WindowsAzure.Storage")]),e._v("\nh. Now paste the following code into the "),n("strong",[e._v("Program.cs")]),e._v(' file and insert the Azure Storage Access Key where it says "Your Cloud Storage Key" and insert the Azure Storage Queue name where it says "myqueue":')])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('using System;\nusing Microsoft.WindowsAzure.Storage;\nusing Microsoft.WindowsAzure.Storage.Queue;\n\nnamespace QueueFiller\n{\n   class Program\n   {\n       static void Main(string[] args)\n       {\n           CloudStorageAccount storageAccount = CloudStorageAccount.Parse("Your Cloud Storage Key");\n\n           // Create the CloudQueueClient object for the storage account.\n           CloudQueueClient queueClient = storageAccount.CreateCloudQueueClient();\n\n           // Get a reference to the CloudQueue named "NewQueue"\n           CloudQueue newQueue = queueClient.GetQueueReference("myqueue");\n\n           // Create the CloudQueue if it does not exist.\n           newQueue.CreateIfNotExistsAsync();\n\n           for (int i = 0; i < 10000; i++)\n           {\n               // Create a message and add it to the queue.\n               CloudQueueMessage message = new CloudQueueMessage("My new message");\n               newQueue.AddMessageAsync(message);\n\n               Console.WriteLine("Message added to the queue");\n           }\n       }\n   }\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Run the console application. This will insert 10000 messages into the queue, which the Azure Function in AKS has to handle")]),e._v(" "),n("li",[e._v("Wait a minute or so for the queue to fill and for KEDA to scale up the Azure Function container in AKS. In the Azure CLI, run the following command:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("kubectl get deploy\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("You'll see that there are now more instances of the queuefunctionapp running to handle the messages on the queue. And when the messages are processed, the number of instances will go down after a while.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/64scaledup.png")}}),e._v(" "),n("p",[e._v("(Azure Functions containers running in AKS)")]),e._v(" "),n("h4",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://azure.microsoft.com/services/functions?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions"),n("OutboundLink")],1),e._v(" are really powerful, because they can run whatever logic you want and scale automatically. And they can even scale automatically when you run them in a container in "),n("a",{attrs:{href:"https://azure.microsoft.com/services/kubernetes-service?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service (AKS)"),n("OutboundLink")],1),e._v(" with "),n("a",{attrs:{href:"https://keda.sh?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("KEDA"),n("OutboundLink")],1),e._v(" (Kubernetes Event-driven Autoscaling). Go and check it out!")])])}),[],!1,null,null,null);t.default=r.exports}}]);