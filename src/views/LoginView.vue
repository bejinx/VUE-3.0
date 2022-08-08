<template>
  <div class="about">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li :class="{current:item.current}" v-for="item in menuTab" :key="item.id" @click="toggleMneu(item)">{{ item.txt }}</li>
       
      </ul>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
  
        <el-form-item  prop="email" class="item-from">
          <label for="">邮箱</label>
          <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item  prop="Pass" class="item-from">
          <label for="">密码</label>
          <!-- <el-input type="password" v-model="ruleForm.Pass" autocomplete="off"></el-input> -->
          <el-input placeholder="请输入密码" v-model="ruleForm.Pass" show-password maxlength="10" minlengh="6"></el-input>

        </el-form-item>

        <el-form-item  prop="code" class="item-from">
          
        </el-form-item>
        <label for="">验证码</label>
          <el-row :gutter="24">
          <el-col :span="15"><el-input v-model.number="ruleForm.code" maxlength="6" minlengh="6"></el-input></el-col>
          <el-col :span="9"><el-button type="success" class="block" > 获取验证码</el-button></el-col>
        </el-row>
          
        <el-form-item>
          <el-button type="success" @click="submitForm('ruleForm')" class="sub-button">提交</el-button>
        </el-form-item>
    </el-form>
    </div>
  </div>
</template>
<script type="module">
export default{
  name:'login',
  data(){
      var code = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var email = (rule, value, callback) => {
        let  str = "^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(com|cn|net)$";
        if (value === '') {
          callback(new Error('请输入邮箱'));
        } else if(str.value){
          callback(new Error('邮箱格式有误'));
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var Pass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return{
      ruleForm: {
          email: '',
          Pass: '',
          code: ''
        },
        rules: {
          email: [
            { validator: email, trigger: 'blur' }
          ],
          Pass: [
            { validator: Pass, trigger: 'blur' }
          ],
          code: [
            { validator: code, trigger: 'blur' }
          ]
        },
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
  },
  submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    
}
</script>
<style lang="scss" scoped>
// lang 协议定类  scoped局部样式
.about {
  height: 100vh;
  background-color: #344a5f;
  display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
.demo-ruleForm {
  margin-top: 20px;
  label {
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    color: #fff;
  }
}
.item-from{
  margin-bottom: 13px;
  color: #fff;
}
.sub-button{
  display: block;
  width: 100%;
  margin-top: 19px;
}

</style>