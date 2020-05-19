## 动态加载权限
* 后端返回所有权限内的路由规则
  * 根据路由规则生成新的routes


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