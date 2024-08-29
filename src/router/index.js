import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 框架页
    {
      path: '/',
      redirect: '/headJump/headJumpHomePage',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      // 二级路由
      children: [
        // 首页
        {
          path: '/headJump/headJumpHomePage',
          component: () => import('@/views/headJump/headJumpHomePage.vue')
        },
        // 归档
        {
          path: '/headJump/headJumpPigeonhole',
          component: () => import('@/views/headJump/headJumpPigeonhole.vue')
        },
        // 标签
        {
          path: '/headJump/headJumpLabel',
          component: () => import('@/views/headJump/headJumpLabel.vue')
        },
        // 分类
        {
          path: '/headJump/headJumpClassify',
          component: () => import('@/views/headJump/headJumpClassify.vue')
        },
        // 音乐
        {
          path: '/headJump/headJumpMusic',
          component: () => import('@/views/headJump/headJumpMusic.vue')
        },
        // 电影
        {
          path: '/headJump/headJumpFilm',
          component: () => import('@/views/headJump/headJumpFilm.vue')
        },
        // 留言板
        {
          path: '/headJump/headJumpMessageBoard',
          component: () => import('@/views/headJump/headJumpMessageBoard.vue')
        },
        // 友链
        {
          path: '/headJump/headJumpFriendLink',
          component: () => import('@/views/headJump/headJumpFriendLink.vue')
        },
        // 关于
        {
          path: '/headJump/headJumpInRegardTo',
          component: () => import('@/views/headJump/headJumpInRegardTo.vue')
        }
      ]
    }
  ]
})
// 导出路由
export default router
