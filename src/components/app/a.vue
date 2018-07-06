<template>
  <div>
    hello, a
    <el-button @click="gob">跳转c</el-button>
    <el-button @click="sendapi">请求接口</el-button>
  </div>
</template>
<script>
import { getFinanceWay } from "@/api/app/app";
import axios from 'axios'
import qs from 'qs'
export default {
  data() {
    return {};
  },
  methods: {
    gob() {
      this.$router.push("/msg/msga");
    },
    sendapi() {
      let params = {
        userid: 9,
        appid: 1
      };
      getFinanceWay(params);
    }
  }
};
</script>
