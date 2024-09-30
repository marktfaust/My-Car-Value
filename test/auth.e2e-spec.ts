import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Authentication System (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles a signup request', () => {
    const test_email = 'asdfjkl2@gmail.com';
    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: test_email, password: 'asdfjkl' })
      .expect(201)
      .then((response) => {
        const { id, email } = response.body;
        expect(id).toBeDefined();
        expect(email).toEqual(test_email);
      });
  });

  it('signup as a new user then get the currently logged in user', async () => {
    const test_email = 'asdf@gmail.com';

    const response = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: test_email, password: 'asdf' })
      .expect(201);

    const cookie = response.get('Set-Cookie');

    const { body } = await request(app.getHttpServer())
      .get('/auth/whoami')
      .set('Cookie', cookie)
      .expect(200);

      expect(body.email).toEqual(test_email);
  });
});
