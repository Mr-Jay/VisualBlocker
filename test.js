// alert("ceci est un test")
// chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		id:"show1",
		title: "show", 
		contexts:["page"]
	});

	chrome.contextMenus.create({
		id:"hide1",
		title: "hide", 
		contexts:["page"]
	});

	chrome.contextMenus.create({
		id:"log1",
		title: "log", 
		contexts:["all"]
	});

// });


chrome.contextMenus.onClicked.addListener(function(info, tab) {
	// console.log("menuid "+info.menuItemId)

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id,{id:info.menuItemId}, function(response) {
			console.log(response.farewell);
		});
	})
});






