import { useState } from "react"
import Logo from "../public/Logo"
import MenuItem from "./MenuItem"
import propTypes from 'prop-types'

const Header = ({activeTitle,onMenuChange}) => {
    const [_activeTitle,setActiveTitle] = useState(activeTitle)
    const [menuItem] = useState(
        [{
            title:"Ülkelere Göre Corona Değerleri",
            value:1
        },
        {
            title:"Kayda Geçmiş Tüm Corona Değerleri",
            value:2
        },
        {
            title:"Kıtalara Göre Corona Değerleri",
            value:3
        }
    ]
    )
    return (
        <nav className="bg-gray-800 border-gray-200 px-2 py-2.5">
                  <div className="container flex flex-wrap justify-between items-center mx-auto"> 
                     <Logo />
                     <div className="w-auto block">
                            <ul className="flex font-semibold flex-row text-s space-x-8 mt-0 "> 
                                  {
                                      menuItem.map((item) => {
                                          return(
                                              <MenuItem key={item.title} active={item.title === _activeTitle} onClick={
                                                  () => {
                                                      setActiveTitle(item.title)
                                                      onMenuChange(item.value)
                                                  }
                                              }  title={item.title} />
                                          )
                                      })
                                  }
                            </ul>
                     </div>
                  </div>
        </nav>
    )

}

Header.propTypes = {
    activeTitle:propTypes.string,
    onMenuChange:propTypes.func
}
Header.defaultProps = {
    activeTitle:'Ülkelere Göre Corona Değerleri',
    onMenuChange:()=>null

}

export default Header