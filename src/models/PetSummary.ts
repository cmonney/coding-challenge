import {Species} from "./Species";
import {Breed} from "./Breed";

export type PetSummary = {
    petId?: number;
    name?: string | null;
    species?: Species;
    breed?: Breed;
    awaitingInitialConsultation?: boolean;
};
