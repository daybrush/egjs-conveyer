import { ReactiveEventParameters } from "@egjs/conveyer";

export type ReactReactiveEvents<
  Events extends Record<string, any>
  > = {
    [K in keyof Events as `on${Capitalize<string & K>}`]: (effect: ((...args: ReactiveEventParameters<Events, K & string, any>) => void), deps?: readonly any[]) => void;
  };

export type ReactReactiveResult<
  Instance,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = any,
  Events extends Record<string, any> = {},
  > = State & { [key in Methods]: Instance[key] } & ReactReactiveEvents<Events>;
