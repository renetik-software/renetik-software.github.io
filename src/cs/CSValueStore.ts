import '@/cs/CSExtensions'
import { run } from '@/cs/extensions/CSLang'

export class CSValueStore {

  clear() {
    localStorage.clear()
  }

  loadBoolean(key: string, defaultValue: boolean = false): boolean {
    const value = this.load(key)
    return value != null ? value.toBoolean() : defaultValue
  }

  loadString(key: string, defaultValue: string = ''): string {
    const value = this.load(key)
    return value != null ? value : defaultValue
  }

  load(key: string): string | null {
    return localStorage.getItem(key)
  }

  saveBoolean(key: string, value: boolean | null) {
    this.saveString(key, value != null ? value.toString() : null)
  }

  saveString(key: string, value: string | null) {
    if (value) localStorage.setItem(key, value)
    else localStorage.removeItem(key)

  }

  booleanProperty(
    id: string, value: boolean, onChanged: (() => void) | null = null) {
    return new CSValueStoreBooleanProperty(this, id, value, onChanged)
  }
}

export class CSValueStoreBooleanProperty {

  private readonly store: CSValueStore
  private readonly id: string
  private readonly defaultValue: boolean
  private readonly onChanged: (() => void) | null
  private _value: boolean

  constructor(store: CSValueStore, id: string, defaultValue: boolean,
              onChanged: (() => void) | null) {
    this.store = store
    this.id = id
    this.defaultValue = defaultValue
    this.onChanged = onChanged
    this._value = this.store.loadBoolean(this.id, defaultValue)
  }

  get value() { return this._value }

  set value(value: boolean) {
    this._value = value
    this.store.saveBoolean(this.id, value)
    run(this.onChanged)
  }

}
