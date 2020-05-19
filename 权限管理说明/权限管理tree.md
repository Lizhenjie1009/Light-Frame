# 当前项目为前端动态控制路由权限

**详情查看当前项目代码**



------





# 项目如需后端返回路由规则，查看下面权限说明

## 动态加载权限

* 后端返回所有权限内的路由规则
  * 根据路由规则生成新的routes

```
addRouters({ commit }, menus) {
    return new Promise((resolve, reject) => {
      let asyncRoute = []
      let navList = []
      menus.forEach((item1, index1) => {
        // 一级
        navList.push({
          alwaysShow: !item1.children,
          component: Layout,
          meta: {
            title: item1.title,
            icon: item1.menu_icon
          },
          redirect: item1.children ? `/to${item1.children[0].name}` : `/to${item1.name}`,
          path: item1.path,
          name: item1.name,
          is_out_sys:item1.is_out_sys,
          children: item1.children ? [] : [{
            meta: {
              title: item1.title,
              icon: item1.menu_icon
            },
            path: item1.path ? `/to${item1.name}` : '',
            name: `to${item1.name}`,
            component: () => import(`@/views${item1.path}/to${item1.name}`)
          }]
        })
        // 二级
        if (item1.children) {
          item1.children.forEach((item2, index2) => {
            navList[index1].children.push({
              alwaysShow: !item2.children,
              meta: {
                title: item2.title,
                icon: item2.menu_icon
              },
              redirect: item2.children ? `${item1.path}${item2.path}/to${item2.children[0].name}` : `${item1.path}/to${item2.name}`,
              path: item2.path ? `${item1.path}${item2.path}` : '',
              name: `${item1.name}_${item2.name}`,
              is_out_sys:item2.is_out_sys,
              component: Layout,
              children: item2.children ? [] : [{
                meta: {
                  title: item2.title,
                  icon: item2.menu_icon
                },
                path: `${item1.path}/to${item2.name}`,
                name: `to${item1.name}_${item2.name}`,
                component: () => import(`@/views${item1.path}/to${item2.name}`)
              }]
            })
            // 三级
            if (item2.children) {
              item2.children.forEach(item3 => {
                navList[index1].children[index2].children.push({
                  meta: {
                    title: item3.title,
                    icon: item3.menuIcon
                  },
                  component: () => import(`@/views${item1.path}${item2.path}/to${item3.name}`),
                  path: item3.path ? `${item1.path}${item2.path}/to${item3.name}` : '',
                  name: `${item1.name}_${item2.name}_${item3.name}`,
                  is_out_sys:item3.is_out_sys
                })
              })
            }
          })
        }
      })

      navList = navList.filter(item1 => {
        if (item1.path && item1.children) {
          if (item1.children.length === 1) {
            asyncRoute.push(item1)
            return item1.path
          }
          item1.children = item1.children.filter(item2 => {
            if (item2.path && item2.children) {
              asyncRoute.push(item2)
              item2.children = item2.children.filter(item3 => {
                return item3.path
              })
            }
            return item2.path
          })
          return item1.path
        }
      })
      asyncRoute.push({path: '/', redirect: '/toHome'})

      console.log('asyncRoute', asyncRoute)
      commit('SET_MENUS', {
        asyncRoute,
        navList
      })
      resolve(asyncRoute)
    })
```




## 权限列表树
* 后端返回所有的一级权限列表
  * 筛选出所有的`父id`
  * 根据所有一级权限的`子pid`去匹配`父id`


```
getRoles()
  .then(res => {
    <!-- 所有的权限列表 -->
    this.originalList = res.data.list;
    <!-- 所有的父id -->
    let menuList = res.data.list.filter(item => !item.pid);
    <!-- 根据父id和子pid去匹配所有的子组件 -->
    menuList.forEach(m => {
      m.children = [];
      res.data.list.forEach(c => {
        if (m.Id === c.pid) {
          c.children = [];
          res.data.list.forEach(cc => {
            if (c.Id === cc.pid) {
              c.children.push(cc);
            }
          });
          m.children.push(c);
        }
      });
      <!-- 删除所有空的子组件 -->
      if (!m.children.length) {
        delete m.children;
      }
      <!-- 根据所有一级权限生成新的权限树 -->
      this.menuList.push(m);
    });
  });

```