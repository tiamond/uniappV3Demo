<template>
	<view class="box-1">
		css中绑定ref变量值
	</view>
	<view class="box">
		<button type="default" @click="onClick">改变背景颜色</button>
	</view>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	const color = ref<string>('red')
	
	const onClick = () => {
		color.value  = `#${String(Math.random()).slice(2, 8)}`
	}
</script>

<style lang="scss" scoped>
	.box-1{
		background: v-bind(color);
	}

</style>
