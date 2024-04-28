import { Grid, GridContainer } from "./GridProducts.style"

// Grid que irá conter a renderizar dos produtos pela API
export const GridProducts = ({ children }: any) => {

    return (
        <>
            <GridContainer>
                <Grid>
                    {children}
                </Grid>
            </GridContainer>
        </>
    )
}