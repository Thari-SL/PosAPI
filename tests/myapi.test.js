const request = require('supertest');

const app = require('../index');
const Student = require('../model/StudentSchema');

describe('Student API', () => {
    beforeAll(async () => {
        await Student.deleteMany({});
    });

    describe('POST /students', () => {
        test('should create a new student', async () => {
            const student = {
                regNum: 123,
                fName: 'John',
                lName: 'Doe',
                address: '123 Main St',
                birthdate: '1990-01-01',
                idNum: '1234567890',
                degree: 'Computer Science'
            };
            const res = await request(app).post('/students').send(student);
            expect(res.statusCode).toEqual(201);
            expect(res.body.status).toEqual(true);
            expect(res.body.message).toEqual('Save Successfully...');
        });

        test('should return error if student already exists', async () => {
            const student = {
                regNum: 123,
                fName: 'Jane',
                lName: 'Doe',
                address: '456 Main St',
                birthdate: '1995-01-01',
                idNum: '0987654321',
                degree: 'English'
            };
            const res = await request(app).post('/students').send(student);
            expect(res.statusCode).toEqual(400);
            expect(res.body.message).toEqual('Already Exists');
        });
    });

    describe('GET /students/:regNum', () => {
        test('should return a student by registration number', async () => {
            const res = await request(app).get('/students/123');
            expect(res.statusCode).toEqual(200);
            expect(res.body.status).toEqual(true);
            expect(res.body.data.regNum).toEqual(123);
        });

        test('should return error if student not found', async () => {
            const res = await request(app).get('/students/456');
            expect(res.statusCode).toEqual(404);
            expect(res.body.message).toEqual('Empty result...');
        });
    });

    describe('GET /students', () => {
        test('should return a list of all students', async () => {
            const res = await request(app).get('/students');
            expect(res.statusCode).toEqual(200);
            expect(res.body.status).toEqual(true);
            expect(res.body.data).toBeInstanceOf(Array);
        });
    });

    describe('PUT /students', () => {
        test('should update a student by registration number', async () => {
            const updatedStudent = {
                regNum: 123,
                fName: 'John',
                lName: 'Smith',
                address: '123 Main St',
                birthdate: '1990-01-01',
                idNum: '1234567890',
                degree: 'Computer Science'
            };
            const res = await request(app).put('/students').send(updatedStudent);
            expect(res.statusCode).toEqual(201);
            expect(res.body.status).toEqual(true);
            expect(res.body.message).toEqual('Update Successfully...');
        });
    });
});

/*        test('should return error if student not found', async () => {
            const updatedStudent = {
                regNum: 456,
                fName: 'Jane',
                lName: 'Doe',
                address: '456 Main St',
                birthdate: '1995-01-01',
                idNum: '0987654321',
                degree: 'English'
            };
        )
        }
        */

