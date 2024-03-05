<template>
	<view class="layout">
		页面生命周期
		<scroll-view scroll-y="true" ref="scrollView">
			<view>
				11
			</view>
		</scroll-view>
	</view>
</template>

<script lang="ts" setup>
	import {onLoad,onReady} from '@dcloudio/uni-app'
import { ref } from 'vue';
	const scrollView = ref(null)
	onLoad((a) => {
		console.log("页面onLoad", a);
	})
	
	onReady(() => {
		console.log(scrollView.value);
	})
</script>

<style lang="scss" scoped>

</style>
