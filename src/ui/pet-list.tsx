import {Button, Container, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';

import {selectSortedPets, useClientPetsQuery} from '../queries';
import {PetCard} from './pet-card';
import {CardList, CardListItem} from './card-list';
import {PetSummary} from "../models";


export function PetList() {

    const {isLoading, data: pets} = useClientPetsQuery((petList) => selectSortedPets(petList, 'name'));
    // eslint-disable-next-line
    // @ts-ignore
    const sortedPets = pets?.sort((a: PetSummary, b: PetSummary) => {
        return a?.name?.localeCompare(b?.name || '', undefined, {sensitivity: 'base'});
    });

    return (

        <Container>
            <Grid container gap={3} my={4}>
                <Grid container direction='row' justifyContent='space-between' alignItems='baseline'>
                    <Typography sx={{mr: 2}} noWrap variant='h4'>
                        Your pets
                    </Typography>
                    <Button variant='contained' sx={{mb: {xs: '20px'}}}>
                        Register new pet
                    </Button>
                </Grid>
            </Grid>

            <Grid container gap={3} my={4}>
                {isLoading || sortedPets?.length ? (
                    <CardList isLoading={isLoading}>
                        {() => sortedPets?.map((pet) => (
                            <CardListItem key={pet.petId}>
                                <PetCard pet={pet}/>
                            </CardListItem>)) || []}
                    </CardList>) : (<Typography sx={{mr: 2}} noWrap variant='h5'>No Pets Found</Typography>)}
            </Grid>
        </Container>
    );
}

export default PetList;
