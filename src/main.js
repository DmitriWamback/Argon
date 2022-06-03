import App from './App.svelte';
import wasm from '../backend/Cargo.toml'

const init = async() => {
	const wasmlib = await wasm()
	const app = new App({
		target: document.body,
		props: {
			name: 'svelte'
		}
	});
}

init()

export default app;