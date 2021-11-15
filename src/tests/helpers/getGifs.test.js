import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en la funcion getGifs Fetch', () => {

    test('debe traer 10 elementos', async () => {

        const gifs = await getGifs('Dragon Ball');

        expect(gifs.length).toBe(10);

    });

    test('debe traer 0 elementos si no mando la categoria', async () => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    });

})