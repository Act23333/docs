import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  title: "My Awesome Project",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/docs/logo.png" }]],
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Home', items: [
          { text: 'home', link: '/' },
          { text: 'markdown-examples', link: '/markdown-examples' }
        ]
      },
      {
        text: '侧边栏1',
        items: [
          { text: 'a', link: '/front-end/react/a' },
          { text: 'a copy', link: '/front-end/react/a copy'}
        ]
      }
      // {text: 'markdown-examples', link: '/markdown-examples'},
      // {text: '自动生成侧边栏1', link: '/front-end/react'},
      // {text: '自动生成侧边栏2', link: '/backend/rabbitmq'},
    ],
       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
    outlineTitle: "Table of Contents of Articles",
    outline: [2, 6],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: 'Examples2',
    //     items: [
    //       { text: 'Markdown Examples2', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples2', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // sidebar: 
    // {
    //   "/front-end/react/": set_sidebar("/front-end/react"),
    //   "/backend/rabbitmq": set_sidebar("/backend/rabbitmq")
    // },
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Act23333' }
    ],
    footer: {
      copyright: "Copyright@ 2025 Alert Lazy"
    }
  },
  
})
