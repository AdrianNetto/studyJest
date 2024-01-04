import request from "supertest";
import { App } from "./app";

// teste suite
describe("Tests", () => {
  // testes unitarios
  it("should test the server running", async () => {
    const app = new App().app;
    const response = await request(app).get("/");
    expect(response.body).toStrictEqual({ ok: true });
  });

  it("should test if create user", async () => {
    const app = new App().app;
    const response = await request(app).post("/create-user").send({
      nome: "Jhon",
      email: "Jhon.test@test.com",
      password: "123123",
      age: 30,
    });
    expect(response.statusCode).toEqual(200 );
    expect(response.body).toHaveProperty("id");
  });

  it("should test if list users", async () => {
    const app = new App().app;
    const response = await request(app).get("/list-users");
    expect(response.statusCode).toEqual(200 );
    console.log(response)
  });
});
