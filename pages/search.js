import Head from 'next/head';
import Header from '../components/Header';
import {API_KEY ,Context_Key} from "../Keys";
import Response from '../Response';
import {useRouter} from "next/router";
import SearchResults from '../components/SearchResults';
function Search({results}) {
    const router = useRouter();
    console.log('results',results);
    return (
        <div>
            <Head>
              <title>{router.query.term} - Google Search</title>
            </Head>
            {/* Header Page  */}
              <Header/>
            {/* Serch Results */}
            <SearchResults results={results} />
        </div>
    )
}

export default Search;
 // for server side rendering
 export async function getServerSideProps(context){
    const useDummydata=false;
    const startIndex=context.query.start || "0";
const data = useDummydata ? Response : await
 fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${Context_Key}&q=${context.query.term}&start=${startIndex}`
     ).then((response)=>response.json());

   
     //after the server has rendered pass results to clients
     return {
         props:{
             results: data,
         },
     };
 }

