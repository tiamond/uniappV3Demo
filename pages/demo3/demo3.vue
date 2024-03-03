<template>
	<view class="list" v-for="item in list" :key="item.id">
		{{item.name}} -- {{item.number}}号
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	interface star {
		id : number,
		name : string,
		number : number
	}
	const list = ref<star[]>([
		{
			id: 1001,
			name: 'kebi',
			number: 24
		}, {
			id: 1002,
			name: 'jams',
			number: 23
		},
	])
</script>

<style lang="scss" scoped>

</style>