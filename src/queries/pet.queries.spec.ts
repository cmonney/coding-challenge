import MockAdapter from 'axios-mock-adapter';
import {axios} from '../services';
import {getClientPets, getPetDetails} from './pet.queries';
import {PetSummary} from "../models";

const mockPetData: PetSummary = {
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
};

test('Get Pets - Returns pets empty array on successful request.', async () => {
    const mockPets: PetSummary[] = [mockPetData]

    const pets = await getClientPets();
    expect(pets).toEqual(mockPets);
});

test('Get Pet Details - Returns pet details.', async () => {

    const pets = await getPetDetails(1);
    expect(pets).toEqual(mockPetData);
});
