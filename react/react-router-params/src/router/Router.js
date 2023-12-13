import { Navigate, useRoutes } from "react-router-dom"
import HomeView from '../view/HomeView';
import NewView from '../view/NewView';
import SportsNewsView from '../view/SportsNewsView'
import QueryParamsView from '../view/QueryParamsView'
import ParameterView from '../view/ParameterView';
import { userRoutes } from "./UserRoutes";

const Router =()=> {

  const routes=useRoutes([
    {
        path:"/Anasayfa",
        element:<HomeView />
    },
    userRoutes,
    {
        path:"/parameter/za",
        element: <ParameterView/>
    },
    {
        path:"/queryparameter",
        element:<QueryParamsView/>
    },
    {
        path:"*",
        element:<div>Böyle bir sayfa yok knk</div>
    },
    {
        path:"/haberler",
        element: <NewView/>,
        children:[
            {
                index:true,
                element:<Navigate to="sporhaberleri" />
            },
            {
                path:"sporhaberleri",
                element:<SportsNewsView/>,
                children:[
                    {
                        path:":id",
                        element:<SportsNewsView/>
                    }
                ]
            }
        ]
    },

  ])
  return routes

}

export default Router