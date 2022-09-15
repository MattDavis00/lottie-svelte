<script lang="ts">
	import lottie, { type AnimationItem, type RendererType } from 'lottie-web';
	// import type { RendererType } from 'lottie-web';
	import { createEventDispatcher, onMount } from 'svelte';

	/**
	 * Path to the .json lottie file. Place .json files in the static directory, like 'static/heart.json', then reference using 'heart.json'
	 */
	export let path: string;
	/**
	 * Under normal circumstances don't use this prop. A reference to an element where the lottie will be created. If left blank lottie-svelte will create one for you.
	 */
	export let container: HTMLElement | undefined = undefined;
	/**
	 * How the lottie is rendered, one of `'svg'` `'canvas'` `'html'`. Default is `'svg'`
	 */
	export let renderer: RendererType = 'svg';
	/**
	 * Whether the lottie should loop when it finishes. Default true.
	 */
	export let loop: boolean = true;
	/**
	 * Whether the lottie should autoplay once it loads. Default true.
	 */
	export let autoplay: boolean = true;
	/**
	 * Sometimes required by the underlying `lottie-web` functions. You may need to set this if you are calling underlying certain methods on the AnimationItem
	 */
	export let name: string = '';

	const uuid = crypto.randomUUID();
	const dispatch = createEventDispatcher<{ animation: AnimationItem }>();

	onMount(() => {
		const animation: AnimationItem = lottie.loadAnimation({
			container: container || document.getElementById(uuid)!,
			path,
			renderer: renderer || 'svg',
			loop,
			autoplay,
			name
		});
		animation.addEventListener('DOMLoaded', () => {
			console.log(animation.isLoaded);
			dispatch('animation', animation);
		});
	});
</script>

<div id={uuid} />
