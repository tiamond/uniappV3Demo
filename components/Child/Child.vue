<template>
	<view>
		<view v-for="(item,index) in list" :key="index">
			<slot :data="item"></slot>
		</view>
		<button type="default" @click="onClick">触发事件</button>
		<image v-show="isShow" src="../../static/logo.png" mode="aspectFill"></image>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';

	const emit = defineEmits<{
		(event : 'add', id : number) : void
	}>()

	interface item {
		name : string
	}
	const props = withDefaults(defineProps<{
		list : item[]
	}>(), ({
		list: () => [{ name: 'default' }]
	}))
	const onClick = () => {
		emit('add', Math.random())
	}

	const isShow = ref(true)

	const onShow = () => {
		isShow.value = true
	}

	const onHide = () => {
		isShow.value = false
	}
	
	defineExpose({
		onShow,onHide
	})
</script>

<style lang="scss" scoped>

</style>