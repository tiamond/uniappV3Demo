<template>
	<button class="btn-def" hover-class="btn-active" type="default" @click="routeTo">demo1</button>
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
		width: 200upx;
		margin: 0;
	}
	.btn-active {
		background: red;
	}
</style>
