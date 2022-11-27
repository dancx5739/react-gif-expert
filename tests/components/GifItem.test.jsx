import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {

    const title = 'Batman';
    const url = 'https://acortar.link/mwjat5';

    test('debe de hacer match con el snapshot', () => {

        // container hace el snapshot
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect ( container ).toMatchSnapshot();

    });

})