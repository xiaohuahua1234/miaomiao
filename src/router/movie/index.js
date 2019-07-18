export default{
    path:'/movie',
    //component: () => import('@/views/Movie/')//按需加载，采用的是箭头函数，@符号表示的是src目录下
    component: () => import ('@/views/Movie'),
    children:[
        {
            path:'city',
            component :()=>import('@/components/City')
        },
        {
            path:'nowPlaying',
            component :()=>import('@/components/NowPlaying')
        },
        {
            path:'comingSoon',
            component :()=>import('@/components/ComingSoon')
        },
        {
            path:'search',
            component :()=>import('@/components/Search')
        },
        {
            path:'/movie',
            component :()=>import('@/components/nowPlaying')//给首页movie一个重定向，使得打开网页就可以看到内容
        }
    ]
}