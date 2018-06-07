
import Home from "Components/home-component/Home";
import About from "Components/about-component/About";
import Projects from "Components/projects-component/Projects";
import Project from "Components/project-component/Project";
import Mountain from "Components/mountain-component/Mountain";


export default [
  {
    path: '/',
    name: 'home',
    components: {
      header: Mountain,
      content: Home
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
      header: Mountain,
      content : About
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
      header: Mountain,
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
      header: Mountain,
      content : Project
    },
    props: {
      header: true,
      content: false
    }
  },




  // {
  //   path: '/:title',
  //   name: 'home',
  //   component: Home,
  //
  // },
  // {
  //   path: '/home/:title',
  //   redirect: '/'
  // },
  // {
  //   path: '/about/:title',
  //   name: 'about',
  //   component: About,
  //
  // },
  // {
  //   path: '/projects/:title',
  //   name: 'projects',
  //   component: Projects,
  //
  // },
  // {
  //   path: '/project/:id',
  //   name:'user',
  //   component: Project,
  //
  // }
]