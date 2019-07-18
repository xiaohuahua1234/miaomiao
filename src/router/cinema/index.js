export default{
    path:'/cinema',
    //component: () => import('@/views/Movie/')//按需加载，采用的是箭头函数，@符号表示的是src目录下
    component: () => import ('@/views/Cinema')
}