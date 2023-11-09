const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

function cli() {
	const rl = readline.createInterface({ input, output });
	return {
		prompt: (msg, callback) => {
			return new Promise(resolve => {
				rl.question(msg, resolve);
			});
		},
	};
}

module.exports = {
	cli: cli,
}
