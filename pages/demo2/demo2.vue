<template>
	<view class="">
		<switch :checked="isChecked" @change="onChange"/>
		<button type="primary" @click="onClick"> 改变switch</button>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'

	const isChecked = ref<boolean>(false)
	const onClick = () => {
		isChecked.value = !isChecked.value
		console.log(isChecked.value)
	}
	
	const onChange = () => {
		console.log(isChecked.value)
	}
</script>

<style lang="scss" scoped>

</style>