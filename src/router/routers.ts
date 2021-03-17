import { RouteRecordRaw } from "vue-router";
import LayoutX from "@/views/LayoutX";
import Home from "@/views/home/Index";

//后台管理
import LayoutY from "@/views/LayoutY";
import MenuManager from "@/views/webmaster/menuManager/Index";
import RoleManager from "@/views/webmaster/roleManager/Index";
const routesX: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "LayoutX",
    component: LayoutX,
    meta: { title: "前台管理", icon: "el-icon-s-tools" },
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: { title: "首页", icon: "el-icon-s-tools" }
      }
    ]
  }
];
const routesY: Array<RouteRecordRaw> = [
  {
    path: "/LayoutY",
    name: "LayoutY",
    component: LayoutY,
    meta: { title: "后台管理", icon: "el-icon-s-tools" },
    children: [
      {
        path: "/menuManager",
        name: "MenuManager",
        component: MenuManager,
        meta: { title: "菜单管理", icon: "el-icon-s-tools" }
      },
      {
        path: "/roleManager",
        name: "RoleManager",
        component: RoleManager,
        meta: { title: "角色管理", icon: "el-icon-s-tools" }
      }
    ]
  }
];
export { routesX, routesY };
