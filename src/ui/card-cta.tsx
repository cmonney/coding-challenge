//External
import { Button, SxProps, Theme } from '@mui/material';
import React from 'react';

export type CardCtaProps = {
    children: React.ReactNode;
    onClick?: () => void;
    sx?: SxProps<Theme>;
    testId?: string;
};

const defaultCtaStyles = { position: 'relative', top: '-8px', right: '-17px', padding: '6px 16px', height: '36px' };

export const CardCta = (props: CardCtaProps) => {
    const { children, onClick, sx, testId } = props;
    const sxSpread = { ...{ ...{ ...sx } } } as SxProps<Theme>;

    return (
        <Button
            onClick={() => onClick && onClick()}
            variant='text'
            sx={sx ? ({ ...defaultCtaStyles, ...sxSpread } as SxProps<Theme>) : defaultCtaStyles}
            data-testid={testId}
        >
            {children}
        </Button>
    );
};
export default CardCta;
