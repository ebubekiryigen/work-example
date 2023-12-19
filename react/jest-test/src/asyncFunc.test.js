const {fetchData}=require('./asyncFunc')

beforeAll(()=>{
    console.log('before ALL')
})
test('Async Test',()=>{
    return fetchData().then((data)=>{
        expect(data).toBe('Merhaba')
    })
})

afterAll(()=>{
    console.log('after ALL')
})