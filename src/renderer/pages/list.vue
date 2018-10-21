<template>
  <div id="list">
    <div class="head">
      <Apphead></Apphead>
      <p class="slogan">沿海集团·汇智未来</p>
      <div class="search">
        <i></i>
        <input type="text" v-model="search" placeholder="请输入影像号，例如072145441">
        <span class="submit" @click="submit">查找</span>
      </div>
    </div>
    <div class="noDrag">
      <div class="patientList">
        <div class="listHead">
          <i>icon</i>
          <p>工作列表</p>
          <div class="right">
            <p>AI状态筛选：</p>
            <!--<div class="select">-->
              <el-select v-model="chooseType" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            <!--</div>-->
            <p>检查时间：</p>
            <el-date-picker
              v-model="chooseTime"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Apphead from '../components/apphead.vue'

  export default {
    name: 'list',
    data () {
      return {
        search: '',
        chooseType: '',
        chooseTime: '',
        headList: ['影像号', '姓名', '出生日期', '类型', '检查部位', '检查时间', 'AI分析状态'],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    components: { Apphead },
    mounted () {
    },
    methods: {
      submit () {
        console.log(1)
      }
    }
  }
</script>

<style lang="scss">
#list {
  .el-select, .el-input, .el-input__inner {
    width: 8vw;
    height: 2vw;
  }
  .el-date-editor {
    width: 14vw;
  }
}
</style>

<style scoped lang="scss">
#list {
  color: #fff;

  .head {
    width: 100vw;
    height: 20vw;
    background-image: url(../assets/bg/list_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .title {
    height: 3vw;
    padding: 10px;
    img {
      height: 3vw;
    }
  }

  .slogan {
    font-size: 1vw;
    text-align: center;
    letter-spacing: 2vw;
    margin-top: 4.5vw;
  }

  .search {
    margin: 1.5vw auto;
    width: 40vw;
    height: 3vw;
    background: #fff;
    border-radius: 3vw;
    border: .3vw solid #4a4d55;

    i {
      width: 2vw;
      height: 2vw;
      display: inline-block;
      vertical-align: top;
      background: url(../assets/icon/search.png);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      margin: .5vw .6vw.5vw 1.2vw;
    }
    input {
      display: inline-block;
      width: 28vw;
      height: 2vw;
      font-size: .8vw;
      margin-top: .4vw;
    }
    span {
      display: inline-block;
      float: right;
      margin: .3vw;
      border-radius: 2.4vw;
      width: 5.5vw;
      height: 2.4vw;
      background-color: #09ba90;
      font-size: 1vw;
      text-align: center;
      line-height: 2.4vw;
      letter-spacing: .1vw;
      cursor: pointer;
    }
  }

  .patientList {
    width: 98vw;
    height: calc(101vh - 21vw);
    margin: -1vh auto 0;

    .listHead {
      width: 100%;
      height: 5vw;
      line-height: 5vw;
      background-color: #2c303f;
      i {
        display: inline-block;
        font-size: 1.3vw;
        vertical-align: top;
      }
      >p {
        display: inline-block;
        vertical-align: top;
        font-size: 1.3vw;
      }
      .right {
        float: right;
        height: 2vw;
        line-height: 2vw;
        margin-top: 1.5vw;
        padding-right: 2vw;
        >p {
          display: inline-block;
          font-size: .8vw;
          margin-left: 2vw;
          vertical-align: top;
        }
      }
    }

  }
}
</style>