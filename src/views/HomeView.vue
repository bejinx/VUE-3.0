<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="dnd-file-uploader">
      <div class="drop-area">
        <ion-icon name='cloud-upload'> </ion-icon>
        <p class="tip"></p>
      </div>
      <div class="task-list">
        <div class="task">
          <a target="_blank" class="task-name">File name</a>
          <span class="task-progress"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home{
  width: 100vw;
  height: 100vh;
  display: grid;
   place-items: center;
  font-family: "Segoe UI" ,Tahome,Verdana, Geneva, Tahoma, sans-serif;
  
}
.dnd-file-uploader{
  width: 90px;
}
.drop-area{
  height: 50vh;
  width: 50vw;
  display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #8c8c8c;
  border: 6px dashed #7c7c;
  border-radius: 16px;
}
</style>