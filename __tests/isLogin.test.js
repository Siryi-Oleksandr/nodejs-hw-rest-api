// відповідь повина мати статус-код 200
// у відповіді повинен повертатися токен
// у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String

const express = require("express");
const request = require("supertest");
const app = express();

const email = "vika_gray@mail.com";
const password = "123456";
const subscription = "pro";
const token = "smth";

app.post("/api/users/login", function (req, res) {
  res.json({
    token,
    user: {
      email,
      subscription,
    },
  });
});

describe("POST /users/login", function () {
  test("respons status === 200", async function () {
    const response = await request(app)
      .post("/api/users/login")
      .send({ email, password });

    expect(response.status).toBe(200);
  });

  test("respons must return token", async function () {
    const response = await request(app)
      .post("/api/users/login")
      .send({ email, password });
    const { token } = response.body;

    expect(token).toBeTruthy();
  });

  test("respons must return object user", async function () {
    const response = await request(app)
      .post("/api/users/login")
      .send({ email, password });
    const { user } = response.body;

    expect(user).toEqual(
      expect.objectContaining({
        email: expect.any(String),
        subscription: expect.any(String),
      })
    );
  });
});
