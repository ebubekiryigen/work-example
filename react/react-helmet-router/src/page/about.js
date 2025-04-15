import { Helmet } from 'react-helmet';
import Header from '../components/header';


export default function contact(){
    return(
        <div>
            <Helmet>
                <title>Hakkımızda</title>
            </Helmet>
            <Header />
            hakkımızda sayfası
        </div>
    )
}