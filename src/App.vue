<template>
  <div id="container">
    <h1>hello</h1>
    <div class="contenta">content a
      <div class="contentb">contentb</div>
      <img src="./assets/001.png" alt="#">
      <button @click="handler">click</button>
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
      a_test:null
    }
  },
  components: {
    jsxt,
    cssextractcomp
  },
  methods: {
    handler() {
      let b_test = 'k'
      this.a_test = b_test
    }
  }
}
</script>


<style lang="scss">
  #container {
    box-sizing: border-box;
    border-radius:50%;
    border:1px solid blue;
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    align-items:flex-end;
    .contenta{
      border: 1px solid green;
      img {
        width:200px;
        height:100px;
        border:1px solid blue;
      }
      .contentb {
        border:1px solid yellow;
      }
    }
  }
</style>