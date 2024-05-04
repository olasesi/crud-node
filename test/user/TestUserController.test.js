import request from "supertest";
import app from "../../src/index.js";

describe("User controller", () => {
  test("Test users", async () => {
    const response = await request(app);
    response.patch("/api/users/2").send({
      firstname: "",
      lastname: "",
      email: "",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Fields cannot be empty");
  });
});
