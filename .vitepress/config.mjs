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
      { icon: 'github', link: 'https://github.com/Act23333' },
      {
        icon: {
          svg: '<svg t="1740646959515" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6837" width="200" height="200"><path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z" fill="#C71D23" p-id="6838"></path></svg>'
        },
        link: 'https://gitee.com/no-act'
      }
    ],
    footer: {
      copyright: "Copyright@ 2025 Alert Lazy"
    }
  },
  
})
