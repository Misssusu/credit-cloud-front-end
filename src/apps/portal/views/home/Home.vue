<template>
  <div class="index-wrapper">
    <div class="account_searchs">
      <div class="sousuo">
        <div class="sousuo_img">
          <img src="../../assets/images/banner_wa.png" alt="" />
        </div>
        <div class="sousuo_ipnut">
          <el-input
            placeholder="请输入公司名称，例如：陕西西部资信"
            v-model.trim="send.data"
            @keyup.enter="querySearch"
            @input="inputChange"
            @blur="showListfalse"
            @focus="showList = true"
            @keydown.down="keyEvent"
            @keydown.up="keyEvent"
          >
            <el-button @click="querySearch">搜索</el-button>
          </el-input>
          <!-- <div class="hid_list" v-show="showList">
            <p
              v-for="(item, key) in List"
              :key="key"
              @click="querySearchs(item.subjectName)"
              style="padding-left: 16px; font-size: 15px"
              :class="{ active: activeIndex == key }"
            >
              <label v-for="(item1, key1) in item.subjectName.split(send.data)" :key="key1">
                <label
                  >{{ item1
                  }}<label
                    style="color: rgba(28, 109, 244, 1); font-size: 15px; font-weight: bold"
                    v-if="key1 != item.subjectName.split(send.data).length - 1"
                  >
                    {{ send.data }}
                  </label>
                </label>
              </label>
            </p>
          </div> -->
          <!-- <p class="search_history" v-if="searchList.length > 0">
            <span class="title"> 搜索历史: </span>
            <span
              class="search_history_list"
              v-for="(item, index) in searchList"
              :key="index"
              @click="querySearchs(item)"
            >
              {{ item }}
            </span>
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getCompanyList } from '@portal/endpoint/api'
import { companyStore } from '@portal/stores'

const router = useRouter()
const compStore = companyStore()
const send = reactive({
  data: '',
  type: 4, //  0 通过企业名称查,  1 通过统一社会信用代码查,  4 不限制
  showList: true,
})

const querySearch = () => {
  getCompanyList(send).then(res => {
    console.log('result-------', res.data)
    const data = JSON.parse(result)
    if (data.success) {
      compStore.companyList = data.data
      compStore.companyList = data.data
      router.push('/portal/companyList')
    }
  })
}
</script>

<style lang="scss" scoped>
.account_searchs {
  width: 100%;
  height: 700px;
  background: url(../../assets/images/banner.jpg) center center no-repeat;
  box-sizing: border-box;
  padding-top: 260px;

  .sousuo {
    width: 940px;
    margin: auto;
  }

  .search_history {
    .title {
      display: inline-block;
      width: 80px;
      height: 30px;
      background: rgba(28, 109, 244, 0.4);
      border-radius: 3px 3px 3px 3px;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      font-weight: bold;
      color: #ffffff;
    }

    .search_history_list {
      margin-left: 18px;
      display: inline-block;
      cursor: pointer;
      font-size: 14px;
      color: #ffffff;
      max-width: 160px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: sub;

      &:hover {
        color: #3377ff;
      }
    }
  }

  .sousuo_img {
    width: 940px;
    margin: auto;
    text-align: center;
    position: relative;
    top: -60px;
    opacity: 0;

    animation: myfirst 1s forwards;
    -moz-animation: myfirst 1s forwards;
    /* Firefox */
    -webkit-animation: myfirst 1s forwards;
    /* Safari 和 Chrome */
    -o-animation: myfirst 1s forwards;

    img {
      margin-bottom: 30px;
    }
  }

  @keyframes myfirst {
    from {
      top: -60px;
      opacity: 0;
    }

    to {
      top: 0;
      opacity: 1;
    }
  }

  .sousuo_ipnut {
    position: relative;
    top: 60px;
    opacity: 0;
    z-index: 9;
    animation: myend 1s forwards;
    -moz-animation: myend 1s forwards;
    /* Firefox */
    -webkit-animation: myend 1s forwards;
    /* Safari 和 Chrome */
    -o-animation: myend 1s forwards;
    :deep(.el-input__inner) {
      height: 58px !important;
    }
  }

  @keyframes myend {
    from {
      top: 60px;
      opacity: 0;
    }

    to {
      top: 0;
      opacity: 1;
    }
  }

  //   /deep/ .el-input-group {
  //     width: 930px !important;
  //     height: 58px !important;
  //     border: none;
  //     font-size: 20px;
  //     margin-bottom: 20px;

  //     .el-input__inner {
  //       height: 58px !important;
  //       outline: none;
  //       border: none;
  //     }

  //     .el-input-group__append {
  //       border: none;
  //     }

  //     .el-button {
  //       width: 140px;
  //       height: 58px !important;
  //       font-size: 22px;
  //       border-radius: 0 2px 2px 0;
  //       color: #ffffff;
  //       background: #1c6df4;
  //     }
  //   }
}
</style>
