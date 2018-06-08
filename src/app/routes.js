
import Home from "Components/home-component/Home";
import About from "Components/about-component/About";
import Projects from "Components/projects-component/Projects";
import Project from "Components/project-component/Project";
import HeaderComponent from "Components/header-component/HeaderComponent";


export default [
  {
    path: '/',
    name: 'home',
    components: {
      header: HeaderComponent,
      content: Home,
    },
    props: {
      header: true,
      content: false
    }
  },
  {
    path: "/about",
    name: 'about',
    components: {
      header: HeaderComponent,
      content : About,

    },
    props: {
      header: true,
      content: false
    }
  },
  {
    path: "/projects",
    name: 'projects',
    components: {
      header: HeaderComponent,
      content : Projects
    },
    props: {
      header: true,
      content: false
    }
  },
  {
    path: "/project/:id",
    name: 'user',
    components: {
      header: HeaderComponent,
      content : Project
    },
    props: {
      header: true,
      content: false
    }
  },

]