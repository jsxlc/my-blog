const nav = [
  // 1.0 仅显示标题到导航栏
  {
    text: '简历',
    link: '/PAGE/resume/'
  },
  // 2.0 显示标题到导航栏，且显示下拉标题
  {
    text: '关于作者',
    items: [{
      text: 'GitHub',
      link: 'https://github.com/jsxlc',
    },
      //   {
      //       text: '掘金',
      //       link: 'https://juejin.cn/user/272334614432775',
      //   }
    ]
  }
]

module.exports = nav;