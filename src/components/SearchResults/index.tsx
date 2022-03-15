import { ProductItem } from "../ProductItem";




interface  SearchResultsProps{
    results: Array<{
        slug: string;
        image: string;
        description: string;
        price: number;
    }>
}


export function SearchResults({results}: SearchResultsProps){
    return(
        <div>
           {results.map(product=>{
                return(
                    <ProductItem product={product} key={product.slug}/>
                )
           })}
        </div>
            
    )
}