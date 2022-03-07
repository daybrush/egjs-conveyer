import { Writable } from "svelte/store";

import { ReactiveEventParameters } from "@egjs/conveyer";

export type SvelteReactiveEvents<
  Events extends Record<string, any>
  > = {
    [K in keyof Events as `on${Capitalize<string & K>}`]: (callback: ((...args: ReactiveEventParameters<Events, K & string, any>) => void)) => void;
  };


export type SvelteReactiveResult<
  Instance,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = any,
  Events extends Record<string, any> = {},
  > = {
    [key in keyof State]: Writable<State[key]>
  } & {
    [key in Methods]: Instance[key]
  } & SvelteReactiveEvents<Events>;

export type Ref<T> = ((value: T) => { destroy(): void }) & { current?: T };
