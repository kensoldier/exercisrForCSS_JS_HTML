<template>
  <div id="app">
    <h1>新增景點</h1>
    <el-button type="success" @click="addPoint">ADD</el-button>
    <table>
      <thead>
        <tr>
          <th>景點ID</th>
          <th>名稱</th>
          <th>鄉鎮市區</th>
          <th>狀態</th>
          <th>地址</th>
          <th>刪除/修改</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item , index) in userList" :key="index">
          <td>{{item.景點ID}}</td>
          <td>{{item.名稱}}</td>
          <td>{{item.鄉鎮市區}}</td>
          <td>{{item.狀態}}</td>
          <td>{{item.地址}}</td>
          <td>
            <a href="javascript:" @click="delPoint(item.景點ID)">刪除</a>
          </td>
        </tr>
      </tbody>
    </table>
    <el-dialog title="添加地點" :visible.sync="addDialogVisible" width="40%">
      <el-form :model="form">
        <el-form-item label="景點ID">
          <el-input type="text" v-model="form.景點ID" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="名稱">
          <el-input type="text" v-model="form.名稱" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="鄉鎮市區">
          <el-input v-model="form.鄉鎮市區"></el-input>
        </el-form-item>
        <el-form-item label="狀態">
          <el-input v-model="form.狀態"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.地址"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submit">確定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
//promise封裝的AJAX請求
import axios from "axios";
import "element-ui/lib/theme-chalk/index.css";
import { Message, MessageBox } from "element-ui";
export default {
  name: "app",
  data() {
    return {
      userList: [],
      addDialogVisible: false,
      form: {
        景點ID: "",
        名稱: "",
        鄉鎮市區: "",
        狀態: "",
        地址: ""
      }
    };
  },
  methods: {
    delPoint(id) {
      MessageBox.confirm("是否要刪除", "刪除提醒")
        .then(() => {
          this.userList = this.userList.filter(item => item.景點ID !== id);
          Message.info("成功刪除" + id);
        })
        .catch(() => {
          Message.info("取消刪除");
        });
    },
    addPoint() {
      this.addDialogVisible = true;
    },
    submit() {
      this.userList = [
        ...this.userList,
        {
          景點ID: this.form.景點ID,
          名稱: this.form.名稱,
          鄉鎮市區: this.form.鄉鎮市區,
          狀態: this.form.狀態,
          地址: this.form.地址
        }
      ];
      // console.log(this.userList);
      this.form = { 景點ID: "", 名稱: "", 鄉鎮市區: "", 狀態: "", 地址: "" };
      console.log(this.form);
      this.addDialogVisible = false;
      Message.info('添加成功')
    }
  },

  created() {
    axios
      .get("/api/swagger/OpenData/6e5ed154-4ff3-4678-9683-7f0cf84cc876")
      .then(res => {
        // console.log(res.data.ROOT.RECORD.splice(0,10));
        this.userList.push(...res.data.ROOT.RECORD.splice(0, 10));
      })
      .catch(e => {
        Message.info("error加載失敗" + e);
      });
  }
};
</script>



<style lang="css">
table {
  border: 1px solid;
  text-align: center;
  border-collapse: collapse;
}
td,
th {
  border: 1px solid;
}
</style>
