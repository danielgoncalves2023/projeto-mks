import { LayoutContainer } from "./Layout.style"
import { CardProduct } from "../CardProduct/CardProduct"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { GridProducts } from "../GridProducts/GridProducts"
import { useQuery } from "react-query"
import Skeleton from "@mui/material/Skeleton/Skeleton"

interface Product {
    id: number;
    name: string;
    price: string;
    photo: string;
    description: string;
    brand: string;
}

interface ApiResponse {
    products: Product[];
}

export const Layout = () => {
    const apiURL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC';

    const { data: responseData, isLoading, isError } = useQuery<ApiResponse>("products", async () => {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error("Falha ao buscar os produtos");
        }
        const data = response.json();
        return data;
    });

    return (
        <>
            <LayoutContainer>
                <Header />
                <GridProducts>
                    {isLoading && (
                        <>
                            <Skeleton
                                sx={{ bgcolor: 'grey.370' }}
                                variant="rounded"
                                width={210}
                                height={320}
                                animation="wave"
                            />
                            <Skeleton
                                sx={{ bgcolor: 'grey.370' }}
                                variant="rounded"
                                width={210}
                                height={320}
                                animation="wave"
                            />
                            <Skeleton
                                sx={{ bgcolor: 'grey.370' }}
                                variant="rounded"
                                width={210}
                                height={320}
                                animation="wave"
                            />
                            <Skeleton
                                sx={{ bgcolor: 'grey.370' }}
                                variant="rounded"
                                width={210}
                                height={320}
                                animation="wave"
                            />
                            <Skeleton
                                sx={{ bgcolor: 'grey.370' }}
                                variant="rounded"
                                width={210}
                                height={320}
                                animation="wave"
                            />
                            <Skeleton
                                sx={{ bgcolor: 'grey.370' }}
                                variant="rounded"
                                width={210}
                                height={320}
                                animation="wave"
                            />
                            <Skeleton
                                sx={{ bgcolor: 'grey.370' }}
                                variant="rounded"
                                width={210}
                                height={320}
                                animation="wave"
                            />
                            <Skeleton
                                sx={{ bgcolor: 'grey.370' }}
                                variant="rounded"
                                width={210}
                                height={320}
                                animation="wave"
                            />
                        </>
                    )}
                    {isError && (
                        <p>Ocorreu um erro ao buscar os produtos.</p>
                    )}
                    {responseData && responseData.products.map(product => (
                        <CardProduct
                            key={product.id}
                            product={product}
                        />
                    ))}
                </GridProducts>
                <Footer />
            </LayoutContainer>
        </>
    )
}