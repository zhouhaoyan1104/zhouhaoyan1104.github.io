////首页京东秒杀部分的效果（倒计时）
//function countTime() {
//    if(m==undefined,h==undefined,s==undefined){
//        h=0,m=0,s=0
//    }
//    var date = new Date();
//    var now = date.getTime();
//    var str = "2018/5/31 15:12:00";
//    var endDate = new Date(str);
//    var end = endDate.getTime();
//    var leftTime = end - now;
//    var d, h, m, s;
//    if (leftTime >= 0) {
//        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
//        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
//        m = Math.floor(leftTime / 1000 / 60 % 60);
//        s = Math.floor(leftTime / 1000 % 60);
//    }
//    document.getElementById("_h").innerHTML = h;
//    document.getElementById("_m").innerHTML = m;
//    document.getElementById("_s").innerHTML = s;
//    setTimeout(countTime, 1000);
//
//}
//
//countTime();
//  






var fanhui=document.querySelector(".dingbu");
//
fanhui.addEventListener("click",function(){
    var t=setInterval(function(){
        document.body.scrollTop=document.body.scrollTop-20;
        document.documentElement.scrollTop=document.documentElement.scrollTop-20;
        if(document.body.scrollTop===0){
            clearInterval(t);
        }
    },10)
})



var search=document.querySelector(".sousuo");
window.onscroll=function(){
    if(document.body.scrollTop>150){
        search.style.backgroundColor="red";
        fanhui.style.opacity="1";
        search.style.top="0";
    }else{
      search.style.backgroundColor="transparent";
        fanhui.style.opacity="0";
        search.style.top="auto";
    }
}

function a(){
    $(".news .center .text").css({"transform":"translateY(-22px)","transition":"1s"});
}
function b(){
    $(".news .center .text").css({"transform":"translateY(0px)","transition":"0s"});
    $(".news .center .text").eq(0).appendTo($(".news .center"));
}
setInterval(function(){
    a();
    setTimeout(function(){
        b();
    },1000)
},2000)


var mySwiper = new Swiper ('.banner .swiper-container', {
    loop: true,
    pagination:{
      el:'.swiper-pagination',
    }
})  

var swiper = new Swiper('.pics .swiper-container', {
      loop: true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
});



new Vue({
    el:"#tui",
    data:{
        arrs:[
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/1_02.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"ziying",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/2_03.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"qqg",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/3_03.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/4.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"ziying",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/5.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/6.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"qqg",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/7.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/8.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"ziying",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/9.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"ziying",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/10.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/11.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/12.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/13.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/14.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/15.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/16.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/17.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"",xiang:"看相似"},
            {name:"【京东超市】e洁自动收口垃圾袋加厚手提式45c...",img:"img/main/tuijian/18.jpg",link:"",link2:"",price:"￥21.80",hui:"￥12.98",pio:"",xiang:"看相似"}
        ]
    }
})


