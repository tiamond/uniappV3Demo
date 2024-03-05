<template>
	<view class="">

	</view>
</template>

<script lang="ts" setup>
	// import { onBeforeMount, onMounted, ref } from 'vue'
	// import {onLoad,onShow,onReady} from '@dcloudio/uni-app'
	
	onLoad(() => {
		console.log('-----页面 onLoad');
	})
	onShow(() => {
		console.log('-----页面 onShow');
	})
	onReady(() => {
		console.log('-----页面 onReady');
	})
		
	onBeforeMount(()=>{
		console.log('-----页面 onBeforeMount');
		
	})
	
	onMounted(()=>{
		console.log('-----页面 onMounted');
		
	})
</script>

<style lang="scss" scoped>

</style>
