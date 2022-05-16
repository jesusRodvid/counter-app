import {getSaludo} from '../../base-pruebas/02-template-string'


describe("Pruebas en 02-template-string", () => {
  test("should return saludo + nombre + !", () => {

    const nombre = 'Jesus'

    const saludo = getSaludo(nombre);

    

    expect(saludo).toBe('Hola ' + nombre + '!');
  });

  test('should return saludo Carlos! ', () => {

    const saludo = getSaludo();
    expect(saludo).toBe('Hola Carlos!')
      
  })
  
});
