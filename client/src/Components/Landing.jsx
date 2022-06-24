import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar'
import Carousel1 from './Carousel';
import Footer from './footer';
import WhatsNew from './whatsnew';


export default function Landing(){
    const dispatch = useDispatch()
    const products = useSelector((state)=> state.products)
    useEffect(() => {
        dispatch(getAllProducts());
      }, [dispatch]);
    return(
        <>

            <SearchBar/>
            <Carousel1/>
            <WhatsNew/>
            <Footer/>

        </>
    ) 
}