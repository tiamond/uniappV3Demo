<template>
	<button class="btn-def" hover-class="btn-active" type="default" @click="routeTo">通过事件demo1</button>
	<navigator url="/pages/demo1/demo1">通过组件跳转到demo1</navigator>
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
</style>
