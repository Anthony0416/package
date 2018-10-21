<template>
  <div id="apphead" class="drag">
    <img src="../assets/logo/yanhai.png"/>
    <div class="right" :class="os === 'mac'? 'none': ''">
      <span class="min" @click="min">-</span>
      <span class="max" @click="max">+</span>
      <span class="close" @click="close">x</span>
    </div>
  </div>
</template>

<script>
  import { ipcRenderer } from 'electron'

  export default {
    name: 'apphead',
    data () {
      return {
        os: ''
      }
    },
    mounted () {
      if (navigator.userAgent.indexOf('Mac OS X')) {
        this.os = 'mac'
      }
    },
    methods: {
      min () {
        ipcRenderer.send('min')
      },
      max () {
        ipcRenderer.send('max')
      },
      close () {
        ipcRenderer.send('close')
      }
    }
  }
</script>

<style scoped lang="scss">
  #apphead {
    height: 4.395vw;
    padding: 1vw;
    width: 100vw;
    box-sizing: border-box;

    img {
      height: 3.395vw;
      margin-top: -.5vw;
    }

    p {
      font-size: 1vw;
    }
    .right {
      float: right;

      span {
        display: inline-block;
        width: 1vw;
        height: 1vw;
        background-color: red;
        font-size: 1vw;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
</style>