const request = require("supertest");
const app = require("../app"); 

describe("Records API", () => {
  it("should fail without token (401)", async () => {
    const res = await request(app).get("/api/records");
    expect(res.statusCode).toBe(401);
  });
});