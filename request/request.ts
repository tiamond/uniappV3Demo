// const BaseUrl = 'https://tea.qingnian8.com/tools/taoShow'
const BaseUrl = 'https://tea.qingnian8.com/tools/petShow'

const mock = [{ "_id": "659cf1de742079f2f95998ed", "url": "https://gw.alicdn.com/imgextra/i4/O1CN019rc7xZ1TFiqqlXvFO_!!0-tbbala.jpg", "shop": "新丽雅运动旗舰店", "comment": "质量不错，摸着有质感，做工精致，没有线头，主要是剪裁合身，游泳时很舒服，卖家发货速度也快" }, { "_id": "659fa18d61381f63ec0b129d", "url": "https://gw.alicdn.com/imgextra/i1/O1CN01S5TgWP1QMBbFByF13_!!0-rate.jpg", "shop": "欢优爱旗舰店", "comment": "版型设计很性感，若隐若现的感觉。材质非常好" }, { "_id": "659cf1de742079f2f95998ca", "url": "https://img.alicdn.com/imgextra/i2/0/O1CN01B56ymx1SMlJuQ1IV5_!!0-tbbala.jpg", "shop": "七了个三店铺", "comment": "很精致的一套，质感很好滴" }, { "_id": "659fa18d61381f63ec0b12a3", "url": "https://gw.alicdn.com/imgextra/i4/O1CN01Rb6ffm1jrJ9bXufN4_!!0-tbbala.jpg", "shop": "柠檬物语服饰旗舰店", "comment": "出乎意料的好，质量很好" }, { "_id": "659cf1de742079f2f9599907", "url": "https://gw.alicdn.com/imgextra/i3/O1CN01MhZAzH27XCYMNUafO_!!0-rate.jpg", "shop": "型盛旗舰店", "comment": "穿着超舒服！显得比例超级好，真的好喜欢！" }, { "_id": "659cf196de06c366b3e83d5b", "url": "https://gw.alicdn.com/imgextra/i3/O1CN01ciS4Sg1ELTZ77Oe7r_!!2-rate.png", "shop": "南极人万派专卖店", "comment": "非常透气舒服，关键还可以遮住腿部一些小瑕疵最重要的是不掉档，上身效果也很不错。" }, { "_id": "659cf1de742079f2f9599916", "url": "https://gw.alicdn.com/imgextra/i4/O1CN01yqUbjZ1RZknrtauD7_!!0-tbbala.jpg", "shop": "型盛旗舰店", "comment": "的一眼爱住，太有设计感了也不显肤乳，还会拉长视觉比例，有胸垫包裹性很强我这种小胸也不会担心" }, { "_id": "659cf196de06c366b3e83d50", "url": "https://img.alicdn.com/imgextra/i1/3300121444/O1CN01k2C6ES1MXOjOtsPz2_!!3300121444.jpg", "shop": "缇吻旗舰店", "comment": "蕾丝性感挂脖吊带背心女士夏季修身显瘦纯欲诱惑露背镂空连体上衣" }, { "_id": "659cf1de742079f2f95998cc", "url": "https://img.alicdn.com/imgextra/i1/0/O1CN01bQjW2Y1y2DFso0aM0_!!0-rate.jpg", "shop": "蒋大猫", "comment": "它是黑丝界的天花板?(=???=)?！秋天搭配这款丝滑的丝袜颜值太高啦" }, { "_id": "659cf196de06c366b3e83d5c", "url": "https://gw.alicdn.com/imgextra/i2/O1CN01KHCvlY1ELTZCxUrKB_!!2-rate.png", "shop": "南极人万派专卖店", "comment": "非常透气舒服，关键还可以遮住腿部一些小瑕疵最重要的是不掉档，上身效果也很不错。" }]

export function getPets(size : number, type?: string) {
	return new Promise((resolve, reject) => {
		uni.showNavigationBarLoading()
		uni.request({
			url: BaseUrl,
			data: {
				size,
				type
			},
			method: 'GET',
			header: {
				'access-key': ''
			}
		}).then((res : any) => {
			if (res.data.errCode === 0) {
				resolve(res.data.data)
			} else {
				reject(res.data.errMsg)
			}
		}).catch(reject).finally(() => {
			uni.hideNavigationBarLoading()
		})
	})
}
	interface Pet {
		comment : string;
		shop : string;
		url : string;
		_id : string;
	}
export function getPets_mock(size ?: number, type?: string) {
	return new Promise((resolve) => {
		uni.showNavigationBarLoading()
		setTimeout(() => {
			resolve(mock)
			uni.hideNavigationBarLoading()
		}, 2000)
	})
}