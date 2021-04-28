export function is<Type>(value: Type, call: ((arg: Type) => void) | null = null): boolean {
  if (value !== undefined && value !== null) {
    if (call) call(value)
    return true
  }
  return false
}

export function as<Type>(object: any): Type {
  return object as Type
}

export function stringify(value: any): string {
  return JSON.stringify(value)
}

export function run(call: (() => void) | null) {
  if (call != null) call()
}

export function runWith<Type>(
  call: ((arg: Type) => void) | null, argument: Type) {
  if (call != null) call(argument)
}

export function doLater(call: (() => void) | null, timeout = 10) {
  setTimeout(() => run(call), timeout)
}

export function log(value: any) {
  console.log(value)
}

export function isDarkMode(): Boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}
