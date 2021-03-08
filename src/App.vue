<template>
  <a-row>
    <a-col :span="3">
      <a-input :value="123"/>
    </a-col>

    <a-col :span="3">
      <a-affix>固钉</a-affix>
    </a-col>

    <a-col :span="3">
      <a-alert message="Success Text" type="success"/>
    </a-col>
    <a-col :span="3">
      <a-anchor>
        <a-anchor-link href="#bottom" title="去底部"/>
      </a-anchor>
    </a-col>

    <a-col :span="3">
      <!--      <a-auto-complete placeholder="input here"/>-->
    </a-col>

    <a-col :span="3">
      <a-avatar :size="64">
        <template #icon>张</template>
      </a-avatar>
    </a-col>
    <a-col :span="3">
      <a-badge count="25"/>
    </a-col>
    <a-col :span="3">
      breadcrumb ×
      <template>
        <a-breadcrumb>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
          <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
      </template>
    </a-col>
    <a-col :span="3">
      <a-button>button</a-button>

      button-group ×
      <a-button-group>
        <a-button>button1</a-button>
        <a-button>button2</a-button>
        <a-button>button3</a-button>
      </a-button-group>
    </a-col>
    <a-col :span="3">
      <a-calendar :fullscreen="false"/>
    </a-col>
    <a-col :span="3">
      card ×
      <a-card title="Default size card" style="width: 300px">
        <template #extra><a href="#">more</a></template>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
    </a-col>

    <a-col :span="3">
      cascader ×
      <a-cascader :options="options" placeholder="Please select"/>
    </a-col>

    <a-col :span="3">
      <a-checkbox-group v-model:value="checkbox">
            <a-checkbox value="A">A</a-checkbox>
            <a-checkbox value="B">B</a-checkbox>
      </a-checkbox-group>
    </a-col>


  </a-row>


  <br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

  <div id="bottom">bottom</div>
  <a-back-top/>
</template>

<script>
import {defineComponent} from 'vue'
import AButtonGroup from "../lib/index";

export default defineComponent({
  name: 'App',
  components: {AButtonGroup},
  data() {
    const options = [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
              },
            ],
          },
        ],
      }
    ]

    return {
      options,
      checkbox:['A','B']
    }
  }
})
</script>

