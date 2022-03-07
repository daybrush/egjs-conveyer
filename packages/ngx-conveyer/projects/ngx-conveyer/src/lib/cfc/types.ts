type WithPrefix<Prefix extends string, Name extends string> = Prefix extends "" ? Name : `${Prefix}${Capitalize<Name>}`;

export type AngularEventsOutputs<
  Events extends readonly any[],
  EventPrefix extends string = "",
  PropertyPrefix extends string = "",
  > = Events extends readonly [infer Name, ...infer Args] ? [`${WithPrefix<EventPrefix, string & Name>}: ${WithPrefix<PropertyPrefix, string & Name>}`, ...AngularEventsOutputs<Args, EventPrefix, PropertyPrefix>] : [];
