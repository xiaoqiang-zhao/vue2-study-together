<template>
  <div class="hello">
    <!-- <el-select>
      <el-option 
        v-for="item in options" 
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select> -->
  </div>
</template>

<script>
import ElSelect from 'element-ui/bin/select';
// import ElOption from 'element-ui/lib/option'

// import 'element-ui/lib/theme-default/icon.css';
// import 'element-ui/lib/theme-default/option.css';
// import 'element-ui/lib/theme-default/select.css';

export default {
  name: 'hello',
  components: {
    // ElSelect,
    // ElOption
  },
  data () {
    return {
      options: [
        {
          label: '一',
          value: '1'
        },
        {
          label: '二',
          value: '2'
        },
        {
          label: '一',
          value: '1'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
