<template>
  <div class="about">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li :class="{current:item.current}" v-for="item in menuTab" :key="item.id" @click="toggleMneu(item)">{{ item.txt }}</li>
       
      </ul>
    </div>
  </div>
</template>
<script type="module">
export default{
  name:'login',
  data(){
    return{
      menuTab:[
        {txt:'登录',current:false},
        {txt:'注册',current:false}
      ]
    }
  },
  mounted(){
    
  },
  methods:{
    toggleMneu(data){
      this.menuTab.forEach(element => {
        element.current=false
      });
      data.current=true
    }
  }
}
</script>
<style lang="scss" scoped>
// lang 协议定类  scoped局部样式
.about {
  height: 100vh;
  background-color: #344a5f;
}
.login-warp{
  width: 330xp;
  margin: auto;
}
.menu-tab{
  text-align: center;
  li{
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  // 选中状态
  .current {
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
}

</style>