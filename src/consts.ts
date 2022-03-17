/**
 * egjs-conveyer
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
export const CONVEYER_METHODS = [
  "update",
  "findElement",
  "findItem",
  "scrollBy",
  "scrollTo",
  "scrollIntoView",
  "setItems",
  "updateContainer",
  "updateItems",
  "init",
] as const;

export const CONVEYER_EVENTS = [
  "reachStart",
  "reachEnd",
  "leaveStart",
  "leaveEnd",
  "beginScroll",
  "finishScroll",
] as const;

export const CONVEYER_REACTIVE_STATE = {
  "isReachStart": false,
  "isReachEnd": false,
  "scrollPos": 0,
} as const;

