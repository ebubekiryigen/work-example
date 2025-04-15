import { Helmet } from 'react-helmet';
import Header from '../components/header';


export default function Home(){
    return(
        <div>
            <Helmet>
                <title>Ansayfa</title>
            </Helmet>
            <Header />
            Anasayfa
        </div>
    )
}