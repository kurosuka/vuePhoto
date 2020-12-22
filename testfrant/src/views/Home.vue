<!--
 * @Author: your name
 * @Date: 2020-12-18 16:16:27
 * @LastEditTime: 2020-12-22 16:48:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testfront\src\views\Home.vue
-->
<template>
  <div class="home">
    <el-form :model="form" :inline="true" label-width="80px">
      <el-form-item label="上传时间">
        <el-date-picker v-model="form.date" placeholder="请选择时间"></el-date-picker>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" icon="el-icon-cloudy">图片上传</el-button>
      </el-form-item>
    </el-form>
    <Waterfall>
      <WaterfallItem v-for="(item, index) in this.list" :key="index">
        <img alt="Vue logo" :src="item.img">
      </WaterfallItem>
    </Waterfall>
    <el-dialog title="图片上传" :visible="true">
      <el-form :model="upLoadForm" label-width="80px">
        <el-form-item label="标题名称">
          <el-input v-model="upLoadForm.title" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="文件上传">
          <el-upload action=""
            list-type="picture-card"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import { Waterfall, WaterfallItem } from 'vue2-waterfall';

export default {
  name: 'Home',
  data() {
    return {
      form: {
        date: new Date(),
      },
      upLoadForm: {
        title: '',
      },
      list: [
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608551200252&di=c7573e52746cc7b7a20c64386fbe3d1e&imgtype=0&src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fbd315c6034a85edf81702f204ba7a225dc54752a.jpeg%3Ftoken%3D40ea367f6b2ef995eaa6f5faf705a7d4',
          title: '1',
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608551200252&di=c7573e52746cc7b7a20c64386fbe3d1e&imgtype=0&src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fbd315c6034a85edf81702f204ba7a225dc54752a.jpeg%3Ftoken%3D40ea367f6b2ef995eaa6f5faf705a7d4',
          title: '12',
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608551200252&di=c7573e52746cc7b7a20c64386fbe3d1e&imgtype=0&src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fbd315c6034a85edf81702f204ba7a225dc54752a.jpeg%3Ftoken%3D40ea367f6b2ef995eaa6f5faf705a7d4',
          title: '3',
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608551200252&di=c7573e52746cc7b7a20c64386fbe3d1e&imgtype=0&src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fbd315c6034a85edf81702f204ba7a225dc54752a.jpeg%3Ftoken%3D40ea367f6b2ef995eaa6f5faf705a7d4',
          title: '1',
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608551200252&di=c7573e52746cc7b7a20c64386fbe3d1e&imgtype=0&src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fbd315c6034a85edf81702f204ba7a225dc54752a.jpeg%3Ftoken%3D40ea367f6b2ef995eaa6f5faf705a7d4',
          title: '1',
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608551200252&di=c7573e52746cc7b7a20c64386fbe3d1e&imgtype=0&src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fbd315c6034a85edf81702f204ba7a225dc54752a.jpeg%3Ftoken%3D40ea367f6b2ef995eaa6f5faf705a7d4',
          title: '1',
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608551200252&di=c7573e52746cc7b7a20c64386fbe3d1e&imgtype=0&src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fbd315c6034a85edf81702f204ba7a225dc54752a.jpeg%3Ftoken%3D40ea367f6b2ef995eaa6f5faf705a7d4',
          title: '1',
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608551200252&di=c7573e52746cc7b7a20c64386fbe3d1e&imgtype=0&src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fbd315c6034a85edf81702f204ba7a225dc54752a.jpeg%3Ftoken%3D40ea367f6b2ef995eaa6f5faf705a7d4',
          title: '1',
        },
      ],
    };
  },
  components: {
    Waterfall,
    WaterfallItem,
  },
};
</script>

<style scoped>
.el-form {
  margin-top: 15px;
  text-align: left;
}
img {
  padding: 10px;
  border: 1px solid #eee;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 300px;
  height: auto;
}
</style>
