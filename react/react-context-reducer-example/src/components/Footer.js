import { useSetting } from "../context/"


const Footer = () => {

    const data = useSetting()

    return(
        <footer className={data.theme === 'dark' && 'dark'}>
            <div>
                <span>tema : {data.theme}</span>
                <span>Dil : {data.language}</span>
            </div>
        </footer>
    )

}

export default Footer