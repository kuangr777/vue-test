<template>
    <div>
        <!-- <webHeader></webHeader> -->
        <router-view></router-view>
        <!-- <webFooter></webFooter> -->
    </div>
</template>

<script>
import webHeader from "./header";
import webFooter from "./footer";
export default {
  data() {
    return {};
  },
  components: {
    webHeader,
    webFooter
  }
};
</script>