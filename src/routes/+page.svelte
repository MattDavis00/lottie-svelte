<script lang="ts">
	import Lottie from '$lib/Lottie.svelte';
	import { Direction, type AnimationEvent } from '$lib/iface.js';

	function loadHandler(event: AnimationEvent) {
		const animation = event.detail;
		animation.setSpeed(0.1);
		setTimeout(() => animation.pause(), 2000);
	}

    let showIcon = true;
    setTimeout(() => {showIcon = false}, 2000)
</script>

<div>Heart example</div>
<Lottie style="width: 100px" path="heart.json" on:animation={loadHandler} />
<Lottie style="width: 100px" path="heart.json" speed={0.2} direction={Direction.REVERSE} />
{#if showIcon}
    <Lottie style="width: 100px" path="heart.json" speed={0.2} direction={Direction.REVERSE} />
{/if}
