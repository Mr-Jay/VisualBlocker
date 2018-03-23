// alert("test")

function show(){
	console.log("show")
	let all = document.body.querySelectorAll('body *');
	var result;
	for(let i=0; i<all.length; i++) {
		// console.log(all);
		all[i].addEventListener('mouseover', function(e) {
			if(this.id){
				var valid=this.id;
				// console.log(valid);
document.getElementById(valid).style.cssText = "border: solid;cursor:not-allowed";
				//document.getElementById(valid).style.border="solid";
				// document.getElementById(valid).style.pointerEvents="none";
			}
		});

		all[i].addEventListener('mouseout', function(e) {
			if(this.id){
				var valid=this.id;
				// console.log(valid);
				// document.getElementById(valid).style.cssText = "border: none; pointer-event:auto";

				document.getElementById(valid).style.border="";	
				// document.getElementById(valid).style.pointerEvents="auto";


			}
		});

		result = all[i].addEventListener('click', function(e) {
			if(this.id){
				var valid=this.id;
				console.log(valid);
				document.getElementById(valid).style.visibility="hidden";
				return true;
			}
		});

		// console.log(result)
		if (result ==  true) {
			console.log("break");
			break;
		}
	}
}



function log(){
	console.log("log")
}


// chrome.commands.onCommand.addListener(function(command) {
// 	alert('Command:', command);
// });

// show()


// function hide(){
// 	console.log("hide")
// 	let all = document.body.querySelectorAll('body *');
// 	for(let i=0; i<all.length; i++) {
	
// 	}

// }


chrome.runtime.onMessage.addListener(
	function(msg, sender, sendResponse) {
		console.log(msg);
		sendResponse({farewell: "thanks"});
	});

chrome.runtime.onMessage.addListener(
	function(msg, sender, sendResponse) {
		console.log("menuid "+msg.id)
		if(msg.id == "log1")
		{
			console.log("1");

			log();
		}

		if(msg.id == "show1")
		{
			console.log("2");

			show();
		}

		if(msg.id == "hide1")
		{
			console.log("3");

			hide();
		}
	})