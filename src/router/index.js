import {createRouter, createWebHistory} from "vue-router";
import mainComponent from "@/components/MainComponent";
import signInComponent from "@/components/sign/SignInComponent";
import videoComponent from "@/components/VideoComponent";
import signUpComponent from "@/components/sign/SignUpComponent";
import boardComponent from "@/components/board/BoardComponent";
import articleView from "@/components/board/ArticleView";
import articleList from "@/components/board/ArticleList";

const routes = [
    {path: "/login", component: signInComponent,},
    {path: "/", component: mainComponent,},
    {path: "/meeting", component: videoComponent,},
    {path: "/signup", component: signUpComponent},
    {path: "/board", component: boardComponent},
    {path: "/board/:id/list", component: articleList},
    {path: "/article/:id", component: articleView}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;