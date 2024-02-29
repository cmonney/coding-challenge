import React from 'react';
import {render, screen,} from '@testing-library/react';
import App from './App';

import MockAdapter from 'axios-mock-adapter';
import {axios} from './services';


test('App Home - renders page correctly with no pets', async () => {

    render(<App/>);
    const linkElement = await screen.findByText(/Medivet Coding Challenge/i);
    expect(linkElement).toBeInTheDocument();
    expect(await screen.findByText(/No Pets Found/i)).toBeInTheDocument();
    expect(await screen.findByText('Register new pet')).toBeInTheDocument();
});

test('App Home - renders page correctly with one pets', async () => {

    render(<App/>);
    const linkElement = await screen.findByText(/Medivet Coding Challenge/i);
    expect(linkElement).toBeInTheDocument();
    expect(await screen.findByText(/No Pets Found/i)).toBeInTheDocument();
    expect(await screen.findByText('Register new pet')).toBeInTheDocument();
});

test('App - Header renders correctly', async () => {

    render(<App/>);
    const headerTextElement = await screen.findByText(/Medivet Coding Challenge/i);
    expect(headerTextElement).toBeInTheDocument();
});


test('App - Footer renders correctly', async () => {

    render(<App/>);
    const headerTextElement = await screen.findByText(/Copyright © Medivet 2024/i);
    expect(headerTextElement).toBeInTheDocument();
});
