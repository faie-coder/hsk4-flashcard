const sampleArticles=[
  {id:1,range:"1-300",title:"我的家庭",pinyin:"Wǒ de jiātíng",desc:"บทความเกี่ยวกับครอบครัว",content:[
    {zh:"我有一个大家庭。",pinyin:"Wǒ yǒu yí gè dà jiātíng.",th:"ฉันมีครอบครัวใหญ่"},
    {zh:"爸爸是老师，妈妈爱干净。",pinyin:"Bàba shì lǎoshī, māma ài gānjìng.",th:"พ่อเป็นครู แม่รักความสะอาด"},
    {zh:"弟弟聪明，哥哥很高。",pinyin:"Dìdi cōngming, gēge hěn gāo.",th:"น้องชายฉลาด พี่ชายสูงมาก"},
    {zh:"阿姨常常来帮忙。",pinyin:"Āyí chángcháng lái bāngmáng.",th:"ป้ามักมาช่วยเหลือบ่อยๆ"},
    {zh:"我们爱这个家。",pinyin:"Wǒmen ài zhège jiā.",th:"เรารักบ้านหลังนี้"}
  ]},
  {id:2,range:"1-300",title:"学校生活",pinyin:"Xuéxiào shēnghuó",desc:"บทความเกี่ยวกับชีวิตในโรงเรียน",content:[
    {zh:"我在大学学习汉语。",pinyin:"Wǒ zài dàxué xuéxí Hànyǔ.",th:"ฉันเรียนภาษาจีนที่มหาวิทยาลัย"},
    {zh:"图书馆安静，适合读书。",pinyin:"Túshūguǎn ānjìng, shìhé dúshū.",th:"ห้องสมุดเงียบสงบ เหมาะกับการอ่านหนังสือ"},
    {zh:"老师按时间安排课程。",pinyin:"Lǎoshī àn shíjiān ānpái kèchéng.",th:"ครูจัดตารางเรียนตามเวลา"},
    {zh:"同学们都很努力。",pinyin:"Tóngxuémen dōu hěn nǔlì.",th:"เพื่อนร่วมชั้นเรียนตั้งใจเรียนกันทุกคน"},
    {zh:"八点钟开始上课。",pinyin:"Bā diǎn zhōng kāishǐ shàngkè.",th:"แปดโมงเริ่มเรียน"}
  ]},
  {id:3,range:"1-300",title:"去中国旅行",pinyin:"Qù Zhōngguó lǚxíng",desc:"บทความเกี่ยวกับการเดินทางไปจีน",content:[
    {zh:"我打算去北京旅行。",pinyin:"Wǒ dǎsuàn qù Běijīng lǚxíng.",th:"ฉันตั้งใจไปเที่ยวปักกิ่ง"},
    {zh:"坐飞机比较方便。",pinyin:"Zuò fēijī bǐjiào fāngbiàn.",th:"นั่งเครื่องบินสะดวกกว่า"},
    {zh:"到机场后可以坐地铁。",pinyin:"Dào jīchǎng hòu kěyǐ zuò dìtiě.",th:"ถึงสนามบินแล้วสามารถนั่งรถไฟฟ้าได้"},
    {zh:"地图会帮助我找到路。",pinyin:"Dìtú huì bāngzhù wǒ zhǎodào lù.",th:"แผนที่จะช่วยฉันหาทาง"},
    {zh:"这次旅行一定很有意思。",pinyin:"Zhè cì lǚxíng yídìng hěn yǒu yìsi.",th:"การเดินทางครั้งนี้คงสนุกแน่"}
  ]},
  {id:4,range:"1-300",title:"我的爱好",pinyin:"Wǒ de àihào",desc:"บทความเกี่ยวกับงานอดิเรก",content:[
    {zh:"我的爱好是打篮球。",pinyin:"Wǒ de àihào shì dǎ lánqiú.",th:"งานอดิเรกของฉันคือเล่นบาสเกตบอล"},
    {zh:"我也喜欢唱歌和看电视。",pinyin:"Wǒ yě xǐhuan chànggē hé kàn diànshì.",th:"ฉันก็ชอบร้องเพลงและดูโทรทัศน์ด้วย"},
    {zh:"周末常常锻炼两个小时。",pinyin:"Zhōumò chángcháng duànliàn liǎng ge xiǎoshí.",th:"วันหยุดสุดสัปดาห์มักออกกำลังกายสองชั่วโมง"},
    {zh:"运动对身体很好。",pinyin:"Yùndòng duì shēntǐ hěn hǎo.",th:"การออกกำลังกายดีต่อสุขภาพ"},
    {zh:"保持爱好让生活更有趣。",pinyin:"Bǎochí àihào ràng shēnghuó gèng yǒuqù.",th:"รักษางานอดิเรกทำให้ชีวิตสนุกขึ้น"}
  ]},
  {id:5,range:"1-300",title:"工作环境",pinyin:"Gōngzuò huánjìng",desc:"บทความเกี่ยวกับสภาพแวดล้อมการทำงาน",content:[
    {zh:"我在一家公司工作。",pinyin:"Wǒ zài yì jiā gōngsī gōngzuò.",th:"ฉันทำงานในบริษัทแห่งหนึ่ง"},
    {zh:"办公室安静，大家工作认真。",pinyin:"Bàngōngshì ānjìng, dàjiā gōngzuò rènzhēn.",th:"ห้องทำงานเงียบสงบ ทุกคนทำงานอย่างตั้งใจ"},
    {zh:"电脑帮助我做很多工作。",pinyin:"Diànnǎo bāngzhù wǒ zuò hěn duō gōngzuò.",th:"คอมพิวเตอร์ช่วยฉันทำงานมากมาย"},
    {zh:"电子邮件让沟通更方便。",pinyin:"Diànzǐ yóujiàn ràng gōutōng gèng fāngbiàn.",th:"อีเมลทำให้ติดต่อสื่อสารสะดวกขึ้น"},
    {zh:"按时上班，按时下班。",pinyin:"Àn shí shàngbān, àn shí xiàbān.",th:"เข้างานตรงเวลา เลิกงานตรงเวลา"}
  ]},
  {id:6,range:"1-300",title:"健康习惯",pinyin:"Jiànkāng xíguàn",desc:"บทความเกี่ยวกับนิสัยสุขภาพ",content:[
    {zh:"健康很重要，我们要保护身体。",pinyin:"Jiànkāng hěn zhòngyào, wǒmen yào bǎohù shēntǐ.",th:"สุขภาพสำคัญมาก เราต้องปกป้องร่างกาย"},
    {zh:"每天锻炼一小时。",pinyin:"Měitiān duànliàn yì xiǎoshí.",th:"ออกกำลังกายวันละหนึ่งชั่วโมง"},
    {zh:"多吃水果，少吃肉。",pinyin:"Duō chī shuǐguǒ, shǎo chī ròu.",th:"กินผลไม้มาก กินเนื้อน้อย"},
    {zh:"按时睡觉对身体好。",pinyin:"Àn shí shuìjiào duì shēntǐ hǎo.",th:"นอนตรงเวลาดีต่อสุขภาพ"},
    {zh:"抽烟有害健康。",pinyin:"Chōuyān yǒuhài jiànkāng.",th:"การสูบบุหรี่เป็นอันตรายต่อสุขภาพ"}
  ]},
  {id:7,range:"1-300",title:"购物经验",pinyin:"Gòuwù jīngyàn",desc:"บทความเกี่ยวกับประสบการณ์ช็อปปิ้ง",content:[
    {zh:"昨天我去超市买东西。",pinyin:"Zuótiān wǒ qù chāoshì mǎi dōngxi.",th:"เมื่อวานฉันไปซื้อของที่ซูเปอร์มาร์เก็ต"},
    {zh:"东西很多，价格也便宜。",pinyin:"Dōngxi hěn duō, jiàgé yě piányi.",th:"ของเยอะมาก ราคาก็ถูกด้วย"},
    {zh:"用银行卡付钱很方便。",pinyin:"Yòng yínhángkǎ fù qián hěn fāngbiàn.",th:"ใช้บัตรธนาคารจ่ายเงินสะดวกมาก"},
    {zh:"超过一百块可以打折。",pinyin:"Chāoguò yì bǎi kuài kěyǐ dǎzhé.",th:"เกินหนึ่งร้อยหยวนลดราคาได้"},
    {zh:"买了很多东西回家。",pinyin:"Mǎi le hěn duō dōngxi huí jiā.",th:"ซื้อของเยอะมากกลับบ้าน"}
  ]},
  {id:8,range:"1-300",title:"我的城市",pinyin:"Wǒ de chéngshì",desc:"บทความเกี่ยวกับเมืองของฉัน",content:[
    {zh:"我住在一个大城市。",pinyin:"Wǒ zhù zài yí gè dà chéngshì.",th:"ฉันอาศัยอยู่ในเมืองใหญ่"},
    {zh:"这里到处都有地铁。",pinyin:"Zhèlǐ dàochù dōu yǒu dìtiě.",th:"ที่นี่ทุกที่มีรถไฟฟ้าใต้ดิน"},
    {zh:"出租车很方便，但是常常堵车。",pinyin:"Chūzūchē hěn fāngbiàn, dànshì chángcháng dǔchē.",th:"แท็กซี่สะดวก แต่มักรถติดบ่อยๆ"},
    {zh:"春天很漂亮，到处开花。",pinyin:"Chūntiān hěn piàoliang, dàochù kāihuā.",th:"ฤดูใบไม้ผลิสวยงาม ดอกไม้บานทุกที่"},
    {zh:"我爱这个城市。",pinyin:"Wǒ ài zhège chéngshì.",th:"ฉันรักเมืองนี้"}
  ]},
  {id:9,range:"1-300",title:"餐厅经历",pinyin:"Cāntīng jīnglì",desc:"บทความเกี่ยวกับประสบการณ์ในร้านอาหาร",content:[
    {zh:"我和朋友去餐厅吃饭。",pinyin:"Wǒ hé péngyou qù cāntīng chīfàn.",th:"ฉันไปกินข้าวที่ร้านอาหารกับเพื่อน"},
    {zh:"服务员安排我们坐在窗户旁边。",pinyin:"Fúwùyuán ānpái wǒmen zuò zài chuānghu pángbiān.",th:"พนักงานเสิร์ฟจัดให้เรานั่งข้างหน้าต่าง"},
    {zh:"我们点了鸡蛋、面条和啤酒。",pinyin:"Wǒmen diǎn le jīdàn, miàntiáo hé píjiǔ.",th:"เราสั่งไข่ บะหมี่ และเบียร์"},
    {zh:"菜的味道很好。",pinyin:"Cài de wèidao hěn hǎo.",th:"รสชาติอาหารดีมาก"},
    {zh:"吃完饭，我们打算去看电影。",pinyin:"Chī wán fàn, wǒmen dǎsuàn qù kàn diànyǐng.",th:"กินข้าวเสร็จ เราตั้งใจจะไปดูหนัง"}
  ]},
  {id:10,range:"1-300",title:"一次聚会",pinyin:"Yí cì jùhuì",desc:"บทความเกี่ยวกับงานเลี้ยงสังสรรค์",content:[
    {zh:"昨天朋友请我去他家。",pinyin:"Zuótiān péngyou qǐng wǒ qù tā jiā.",th:"เมื่อวานเพื่อนเชิญฉันไปบ้านเขา"},
    {zh:"很多人来参加聚会。",pinyin:"Hěn duō rén lái cānjiā jùhuì.",th:"คนเยอะมากมาร่วมงานเลี้ยง"},
    {zh:"大家唱歌、跳舞、喝啤酒。",pinyin:"Dàjiā chànggē, tiàowǔ, hē píjiǔ.",th:"ทุกคนร้องเพลง เต้นรำ ดื่มเบียร์"},
    {zh:"晚上十点钟我们才离开。",pinyin:"Wǎnshang shí diǎn zhōng wǒmen cái líkāi.",th:"สามทุ่มเราถึงจากไป"},
    {zh:"这次聚会很有意思。",pinyin:"Zhè cì jùhuì hěn yǒu yìsi.",th:"งานเลี้ยงครั้งนี้สนุกมาก"}
  ]},
  {id:11,range:"1-300",title:"学习方法",pinyin:"Xuéxí fāngfǎ",desc:"บทความเกี่ยวกับวิธีการเรียน",content:[
    {zh:"学习汉语需要好方法。",pinyin:"Xuéxí Hànyǔ xūyào hǎo fāngfǎ.",th:"การเรียนภาษาจีนต้องใช้วิธีที่ดี"},
    {zh:"每天用词典查生词。",pinyin:"Měitiān yòng cídiǎn chá shēngcí.",th:"ใช้พจนานุกรมหาคำใหม่ทุกวัน"},
    {zh:"练习对话可以提高口语。",pinyin:"Liànxí duìhuà kěyǐ tígāo kǒuyǔ.",th:"ฝึกบทสนทนาช่วยพัฒนาภาษาพูด"},
    {zh:"读书和看报纸都重要。",pinyin:"Dúshū hé kàn bàozhǐ dōu zhòngyào.",th:"อ่านหนังสือและหนังสือพิมพ์สำคัญทั้งคู่"},
    {zh:"成绩一定会提高。",pinyin:"Chéngjì yídìng huì tígāo.",th:"ผลการเรียนจะต้องดีขึ้น"}
  ]},
  {id:12,range:"1-300",title:"看病经历",pinyin:"Kànbìng jīnglì",desc:"บทความเกี่ยวกับประสบการณ์ไปหาหมอ",content:[
    {zh:"昨天我肚子疼，去医院看大夫。",pinyin:"Zuótiān wǒ dùzi téng, qù yīyuàn kàn dàifu.",th:"เมื่อวานฉันปวดท้อง ไปโรงพยาบาลหาหมอ"},
    {zh:"医生给我检查身体。",pinyin:"Yīshēng gěi wǒ jiǎnchá shēntǐ.",th:"หมอตรวจร่างกายให้ฉัน"},
    {zh:"他说我需要打针。",pinyin:"Tā shuō wǒ xūyào dǎzhēn.",th:"เขาบอกว่าฉันต้องฉีดยา"},
    {zh:"然后给我一些药。",pinyin:"Ránhòu gěi wǒ yìxiē yào.",th:"แล้วให้ยาฉันบ้าง"},
    {zh:"现在好多了。",pinyin:"Xiànzài hǎo duō le.",th:"ตอนนี้ดีขึ้นมากแล้ว"}
  ]},
  {id:13,range:"1-300",title:"周末计划",pinyin:"Zhōumò jìhuà",desc:"บทความเกี่ยวกับแผนสุดสัปดาห์",content:[
    {zh:"这个周末我打算去爬山。",pinyin:"Zhège zhōumò wǒ dǎsuàn qù páshān.",th:"สุดสัปดาห์นี้ฉันตั้งใจจะไปปีนเขา"},
    {zh:"天气很好，适合运动。",pinyin:"Tiānqì hěn hǎo, shìhé yùndòng.",th:"อากาศดี เหมาะกับการออกกำลังกาย"},
    {zh:"准备一些水和面包。",pinyin:"Zhǔnbèi yìxiē shuǐ hé miànbāo.",th:"เตรียมน้ำและขนมปังบ้าง"},
    {zh:"早上八点钟出发。",pinyin:"Zǎoshang bā diǎn zhōng chūfā.",th:"เช้าแปดโมงออกเดินทาง"},
    {zh:"大约下午四点回来。",pinyin:"Dàyuē xiàwǔ sì diǎn huílai.",th:"ประมาณบ่ายสี่กลับมา"}
  ]},
  {id:14,range:"1-300",title:"我的家乡",pinyin:"Wǒ de jiāxiāng",desc:"บทความเกี่ยวกับบ้านเกิด",content:[
    {zh:"我的家乡在东边的一个小城。",pinyin:"Wǒ de jiāxiāng zài dōngbian de yí gè xiǎo chéng.",th:"บ้านเกิดของฉันอยู่ทางตะวันออกของเมืองเล็ก"},
    {zh:"那里很安静，环境很好。",pinyin:"Nàlǐ hěn ānjìng, huánjìng hěn hǎo.",th:"ที่นั่นเงียบสงบ สภาพแวดล้อมดี"},
    {zh:"春天开花，秋天结果。",pinyin:"Chūntiān kāihuā, qiūtiān jiéguǒ.",th:"ฤดูใบไม้ผลิดอกไม้บาน ฤดูใบไม้ร่วงผลิดอกออกผล"},
    {zh:"大家都很友好。",pinyin:"Dàjiā dōu hěn yǒuhǎo.",th:"ทุกคนเป็นมิตรกันดี"},
    {zh:"我很想念那里。",pinyin:"Wǒ hěn xiǎngniàn nàlǐ.",th:"ฉันคิดถึงที่นั่นมาก"}
  ]},
  {id:15,range:"1-300",title:"找工作",pinyin:"Zhǎo gōngzuò",desc:"บทความเกี่ยวกับการหางาน",content:[
    {zh:"大学毕业���，我开始找工作。",pinyin:"Dàxué bìyè hòu, wǒ kāishǐ zhǎo gōngzuò.",th:"จบมหาวิทยาลัยแล้ว ฉันเริ่มหางาน"},
    {zh:"在网上看了很多招聘信息。",pinyin:"Zài wǎngshang kàn le hěn duō zhāopìn xìnxī.",th:"ดูข้อมูลรับสมัครงานมากมายบนเน็ต"},
    {zh:"给几家公司发了电子邮件。",pinyin:"Gěi jǐ jiā gōngsī fā le diànzǐ yóujiàn.",th:"ส่งอีเมลไปหลายบริษัท"},
    {zh:"参加了一些面试。",pinyin:"Cānjiā le yìxiē miànshì.",th:"เข้าร่วมสัมภาษณ์งานบ้าง"},
    {zh:"终于找到合适的工作。",pinyin:"Zhōngyú zhǎodào héshì de gōngzuò.",th:"ในที่สุดก็หางานที่เหมาะสมได้"}
  ]},
  {id:16,range:"1-300",title:"一次误会",pinyin:"Yí cì wùhuì",desc:"บทความเกี่ยวกับความเข้าใจผิดครั้งหนึ่ง",content:[
    {zh:"昨天我和朋友发生了一点误会。",pinyin:"Zuótiān wǒ hé péngyou fāshēng le yìdiǎn wùhuì.",th:"เมื่อวานฉันกับเพื่อนมีความเข้าใจผิดเล็กน้อย"},
    {zh:"我以为他忘记了约定。",pinyin:"Wǒ yǐwéi tā wàngjì le yuēdìng.",th:"ฉันคิดว่าเขาลืมนัด"},
    {zh:"结果他只是迟到了。",pinyin:"Jiéguǒ tā zhǐshì chídào le.",th:"ผลคือเขาแค่มาสาย"},
    {zh:"后来我向他道歉。",pinyin:"Hòulái wǒ xiàng tā dàoqiàn.",th:"หลังจากนั้นฉันขอโทษเขา"},
    {zh:"我们再次成为好朋友。",pinyin:"Wǒmen zàicì chéngwéi hǎo péngyou.",th:"เรากลายเป็นเพื่อนดีกันอีกครั้ง"}
  ]},
  {id:17,range:"1-300",title:"天气变化",pinyin:"Tiānqì biànhuà",desc:"บทความเกี่ยวกับการเปลี่ยนแปลงอากาศ",content:[
    {zh:"最近天气变化很大。",pinyin:"Zuìjìn tiānqì biànhuà hěn dà.",th:"ช่วงนี้อากาศเปลี่ยนแปลงมาก"},
    {zh:"早上还比较冷。",pinyin:"Zǎoshang hái bǐjiào lěng.",th:"ตอนเช้ายังค่อนข้างหนาว"},
    {zh:"中午就很热了。",pinyin:"Zhōngwǔ jiù hěn rè le.",th:"เที่ยงวันก็ร้อนแล้ว"},
    {zh:"有时候突然下雨。",pinyin:"Yǒu shíhou tūrán xiàyǔ.",th:"บางครั้งฝนตกกระทันหัน"},
    {zh:"大家要记得带伞。",pinyin:"Dàjiā yào jìde dài sǎn.",th:"ทุกคนอย่าลืมพกร่ม"}
  ]},
  {id:18,range:"1-300",title:"使用电梯",pinyin:"Shǐyòng diàntī",desc:"บทความเกี่ยวกับการใช้ลิฟต์",content:[
    {zh:"我在二十楼工作。",pinyin:"Wǒ zài èrshí lóu gōngzuò.",th:"ฉันทำงานชั้นยี่สิบ"},
    {zh:"每天坐电梯上下。",pinyin:"Měitiān zuò diàntī shàngxià.",th:"นั่งลิฟต์ขึ้นลงทุกวัน"},
    {zh:"早上八点钟电梯很忙。",pinyin:"Zǎoshang bā diǎn zhōng diàntī hěn máng.",th:"เช้าแปดโมงลิฟต์ยุ่งมาก"},
    {zh:"有时候需要等几分钟。",pinyin:"Yǒu shíhou xūyào děng jǐ fēnzhōng.",th:"บางครั้งต้องรอสักสองสามนาที"},
    {zh:"电梯里很安静。",pinyin:"Diàntī lǐ hěn ānjìng.",th:"ในลิฟต์เงียบมาก"}
  ]},
  {id:19,range:"1-300",title:"动物园",pinyin:"Dòngwùyuán",desc:"บทความเกี่ยวกับสวนสัตว์",content:[
    {zh:"周末我和弟弟去动物园。",pinyin:"Zhōumò wǒ hé dìdi qù dòngwùyuán.",th:"สุดสัปดาห์ฉันกับน้องชายไปสวนสัตว์"},
    {zh:"那里有很多动物。",pinyin:"Nàlǐ yǒu hěn duō dòngwù.",th:"ที่นั่นมีสัตว์เยอะมาก"},
    {zh:"大象很大，猴子很聪明。",pinyin:"Dàxiàng hěn dà, hóuzi hěn cōngming.",th:"ช้างใหญ่มาก ลิงฉลาดมาก"},
    {zh:"我们还看了鸟和鱼。",pinyin:"Wǒmen hái kàn le niǎo hé yú.",th:"เรายังดูนกและปลาด้วย"},
    {zh:"这次参观很有意思。",pinyin:"Zhè cì cānguān hěn yǒu yìsi.",th:"การเข้าชมครั้งนี้สนุกมาก"}
  ]},
  {id:20,range:"1-300",title:"保护环境",pinyin:"Bǎohù huánjìng",desc:"บทความเกี่ยวกับการอนุรักษ์สิ่งแวดล้อม",content:[
    {zh:"保护环境很重要。",pinyin:"Bǎohù huánjìng hěn zhòngyào.",th:"การปกป้องสิ่งแวดล้อมสำคัญมาก"},
    {zh:"我们要保护地球。",pinyin:"Wǒmen yào bǎohù dìqiú.",th:"เราต้องปกป้องโลก"},
    {zh:"不要到处扔垃圾。",pinyin:"Búyào dàochù rēng lājī.",th:"อย่าทิ้งขยะทุกที่"},
    {zh:"多坐公共交通，少开车。",pinyin:"Duō zuò gōnggòng jiāotōng, shǎo kāichē.",th:"นั่งขนส่งสาธารณะมาก ขับรถน้อย"},
    {zh:"让我们的城市更干净。",pinyin:"Ràng wǒmen de chéngshì gèng gānjìng.",th:"ทำให้เมืองของเราสะอาดขึ้น"}
  ]},
  {id:21,range:"1-300",title:"早晨习惯",pinyin:"Zǎochén xíguàn",desc:"บทความเกี่ยวกับนิสัยตอนเช้า",content:[
    {zh:"我每天早上六点起床。",pinyin:"Wǒ měitiān zǎoshang liù diǎn qǐchuáng.",th:"ฉันตื่นนอนหกโมงเช้าทุกวัน"},
    {zh:"先刷牙洗脸。",pinyin:"Xiān shuāyá xǐliǎn.",th:"แปรงฟันล้างหน้าก่อน"},
    {zh:"然后吃早饭。",pinyin:"Ránhòu chī zǎofàn.",th:"แล้วกินอาหารเช้า"},
    {zh:"七点半出门上班。",pinyin:"Qī diǎn bàn chūmén shàngbān.",th:"เจ็ดโมงครึ่งออกจากบ้านไปทำงาน"},
    {zh:"好习惯让一天很顺利。",pinyin:"Hǎo xíguàn ràng yì tiān hěn shùnlì.",th:"นิสัยดีทำให้วันหนึ่งราบรื่น"}
  ]},
  {id:22,range:"1-300",title:"学做饭",pinyin:"Xué zuò fàn",desc:"บทความเกี่ยวกับการเรียนทำอาหาร",content:[
    {zh:"我想学做中国菜。",pinyin:"Wǒ xiǎng xué zuò Zhōngguó cài.",th:"ฉันอยากเรียนทำอาหารจีน"},
    {zh:"妈妈教我切菜。",pinyin:"Māma jiāo wǒ qiē cài.",th:"แม่สอนฉันหั่นผัก"},
    {zh:"先准备材料。",pinyin:"Xiān zhǔnbèi cáiliào.",th:"เตรียมวัตถุดิบก่อน"},
    {zh:"然后按照步骤做。",pinyin:"Ránhòu ànzhào bùzhòu zuò.",th:"แล้วทำตามขั้นตอน"},
    {zh:"做完后味道很好。",pinyin:"Zuò wán hòu wèidao hěn hǎo.",th:"ทำเสร็จแล้วรสชาติดีมาก"}
  ]},
  {id:23,range:"1-300",title:"图书馆",pinyin:"Túshūguǎn",desc:"บทความเกี่ยวกับห้องสมุด",content:[
    {zh:"我常常去图书馆。",pinyin:"Wǒ chángcháng qù túshūguǎn.",th:"ฉันไปห้องสมุดบ่อยๆ"},
    {zh:"那里有很多书。",pinyin:"Nàlǐ yǒu hěn duō shū.",th:"ที่นั่นมีหนังสือเยอะมาก"},
    {zh:"环境安静，适合学习。",pinyin:"Huánjìng ānjìng, shìhé xuéxí.",th:"สภาพแวดล้อมเงียบสงบ เหมาะกับการเรียน"},
    {zh:"可以借书回家看。",pinyin:"Kěyǐ jiè shū huí jiā kàn.",th:"สามารถยืมหนังสือกลับบ้านอ่านได้"},
    {zh:"图书馆是学习的好地方。",pinyin:"Túshūguǎn shì xuéxí de hǎo dìfang.",th:"ห้องสมุดเป็นสถานที่ดีสำหรับการเรียน"}
  ]},
  {id:24,range:"1-300",title:"坐公交车",pinyin:"Zuò gōngjiāochē",desc:"บทความเกี่ยวกับการนั่งรถเมล์",content:[
    {zh:"我每天坐公交车上班。",pinyin:"Wǒ měitiān zuò gōngjiāochē shàngbān.",th:"ฉันนั่งรถเมล์ไปทำงานทุกวัน"},
    {zh:"车站离家很近。",pinyin:"Chēzhàn lí jiā hěn jìn.",th:"ป้ายรถอยู่ใกล้บ้านมาก"},
    {zh:"早上人很多。",pinyin:"Zǎoshang rén hěn duō.",th:"ตอนเช้าคนเยอะมาก"},
    {zh:"大约半小时到公司。",pinyin:"Dàyuē bàn xiǎoshí dào gōngsī.",th:"ประมาณครึ่งชั่วโมงถึงบริษัท"},
    {zh:"坐公交车很方便。",pinyin:"Zuò gōngjiāochē hěn fāngbiàn.",th:"นั่งรถเมล์สะดวกมาก"}
  ]},
  {id:25,range:"1-300",title:"周末活动",pinyin:"Zhōumò huódòng",desc:"บทความเกี่ยวกับกิจกรรมสุดสัปดาห์",content:[
    {zh:"周末我喜欢做运动。",pinyin:"Zhōumò wǒ xǐhuan zuò yùndòng.",th:"สุดสัปดาห์ฉันชอบออกกำลังกาย"},
    {zh:"有时候去游泳。",pinyin:"Yǒu shíhou qù yóuyǒng.",th:"บางครั้งไปว่ายน้ำ"},
    {zh:"有时候爬山。",pinyin:"Yǒu shíhou páshān.",th:"บางครั้งปีนเขา"},
    {zh:"也喜欢和朋友见面。",pinyin:"Yě xǐhuan hé péngyou jiànmiàn.",th:"ก็ชอบพบเพื่อนด้วย"},
    {zh:"周末过得很充实。",pinyin:"Zhōumò guò de hěn chōngshí.",th:"สุดสัปดาห์ผ่านไปอย่างเต็มที่"}
  ]},
  {id:26,range:"1-300",title:"手机",pinyin:"Shǒujī",desc:"บทความเกี่ยวกับโทรศัพท์มือถือ",content:[
    {zh:"手机对我们很重要。",pinyin:"Shǒujī duì wǒmen hěn zhòngyào.",th:"โทรศัพท์มือถือสำคัญกับเรามาก"},
    {zh:"可以打电话发短信。",pinyin:"Kěyǐ dǎ diànhuà fā duǎnxìn.",th:"สามารถโทรศัพท์ส่งข้อความได้"},
    {zh:"也可以上网。",pinyin:"Yě kěyǐ shàngwǎng.",th:"ก็สามารถใช้อินเทอร์เน็ตได้"},
    {zh:"现在手机功能很多。",pinyin:"Xiànzài shǒujī gōngnéng hěn duō.",th:"ตอนนี้โทรศัพท์มือถือมีฟังก์ชันเยอะมาก"},
    {zh:"但是不要一直看手机。",pinyin:"Dànshì búyào yìzhí kàn shǒujī.",th:"แต่อย่าดูโทรศัพท์ตลอดเวลา"}
  ]},
  {id:27,range:"1-300",title:"节日",pinyin:"Jiérì",desc:"บทความเกี่ยวกับวันหยุดเทศกาล",content:[
    {zh:"中国有很多传统节日。",pinyin:"Zhōngguó yǒu hěn duō chuántǒng jiérì.",th:"จีนมีเทศกาลดั้งเดิมเยอะมาก"},
    {zh:"春节是最重要的。",pinyin:"Chūnjié shì zuì zhòngyào de.",th:"เทศกาลตรุษจีนสำคัญที่สุด"},
    {zh:"大家回家团聚。",pinyin:"Dàjiā huí jiā tuánjù.",th:"ทุกคนกลับบ้านพบปะกัน"},
    {zh:"吃饺子，放鞭炮。",pinyin:"Chī jiǎozi, fàng biānpào.",th:"กินเกี๊ยว จุดประทัด"},
    {zh:"节日气氛很热闹。",pinyin:"Jiérì qìfēn hěn rènao.",th:"บรรยากาศเทศกาลคึกคักมาก"}
  ]},
  {id:28,range:"1-300",title:"邻居",pinyin:"Línjū",desc:"บทความเกี่ยวกับเพื่อนบ้าน",content:[
    {zh:"我的邻居很友好。",pinyin:"Wǒ de línjū hěn yǒuhǎo.",th:"เพื่อนบ้านของฉันเป็นมิตรมาก"},
    {zh:"我们常常互相帮助。",pinyin:"Wǒmen chángcháng hùxiāng bāngzhù.",th:"เรามักช่วยเหลือซึ่งกันและกัน"},
    {zh:"有时候一起吃饭。",pinyin:"Yǒu shíhou yìqǐ chīfàn.",th:"บางครั้งกินข้าวด้วยกัน"},
    {zh:"孩子们一起玩。",pinyin:"Háizimen yìqǐ wán.",th:"เด็กๆเล่นด้วยกัน"},
    {zh:"好邻居很重要。",pinyin:"Hǎo línjū hěn zhòngyào.",th:"เพื่อนบ้านดีสำคัญมาก"}
  ]},
  {id:29,range:"1-300",title:"生日",pinyin:"Shēngrì",desc:"บทความเกี่ยวกับวันเกิด",content:[
    {zh:"今天是我的生日。",pinyin:"Jīntiān shì wǒ de shēngrì.",th:"วันนี้เป็นวันเกิดของฉัน"},
    {zh:"朋友们来祝贺我。",pinyin:"Péngyoumen lái zhùhè wǒ.",th:"เพื่อนๆมาอวยพรฉัน"},
    {zh:"妈妈做了生日蛋糕。",pinyin:"Māma zuò le shēngrì dàngāo.",th:"แม่ทำเค้กวันเกิด"},
    {zh:"大家唱生日歌。",pinyin:"Dàjiā chàng shēngrì gē.",th:"ทุกคนร้องเพลงวันเกิด"},
    {zh:"我很开心。",pinyin:"Wǒ hěn kāixīn.",th:"ฉันมีความสุขมาก"}
  ]},
  {id:30,range:"1-300",title:"天气预报",pinyin:"Tiānqì yùbào",desc:"บทความเกี่ยวกับพยากรณ์อากาศ",content:[
    {zh:"每天看天气预报。",pinyin:"Měitiān kàn tiānqì yùbào.",th:"ดูพยากรณ์อากาศทุกวัน"},
    {zh:"知道明天的天气。",pinyin:"Zhīdào míngtiān de tiānqì.",th:"รู้อากาศวันพรุ่งนี้"},
    {zh:"如果下雨，带伞。",pinyin:"Rúguǒ xiàyǔ, dài sǎn.",th:"ถ้าฝนตก เอาร่มไป"},
    {zh:"如果很冷，多穿衣服。",pinyin:"Rúguǒ hěn lěng, duō chuān yīfu.",th:"ถ้าหนาวมาก ใส่เสื้อผ้าเยอะๆ"},
    {zh:"天气预报很有用。",pinyin:"Tiānqì yùbào hěn yǒuyòng.",th:"พยากรณ์อากาศมีประโยชน์มาก"}
  ]},
  {id:31,range:"301-600",title:"发展经济",pinyin:"Fāzhǎn jīngjì",desc:"การพัฒนาเศรษฐกิจ",content:[
    {zh:"国家重视经济发展。",pinyin:"Guójiā zhòngshì jīngjì fāzhǎn.",th:"ประเทศให้ความสำคัญกับการพัฒนาเศรษฐกิจ"},
    {zh:"发现新的商业机会。",pinyin:"Fāxiàn xīn de shāngyè jīhuì.",th:"ค้นพบโอกาสทางธุรกิจใหม่"},
    {zh:"法律保护企业发展。",pinyin:"Fǎlǜ bǎohù qǐyè fāzhǎn.",th:"กฎหมายปกป้องการพัฒนาธุรกิจ"},
    {zh:"翻译帮助国际交流。",pinyin:"Fānyì bāngzhù guójì jiāoliú.",th:"การแปลช่วยการสื่อสารระหว่างประเทศ"},
    {zh:"反映市场需求很重要。",pinyin:"Fǎnyìng shìchǎng xūqiú hěn zhòngyào.",th:"การสะท้อนความต้องการตลาดสำคัญมาก"}
  ]},
  {id:32,range:"301-600",title:"学习进步",pinyin:"Xuéxí jìnbù",desc:"ความก้าวหน้าในการเรียน",content:[
    {zh:"复习功课很重要。",pinyin:"Fùxí gōngkè hěn zhòngyào.",th:"ทบทวนบทเรียนสำคัญมาก"},
    {zh:"父母支持我学习。",pinyin:"Fùmǔ zhīchí wǒ xuéxí.",th:"พ่อแม่สนับสนุนการเรียนของฉัน"},
    {zh:"负责任的态度很好。",pinyin:"Fùzérèn de tàidu hěn hǎo.",th:"ทัศนคติที่รับผิดชอบดีมาก"},
    {zh:"附近有图书馆。",pinyin:"Fùjìn yǒu túshūguǎn.",th:"ใกล้ๆมีห้องสมุด"},
    {zh:"改变学习方法。",pinyin:"Gǎibiàn xuéxí fāngfǎ.",th:"เปลี่ยนวิธีการเรียน"}
  ]},
  {id:33,range:"301-600",title:"日常生活",pinyin:"Rìcháng shēnghuó",desc:"ชีวิตประจำวัน",content:[
    {zh:"干净的环境很舒服。",pinyin:"Gānjìng de huánjìng hěn shūfu.",th:"สภาพแวดล้อมสะอาดสบายมาก"},
    {zh:"感动的故事。",pinyin:"Gǎndòng de gùshi.",th:"เรื่องราวที่ซาบซึ้ง"},
    {zh:"感觉很好。",pinyin:"Gǎnjué hěn hǎo.",th:"รู้สึกดีมาก"},
    {zh:"感冒了要休息。",pinyin:"Gǎnmào le yào xiūxi.",th:"เป็นหวัดต้องพักผ่อน"},
    {zh:"感谢大家的帮助。",pinyin:"Gǎnxiè dàjiā de bāngzhù.",th:"ขอบคุณทุกคนที่ช่วยเหลือ"}
  ]},
  {id:34,range:"301-600",title:"工作态度",pinyin:"Gōngzuò tàidu",desc:"ทัศนคติการทำงาน",content:[
    {zh:"赶快完成工作。",pinyin:"Gǎnkuài wánchéng gōngzuò.",th:"รีบทำงานให้เสร็จ"},
    {zh:"刚才开会了。",pinyin:"Gāngcái kāihuì le.",th:"เพิ่งประชุมไป"},
    {zh:"高兴地工作。",pinyin:"Gāoxìng de gōngzuò.",th:"ทำงานอย่างมีความสุข"},
    {zh:"搞清楚问题。",pinyin:"Gǎo qīngchu wèntí.",th:"ทำความเข้าใจปัญหาให้ชัดเจน"},
    {zh:"告诉同事消息。",pinyin:"Gàosu tóngshì xiāoxi.",th:"บอกข่าวเพื่อนร่วมงาน"}
  ]},
  {id:35,range:"301-600",title:"社交活动",pinyin:"Shèjiāo huódòng",desc:"กิจกรรมสังคม",content:[
    {zh:"各种活动都参加。",pinyin:"Gè zhǒng huódòng dōu cānjiā.",th:"เข้าร่วมกิจกรรมทุกประเภท"},
    {zh:"给朋友打电话。",pinyin:"Gěi péngyou dǎ diànhuà.",th:"โทรหาเพื่อน"},
    {zh:"根据计划行动。",pinyin:"Gēnjù jìhuà xíngdòng.",th:"ดำเนินการตามแผน"},
    {zh:"更加努力学习。",pinyin:"Gèngjiā nǔlì xuéxí.",th:"เรียนหนักขึ้นกว่าเดิม"},
    {zh:"工资够用了。",pinyin:"Gōngzī gòu yòng le.",th:"เงินเดือนพอใช้แล้ว"}
  ]},
  {id:36,range:"301-600",title:"发展经济",pinyin:"Fāzhǎn jīngjì",desc:"การพัฒนาเศรษฐกิจ",content:[
    {zh:"国家重视经济发展。",pinyin:"Guójiā zhòngshì jīngjì fāzhǎn.",th:"ประเทศให้ความสำคัญกับการพัฒนาเศรษฐกิจ"},
    {zh:"发现新的商业机会。",pinyin:"Fāxiàn xīn de shāngyè jīhuì.",th:"ค้นพบโอกาสทางธุรกิจใหม่"},
    {zh:"法律保护企业发展。",pinyin:"Fǎlǜ bǎohù qǐyè fāzhǎn.",th:"กฎหมายปกป้องการพัฒนาธุรกิจ"},
    {zh:"翻译帮助国际交流。",pinyin:"Fānyì bāngzhù guójì jiāoliú.",th:"การแปลช่วยการสื่อสารระหว่างประเทศ"},
    {zh:"反映市场需求很重要。",pinyin:"Fǎnyìng shìchǎng xūqiú hěn zhòngyào.",th:"การสะท้อนความต้องการตลาดสำคัญมาก"}
  ]},
  {id:37,range:"301-600",title:"学习进步",pinyin:"Xuéxí jìnbù",desc:"ความก้าวหน้าในการเรียน",content:[
    {zh:"复习功课很重要。",pinyin:"Fùxí gōngkè hěn zhòngyào.",th:"ทบทวนบทเรียนสำคัญมาก"},
    {zh:"父母支持我学习。",pinyin:"Fùmǔ zhīchí wǒ xuéxí.",th:"พ่อแม่สนับสนุนการเรียนของฉัน"},
    {zh:"负责任的态度很好。",pinyin:"Fùzérèn de tàidu hěn hǎo.",th:"ทัศนคติที่รับผิดชอบดีมาก"},
    {zh:"附近有图书馆。",pinyin:"Fùjìn yǒu túshūguǎn.",th:"ใกล้ๆมีห้องสมุด"},
    {zh:"改变学习方法。",pinyin:"Gǎibiàn xuéxí fāngfǎ.",th:"เปลี่ยนวิธีการเรียน"}
  ]},
  {id:38,range:"301-600",title:"日常生活",pinyin:"Rìcháng shēnghuó",desc:"ชีวิตประจำวัน",content:[
    {zh:"干净的环境很舒服。",pinyin:"Gānjìng de huánjìng hěn shūfu.",th:"สภาพแวดล้อมสะอาดสบายมาก"},
    {zh:"感动的故事。",pinyin:"Gǎndòng de gùshi.",th:"เรื่องราวที่ซาบซึ้ง"},
    {zh:"感觉很好。",pinyin:"Gǎnjué hěn hǎo.",th:"รู้สึกดีมาก"},
    {zh:"感冒了要休息。",pinyin:"Gǎnmào le yào xiūxi.",th:"เป็นหวัดต้องพักผ่อน"},
    {zh:"感谢大家的帮助。",pinyin:"Gǎnxiè dàjiā de bāngzhù.",th:"ขอบคุณทุกคนที่ช่วยเหลือ"}
  ]},
  {id:39,range:"301-600",title:"工作态度",pinyin:"Gōngzuò tàidu",desc:"ทัศนคติการทำงาน",content:[
    {zh:"赶快完成工作。",pinyin:"Gǎnkuài wánchéng gōngzuò.",th:"รีบทำงานให้เสร็จ"},
    {zh:"刚才开会了。",pinyin:"Gāngcái kāihuì le.",th:"เพิ่งประชุมไป"},
    {zh:"高兴地工作。",pinyin:"Gāoxìng de gōngzuò.",th:"ทำงานอย่างมีความสุข"},
    {zh:"搞清楚问题。",pinyin:"Gǎo qīngchu wèntí.",th:"ทำความเข้าใจปัญหาให้ชัดเจน"},
    {zh:"告诉同事消息。",pinyin:"Gàosu tóngshì xiāoxi.",th:"บอกข่าวเพื่อนร่วมงาน"}
  ]},
  {id:40,range:"301-600",title:"社交活动",pinyin:"Shèjiāo huódòng",desc:"กิจกรรมสังคม",content:[
    {zh:"各种活动都参加。",pinyin:"Gè zhǒng huódòng dōu cānjiā.",th:"เข้าร่วมกิจกรรมทุกประเภท"},
    {zh:"给朋友打电话。",pinyin:"Gěi péngyou dǎ diànhuà.",th:"โทรหาเพื่อน"},
    {zh:"根据计划行动。",pinyin:"Gēnjù jìhuà xíngdòng.",th:"ดำเนินการตามแผน"},
    {zh:"更加努力学习。",pinyin:"Gèngjiā nǔlì xuéxí.",th:"เรียนหนักขึ้นกว่าเดิม"},
    {zh:"工资够用了。",pinyin:"Gōngzī gòu yòng le.",th:"เงินเดือนพอใช้แล้ว"}
  ]},
  {id:41,range:"301-600",title:"发展经济",pinyin:"Fāzhǎn jīngjì",desc:"การพัฒนาเศรษฐกิจ",content:[
    {zh:"国家重视经济发展。",pinyin:"Guójiā zhòngshì jīngjì fāzhǎn.",th:"ประเทศให้ความสำคัญกับการพัฒนาเศรษฐกิจ"},
    {zh:"发现新的商业机会。",pinyin:"Fāxiàn xīn de shāngyè jīhuì.",th:"ค้นพบโอกาสทางธุรกิจใหม่"},
    {zh:"法律保护企业发展。",pinyin:"Fǎlǜ bǎohù qǐyè fāzhǎn.",th:"กฎหมายปกป้องการพัฒนาธุรกิจ"},
    {zh:"翻译帮助国际交流。",pinyin:"Fānyì bāngzhù guójì jiāoliú.",th:"การแปลช่วยการสื่อสารระหว่างประเทศ"},
    {zh:"反映市场需求很重要。",pinyin:"Fǎnyìng shìchǎng xūqiú hěn zhòngyào.",th:"การสะท้อนความต้องการตลาดสำคัญมาก"}
  ]},
  {id:42,range:"301-600",title:"学习进步",pinyin:"Xuéxí jìnbù",desc:"ความก้าวหน้าในการเรียน",content:[
    {zh:"复习功课很重要。",pinyin:"Fùxí gōngkè hěn zhòngyào.",th:"ทบทวนบทเรียนสำคัญมาก"},
    {zh:"父母支持我学习。",pinyin:"Fùmǔ zhīchí wǒ xuéxí.",th:"พ่อแม่สนับสนุนการเรียนของฉัน"},
    {zh:"负责任的态度很好。",pinyin:"Fùzérèn de tàidu hěn hǎo.",th:"ทัศนคติที่รับผิดชอบดีมาก"},
    {zh:"附近有图书馆。",pinyin:"Fùjìn yǒu túshūguǎn.",th:"ใกล้ๆมีห้องสมุด"},
    {zh:"改变学习方法。",pinyin:"Gǎibiàn xuéxí fāngfǎ.",th:"เปลี่ยนวิธีการเรียน"}
  ]},
  {id:43,range:"301-600",title:"日常生活",pinyin:"Rìcháng shēnghuó",desc:"ชีวิตประจำวัน",content:[
    {zh:"干净的环境很舒服。",pinyin:"Gānjìng de huánjìng hěn shūfu.",th:"สภาพแวดล้อมสะอาดสบายมาก"},
    {zh:"感动的故事。",pinyin:"Gǎndòng de gùshi.",th:"เรื่องราวที่ซาบซึ้ง"},
    {zh:"感觉很好。",pinyin:"Gǎnjué hěn hǎo.",th:"รู้สึกดีมาก"},
    {zh:"感冒了要休息。",pinyin:"Gǎnmào le yào xiūxi.",th:"เป็นหวัดต้องพักผ่อน"},
    {zh:"感谢大家的帮助。",pinyin:"Gǎnxiè dàjiā de bāngzhù.",th:"ขอบคุณทุกคนที่ช่วยเหลือ"}
  ]},
  {id:44,range:"301-600",title:"工作态度",pinyin:"Gōngzuò tàidu",desc:"ทัศนคติการทำงาน",content:[
    {zh:"赶快完成工作。",pinyin:"Gǎnkuài wánchéng gōngzuò.",th:"รีบทำงานให้เสร็จ"},
    {zh:"刚才开会了。",pinyin:"Gāngcái kāihuì le.",th:"เพิ่งประชุมไป"},
    {zh:"高兴地工作。",pinyin:"Gāoxìng de gōngzuò.",th:"ทำงานอย่างมีความสุข"},
    {zh:"搞清楚问题。",pinyin:"Gǎo qīngchu wèntí.",th:"ทำความเข้าใจปัญหาให้ชัดเจน"},
    {zh:"告诉同事消息。",pinyin:"Gàosu tóngshì xiāoxi.",th:"บอกข่าวเพื่อนร่วมงาน"}
  ]},
  {id:45,range:"301-600",title:"社交活动",pinyin:"Shèjiāo huódòng",desc:"กิจกรรมสังคม",content:[
    {zh:"各种活动都参加。",pinyin:"Gè zhǒng huódòng dōu cānjiā.",th:"เข้าร่วมกิจกรรมทุกประเภท"},
    {zh:"给朋友打电话。",pinyin:"Gěi péngyou dǎ diànhuà.",th:"โทรหาเพื่อน"},
    {zh:"根据计划行动。",pinyin:"Gēnjù jìhuà xíngdòng.",th:"ดำเนินการตามแผน"},
    {zh:"更加努力学习。",pinyin:"Gèngjiā nǔlì xuéxí.",th:"เรียนหนักขึ้นกว่าเดิม"},
    {zh:"工资够用了。",pinyin:"Gōngzī gòu yòng le.",th:"เงินเดือนพอใช้แล้ว"}
  ]},
  {id:46,range:"301-600",title:"发展经济",pinyin:"Fāzhǎn jīngjì",desc:"การพัฒนาเศรษฐกิจ",content:[
    {zh:"国家重视经济发展。",pinyin:"Guójiā zhòngshì jīngjì fāzhǎn.",th:"ประเทศให้ความสำคัญกับการพัฒนาเศรษฐกิจ"},
    {zh:"发现新的商业机会。",pinyin:"Fāxiàn xīn de shāngyè jīhuì.",th:"ค้นพบโอกาสทางธุรกิจใหม่"},
    {zh:"法律保护企业发展。",pinyin:"Fǎlǜ bǎohù qǐyè fāzhǎn.",th:"กฎหมายปกป้องการพัฒนาธุรกิจ"},
    {zh:"翻译帮助国际交流。",pinyin:"Fānyì bāngzhù guójì jiāoliú.",th:"การแปลช่วยการสื่อสารระหว่างประเทศ"},
    {zh:"反映市场需求很重要。",pinyin:"Fǎnyìng shìchǎng xūqiú hěn zhòngyào.",th:"การสะท้อนความต้องการตลาดสำคัญมาก"}
  ]},
  {id:47,range:"301-600",title:"学习进步",pinyin:"Xuéxí jìnbù",desc:"ความก้าวหน้าในการเรียน",content:[
    {zh:"复习功课很重要。",pinyin:"Fùxí gōngkè hěn zhòngyào.",th:"ทบทวนบทเรียนสำคัญมาก"},
    {zh:"父母支持我学习。",pinyin:"Fùmǔ zhīchí wǒ xuéxí.",th:"พ่อแม่สนับสนุนการเรียนของฉัน"},
    {zh:"负责任的态度很好。",pinyin:"Fùzérèn de tàidu hěn hǎo.",th:"ทัศนคติที่รับผิดชอบดีมาก"},
    {zh:"附近有图书馆。",pinyin:"Fùjìn yǒu túshūguǎn.",th:"ใกล้ๆมีห้องสมุด"},
    {zh:"改变学习方法。",pinyin:"Gǎibiàn xuéxí fāngfǎ.",th:"เปลี่ยนวิธีการเรียน"}
  ]},
  {id:48,range:"301-600",title:"日常生活",pinyin:"Rìcháng shēnghuó",desc:"ชีวิตประจำวัน",content:[
    {zh:"干净的环境很舒服。",pinyin:"Gānjìng de huánjìng hěn shūfu.",th:"สภาพแวดล้อมสะอาดสบายมาก"},
    {zh:"感动的故事。",pinyin:"Gǎndòng de gùshi.",th:"เรื่องราวที่ซาบซึ้ง"},
    {zh:"感觉很好。",pinyin:"Gǎnjué hěn hǎo.",th:"รู้สึกดีมาก"},
    {zh:"感冒了要休息。",pinyin:"Gǎnmào le yào xiūxi.",th:"เป็นหวัดต้องพักผ่อน"},
    {zh:"感谢大家的帮助。",pinyin:"Gǎnxiè dàjiā de bāngzhù.",th:"ขอบคุณทุกคนที่ช่วยเหลือ"}
  ]},
  {id:49,range:"301-600",title:"工作态度",pinyin:"Gōngzuò tàidu",desc:"ทัศนคติการทำงาน",content:[
    {zh:"赶快完成工作。",pinyin:"Gǎnkuài wánchéng gōngzuò.",th:"รีบทำงานให้เสร็จ"},
    {zh:"刚才开会了。",pinyin:"Gāngcái kāihuì le.",th:"เพิ่งประชุมไป"},
    {zh:"高兴地工作。",pinyin:"Gāoxìng de gōngzuò.",th:"ทำงานอย่างมีความสุข"},
    {zh:"搞清楚问题。",pinyin:"Gǎo qīngchu wèntí.",th:"ทำความเข้าใจปัญหาให้ชัดเจน"},
    {zh:"告诉同事消息。",pinyin:"Gàosu tóngshì xiāoxi.",th:"บอกข่าวเพื่อนร่วมงาน"}
  ]},
  {id:50,range:"301-600",title:"社交活动",pinyin:"Shèjiāo huódòng",desc:"กิจกรรมสังคม",content:[
    {zh:"各种活动都参加。",pinyin:"Gè zhǒng huódòng dōu cānjiā.",th:"เข้าร่วมกิจกรรมทุกประเภท"},
    {zh:"给朋友打电话。",pinyin:"Gěi péngyou dǎ diànhuà.",th:"โทรหาเพื่อน"},
    {zh:"根据计划行动。",pinyin:"Gēnjù jìhuà xíngdòng.",th:"ดำเนินการตามแผน"},
    {zh:"更加努力学习。",pinyin:"Gèngjiā nǔlì xuéxí.",th:"เรียนหนักขึ้นกว่าเดิม"},
    {zh:"工资够用了。",pinyin:"Gōngzī gòu yòng le.",th:"เงินเดือนพอใช้แล้ว"}
  ]},
  {id:51,range:"301-600",title:"发展经济",pinyin:"Fāzhǎn jīngjì",desc:"การพัฒนาเศรษฐกิจ",content:[
    {zh:"国家重视经济发展。",pinyin:"Guójiā zhòngshì jīngjì fāzhǎn.",th:"ประเทศให้ความสำคัญกับการพัฒนาเศรษฐกิจ"},
    {zh:"发现新的商业机会。",pinyin:"Fāxiàn xīn de shāngyè jīhuì.",th:"ค้นพบโอกาสทางธุรกิจใหม่"},
    {zh:"法律保护企业发展。",pinyin:"Fǎlǜ bǎohù qǐyè fāzhǎn.",th:"กฎหมายปกป้องการพัฒนาธุรกิจ"},
    {zh:"翻译帮助国际交流。",pinyin:"Fānyì bāngzhù guójì jiāoliú.",th:"การแปลช่วยการสื่อสารระหว่างประเทศ"},
    {zh:"反映市场需求很重要。",pinyin:"Fǎnyìng shìchǎng xūqiú hěn zhòngyào.",th:"การสะท้อนความต้องการตลาดสำคัญมาก"}
  ]},
  {id:52,range:"301-600",title:"学习进步",pinyin:"Xuéxí jìnbù",desc:"ความก้าวหน้าในการเรียน",content:[
    {zh:"复习功课很重要。",pinyin:"Fùxí gōngkè hěn zhòngyào.",th:"ทบทวนบทเรียนสำคัญมาก"},
    {zh:"父母支持我学习。",pinyin:"Fùmǔ zhīchí wǒ xuéxí.",th:"พ่อแม่สนับสนุนการเรียนของฉัน"},
    {zh:"负责任的态度很好。",pinyin:"Fùzérèn de tàidu hěn hǎo.",th:"ทัศนคติที่รับผิดชอบดีมาก"},
    {zh:"附近有图书馆。",pinyin:"Fùjìn yǒu túshūguǎn.",th:"ใกล้ๆมีห้องสมุด"},
    {zh:"改变学习方法。",pinyin:"Gǎibiàn xuéxí fāngfǎ.",th:"เปลี่ยนวิธีการเรียน"}
  ]},
  {id:53,range:"301-600",title:"日常生活",pinyin:"Rìcháng shēnghuó",desc:"ชีวิตประจำวัน",content:[
    {zh:"干净的环境很舒服。",pinyin:"Gānjìng de huánjìng hěn shūfu.",th:"สภาพแวดล้อมสะอาดสบายมาก"},
    {zh:"感动的故事。",pinyin:"Gǎndòng de gùshi.",th:"เรื่องราวที่ซาบซึ้ง"},
    {zh:"感觉很好。",pinyin:"Gǎnjué hěn hǎo.",th:"รู้สึกดีมาก"},
    {zh:"感冒了要休息。",pinyin:"Gǎnmào le yào xiūxi.",th:"เป็นหวัดต้องพักผ่อน"},
    {zh:"感谢大家的帮助。",pinyin:"Gǎnxiè dàjiā de bāngzhù.",th:"ขอบคุณทุกคนที่ช่วยเหลือ"}
  ]},
  {id:54,range:"301-600",title:"工作态度",pinyin:"Gōngzuò tàidu",desc:"ทัศนคติการทำงาน",content:[
    {zh:"赶快完成工作。",pinyin:"Gǎnkuài wánchéng gōngzuò.",th:"รีบทำงานให้เสร็จ"},
    {zh:"刚才开会了。",pinyin:"Gāngcái kāihuì le.",th:"เพิ่งประชุมไป"},
    {zh:"高兴地工作。",pinyin:"Gāoxìng de gōngzuò.",th:"ทำงานอย่างมีความสุข"},
    {zh:"搞清楚问题。",pinyin:"Gǎo qīngchu wèntí.",th:"ทำความเข้าใจปัญหาให้ชัดเจน"},
    {zh:"告诉同事消息。",pinyin:"Gàosu tóngshì xiāoxi.",th:"บอกข่าวเพื่อนร่วมงาน"}
  ]},
  {id:55,range:"301-600",title:"社交活动",pinyin:"Shèjiāo huódòng",desc:"กิจกรรมสังคม",content:[
    {zh:"各种活动都参加。",pinyin:"Gè zhǒng huódòng dōu cānjiā.",th:"เข้าร่วมกิจกรรมทุกประเภท"},
    {zh:"给朋友打电话。",pinyin:"Gěi péngyou dǎ diànhuà.",th:"โทรหาเพื่อน"},
    {zh:"根据计划行动。",pinyin:"Gēnjù jìhuà xíngdòng.",th:"ดำเนินการตามแผน"},
    {zh:"更加努力学习。",pinyin:"Gèngjiā nǔlì xuéxí.",th:"เรียนหนักขึ้นกว่าเดิม"},
    {zh:"工资够用了。",pinyin:"Gōngzī gòu yòng le.",th:"เงินเดือนพอใช้แล้ว"}
  ]},
  {id:56,range:"301-600",title:"发展经济",pinyin:"Fāzhǎn jīngjì",desc:"การพัฒนาเศรษฐกิจ",content:[
    {zh:"国家重视经济发展。",pinyin:"Guójiā zhòngshì jīngjì fāzhǎn.",th:"ประเทศให้ความสำคัญกับการพัฒนาเศรษฐกิจ"},
    {zh:"发现新的商业机会。",pinyin:"Fāxiàn xīn de shāngyè jīhuì.",th:"ค้นพบโอกาสทางธุรกิจใหม่"},
    {zh:"法律保护企业发展。",pinyin:"Fǎlǜ bǎohù qǐyè fāzhǎn.",th:"กฎหมายปกป้องการพัฒนาธุรกิจ"},
    {zh:"翻译帮助国际交流。",pinyin:"Fānyì bāngzhù guójì jiāoliú.",th:"การแปลช่วยการสื่อสารระหว่างประเทศ"},
    {zh:"反映市场需求很重要。",pinyin:"Fǎnyìng shìchǎng xūqiú hěn zhòngyào.",th:"การสะท้อนความต้องการตลาดสำคัญมาก"}
  ]},
  {id:57,range:"301-600",title:"学习进步",pinyin:"Xuéxí jìnbù",desc:"ความก้าวหน้าในการเรียน",content:[
    {zh:"复习功课很重要。",pinyin:"Fùxí gōngkè hěn zhòngyào.",th:"ทบทวนบทเรียนสำคัญมาก"},
    {zh:"父母支持我学习。",pinyin:"Fùmǔ zhīchí wǒ xuéxí.",th:"พ่อแม่สนับสนุนการเรียนของฉัน"},
    {zh:"负责任的态度很好。",pinyin:"Fùzérèn de tàidu hěn hǎo.",th:"ทัศนคติที่รับผิดชอบดีมาก"},
    {zh:"附近有图书馆。",pinyin:"Fùjìn yǒu túshūguǎn.",th:"ใกล้ๆมีห้องสมุด"},
    {zh:"改变学习方法。",pinyin:"Gǎibiàn xuéxí fāngfǎ.",th:"เปลี่ยนวิธีการเรียน"}
  ]},
  {id:58,range:"301-600",title:"日常生活",pinyin:"Rìcháng shēnghuó",desc:"ชีวิตประจำวัน",content:[
    {zh:"干净的环境很舒服。",pinyin:"Gānjìng de huánjìng hěn shūfu.",th:"สภาพแวดล้อมสะอาดสบายมาก"},
    {zh:"感动的故事。",pinyin:"Gǎndòng de gùshi.",th:"เรื่องราวที่ซาบซึ้ง"},
    {zh:"感觉很好。",pinyin:"Gǎnjué hěn hǎo.",th:"รู้สึกดีมาก"},
    {zh:"感冒了要休息。",pinyin:"Gǎnmào le yào xiūxi.",th:"เป็นหวัดต้องพักผ่อน"},
    {zh:"感谢大家的帮助。",pinyin:"Gǎnxiè dàjiā de bāngzhù.",th:"ขอบคุณทุกคนที่ช่วยเหลือ"}
  ]},
  {id:59,range:"301-600",title:"工作态度",pinyin:"Gōngzuò tàidu",desc:"ทัศนคติการทำงาน",content:[
    {zh:"赶快完成工作。",pinyin:"Gǎnkuài wánchéng gōngzuò.",th:"รีบทำงานให้เสร็จ"},
    {zh:"刚才开会了。",pinyin:"Gāngcái kāihuì le.",th:"เพิ่งประชุมไป"},
    {zh:"高兴地工作。",pinyin:"Gāoxìng de gōngzuò.",th:"ทำงานอย่างมีความสุข"},
    {zh:"搞清楚问题。",pinyin:"Gǎo qīngchu wèntí.",th:"ทำความเข้าใจปัญหาให้ชัดเจน"},
    {zh:"告诉同事消息。",pinyin:"Gàosu tóngshì xiāoxi.",th:"บอกข่าวเพื่อนร่วมงาน"}
  ]},
  {id:60,range:"301-600",title:"社交活动",pinyin:"Shèjiāo huódòng",desc:"กิจกรรมสังคม",content:[
    {zh:"各种活动都参加。",pinyin:"Gè zhǒng huódòng dōu cānjiā.",th:"เข้าร่วมกิจกรรมทุกประเภท"},
    {zh:"给朋友打电话。",pinyin:"Gěi péngyou dǎ diànhuà.",th:"โทรหาเพื่อน"},
    {zh:"根据计划行动。",pinyin:"Gēnjù jìhuà xíngdòng.",th:"ดำเนินการตามแผน"},
    {zh:"更加努力学习。",pinyin:"Gèngjiā nǔlì xuéxí.",th:"เรียนหนักขึ้นกว่าเดิม"},
    {zh:"工资够用了。",pinyin:"Gōngzī gòu yòng le.",th:"เงินเดือนพอใช้แล้ว"}
  ]},
  {id:61,range:"601-900",title:"旅游经历",pinyin:"Lǚyóu jīnglì",desc:"ประสบการณ์ท่องเที่ยว",content:[
    {zh:"旅游让人放松。",pinyin:"Lǚyóu ràng rén fàngsōng.",th:"การท่องเที่ยวทำให้ผ่อนคลาย"},
    {zh:"欣赏美丽的风景。",pinyin:"Xīnshǎng měilì de fēngjǐng.",th:"ชื่นชมทิวทัศน์ที่สวยงาม"},
    {zh:"品尝当地美食。",pinyin:"Pǐncháng dāngdì měishí.",th:"ลิ้มรสอาหารท้องถิ่น"},
    {zh:"拍照留念。",pinyin:"Pāizhào liúniàn.",th:"ถ่ายภาพเก็บไว้เป็นที่ระลึก"},
    {zh:"结识新朋友。",pinyin:"Jiéshí xīn péngyou.",th:"รู้จักเพื่อนใหม่"}
  ]},
  {id:62,range:"601-900",title:"科技发展",pinyin:"Kējì fāzhǎn",desc:"การพัฒนาเทคโนโลยี",content:[
    {zh:"科技改变生活。",pinyin:"Kējì gǎibiàn shēnghuó.",th:"เทคโนโลยีเปลี่ยนแปลงชีวิต"},
    {zh:"网络很方便。",pinyin:"Wǎngluò hěn fāngbiàn.",th:"อินเทอร์เน็ตสะดวกมาก"},
    {zh:"手机功能强大。",pinyin:"Shǒujī gōngnéng qiángdà.",th:"โทรศัพท์มือถือมีฟังก์ชันทรงพลัง"},
    {zh:"电脑帮助工作。",pinyin:"Diànnǎo bāngzhù gōngzuò.",th:"คอมพิวเตอร์ช่วยงาน"},
    {zh:"科技进步很快。",pinyin:"Kējì jìnbù hěn kuài.",th:"เทคโนโลยีก้าวหน้าเร็วมาก"}
  ]},
  {id:63,range:"601-900",title:"环境保护",pinyin:"Huánjìng bǎohù",desc:"การอนุรักษ์สิ่งแวดล้อม",content:[
    {zh:"保护环境人人有责。",pinyin:"Bǎohù huánjìng rénrén yǒu zé.",th:"ทุกคนมีหน้าที่ปกป้องสิ่งแวดล้อม"},
    {zh:"减少污染。",pinyin:"Jiǎnshǎo wūrǎn.",th:"ลดมลพิษ"},
    {zh:"节约能源。",pinyin:"Jiéyuē néngyuán.",th:"ประหยัดพลังงาน"},
    {zh:"种树绿化。",pinyin:"Zhòng shù lǜhuà.",th:"ปลูกต้นไม้ทำให้เขียวขจี"},
    {zh:"爱护地球。",pinyin:"Àihù dìqiú.",th:"รักษาโลก"}
  ]},
  {id:64,range:"601-900",title:"文化交流",pinyin:"Wénhuà jiāoliú",desc:"การแลกเปลี่ยนวัฒนธรรม",content:[
    {zh:"了解不同文化。",pinyin:"Liǎojiě bùtóng wénhuà.",th:"เข้าใจวัฒนธรรมที่แตกต่าง"},
    {zh:"尊重传统习俗。",pinyin:"Zūnzhòng chuántǒng xísú.",th:"เคารพประเพณีดั้งเดิม"},
    {zh:"学习外语。",pinyin:"Xuéxí wàiyǔ.",th:"เรียนภาษาต่างประเทศ"},
    {zh:"参加文化活动。",pinyin:"Cānjiā wénhuà huódòng.",th:"เข้าร่วมกิจกรรมทางวัฒนธรรม"},
    {zh:"促进交流合作。",pinyin:"Cùjìn jiāoliú hézuò.",th:"ส่งเสริมการแลกเปลี่ยนและความร่วมมือ"}
  ]},
  {id:65,range:"601-900",title:"健康生活",pinyin:"Jiànkāng shēnghuó",desc:"ชีวิตสุขภาพดี",content:[
    {zh:"规律作息。",pinyin:"Guīlǜ zuòxī.",th:"มีกิจวัตรที่สม่ำเสมอ"},
    {zh:"均衡饮食。",pinyin:"Jūnhéng yǐnshí.",th:"รับประทานอาหารสมดุล"},
    {zh:"适量运动。",pinyin:"Shìliàng yùndòng.",th:"ออกกำลังกายพอเหมาะ"},
    {zh:"保持心情愉快。",pinyin:"Bǎochí xīnqíng yúkuài.",th:"รักษาอารมณ์ให้แจ่มใส"},
    {zh:"定期体检。",pinyin:"Dìngqī tǐjiǎn.",th:"ตรวจสุขภาพเป็นประจำ"}
  ]},
  {id:66,range:"601-900",title:"旅游经历",pinyin:"Lǚyóu jīnglì",desc:"ประสบการณ์ท่องเที่ยว",content:[
    {zh:"旅游让人放松。",pinyin:"Lǚyóu ràng rén fàngsōng.",th:"การท่องเที่ยวทำให้ผ่อนคลาย"},
    {zh:"欣赏美丽的风景。",pinyin:"Xīnshǎng měilì de fēngjǐng.",th:"ชื่นชมทิวทัศน์ที่สวยงาม"},
    {zh:"品尝当地美食。",pinyin:"Pǐncháng dāngdì měishí.",th:"ลิ้มรสอาหารท้องถิ่น"},
    {zh:"拍照留念。",pinyin:"Pāizhào liúniàn.",th:"ถ่ายภาพเก็บไว้เป็นที่ระลึก"},
    {zh:"结识新朋友。",pinyin:"Jiéshí xīn péngyou.",th:"รู้จักเพื่อนใหม่"}
  ]},
  {id:67,range:"601-900",title:"科技发展",pinyin:"Kējì fāzhǎn",desc:"การพัฒนาเทคโนโลยี",content:[
    {zh:"科技改变生活。",pinyin:"Kējì gǎibiàn shēnghuó.",th:"เทคโนโลยีเปลี่ยนแปลงชีวิต"},
    {zh:"网络很方便。",pinyin:"Wǎngluò hěn fāngbiàn.",th:"อินเทอร์เน็ตสะดวกมาก"},
    {zh:"手机功能强大。",pinyin:"Shǒujī gōngnéng qiángdà.",th:"โทรศัพท์มือถือมีฟังก์ชันทรงพลัง"},
    {zh:"电脑帮助工作。",pinyin:"Diànnǎo bāngzhù gōngzuò.",th:"คอมพิวเตอร์ช่วยงาน"},
    {zh:"科技进步很快。",pinyin:"Kējì jìnbù hěn kuài.",th:"เทคโนโลยีก้าวหน้าเร็วมาก"}
  ]},
  {id:68,range:"601-900",title:"环境保护",pinyin:"Huánjìng bǎohù",desc:"การอนุรักษ์สิ่งแวดล้อม",content:[
    {zh:"保护环境人人有责。",pinyin:"Bǎohù huánjìng rénrén yǒu zé.",th:"ทุกคนมีหน้าที่ปกป้องสิ่งแวดล้อม"},
    {zh:"减少污染。",pinyin:"Jiǎnshǎo wūrǎn.",th:"ลดมลพิษ"},
    {zh:"节约能源。",pinyin:"Jiéyuē néngyuán.",th:"ประหยัดพลังงาน"},
    {zh:"种树绿化。",pinyin:"Zhòng shù lǜhuà.",th:"ปลูกต้นไม้ทำให้เขียวขจี"},
    {zh:"爱护地球。",pinyin:"Àihù dìqiú.",th:"รักษาโลก"}
  ]},
  {id:69,range:"601-900",title:"文化交流",pinyin:"Wénhuà jiāoliú",desc:"การแลกเปลี่ยนวัฒนธรรม",content:[
    {zh:"了解不同文化。",pinyin:"Liǎojiě bùtóng wénhuà.",th:"เข้าใจวัฒนธรรมที่แตกต่าง"},
    {zh:"尊重传统习俗。",pinyin:"Zūnzhòng chuántǒng xísú.",th:"เคารพประเพณีดั้งเดิม"},
    {zh:"学习外语。",pinyin:"Xuéxí wàiyǔ.",th:"เรียนภาษาต่างประเทศ"},
    {zh:"参加文化活动。",pinyin:"Cānjiā wénhuà huódòng.",th:"เข้าร่วมกิจกรรมทางวัฒนธรรม"},
    {zh:"促进交流合作。",pinyin:"Cùjìn jiāoliú hézuò.",th:"ส่งเสริมการแลกเปลี่ยนและความร่วมมือ"}
  ]},
  {id:70,range:"601-900",title:"健康生活",pinyin:"Jiànkāng shēnghuó",desc:"ชีวิตสุขภาพดี",content:[
    {zh:"规律作息。",pinyin:"Guīlǜ zuòxī.",th:"มีกิจวัตรที่สม่ำเสมอ"},
    {zh:"均衡饮食。",pinyin:"Jūnhéng yǐnshí.",th:"รับประทานอาหารสมดุล"},
    {zh:"适量运动。",pinyin:"Shìliàng yùndòng.",th:"ออกกำลังกายพอเหมาะ"},
    {zh:"保持心情愉快。",pinyin:"Bǎochí xīnqíng yúkuài.",th:"รักษาอารมณ์ให้แจ่มใส"},
    {zh:"定期体检。",pinyin:"Dìngqī tǐjiǎn.",th:"ตรวจสุขภาพเป็นประจำ"}
  ]},
  {id:71,range:"601-900",title:"旅游经历",pinyin:"Lǚyóu jīnglì",desc:"ประสบการณ์ท่องเที่ยว",content:[
    {zh:"旅游让人放松。",pinyin:"Lǚyóu ràng rén fàngsōng.",th:"การท่องเที่ยวทำให้ผ่อนคลาย"},
    {zh:"欣赏美丽的风景。",pinyin:"Xīnshǎng měilì de fēngjǐng.",th:"ชื่นชมทิวทัศน์ที่สวยงาม"},
    {zh:"品尝当地美食。",pinyin:"Pǐncháng dāngdì měishí.",th:"ลิ้มรสอาหารท้องถิ่น"},
    {zh:"拍照留念。",pinyin:"Pāizhào liúniàn.",th:"ถ่ายภาพเก็บไว้เป็นที่ระลึก"},
    {zh:"结识新朋友。",pinyin:"Jiéshí xīn péngyou.",th:"รู้จักเพื่อนใหม่"}
  ]},
  {id:72,range:"601-900",title:"科技发展",pinyin:"Kējì fāzhǎn",desc:"การพัฒนาเทคโนโลยี",content:[
    {zh:"科技改变生活。",pinyin:"Kējì gǎibiàn shēnghuó.",th:"เทคโนโลยีเปลี่ยนแปลงชีวิต"},
    {zh:"网络很方便。",pinyin:"Wǎngluò hěn fāngbiàn.",th:"อินเทอร์เน็ตสะดวกมาก"},
    {zh:"手机功能强大。",pinyin:"Shǒujī gōngnéng qiángdà.",th:"โทรศัพท์มือถือมีฟังก์ชันทรงพลัง"},
    {zh:"电脑帮助工作。",pinyin:"Diànnǎo bāngzhù gōngzuò.",th:"คอมพิวเตอร์ช่วยงาน"},
    {zh:"科技进步很快。",pinyin:"Kējì jìnbù hěn kuài.",th:"เทคโนโลยีก้าวหน้าเร็วมาก"}
  ]},
  {id:73,range:"601-900",title:"环境保护",pinyin:"Huánjìng bǎohù",desc:"การอนุรักษ์สิ่งแวดล้อม",content:[
    {zh:"保护环境人人有责。",pinyin:"Bǎohù huánjìng rénrén yǒu zé.",th:"ทุกคนมีหน้าที่ปกป้องสิ่งแวดล้อม"},
    {zh:"减少污染。",pinyin:"Jiǎnshǎo wūrǎn.",th:"ลดมลพิษ"},
    {zh:"节约能源。",pinyin:"Jiéyuē néngyuán.",th:"ประหยัดพลังงาน"},
    {zh:"种树绿化。",pinyin:"Zhòng shù lǜhuà.",th:"ปลูกต้นไม้ทำให้เขียวขจี"},
    {zh:"爱护地球。",pinyin:"Àihù dìqiú.",th:"รักษาโลก"}
  ]},
  {id:74,range:"601-900",title:"文化交流",pinyin:"Wénhuà jiāoliú",desc:"การแลกเปลี่ยนวัฒนธรรม",content:[
    {zh:"了解不同文化。",pinyin:"Liǎojiě bùtóng wénhuà.",th:"เข้าใจวัฒนธรรมที่แตกต่าง"},
    {zh:"尊重传统习俗。",pinyin:"Zūnzhòng chuántǒng xísú.",th:"เคารพประเพณีดั้งเดิม"},
    {zh:"学习外语。",pinyin:"Xuéxí wàiyǔ.",th:"เรียนภาษาต่างประเทศ"},
    {zh:"参加文化活动。",pinyin:"Cānjiā wénhuà huódòng.",th:"เข้าร่วมกิจกรรมทางวัฒนธรรม"},
    {zh:"促进交流合作。",pinyin:"Cùjìn jiāoliú hézuò.",th:"ส่งเสริมการแลกเปลี่ยนและความร่วมมือ"}
  ]},
  {id:75,range:"601-900",title:"健康生活",pinyin:"Jiànkāng shēnghuó",desc:"ชีวิตสุขภาพดี",content:[
    {zh:"规律作息。",pinyin:"Guīlǜ zuòxī.",th:"มีกิจวัตรที่สม่ำเสมอ"},
    {zh:"均衡饮食。",pinyin:"Jūnhéng yǐnshí.",th:"รับประทานอาหารสมดุล"},
    {zh:"适量运动。",pinyin:"Shìliàng yùndòng.",th:"ออกกำลังกายพอเหมาะ"},
    {zh:"保持心情愉快。",pinyin:"Bǎochí xīnqíng yúkuài.",th:"รักษาอารมณ์ให้แจ่มใส"},
    {zh:"定期体检。",pinyin:"Dìngqī tǐjiǎn.",th:"ตรวจสุขภาพเป็นประจำ"}
  ]},
  {id:76,range:"601-900",title:"旅游经历",pinyin:"Lǚyóu jīnglì",desc:"ประสบการณ์ท่องเที่ยว",content:[
    {zh:"旅游让人放松。",pinyin:"Lǚyóu ràng rén fàngsōng.",th:"การท่องเที่ยวทำให้ผ่อนคลาย"},
    {zh:"欣赏美丽的风景。",pinyin:"Xīnshǎng měilì de fēngjǐng.",th:"ชื่นชมทิวทัศน์ที่สวยงาม"},
    {zh:"品尝当地美食。",pinyin:"Pǐncháng dāngdì měishí.",th:"ลิ้มรสอาหารท้องถิ่น"},
    {zh:"拍照留念。",pinyin:"Pāizhào liúniàn.",th:"ถ่ายภาพเก็บไว้เป็นที่ระลึก"},
    {zh:"结识新朋友。",pinyin:"Jiéshí xīn péngyou.",th:"รู้จักเพื่อนใหม่"}
  ]},
  {id:77,range:"601-900",title:"科技发展",pinyin:"Kējì fāzhǎn",desc:"การพัฒนาเทคโนโลยี",content:[
    {zh:"科技改变生活。",pinyin:"Kējì gǎibiàn shēnghuó.",th:"เทคโนโลยีเปลี่ยนแปลงชีวิต"},
    {zh:"网络很方便。",pinyin:"Wǎngluò hěn fāngbiàn.",th:"อินเทอร์เน็ตสะดวกมาก"},
    {zh:"手机功能强大。",pinyin:"Shǒujī gōngnéng qiángdà.",th:"โทรศัพท์มือถือมีฟังก์ชันทรงพลัง"},
    {zh:"电脑帮助工作。",pinyin:"Diànnǎo bāngzhù gōngzuò.",th:"คอมพิวเตอร์ช่วยงาน"},
    {zh:"科技进步很快。",pinyin:"Kējì jìnbù hěn kuài.",th:"เทคโนโลยีก้าวหน้าเร็วมาก"}
  ]},
  {id:78,range:"601-900",title:"环境保护",pinyin:"Huánjìng bǎohù",desc:"การอนุรักษ์สิ่งแวดล้อม",content:[
    {zh:"保护环境人人有责。",pinyin:"Bǎohù huánjìng rénrén yǒu zé.",th:"ทุกคนมีหน้าที่ปกป้องสิ่งแวดล้อม"},
    {zh:"减少污染。",pinyin:"Jiǎnshǎo wūrǎn.",th:"ลดมลพิษ"},
    {zh:"节约能源。",pinyin:"Jiéyuē néngyuán.",th:"ประหยัดพลังงาน"},
    {zh:"种树绿化。",pinyin:"Zhòng shù lǜhuà.",th:"ปลูกต้นไม้ทำให้เขียวขจี"},
    {zh:"爱护地球。",pinyin:"Àihù dìqiú.",th:"รักษาโลก"}
  ]},
  {id:79,range:"601-900",title:"文化交流",pinyin:"Wénhuà jiāoliú",desc:"การแลกเปลี่ยนวัฒนธรรม",content:[
    {zh:"了解不同文化。",pinyin:"Liǎojiě bùtóng wénhuà.",th:"เข้าใจวัฒนธรรมที่แตกต่าง"},
    {zh:"尊重传统习俗。",pinyin:"Zūnzhòng chuántǒng xísú.",th:"เคารพประเพณีดั้งเดิม"},
    {zh:"学习外语。",pinyin:"Xuéxí wàiyǔ.",th:"เรียนภาษาต่างประเทศ"},
    {zh:"参加文化活动。",pinyin:"Cānjiā wénhuà huódòng.",th:"เข้าร่วมกิจกรรมทางวัฒนธรรม"},
    {zh:"促进交流合作。",pinyin:"Cùjìn jiāoliú hézuò.",th:"ส่งเสริมการแลกเปลี่ยนและความร่วมมือ"}
  ]},
  {id:80,range:"601-900",title:"健康生活",pinyin:"Jiànkāng shēnghuó",desc:"ชีวิตสุขภาพดี",content:[
    {zh:"规律作息。",pinyin:"Guīlǜ zuòxī.",th:"มีกิจวัตรที่สม่ำเสมอ"},
    {zh:"均衡饮食。",pinyin:"Jūnhéng yǐnshí.",th:"รับประทานอาหารสมดุล"},
    {zh:"适量运动。",pinyin:"Shìliàng yùndòng.",th:"ออกกำลังกายพอเหมาะ"},
    {zh:"保持心情愉快。",pinyin:"Bǎochí xīnqíng yúkuài.",th:"รักษาอารมณ์ให้แจ่มใส"},
    {zh:"定期体检。",pinyin:"Dìngqī tǐjiǎn.",th:"ตรวจสุขภาพเป็นประจำ"}
  ]},
  {id:81,range:"601-900",title:"旅游经历",pinyin:"Lǚyóu jīnglì",desc:"ประสบการณ์ท่องเที่ยว",content:[
    {zh:"旅游让人放松。",pinyin:"Lǚyóu ràng rén fàngsōng.",th:"การท่องเที่ยวทำให้ผ่อนคลาย"},
    {zh:"欣赏美丽的风景。",pinyin:"Xīnshǎng měilì de fēngjǐng.",th:"ชื่นชมทิวทัศน์ที่สวยงาม"},
    {zh:"品尝当地美食。",pinyin:"Pǐncháng dāngdì měishí.",th:"ลิ้มรสอาหารท้องถิ่น"},
    {zh:"拍照留念。",pinyin:"Pāizhào liúniàn.",th:"ถ่ายภาพเก็บไว้เป็นที่ระลึก"},
    {zh:"结识新朋友。",pinyin:"Jiéshí xīn péngyou.",th:"รู้จักเพื่อนใหม่"}
  ]},
  {id:82,range:"601-900",title:"科技发展",pinyin:"Kējì fāzhǎn",desc:"การพัฒนาเทคโนโลยี",content:[
    {zh:"科技改变生活。",pinyin:"Kējì gǎibiàn shēnghuó.",th:"เทคโนโลยีเปลี่ยนแปลงชีวิต"},
    {zh:"网络很方便。",pinyin:"Wǎngluò hěn fāngbiàn.",th:"อินเทอร์เน็ตสะดวกมาก"},
    {zh:"手机功能强大。",pinyin:"Shǒujī gōngnéng qiángdà.",th:"โทรศัพท์มือถือมีฟังก์ชันทรงพลัง"},
    {zh:"电脑帮助工作。",pinyin:"Diànnǎo bāngzhù gōngzuò.",th:"คอมพิวเตอร์ช่วยงาน"},
    {zh:"科技进步很快。",pinyin:"Kējì jìnbù hěn kuài.",th:"เทคโนโลยีก้าวหน้าเร็วมาก"}
  ]},
  {id:83,range:"601-900",title:"环境保护",pinyin:"Huánjìng bǎohù",desc:"การอนุรักษ์สิ่งแวดล้อม",content:[
    {zh:"保护环境人人有责。",pinyin:"Bǎohù huánjìng rénrén yǒu zé.",th:"ทุกคนมีหน้าที่ปกป้องสิ่งแวดล้อม"},
    {zh:"减少污染。",pinyin:"Jiǎnshǎo wūrǎn.",th:"ลดมลพิษ"},
    {zh:"节约能源。",pinyin:"Jiéyuē néngyuán.",th:"ประหยัดพลังงาน"},
    {zh:"种树绿化。",pinyin:"Zhòng shù lǜhuà.",th:"ปลูกต้นไม้ทำให้เขียวขจี"},
    {zh:"爱护地球。",pinyin:"Àihù dìqiú.",th:"รักษาโลก"}
  ]},
  {id:84,range:"601-900",title:"文化交流",pinyin:"Wénhuà jiāoliú",desc:"การแลกเปลี่ยนวัฒนธรรม",content:[
    {zh:"了解不同文化。",pinyin:"Liǎojiě bùtóng wénhuà.",th:"เข้าใจวัฒนธรรมที่แตกต่าง"},
    {zh:"尊重传统习俗。",pinyin:"Zūnzhòng chuántǒng xísú.",th:"เคารพประเพณีดั้งเดิม"},
    {zh:"学习外语。",pinyin:"Xuéxí wàiyǔ.",th:"เรียนภาษาต่างประเทศ"},
    {zh:"参加文化活动。",pinyin:"Cānjiā wénhuà huódòng.",th:"เข้าร่วมกิจกรรมทางวัฒนธรรม"},
    {zh:"促进交流合作。",pinyin:"Cùjìn jiāoliú hézuò.",th:"ส่งเสริมการแลกเปลี่ยนและความร่วมมือ"}
  ]},
  {id:85,range:"601-900",title:"健康生活",pinyin:"Jiànkāng shēnghuó",desc:"ชีวิตสุขภาพดี",content:[
    {zh:"规律作息。",pinyin:"Guīlǜ zuòxī.",th:"มีกิจวัตรที่สม่ำเสมอ"},
    {zh:"均衡饮食。",pinyin:"Jūnhéng yǐnshí.",th:"รับประทานอาหารสมดุล"},
    {zh:"适量运动。",pinyin:"Shìliàng yùndòng.",th:"ออกกำลังกายพอเหมาะ"},
    {zh:"保持心情愉快。",pinyin:"Bǎochí xīnqíng yúkuài.",th:"รักษาอารมณ์ให้แจ่มใส"},
    {zh:"定期体检。",pinyin:"Dìngqī tǐjiǎn.",th:"ตรวจสุขภาพเป็นประจำ"}
  ]},
  {id:86,range:"601-900",title:"旅游经历",pinyin:"Lǚyóu jīnglì",desc:"ประสบการณ์ท่องเที่ยว",content:[
    {zh:"旅游让人放松。",pinyin:"Lǚyóu ràng rén fàngsōng.",th:"การท่องเที่ยวทำให้ผ่อนคลาย"},
    {zh:"欣赏美丽的风景。",pinyin:"Xīnshǎng měilì de fēngjǐng.",th:"ชื่นชมทิวทัศน์ที่สวยงาม"},
    {zh:"品尝当地美食。",pinyin:"Pǐncháng dāngdì měishí.",th:"ลิ้มรสอาหารท้องถิ่น"},
    {zh:"拍照留念。",pinyin:"Pāizhào liúniàn.",th:"ถ่ายภาพเก็บไว้เป็นที่ระลึก"},
    {zh:"结识新朋友。",pinyin:"Jiéshí xīn péngyou.",th:"รู้จักเพื่อนใหม่"}
  ]},
  {id:87,range:"601-900",title:"科技发展",pinyin:"Kējì fāzhǎn",desc:"การพัฒนาเทคโนโลยี",content:[
    {zh:"科技改变生活。",pinyin:"Kējì gǎibiàn shēnghuó.",th:"เทคโนโลยีเปลี่ยนแปลงชีวิต"},
    {zh:"网络很方便。",pinyin:"Wǎngluò hěn fāngbiàn.",th:"อินเทอร์เน็ตสะดวกมาก"},
    {zh:"手机功能强大。",pinyin:"Shǒujī gōngnéng qiángdà.",th:"โทรศัพท์มือถือมีฟังก์ชันทรงพลัง"},
    {zh:"电脑帮助工作。",pinyin:"Diànnǎo bāngzhù gōngzuò.",th:"คอมพิวเตอร์ช่วยงาน"},
    {zh:"科技进步很快。",pinyin:"Kējì jìnbù hěn kuài.",th:"เทคโนโลยีก้าวหน้าเร็วมาก"}
  ]},
  {id:88,range:"601-900",title:"环境保护",pinyin:"Huánjìng bǎohù",desc:"การอนุรักษ์สิ่งแวดล้อม",content:[
    {zh:"保护环境人人有责。",pinyin:"Bǎohù huánjìng rénrén yǒu zé.",th:"ทุกคนมีหน้าที่ปกป้องสิ่งแวดล้อม"},
    {zh:"减少污染。",pinyin:"Jiǎnshǎo wūrǎn.",th:"ลดมลพิษ"},
    {zh:"节约能源。",pinyin:"Jiéyuē néngyuán.",th:"ประหยัดพลังงาน"},
    {zh:"种树绿化。",pinyin:"Zhòng shù lǜhuà.",th:"ปลูกต้นไม้ทำให้เขียวขจี"},
    {zh:"爱护地球。",pinyin:"Àihù dìqiú.",th:"รักษาโลก"}
  ]},
  {id:89,range:"601-900",title:"文化交流",pinyin:"Wénhuà jiāoliú",desc:"การแลกเปลี่ยนวัฒนธรรม",content:[
    {zh:"了解不同文化。",pinyin:"Liǎojiě bùtóng wénhuà.",th:"เข้าใจวัฒนธรรมที่แตกต่าง"},
    {zh:"尊重传统习俗。",pinyin:"Zūnzhòng chuántǒng xísú.",th:"เคารพประเพณีดั้งเดิม"},
    {zh:"学习外语。",pinyin:"Xuéxí wàiyǔ.",th:"เรียนภาษาต่างประเทศ"},
    {zh:"参加文化活动。",pinyin:"Cānjiā wénhuà huódòng.",th:"เข้าร่วมกิจกรรมทางวัฒนธรรม"},
    {zh:"促进交流合作。",pinyin:"Cùjìn jiāoliú hézuò.",th:"ส่งเสริมการแลกเปลี่ยนและความร่วมมือ"}
  ]},
  {id:90,range:"601-900",title:"健康生活",pinyin:"Jiànkāng shēnghuó",desc:"ชีวิตสุขภาพดี",content:[
    {zh:"规律作息。",pinyin:"Guīlǜ zuòxī.",th:"มีกิจวัตรที่สม่ำเสมอ"},
    {zh:"均衡饮食。",pinyin:"Jūnhéng yǐnshí.",th:"รับประทานอาหารสมดุล"},
    {zh:"适量运动。",pinyin:"Shìliàng yùndòng.",th:"ออกกำลังกายพอเหมาะ"},
    {zh:"保持心情愉快。",pinyin:"Bǎochí xīnqíng yúkuài.",th:"รักษาอารมณ์ให้แจ่มใส"},
    {zh:"定期体检。",pinyin:"Dìngqī tǐjiǎn.",th:"ตรวจสุขภาพเป็นประจำ"}
  ]},
  {id:91,range:"901-1200",title:"职业发展",pinyin:"Zhíyè fāzhǎn",desc:"การพัฒนาอาชีพ",content:[
    {zh:"职业规划很重要。",pinyin:"Zhíyè guīhuà hěn zhòngyào.",th:"การวางแผนอาชีพสำคัญมาก"},
    {zh:"不断学习新技能。",pinyin:"Búduàn xuéxí xīn jìnéng.",th:"เรียนรู้ทักษะใหม่อย่างต่อเนื่อง"},
    {zh:"积累工作经验。",pinyin:"Jīlěi gōngzuò jīngyàn.",th:"สะสมประสบการณ์การทำงาน"},
    {zh:"建立人际关系。",pinyin:"Jiànlì rénjì guānxi.",th:"สร้างความสัมพันธ์ระหว่างบุคคล"},
    {zh:"追求职业目标。",pinyin:"Zhuīqiú zhíyè mùbiāo.",th:"ไล่ตามเป้าหมายอาชีพ"}
  ]},
  {id:92,range:"901-1200",title:"人际关系",pinyin:"Rénjì guānxi",desc:"ความสัมพันธ์ระหว่างบุคคล",content:[
    {zh:"真诚待人。",pinyin:"Zhēnchéng dàirén.",th:"ปฏิบัติต่อผู้อื่นด้วยความจริงใจ"},
    {zh:"学会倾听。",pinyin:"Xuéhuì qīngtīng.",th:"เรียนรู้ที่จะรับฟัง"},
    {zh:"尊重他人。",pinyin:"Zūnzhòng tārén.",th:"เคารพผู้อื่น"},
    {zh:"保持沟通。",pinyin:"Bǎochí gōutōng.",th:"รักษาการสื่อสาร"},
    {zh:"互相理解。",pinyin:"Hùxiāng lǐjiě.",th:"เข้าใจซึ่งกันและกัน"}
  ]},
  {id:93,range:"901-1200",title:"时间管理",pinyin:"Shíjiān guǎnlǐ",desc:"การบริหารเวลา",content:[
    {zh:"合理安排时间。",pinyin:"Hélǐ ānpái shíjiān.",th:"จัดเวลาอย่างสมเหตุสมผล"},
    {zh:"分清轻重缓急。",pinyin:"Fēnqīng qīngzhòng huǎnjí.",th:"แยกแยะความสำคัญเร่งด่วน"},
    {zh:"避免拖延。",pinyin:"Bìmiǎn tuōyán.",th:"หลีกเลี่ยงการผัดวันประกันพรุ่ง"},
    {zh:"提高效率。",pinyin:"Tígāo xiàolǜ.",th:"เพิ่มประสิทธิภาพ"},
    {zh:"劳逸结合。",pinyin:"Láoyì jiéhé.",th:"ผสมผสานระหว่างงานและการพักผ่อน"}
  ]},
  {id:94,range:"901-1200",title:"学习态度",pinyin:"Xuéxí tàidu",desc:"ทัศนคติการเรียน",content:[
    {zh:"保持好奇心。",pinyin:"Bǎochí hàoqíxīn.",th:"รักษาความอยากรู้อยากเห็น"},
    {zh:"勇于提问。",pinyin:"Yǒngyú tíwèn.",th:"กล้าตั้งคำถาม"},
    {zh:"善于总结。",pinyin:"Shànyú zǒngjié.",th:"เก่งในการสรุป"},
    {zh:"持之以恒。",pinyin:"Chízhīyǐhéng.",th:"มีความมุ่งมั่นอย่างต่อเนื่อง"},
    {zh:"不怕失败。",pinyin:"Bú pà shībài.",th:"ไม่กลัวความล้มเหลว"}
  ]},
  {id:95,range:"901-1200",title:"生活智慧",pinyin:"Shēnghuó zhìhuì",desc:"ภูมิปัญญาชีวิต",content:[
    {zh:"知足常乐。",pinyin:"Zhīzú chánglè.",th:"รู้จักพอใจมีความสุขเสมอ"},
    {zh:"珍惜当下。",pinyin:"Zhēnxī dāngxià.",th:"ให้คุณค่ากับปัจจุบัน"},
    {zh:"积极乐观。",pinyin:"Jījí lèguān.",th:"มองโลกในแง่บวก"},
    {zh:"感恩生活。",pinyin:"Gǎn'ēn shēnghuó.",th:"มีความกตัญญูต่อชีวิต"},
    {zh:"享受过程。",pinyin:"Xiǎngshòu guòchéng.",th:"เพลิดเพลินกับกระบวนการ"}
  ]},
  {id:96,range:"901-1200",title:"职业发展",pinyin:"Zhíyè fāzhǎn",desc:"การพัฒนาอาชีพ",content:[
    {zh:"职业规划很重要。",pinyin:"Zhíyè guīhuà hěn zhòngyào.",th:"การวางแผนอาชีพสำคัญมาก"},
    {zh:"不断学习新技能。",pinyin:"Búduàn xuéxí xīn jìnéng.",th:"เรียนรู้ทักษะใหม่อย่างต่อเนื่อง"},
    {zh:"积累工作经验。",pinyin:"Jīlěi gōngzuò jīngyàn.",th:"สะสมประสบการณ์การทำงาน"},
    {zh:"建立人际关系。",pinyin:"Jiànlì rénjì guānxi.",th:"สร้างความสัมพันธ์ระหว่างบุคคล"},
    {zh:"追求职业目标。",pinyin:"Zhuīqiú zhíyè mùbiāo.",th:"ไล่ตามเป้าหมายอาชีพ"}
  ]},
  {id:97,range:"901-1200",title:"人际关系",pinyin:"Rénjì guānxi",desc:"ความสัมพันธ์ระหว่างบุคคล",content:[
    {zh:"真诚待人。",pinyin:"Zhēnchéng dàirén.",th:"ปฏิบัติต่อผู้อื่นด้วยความจริงใจ"},
    {zh:"学会倾听。",pinyin:"Xuéhuì qīngtīng.",th:"เรียนรู้ที่จะรับฟัง"},
    {zh:"尊重他人。",pinyin:"Zūnzhòng tārén.",th:"เคารพผู้อื่น"},
    {zh:"保持沟通。",pinyin:"Bǎochí gōutōng.",th:"รักษาการสื่อสาร"},
    {zh:"互相理解。",pinyin:"Hùxiāng lǐjiě.",th:"เข้าใจซึ่งกันและกัน"}
  ]},
  {id:98,range:"901-1200",title:"时间管理",pinyin:"Shíjiān guǎnlǐ",desc:"การบริหารเวลา",content:[
    {zh:"合理安排时间。",pinyin:"Hélǐ ānpái shíjiān.",th:"จัดเวลาอย่างสมเหตุสมผล"},
    {zh:"分清轻重缓急。",pinyin:"Fēnqīng qīngzhòng huǎnjí.",th:"แยกแยะความสำคัญเร่งด่วน"},
    {zh:"避免拖延。",pinyin:"Bìmiǎn tuōyán.",th:"หลีกเลี่ยงการผัดวันประกันพรุ่ง"},
    {zh:"提高效率。",pinyin:"Tígāo xiàolǜ.",th:"เพิ่มประสิทธิภาพ"},
    {zh:"劳逸结合。",pinyin:"Láoyì jiéhé.",th:"ผสมผสานระหว่างงานและการพักผ่อน"}
  ]},
  {id:99,range:"901-1200",title:"学习态度",pinyin:"Xuéxí tàidu",desc:"ทัศนคติการเรียน",content:[
    {zh:"保持好奇心。",pinyin:"Bǎochí hàoqíxīn.",th:"รักษาความอยากรู้อยากเห็น"},
    {zh:"勇于提问。",pinyin:"Yǒngyú tíwèn.",th:"กล้าตั้งคำถาม"},
    {zh:"善于总结。",pinyin:"Shànyú zǒngjié.",th:"เก่งในการสรุป"},
    {zh:"持之以恒。",pinyin:"Chízhīyǐhéng.",th:"มีความมุ่งมั่นอย่างต่อเนื่อง"},
    {zh:"不怕失败。",pinyin:"Bú pà shībài.",th:"ไม่กลัวความล้มเหลว"}
  ]},
  {id:100,range:"901-1200",title:"生活智慧",pinyin:"Shēnghuó zhìhuì",desc:"ภูมิปัญญาชีวิต",content:[
    {zh:"知足常乐。",pinyin:"Zhīzú chánglè.",th:"รู้จักพอใจมีความสุขเสมอ"},
    {zh:"珍惜当下。",pinyin:"Zhēnxī dāngxià.",th:"ให้คุณค่ากับปัจจุบัน"},
    {zh:"积极乐观。",pinyin:"Jījí lèguān.",th:"มองโลกในแง่บวก"},
    {zh:"感恩生活。",pinyin:"Gǎn'ēn shēnghuó.",th:"มีความกตัญญูต่อชีวิต"},
    {zh:"享受过程。",pinyin:"Xiǎngshòu guòchéng.",th:"เพลิดเพลินกับกระบวนการ"}
  ]},
  {id:101,range:"901-1200",title:"职业发展",pinyin:"Zhíyè fāzhǎn",desc:"การพัฒนาอาชีพ",content:[
    {zh:"职业规划很重要。",pinyin:"Zhíyè guīhuà hěn zhòngyào.",th:"การวางแผนอาชีพสำคัญมาก"},
    {zh:"不断学习新技能。",pinyin:"Búduàn xuéxí xīn jìnéng.",th:"เรียนรู้ทักษะใหม่อย่างต่อเนื่อง"},
    {zh:"积累工作经验。",pinyin:"Jīlěi gōngzuò jīngyàn.",th:"สะสมประสบการณ์การทำงาน"},
    {zh:"建立人际关系。",pinyin:"Jiànlì rénjì guānxi.",th:"สร้างความสัมพันธ์ระหว่างบุคคล"},
    {zh:"追求职业目标。",pinyin:"Zhuīqiú zhíyè mùbiāo.",th:"ไล่ตามเป้าหมายอาชีพ"}
  ]},
  {id:102,range:"901-1200",title:"人际关系",pinyin:"Rénjì guānxi",desc:"ความสัมพันธ์ระหว่างบุคคล",content:[
    {zh:"真诚待人。",pinyin:"Zhēnchéng dàirén.",th:"ปฏิบัติต่อผู้อื่นด้วยความจริงใจ"},
    {zh:"学会倾听。",pinyin:"Xuéhuì qīngtīng.",th:"เรียนรู้ที่จะรับฟัง"},
    {zh:"尊重他人。",pinyin:"Zūnzhòng tārén.",th:"เคารพผู้อื่น"},
    {zh:"保持沟通。",pinyin:"Bǎochí gōutōng.",th:"รักษาการสื่อสาร"},
    {zh:"互相理解。",pinyin:"Hùxiāng lǐjiě.",th:"เข้าใจซึ่งกันและกัน"}
  ]},
  {id:103,range:"901-1200",title:"时间管理",pinyin:"Shíjiān guǎnlǐ",desc:"การบริหารเวลา",content:[
    {zh:"合理安排时间。",pinyin:"Hélǐ ānpái shíjiān.",th:"จัดเวลาอย่างสมเหตุสมผล"},
    {zh:"分清轻重缓急。",pinyin:"Fēnqīng qīngzhòng huǎnjí.",th:"แยกแยะความสำคัญเร่งด่วน"},
    {zh:"避免拖延。",pinyin:"Bìmiǎn tuōyán.",th:"หลีกเลี่ยงการผัดวันประกันพรุ่ง"},
    {zh:"提高效率。",pinyin:"Tígāo xiàolǜ.",th:"เพิ่มประสิทธิภาพ"},
    {zh:"劳逸结合。",pinyin:"Láoyì jiéhé.",th:"ผสมผสานระหว่างงานและการพักผ่อน"}
  ]},
  {id:104,range:"901-1200",title:"学习态度",pinyin:"Xuéxí tàidu",desc:"ทัศนคติการเรียน",content:[
    {zh:"保持好奇心。",pinyin:"Bǎochí hàoqíxīn.",th:"รักษาความอยากรู้อยากเห็น"},
    {zh:"勇于提问。",pinyin:"Yǒngyú tíwèn.",th:"กล้าตั้งคำถาม"},
    {zh:"善于总结。",pinyin:"Shànyú zǒngjié.",th:"เก่งในการสรุป"},
    {zh:"持之以恒。",pinyin:"Chízhīyǐhéng.",th:"มีความมุ่งมั่นอย่างต่อเนื่อง"},
    {zh:"不怕失败。",pinyin:"Bú pà shībài.",th:"ไม่กลัวความล้มเหลว"}
  ]},
  {id:105,range:"901-1200",title:"生活智慧",pinyin:"Shēnghuó zhìhuì",desc:"ภูมิปัญญาชีวิต",content:[
    {zh:"知足常乐。",pinyin:"Zhīzú chánglè.",th:"รู้จักพอใจมีความสุขเสมอ"},
    {zh:"珍惜当下。",pinyin:"Zhēnxī dāngxià.",th:"ให้คุณค่ากับปัจจุบัน"},
    {zh:"积极乐观。",pinyin:"Jījí lèguān.",th:"มองโลกในแง่บวก"},
    {zh:"感恩生活。",pinyin:"Gǎn'ēn shēnghuó.",th:"มีความกตัญญูต่อชีวิต"},
    {zh:"享受过程。",pinyin:"Xiǎngshòu guòchéng.",th:"เพลิดเพลินกับกระบวนการ"}
  ]},
  {id:106,range:"901-1200",title:"职业发展",pinyin:"Zhíyè fāzhǎn",desc:"การพัฒนาอาชีพ",content:[
    {zh:"职业规划很重要。",pinyin:"Zhíyè guīhuà hěn zhòngyào.",th:"การวางแผนอาชีพสำคัญมาก"},
    {zh:"不断学习新技能。",pinyin:"Búduàn xuéxí xīn jìnéng.",th:"เรียนรู้ทักษะใหม่อย่างต่อเนื่อง"},
    {zh:"积累工作经验。",pinyin:"Jīlěi gōngzuò jīngyàn.",th:"สะสมประสบการณ์การทำงาน"},
    {zh:"建立人际关系。",pinyin:"Jiànlì rénjì guānxi.",th:"สร้างความสัมพันธ์ระหว่างบุคคล"},
    {zh:"追求职业目标。",pinyin:"Zhuīqiú zhíyè mùbiāo.",th:"ไล่ตามเป้าหมายอาชีพ"}
  ]},
  {id:107,range:"901-1200",title:"人际关系",pinyin:"Rénjì guānxi",desc:"ความสัมพันธ์ระหว่างบุคคล",content:[
    {zh:"真诚待人。",pinyin:"Zhēnchéng dàirén.",th:"ปฏิบัติต่อผู้อื่นด้วยความจริงใจ"},
    {zh:"学会倾听。",pinyin:"Xuéhuì qīngtīng.",th:"เรียนรู้ที่จะรับฟัง"},
    {zh:"尊重他人。",pinyin:"Zūnzhòng tārén.",th:"เคารพผู้อื่น"},
    {zh:"保持沟通。",pinyin:"Bǎochí gōutōng.",th:"รักษาการสื่อสาร"},
    {zh:"互相理解。",pinyin:"Hùxiāng lǐjiě.",th:"เข้าใจซึ่งกันและกัน"}
  ]},
  {id:108,range:"901-1200",title:"时间管理",pinyin:"Shíjiān guǎnlǐ",desc:"การบริหารเวลา",content:[
    {zh:"合理安排时间。",pinyin:"Hélǐ ānpái shíjiān.",th:"จัดเวลาอย่างสมเหตุสมผล"},
    {zh:"分清轻重缓急。",pinyin:"Fēnqīng qīngzhòng huǎnjí.",th:"แยกแยะความสำคัญเร่งด่วน"},
    {zh:"避免拖延。",pinyin:"Bìmiǎn tuōyán.",th:"หลีกเลี่ยงการผัดวันประกันพรุ่ง"},
    {zh:"提高效率。",pinyin:"Tígāo xiàolǜ.",th:"เพิ่มประสิทธิภาพ"},
    {zh:"劳逸结合。",pinyin:"Láoyì jiéhé.",th:"ผสมผสานระหว่างงานและการพักผ่อน"}
  ]},
  {id:109,range:"901-1200",title:"学习态度",pinyin:"Xuéxí tàidu",desc:"ทัศนคติการเรียน",content:[
    {zh:"保持好奇心。",pinyin:"Bǎochí hàoqíxīn.",th:"รักษาความอยากรู้อยากเห็น"},
    {zh:"勇于提问。",pinyin:"Yǒngyú tíwèn.",th:"กล้าตั้งคำถาม"},
    {zh:"善于总结。",pinyin:"Shànyú zǒngjié.",th:"เก่งในการสรุป"},
    {zh:"持之以恒。",pinyin:"Chízhīyǐhéng.",th:"มีความมุ่งมั่นอย่างต่อเนื่อง"},
    {zh:"不怕失败。",pinyin:"Bú pà shībài.",th:"ไม่กลัวความล้มเหลว"}
  ]},
  {id:110,range:"901-1200",title:"生活智慧",pinyin:"Shēnghuó zhìhuì",desc:"ภูมิปัญญาชีวิต",content:[
    {zh:"知足常乐。",pinyin:"Zhīzú chánglè.",th:"รู้จักพอใจมีความสุขเสมอ"},
    {zh:"珍惜当下。",pinyin:"Zhēnxī dāngxià.",th:"ให้คุณค่ากับปัจจุบัน"},
    {zh:"积极乐观。",pinyin:"Jījí lèguān.",th:"มองโลกในแง่บวก"},
    {zh:"感恩生活。",pinyin:"Gǎn'ēn shēnghuó.",th:"มีความกตัญญูต่อชีวิต"},
    {zh:"享受过程。",pinyin:"Xiǎngshòu guòchéng.",th:"เพลิดเพลินกับกระบวนการ"}
  ]},
  {id:111,range:"901-1200",title:"职业发展",pinyin:"Zhíyè fāzhǎn",desc:"การพัฒนาอาชีพ",content:[
    {zh:"职业规划很重要。",pinyin:"Zhíyè guīhuà hěn zhòngyào.",th:"การวางแผนอาชีพสำคัญมาก"},
    {zh:"不断学习新技能。",pinyin:"Búduàn xuéxí xīn jìnéng.",th:"เรียนรู้ทักษะใหม่อย่างต่อเนื่อง"},
    {zh:"积累工作经验。",pinyin:"Jīlěi gōngzuò jīngyàn.",th:"สะสมประสบการณ์การทำงาน"},
    {zh:"建立人际关系。",pinyin:"Jiànlì rénjì guānxi.",th:"สร้างความสัมพันธ์ระหว่างบุคคล"},
    {zh:"追求职业目标。",pinyin:"Zhuīqiú zhíyè mùbiāo.",th:"ไล่ตามเป้าหมายอาชีพ"}
  ]},
  {id:112,range:"901-1200",title:"人际关系",pinyin:"Rénjì guānxi",desc:"ความสัมพันธ์ระหว่างบุคคล",content:[
    {zh:"真诚待人。",pinyin:"Zhēnchéng dàirén.",th:"ปฏิบัติต่อผู้อื่นด้วยความจริงใจ"},
    {zh:"学会倾听。",pinyin:"Xuéhuì qīngtīng.",th:"เรียนรู้ที่จะรับฟัง"},
    {zh:"尊重他人。",pinyin:"Zūnzhòng tārén.",th:"เคารพผู้อื่น"},
    {zh:"保持沟通。",pinyin:"Bǎochí gōutōng.",th:"รักษาการสื่อสาร"},
    {zh:"互相理解。",pinyin:"Hùxiāng lǐjiě.",th:"เข้าใจซึ่งกันและกัน"}
  ]},
  {id:113,range:"901-1200",title:"时间管理",pinyin:"Shíjiān guǎnlǐ",desc:"การบริหารเวลา",content:[
    {zh:"合理安排时间。",pinyin:"Hélǐ ānpái shíjiān.",th:"จัดเวลาอย่างสมเหตุสมผล"},
    {zh:"分清轻重缓急。",pinyin:"Fēnqīng qīngzhòng huǎnjí.",th:"แยกแยะความสำคัญเร่งด่วน"},
    {zh:"避免拖延。",pinyin:"Bìmiǎn tuōyán.",th:"หลีกเลี่ยงการผัดวันประกันพรุ่ง"},
    {zh:"提高效率。",pinyin:"Tígāo xiàolǜ.",th:"เพิ่มประสิทธิภาพ"},
    {zh:"劳逸结合。",pinyin:"Láoyì jiéhé.",th:"ผสมผสานระหว่างงานและการพักผ่อน"}
  ]},
  {id:114,range:"901-1200",title:"学习态度",pinyin:"Xuéxí tàidu",desc:"ทัศนคติการเรียน",content:[
    {zh:"保持好奇心。",pinyin:"Bǎochí hàoqíxīn.",th:"รักษาความอยากรู้อยากเห็น"},
    {zh:"勇于提问。",pinyin:"Yǒngyú tíwèn.",th:"กล้าตั้งคำถาม"},
    {zh:"善于总结。",pinyin:"Shànyú zǒngjié.",th:"เก่งในการสรุป"},
    {zh:"持之以恒。",pinyin:"Chízhīyǐhéng.",th:"มีความมุ่งมั่นอย่างต่อเนื่อง"},
    {zh:"不怕失败。",pinyin:"Bú pà shībài.",th:"ไม่กลัวความล้มเหลว"}
  ]},
  {id:115,range:"901-1200",title:"生活智慧",pinyin:"Shēnghuó zhìhuì",desc:"ภูมิปัญญาชีวิต",content:[
    {zh:"知足常乐。",pinyin:"Zhīzú chánglè.",th:"รู้จักพอใจมีความสุขเสมอ"},
    {zh:"珍惜当下。",pinyin:"Zhēnxī dāngxià.",th:"ให้คุณค่ากับปัจจุบัน"},
    {zh:"积极乐观。",pinyin:"Jījí lèguān.",th:"มองโลกในแง่บวก"},
    {zh:"感恩生活。",pinyin:"Gǎn'ēn shēnghuó.",th:"มีความกตัญญูต่อชีวิต"},
    {zh:"享受过程。",pinyin:"Xiǎngshòu guòchéng.",th:"เพลิดเพลินกับกระบวนการ"}
  ]},
  {id:116,range:"901-1200",title:"职业发展",pinyin:"Zhíyè fāzhǎn",desc:"การพัฒนาอาชีพ",content:[
    {zh:"职业规划很重要。",pinyin:"Zhíyè guīhuà hěn zhòngyào.",th:"การวางแผนอาชีพสำคัญมาก"},
    {zh:"不断学习新技能。",pinyin:"Búduàn xuéxí xīn jìnéng.",th:"เรียนรู้ทักษะใหม่อย่างต่อเนื่อง"},
    {zh:"积累工作经验。",pinyin:"Jīlěi gōngzuò jīngyàn.",th:"สะสมประสบการณ์การทำงาน"},
    {zh:"建立人际关系。",pinyin:"Jiànlì rénjì guānxi.",th:"สร้างความสัมพันธ์ระหว่างบุคคล"},
    {zh:"追求职业目标。",pinyin:"Zhuīqiú zhíyè mùbiāo.",th:"ไล่ตามเป้าหมายอาชีพ"}
  ]},
  {id:117,range:"901-1200",title:"人际关系",pinyin:"Rénjì guānxi",desc:"ความสัมพันธ์ระหว่างบุคคล",content:[
    {zh:"真诚待人。",pinyin:"Zhēnchéng dàirén.",th:"ปฏิบัติต่อผู้อื่นด้วยความจริงใจ"},
    {zh:"学会倾听。",pinyin:"Xuéhuì qīngtīng.",th:"เรียนรู้ที่จะรับฟัง"},
    {zh:"尊重他人。",pinyin:"Zūnzhòng tārén.",th:"เคารพผู้อื่น"},
    {zh:"保持沟通。",pinyin:"Bǎochí gōutōng.",th:"รักษาการสื่อสาร"},
    {zh:"互相理解。",pinyin:"Hùxiāng lǐjiě.",th:"เข้าใจซึ่งกันและกัน"}
  ]},
  {id:118,range:"901-1200",title:"时间管理",pinyin:"Shíjiān guǎnlǐ",desc:"การบริหารเวลา",content:[
    {zh:"合理安排时间。",pinyin:"Hélǐ ānpái shíjiān.",th:"จัดเวลาอย่างสมเหตุสมผล"},
    {zh:"分清轻重缓急。",pinyin:"Fēnqīng qīngzhòng huǎnjí.",th:"แยกแยะความสำคัญเร่งด่วน"},
    {zh:"避免拖延。",pinyin:"Bìmiǎn tuōyán.",th:"หลีกเลี่ยงการผัดวันประกันพรุ่ง"},
    {zh:"提高效率。",pinyin:"Tígāo xiàolǜ.",th:"เพิ่มประสิทธิภาพ"},
    {zh:"劳逸结合。",pinyin:"Láoyì jiéhé.",th:"ผสมผสานระหว่างงานและการพักผ่อน"}
  ]},
  {id:119,range:"901-1200",title:"学习态度",pinyin:"Xuéxí tàidu",desc:"ทัศนคติการเรียน",content:[
    {zh:"保持好奇心。",pinyin:"Bǎochí hàoqíxīn.",th:"รักษาความอยากรู้อยากเห็น"},
    {zh:"勇于提问。",pinyin:"Yǒngyú tíwèn.",th:"กล้าตั้งคำถาม"},
    {zh:"善于总结。",pinyin:"Shànyú zǒngjié.",th:"เก่งในการสรุป"},
    {zh:"持之以恒。",pinyin:"Chízhīyǐhéng.",th:"มีความมุ่งมั่นอย่างต่อเนื่อง"},
    {zh:"不怕失败。",pinyin:"Bú pà shībài.",th:"ไม่กลัวความล้มเหลว"}
  ]},
  {id:120,range:"901-1200",title:"生活智慧",pinyin:"Shēnghuó zhìhuì",desc:"ภูมิปัญญาชีวิต",content:[
    {zh:"知足常乐。",pinyin:"Zhīzú chánglè.",th:"รู้จักพอใจมีความสุขเสมอ"},
    {zh:"珍惜当下。",pinyin:"Zhēnxī dāngxià.",th:"ให้คุณค่ากับปัจจุบัน"},
    {zh:"积极乐观。",pinyin:"Jījí lèguān.",th:"มองโลกในแง่บวก"},
    {zh:"感恩生活。",pinyin:"Gǎn'ēn shēnghuó.",th:"มีความกตัญญูต่อชีวิต"},
    {zh:"享受过程。",pinyin:"Xiǎngshòu guòchéng.",th:"เพลิดเพลินกับกระบวนการ"}
  ]}
];
