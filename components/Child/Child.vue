<template>
	<view>
		<view v-for="(item,index) in list" :key="index">
			<slot :data="item"></slot>
		</view>
		<button type="default" @click="onClick">触发事件</button>
	</view>
</template>

<script lang="ts" setup>
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
</script>

<style lang="scss" scoped>

</style>