import React from 'react';
import Nav from '../src/components/Nav'
import SearchBar from '../src/components/SearchBar'
import { render, fireEvent } from '@testing-library/react'

describe('Nav', () => {
    it('renders the sign out button', () => {
        const { queryByTitle } = render(<Nav />);
        const signOutButton = queryByTitle('signOutButton')
        expect(signOutButton).toBeTruthy()
    })

    it('renders the search button', () => {
        const { queryByTitle } = render(<Nav />);
        const searchButton = queryByTitle('search')
        expect(searchButton).toBeTruthy()
    })

    it('search button changes url to /', () => {
        const { queryByTitle } = render(<Nav />);
        const searchButton = queryByTitle('search')

        //sets current endpoint to be /mymovies
        global.window = { location: { pathname: '/mymovies' } };
        fireEvent.click(searchButton)

        //checks the the endpoint has been changed to /
        expect(global.window.location.pathname).toEqual('/');
    })

    it('renders the mymovies button', () => {
        const { queryByTitle } = render(<Nav />);
        const myMoviesButton = queryByTitle('mymovies')
        expect(myMoviesButton).toBeTruthy()
    })

    it('my movies button changes url to /mymovies', () => {
        const { queryByTitle } = render(<Nav />);
        const myMoviesButton = queryByTitle('mymovies')

        //sets current endpoint to be null
        global.window = { location: { pathname: null } };
        fireEvent.click(myMoviesButton)

        //checks the the endpoint has been changed to /mymovies
        expect(global.window.location.pathname).toEqual('/mymovies');
    })

})

describe('SearchBar', () => {
    it('renders the search input ', () => {
        const { queryByTitle } = render(<SearchBar />);
        const input = queryByTitle('searchinput')
        expect(input).toBeTruthy()
    });

    it('inputs value changes correctly', () => {
        const { queryByTitle } = render(<SearchBar />);
        const searchinput = queryByTitle('searchinput')
        fireEvent.change(searchinput, { target: { value: 'test' } })
        expect(searchinput.value).toBe('test')
    });

    it('endpoint is changed on form submit', () => {
        const { queryByTitle } = render(<SearchBar />);
        const form = queryByTitle('form')
        const searchinput = queryByTitle('searchinput')
        global.window = { location: { pathname: null } };
        fireEvent.change(searchinput, { target: { value: 'test' } })
        fireEvent.submit(form)

        expect(global.window.location.pathname).toEqual('/test');

    })
});