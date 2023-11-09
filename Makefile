MAKEFLAGS += --silent

build:
	cd lib_wasm && wasm-pack build --target nodejs --release
	rm -rf app/libs/lib_wasm.wasm
	mkdir -p app/libs
	cp lib_wasm/target/wasm32-unknown-unknown/release/lib_wasm.wasm app/libs/lib_wasm.wasm

launch:
	make build
	cd app && npm start
