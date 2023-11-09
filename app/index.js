const fs = require('fs');

async function loadWasm(filePath) {
	const buffer = fs.readFileSync(filePath);
	const wasmModule = await WebAssembly.instantiate(buffer);
	return wasmModule;
}

if(module.id === '.') {
	(async () => {
		const wasmFilePath = './libs/lib_wasm.wasm';
		const wasmModule = await loadWasm(wasmFilePath);
		const {
			foo,
		} = wasmModule.instance.exports;
		let result = foo();
		console.log(result);
	})();
}
