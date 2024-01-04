import request from "supertest";
import { App } from "./app";

// teste suite
describe("Test", () => {
  // teste unitario
  it("should test the server running", async () => {
    const app = new App().app;
    const response = await request(app).get("/");
    expect(response.body).toStrictEqual({ ok: true });
  });
});
