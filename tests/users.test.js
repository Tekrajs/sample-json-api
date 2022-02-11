let app = require("../app");
let request = require("supertest");

let random_string = Buffer.from(Math.random().toString()).toString("base64").substring(10, 5);

describe("User Registration Test", () => {
  it("Registers an user", async () => {
    let payload = {
      user: {
        username: random_string,
        email: `${random_string}@example.com`,
        password: "example@123"
      }
    };

    await request(app)
      .post("/api/users/registration")
      .send(payload)
      .expect(200)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.status).toEqual(expect.any(Number));
        expect(response.body.currentUser.username).toEqual(random_string.toLowerCase());
        expect(response.body.currentUser.email).toEqual(`${random_string.toLowerCase()}@example.com`);
      });
  });
});

describe("Login user", () => {
  it("Logs in the users", async () => {
    let payload = {
      user: {
        email: `${random_string}@example.com`,
        password: "example@123"
      }
    };

    await request(app)
      .post("/api/users/login")
      .send(payload)
      .expect(200)
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.status).toEqual(expect.any(Number));
        expect(response.body).toHaveToken();
      });
  });
});

expect.extend({
   toHaveToken(received) {
    if (received.user.token) {
      return { pass: true };
    }
    return {
      message: () => `expected ${received} to have token`,
      pass: false
    };
  }
});
