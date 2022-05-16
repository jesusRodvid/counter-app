
describe ('Pruebas en el archivo demo.test.js', ()=> {});
test('The strings should be equals', () => {
    
    const mensaje = 'Holita';

    const mensaje2 = `Holita`;

    expect( mensaje ).toBe( mensaje2 );
   
})
