<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar">
        <img src="../assets/logo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style class="less" scoped>
  .login_container{
    background-color: #2b4b6b;
    height: 100%;
  }
  .login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .avatar{
    height: 100px;
    width: 100px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    img{
      height: 100px;
      width: 100px;
      border-radius: 50%;
    background-color: gray;

    }
  }
</style>
