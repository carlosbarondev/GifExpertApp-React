import { shallow } from 'enzyme';

import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    let wrapper = shallow(<GifGridItem title={title} url={url} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<GifGridItem title={title} url={url} />);
    });

    test('debe mostrar <GifGridItem /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe tener un parrafo con el title de las props', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe tener una imagen con el titulo y la url de las props', () => {

        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('debe de tener un div con la clase animate__fadeIn', () => {

        const div = wrapper.find('div');

        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);

    });

})