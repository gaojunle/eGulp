/**
 * @author  jinlong on 2016/01/20
 *
 * @description 良医首页数据提取
 * @version 1.0
 * @example:
 */
define([], function(){
	var indexData = {
		//直通车
		directBus: {},
		//良医动态
		trends: [{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01cd65b62277d04ef5.jpg',
			doctor: {
				name: '陈晓蓉',
				link: 'http://www.liangyi.com/doctor?uid=902'
			},
			title: '主任医师',
			hospital: '上海市公共卫生临床中心',
			section: '中西医结合科',
			article: {
				title: '发布《药食之宝---陈皮》',
				link: 'http://www.liangyi.com/hpNews/View?id=186',
				abstract: '陈皮最早记载于《神农本草经》，被列为上品，又名橘皮。陶弘景说：“橘皮疗气大胜，以东橘为好，西江者不如，须陈久为良。”元代王好古认为：“橘皮以色红日久者为佳，故曰红皮陈皮。”李时珍在《本草纲目》中将陈皮列为黄橘皮的别名，同时还记载了青橘'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01f1e72b128c62ef27.jpg',
			doctor: {
				name: '鲍时华',
				link: 'http://www.liangyi.com/doctor?uid=321'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '生殖免疫科',
			article: {
				title: '发布《IPEX综合征》',
				link: 'http://www.liangyi.com/hpNews/View?id=158',
				abstract: '小编前几日在柳叶刀杂志的一篇文献中看到一位2010年就诊于法国里昂的女性患者，既往妊娠6次，足月产1女孩，2次自然流产病史（性别不详），后3次孕早期胎死宫内（胎儿性别均为男），一次孕中期（24周）胎死宫内（胎儿性别为男），最后一次B超'
			}
		}, {
			photo: 'http://p1.qhimg.com/dm/200_200_/t0106a6141af32d14a8.jpg',
			doctor: {
				name: '张进',
				link: 'http://www.liangyi.com/doctor?uid=939'
			},
			title: '副主任医师',
			hospital: '上海国际医学中心',
			section: '泌尿外科',
			article: {
				title: '发布《对于小的肾脏肿瘤需要说明的几个问题？》',
				link: 'http://www.liangyi.com/hpNews/View?id=201',
				abstract: '我们一般将最大直径≤100px的肾脏实质性肿瘤称为小的肾脏肿瘤（small renalmass）。随着人们健康意识的提高和影像学检查设备的普及，我们发现肾脏肿瘤患者中此类患者的比例越来越高'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01cd65b62277d04ef5.jpg',
			doctor: {
				name: '陈晓蓉',
				link: 'http://www.liangyi.com/doctor?uid=902'
			},
			title: '主任医师',
			hospital: '上海市公共卫生临床中心',
			section: '中西医结合科',
			article: {
				title: '发布《同肝共苦，幸福一生》',
				link: 'http://www.liangyi.com/hpNews/View?id=192',
				abstract: '“知者乐水，仁者乐山；知者动，仁者静；知者乐，仁者寿”、“食不厌精，脍不厌细”、“吾十有五而志于学，三十而立，四十而不惑，五十而知天命，六十而耳顺，七十而从心所欲，不逾矩”'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01f3a2695a683f8bfe.jpg',
			doctor: {
				name: '朱盈',
				link: 'http://www.liangyi.com/doctor?uid=323'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '生殖免疫科',
			article: {
				title: '发布《女性生殖器官畸形与生孩子那些事儿》',
				link: 'http://www.liangyi.com/hpNews/View?id=152',
				abstract: '很多人迷惑，女性生殖器官畸形和生育的关系。是否有生殖器官畸形就不是女人了？不能生正常孩子了？答案不是肯定，也不是否定。首先，让我们了解正常的女性生殖器官，正常结构的女性生殖器官如花一样美丽，包括：双侧卵巢（产生卵子的地方'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01df526e84bca2e8c9.jpg',
			doctor: {
				name: '朱晓斌',
				link: 'http://www.liangyi.com/doctor?uid=257'
			},
			title: '主治医师',
			hospital: '上海交通大学医学院附属瑞金医院',
			section: '生殖医学中心',
			article: {
				title: '发布《精液检查注意事项》',
				link: 'http://www.liangyi.com/hpNews/View?id=63',
				abstract: '精液检查注意事项1、受检者应在接受检查前3～5天内禁欲，并在禁欲未超过7天时进行检查；梦遗应视为一次排精行为。2、受检者在接受检查前1周内不可服用丙酸睾丸酮、苯乙酸睾丸酮、苯丙酸诺龙等药物。3'
			}
		}, {
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '朱庆庆',
				link: 'http://www.liangyi.com/doctor?uid=269'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《宝宝湿疹怎么办？》',
				link: 'http://www.liangyi.com/hpNews/View?id=75',
				abstract: '婴儿湿疹是婴儿时期常见的皮肤病之一，俗称“奶癣”，是一种对牛奶、母乳和鸡蛋等食物过敏而引起的变态反应皮肤病，有婴儿湿疹的宝宝以后容易发生其他过敏性疾病，如哮喘、过敏性鼻炎、过敏性结膜炎等。婴儿湿疹有哪些类'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01c1fa521e67ae5473.jpg',
			doctor: {
				name: '唐慧婷',
				link: 'http://www.liangyi.com/doctor?uid=315'
			},
			title: '护师',
			hospital: '上海市第一妇婴保健院',
			section: '生殖免疫科',
			article: {
				title: '发布《如果没有如果，如果不曾失去》',
				link: 'http://www.liangyi.com/hpNews/View?id=92',
				abstract: '有这样一群特殊患者，不惜千里迢迢寻访名医；百度搜索“习惯性流产、胚胎停育、复发性流产”，精读每一篇文献，说出来的专业名词可以唬住曾经刚到习流门诊的唐小护。预约初诊时，简单问诊，就会说话哽咽，低眉含泪，让听者恻隐动容。'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——之辅食何时添加？》',
				link: 'http://www.liangyi.com/hpNews/View?id=82',
				abstract: '养育孩子不是在维护精密仪器——之辅食篇何时添加？上海市第一妇婴保健院 妇幼保健部王维洁民以食为天，宝宝的饮食应该比“天”还大，是“宇宙”'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——宝宝出牙闹那般！》',
				link: 'http://www.liangyi.com/hpNews/View?id=176',
				abstract: '养育孩子不是在维护精密仪器——宝宝出牙闹那般！上海市第一妇婴保健院 妇幼保健部 王维洁“王医生,宝宝最近夜里老是哭闹，'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——添加辅食后宝宝的大便解读》',
				link: 'http://www.liangyi.com/hpNews/View?id=96',
				abstract: '养育孩子不是在维护精密仪器——添加辅食后宝宝的大便解读上海市第一妇婴保健院 妇幼保健部王维洁有家长建议洁姐解析一下：宝宝添加辅食后的大便'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——请按医嘱用药》',
				link: 'http://www.liangyi.com/hpNews/View?id=211',
				abstract: '宝宝生病了要用药吗？不想给宝宝吃药！担心药物副反应啊！王医生您帮我看看今天医生帮我开的药合理不合理？洁姐在/门诊中和微博中遇到好多类似这样的提问，让我左右为难'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——川崎病和调料没啥关系！》',
				link: 'http://www.liangyi.com/hpNews/View?id=210',
				abstract: '前段时间有一家长在微博上询问洁姐：“宝宝发烧三天后眼睛充血怎么办？”回答：“请儿童眼科就诊，可能由于上呼吸道感染引起结膜炎，对症用药”'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——您烦恼的“碎觉”》',
				link: 'http://www.liangyi.com/hpNews/View?id=208',
				abstract: '准妈妈到孕后期因为夜晚胎动、夜尿而晚上睡不好，希望宝宝瓜熟蒂落，好想看看亲爱的宝贝长啥样？可是当宝贝出生之后，好多妈妈认为宝宝还是在肚子里省心'
			}
		}, {
			photo: 'http://p1.qhimg.com/dm/200_200_/t0106a6141af32d14a8.jpg',
			doctor: {
				name: '张进',
				link: 'http://www.liangyi.com/doctor?uid=939'
			},
			title: '副主任医师',
			hospital: '上海国际医学中心',
			section: '泌尿外科',
			article: {
				title: '发布《肾癌的发病情况和病因》',
				link: 'http://www.liangyi.com/hpNews/View?id=200',
				abstract: '肾癌约占成人恶性肿瘤的2%~3%，各国或各地区的发病率不同，发达国家发病率高于发展中国家。我国各地区肾癌的发病率及死亡率差异也较大，据全国肿瘤防治研究办公室和卫生部卫生统计信息中心统计'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——之宝宝体格生长那些事》',
				link: 'http://www.liangyi.com/hpNews/View?id=101',
				abstract: '养育孩子不是在维护精密仪器——之宝宝体格生长那些事上海市第一妇婴保健院 妇幼保健部王维洁宝宝的降临，六位家长密切关注宝宝的吃、喝、拉、撒'
			}
		}, {
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '蒋蓓琦',
				link: 'http://www.liangyi.com/doctor?uid=378'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '乳腺科',
			article: {
				title: '发布《副乳腺肥大》',
				link: 'http://www.liangyi.com/hpNews/View?id=128',
				abstract: '见过小狗和小猪的肚子吗？胸腹部从上至下一串的乳头，这就是哺乳类动物的多乳头表现。人类也有同样的情况，只不过通常只发生在妈妈的肚子里的胚胎阶段。这时候的胎儿腹面从腋下到腹股沟有两条乳线，从上至下共有6～8对乳腺小芽芽，专业名词称为“乳腺'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——安抚奶嘴的是与非》',
				link: 'http://www.liangyi.com/hpNews/View?id=194',
				abstract: '洁姐来做回“老娘舅”，说说安抚奶嘴的是与非，“用”还是“不用”，“用好”还是“不用好”？经常有祖父母问我“宝宝用了这空奶头老是吸吮，太伤精力了，会得奶痨吗？'
			}
		}, {
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '朱庆庆',
				link: 'http://www.liangyi.com/doctor?uid=269'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《婴儿常见睡眠问题及对策（二）宝宝睡觉容易醒怎么办？》',
				link: 'http://www.liangyi.com/hpNews/View?id=78',
				abstract: '经常有家长会问，宝宝睡觉很容易醒，一晚上要醒好几次，该如何是好呀？对于这种现象，我先来普及一下睡眠的正常生理现象。人的正常睡眠有两种状态,交替进行。第一种是眼球的快速运动睡眠期，称快速眼动睡眠期，其生理特点是全身肌肉松弛'
			}
		}, {
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '蒋蓓琦',
				link: 'http://www.liangyi.com/doctor?uid=378'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '乳腺科',
			article: {
				title: '发布《新生女宝的乳腺发育》',
				link: 'http://www.liangyi.com/hpNews/View?id=132',
				abstract: '门诊有时会有家长来咨询他们出生的新出生女宝宝出现乳房肥大的疑问。其实不必担心，处于婴儿时期的女孩，其乳房的发育是处于静止状态的。但有些刚出生的女婴从母亲体内带来的雌激素过多，可在出生后的短期内发生暂时的乳房肿大、乳头溢液等情况。父母在'
			}
		}, {
			photo: 'http://p8.qhimg.com/dm/200_200_/t016946562dda3f1e57.jpg',
			doctor: {
				name: '陈勇辉',
				link: 'http://www.liangyi.com/doctor?uid=941'
			},
			title: '副主任医师',
			hospital: '上海国际医学中心',
			section: '泌尿外科',
			article: {
				title: '发布《肾脏位置/结构/功能》',
				link: 'http://www.liangyi.com/hpNews/View?id=206',
				abstract: '肾位于脊柱两侧，紧贴腹后壁，居腹膜后方。左肾上端平第11胸椎下缘，下端平2腰椎下缘。右肾比左肾低半个椎体。左侧第12肋斜过左肾后面的中部，右侧第12肋斜过右肾后面的上部'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01df526e84bca2e8c9.jpg',
			doctor: {
				name: '朱晓斌',
				link: 'http://www.liangyi.com/doctor?uid=257'
			},
			title: '主治医师',
			hospital: '上海交通大学医学院附属瑞金医院',
			section: '生殖医学中心',
			article: {
				title: '发布《促排卵周期注意事项》',
				link: 'http://www.liangyi.com/hpNews/View?id=65',
				abstract: '促排卵周期注意事项1、进入促排卵周期前，医生会根据您的卵巢功能、既往治疗经验等制定促排卵方案并告知您具体开始时间。2、部分促排卵药物有国产和进口两种，如您有特殊要求，请提前告知医生，否则医生将根据您的具体方'
			}
		}, {
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '朱庆庆',
				link: 'http://www.liangyi.com/doctor?uid=269'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《婴儿常见睡眠问题及对策（一）宝宝不肯睡觉怎么办？》',
				link: 'http://www.liangyi.com/hpNews/View?id=77',
				abstract: '经常有家长会问，我们宝宝精神可好了，怎么都不肯睡觉，怎么办呀？还有的家长会问，我们宝宝放在床上怎么都不肯睡觉，必须要抱着才肯睡觉，而且不能放，一放就醒。该如何是好呢？宝宝刚从温暖的子宫中，来到我们的新世界，他会有很多不适'
			}
		}, {
			photo: 'http://p8.qhimg.com/dm/200_200_/t016946562dda3f1e57.jpg',
			doctor: {
				name: '陈勇辉',
				link: 'http://www.liangyi.com/doctor?uid=941'
			},
			title: '副主任医师',
			hospital: '上海国际医学中心',
			section: '泌尿外科',
			article: {
				title: '发布《肾癌术后随访你需要注意什么？》',
				link: 'http://www.liangyi.com/hpNews/View?id=203',
				abstract: '肾癌术后一定要定期复查，需要注意两大方面：1、针对肾肿瘤的随诊，随诊的主要目的是检查是否有复发、转移和新生肿瘤。'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01df526e84bca2e8c9.jpg',
			doctor: {
				name: '朱晓斌',
				link: 'http://www.liangyi.com/doctor?uid=257'
			},
			title: '主治医师',
			hospital: '上海交通大学医学院附属瑞金医院',
			section: '生殖医学中心',
			article: {
				title: '发布《人工授精注意事项》',
				link: 'http://www.liangyi.com/hpNews/View?id=62',
				abstract: 'AIH、AID注意事项1、AIH，AID手术当天夫妇双方需要带好身份证。2、AIH手术日男方一般需要禁欲3-7天左右，如果男方精子不好，可以根据男科医生的建议适当调整。3、行AIH过程中，如果'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01c66f52c6839957c8.jpg',
			doctor: {
				name: '刘铭',
				link: 'http://www.liangyi.com/doctor?uid=328'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '产科',
			article: {
				title: '发布《宫颈机能不全》',
				link: 'http://www.liangyi.com/hpNews/View?id=95',
				abstract: '英文名称：Cervicalinsufficiency定义病因诊断预防与治疗定义宫颈机能不全常用于描述一种无痛性宫颈扩张，从而导致妊娠中期反复流产的疾'
			}
		}, {
			photo: 'http://p8.qhimg.com/dm/200_200_/t016946562dda3f1e57.jpg',
			doctor: {
				name: '陈勇辉',
				link: 'http://www.liangyi.com/doctor?uid=941'
			},
			title: '副主任医师',
			hospital: '上海国际医学中心',
			section: '泌尿外科',
			article: {
				title: '发布《腹腔镜微创治疗肾脏肿瘤效果究竟怎样？》',
				link: 'http://www.liangyi.com/hpNews/View?id=205',
				abstract: '近年随着腹腔镜手术器械的不断发展、手术方法的完善、手术技术的改进，腹腔镜手术治疗肾脏肿瘤已日益成熟。在国内外大的泌尿外科医疗中心已普遍开展'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01c96c0f001da9ddde.jpg',
			doctor: {
				name: '余震波',
				link: 'http://www.liangyi.com/doctor?uid=322'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '生殖免疫科',
			article: {
				title: '发布《甲状腺疾病与复发性流产之甲减篇》',
				link: 'http://www.liangyi.com/hpNews/View?id=113',
				abstract: '妊娠期甲状腺疾病是近十年来内分泌学界和围产医学界研究的热点领域之一。甲状腺疾病也是引起复发性流产的一个常见的内分泌因素。很多病人对这方面感兴趣且筛查的意识也逐渐提高，但反映还是有一些困惑的地方，下面由我来给大家分别做个'
			}
		}, {
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '王蓓颖',
				link: 'http://www.liangyi.com/doctor?uid=380'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '计划生育科',
			article: {
				title: '发布《白领女性如何落实计划生育避孕措施》',
				link: 'http://www.liangyi.com/hpNews/View?id=138',
				abstract: '随着现代人生活节奏的加快和工作压力的增大，中国的意外妊娠和流产率也非常高，这其中还包括文化层次较高的女性白领们。所以，寻求合理。正确、健康的避孕措施势在必行。专家指出，避孕不仅仅'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t013b1e6fc9f468a237.jpg',
			doctor: {
				name: '冯晓',
				link: 'http://www.liangyi.com/doctor?uid=281'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇科',
			article: {
				title: '发布《妊娠剧吐》',
				link: 'http://www.liangyi.com/hpNews/View?id=70',
				abstract: '前一段时间，病房里的病床被一批妊娠剧吐的患者压着，每天查房，只能耐心地对症治疗，外加心理疏导。医生也可怜，择期手术的患者收不进来，床位周转率上不去，领导都发话了，妊娠剧吐的收住入院标准有没有严格执行？患者们也可怜，吐得稀里哗啦的，整天'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——孩子耍赖你咋办？》',
				link: 'http://www.liangyi.com/hpNews/View?id=193',
				abstract: '养育孩子不是在维护精密仪器——孩子耍赖你咋办？上海市第一妇婴保健院 妇幼保健部 王维洁新手粑粑嫲嫲们都希望宝宝快快长大'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《培养宝宝走路，有几招？》',
				link: 'http://www.liangyi.com/hpNews/View?id=98',
				abstract: '培养宝宝走路，有几招？一周岁左右宝宝开始学习独立行走来探索周围的事和物了，但开始独立行走的月龄个体差异很大噢！有的宝宝9-10个月就开始独走，有的宝宝18个月还不会，家长如何训练宝宝走路'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——早期发现宝宝听觉问题（其一）》',
				link: 'http://www.liangyi.com/hpNews/View?id=108',
				abstract: '养育孩子不是在维护精密仪器——之早期发现宝宝听觉问题（其一）上海市第一妇婴保健院 妇幼保健部 王维洁[mod_image_'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——祖与孙的“爱与护”》',
				link: 'http://www.liangyi.com/hpNews/View?id=179',
				abstract: '养育孩子不是在维护精密仪器——祖与孙的“爱与护”'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《宝宝流鼻血怎么办?》',
				link: 'http://www.liangyi.com/hpNews/View?id=80',
				abstract: '宝宝流鼻血怎么办?如果孩子流鼻血时，家长不用慌张，要冷静地使用正确的方法来护理流鼻血的宝宝。我们常常看见的是在孩子流鼻血的时候，家长就会让孩子把头仰起来，这种方法是完全错误的哦。首先教家'
			}
		}, {
			photo: 'http://p2.qhimg.com/dm/200_200_/t01cd65b62277d04ef5.jpg',
			doctor: {
				name: '陈晓蓉',
				link: 'http://www.liangyi.com/doctor?uid=902'
			},
			title: '主任医师',
			hospital: '上海市公共卫生临床中心',
			section: '中西医结合科',
			article: {
				title: '发布《药食之宝——生姜》',
				link: 'http://www.liangyi.com/hpNews/View?id=185',
				abstract: '谚语有“鱼不离姜，肉不离酱”。生姜是人们烹饪时常用的一种调味品。生姜所含的芳香、辛辣物质溶入菜肴中，可除膻去腥，增鲜溢美，无论是煎鱼、烧鸭、烧蟹、炒肉，只要放少许姜丝或姜片，即可解除鱼、鸭、蟹、肉的膻味，使菜肴的味道更加鲜美。'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01f1e72b128c62ef27.jpg',
			doctor: {
				name: '鲍时华',
				link: 'http://www.liangyi.com/doctor?uid=321'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '生殖免疫科',
			article: {
				title: '发布《低分子肝素在妇产科的应用》',
				link: 'http://www.liangyi.com/hpNews/View?id=151',
				abstract: '这是一个真实的故事：门诊有个病人曾经妊娠期间发现了下肢静脉血栓，当地血液科医生给予低分子肝素治疗，好转后病人回社区医院产检，父母亲得知她孕期使用了低分子肝素后建议她引产，因为担心药物会对胎儿产生影响，病人竟然在26周左右引产了，后来她'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01cd65b62277d04ef5.jpg',
			doctor: {
				name: '陈晓蓉',
				link: 'http://www.liangyi.com/doctor?uid=902'
			},
			title: '主任医师',
			hospital: '上海市公共卫生临床中心',
			section: '中西医结合科',
			article: {
				title: '发布《“味入金齏美，巢营玉垒虚”——燕窝篇》',
				link: 'http://www.liangyi.com/hpNews/View?id=188',
				abstract: '燕窝，为金丝燕吞食海中小鱼、小虾或海藻等小生物消化后,分泌出的胃液与其绒羽混合凝结于临海的悬崖峭壁上,而筑成的巢窝，故名约燕窝。因其稀少、采摘困难,且味美营养丰富,又有强身滋补之功能,故燕窝被视为佳肴珍品。清朝周亮工在'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《关于有益菌的问与答（下）》',
				link: 'http://www.liangyi.com/hpNews/View?id=148',
				abstract: '关于有益菌的问与答（下）上海市第一妇婴保健院 妇幼保健部王维洁不管是成年人还是小宝宝，我们的机体内有各种各样的细菌。它们与人体处于相互制约、相互依赖的平衡关系，这就是人体的微生态平衡。医学上将对人体有益的'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——之辅食量》',
				link: 'http://www.liangyi.com/hpNews/View?id=85',
				abstract: '养育孩子不是在维护精密仪器——之辅食量上海市第一妇婴保健院 妇幼保健部王维洁辅食没完没了，本来想翻篇了，辅食（二）后想了好久接下去先写啥'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——之早期发现宝宝听觉问题（其二）》',
				link: 'http://www.liangyi.com/hpNews/View?id=109',
				abstract: '养育孩子不是在维护精密仪器——之早期发现宝宝听觉问题（其二）上海市第一妇婴保健院 妇幼保健部王维洁小儿生长发育过程中有疾病（例如：高胆红'
			}
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01fb112473f5358d32.jpg',
			doctor: {
				name: '黄翼然',
				link: 'http://www.liangyi.com/doctor?uid=938'
			},
			title: '主任医师',
			hospital: '上海国际医学中心',
			section: '泌尿外科',
			article: {
				title: '发布《肾癌是如何诊断的？》',
				link: 'http://www.liangyi.com/hpNews/View?id=198',
				abstract: '目前发现的肾癌有70%左右时通过第一个途径发现的，通过这一途径发现的肾癌大多是早期肾癌；通过第二途径发现的肾癌，已经有明显症状大多数是中晚期肾癌，在医疗不发达地区比较常见'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01cd65b62277d04ef5.jpg',
			doctor: {
				name: '陈晓蓉',
				link: 'http://www.liangyi.com/doctor?uid=902'
			},
			title: '主任医师',
			hospital: '上海市公共卫生临床中心',
			section: '中西医结合科',
			article: {
				title: '发布《春季养肝正当时》',
				link: 'http://www.liangyi.com/hpNews/View?id=190',
				abstract: '一日之计在于晨，一年之计在于春。在《内经?素问》中有载：“春三月，此为发陈，天地俱生，万物以荣，夜卧早起，广步于庭，被发缓行，以使志生，生而勿杀，予而勿夺，赏而勿罚，此春气之应，养生之道也，逆之则伤肝，夏为寒变，奉长者少'
			}
		},{
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '庄文珂',
				link: 'http://www.liangyi.com/doctor?uid=370'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '计划生育科',
			article: {
				title: '发布《放置曼月乐环的常见问题》',
				link: 'http://www.liangyi.com/hpNews/View?id=134',
				abstract: '（一）?闭经?在平时的诊疗过程中，经常会碰到病人说：医生都说曼月乐环好，但是可能会引起月经不来，那可不行！的确，放置曼月'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t0188daad7b8792f7d1.jpg',
			doctor: {
				name: '杜梦阳',
				link: 'http://www.liangyi.com/doctor?uid=302'
			},
			title: '医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇科',
			article: {
				title: '发布《习惯性流产之饮食篇》',
				link: 'http://www.liangyi.com/hpNews/View?id=104',
				abstract: '随着生活水平的提高，节奏的加快，一日三餐吃点啥，基本不加思索，每每被问及，总是“随便”两字答之。现今影响健康的三大要素是饮食营养、生活环境、遗传，我们能控制的只有饮食，但往往被大家忽略。多领域专家均提倡，科学的饮食结构和方式可以很大程'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——之奶量篇》',
				link: 'http://www.liangyi.com/hpNews/View?id=81',
				abstract: '养育孩子不是在维护精密仪器——之奶量篇上海市第一妇婴保健院 妇幼保健部王维洁天下父母心，当孩子出生，爸爸妈妈就想着把最好的东西给予宝宝，'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——宝宝疝气是哭出来的吗？》',
				link: 'http://www.liangyi.com/hpNews/View?id=173',
				abstract: '养育孩子不是在维护精密仪器——宝宝疝气是哭出来的吗？'
			}
		},{
			photo: 'http://p8.qhimg.com/dm/200_200_/t016946562dda3f1e57.jpg',
			doctor: {
				name: '陈勇辉',
				link: 'http://www.liangyi.com/doctor?uid=941'
			},
			title: '副主任医师',
			hospital: '上海国际医学中心',
			section: '泌尿外科',
			article: {
				title: '发布《肾癌病人的饮食原则和注意事项》',
				link: 'http://www.liangyi.com/hpNews/View?id=204',
				abstract: '肾脏肿瘤的病因至今尚不清楚，肾癌的发生是多方面因素共同作用的结果。食物、营养与癌症发生存有密切关系，肾癌病人具体需注意以下几方面'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——宝宝肠套叠可怕不可怕？》',
				link: 'http://www.liangyi.com/hpNews/View?id=157',
				abstract: '养育孩子不是在维护精密仪器——宝宝肠套叠可怕不可怕？上海市第一妇婴保健院 妇幼保健部王维洁朋友深夜来电：“6月龄宝宝哭闹不止，是否是肠套'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01a007f8385169f75a.jpg',
			doctor: {
				name: '李国华',
				link: 'http://www.liangyi.com/doctor?uid=324'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '生殖免疫科',
			article: {
				title: '发布《年龄与复发性流产》',
				link: 'http://www.liangyi.com/hpNews/View?id=93',
				abstract: '记得去年有个复发性流产的患者，34岁的女性，在筛查完病因后发现心磷脂综合征，作为常规我建议她开始用药，为下一次妊娠做准备去。她却说：“医生，我准备考研究生,暂时不打算要孩子。”我有点意外，但因为考虑她34岁的原因，我还是很直接的建议她'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——幼儿急疹急不急？》',
				link: 'http://www.liangyi.com/hpNews/View?id=143',
				abstract: '养育孩子不是在维护精密仪器——幼儿急疹急不急？上海市第一妇婴保健院 妇幼保健部王维洁幼儿急疹急不急？家长会问我：“我家宝宝发烧了，是不是'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t018161e3a80386db7f.jpg',
			doctor: {
				name: '池丰丽',
				link: 'http://www.liangyi.com/doctor?uid=362'
			},
			title: '医师',
			hospital: '上海市第一妇婴保健院',
			section: '辅助生殖科',
			article: {
				title: '发布《上海市第一妇婴保健院生殖中心试管婴儿治疗流程》',
				link: 'http://www.liangyi.com/hpNews/View?id=105',
				abstract: '1.?月经干净时：①妇科检查取标本（TCT、支原体、衣原体、淋球菌）送一楼D区化验；②一楼D区验尿常规；2.?二楼抽血：①空腹抽血（血常规、凝血、肝肾功能、血糖、乙肝两对半、抗HCV、抗HIV、RPR、血型等）?②染色体'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t0154aa4588574932e3.png',
			doctor: {
				name: '屠韡燕',
				link: 'http://www.liangyi.com/doctor?uid=300'
			},
			title: '医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇科',
			article: {
				title: '发布《习惯性流产与易栓症》',
				link: 'http://www.liangyi.com/hpNews/View?id=86',
				abstract: '一、写在之前鲍时华医生给了我们写科普的任务，有很多话想说，提笔之时却各种踌躇，太随意怕不够科学、太具体怕不够深入浅出。于是乎，总结了几个常见问题，若能稍稍为诸位答疑解惑，已是喜乐。二、什么是易栓症？'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01cd65b62277d04ef5.jpg',
			doctor: {
				name: '陈晓蓉',
				link: 'http://www.liangyi.com/doctor?uid=902'
			},
			title: '主任医师',
			hospital: '上海市公共卫生临床中心',
			section: '中西医结合科',
			article: {
				title: '发布《解读桂枝汤》',
				link: 'http://www.liangyi.com/hpNews/View?id=191',
				abstract: '东汉著名医家张仲景，被誉为“医圣方祖”，他所撰著的《伤寒杂病论》被公认为中国医学方书的鼻祖，其内收录的方剂被后世称为“经方”。而桂枝汤则位居该书的诸方之首，柯琴在《伤寒杂病论附翼》中称桂枝汤为“仲景群方之魁，乃滋阴和阳，'
			}
		},{
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '蒋蓓琦',
				link: 'http://www.liangyi.com/doctor?uid=378'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '乳腺科',
			article: {
				title: '发布《副乳腺的手术指证和手术方法》',
				link: 'http://www.liangyi.com/hpNews/View?id=129',
				abstract: '副乳腺通常是不需要手术的，但出现以下情况可以考虑行副乳腺切除手术：①副乳腺出现肿胀、疼痛、触压痛等明显症状，而且严重到影响患者正常生活和工作，患者要求手术缓解症状的；②副乳腺较大，明显隆起或乳头肥大，有损美观，患者主动要求手术改善美观'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——之宝宝缺钙的食疗》',
				link: 'http://www.liangyi.com/hpNews/View?id=100',
				abstract: '养育孩子不是在维护精密仪器——之宝宝缺钙的食疗上海市第一妇婴保健院 妇幼保健部王维洁医生我家宝宝缺钙吗？宝宝晚上睡不好是不是缺钙？宝宝有'
			}
		},{
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '蒋蓓琦',
				link: 'http://www.liangyi.com/doctor?uid=378'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '乳腺科',
			article: {
				title: '发布《巨乳症的烦恼》',
				link: 'http://www.liangyi.com/hpNews/View?id=131',
				abstract: '乳房太小很苦恼，但是乳房太大也实在不是一件令人高兴的事情。太大的乳房会给身体造成巨大的负担，走路跑步都很困难，而且乳房下方皮肤皱褶处容易出现皮炎湿疹，给生活带来非常多的不便。临床上会碰到一些女性的乳房大得过分，甚至下垂到'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t013b1e6fc9f468a237.jpg',
			doctor: {
				name: '冯晓',
				link: 'http://www.liangyi.com/doctor?uid=281'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇科',
			article: {
				title: '发布《“霉菌性”阴道炎》',
				link: 'http://www.liangyi.com/hpNews/View?id=71',
				abstract: '看得仔细的人要问，为什么“霉菌性”要加双引号。因为临床上对这个疾病的叫法是外阴阴道假丝酵母菌病。简单的解释一下：假丝酵母菌是霉菌的一类，它们能侵犯粘膜，对人致病。由于假丝酵母菌说起来比较拗口，不容易记忆，而且治疗此病的药物和治疗其它霉'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《爸爸妈妈们如何早期发现宝宝的中耳疾病呢？》',
				link: 'http://www.liangyi.com/hpNews/View?id=97',
				abstract: '爸爸妈妈们如何早期发现宝宝的中耳疾病呢？宝宝感冒发热后有一段时间特别闹夜、烦躁不安，医生提醒爸爸妈妈：宝宝可能患上了中耳疾病，因为宝宝中耳咽鼓管较成人宽'
			}
		},{
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '朱庆庆',
				link: 'http://www.liangyi.com/doctor?uid=269'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《宝宝早期智能训练（新生儿篇）--给宝宝提供最佳的人生开端》',
				link: 'http://www.liangyi.com/hpNews/View?id=76',
				abstract: '每个新生宝宝都是一位沉睡的巨人，爸爸妈妈应当用爱、用智慧唤醒这位沉睡的巨人。因此，从宝宝一出生的那天起，就应该开始进行智能训练。那么如何进行早期智能训练呢？在新生儿期可以通过一些视听觉刺激、语言熏陶、情感交流和触觉活动及运动能力训练，'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01cd65b62277d04ef5.jpg',
			doctor: {
				name: '陈晓蓉',
				link: 'http://www.liangyi.com/doctor?uid=902'
			},
			title: '主任医师',
			hospital: '上海市公共卫生临床中心',
			section: '中西医结合科',
			article: {
				title: '发布《千年仙草之铁皮石斛》',
				link: 'http://www.liangyi.com/hpNews/View?id=184',
				abstract: '斛，是我国古代的最大容积单位，一斛可以装十斗米，可见其价值非同寻常，又因其只生长于连鸟兽也难以涉足的悬崖峭壁上，且对温度、湿度、光照等气候要求近乎苛刻，一旦被药农发现及采摘到，就如同挖掘到黄金般欣喜若狂，所以石斛被药农称为“药中黄金”'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《抓住宝宝前庭神经发育的关键时期，随时随地练习平衡》',
				link: 'http://www.liangyi.com/hpNews/View?id=146',
				abstract: '我们大脑的前庭神经用来控制人体的平衡功能，宝宝的平衡功能有助于其感觉知觉的发育，促进宝宝感觉统合；同时又有助于宝宝大动作的发育,促进其智力水平的发育和注意力集中。那么给宝宝练习平衡一定要让宝宝练习平衡'
			}
		},{
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '朱庆庆',
				link: 'http://www.liangyi.com/doctor?uid=269'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《宝宝枕秃，怎么办？》',
				link: 'http://www.liangyi.com/hpNews/View?id=74',
				abstract: '宝宝后脑勺部位，有一圈环状的或一小块光突突的“不毛之地”，被称为“枕秃”。顾名思义，“枕秃”是与枕头有关的，是宝宝的枕部，也就是脑袋与枕头接触的地方，出现了一圈头发稀少或没有头发的现象。枕秃的原因'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t013b1e6fc9f468a237.jpg',
			doctor: {
				name: '冯晓',
				link: 'http://www.liangyi.com/doctor?uid=281'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇科',
			article: {
				title: '发布《不孕不育诊治流程》',
				link: 'http://www.liangyi.com/hpNews/View?id=72',
				abstract: '这是一种临床症状，指未采取避孕措施，有规律性生活至少12个月，而女方未能得到临床妊娠，女方称不孕，男方称不育。既往女方无临床妊娠史为原发不孕（育）；既往女方有过临床妊娠史为继发性不孕（育）。符合不孕（育）定义的夫妇建议'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——宝宝肠套叠可怕不可怕？》',
				link: 'http://www.liangyi.com/hpNews/View?id=174',
				abstract: '养育孩子不是在维护精密仪器——宝宝肠套叠可怕不可怕？上海市第一妇婴保健院 妇幼保健部 王维洁朋友深夜来电'
			}
		},{
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '刘江勤',
				link: 'http://www.liangyi.com/doctor?uid=250'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '新生儿科',
			article: {
				title: '发布《食物过敏》',
				link: 'http://www.liangyi.com/hpNews/View?id=106',
				abstract: '食物过敏的定义：对某种食物出现的异常的免疫反应。发生率：3岁以内儿童发生率6-8%。70%有家族史，随年龄的增长逐渐减少。常见的容易引起过敏的食物为：牛奶、鸡蛋、坚果、麦、大豆、鱼、贝壳等。表'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01cd65b62277d04ef5.jpg',
			doctor: {
				name: '陈晓蓉',
				link: 'http://www.liangyi.com/doctor?uid=902'
			},
			title: '主任医师',
			hospital: '上海市公共卫生临床中心',
			section: '中西医结合科',
			article: {
				title: '发布《药食同源话山药》',
				link: 'http://www.liangyi.com/hpNews/View?id=187',
				abstract: '山药原名薯蓣，因“蓣”字与唐代宗李豫的名字同音，人们只好把薯蓣改作薯药；到了宋代，宋英宗赵曙登基后，为避“曙”音，又被改名为山药。昔时以河南怀庆产者为最佳，所以又叫怀山药。此药首载于《神农本草经》，为薯蓣科多年生蔓生植物薯蓣的根茎。山'
			}
		},{
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '蒋蓓琦',
				link: 'http://www.liangyi.com/doctor?uid=378'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '乳腺科',
			article: {
				title: '发布《乳头凹陷》',
				link: 'http://www.liangyi.com/hpNews/View?id=127',
				abstract: '乳头凹陷首先要区分是先天性凹陷还是继发性凹陷。最常见的当然是“先天性乳头凹陷”。顾名思义就是在出生时乳头就表现为扁平或塌陷，并在青春期乳腺发育后乳头仍然不突出于乳晕表面，甚至凹陷沉没于皮面之下。先天性乳头凹陷一般是双侧乳'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——之缺铁性贫血的食疗》',
				link: 'http://www.liangyi.com/hpNews/View?id=99',
				abstract: '养育孩子不是在维护精密仪器——之缺铁性贫血的食疗上海市第一妇婴保健院 妇幼保健部王维洁洁姐决定把辅食进行到底，想讲的讲完再翻篇，谈谈疾病'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——大宝宝便秘肿么办？》',
				link: 'http://www.liangyi.com/hpNews/View?id=145',
				abstract: '养育孩子不是在维护精密仪器——大宝宝便秘肿么办？上海市第一妇婴保健院 妇幼保健部 王维洁宝宝的便便为软黄'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——小宝宝便秘肿么办？》',
				link: 'http://www.liangyi.com/hpNews/View?id=144',
				abstract: '养育孩子不是在维护精密仪器——小宝宝便秘肿么办？上海市第一妇婴保健院 妇幼保健部 王维洁发烧腹泻真烦人！'
			}
		},{
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '朱庆庆',
				link: 'http://www.liangyi.com/doctor?uid=269'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《宝宝哭闹不止，需警惕婴儿肠绞痛》',
				link: 'http://www.liangyi.com/hpNews/View?id=73',
				abstract: '宝宝哭闹不止，需警惕婴儿肠绞痛许多宝宝都会由于不同的原因而哭闹，比如饿了，一般让宝宝吃奶宝宝很快就能够安抚下来，但有时宝宝会出现莫名其妙的哭闹，家长怎么做都不行，宝宝还是不停的哭闹，尤其在半夜，有时还伴有脸胀红、握拳踢腿'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器（序）》',
				link: 'http://www.liangyi.com/hpNews/View?id=79',
				abstract: '养育孩子不是在维护精密仪器（序）上海市第一妇婴保健院 妇幼保健部 王维洁上海有句老话：“养小囡，三天猫，四天狗，扔扔摔摔养得好。”'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——之辅食宝宝自己吃》',
				link: 'http://www.liangyi.com/hpNews/View?id=107',
				abstract: '养育孩子不是在维护精密仪器——之辅食宝宝自己吃上海市第一妇婴保健院 妇幼保健部 王维洁吃！吃！吃！宝宝辅'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——轮状病毒性腹泻正应季》',
				link: 'http://www.liangyi.com/hpNews/View?id=177',
				abstract: '养育孩子不是在维护精密仪器——轮状病毒性腹泻正应季上海市第一妇婴保健院 妇幼保健部 王维洁这段时间洁姐的'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——之宝宝大运动发育那些事》',
				link: 'http://www.liangyi.com/hpNews/View?id=102',
				abstract: '养育孩子不是在维护精密仪器——之宝宝大运动发育那些事上海市第一妇婴保健院 妇幼保健部 王维洁会爬的孩子更'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01f3a2695a683f8bfe.jpg',
			doctor: {
				name: '朱盈',
				link: 'http://www.liangyi.com/doctor?uid=323'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '生殖免疫科',
			article: {
				title: '发布《高泌乳素血症》',
				link: 'http://www.liangyi.com/hpNews/View?id=137',
				abstract: '很多患者检查发现泌乳素水平高，引起大家的关注和疑问，下面让我为大家一一解答常见的问题。1泌乳素哪里来的？泌乳素是一种多肽类激素，由垂体前叶催乳素细胞合成分泌。2为什么我每次验血泌乳素值不同呢？'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——宝宝乳牙怎么保护？》',
				link: 'http://www.liangyi.com/hpNews/View?id=178',
				abstract: '洁姐聊完长牙，接着聊聊宝宝乳牙怎么保护呢？长牙不易，护牙也不省心，好多长辈家长认为宝宝乳牙发生蛀牙没有关系，反正要换牙，这种想法是错误的奥！乳牙龋齿病变往往会影响恒牙的萌出，从而引起恒牙病变及牙列不齐等'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01cd65b62277d04ef5.jpg',
			doctor: {
				name: '陈晓蓉',
				link: 'http://www.liangyi.com/doctor?uid=902'
			},
			title: '主任医师',
			hospital: '上海市公共卫生临床中心',
			section: '中西医结合科',
			article: {
				title: '发布《解密膏方话肝病》',
				link: 'http://www.liangyi.com/hpNews/View?id=189',
				abstract: '膏方又称膏滋、煎膏，是将中药饮片反复煎熬去渣浓缩，加冰糖或蜂蜜收膏而成。膏方最早始于先秦古籍《山海经》，其中记载了一种羊脂类药物，用于涂擦皮肤防治皲裂，可以说是膏方的雏形。膏方有别于汤剂、丸剂、散剂，其大方图治，缓缓图功，它具有补中寓'
			}
		},{
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '张玲',
				link: 'http://www.liangyi.com/doctor?uid=376'
			},
			title: '护师',
			hospital: '上海市第一妇婴保健院',
			section: '产房',
			article: {
				title: '发布《会阴伤口——自然撕裂》',
				link: 'http://www.liangyi.com/hpNews/View?id=139',
				abstract: '会阴伤口是产科常见的伤口之一，会阴伤口包括会阴自然撕裂和会阴切开（会阴切开将会在续篇里面详细讲解），接下来我们主要针对自然分娩时会阴自然撕裂的情况来简单的聊聊。会阴自然撕裂，顾名思义，是指在分娩过程当中，外生殖器与肛门之间的的软组织发'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——之辅食篇怎么加？（一）》',
				link: 'http://www.liangyi.com/hpNews/View?id=83',
				abstract: '养育孩子不是在维护精密仪器——之辅食篇怎么加？上海市第一妇婴保健院 妇幼保健部王维洁宝宝辅食开始添加了，问题接踵而来，“小宇宙”进口的食'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——之是双语教育之我见》',
				link: 'http://www.liangyi.com/hpNews/View?id=110',
				abstract: '养育孩子不是在维护精密仪器——之是双语教育之我见上海市第一妇婴保健院 妇幼保健部王维洁洁姐经常被问及：宝宝是否双语环境？神马时候开始双语'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——之宝宝精细运动发育那些事》',
				link: 'http://www.liangyi.com/hpNews/View?id=103',
				abstract: '养育孩子不是在维护精密仪器——之宝宝精细运动发育那些事上海市第一妇婴保健院 妇幼保健部 王维洁教育家苏霍姆林斯基曾说：“儿'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《关于有益菌的问与答（上）》',
				link: 'http://www.liangyi.com/hpNews/View?id=147',
				abstract: '养育孩子不是在维护精密仪器——之宝宝听力言语发育那些事上海市第一妇婴保健院 妇幼保健部王维洁宝宝刚出生，家长设想着给宝宝最好的食物、最好'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——宝宝听力言语发育那些事》',
				link: 'http://www.liangyi.com/hpNews/View?id=140',
				abstract: '洁姐来做回“老娘舅”，说说安抚奶嘴的是与非，“用”还是“不用”，“用好”还是“不用好”？经常有祖父母问我“宝宝用了这空奶头老是吸吮，太伤精力了，会得奶痨吗？'
			}
		},{
			photo: 'http://p5.qhimg.com/t016231e81e9a3440d0.jpg',
			doctor: {
				name: '蒋蓓琦',
				link: 'http://www.liangyi.com/doctor?uid=378'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '乳腺科',
			article: {
				title: '发布《乳腺一大一小的烦恼》',
				link: 'http://www.liangyi.com/hpNews/View?id=130',
				abstract: '临床上很多女孩子对乳房的大小很在意，如果出现一大一小常常会很苦恼。一般来说，乳房大小受到先天的遗传因素和内分泌的影响为主，后天的饮食、营养、哺乳也会有些影响。在绝大多数的情况下，两侧乳房大小在青春期发育到岁以后已经定型了，而且两侧乳房'
			}
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01fb112473f5358d32.jpg',
			doctor: {
				name: '黄翼然',
				link: 'http://www.liangyi.com/doctor?uid=938'
			},
			title: '主任医师',
			hospital: '上海国际医学中心',
			section: '泌尿外科',
			article: {
				title: '发布《肾癌治疗的几个重要名词》',
				link: 'http://www.liangyi.com/hpNews/View?id=199',
				abstract: '无症状肾癌（incidental renal cellcarcinomas）：无临床症状或体征，由B超或CT检查发现的肾癌，既往称为“肾偶发癌”。局限性肾癌（localized renal cellcarcinoma）：2002年版AJCC的TNM分期中的T1-T2N0M0期肾癌'
			}
		},{
			photo: 'http://p1.qhimg.com/dm/200_200_/t0106a6141af32d14a8.jpg',
			doctor: {
				name: '张进',
				link: 'http://www.liangyi.com/doctor?uid=939'
			},
			title: '副主任医师',
			hospital: '上海国际医学中心',
			section: '泌尿外科',
			article: {
				title: '发布《晚期肾癌靶向治疗药物该如何选择？》',
				link: 'http://www.liangyi.com/hpNews/View?id=202',
				abstract: '肾细胞癌(RCC)是肾癌中最常见的类型，近年来发病呈逐步上升趋势。2014年我科收治肾脏肿瘤患者700余例。从国外研究显示，约30％患者在诊断时已出现远处转移，约40％患者术后复发转移'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——之辅食怎么加？（二）》',
				link: 'http://www.liangyi.com/hpNews/View?id=84',
				abstract: '?养育孩子不是在维护精密仪器——之辅食怎么加？（二）上海市第一妇婴保健院 妇幼保健部 王维洁周日洁姐育儿课堂又开讲啦！看似简'
			}
		},{
			photo: 'http://p7.qhimg.com/dm/200_200_/t0164ed5f2f57ec1301.jpg',
			doctor: {
				name: '黄吉炜',
				link: 'http://www.liangyi.com/doctor?uid=940'
			},
			title: '主治医师',
			hospital: '上海国际医学中心',
			section: '泌尿外科',
			article: {
				title: '发布《肾癌是如何分期的？》',
				link: 'http://www.liangyi.com/hpNews/View?id=207',
				abstract: '肾癌是如何分期的？'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——宝宝发烧了怎么办？（上）》',
				link: 'http://www.liangyi.com/hpNews/View?id=133',
				abstract: '养育孩子不是在维护精密仪器——宝宝发烧了怎么办？（上）上海市第一妇婴保健院 妇幼保健部 王维洁洁姐来聊聊'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——宝宝腹泻肿么办？》',
				link: 'http://www.liangyi.com/hpNews/View?id=142',
				abstract: '养育孩子不是在维护精密仪器——之宝宝腹泻肿么办？上海市第一妇婴保健院 妇幼保健部 王维洁宝宝拉肚子也是许'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——轮状病毒性腹泻正应季》',
				link: 'http://www.liangyi.com/hpNews/View?id=175',
				abstract: '养育孩子不是在维护精密仪器——轮状病毒性腹泻正应季上海市第一妇婴保健院 妇幼保健部王维洁这段时间洁姐的微博中好多“黄金”啊！有网友吐槽“'
			}
		},{
			photo: 'http://p2.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			article: {
				title: '发布《养育孩子不是在维护精密仪器——宝宝发烧了怎么办？（下）》',
				link: 'http://www.liangyi.com/hpNews/View?id=141',
				abstract: '养育孩子不是在维护精密仪器——之宝宝发烧了怎么办？（下）上海市第一妇婴保健院 妇幼保健部 王维洁'
			}
		}],
		//医生
		doctors: [{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01c66f52c6839957c8.jpg',
			doctor: {
				name: '刘铭',
				link: 'http://www.liangyi.com/doctor/show?uid=328'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '产科',
			skilled: '单/双胎流产和早产；双胎（双绒双胎）；一胎剖二胎顺；外倒转术'
		}, {
			photo: 'http://p4.qhimg.com/dm/200_200_/t01df526e84bca2e8c9.jpg',
			doctor: {
				name: '朱晓斌',
				link: 'http://www.liangyi.com/doctor/show?uid=373'
			},
			title: '主治医师',
			hospital: '上海瑞金医院',
			section: '生殖医学中心',
			skilled: '单/男性不育：包括无精子症，少弱精子症，不射精症以及逆行射精；性…'
		}, {
			photo: 'http://p4.qhimg.com/dm/200_200_/t019f088ca3e6d435d0.jpg',
			doctor: {
				name: '李鹤成',
				link: 'http://www.liangyi.com/doctor/show?uid=798'
			},
			title: '主任医师',
			hospital: '上海瑞金医院',
			section: '门诊胸外',
			skilled: '肺、食管、贲门、纵膈、胸膜肿瘤的微创外科治疗…'
		}, {
			photo: 'http://p4.qhimg.com/dm/200_200_/t01801d8f7261de59cc.gif',
			doctor: {
				name: '王维洁',
				link: 'http://www.liangyi.com/doctor/show?uid=318'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇幼保健部',
			skilled: '佝偻病、缺铁性贫血、营养不良、生长发育迟缓、听力障碍、中耳疾病'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01525cd4055322cab4.jpg',
			doctor: {
				name: '范宇平',
				link: 'http://www.liangyi.com/doctor/show?uid=282'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '辅助生殖科',
			skilled: '男性性功能障碍、男性不育症'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t017ad8f6497dbf6f70.jpg',
			doctor: {
				name: '沈丽萍',
				link: 'http://www.liangyi.com/doctor/show?uid=449'
			},
			title: '副主任医师',
			hospital: '上海瑞金医院',
			section: '门诊儿外',
			skilled: '小儿普外、小儿泌尿、新生儿外科、小儿腹腔镜外科、常见小儿骨科…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01a68de00752ff33f0.jpg',
			doctor: {
				name: '陈慧慧',
				link: 'http://www.liangyi.com/doctor/show?uid=301'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇科',
			skilled: '宫颈病变 子宫内膜病变 卵巢肿瘤 子宫肌瘤…'
		},{
			photo: 'http://p8.qhimg.com/dm/200_200_/t016946562dda3f1e57.jpg',
			doctor: {
				name: '陈勇辉',
				link: 'http://www.liangyi.com/doctor/show?uid=941'
			},
			title: '副主任医师',
			hospital: '上海国际医学中心',
			section: '泌尿外科',
			skilled: '肾肿瘤，肾上腺肿瘤的微创治疗，巨大肾癌及腔静脉癌栓的外科治疗'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t0132c4ace9ab548987.jpg',
			doctor: {
				name: '周木兰',
				link: 'http://www.liangyi.com/doctor/show?uid=329'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '产科',
			skilled: '孕期保健、自然分娩及剖宫产、产钳、盆腔粘连分解、合并卵巢囊肿…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01c96c0f001da9ddde.jpg',
			doctor: {
				name: '余震波',
				link: 'http://www.liangyi.com/doctor/show?uid=322'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '生殖免疫科',
			skilled: '习惯性流产、反复胚胎移植失败、不孕症、多囊卵巢综合征…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01a007f8385169f75a.jpg',
			doctor: {
				name: '李国华',
				link: 'http://www.liangyi.com/doctor/show?uid=324'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '生殖免疫科',
			skilled: '复发性流产、反复移植失败、不明原因不孕、月经失调…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t0135b9f4effc0b9c55.jpg',
			doctor: {
				name: '许传露',
				link: 'http://www.liangyi.com/doctor/show?uid=304'
			},
			title: '医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇科',
			skilled: '妊娠期甲状腺功能异常疾病、妊娠期糖尿病、宫颈机能不全、妊娠期…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01f1e72b128c62ef27.jpg',
			doctor: {
				name: '鲍时华',
				link: 'http://www.liangyi.com/doctor/show?uid=321'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '生殖免疫科',
			skilled: '复发性流产、反复自然流产、反复胚胎移植失败、反复胎停、原因不…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t0154aa4588574932e3.png',
			doctor: {
				name: '屠韡燕',
				link: 'http://www.liangyi.com/doctor/show?uid=300'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇科',
			skilled: '习惯性流产…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t0106a6141af32d14a8.jpg',
			doctor: {
				name: '张进',
				link: 'http://www.liangyi.com/doctor/show?uid=939'
			},
			title: '副主任医师',
			hospital: '上海国际医学中心',
			section: '泌尿外科',
			skilled: '肾癌（包括遗传性VHL肾癌）、肾脏错构瘤、肾上腺肿瘤、肾盂输…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t012de9aafe7d233797.jpg',
			doctor: {
				name: '杨秋蒙',
				link: 'http://www.liangyi.com/doctor/show?uid=682'
			},
			title: '副主任医师',
			hospital: '上海瑞金医院',
			section: '门诊普外',
			skilled: '胃肠道肿瘤外科综合治疗，甲状腺疾病外科治疗，普外科疾病治疗…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01c8e35150e02cf8a6.jpg',
			doctor: {
				name: '袁菲',
				link: 'http://www.liangyi.com/doctor/show?uid=674'
			},
			title: '副主任医师',
			hospital: '上海瑞金医院',
			section: '病理科',
			skilled: '乳腺及女性生殖系统、内分泌系统、消化系统和骨髓病理诊断…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01c32b200459feb2e5.jpg',
			doctor: {
				name: '管樑',
				link: 'http://www.liangyi.com/doctor/show?uid=524'
			},
			title: '主任医师',
			hospital: '上海瑞金医院',
			section: '核医学门诊',
			skilled: '碘131治疗甲亢，诊断和治疗甲减（妊娠期）、桥本、甲状腺结节…'
		},{
			photo: 'http://p7.qhimg.com/dm/200_200_/t0164ed5f2f57ec1301.jpg',
			doctor: {
				name: '黄吉炜',
				link: 'http://www.liangyi.com/doctor/show?uid=940'
			},
			title: '主治医师',
			hospital: '上海国际医学中心',
			section: '泌尿外科',
			skilled: '泌尿系肿瘤，肾盂输尿管肿瘤，肾上腺肿瘤，肾脏肿瘤'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t015714dc27748e1305.jpg',
			doctor: {
				name: '帅文',
				link: 'http://www.liangyi.com/doctor/show?uid=326'
			},
			title: '副主任医师',
			hospital: '上海市第一妇婴保健院',
			section: '生殖免疫科',
			skilled: '宫腔粘连，输卵管性不孕，子宫内膜息肉…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01b94c0552e021d2b1.jpg',
			doctor: {
				name: '曹华',
				link: 'http://www.liangyi.com/doctor/show?uid=718'
			},
			title: '副主任医师',
			hospital: '上海瑞金医院',
			section: '门诊皮肤科',
			skilled: '自身免疫性疾病如皮肌炎和硬皮病的临床和科研…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01f9dc69a303e2401a.jpg',
			doctor: {
				name: '罗志洪',
				link: 'http://www.liangyi.com/doctor/show?uid=578'
			},
			title: '副主任医师',
			hospital: '上海瑞金医院',
			section: '推拿科',
			skilled: '颈椎病、腰椎间盘突出症、肩周炎等疾病…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t018161e3a80386db7f.jpg',
			doctor: {
				name: '池丰丽',
				link: 'http://www.liangyi.com/doctor/show?uid=362'
			},
			title: '医师',
			hospital: '上海市第一妇婴保健院',
			section: '辅助生殖科',
			skilled: '不孕症、辅助生殖技术、多囊卵巢综合征…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01b68be05216d2b730.jpg',
			doctor: {
				name: '陈凯敏',
				link: 'http://www.liangyi.com/doctor/show?uid=433'
			},
			title: '副主任医师',
			hospital: '上海瑞金医院',
			section: '门诊康复科',
			skilled: '骨科康复：骨与关节损伤、及术后的康复；颈腰椎病及术后康复…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t0136ff0b4fb50ea449.jpg',
			doctor: {
				name: '张剑',
				link: 'http://www.liangyi.com/doctor/show?uid=542'
			},
			title: '副主任医师',
			hospital: '上海瑞金医院',
			section: '门诊灼伤整形',
			skilled: '各种灼伤及创伤后疤痕增生的整形康复，以及各种难治性创面的诊治…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01ce6c09ab22f82e56.jpg',
			doctor: {
				name: '蔡昌枰',
				link: 'http://www.liangyi.com/doctor/show?uid=554'
			},
			title: '主任医师',
			hospital: '上海瑞金医院',
			section: '门诊耳鼻喉科',
			skilled: '运用鼻内镜微创外科手段治疗慢性鼻窦炎和鼻息肉、鼻腔鼻窦良恶性…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01eb92c2cb21adf8fb.jpg',
			doctor: {
				name: '陈慧',
				link: 'http://www.liangyi.com/doctor/show?uid=783'
			},
			title: '主任医师',
			hospital: '上海瑞金医院',
			section: '门诊妇科',
			skilled: '妇产科疑难超声诊断、妇科肿瘤超声诊断、高危妊娠产前超声诊断…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t018760261961b87a84.jpg',
			doctor: {
				name: '吴卫泽',
				link: 'http://www.liangyi.com/doctor/show?uid=451'
			},
			title: '主任医师',
			hospital: '上海瑞金医院',
			section: '门诊普外',
			skilled: '胆结石、胰腺良恶性肿瘤、胰腺炎、肝脏良恶性肿瘤和胃肠道肿瘤的…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t017fde8acff413cbd6.jpg',
			doctor: {
				name: '洪岭',
				link: 'http://www.liangyi.com/doctor/show?uid=348'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '辅助生殖科',
			skilled: '不孕不育、试管婴儿、人工授精、子宫内膜异位症和功血、闭经、多…'
		},{
			photo: 'http://p8.qhimg.com/dm/200_200_/t01db60692fca4b756c.jpg',
			doctor: {
				name: '刘畅',
				link: 'http://www.liangyi.com/doctor/show?uid=873'
			},
			title: '医师',
			hospital: '首都医科大学附属北京儿童医院',
			section: '中医科',
			skilled: '儿童血液病、儿童恶性肿瘤、儿童心理疾病、自闭症、未成年人药物戒断…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01b2e43ebbb929dfeb.gif',
			doctor: {
				name: '邹刚',
				link: 'http://www.liangyi.com/doctor/show?uid=270'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '产科',
			skilled: '高危妊娠的处理，胎儿医学（复杂性多胎的诊治，胎儿宫内治疗，有…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t013b1e6fc9f468a237.jpg',
			doctor: {
				name: '冯晓',
				link: 'http://www.liangyi.com/doctor/show?uid=281'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇科',
			skilled: '不孕症、子宫脱垂、尿失禁、子宫肌瘤、卵巢囊肿…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t0188daad7b8792f7d1.jpg',
			doctor: {
				name: '杜梦阳',
				link: 'http://www.liangyi.com/doctor/show?uid=302'
			},
			title: '医师',
			hospital: '上海市第一妇婴保健院',
			section: '妇科',
			skilled: '各种阴道炎，子宫肌瘤， 卵巢囊肿，子宫内膜异位症，习惯性流产…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t018f255122f5e2b6d3.jpg',
			doctor: {
				name: '李亚芬',
				link: 'http://www.liangyi.com/doctor/show?uid=457'
			},
			title: '主任医师',
			hospital: '上海瑞金医院',
			section: '门诊乳腺疾病诊治中心',
			skilled: '乳房外科…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01c38d79d159b980d0.jpg',
			doctor: {
				name: '蔡凯愉',
				link: 'http://www.liangyi.com/doctor/show?uid=670'
			},
			title: '副主任医师',
			hospital: '上海瑞金医院',
			section: '门诊高血压',
			skilled: '高血压合并心脏病及糖尿病的诊治…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01bcf3283df5005d2d.jpg',
			doctor: {
				name: '施咏梅',
				link: 'http://www.liangyi.com/doctor/show?uid=621'
			},
			title: '副主任医师',
			hospital: '上海瑞金医院',
			section: '营养门诊',
			skilled: '成人肾脏病、炎症性肠病、糖尿病等疾病的营养治疗；肿瘤围手术…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01e6ce06eeb7387768.jpg',
			doctor: {
				name: '费健',
				link: 'http://www.liangyi.com/doctor/show?uid=665'
			},
			title: '副主任医师',
			hospital: '上海瑞金医院',
			section: '门诊普外',
			skilled: '胆道、胰腺、甲状腺疾病及体表肿瘤的外科诊治，包括甲状腺良恶性…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01f3a2695a683f8bfe.jpg',
			doctor: {
				name: '朱盈',
				link: 'http://www.liangyi.com/doctor/show?uid=323'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '生殖免疫科',
			skilled: '…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01514e8a52b3012674.jpg',
			doctor: {
				name: '蒋湘',
				link: 'http://www.liangyi.com/doctor/show?uid=332'
			},
			title: '主治医师',
			hospital: '上海市第一妇婴保健院',
			section: '产科',
			skilled: '…'
		},{
			photo: 'http://p4.qhimg.com/dm/200_200_/t01c1fa521e67ae5473.jpg',
			doctor: {
				name: '唐慧婷',
				link: 'http://www.liangyi.com/doctor/show?uid=315'
			},
			title: '护师',
			hospital: '上海市第一妇婴保健院',
			section: '生殖免疫科',
			skilled: '…'
		}],
		//百科
		wiki: [{
			dept: '产科',
			name: '池丰丽',
			doctorLink: 'http://www.liangyi.com/doctor?uid=362',
			word: '黄体支持',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19715'
		}, {
			dept: '产科',
			name: '董玲玲',
			doctorLink: 'http://www.liangyi.com/doctor?uid=333',
			word: '脐带绕颈',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19651'
		}, {
			dept: '产科',
			name: '葛玉纯',
			doctorLink: 'http://www.liangyi.com/doctor?uid=343',
			word: '胎膜早破',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19386'
		}, {
			dept: '产科',
			name: '蒋湘',
			doctorLink: 'http://www.liangyi.com/doctor?uid=332',
			word: '剖宫产术',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19649'
		}, {
			dept: '产科',
			name: '李瑜',
			doctorLink: 'http://www.liangyi.com/doctor?uid=305',
			word: '输卵管妊娠',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19396'
		}, {
			dept: '产科',
			name: '刘铭',
			doctorLink: 'http://www.liangyi.com/doctor?uid=328',
			word: '早产',
			wordLink: 'http://www.liangyi.com/entry/view?eid=13491'
		}, {
			dept: '产科',
			name: '刘文强',
			doctorLink: 'http://www.liangyi.com/doctor?uid=366',
			word: '卵子体外成熟',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19671'
		}, {
			dept: '产科',
			name: '孟珍妮',
			doctorLink: 'http://www.liangyi.com/doctor?uid=306',
			word: '妊娠期急性脂肪肝',
			wordLink: 'http://www.liangyi.com/entry/view?eid=13888'
		}, {
			dept: '产科',
			name: '王蓓颖',
			doctorLink: 'http://www.liangyi.com/doctor?uid=380',
			word: '瘢痕妊娠',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19690'
		},
		{
			dept: '生殖',
			name: '胡烨',
			doctorLink: 'http://www.liangyi.com/doctor?uid=351',
			word: '囊胚培养',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19668'
		},{
			dept: '生殖',
			name: '梁珊珊',
			doctorLink: 'http://www.liangyi.com/doctor?uid=350',
			word: '单精子卵胞浆内注射',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19678'
		}, {
			dept: '生殖',
			name: '潘家坪',
			doctorLink: 'http://www.liangyi.com/doctor?uid=353',
			word: '冷冻胚胎移植',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19669'
		}, {
			dept: '生殖',
			name: '阮井玲',
			doctorLink: 'http://www.liangyi.com/doctor?uid=355',
			word: '全胚冷冻',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19718'
		}, {
			dept: '生殖',
			name: '孙丽娟',
			doctorLink: 'http://www.liangyi.com/doctor?uid=354',
			word: '卵泡监测',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19673'
		}, {
			dept: '生殖',
			name: '唐传玲',
			doctorLink: 'http://www.liangyi.com/doctor?uid=360',
			word: '反复种植失败',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19663'
		}, {
			dept: '生殖',
			name: '王羽',
			doctorLink: 'http://www.liangyi.com/doctor?uid=352',
			word: '辅助孵化',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19667'
		}, {
			dept: '生殖',
			name: '杨昊',
			doctorLink: 'http://www.liangyi.com/doctor?uid=364',
			word: '精子DNA碎片率',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19675'
		}, {
			dept: '生殖',
			name: '赵美',
			doctorLink: 'http://www.liangyi.com/doctor?uid=361',
			word: '取卵',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19723'
		},
		{
			dept: '妇科',
			name: '鲍时华',
			doctorLink: 'http://www.liangyi.com/doctor?uid=321',
			word: '反复性流产',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19609'
		}, {
			dept: '妇科',
			name: '陈慧慧',
			doctorLink: 'http://www.liangyi.com/doctor?uid=301',
			word: '宫颈腺癌',
			wordLink: 'http://www.liangyi.com/entry/view?eid=14219'
		}, {
			dept: '妇科',
			name: '杜梦阳',
			doctorLink: 'http://www.liangyi.com/doctor?uid=302',
			word: '恶性葡萄胎',
			wordLink: 'http://www.liangyi.com/entry/view?eid=14082'
		}, {
			dept: '妇科',
			name: '冯晓',
			doctorLink: 'http://www.liangyi.com/doctor?uid=281',
			word: '闭经',
			wordLink: 'http://www.liangyi.com/entry/view?eid=13087'
		}, {
			dept: '妇科',
			name: '胡晓辉',
			doctorLink: 'http://www.liangyi.com/doctor?uid=334',
			word: '前庭大腺炎',
			wordLink: 'http://www.liangyi.com/entry/view?eid=13754'
		}, {
			dept: '妇科',
			name: '蒋蓓琪',
			doctorLink: 'http://www.liangyi.com/doctor?uid=378',
			word: '乳房自我检查',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19429'
		}, {
			dept: '妇科',
			name: '李瑜',
			doctorLink: 'http://www.liangyi.com/doctor?uid=305',
			word: '子宫肌瘤',
			wordLink: 'http://www.liangyi.com/entry/view?eid=12851'
		}, {
			dept: '妇科',
			name: '屠韡燕',
			doctorLink: 'http://www.liangyi.com/doctor?uid=300',
			word: '霉菌性外阴炎',
			wordLink: 'http://www.liangyi.com/entry/view?eid=13462'
		}, {
			dept: '妇科',
			name: '冯晓',
			doctorLink: 'http://www.liangyi.com/doctor?uid=281',
			word: '功血',
			wordLink: 'http://www.liangyi.com/entry/view?eid=13057'
		}, {
			dept: '计生',
			name: '王蓓颖',
			doctorLink: 'http://www.liangyi.com/doctor?uid=380',
			word: '药物流产',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19414'
		}, {
			dept: '计生',
			name: '王蓓颖',
			doctorLink: 'http://www.liangyi.com/doctor?uid=380',
			word: '紧急避孕',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19410'
		}, {
			dept: '计生',
			name: '王蓓颖',
			doctorLink: 'http://www.liangyi.com/doctor?uid=380',
			word: '人工流产',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19411'
		}, {
			dept: '计生',
			name: '王蓓颖',
			doctorLink: 'http://www.liangyi.com/doctor?uid=380',
			word: '药物避孕',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19413'
		}, {
			dept: '计生',
			name: '庄文珂',
			doctorLink: 'http://www.liangyi.com/doctor?uid=370',
			word: '稽留流产',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19705'
		}, {
			dept: '计生',
			name: '庄文珂',
			doctorLink: 'http://www.liangyi.com/doctor?uid=370',
			word: '高危人流术',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19704'
		}, {
			dept: '计生',
			name: '庄文珂',
			doctorLink: 'http://www.liangyi.com/doctor?uid=370',
			word: '宫内节育环异位',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19696'
		}, {
			dept: '计生',
			name: '庄文珂',
			doctorLink: 'http://www.liangyi.com/doctor?uid=370',
			word: '皮下埋植',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19701'
		}, {
			dept: '计生',
			name: '庄文珂',
			doctorLink: 'http://www.liangyi.com/doctor?uid=370',
			word: 'IUD(宫内节育器)',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19408'
		}, {
			dept: '新生儿',
			name: '胡雪峰',
			doctorLink: 'http://www.liangyi.com/doctor?uid=287',
			word: '新生儿窒息',
			wordLink: 'http://www.liangyi.com/entry/view?eid=13751'
		}, {
			dept: '新生儿',
			name: '华海燕',
			doctorLink: 'http://www.liangyi.com/doctor?uid=312',
			word: '新生儿红斑',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19482'
		}, {
			dept: '新生儿',
			name: '黄丹',
			doctorLink: 'http://www.liangyi.com/doctor?uid=317',
			word: '鹅口疮',
			wordLink: 'http://www.liangyi.com/entry/view?eid=13030'
		}, {
			dept: '新生儿',
			name: '刘江勤',
			doctorLink: 'http://www.liangyi.com/doctor?uid=250',
			word: '早产儿',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19452'
		}, {
			dept: '新生儿',
			name: '彭敏',
			doctorLink: 'http://www.liangyi.com/doctor?uid=292',
			word: '新生儿气胸',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19457'
		}, {
			dept: '新生儿',
			name: '陶芳芳',
			doctorLink: 'http://www.liangyi.com/doctor?uid=285',
			word: '支气管肺隔离症',
			wordLink: 'http://www.liangyi.com/entry/view?eid=18832'
		}, {
			dept: '新生儿',
			name: '邬方彦',
			doctorLink: 'http://www.liangyi.com/doctor?uid=307',
			word: '新生儿出血病',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19461'
		}, {
			dept: '新生儿',
			name: '肖玲莉',
			doctorLink: 'http://www.liangyi.com/doctor?uid=386',
			word: '新生儿尿布皮炎',
			wordLink: 'http://www.liangyi.com/entry/view?eid=15307'
		}, {
			dept: '新生儿',
			name: '印学蕾',
			doctorLink: 'http://www.liangyi.com/doctor?uid=310',
			word: '新生儿呼吸暂停',
			wordLink: 'http://www.liangyi.com/entry/view?eid=14328'
		},{
			dept: '泌尿外',
			name: '黄翼然',
			doctorLink: 'http://www.liangyi.com/doctor?uid=938',
			word: '肾癌',
			wordLink: 'http://www.liangyi.com/entry/view?eid=13205'
		},{
			dept: '泌尿外',
			name: '黄翼然',
			doctorLink: 'http://www.liangyi.com/doctor?uid=938',
			word: '肾脏肿瘤球冠状切除术',
			wordLink: 'http://www.liangyi.com/entry/view?eid=26465'
		},{
			dept: '泌尿外',
			name: '陈勇辉',
			doctorLink: 'http://www.liangyi.com/doctor?uid=941',
			word: '深低温停循环辅助下肾癌切除并腔静脉瘤栓取出术',
			wordLink: 'http://www.liangyi.com/entry/view?eid=26461'
		},{
			dept: '泌尿外',
			name: '陈勇辉',
			doctorLink: 'http://www.liangyi.com/doctor?uid=941',
			word: '腹腔镜',
			wordLink: 'http://www.liangyi.com/entry/view?eid=26462'
		},{
			dept: '泌尿外',
			name: '张进',
			doctorLink: 'http://www.liangyi.com/doctor?uid=939',
			word: '腹腔镜微创手术',
			wordLink: 'http://www.liangyi.com/entry/view?eid=26463'
		},{
			dept: '泌尿外',
			name: '张进',
			doctorLink: 'http://www.liangyi.com/doctor?uid=939',
			word: '小肾癌',
			wordLink: 'http://www.liangyi.com/entry/view?eid=26458'
		},{
			dept: '泌尿外',
			name: '黄吉炜',
			doctorLink: 'http://www.liangyi.com/doctor?uid=940',
			word: '零缺血腹腔镜消融辅助肾脏部分切除术',
			wordLink: 'http://www.liangyi.com/entry/view?eid=26464'
		},{
			dept: '泌尿外',
			name: '黄吉炜',
			doctorLink: 'http://www.liangyi.com/doctor?uid=940',
			word: '腹腔镜肾脏肿瘤射频消融术',
			wordLink: 'http://www.liangyi.com/entry/view?eid=26460'
		},{
			dept: '泌尿外',
			name: '黄吉炜',
			doctorLink: 'http://www.liangyi.com/doctor?uid=940',
			word: '肾脏肿瘤',
			wordLink: 'http://www.liangyi.com/entry/view?eid=26459'
		},{
			dept: '其他',
			name: '刘江勤',
			doctorLink: 'http://www.liangyi.com/doctor?uid=250',
			word: '发育护理',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19486'
		},{
			dept: '其他',
			name: '朱庆庆',
			doctorLink: 'http://www.liangyi.com/doctor?uid=269',
			word: '髋关节发育不良',
			wordLink: 'http://www.liangyi.com/entry/view?eid=19502'
		},{
			dept: '其他',
			name: '陈晓蓉',
			doctorLink: 'http://www.liangyi.com/doctor?uid=902',
			word: '肝癌',
			wordLink: 'http://www.liangyi.com/entry/view?eid=12923'
		},{
			dept: '其他',
			name: '陈晓蓉',
			doctorLink: 'http://www.liangyi.com/doctor?uid=902',
			word: '慢性肝炎',
			wordLink: 'http://www.liangyi.com/entry/view?eid=13369'
		},{
			dept: '其他',
			name: '陈晓蓉',
			doctorLink: 'http://www.liangyi.com/doctor?uid=902',
			word: '胆汁性肝硬化',
			wordLink: 'http://www.liangyi.com/entry/view?eid=13145'
		},{
			dept: '其他',
			name: '陈晓蓉',
			doctorLink: 'http://www.liangyi.com/doctor?uid=902',
			word: '淤胆型肝炎',
			wordLink: 'http://www.liangyi.com/entry/view?eid=14280'
		},{
			dept: '其他',
			name: '陈晓蓉',
			doctorLink: 'http://www.liangyi.com/doctor?uid=902',
			word: '病毒性肝炎',
			wordLink: 'http://www.liangyi.com/entry/view?eid=12978'
		},{
			dept: '其他',
			name: '吴坚炯',
			doctorLink: 'http://www.liangyi.com/doctor?uid=901',
			word: '克罗恩病',
			wordLink: 'http://www.liangyi.com/entry/view?eid=13193'
		},{
			dept: '其他',
			name: '吴坚炯',
			doctorLink: 'http://www.liangyi.com/doctor?uid=901',
			word: '炎症性肠病',
			wordLink: 'http://www.liangyi.com/entry/view?eid=26456'
		}]
	};

	return indexData;
});