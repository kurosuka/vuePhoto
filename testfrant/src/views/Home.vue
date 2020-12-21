<!--
 * @Author: your name
 * @Date: 2020-12-18 16:16:27
 * @LastEditTime: 2020-12-21 17:01:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testfront\src\views\Home.vue
-->
<template>
  <div class="home">
    <Waterfall>
      <WaterfallItem v-for="(item, index) in this.list" :key="index">
        <img alt="Vue logo" :src="item.img">
      </WaterfallItem>
    </Waterfall>
  </div>
</template>

<script>
// @ is an alias to /src
import { Waterfall, WaterfallItem } from 'vue2-waterfall';

export default {
  name: 'Home',
  data() {
    return {
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
      ]
    };
  },
  components: {
    Waterfall,
    WaterfallItem,
  },
};
</script>
<style scoped>
img {
  padding: 10px;
  border: 1px solid #eee;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 300px;
  height: auto;
}
</style>
