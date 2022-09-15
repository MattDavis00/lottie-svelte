// Reexport your entry components here
import LottiePlayer, { type AnimationItem } from 'lottie-web'
import * as LottieLib from 'lottie-web'
import Lottie from './Lottie.svelte'

interface AnimationEvent {
    detail: AnimationItem
}

export default Lottie
export { LottiePlayer, LottieLib, Lottie}
export {type AnimationItem, type AnimationEvent}
