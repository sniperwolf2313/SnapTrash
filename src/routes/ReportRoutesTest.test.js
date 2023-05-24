const request = require('supertest');
const app = require('./your-express-app'); // Replace with your Express app instance
const db = require('./your-firestore-connection'); // Replace with your Firestore connection instance

// Mock Firestore collection and document methods
jest.mock('./your-firestore-connection', () => ({
  collection: jest.fn().mockReturnThis(),
  doc: jest.fn().mockReturnThis(),
  create: jest.fn(),
  get: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
}));

describe('Reports API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('POST /api/reports creates a new report', async () => {
    const reportData = { id: '123', name: 'Test Report' };
    db.create.mockResolvedValueOnce();

    const response = await request(app)
      .post('/api/reports')
      .send(reportData);

    expect(response.status).toBe(200);
    expect(db.collection).toHaveBeenCalledWith('reports');
    expect(db.doc).toHaveBeenCalledWith('/123/');
    expect(db.create).toHaveBeenCalledWith({ name: 'Test Report' });
  });

  test('GET /api/reports/:report_id retrieves a specific report', async () => {
    const reportData = { id: '123', name: 'Test Report' };
    db.get.mockResolvedValueOnce({ data: () => reportData });

    const response = await request(app).get('/api/reports/123');

    expect(response.status).toBe(200);
    expect(db.collection).toHaveBeenCalledWith('reports');
    expect(db.doc).toHaveBeenCalledWith('123');
    expect(db.get).toHaveBeenCalled();
    expect(response.body).toEqual(reportData);
  });

  test('GET /api/reports retrieves all reports', async () => {
    const reportsData = [{ id: '123', name: 'Report 1' }, { id: '456', name: 'Report 2' }];
    db.get.mockResolvedValueOnce({ docs: [{ data: () => reportsData[0] }, { data: () => reportsData[1] }] });

    const response = await request(app).get('/api/reports');

    expect(response.status).toBe(200);
    expect(db.collection).toHaveBeenCalledWith('reports');
    expect(db.get).toHaveBeenCalled();
    expect(response.body).toEqual(reportsData);
  });

  test('PUT /api/reports/:report_id updates a specific report', async () => {
    const reportData = { id: '123', name: 'Updated Report' };
    db.update.mockResolvedValueOnce();

    const response = await request(app)
      .put('/api/reports/123')
      .send(reportData);

    expect(response.status).toBe(200);
    expect(db.collection).toHaveBeenCalledWith('reports');
    expect(db.doc).toHaveBeenCalledWith('123');
    expect(db.update).toHaveBeenCalledWith({ name: 'Updated Report' });
  });

  test('DELETE /api/reports/:report_id deletes a specific report', async () => {
    db.delete.mockResolvedValueOnce();

    const response = await request(app).delete('/api/reports/123');

    expect(response.status).toBe(200);
    expect(db.collection).toHaveBeenCalledWith('reports');
    expect(db.doc).toHaveBeenCalledWith('123');
});});
