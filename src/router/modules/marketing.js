/** When your routing table is too long, you can split it into small modules**/

import layout from "@/layout";

export default [
  {
    path: "/marketing",
    component: layout,
    name: "marketing",
    meta: {
      title: "营销管理",
      icon: "article"
    },
    children: [
      {
        path: "/banner/index",
        component: () => import("@/views/marketing/banner/index.vue"),
        name: "bannerList",
        meta: {
          title: "banner管理", icon: "article-ranking"
        }
      }
    ]
  },{
    path: "/compony",
    component: layout,
    redirect: "/compony/index",
    alwaysShow: true, // will always show the root menu
    name: "compony",
    meta: {
      title: "公司管理",
      icon: "article"
    },
    children: [
      {
        path: "/index",
        component: () => import("@/views/compony/index.vue"),
        name: "componyList",
        meta: {
          title: "公司列表", icon: "article-ranking"
        }
      }
    ]
  },{
    path: "/shopping",
    component: layout,
    redirect: "/shopping/index",
    alwaysShow: true, // will always show the root menu
    name: "shopping",
    meta: {
      title: "商场管理",
      icon: "article"
    },
    children: [
      {
        path: "/shopping/index",
        component: () => import("@/views/shopping/index.vue"),
        name: "shoppingList",
        meta: {
          title: "商品列表", icon: "article-ranking"
        }
      }
    ]
  }
];