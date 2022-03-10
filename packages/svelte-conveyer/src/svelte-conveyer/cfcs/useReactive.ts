import { withReactiveMethods, ReactiveSubscribe, ReactiveAdapter, camelize } from "@egjs/conveyer";
import { onDestroy, onMount } from "svelte/internal";
import { writable, Writable } from "svelte/store";
import { Ref, SvelteReactiveResult } from "./types";


export function useRef<T>(defaultValue?: T): Ref<T> {
  const refFunction = (value: T) => {
    refFunction.current = value;

    return {
      destroy() {
        return;
      },
    };
  };
  refFunction.current = defaultValue;

  return refFunction;
}

export function useReactive<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = any,
  Data = any,
  Events extends Record<string, any> = {},
  >(reactiveProps: ReactiveAdapter<Instance, State, Methods, Data, Events>,
): SvelteReactiveResult<Instance, State, Methods, Events> {
  const writables: Record<string, Writable<any>> = {};
  const instanceRef = useRef<Instance>();
  const reactiveState = reactiveProps.state;
  const names = Object.keys(reactiveState);
  const methods = withReactiveMethods(instanceRef, reactiveProps.methods);

  for (const name in reactiveState) {
    writables[name] = writable(reactiveState[name]);
  }

  onMount(() => {
    const data = reactiveProps.data ? reactiveProps.data() : {} as Data;
    const inst = reactiveProps.instance(data);

    instanceRef.current = inst;

    names.forEach(name => {
      inst.subscribe(name as any, (value: any) => {
        writables[name].set(value);
      });
    });

    reactiveProps.init(inst, data);
  });

  onDestroy(() => {
    const data = reactiveProps.data ? reactiveProps.data() : {} as Data;
    const inst = instanceRef.current!;
    if (inst) {
      reactiveProps.destroy(inst, data);
    }
  });

  const reactiveEvents = (reactiveProps.events || []);
  const events = reactiveEvents.reduce((result, name) => {
    result[camelize(`on ${name}`)] = (callback: (...args: any[]) => void) => {
      onMount(() => {
        reactiveProps.on && reactiveProps.on(instanceRef.current!, name as any, callback as any);
      });
      onDestroy(() => {
        reactiveProps.off && reactiveProps.off(instanceRef.current!, name as any, callback as any);
      });
    };

    return result;
  }, {} as Record<string, any>);

  return {
    ...writables,
    ...methods,
    ...events,
  } as any;
}

