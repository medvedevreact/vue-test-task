import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/pages/HomePage/HomePage.vue";
import AddNotePage from "@/pages/AddNotePage/AddNotePage.vue";
import NotePage from "@/pages/NotePage/NotePage.vue";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
      props: true,
    },
    {
      path: "/addNote",
      name: "AddNote",
      component: AddNotePage,
      props: true,
    },
    {
      path: "/note/:id",
      name: "Note",
      component: NotePage,
      props: true,
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFoundPage,
    },
  ],
});
