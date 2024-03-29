import Link from 'next/link'
import styles from './layout.module.scss'

export default function Layout({children}){
    return(
        <div className={styles['layout-page']}>
            <nav className='flexx'>
                <ul className={styles['menu']}>
                    <li>
                        <Link href="/">
                            Anasayfa
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            Hakkımızda
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog/">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog/post">
                            Post
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}