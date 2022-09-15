<script lang="ts">
	import type { AnimationItem } from 'lottie-web';
	import Lottie from '$lib/Lottie.svelte';
	import type { AnimationEvent } from '$lib/index.js';

	function loadHandler(event: AnimationEvent) {
		const animation = event.detail;
		animation.setSpeed(0.1);
		setTimeout(() => animation.pause(), 2000);
	}
</script>

<div>Heart example</div>
<Lottie path="heart.json" on:animation={loadHandler} />
