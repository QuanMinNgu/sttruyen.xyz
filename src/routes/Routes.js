import Login from "~/admin/Login";
import Home from "~/homePage/Home";
import Detail from "~/moviesDetail/Detail";
import ReadPage from "~/readPage/ReadPage";
import SearchingPage from "~/SearchingPage/SearchingPage";


export const PublicRouter = [
    {element:Home,path:'/',exact:true},
    {element:SearchingPage,path:'/tim-truyen',exact:true},
    {element:Login,path:'/admin/login',exact:true},
    {element:Detail,path:'/:slug',exact:false},
    {element:ReadPage,path:'/:slug/:chapter',exact:false}
]