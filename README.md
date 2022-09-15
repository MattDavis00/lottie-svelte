# lottie-svelte

A very simple Svetle wrapper around `lottie-web`, made with TypeScript.

Exposes the underlying `lottie-web` API if you need it.

Programatically control animations.


___

## Example:
```
<script>
    import Lottie from 'lottie-svelte';
</script>

<Lottie path="./love.json" />
```

Common properties available via props.

```
<Lottie path="./love.json" autoplay={true} loop={false} />
```

## Lottie component props:

| Prop | type | required | description |
| --- | --- | --- | --- |
| path | string | ✅ required | The path to the lottie file, relative to the static directory. E.g. for a lottie file located at `static/lottie/heart.json`, you would pass in `./lottie/heart.json` to this prop. |
| container | HTMLElement | ⏩ optional | Under normal circumstances don't use this prop. A reference to an element where the lottie will be created. If left blank lottie-svelte will create one for you. |
| renderer | RendererType | ⏩ optional | How the lottie is rendered, one of `'svg'` `'canvas'` `'html'`. Default is `'svg'` |
| loop | boolean | ⏩ optional | Whether the lottie should loop when it finishes. Default `true`. |
| autoplay | boolean | ⏩ optional | Whether the lottie should autoplay once it loads. Default `true`. |
| name | string | ⏩ optional | Sometimes required by the underlying `lottie-web` functions. You may need to set this if you are calling underlying certain methods on the AnimationItem  |

## Programatically control animation:

We provide a convenient event that fires once the lottie animation has loaded `on:animation`.
From this event you can get the underlying animation and control its speed, direction, frame and much more.
You can find the [supported AnimationItem methods here](https://www.npmjs.com/package/lottie-web#usage)

```
<script lang="ts">
	import { Lottie, type AnimationEvent } from 'lottie-svelte';

	function handler(event: AnimationEvent) {
		const animation = event.detail; // lottie-web AnimationItem
		animation.setSpeed(0.2);
		setTimeout(() => animation.pause(), 2000);
	}
</script>

<!-- Lottie file is located at static/love.json -->
<Lottie path="./love.json" on:animation={handler} />

```
