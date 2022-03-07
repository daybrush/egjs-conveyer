import { camelize } from "@egjs/conveyer";
import { AngularEventsOutputs } from "./types";

export function convertOutputs<
  Events extends readonly any[],
  EventPrefix extends string = "",
  PropertyPrefix extends string = "",
  >(events: Events, eventPrefix?: EventPrefix, propertyPrefix?: PropertyPrefix,
): AngularEventsOutputs<Events, EventPrefix, PropertyPrefix> {
  return events.map(name => {
    const eventName = eventPrefix ? camelize(`${eventPrefix} ${name}`) : name;
    const propertyName = propertyPrefix ? camelize(`${propertyPrefix} ${name}`) : name;
    return `${eventName}: ${propertyName}`;
  }) as any;
}
