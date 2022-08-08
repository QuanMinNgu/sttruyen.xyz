import Home from "~/homePage/Home";
import Detail from "~/moviesDetail/Detail";
import ReadPage from "~/readPage/ReadPage";


export const PublicRouter = [
    {element:Home,path:'/',exact:true},
    {element:Detail,path:'/:slug',exact:false},
    {element:ReadPage,path:'/:slug/:chapter',exact:false}

]