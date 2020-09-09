import { AnimationItem } from 'lottie-web';
import * as React from 'react';
/**
 * Parse a resource into a JSON object or a URL string
 */
export declare function parseSrc(src: string | object): string | object;
export declare enum PlayerState {
    Loading = "loading",
    Playing = "playing",
    Paused = "paused",
    Stopped = "stopped",
    Frozen = "frozen",
    Error = "error"
}
export declare enum PlayerEvent {
    Load = "load",
    Error = "error",
    Ready = "ready",
    Play = "play",
    Pause = "pause",
    Stop = "stop",
    Freeze = "freeze",
    Loop = "loop",
    Complete = "complete",
    Frame = "frame"
}
export declare type PlayerDirection = -1 | 1;
export interface IPlayerProps {
    lottieRef?: (ref: AnimationItem) => void;
    onEvent?: (event: PlayerEvent) => any;
    onStateChange?: (state: PlayerState) => any;
    autoplay: boolean;
    children?: React.ReactNode | React.ReactNode[];
    controls?: boolean;
    direction?: PlayerDirection;
    hover?: boolean;
    loop?: boolean | number;
    renderer?: 'svg' | 'canvas' | 'html';
    speed?: number;
    src: string;
    className?: string;
    rendererClassName?: string;
    style?: {
        [key: string]: string | number;
    };
}
interface IPlayerState {
    animationData: any;
    containerRef: React.Ref<HTMLDivElement> | null;
    debug?: boolean;
    instance: AnimationItem | null;
    seeker: number;
    playerState: PlayerState;
}
export declare class Player extends React.Component<IPlayerProps, IPlayerState> {
    private container;
    constructor(props: IPlayerProps);
    static defaultProps: {
        loop: boolean;
    };
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any): Promise<void>;
    render(): JSX.Element;
    private toggleDebug;
    private createLottie;
    play(): void;
    pause(): void;
    stop(): void;
    setPlayerSpeed(speed: number): void;
    setPlayerDirection(direction: PlayerDirection): void;
    setSeeker(seek: number, play?: boolean): void;
    setLoop(loop: boolean): void;
    private triggerEvent;
}
export {};
