const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)


it('Call the /youtube endpoint', async done => {
    const res = await request.get('/youtube')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello, youtube indonesia!')
    done()
})

it('Call the /jere endpoint', async done => {
    const res = await request.get('/jere')
    expect(res.status).toBe(200)
    expect(res.text).toBe('jere!')
    done()
})

it('Call the /miah endpoint', async done => {
    const res = await request.get('/miah')
    expect(res.status).toBe(200)
    expect(res.text).toBe('miah!')
    done()
})


it('Call the /wisnu endpoint', async done => {
    const res = await request.get('/wisnu')
    expect(res.status).toBe(200)
    expect(res.text).toBe('wisnu!')
    done()
})

it('Call the /adam endpoint', async done => {
    const res = await request.get('/adam')
    expect(res.status).toBe(200)
    expect(res.text).toBe('adam!')
    done()
})

it('Call the / endpoint', async done => {
    const res = await request.get('/')
    expect(res.status).toBe(200)
    expect(res.text).toBe('This App is running properly!')
    done()
})
it('Call the /pong endpoint', async done => {
    const res = await request.get('/ping')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Pong!')
    done()
})
it('Call the /hello/:name endpoint', async done => {
    const res = await request.get('/hello/Iqbal')
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Hello Iqbal')
    done()
})
  

  