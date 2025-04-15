import { Helmet } from 'react-helmet';
import Header from '../components/header';


export default function About(){
    return(
        <div>
            <Helmet>
                <title>İletişim</title>
            </Helmet>
            <Header />
            iletişim sayfası
        </div>
    )
}