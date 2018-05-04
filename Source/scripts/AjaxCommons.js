
function ajax_createConnection() {

}

function ajax_retrieveData() {
	let worker = new Worker("scripts/AjaxWorker.js");

	worker.postMessage("command");
}