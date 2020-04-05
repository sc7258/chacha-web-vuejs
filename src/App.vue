<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{$moment().format('YYYY-MM-DD')}}</div>
    <div>{{$moment(197201261130, "YYYYMMDDHHmm").lunar().format('YYYY-MM-DD')}}</div>
    <div>{{$moment().year(1971).month(11).date(11).solar().format('YYYY-MM-DD')}}</div>
<!--    <div>{{$lunar("1971", "12", "11").add(1,'d').lunarToSolar().getJson()}}</div>-->
<!--&lt;!&ndash;    <span>{{$lunar("1972", "01", "26").getJson()}}</span>&ndash;&gt;-->
<!--    <div>{{solar2Lunar(1972,1,26)}}</div>-->
<!--    <div>{{lunar2Solar(1971,12,11)}}</div>-->
    <div>{{getCanChi(1972,1,26,10)}}</div>
    <div>{{getCanChiLunar(1971,12,11,10)}}</div>
    <hr>
<!--    <div>{{getChaCha(1972,1,26,10)}}</div>-->
    <hr>
    <div>{{getChaCha(1983,10,31,10)}}</div>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import utilLunar from '@/mixin/util-lunar.js';
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  mixins: [utilLunar],
  components: {
    HelloWorld
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
