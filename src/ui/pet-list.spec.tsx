import MockAdapter from 'axios-mock-adapter';
import {axios} from '../services';
import PetList from "./pet-list";
import {render, screen, within} from "@testing-library/react";
import {PetSummary} from "../models";
import React from "react";

import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient()

const petMockData: PetSummary[] = [{
    "petId": 1,
    "name": "Hussar",
    "species": {
        "id": 1,
        "description": "Canine",
        "bookInitialConsultOnline": true
    },
    "breed": {
        "id": 114407057,
        "description": "Crossbreed"
    },
    "awaitingInitialConsultation": false
}];

test('Pet List - Renders full list of pets', async () => {

    render(<QueryClientProvider client={queryClient}><PetList/></QueryClientProvider>);
    expect(screen.getAllByTestId('skeleton').length).toBe(3);

    await screen.findByText('Your pets');

    expect(await screen.findByText(/No Pets Found/i)).toBeInTheDocument();
    expect(await screen.findByText('Register new pet')).toBeInTheDocument();
});

test('Pet List - renders page correctly with with pets', async () => {

    render(<QueryClientProvider client={queryClient}><PetList/></QueryClientProvider>);
    const linkElement = await screen.findByText(/Your Pets/i);
    expect(linkElement).toBeInTheDocument();

    expect((await screen.findAllByTestId('pet-card')).length).toBe(1);

    const [pet] = screen.getAllByTestId('pet-card');

    expect(await within(pet).findByText('Hussar')).toBeInTheDocument();
    expect(await within(pet).findByText('Crossbreed')).toBeInTheDocument();
    expect(await screen.findByText('Register new pet')).toBeInTheDocument();
});
