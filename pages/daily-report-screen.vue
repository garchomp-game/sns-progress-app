<template lang="pug">
  DairyReportForm(:text='登録')
</template>
<script>
import DairyReportForm from "@/components/daily-report-form";
export default {
  name: "DailyReportScreen",
  components: {
    DairyReportForm
  },
  data() {
    return {
      clubName: "",
      currentTime: 0,
      comment: ""
    };
  }
};
</script>
<style lang="sass">
    
</style>