import { withReactiveMethods, ReactiveAdapter, ReactiveSubscribe } from "@egjs/conveyer";
import { onMounted, onUnmounted, Ref, ref } from "@vue/composition-api";
import { VueReactiveResult } from "./types";

export function useReactive<
  Instance extends ReactiveSubscribe<Record<string, any>>,
  State extends Record<string, any> = {},
  Methods extends keyof Partial<Instance> = any,
  Data = any,
  Events extends Record<string, any> = {},
  >(reactiveProps: ReactiveAdapter<Instance, State, Methods, Data, Events>,
): VueReactiveResult<Instance, State, Methods> {
  const instanceRef = ref<Instance>();
  const reactiveState = reactiveProps.state;
  const names = Object.keys(reactiveState);
  const refs: Record<string, Ref<any>> = {};
  for (const name in reactiveState) {
    refs[name] = ref(reactiveState[name]);
  }

  const methods = withReactiveMethods(instanceRef, reactiveProps.methods);

  onMounted(() => {
    const data = reactiveProps.data ? reactiveProps.data() : {} as Data;
    const inst = reactiveProps.instance(data);

    instanceRef.value = inst;

    names.forEach(name => {
      inst.subscribe(name as any, (value: any) => {
        refs[name].value = value;
      });
    });

    reactiveProps.init(inst, data);
  });

  onUnmounted(() => {
    const data = reactiveProps.data ? reactiveProps.data() : {} as Data;
    reactiveProps.destroy(instanceRef.value!, data);
  });

  return {
    ...refs,
    ...methods,
  } as any;
}
