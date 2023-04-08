export function rate(obj: Dictionary): number;

export function randomArr(obj: Dictionary, string: string): any;

export type Dictionary<V = any, K extends string | symbol = string> = Record<K, V>;