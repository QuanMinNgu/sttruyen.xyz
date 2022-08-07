import Home from "~/homePage/Home";
import Detail from "~/moviesDetail/Detail";


export const PublicRouter = [
    {element:Home,path:'/',exact:true},
    {element:Detail,path:'/:slug',exact:false}

]