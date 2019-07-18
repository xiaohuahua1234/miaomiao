<template>
    <div id="main">
          <Header title="我的喵喵"/>
            <div id="content">
                <Login/>
            </div>
        <TabBar/>
    </div>
</template>

<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Login from '@/components/Login';

export default {
    name:'Mine',
    //使用组件
components:{
    Header,
    TabBar,
    Login
}
}
</script>

<style>

</style>
