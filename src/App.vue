<template>
  <div :class="$style.container">
    <h1>hello</h1>
    <div :class="$style.contenta">content a
      <div :class="$style.contentb">contentb</div>
      <img :class="$style.imga" src="./assets/001.png" alt="#">
      <button @click="handler">click</button>
      <input type="text" name="" id="">{{inputvalue}}
      <jsxt></jsxt>
      <cssextractcomp></cssextractcomp>
    </div>
  </div>
</template>


<script>
import jsxt from './components/jsxtemplate.vue'
import cssextractcomp from './components/cssextract'
export default {
  data() {
    return {
      a_test:null,
      inputvalue:null
    }
  },
  components: {
    jsxt,
    cssextractcomp
  },
  methods: {
    handler() {
      alert('e')
      let b_test = 'k'
      this.a_test = b_test
    }
  }
}
</script>


<style lang="scss" module>
  .container {
    box-sizing: border-box;
    border-radius:50%;
    border:1px solid blue;
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    align-items:flex-end;
    .contenta{
      border: 1px solid green;
      .imga {
        width:200px;
        height:200px;
        border:6px solid blue;
      }
      .contentb {
        border:1px solid yellow;
      }
    }
  }
</style>