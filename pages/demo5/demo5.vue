<template>
	<Child @add='onAdd' :list='list' ref='child'>
		<template #default="{data}">
			<view>{{data.name}}</view>
		</template>
	</Child>
	<button @click="showChild">显示子组件图片</button>
	<button @click="hideChild">隐藏子组件图片</button>
</template>

<script lang="ts" setup>
	import { onMounted, ref } from 'vue'
	const list = ref<{ name : string }[]>([{
		name: '123'
	},
	{
		name: '123'
	}, {
		name: '123'
	}])
	const onAdd = (num : number) => {
		list.value.push({
			name: String(num)
		})
	}
	
	const child = ref(null)
	onMounted(() => {
		console.log(child.value);
	})
	
	const showChild = () => {
		child.value.onShow()
	}
	const hideChild = () => {
		child.value.onHide()
	}
</script>

<style lang="scss" scoped>

</style>