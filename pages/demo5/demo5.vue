<template>
	<Child @add = 'onAdd' :list = 'list'>
		<template #default="{data}">
			<view>{{data.name}}</view>
		</template>
	</Child>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	const list = ref<{name: string}[]>([{
		name: '123'
	}, 
	{
		name: '123'
	}, {
		name: '123'
	}])
const onAdd = (num: number) => {
	list.value.push({
		name: String(num)
	})
}
</script>

<style lang="scss" scoped>

</style>
