<template>
	<view class="out">
		<view class="list">
			<view class="item" v-for="(item, index) in list" :key="item.id">
			<text>{{index+1}}. {{item.content}}</text>
				<view class="cls" @click="delItem(index)">删除</view>
			</view>
		</view>
		<view class="cnt">
			一共{{list.length}} 条
		</view>
		<input class="ipt" type="text" v-model="iptValue" @confirm="onSubmit" />
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	interface Item {
		id: number,
		content: string
	}
	const list = ref<Item[]>([{
		id: 11, content: 'jinitlmz'
	}])
	
	const iptValue =ref<string>('')
	
	const delItem = (index: number) => {
		list.value.splice(index, 1)
	}
	
	const onSubmit = () => {
		list.value.push({
			id: Date.now(),
			content: iptValue.value
		})
		iptValue.value = ''
	}
</script>

<style lang="scss" scoped>
	.out {
		height: 100vh;
		overflow: auto;
		padding: 20upx;
		.list {
			width: 80%;
			padding: 20upx;
			margin: auto;
			border: 1px solid #000;
			box-shadow: 0 0 8upx #ccc;
			.item {
				display: flex;
				justify-content: space-between;
				.cls {
					color: red;
				}
			}
		}
		.cnt {
			margin-top: 20upx;
			text-align: center;
		}
		.ipt {
			border: 1px solid #ccc;
		}
	}
</style>