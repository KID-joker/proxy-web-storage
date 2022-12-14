export interface StorageLike {
  [x: string]: any;
  clear(): void
  getItem(key: string): string | null
  key(key: number): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
  length: number
}
export type StorageValue = string | object | null;

export interface ActiveEffect {
  storage: object
  key: string
  proxy: any
}

export type EffectMap = Map<string, Effect[]>;
export type EffectFn<V = any, OV = any> = (
  value?: V,
  oldValue?: OV
) => any
export interface Effect {
  ctx: any,
  fn: EffectFn
}

export interface TargetObject {
  type: string
  value: string | object
  expires?: ExpiresType
}

export type ExpiresType = string | number | Date;
