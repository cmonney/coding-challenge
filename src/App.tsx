import React from 'react';
import {Box, Container} from "@mui/material";
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Container maxWidth="lg">
                <Box sx={{my: 4}}>

                </Box>
            </Container>
        </QueryClientProvider>
    );
}

export default App;
