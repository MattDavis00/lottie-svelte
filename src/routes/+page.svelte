<script lang="ts">
	import Lottie from '$lib/Lottie.svelte';
	import { Direction, type AnimationEvent } from '$lib/index.js';

	function loadHandler(event: AnimationEvent) {
		const animation = event.detail;
		animation.setSpeed(0.1);
		setTimeout(() => animation.pause(), 2000);
	}
</script>

<div>Heart example</div>
<!-- <Lottie path="heart.json" on:animation={loadHandler} /> -->
<Lottie path="heart.json" speed={0.2} direction={Direction.BACKWARDS} />
