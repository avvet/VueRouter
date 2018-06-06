
import Home from "Components/home-component/Home";
import About from "Components/about-component/About";
import Projects from "Components/projects-component/Projects";
import Project from "Components/project-component/Project";


export default [
  {
    path: '/:title',
    name: 'home',
    component: Home
  },
  {
    path: '/about/:title',
    name: 'about',
    component: About
  },
  {
    path: '/projects/:title',
    name: 'projects',
    component: Projects
  },
  {
    path: '/project/:id',
    name:'user',
    component: Project
  }
  // {
  //   path: '/post/:id',
  //   name: 'post',
  //   props:true,
  //   component: Post
  // }
]