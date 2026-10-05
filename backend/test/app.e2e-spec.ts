import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from './../src/app.module.js';

describe('Portfolio API (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    process.env.MESSAGES_FILE = 'storage/test-messages.json';
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }),
    );
    await app.init();
  });

  it('GET /portfolio returns profile and projects', async () => {
    const res = await request(app.getHttpServer()).get('/portfolio').expect(200);
    expect(res.body.profile.name).toBeTruthy();
    expect(res.body.projects.length).toBeGreaterThan(0);
  });

  it('GET /projects/:slug returns 404 for unknown project', () => {
    return request(app.getHttpServer()).get('/projects/does-not-exist').expect(404);
  });

  it('POST /contact rejects invalid input', () => {
    return request(app.getHttpServer())
      .post('/contact')
      .send({ name: 'A', email: 'nope', message: 'short' })
      .expect(400);
  });

  it('POST /contact accepts a valid message', () => {
    return request(app.getHttpServer())
      .post('/contact')
      .send({ name: 'Jane Doe', email: 'jane@example.com', message: 'Hello, I would like to work with you.' })
      .expect(201);
  });

  afterEach(async () => {
    await app.close();
  });
});
