const request = require("supertest");
const app = require("../app");

// Pruebas unitarias

describe('Ruta inicial', () =>{
    
    test('Debe devolver una respuesta por GET', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test('Debe devolver una respuesta por GET', (done) => {
        request(app).post('/').then((response) => {
            expect(response.statusCode).toBe(404);
            expect(response.statusCode).not.toBe(200);
            done();
        });
    });

    test('Debe mostrar Bienvenido', (done) => {
        request(app).get('/').then((response) => {
            expect(response.test).toMatch(/Bienvenido/)
            done();
        });
    });


});