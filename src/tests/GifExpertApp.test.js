import { shallow } from 'enzyme';

import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

    let wrapper = shallow(<GifExpertApp />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<GifExpertApp />);
    });

    test('debe mostrar <GifExpertApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar una lista de categorias ', () => {

        const categories = ['Dragon Ball', 'One Punch'];

        wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })


})