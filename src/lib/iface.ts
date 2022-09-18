import type { AnimationItem } from "lottie-web";

export type { AnimationItem }
export interface AnimationEvent {
    detail: AnimationItem
}

export enum Direction {
    FORWARD = 1,
    REVERSE = -1
}
