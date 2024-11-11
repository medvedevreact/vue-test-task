import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/pages/HomePage/HomePage.vue";
import AddNotePage from "@/pages/AddNotePage/AddNotePage.vue";
import NotePage from "@/pages/NotePage/NotePage.vue";

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
    },
    {
      path: "/note/:id",
      name: "Note",
      component: NotePage,
      props: true,
    },
  ],
});