new Vue({
    el:"#nei",
    data:{
        lists:[
            {
                img:"img/sotr/main/banner1.jpg",
                biaotis:[
                    {
                        h5:"热门推荐",
                        arss:[
                            {name:"电风扇",img:"img/sotr/main/tuijian/1.png",link:""},
                            {name:"手机",img:"img/sotr/main/tuijian/2.jpg",link:""},
                            {name:"空调",img:"img/sotr/main/tuijian/3.png",link:""},
                            {name:"充电宝",img:"img/sotr/main/tuijian/4.png",link:""},
                            {name:"蓝牙耳机",img:"img/sotr/main/tuijian/5.jpg",link:""},
                            {name:"蚊帐",img:"img/sotr/main/tuijian/6.png",link:""},
                            {name:"凉席",img:"img/sotr/main/tuijian/7.png",link:""},
                            {name:"耳机",img:"img/sotr/main/tuijian/8.png",link:""},
                            {name:"电饭煲",img:"img/sotr/main/tuijian/9.jpg",link:""},
                            {name:"空调挂机",img:"img/sotr/main/tuijian/10.png",link:""},
                            {name:"路由器",img:"img/sotr/main/tuijian/11.png",link:""},
                            {name:"空调扇",img:"img/sotr/main/tuijian/12.png",link:""},
                            {name:"男鞋",img:"img/sotr/main/tuijian/13.png",link:""},
                            {name:"热水器",img:"img/sotr/main/tuijian/14.png",link:""},
                            {name:"防晒",img:"img/sotr/main/tuijian/15.jpg",link:""}
                        ]
                    },
                    {
                        h5:"家电热搜",
                        arss:[
                            {name:"冰箱",img:"img/sotr/main/tuijian/16.png",link:""},
                            {name:"洗衣机",img:"img/sotr/main/tuijian/17.png",link:""},
                            {name:"电视",img:"img/sotr/main/tuijian/18.png",link:""}
                        ]
                    },
                    {
                        h5:"热卖手机",
                        arss:[
                            {name:"华为手机",img:"img/sotr/main/tuijian/19.png",link:""},
                            {name:"小米手机",img:"img/sotr/main/tuijian/20.png",link:""},
                            {name:"苹果",img:"img/sotr/main/tuijian/21.png",link:""}
                        ]
                    }
                ]
            },
            {
                img:"img/sotr/main/banner.jpg",
                biaotis:[
                     {
                        h5:"热门品牌",
                        arss:[
                            {name:"小米",img:"img/sotr/main/1.png",link:""},
                            {name:"华为",img:"img/sotr/main/2.jpg",link:""},
                            {name:"荣耀",img:"img/sotr/main/3.jpg",link:""},
                            {name:"iPhone",img:"img/sotr/main/4.jpg",link:""},
                            {name:"vivo",img:"img/sotr/main/5.png",link:""},
                            {name:"oppo",img:"img/sotr/main/6.png",link:""},
                            {name:"魅族",img:"img/sotr/main/7.jpg",link:""},
                            {name:"三星",img:"img/sotr/main/8.png",link:""},
                            {name:"一加",img:"img/sotr/main/9.jpg",link:""},
                            {name:"360手机",img:"img/sotr/main/10.jpg",link:""},
                            {name:"锤子手机",img:"img/sotr/main/11.jpg",link:""},
                            {name:"努比亚",img:"img/sotr/main/12.jpg",link:""}
                        ]
                    },
                    {
                        h5:"手机通讯",
                        arss:[
                            {name:"老人机",img:"img/sotr/main/13.jpg",link:""},
                            {name:"手机",img:"img/sotr/main/14.jpg",link:""},
                            {name:"全屏手机",img:"img/sotr/main/15.jpg",link:""},
                            {name:"游戏手机",img:"img/sotr/main/16.jpg",link:""},
                            {name:"拍照手机",img:"img/sotr/main/17.jpg",link:""},
                            {name:"对讲机",img:"img/sotr/main/18.jpg",link:""},
                            {name:"京东回收",img:"img/sotr/main/19.jpg",link:""},
                            {name:"女性手机",img:"img/sotr/main/20.jpg",link:""},
                            {name:"京东维修",img:"img/sotr/main/21.jpg",link:""}
                        ]
                    },
                    {
                        h5:"运营商",
                        arss:[
                            {name:"合约机",img:"img/sotr/main/22.png",link:""},
                            {name:"选号卡",img:"img/sotr/main/23.png",link:""},
                            {name:"办套餐",img:"img/sotr/main/24.jpg",link:""},
                            {name:"京东网厅",img:"img/sotr/main/25.jpg",link:""}
                        ]
                    },
                    {
                        h5:"手机配件",
                        arss:[
                            {name:"数据线",img:"img/sotr/main/26.jpg",link:""},
                            {name:"手机储存卡",img:"img/sotr/main/27.jpg",link:""},
                            {name:"充电宝",img:"img/sotr/main/28.jpg",link:""},
                            {name:"手机贴膜",img:"img/sotr/main/29.jpg",link:""},
                            {name:"手机耳机",img:"img/sotr/main/30.jpg",link:""},
                            {name:"蓝牙耳机",img:"img/sotr/main/31.jpg",link:""},
                            {name:"手机支架",img:"img/sotr/main/32.jpg",link:""},
                            {name:"手机饰品",img:"img/sotr/main/33.jpg",link:""},
                            {name:"车载配件",img:"img/sotr/main/34.jpg",link:""},
                            {name:"充电器",img:"img/sotr/main/35.jpg",link:""},
                            {name:"手机电池",img:"img/sotr/main/36.jpg",link:""},
                            {name:"创意配件",img:"img/sotr/main/37.jpg",link:""},
                            {name:"拍照配件",img:"img/sotr/main/38.jpg",link:""},
                            {name:"苹果周边",img:"img/sotr/main/39.jpg",link:""},
                            {name:"手机壳",img:"img/sotr/main/40.jpg",link:""},
                            {name:"无线充电器",img:"img/sotr/main/41.jpg",link:""},
                            {name:"背夹充电宝",img:"img/sotr/main/42.jpg",link:""},
                            {name:"手机转接",img:"img/sotr/main/43.jpg",link:""}
                        ]
                    },
                    {
                        h5:"摄影摄像",
                        arss:[
                            {name:"单反相机",img:"img/sotr/main/44.jpg",link:""},
                            {name:"数码相机",img:"img/sotr/main/45.jpg",link:""},
                            {name:"拍立得",img:"img/sotr/main/46.jpg",link:""},
                            {name:"户外器材",img:"img/sotr/main/47.jpg",link:""},
                            {name:"微单相机",img:"img/sotr/main/48.jpg",link:""},
                            {name:"摄像机",img:"img/sotr/main/49.jpg",link:""},
                            {name:"运动相机",img:"img/sotr/main/50.jpg",link:""},
                            {name:"镜头",img:"img/sotr/main/51.jpg",link:""},
                            {name:"影棚器材",img:"img/sotr/main/52.jpg",link:""},
                            {name:"冲印服务",img:"img/sotr/main/53.png",link:""}
                        ]
                    },
                    {
                        h5:"影音娱乐",
                        arss:[
                            {name:"无线音响",img:"img/sotr/main/54.jpg",link:""},
                            {name:"音响/音箱",img:"img/sotr/main/55.jpg",link:""},
                            {name:"mp3/mp4",img:"img/sotr/main/56.jpg",link:""},
                            {name:"耳机/耳麦",img:"img/sotr/main/57.jpg",link:""},
                            {name:"收音机",img:"img/sotr/main/58.jpg",link:""},
                            {name:"麦克风",img:"img/sotr/main/59.jpg",link:""},
                            {name:"专业音频",img:"img/sotr/main/60.jpg",link:""}
                        ]
                    },
                    {
                        h5:"数码配件",
                        arss:[
                            {name:"储存卡",img:"img/sotr/main/61.jpg",link:""},
                            {name:"三脚架",img:"img/sotr/main/62.jpg",link:""},
                            {name:"数码支架",img:"img/sotr/main/63.jpg",link:""},
                            {name:"读卡器",img:"img/sotr/main/64.jpg",link:""},
                            {name:"滤镜",img:"img/sotr/main/65.jpg",link:""},
                            {name:"相机清洁",img:"img/sotr/main/66.jpg",link:""},
                            {name:"镜头附件",img:"img/sotr/main/82.jpg",link:""},
                            {name:"相机包",img:"img/sotr/main/67.jpg",link:""},
                            {name:"闪光灯",img:"img/sotr/main/68.jpg",link:""},
                            {name:"机身附件",img:"img/sotr/main/69.jpg",link:""},
                            {name:"电池",img:"img/sotr/main/70.jpg",link:""}
                        ]
                    },
                    {
                        h5:"智能设备",
                        arss:[
                            {name:"智能手环",img:"img/sotr/main/71.jpg",link:""},
                            {name:"智能手表",img:"img/sotr/main/72.jpg",link:""},
                            {name:"智能家居",img:"img/sotr/main/73.jpg",link:""},
                            {name:"智能机器人",img:"img/sotr/main/74.jpg",link:""},
                            {name:"健康监测",img:"img/sotr/main/75.jpg",link:""},
                            {name:"体感车",img:"img/sotr/main/76.jpg",link:""},
                            {name:"无人机",img:"img/sotr/main/77.jpg",link:""},
                            {name:"其他配件",img:"img/sotr/main/78.jpg",link:""},
                            {name:"VR眼镜",img:"img/sotr/main/79.jpg",link:""},
                            {name:"运动跟踪器",img:"img/sotr/main/80.jpg",link:""},
                            {name:"智能配饰",img:"img/sotr/main/81.jpg",link:""}
                        ]
                    },
                    {
                        h5:"电子教育",
                        arss:[
                            {name:"学生平板",img:"img/sotr/main/82.jpg",link:""},
                            {name:"电子书",img:"img/sotr/main/83.jpg",link:""},
                            {name:"录音笔",img:"img/sotr/main/84.jpg",link:""},
                            {name:"早教益智",img:"img/sotr/main/85.jpg",link:""},
                            {name:"电子词典",img:"img/sotr/main/86.jpg",link:""},
                            {name:"点读机",img:"img/sotr/main/87.jpg",link:""},
                            {name:"复读机",img:"img/sotr/main/88.jpg",link:""}
                        ]
                    }
                ]
            },
            {
                biaotis:[
                     {
                        h5:"厨房小店",
                        arss:[
                            {name:"电水壶",img:"img/sotr/main/dianqi/1.jpg",link:""},
                            {name:"电压力锅",img:"img/sotr/main/dianqi/2.jpg",link:""},
                            {name:"电饭煲",img:"img/sotr/main/dianqi/3.jpg",link:""},
                            {name:"电磁炉",img:"img/sotr/main/dianqi/4.jpg",link:""},
                            {name:"微波炉",img:"img/sotr/main/dianqi/5.jpg",link:""},
                            {name:"电饼铛",img:"img/sotr/main/dianqi/6.jpg",link:""},
                            {name:"豆浆机",img:"img/sotr/main/dianqi/7.jpg",link:""},
                            {name:"多用途锅",img:"img/sotr/main/dianqi/8.jpg",link:""},
                            {name:"料理机",img:"img/sotr/main/dianqi/9.jpg",link:""},
                            {name:"榨汁机",img:"img/sotr/main/dianqi/10.jpg",link:""},
                            {name:"电烤箱",img:"img/sotr/main/dianqi/11.jpg",link:""},
                            {name:"养生壶",img:"img/sotr/main/dianqi/12.jpg",link:""},
                            {name:"电炖锅",img:"img/sotr/main/dianqi/13.jpg",link:""},
                            {name:"电烧烤炉",img:"img/sotr/main/dianqi/23.jpg",link:""},
                            {name:"面包机",img:"img/sotr/main/dianqi/14.jpg",link:""},
                            {name:"咖啡机",img:"img/sotr/main/dianqi/15.jpg",link:""},
                            {name:"煮蛋机",img:"img/sotr/main/dianqi/16.jpg",link:""},
                            {name:"电热饭盒",img:"img/sotr/main/dianqi/17.jpg",link:""},
                            {name:"厨房电器",img:"img/sotr/main/dianqi/18.jpg",link:""},
                            {name:"面包机",img:"img/sotr/main/dianqi/19.jpg",link:""},
                            {name:"酸奶机",img:"img/sotr/main/dianqi/20.jpg",link:""},
                            {name:"空气炸锅",img:"img/sotr/main/dianqi/21.jpg",link:""},
                            {name:"蔬果解毒机",img:"img/sotr/main/dianqi/22.jpg",link:""}
                        ]
                    },
                    {
                        h5:"个护健康",
                        arss:[
                            {name:"电吹风",img:"img/sotr/main/dianqi/23.jpg",link:""},
                            {name:"剃须刀",img:"img/sotr/main/dianqi/24.png",link:""},
                            {name:"理发器",img:"img/sotr/main/dianqi/25.jpg",link:""},
                            {name:"足浴盆",img:"img/sotr/main/dianqi/26.jpg",link:""},
                            {name:"脱毛器",img:"img/sotr/main/dianqi/27.jpg",link:""},
                            {name:"按摩器",img:"img/sotr/main/dianqi/28.jpg",link:""},
                            {name:"卷/直发器",img:"img/sotr/main/dianqi/29.jpg",link:""},
                            {name:"按摩椅",img:"img/sotr/main/dianqi/30.jpg",link:""},
                            {name:"口腔护理",img:"img/sotr/main/dianqi/31.jpg",link:""},
                            {name:"电子秤",img:"img/sotr/main/dianqi/32.jpg",link:""},
                            {name:"美容器",img:"img/sotr/main/dianqi/34.jpg",link:""},
                            {name:"健康电器",img:"img/sotr/main/dianqi/35.jpg",link:""}
                        ]
                    },
                    {
                        h5:"冰箱",
                        arss:[
                            {name:"全部",img:"img/sotr/main/dianqi/36.jpg",link:""},
                            {name:"双门冰箱",img:"img/sotr/main/dianqi/37.jpg",link:""},
                            {name:"对开门冰箱",img:"img/sotr/main/dianqi/38.jpg",link:""},
                            {name:"十字对开门",img:"img/sotr/main/dianqi/39.jpg",link:""},
                            {name:"三门冰箱",img:"img/sotr/main/dianqi/40.jpg",link:""},
                            {name:"单门冰箱",img:"img/sotr/main/dianqi/41.jpg",link:""},
                            {name:"多门冰箱",img:"img/sotr/main/dianqi/42.jpg",link:""},
                            {name:"冷柜/冰吧",img:"img/sotr/main/dianqi/43.jpg",link:""},
                            {name:"冰箱配件",img:"img/sotr/main/dianqi/44.jpg",link:""},
                            {name:"红酒柜",img:"img/sotr/main/dianqi/45.jpg",link:""}
                        ]
                    },
                    {
                        h5:"洗衣机",
                        arss:[
                            {name:"波轮洗衣机",img:"img/sotr/main/dianqi/46.jpg",link:""},
                            {name:"滚筒洗衣机",img:"img/sotr/main/dianqi/47.jpg",link:""},
                            {name:"全部",img:"img/sotr/main/dianqi/48.jpg",link:""},
                            {name:"洗烘一体机",img:"img/sotr/main/dianqi/49.jpg",link:""},
                            {name:"迷你洗衣机",img:"img/sotr/main/dianqi/50.jpg",link:""},
                            {name:"洗衣机配件",img:"img/sotr/main/dianqi/51.jpg",link:""},
                            {name:"烘干机",img:"img/sotr/main/dianqi/52.jpg",link:""}
                        ]
                    },
                    {
                        h5:"厨卫大电",
                        arss:[
                            {name:"电热水器",img:"img/sotr/main/dianqi/53.jpg",link:""},
                            {name:"燃气热水器",img:"img/sotr/main/dianqi/54.jpg",link:""},
                            {name:"燃气灶",img:"img/sotr/main/dianqi/55.jpg",link:""},
                            {name:"油烟机",img:"img/sotr/main/dianqi/56.jpg",link:""},
                            {name:"烟灶套装",img:"img/sotr/main/dianqi/57.jpg",link:""},
                            {name:"消毒柜",img:"img/sotr/main/dianqi/58.jpg",link:""},
                            {name:"洗碗机",img:"img/sotr/main/dianqi/59.jpg",link:""},
                            {name:"嵌入式厨电",img:"img/sotr/main/dianqi/60.jpg",link:""}
                        ]
                    },
                    {
                        h5:"电视",
                        arss:[
                            {name:"互联网电视",img:"img/sotr/main/dianqi/61.jpg",link:""},
                            {name:"4k超高清",img:"img/sotr/main/dianqi/62.jpg",link:""},
                            {name:"超薄电视",img:"img/sotr/main/dianqi/63.jpg",link:""},
                            {name:"曲面电视",img:"img/sotr/main/dianqi/64.jpg",link:""},
                            {name:"量子点电视",img:"img/sotr/main/dianqi/65.jpg",link:""},
                            {name:"HDR",img:"img/sotr/main/dianqi/66.jpg",link:""},
                            {name:"电视配件",img:"img/sotr/main/dianqi/67.jpg",link:""},
                            {name:"OLED电视",img:"img/sotr/main/dianqi/68.jpg",link:""}
                        ]
                    },
                    {
                        h5:"生活电器",
                        arss:[
                            {name:"吸尘器",img:"img/sotr/main/dianqi/69.jpg",link:""},
                            {name:"饮水机",img:"img/sotr/main/dianqi/70.jpg",link:""},
                            {name:"挂烫机",img:"img/sotr/main/dianqi/71.jpg",link:""},
                            {name:"电风扇",img:"img/sotr/main/dianqi/72.jpg",link:""},
                            {name:"扫地机器人",img:"img/sotr/main/dianqi/73.jpg",link:""},
                            {name:"净水器",img:"img/sotr/main/dianqi/74.jpg",link:""},
                            {name:"取暖电器",img:"img/sotr/main/dianqi/75.jpg",link:""},
                            {name:"空气净化器",img:"img/sotr/main/dianqi/76.jpg",link:""},
                            {name:"插座",img:"img/sotr/main/dianqi/77.jpg",link:""},
                            {name:"电话机",img:"img/sotr/main/dianqi/78.jpg",link:""},
                            {name:"加湿器",img:"img/sotr/main/dianqi/79.jpg",link:""},
                            {name:"生活电器",img:"img/sotr/main/dianqi/80.jpg",link:""},
                            {name:"干衣机",img:"img/sotr/main/dianqi/81.jpg",link:""},
                            {name:"除螨机",img:"img/sotr/main/dianqi/82.jpg",link:""},
                            {name:"除湿机",img:"img/sotr/main/dianqi/83.jpg",link:""},
                            {name:"收音机",img:"img/sotr/main/dianqi/84.jpg",link:""},
                            {name:"冷风扇",img:"img/sotr/main/dianqi/85.jpg",link:""},
                            {name:"电器配件",img:"img/sotr/main/dianqi/86.jpg",link:""},
                            {name:"清洁机",img:"img/sotr/main/dianqi/87.jpg",link:""}
                        ]
                    },
                    {
                        h5:"空调",
                        arss:[
                            {name:"壁挂式空调",img:"img/sotr/main/dianqi/88.jpg",link:""},
                            {name:"柜式空调",img:"img/sotr/main/dianqi/89.jpg",link:""},
                            {name:"中央空调",img:"img/sotr/main/dianqi/90.jpg",link:""},
                            {name:"空调配件",img:"img/sotr/main/dianqi/91.jpg",link:""}
                        ]
                    },
                    {
                        h5:"家庭影音",
                        arss:[
                            {name:"迷你音响",img:"img/sotr/main/dianqi/92.jpg",link:""},
                            {name:"电视盒子",img:"img/sotr/main/dianqi/93.jpg",link:""},
                            {name:"家庭影院",img:"img/sotr/main/dianqi/94.jpg",link:""},
                            {name:"回音壁",img:"img/sotr/main/dianqi/95.jpg",link:""},
                            {name:"影音配件",img:"img/sotr/main/dianqi/96.jpg",link:""},
                            {name:"功放",img:"img/sotr/main/dianqi/97.png",link:""}
                        ]
                    },
                    {
                        h5:"推荐品牌",
                        arss:[
                            {name:"",img:"img/sotr/main/dianqi/98.jpg",link:""},
                            {name:"",img:"img/sotr/main/dianqi/99.jpg",link:""},
                            {name:"",img:"img/sotr/main/dianqi/100.jpg",link:""},
                            {name:"",img:"img/sotr/main/dianqi/101.jpg",link:""}
                        ]
                    },
                    {
                        h5:"推荐品牌",
                        arss:[
                            {name:"",img:"img/sotr/main/dianqi/102.jpg",link:""}
                        ]
                    },
                ]
            },
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
        ]
    }
})


var lis=document.querySelectorAll(".sort .main ul li");
console.log(lis.length);
var nei=document.querySelectorAll(".sort .main .nei");
console.log(nei.length);
nei[0].classList.add("xian");
for(var q=0;q<lis.length;q++){
        lis[q].name=q;
        lis[q].onclick=function(){
            for(var q=0;q<nei.length;q++){
                lis[q].classList.remove("xian");
                nei[q].classList.remove("xian");
            }
            lis[this.name].classList.add("xian");
            nei[this.name].classList.add("xian");
            $(".sort .main .col-xs-3").animate({scrollTop:46*this.name},500)
        }
        
    }







/*-----------------jquery返回顶部------------*/
//$(".dingbu").click(function(){
//    $("html,body").animate({scrollTop:0},500);
//})














            
