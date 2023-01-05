import {createRouter, createWebHistory} from "vue-router";
import mainComponent from "@/components/MainComponent";
import signInComponent from "@/components/sign/SignInComponent";
import videoComponent from "@/components/VideoComponent";
import signUpComponent from "@/components/sign/SignUpComponent";
import boardComponent from "@/components/board/BoardComponent";
import articleView from "@/components/article/ArticleView.vue";
import articleList from "@/components/article/ArticleList.vue";
import articlePost from "@/components/article/ArticlePost.vue";

const routes = [
    {path: "/signin", component: signInComponent,},
    {path: "/", component: mainComponent,},
    {path: "/playground", component: videoComponent,},
    {path: "/signup", component: signUpComponent},
    {path: "/board", component: boardComponent},
    {path: "/board/:id/list", component: articleList},
    {path: "/article/:id", component: articleView},
    {path: "/article/post", component: articlePost}

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;