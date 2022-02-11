let app = require("../app");
let request = require("supertest");

// Update token with the actual one that is valid for any user
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDZhNDM4MzQ5ZmMxMTI4ZjVhMzgxOSIsInVzZXJuYW1lIjoiZGt3bWQiLCJpYXQiOjE2NDQ2MDI0MjQsImV4cCI6MTY0NDYwNjAyNH0.CY4zhvUGrS1Xg5nnAr5SEI98L53j37OfVh8sii8CEIo";

describe("Retirieve all the post", () => {

  it("can retrieve only after authorization", async () => {

    await request(app)
      .get("/api/posts")
      .expect(401)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.status).toEqual(expect.any(Number));
      });
  });


  it("get all posts", async () => {

    await request(app)
      .get("/api/posts")
      .set('authorization',`Token ${token}`)
      .expect(200)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.status).toEqual(expect.any(Number));
        expect(response.body.posts.length).toEqual(expect.any(Number))
      });
  });


  it("gets post details", async () => {
    await request(app)
    .get("/api/posts/41")
    .set('authorization',`Token ${token}`)
      .expect(200)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.status).toEqual(expect.any(Number));
        expect(response.body.post).not.toBeUndefined()
        expect.objectContaining({id:expect.any(Number)})
      });
  })

 
});

