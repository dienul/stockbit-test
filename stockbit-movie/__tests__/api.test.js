const supertest = require('supertest')
const app = require('../app');
const request = supertest(app)

describe('TEST API /search', () => {
  it('It should be return 200: success',async (done) => {
    const response = await request.get('/movie/search?s=batman')
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
    done()   
  });

  it('It should be return 400: parameter is required', async (done) =>{
    const response = await request.get('/movie/search?s=')
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Query param 's' is required");
    done()
  });

  it('It should be return 400: data not found', async (done) => {
    const response = await request.get('/movie/search?s=somethingWrongYes')
    expect(response.statusCode).toBe(400);
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(response.body.error).toBe("Data not found");
    expect(response.body.data.length).toEqual(0)
    done()
  });

});

describe('TEST API /detail', () => {
  it('It should be return 200: success',async (done) => {
    const response = await request.get('/movie/detail?i=tt2975590')
    // console.log('response >> ',response.body)
    expect(response.statusCode).toBe(200);
    expect(response.body.data.Response).toBe("True");
    done()   
  });

  it('It should be return 400: parameter is required', async (done) =>{
    const response = await request.get('/movie/detail?')
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Query param 'i' or 't is required");
    done()
  });

  it('It should be return 200: data not found', async (done) => {
    const response = await request.get('/movie/detail?i=09010291')
    expect(response.statusCode).toBe(200);
    expect(response.body.data.Response).toBe("False");
    expect(response.body.error).toBe('');
    done()
  });

});
