import {useQuery} from 'react-query';

import {PetService} from '../services';
import {PetSummary} from '../models';

export const petKeys = {
    all: ['pets'] as const,
    lists: () => [...petKeys.all, 'list'] as const,
    details: () => [...petKeys.all, 'detail'] as const,
    detail: (id: number) => [...petKeys.details(), id] as const,
}

export function getClientPets() {
    return new PetService().getPets();
}

export function getPetDetails(petId: number) {
    return new PetService().getPet(petId);
}

export function useClientPetsQuery<T = Array<PetSummary>>(
    select?: (pet: Array<PetSummary>) => T,
    enabled?: boolean,
) {
    return useQuery(petKeys.lists(), getClientPets, {select, enabled});
}

export const usePetDetailsQuery = <T = PetSummary>(
    petId: number,
    options?: { select?: (pet: PetSummary | undefined) => T; enabled?: boolean },
) =>
    useQuery(petKeys.detail(petId), () => getPetDetails(petId), {select: options?.select, enabled: options?.enabled});
