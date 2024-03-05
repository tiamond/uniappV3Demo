<template>
	<view class="layout">
		<view class="tabs">
			<uni-segmented-control :current="current" :values="tabNames" @clickItem="onClickItem" styleType="button"
				activeColor="#4cd964"></uni-segmented-control>
		</view>
		<view class="item" v-for="(item, index) in pets" :key="item._id">
			<image @click="onPreview(index)" :src="item.url" mode="widthFix" class="image"></image>
			<view class="content">
				{{item.comment || item.content}}
			</view>
			<view class="author">
				—— @{{ item.source }} {{ item.shop || item.author }}
			</view>
		</view>
		<uni-load-more v-show="pets.length" :status="status" @clickLoadMore="clickLoadMore"></uni-load-more>

	</view>
</template>

<script lang="ts" setup>
	import { computed, onMounted, ref } from 'vue'
	import { getPets, getPets_mock } from '../../request/request'
	interface Pet {
		comment : string;
		author: string;
		content: string;
		source: string;
		shop : string;
		url : string;
		_id : string;
	}
	const pets = ref<Pet[]>([])

	const status = ref('more')

	onReady(() => {
		netWork()

	})

	// 发送请求
	function netWork() {
		// getPets(10).then(res => {
		// 	console.log(JSON.stringify(res));
		// })
		getPets/* _mock */(10, tabs[current].key).then((res : Pet[]) => {
			pets.value = pets.value.concat(res)
		}).finally(() => {
			uni.stopPullDownRefresh()
			status.value = 'more'
		})

	}

	const tabs = [{ name: '全部', key: 'all' }, { name: '猫猫', key: 'cat' }, { name: '狗狗', key: 'dog' }]

	// 切换tab
	const tabNames = computed(() => tabs.map(e => e.name))
	let current = 0
	const onClickItem = (e) => {
		current = e.currentIndex
		pets.value = []
		netWork()
	}

	const pics = computed(() => pets.value.map((e : Pet) => e.url))

	// 图片预览
	const onPreview = (index : number) => {
		uni.previewImage({
			urls: pics.value,
			current: index
		})
	}

	// 下拉加载
	onPullDownRefresh(() => {
		pets.value = []
		netWork()
	})

	// 触底加载
	onReachBottom(() => {
		netWork()
		status.value = 'loading'
	})
	const clickLoadMore = () => {
		status.value = 'loading'
		netWork()
	}
</script>

<style lang="scss" scoped>
	.layout {
		padding: 0 20rpx;

		.tabs {
			padding: 40rpx 0;
		}

		.item {
			margin-bottom: 20rpx;
			box-shadow: 0 10rpx 40rpx #ccc;
			border-radius: 15rpx;
			overflow: hidden;

			.image {
				width: 100%;
			}

			.content {
				font-size: 30rpx;
				padding: 20rpx;
			}

			.author {
				font-size: 28rpx;
				color: #999;
				text-align: right;
				padding: 10rpx;
			}
		}
	}
</style>