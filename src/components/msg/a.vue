<template>
    <div>
        hello, msg.a
        <el-button @click="gob">跳转b</el-button>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    gob() {
        this.$router.push('/app/appa');
    }
  }
};
</script>
