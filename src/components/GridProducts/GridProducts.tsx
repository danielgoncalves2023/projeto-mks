import { Grid, GridContainer } from "./GridProducts.style"

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