# lottie-svelte

A very simple Svetle wrapper around `lottie-web`, made with TypeScript.

Exposes the underlying `lottie-web` API if you need it.

Programmatically control animations.

<br/>

## Example #1:
```html
<script>
    import { Lottie } from 'lottie-svelte';
</script>

<Lottie path="./love.json" speed={0.2}/>
```

<img src="https://i.imgur.com/RhqPwr7.gif" height=100 width=100 alt="Animated heart GIF (Forward)"/>

<br/>

## Example #2:

Common properties available via props.

```html
<Lottie path="./love.json" autoplay={true} loop={false} speed={0.2} direction={Direction.REVERSE}/>
```
<img src="https://i.imgur.com/BsdmKmz.gif" height=100 width=100 alt="Animated heart GIF (Reverse)"/>

https://codesandbox.io/embed/vigilant-resonance-jmoh1q?fontsize=14&hidenavigation=1&theme=dark

<a href="https://codesandbox.io/s/vigilant-resonance-jmoh1q?fontsize=14&hidenavigation=1&theme=dark"> <img alt="Edit jmoh1q" src="https://codesandbox.io/static/img/play-codesandbox.svg"> </a>

<br/>

## Lottie component props:

| Prop | type | required | description |
| --- | --- | --- | --- |
| path | string | ✅ | The path to the lottie file, relative to the static directory. E.g. for a lottie file located at `static/lottie/heart.json`, you would pass in `./lottie/heart.json` to this prop. |
| loop | boolean | ⏩ | Whether the lottie should loop when it finishes. Default `true`. |
| autoplay | boolean | ⏩ | Whether the lottie should autoplay once it loads. Default `true`. |
| speed | number | ⏩ | Default 1. The speed that the animation should play. Float, 2 is 2x, 0.5 is half speed etc. |
| direction | Direction | ⏩ | Whether the animation plays FORWARD or in REVERSE. Default is FORWARD. Use the Direction enum in iface. FORWARD = 1, REVERSE = -1. |
| name | string | ⏩ | Sometimes required by the underlying `lottie-web` functions. You may need to set this if you are calling underlying certain methods on the AnimationItem  |
| renderer | RendererType | ⏩ | How the lottie is rendered, one of `'svg'` `'canvas'` `'html'`. Default is `'svg'` |
| container | HTMLElement | ⏩ | Under normal circumstances don't use this prop. A reference to an element where the lottie will be created. If left blank lottie-svelte will create one for you. |

<br/>

## Programmatically control animation:

In addition to setting initial speed, direction etc. We provide a convenient event that fires once the lottie animation has loaded `on:animation`.
From this event you can get the underlying animation and control its speed, direction, frame and much more programatically.
You can find the [supported AnimationItem methods here](https://www.npmjs.com/package/lottie-web#usage)

```html
<script lang="ts">
	import { Lottie } from 'lottie-svelte';
	import type { AnimationEvent } from 'lottie-svelte/iface';

	function handler(event: AnimationEvent) {
		const animation = event.detail; // lottie-web AnimationItem
		animation.setSpeed(0.2);
		setTimeout(() => animation.pause(), 1500);
	}
</script>

<!-- Lottie file is located at static/heart.json -->
<Lottie path="./heart.json" on:animation={handler} />
```
