
import Home from "Components/home-component/Home";
import About from "Components/about-component/About";
import Projects from "Components/projects-component/Projects";
import Project from "Components/project-component/Project";


export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/project',
    component: Project
  }
  // {
  //   path: '/post/:id',
  //   name: 'post',
  //   props:true,
  //   component: Post
  // }
]