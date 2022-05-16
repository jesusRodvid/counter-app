import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp'
import heroes from '../../data/heroes';

describe('Pruebas en funcion de héroes', () => {
    test('deber de retornar un heroe por id ', () => {
        const id = 1;
        const heroe = getHeroeById  ( id );

        const heroeData = heroes.find (h => h.id === id );
        
        expect ( heroe ).toEqual( heroeData );
         
        console.log(heroe);
    })
    test('deber de retornar undefined si el heroe no existe ', () => {
        const id = 99;
        const heroe = getHeroeById  ( id );

        
        
        expect ( heroe ).toBe( undefined );
         
        console.log(heroe);
    })

    test('deber de retornar un arreglo de heroes de dc ', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner  ( owner );


        const heroeData = heroe.filter (h => h.owner === owner );

        
        
        expect( heroe ).toEqual( heroeData );
         
        console.log(heroe);
    })

    test('deber de retornar un arreglo de heroes de marvel ', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner  ( owner );


        //const heroeData = heroe.filter (h => h.owner === owner );

        
        
        //expect( heroe ).toEqual( heroeData );
        //expect( heroeData ).toHaveLength(2);
        expect (heroe).toHaveLength(2);
         
        console.log(heroe);
    })
})
