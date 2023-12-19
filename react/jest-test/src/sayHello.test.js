const {sayHello}=require('./sayHello')

test('merhaba = MERHABA',()=> {
    expect(sayHello('merhaba')).toBe('MERHABA')
})