import Vue from 'vue'
import Router from 'vue-router'
const Layout = r => require.ensure([], () => r(require('@/views/layout/index')), 'layout')
const Contacts = r => require.ensure([], () => r(require('@/views/contacts/index')), 'layout')
const Film = r => require.ensure([], () => r(require('@/views/film/index')), 'layout')
// read
const Read = r => require.ensure([], () => r(require('@/views/read/index')), 'layout')
const BookItem = r => require.ensure([], () => r(require('@/views/read/item')), 'layout')

const My = r => require.ensure([], () => r(require('@/views/my/index')), 'layout')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Contacts',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'Contacts',
          name: Contacts,
          component: Contacts
        },
        {
          path: 'Film',
          name: Film,
          component: Film
        },
        {
          path: 'Read',
          name: Read,
          component: Read,
          children: [
            {
              path: '/BookItem',
              name: 'BookItem',
              components: BookItem
            }
          ]
        },
        {
          path: 'My',
          name: My,
          component: My
        }
      ]
    }
  ]
})
