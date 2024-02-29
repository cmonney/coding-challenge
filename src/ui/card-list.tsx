import { Grid, Skeleton } from '@mui/material';
import React, { ReactNode } from 'react';

interface ItemProps {
    children: ReactNode;
}

export const CardListItem = ({ children }: ItemProps) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            {children}
        </Grid>
    );
};

export interface CardListProps {
    isLoading: boolean;
    qtySkeletonItems?: number;
    children: () => JSX.Element[];
}

export const CardList = ({ isLoading, qtySkeletonItems = 3, children }: CardListProps) => {
    const renderSkeletonItems = () =>
        Array.from(new Array(qtySkeletonItems)).map((_, idx) => (
            <CardListItem key={idx}>
                <Skeleton height={118} data-testid='skeleton' />
            </CardListItem>
        ));

    return (
        <Grid container spacing={4}>
            {isLoading ? renderSkeletonItems() : children()}
        </Grid>
    );
};
