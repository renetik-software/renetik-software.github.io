import { CSValueStore } from '@/cs/CSValueStore'

describe('CSValueStore', () => {
  it('save load, boolean string, clear', () => {
    const store = new CSValueStore()
    store.clear()
    store.saveString('testString', 'pica')
    store.saveBoolean('testBoolean', true)
    expect(store.loadString('testString')).toEqual('pica')
    expect(store.loadBoolean('testBoolean')).toEqual(true)
    store.clear()
    expect(store.loadString('testString')).toEqual('')
    expect(store.loadBoolean('testBoolean')).toEqual(false)
  })
})
