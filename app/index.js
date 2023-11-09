const fs = require('fs');
const { cli } = require('./cli.js');

async function loadWasm(filePath) {
	const buffer = fs.readFileSync(filePath);
	const wasmModule = await WebAssembly.instantiate(buffer);
	return wasmModule;
}

async function execWasm() {
	const wasmFilePath = './libs/lib_wasm.wasm';
	const wasmModule = await loadWasm(wasmFilePath);
	const {
		foo,
	} = wasmModule.instance.exports;
	let result = foo();
	console.log(result);
}

if(module.id === '.') {
	(async () => {
		let isRunning = true;
		const app = cli();
		while(isRunning) {
			let arg = await app.prompt('>');
			switch(arg) {
				case 'exit':
				isRunning = false;
				break;
				case 'wasm':
				execWasm();
				break;
				default:
				break;
			}
		}
	})();
}
