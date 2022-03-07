import { ReactiveEventParameters } from "@egjs/conveyer";
import { Ref } from "vue";

export type VueReactiveEvents<
  Events extends Record<string, any>
  > = {
    [K in keyof Events as `on${Capitalize<string & K>}`]: (callback: ((...args: ReactiveEventParameters<Events, K & string, any>) => void)) => void;
  };


export type VueReactiveResult<
  Instance,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = any,
  Events extends Record<string, any> = {},
  > = {
    [key in keyof State]: Ref<State[key]>
  } & {
    [key in Methods]: Instance[key]
  } & VueReactiveEvents<Events>;
