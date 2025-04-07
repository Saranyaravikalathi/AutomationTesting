describe('api testing GET', function () {
  it('get api test', async function({supertest}) {
    await supertest
      .request("https://petstore.swagger.io/v2")
      .get("/pet/findByStatus?status=available")
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function(response){
          expect(response._body.length).to.be.greaterThan(0);
      });
  });
});


describe('api testing POST', function () {
  it('post api test', async function({supertest}) {
    await supertest
      .request("https://petstore.swagger.io/v2")
      .post("/pet")
      .send({
        "id": 0,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "doggie",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function(response){
          expect(response._body.name).to.be.equal("doggie");
      });
  });
});