import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import { FavoritesProvider } from "@/app/context/FavoritesContext";
import '@/styles/Typography.css';

async function fetchProducts()
{
    try {
        let APIResponse=await axios('https://api.escuelajs.co/api/v1/products');
            return APIResponse.data;
    } catch (error) {
        console.error(error);
        
    }
}
async function Page()
{

    let data=await fetchProducts();
    return(
        <>
        <FavoritesProvider>
            <Header/>
           {data ?<Section apidataprops={data}/>
           :
           <h1 className="text-center mb-24">Loading...</h1>}
            <Footer/>
        </FavoritesProvider>
        </>
    )
}

export default Page;