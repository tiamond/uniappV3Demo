<template>
	<button class="btn-def" hover-class="btn-active" type="default" @click="routeTo">通过事件demo1</button>
	<navigator url="/pages/demo1/demo1">通过组件跳转到demo1</navigator>
	<navigator class="route-btn" url="/pages/demo2/demo2">通过组件跳转到demo2</navigator>
	<navigator class="to-list" hover-class="to-list-hover" url="/pages/demo3/demo3">列表渲染</navigator>
</template>

<script setup>
	const routeTo = () => {
		uni.navigateTo({
			url: '/pages/demo1/demo1'
		})
	}
</script>

<style lang="scss" scoped>
	.btn-def {
		width: 700upx;
		margin: 0;
	}
	.btn-active {
		background: red;
	}
	
	.route-btn{
		width: 200upx;
		height: 100upx;
	}
	.to-list {
		border: 2upx solid #000;
		&-hover {
			border-color: red;
		}
	}
</style>
