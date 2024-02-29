import {Card, CardContent, Divider, Grid, Typography} from '@mui/material';
import {colors} from "./colors";
import {PetSummary} from '../models';

export interface PetCardProps {
    pet: PetSummary;
}

export function PetCard({pet}: PetCardProps) {

    return (
        <Card data-testid='pet-card'>
            <CardContent sx={{padding: '16px 24px !important'}}>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography gutterBottom variant={'h6'} noWrap={true}>
                            {pet.name}
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{my: 1.5}}></Divider>
                <Typography variant='subtitle2' sx={{color: colors.grey['800']}} noWrap={true}>
                    {pet.breed?.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PetCard;
