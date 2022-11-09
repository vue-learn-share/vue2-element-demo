<template>
  <div>
    {{ msg }}
    <div>
      <span>{{ jsonData }}</span>
      <hr />
    </div>
    <div>
      <json-viewer :value="jsonData"></json-viewer>
      <hr />

<json-viewer
  :value="jsonData"
  :expand-depth=5
  copyable
  boxed
  sort></json-viewer>
    </div>
    <!-- 官网教材 -->
  </div>
</template>
<script>
import 'vue-json-viewer/style.css'
export default {
  
  name: "VueJsonViewer",

  data() {
    return {
      msg: "test1",
      jsonData: {
        ID: 3,
        Name: "redis",
        BaseInfo: {
          ID: 3,
          IsContainer: 0,
          HomeDir: "/usr/local/redis",
          StartCmd: "systemctl start redis.service",
          StartArgs: "无",
        },
        BackupInfo: {
          ID: 3,
          BackupDir: "无",
          BackupScriptPath: "无",
          BackupDestIp: "无",
        },
        Remark: "10.214.18.21 redis服务",
        Ecs: [
          {
            ID: 2,
            Name: "nexus",
            Ip: "10.214.13.36",
            OsVersion: "CentOS Linux release 7.2.1511",
            Remark: "nexus正式服务器",
            Service: null,
          },
          {
            ID: 19,
            Name: "backup",
            Ip: "10.214.14.12",
            OsVersion: "CentOS release 6.5 ",
            Remark: "备份正式服务器",
            Service: null,
          },
          {
            ID: 23,
            Name: "scm",
            Ip: "10.214.18.21",
            OsVersion: "CentOS Linux release 7.5.1804 ",
            Remark: "scm，k8s node节点正式服务器",
            Service: null,
          },
        ],
        id: 5,
      },
    };
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>
<style scoped>
</style>