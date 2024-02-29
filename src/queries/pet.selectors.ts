import {PetSummary} from '../models';

export const selectSlicedPets = (petList: Array<PetSummary>, qty: number) => ({
    slicedData: petList.slice(0, qty),
    total: petList.length,
});

type SortableFields = 'name' | 'breed';

export const selectSortedPets = (petList: Array<PetSummary>, sortBy: SortableFields) =>
    petList.sort((a, b) => {
        const aPetId = a.petId as number;
        const bPetId = b.petId as number;
        if (a[sortBy] === b[sortBy]) {
            return aPetId - bPetId;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return a[sortBy] > b[sortBy] ? 1 : -1;
    });

export const selectSlicedSortedPets = (petList: Array<PetSummary>, qty: number, sortBy: SortableFields) =>
    selectSlicedPets(selectSortedPets(petList, sortBy), qty);
