define("waimai:widget/shoplist/banner/banner.js", function(i, n, e) {
    var t = i("waimai:static/utils/SlidePlayer.js");
    e.exports = Widget.extend({
        init: function() {
            new t("#banner-container", {
                duration: 4e3,
                autoPlay: !0,
                width: "1230px",
                height: "80px"
            })
        }
    })
});;
define("waimai:widget/shoplist/dishlist/nuomi_cityid.js", function(i, n, y) {
    var t = [{
        city_id: 10001e4,
        city_name: "北京市",
        short_name: "北京",
        city_pinyin: "beijing",
        short_pinyin: "bj"
    }, {
        city_id: 50001e4,
        city_name: "天津市",
        short_name: "天津",
        city_pinyin: "tianjin",
        short_pinyin: "tj"
    }, {
        city_id: 180001e4,
        city_name: "石家庄市",
        short_name: "石家庄",
        city_pinyin: "shijiazhuang",
        short_pinyin: "sjz"
    }, {
        city_id: 180002e4,
        city_name: "唐山市",
        short_name: "唐山",
        city_pinyin: "tangshan",
        short_pinyin: "ts"
    }, {
        city_id: 180003e4,
        city_name: "秦皇岛市",
        short_name: "秦皇岛",
        city_pinyin: "qinhuangdao",
        short_pinyin: "qhd"
    }, {
        city_id: 180004e4,
        city_name: "邯郸市",
        short_name: "邯郸",
        city_pinyin: "handan",
        short_pinyin: "hd"
    }, {
        city_id: 180005e4,
        city_name: "邢台市",
        short_name: "邢台",
        city_pinyin: "xingtai",
        short_pinyin: "xt"
    }, {
        city_id: 180006e4,
        city_name: "保定市",
        short_name: "保定",
        city_pinyin: "baoding",
        short_pinyin: "bd"
    }, {
        city_id: 180007e4,
        city_name: "张家口市",
        short_name: "张家口",
        city_pinyin: "zhangjiakou",
        short_pinyin: "zjk"
    }, {
        city_id: 180008e4,
        city_name: "承德市",
        short_name: "承德",
        city_pinyin: "chengde",
        short_pinyin: "chengde"
    }, {
        city_id: 180009e4,
        city_name: "沧州市",
        short_name: "沧州",
        city_pinyin: "cangzhou",
        short_pinyin: "cangzhou"
    }, {
        city_id: 18001e5,
        city_name: "廊坊市",
        short_name: "廊坊",
        city_pinyin: "langfang",
        short_pinyin: "lf"
    }, {
        city_id: 180011e4,
        city_name: "衡水市",
        short_name: "衡水",
        city_pinyin: "hengshui",
        short_pinyin: "hs"
    }, {
        city_id: 210001e4,
        city_name: "太原市",
        short_name: "太原",
        city_pinyin: "taiyuan",
        short_pinyin: "ty"
    }, {
        city_id: 210002e4,
        city_name: "大同市",
        short_name: "大同",
        city_pinyin: "datong",
        short_pinyin: "dt"
    }, {
        city_id: 210003e4,
        city_name: "阳泉市",
        short_name: "阳泉",
        city_pinyin: "yangquan",
        short_pinyin: "yq"
    }, {
        city_id: 210004e4,
        city_name: "长治市",
        short_name: "长治",
        city_pinyin: "changzhi",
        short_pinyin: "changzhi"
    }, {
        city_id: 210005e4,
        city_name: "晋城市",
        short_name: "晋城",
        city_pinyin: "jincheng",
        short_pinyin: "jincheng"
    }, {
        city_id: 210006e4,
        city_name: "朔州市",
        short_name: "朔州",
        city_pinyin: "shuozhou",
        short_pinyin: "shuozhou"
    }, {
        city_id: 210007e4,
        city_name: "晋中市",
        short_name: "晋中",
        city_pinyin: "jinzhong",
        short_pinyin: "jz"
    }, {
        city_id: 210008e4,
        city_name: "运城市",
        short_name: "运城",
        city_pinyin: "yuncheng",
        short_pinyin: "yuncheng"
    }, {
        city_id: 210009e4,
        city_name: "忻州市",
        short_name: "忻州",
        city_pinyin: "xinzhou",
        short_pinyin: "xinzhou"
    }, {
        city_id: 21001e5,
        city_name: "临汾市",
        short_name: "临汾",
        city_pinyin: "linfen",
        short_pinyin: "linfen"
    }, {
        city_id: 210011e4,
        city_name: "吕梁市",
        short_name: "吕梁",
        city_pinyin: "lvliang",
        short_pinyin: "lvliang"
    }, {
        city_id: 220001e4,
        city_name: "呼和浩特市",
        short_name: "呼和浩特",
        city_pinyin: "hohhot",
        short_pinyin: "hu"
    }, {
        city_id: 220002e4,
        city_name: "包头市",
        short_name: "包头",
        city_pinyin: "baotou",
        short_pinyin: "bt"
    }, {
        city_id: 220003e4,
        city_name: "乌海市",
        short_name: "乌海",
        city_pinyin: "wuhai",
        short_pinyin: "wuhai"
    }, {
        city_id: 220004e4,
        city_name: "赤峰市",
        short_name: "赤峰",
        city_pinyin: "chifeng",
        short_pinyin: "chifeng"
    }, {
        city_id: 220005e4,
        city_name: "通辽市",
        short_name: "通辽",
        city_pinyin: "tongliao",
        short_pinyin: "tongliao"
    }, {
        city_id: 220006e4,
        city_name: "鄂尔多斯市",
        short_name: "鄂尔多斯",
        city_pinyin: "eerduosi",
        short_pinyin: "erds"
    }, {
        city_id: 220007e4,
        city_name: "呼伦贝尔市",
        short_name: "呼伦贝尔",
        city_pinyin: "hulunbeier",
        short_pinyin: "hlbe"
    }, {
        city_id: 220008e4,
        city_name: "巴彦淖尔市",
        short_name: "巴彦淖尔",
        city_pinyin: "bayannaoer",
        short_pinyin: "byne"
    }, {
        city_id: 220009e4,
        city_name: "乌兰察布市",
        short_name: "乌兰察布",
        city_pinyin: "wulanchabu",
        short_pinyin: "wlcb"
    }, {
        city_id: 22001e5,
        city_name: "兴安盟",
        short_name: "兴安",
        city_pinyin: "xingan",
        short_pinyin: "xan"
    }, {
        city_id: 220011e4,
        city_name: "锡林郭勒盟",
        short_name: "锡林郭勒",
        city_pinyin: "xilinguole",
        short_pinyin: "xlgl"
    }, {
        city_id: 220012e4,
        city_name: "阿拉善盟",
        short_name: "阿拉善",
        city_pinyin: "alashan",
        short_pinyin: "als"
    }, {
        city_id: 130002e4,
        city_name: "沈阳市",
        short_name: "沈阳",
        city_pinyin: "shenyang",
        short_pinyin: "sy"
    }, {
        city_id: 130001e4,
        city_name: "大连市",
        short_name: "大连",
        city_pinyin: "dalian",
        short_pinyin: "dl"
    }, {
        city_id: 130003e4,
        city_name: "鞍山市",
        short_name: "鞍山",
        city_pinyin: "anshan",
        short_pinyin: "as"
    }, {
        city_id: 130004e4,
        city_name: "抚顺市",
        short_name: "抚顺",
        city_pinyin: "fushun",
        short_pinyin: "fushun"
    }, {
        city_id: 130005e4,
        city_name: "本溪市",
        short_name: "本溪",
        city_pinyin: "benxi",
        short_pinyin: "benxi"
    }, {
        city_id: 130006e4,
        city_name: "丹东市",
        short_name: "丹东",
        city_pinyin: "dandong",
        short_pinyin: "dandong"
    }, {
        city_id: 130007e4,
        city_name: "锦州市",
        short_name: "锦州",
        city_pinyin: "jinzhou",
        short_pinyin: "jinzhou"
    }, {
        city_id: 130008e4,
        city_name: "营口市",
        short_name: "营口",
        city_pinyin: "yingkou",
        short_pinyin: "yk"
    }, {
        city_id: 130009e4,
        city_name: "阜新市",
        short_name: "阜新",
        city_pinyin: "fuxin",
        short_pinyin: "fx"
    }, {
        city_id: 13001e5,
        city_name: "辽阳市",
        short_name: "辽阳",
        city_pinyin: "liaoyang",
        short_pinyin: "liaoyang"
    }, {
        city_id: 130011e4,
        city_name: "盘锦市",
        short_name: "盘锦",
        city_pinyin: "panjin",
        short_pinyin: "pj"
    }, {
        city_id: 130012e4,
        city_name: "铁岭市",
        short_name: "铁岭",
        city_pinyin: "tieling",
        short_pinyin: "tl"
    }, {
        city_id: 130013e4,
        city_name: "朝阳市",
        short_name: "朝阳",
        city_pinyin: "chaoyang",
        short_pinyin: "cy"
    }, {
        city_id: 130014e4,
        city_name: "葫芦岛市",
        short_name: "葫芦岛",
        city_pinyin: "huludao",
        short_pinyin: "hld"
    }, {
        city_id: 230001e4,
        city_name: "长春市",
        short_name: "长春",
        city_pinyin: "changchun",
        short_pinyin: "cc"
    }, {
        city_id: 230002e4,
        city_name: "吉林市",
        short_name: "吉林",
        city_pinyin: "jilin",
        short_pinyin: "jl"
    }, {
        city_id: 230003e4,
        city_name: "四平市",
        short_name: "四平",
        city_pinyin: "siping",
        short_pinyin: "sp"
    }, {
        city_id: 230004e4,
        city_name: "辽源市",
        short_name: "辽源",
        city_pinyin: "liaoyuan",
        short_pinyin: "liaoyuan"
    }, {
        city_id: 230005e4,
        city_name: "通化市",
        short_name: "通化",
        city_pinyin: "tonghua",
        short_pinyin: "th"
    }, {
        city_id: 230006e4,
        city_name: "白山市",
        short_name: "白山",
        city_pinyin: "baishan",
        short_pinyin: "baishan"
    }, {
        city_id: 230008e4,
        city_name: "白城市",
        short_name: "白城",
        city_pinyin: "baicheng",
        short_pinyin: "bc"
    }, {
        city_id: 230009e4,
        city_name: "延边朝鲜族自治州",
        short_name: "延边朝鲜族",
        city_pinyin: "yanbian",
        short_pinyin: "yanbian"
    }, {
        city_id: 110001e4,
        city_name: "哈尔滨市",
        short_name: "哈尔滨",
        city_pinyin: "haerbin",
        short_pinyin: "hrb"
    }, {
        city_id: 110002e4,
        city_name: "齐齐哈尔市",
        short_name: "齐齐哈尔",
        city_pinyin: "qiqihar",
        short_pinyin: "qqhr"
    }, {
        city_id: 110003e4,
        city_name: "鸡西市",
        short_name: "鸡西",
        city_pinyin: "jixi",
        short_pinyin: "jixi"
    }, {
        city_id: 110004e4,
        city_name: "鹤岗市",
        short_name: "鹤岗",
        city_pinyin: "hegang",
        short_pinyin: "hegang"
    }, {
        city_id: 110005e4,
        city_name: "双鸭山市",
        short_name: "双鸭山",
        city_pinyin: "shuangyashan",
        short_pinyin: "sys"
    }, {
        city_id: 110006e4,
        city_name: "大庆市",
        short_name: "大庆",
        city_pinyin: "daqing",
        short_pinyin: "dq"
    }, {
        city_id: 110007e4,
        city_name: "伊春市",
        short_name: "伊春",
        city_pinyin: "yichun",
        short_pinyin: "yich"
    }, {
        city_id: 110008e4,
        city_name: "佳木斯市",
        short_name: "佳木斯",
        city_pinyin: "jiamusi",
        short_pinyin: "jms"
    }, {
        city_id: 110009e4,
        city_name: "七台河市",
        short_name: "七台河",
        city_pinyin: "qitaihe",
        short_pinyin: "qth"
    }, {
        city_id: 11001e5,
        city_name: "牡丹江市",
        short_name: "牡丹江",
        city_pinyin: "mudanjiang",
        short_pinyin: "mdj"
    }, {
        city_id: 110011e4,
        city_name: "黑河市",
        short_name: "黑河",
        city_pinyin: "heihe",
        short_pinyin: "heihe"
    }, {
        city_id: 110012e4,
        city_name: "绥化市",
        short_name: "绥化",
        city_pinyin: "suihua",
        short_pinyin: "suihua"
    }, {
        city_id: 110013e4,
        city_name: "大兴安岭地区",
        short_name: "大兴安岭",
        city_pinyin: "daxinganling",
        short_pinyin: "dxal"
    }, {
        city_id: 20001e4,
        city_name: "上海市",
        short_name: "上海",
        city_pinyin: "shanghai",
        short_pinyin: "sh"
    }, {
        city_id: 70001e4,
        city_name: "南京市",
        short_name: "南京",
        city_pinyin: "nanjing",
        short_pinyin: "nj"
    }, {
        city_id: 70021e4,
        city_name: "无锡市",
        short_name: "无锡",
        city_pinyin: "wuxi",
        short_pinyin: "wx"
    }, {
        city_id: 70003e4,
        city_name: "徐州市",
        short_name: "徐州",
        city_pinyin: "xuzhou",
        short_pinyin: "xz"
    }, {
        city_id: 70004e4,
        city_name: "常州市",
        short_name: "常州",
        city_pinyin: "changzhou",
        short_pinyin: "cz"
    }, {
        city_id: 70011e4,
        city_name: "苏州市",
        short_name: "苏州",
        city_pinyin: "suzhou",
        short_pinyin: "su"
    }, {
        city_id: 70006e4,
        city_name: "南通市",
        short_name: "南通",
        city_pinyin: "nantong",
        short_pinyin: "nt"
    }, {
        city_id: 70007e4,
        city_name: "连云港市",
        short_name: "连云港",
        city_pinyin: "lianyungang",
        short_pinyin: "lyg"
    }, {
        city_id: 70008e4,
        city_name: "淮安市",
        short_name: "淮安",
        city_pinyin: "huaian",
        short_pinyin: "ha"
    }, {
        city_id: 70009e4,
        city_name: "盐城市",
        short_name: "盐城",
        city_pinyin: "yancheng",
        short_pinyin: "yancheng"
    }, {
        city_id: 7001e5,
        city_name: "扬州市",
        short_name: "扬州",
        city_pinyin: "yangzhou",
        short_pinyin: "yz"
    }, {
        city_id: 70005e4,
        city_name: "镇江市",
        short_name: "镇江",
        city_pinyin: "zhenjiang",
        short_pinyin: "zj"
    }, {
        city_id: 70012e4,
        city_name: "泰州市",
        short_name: "泰州",
        city_pinyin: "taizhoux",
        short_pinyin: "taizhou"
    }, {
        city_id: 70013e4,
        city_name: "宿迁市",
        short_name: "宿迁",
        city_pinyin: "suqian",
        short_pinyin: "suqian"
    }, {
        city_id: 60001e4,
        city_name: "杭州市",
        short_name: "杭州",
        city_pinyin: "hangzhou",
        short_pinyin: "hz"
    }, {
        city_id: 60011e4,
        city_name: "宁波市",
        short_name: "宁波",
        city_pinyin: "ningbo",
        short_pinyin: "nb"
    }, {
        city_id: 60003e4,
        city_name: "温州市",
        short_name: "温州",
        city_pinyin: "wenzhou",
        short_pinyin: "wz"
    }, {
        city_id: 60004e4,
        city_name: "嘉兴市",
        short_name: "嘉兴",
        city_pinyin: "jiaxing",
        short_pinyin: "jx"
    }, {
        city_id: 60005e4,
        city_name: "湖州市",
        short_name: "湖州",
        city_pinyin: "huzhou",
        short_pinyin: "huzhou"
    }, {
        city_id: 60006e4,
        city_name: "绍兴市",
        short_name: "绍兴",
        city_pinyin: "shaoxing",
        short_pinyin: "sx"
    }, {
        city_id: 60007e4,
        city_name: "金华市",
        short_name: "金华",
        city_pinyin: "jinhua",
        short_pinyin: "jh"
    }, {
        city_id: 60009e4,
        city_name: "舟山市",
        short_name: "舟山",
        city_pinyin: "zhoushan",
        short_pinyin: "zhoushan"
    }, {
        city_id: 6001e5,
        city_name: "台州市",
        short_name: "台州",
        city_pinyin: "taizhou",
        short_pinyin: "tz"
    }, {
        city_id: 60002e4,
        city_name: "丽水市",
        short_name: "丽水",
        city_pinyin: "lishui",
        short_pinyin: "lishui"
    }, {
        city_id: 150001e4,
        city_name: "合肥市",
        short_name: "合肥",
        city_pinyin: "hefei",
        short_pinyin: "hf"
    }, {
        city_id: 150002e4,
        city_name: "芜湖市",
        short_name: "芜湖",
        city_pinyin: "wuhu",
        short_pinyin: "wuhu"
    }, {
        city_id: 150003e4,
        city_name: "蚌埠市",
        short_name: "蚌埠",
        city_pinyin: "bengbu",
        short_pinyin: "bengbu"
    }, {
        city_id: 150004e4,
        city_name: "淮南市",
        short_name: "淮南",
        city_pinyin: "huainan",
        short_pinyin: "hn"
    }, {
        city_id: 150005e4,
        city_name: "马鞍山市",
        short_name: "马鞍山",
        city_pinyin: "maanshan",
        short_pinyin: "mas"
    }, {
        city_id: 150006e4,
        city_name: "淮北市",
        short_name: "淮北",
        city_pinyin: "huaibei",
        short_pinyin: "huaibei"
    }, {
        city_id: 150007e4,
        city_name: "铜陵市",
        short_name: "铜陵",
        city_pinyin: "tongling",
        short_pinyin: "tongling"
    }, {
        city_id: 150008e4,
        city_name: "安庆市",
        short_name: "安庆",
        city_pinyin: "anqing",
        short_pinyin: "anqing"
    }, {
        city_id: 15001e5,
        city_name: "滁州市",
        short_name: "滁州",
        city_pinyin: "chuzhou",
        short_pinyin: "chuzhou"
    }, {
        city_id: 150011e4,
        city_name: "阜阳市",
        short_name: "阜阳",
        city_pinyin: "fuyang",
        short_pinyin: "fy"
    }, {
        city_id: 150012e4,
        city_name: "宿州市",
        short_name: "宿州",
        city_pinyin: "suzhou1",
        short_pinyin: "suzhousz"
    }, {
        city_id: 150013e4,
        city_name: "巢湖市",
        short_name: "巢湖",
        city_pinyin: "chaohu",
        short_pinyin: "ch"
    }, {
        city_id: 150014e4,
        city_name: "六安市",
        short_name: "六安",
        city_pinyin: "liuan",
        short_pinyin: "la"
    }, {
        city_id: 150016e4,
        city_name: "池州市",
        short_name: "池州",
        city_pinyin: "chizhou",
        short_pinyin: "chizhou"
    }, {
        city_id: 150017e4,
        city_name: "宣城市",
        short_name: "宣城",
        city_pinyin: "xuancheng",
        short_pinyin: "xuancheng"
    }, {
        city_id: 190001e4,
        city_name: "福州市",
        short_name: "福州",
        city_pinyin: "fuzhou",
        short_pinyin: "fz"
    }, {
        city_id: 190002e4,
        city_name: "厦门市",
        short_name: "厦门",
        city_pinyin: "xiamen",
        short_pinyin: "xm"
    }, {
        city_id: 190003e4,
        city_name: "莆田市",
        short_name: "莆田",
        city_pinyin: "putian",
        short_pinyin: "pt"
    }, {
        city_id: 190004e4,
        city_name: "三明市",
        short_name: "三明",
        city_pinyin: "sanming",
        short_pinyin: "sm"
    }, {
        city_id: 190005e4,
        city_name: "泉州市",
        short_name: "泉州",
        city_pinyin: "quanzhou",
        short_pinyin: "qz"
    }, {
        city_id: 190006e4,
        city_name: "漳州市",
        short_name: "漳州",
        city_pinyin: "zhangzhou",
        short_pinyin: "zhangzhou"
    }, {
        city_id: 190007e4,
        city_name: "南平市",
        short_name: "南平",
        city_pinyin: "nanping",
        short_pinyin: "np"
    }, {
        city_id: 190008e4,
        city_name: "龙岩市",
        short_name: "龙岩",
        city_pinyin: "longyan",
        short_pinyin: "ly"
    }, {
        city_id: 190009e4,
        city_name: "宁德市",
        short_name: "宁德",
        city_pinyin: "ningde",
        short_pinyin: "nd"
    }, {
        city_id: 240001e4,
        city_name: "南昌市",
        short_name: "南昌",
        city_pinyin: "nanchang",
        short_pinyin: "nc"
    }, {
        city_id: 240005e4,
        city_name: "新余市",
        short_name: "新余",
        city_pinyin: "xinyu",
        short_pinyin: "xinyu"
    }, {
        city_id: 240006e4,
        city_name: "鹰潭市",
        short_name: "鹰潭",
        city_pinyin: "yingtan",
        short_pinyin: "yingtan"
    }, {
        city_id: 240007e4,
        city_name: "赣州市",
        short_name: "赣州",
        city_pinyin: "ganzhou",
        short_pinyin: "ganzhou"
    }, {
        city_id: 240008e4,
        city_name: "吉安市",
        short_name: "吉安",
        city_pinyin: "jian",
        short_pinyin: "ja"
    }, {
        city_id: 240009e4,
        city_name: "宜春市",
        short_name: "宜春",
        city_pinyin: "yichun1",
        short_pinyin: "yichun"
    }, {
        city_id: 24001e5,
        city_name: "抚州市",
        short_name: "抚州",
        city_pinyin: "fuzhou1",
        short_pinyin: "fuz"
    }, {
        city_id: 240011e4,
        city_name: "上饶市",
        short_name: "上饶",
        city_pinyin: "shangrao",
        short_pinyin: "sr"
    }, {
        city_id: 140002e4,
        city_name: "济南市",
        short_name: "济南",
        city_pinyin: "jinan",
        short_pinyin: "jn"
    }, {
        city_id: 140001e4,
        city_name: "青岛市",
        short_name: "青岛",
        city_pinyin: "qingdao",
        short_pinyin: "qd"
    }, {
        city_id: 140003e4,
        city_name: "淄博市",
        short_name: "淄博",
        city_pinyin: "zibo",
        short_pinyin: "zb"
    }, {
        city_id: 140004e4,
        city_name: "枣庄市",
        short_name: "枣庄",
        city_pinyin: "zaozhuang",
        short_pinyin: "zaozhuang"
    }, {
        city_id: 140005e4,
        city_name: "东营市",
        short_name: "东营",
        city_pinyin: "dongying",
        short_pinyin: "dy"
    }, {
        city_id: 140006e4,
        city_name: "烟台市",
        short_name: "烟台",
        city_pinyin: "yantai",
        short_pinyin: "yt"
    }, {
        city_id: 140007e4,
        city_name: "潍坊市",
        short_name: "潍坊",
        city_pinyin: "weifang",
        short_pinyin: "wf"
    }, {
        city_id: 140008e4,
        city_name: "济宁市",
        short_name: "济宁",
        city_pinyin: "jining",
        short_pinyin: "jining"
    }, {
        city_id: 140009e4,
        city_name: "泰安市",
        short_name: "泰安",
        city_pinyin: "taian",
        short_pinyin: "ta"
    }, {
        city_id: 14001e5,
        city_name: "威海市",
        short_name: "威海",
        city_pinyin: "weihai",
        short_pinyin: "weihai"
    }, {
        city_id: 140011e4,
        city_name: "日照市",
        short_name: "日照",
        city_pinyin: "rizhao",
        short_pinyin: "rizhao"
    }, {
        city_id: 140012e4,
        city_name: "莱芜市",
        short_name: "莱芜",
        city_pinyin: "laiwu",
        short_pinyin: "lw"
    }, {
        city_id: 140013e4,
        city_name: "临沂市",
        short_name: "临沂",
        city_pinyin: "linyi",
        short_pinyin: "linyi"
    }, {
        city_id: 140014e4,
        city_name: "德州市",
        short_name: "德州",
        city_pinyin: "dezhou",
        short_pinyin: "dz"
    }, {
        city_id: 140015e4,
        city_name: "聊城市",
        short_name: "聊城",
        city_pinyin: "liaocheng",
        short_pinyin: "lc"
    }, {
        city_id: 140016e4,
        city_name: "滨州市",
        short_name: "滨州",
        city_pinyin: "binzhou",
        short_pinyin: "bz"
    }, {
        city_id: 200001e4,
        city_name: "郑州市",
        short_name: "郑州",
        city_pinyin: "zhengzhou",
        short_pinyin: "zz"
    }, {
        city_id: 200002e4,
        city_name: "开封市",
        short_name: "开封",
        city_pinyin: "kaifeng",
        short_pinyin: "kaifeng"
    }, {
        city_id: 200003e4,
        city_name: "洛阳市",
        short_name: "洛阳",
        city_pinyin: "luoyang",
        short_pinyin: "luoyang"
    }, {
        city_id: 200004e4,
        city_name: "平顶山市",
        short_name: "平顶山",
        city_pinyin: "pingdingshan",
        short_pinyin: "pds"
    }, {
        city_id: 200005e4,
        city_name: "安阳市",
        short_name: "安阳",
        city_pinyin: "anyang",
        short_pinyin: "ay"
    }, {
        city_id: 200006e4,
        city_name: "鹤壁市",
        short_name: "鹤壁",
        city_pinyin: "hebi",
        short_pinyin: "hb"
    }, {
        city_id: 200007e4,
        city_name: "新乡市",
        short_name: "新乡",
        city_pinyin: "xinxiang",
        short_pinyin: "xx"
    }, {
        city_id: 200008e4,
        city_name: "焦作市",
        short_name: "焦作",
        city_pinyin: "jiaozuo",
        short_pinyin: "jiaozuo"
    }, {
        city_id: 200009e4,
        city_name: "濮阳市",
        short_name: "濮阳",
        city_pinyin: "puyang",
        short_pinyin: "puyang"
    }, {
        city_id: 20001e5,
        city_name: "许昌市",
        short_name: "许昌",
        city_pinyin: "xuchang",
        short_pinyin: "xc"
    }, {
        city_id: 200011e4,
        city_name: "漯河市",
        short_name: "漯河",
        city_pinyin: "luohe",
        short_pinyin: "luohe"
    }, {
        city_id: 200012e4,
        city_name: "三门峡市",
        short_name: "三门峡",
        city_pinyin: "sanmenxia",
        short_pinyin: "smx"
    }, {
        city_id: 200013e4,
        city_name: "南阳市",
        short_name: "南阳",
        city_pinyin: "nanyang",
        short_pinyin: "ny"
    }, {
        city_id: 200014e4,
        city_name: "商丘市",
        short_name: "商丘",
        city_pinyin: "shangqiu",
        short_pinyin: "sq"
    }, {
        city_id: 200015e4,
        city_name: "信阳市",
        short_name: "信阳",
        city_pinyin: "xinyang",
        short_pinyin: "xy"
    }, {
        city_id: 200016e4,
        city_name: "周口市",
        short_name: "周口",
        city_pinyin: "zhoukou",
        short_pinyin: "zk"
    }, {
        city_id: 200017e4,
        city_name: "驻马店市",
        short_name: "驻马店",
        city_pinyin: "zhumadian",
        short_pinyin: "zmd"
    }, {
        city_id: 40001e4,
        city_name: "武汉市",
        short_name: "武汉",
        city_pinyin: "wuhan",
        short_pinyin: "wh"
    }, {
        city_id: 40003e4,
        city_name: "十堰市",
        short_name: "十堰",
        city_pinyin: "shiyan",
        short_pinyin: "shiyan"
    }, {
        city_id: 40004e4,
        city_name: "宜昌市",
        short_name: "宜昌",
        city_pinyin: "yichang",
        short_pinyin: "yc"
    }, {
        city_id: 40007e4,
        city_name: "荆门市",
        short_name: "荆门",
        city_pinyin: "jingmen",
        short_pinyin: "jingmen"
    }, {
        city_id: 40008e4,
        city_name: "孝感市",
        short_name: "孝感",
        city_pinyin: "xiaogan",
        short_pinyin: "xiaogan"
    }, {
        city_id: 40012e4,
        city_name: "随州市",
        short_name: "随州",
        city_pinyin: "suizhou",
        short_pinyin: "suizhou"
    }, {
        city_id: 120001e4,
        city_name: "长沙市",
        short_name: "长沙",
        city_pinyin: "changsha",
        short_pinyin: "chs"
    }, {
        city_id: 120002e4,
        city_name: "株洲市",
        short_name: "株洲",
        city_pinyin: "zhuzhou",
        short_pinyin: "zhuzhou"
    }, {
        city_id: 120003e4,
        city_name: "湘潭市",
        short_name: "湘潭",
        city_pinyin: "xiangtan",
        short_pinyin: "xiangtan"
    }, {
        city_id: 120004e4,
        city_name: "衡阳市",
        short_name: "衡阳",
        city_pinyin: "hengyang",
        short_pinyin: "hy"
    }, {
        city_id: 120005e4,
        city_name: "邵阳市",
        short_name: "邵阳",
        city_pinyin: "shaoyang",
        short_pinyin: "shaoyang"
    }, {
        city_id: 120006e4,
        city_name: "岳阳市",
        short_name: "岳阳",
        city_pinyin: "yueyang",
        short_pinyin: "yy"
    }, {
        city_id: 120009e4,
        city_name: "益阳市",
        short_name: "益阳",
        city_pinyin: "yiyang",
        short_pinyin: "yiyang"
    }, {
        city_id: 12001e5,
        city_name: "郴州市",
        short_name: "郴州",
        city_pinyin: "chenzhou",
        short_pinyin: "chenzhou"
    }, {
        city_id: 120011e4,
        city_name: "永州市",
        short_name: "永州",
        city_pinyin: "yongzhou",
        short_pinyin: "yongzhou"
    }, {
        city_id: 120012e4,
        city_name: "怀化市",
        short_name: "怀化",
        city_pinyin: "huaihua",
        short_pinyin: "hh"
    }, {
        city_id: 120013e4,
        city_name: "娄底市",
        short_name: "娄底",
        city_pinyin: "loudi",
        short_pinyin: "ld"
    }, {
        city_id: 120014e4,
        city_name: "湘西土家族苗族自治州",
        short_name: "湘西土家族苗族",
        city_pinyin: "xiangxi",
        short_pinyin: "xiangxi"
    }, {
        city_id: 30011e4,
        city_name: "广州市",
        short_name: "广州",
        city_pinyin: "guangzhou",
        short_pinyin: "gz"
    }, {
        city_id: 30002e4,
        city_name: "韶关市",
        short_name: "韶关",
        city_pinyin: "shaoguan",
        short_pinyin: "sg"
    }, {
        city_id: 30021e4,
        city_name: "深圳市",
        short_name: "深圳",
        city_pinyin: "shenzhen",
        short_pinyin: "sz"
    }, {
        city_id: 30004e4,
        city_name: "珠海市",
        short_name: "珠海",
        city_pinyin: "zhuhai",
        short_pinyin: "zh"
    }, {
        city_id: 30005e4,
        city_name: "汕头市",
        short_name: "汕头",
        city_pinyin: "shantou",
        short_pinyin: "st"
    }, {
        city_id: 30006e4,
        city_name: "佛山市",
        short_name: "佛山",
        city_pinyin: "foshan",
        short_pinyin: "fs"
    }, {
        city_id: 30007e4,
        city_name: "江门市",
        short_name: "江门",
        city_pinyin: "jiangmen",
        short_pinyin: "jm"
    }, {
        city_id: 30008e4,
        city_name: "湛江市",
        short_name: "湛江",
        city_pinyin: "zhanjiang",
        short_pinyin: "zhanjiang"
    }, {
        city_id: 30009e4,
        city_name: "茂名市",
        short_name: "茂名",
        city_pinyin: "maoming",
        short_pinyin: "mm"
    }, {
        city_id: 3001e5,
        city_name: "肇庆市",
        short_name: "肇庆",
        city_pinyin: "zhaoqing",
        short_pinyin: "zq"
    }, {
        city_id: 30001e4,
        city_name: "惠州市",
        short_name: "惠州",
        city_pinyin: "huizhou",
        short_pinyin: "huizhou"
    }, {
        city_id: 30012e4,
        city_name: "梅州市",
        short_name: "梅州",
        city_pinyin: "meizhou",
        short_pinyin: "mz"
    }, {
        city_id: 30013e4,
        city_name: "汕尾市",
        short_name: "汕尾",
        city_pinyin: "shanwei",
        short_pinyin: "sw"
    }, {
        city_id: 30014e4,
        city_name: "河源市",
        short_name: "河源",
        city_pinyin: "heyuan",
        short_pinyin: "heyuan"
    }, {
        city_id: 30015e4,
        city_name: "阳江市",
        short_name: "阳江",
        city_pinyin: "yangjiang",
        short_pinyin: "yj"
    }, {
        city_id: 30016e4,
        city_name: "清远市",
        short_name: "清远",
        city_pinyin: "qingyuan",
        short_pinyin: "qingyuan"
    }, {
        city_id: 30017e4,
        city_name: "东莞市",
        short_name: "东莞",
        city_pinyin: "dongguan",
        short_pinyin: "dg"
    }, {
        city_id: 30018e4,
        city_name: "中山市",
        short_name: "中山",
        city_pinyin: "zhongshan",
        short_pinyin: "zs"
    }, {
        city_id: 30019e4,
        city_name: "潮州市",
        short_name: "潮州",
        city_pinyin: "chaozhou",
        short_pinyin: "chaozhou"
    }, {
        city_id: 3002e5,
        city_name: "揭阳市",
        short_name: "揭阳",
        city_pinyin: "jieyang",
        short_pinyin: "jy"
    }, {
        city_id: 30003e4,
        city_name: "云浮市",
        short_name: "云浮",
        city_pinyin: "yunfu",
        short_pinyin: "yf"
    }, {
        city_id: 250001e4,
        city_name: "南宁市",
        short_name: "南宁",
        city_pinyin: "nanning",
        short_pinyin: "nn"
    }, {
        city_id: 250002e4,
        city_name: "柳州市",
        short_name: "柳州",
        city_pinyin: "liuzhou",
        short_pinyin: "liuzhou"
    }, {
        city_id: 250003e4,
        city_name: "桂林市",
        short_name: "桂林",
        city_pinyin: "guilin",
        short_pinyin: "gl"
    }, {
        city_id: 250004e4,
        city_name: "梧州市",
        short_name: "梧州",
        city_pinyin: "wuzhou",
        short_pinyin: "wuzhou"
    }, {
        city_id: 250005e4,
        city_name: "北海市",
        short_name: "北海",
        city_pinyin: "beihai",
        short_pinyin: "bh"
    }, {
        city_id: 250006e4,
        city_name: "防城港市",
        short_name: "防城港",
        city_pinyin: "fangchenggang",
        short_pinyin: "fcg"
    }, {
        city_id: 250007e4,
        city_name: "钦州市",
        short_name: "钦州",
        city_pinyin: "qinzhou",
        short_pinyin: "qinzhou"
    }, {
        city_id: 250008e4,
        city_name: "贵港市",
        short_name: "贵港",
        city_pinyin: "guigang",
        short_pinyin: "gg"
    }, {
        city_id: 250009e4,
        city_name: "玉林市",
        short_name: "玉林",
        city_pinyin: "yulin1",
        short_pinyin: "yulin"
    }, {
        city_id: 25001e5,
        city_name: "百色市",
        short_name: "百色",
        city_pinyin: "baise",
        short_pinyin: "baise"
    }, {
        city_id: 250011e4,
        city_name: "贺州市",
        short_name: "贺州",
        city_pinyin: "hezhou",
        short_pinyin: "hezhou"
    }, {
        city_id: 250012e4,
        city_name: "河池市",
        short_name: "河池",
        city_pinyin: "hechi",
        short_pinyin: "hc"
    }, {
        city_id: 260001e4,
        city_name: "海口市",
        short_name: "海口",
        city_pinyin: "haikou",
        short_pinyin: "haikou"
    }, {
        city_id: 260002e4,
        city_name: "三亚市",
        short_name: "三亚",
        city_pinyin: "sanya",
        short_pinyin: "sanya"
    }, {
        city_id: 90001e4,
        city_name: "重庆市",
        short_name: "重庆",
        city_pinyin: "chongqing",
        short_pinyin: "cq"
    }, {
        city_id: 80001e4,
        city_name: "成都市",
        short_name: "成都",
        city_pinyin: "chengdu",
        short_pinyin: "cd"
    }, {
        city_id: 80002e4,
        city_name: "自贡市",
        short_name: "自贡",
        city_pinyin: "zigong",
        short_pinyin: "zg"
    }, {
        city_id: 80003e4,
        city_name: "攀枝花市",
        short_name: "攀枝花",
        city_pinyin: "panzhihua",
        short_pinyin: "panzhihua"
    }, {
        city_id: 80004e4,
        city_name: "泸州市",
        short_name: "泸州",
        city_pinyin: "luzhou",
        short_pinyin: "luzhou"
    }, {
        city_id: 80005e4,
        city_name: "德阳市",
        short_name: "德阳",
        city_pinyin: "deyang",
        short_pinyin: "deyang"
    }, {
        city_id: 80006e4,
        city_name: "绵阳市",
        short_name: "绵阳",
        city_pinyin: "mianyang",
        short_pinyin: "mianyang"
    }, {
        city_id: 80008e4,
        city_name: "遂宁市",
        short_name: "遂宁",
        city_pinyin: "suining",
        short_pinyin: "suining"
    }, {
        city_id: 80011e4,
        city_name: "南充市",
        short_name: "南充",
        city_pinyin: "nanchong",
        short_pinyin: "nanchong"
    }, {
        city_id: 80013e4,
        city_name: "宜宾市",
        short_name: "宜宾",
        city_pinyin: "yibin",
        short_pinyin: "yb"
    }, {
        city_id: 80015e4,
        city_name: "达州市",
        short_name: "达州",
        city_pinyin: "dazhou",
        short_pinyin: "dazhou"
    }, {
        city_id: 80017e4,
        city_name: "巴中市",
        short_name: "巴中",
        city_pinyin: "bazhong",
        short_pinyin: "bazhong"
    }, {
        city_id: 80019e4,
        city_name: "阿坝藏族羌族自治州",
        short_name: "阿坝藏族羌族",
        city_pinyin: "aba",
        short_pinyin: "ab"
    }, {
        city_id: 80021e4,
        city_name: "凉山彝族自治州",
        short_name: "凉山彝族",
        city_pinyin: "liangshan",
        short_pinyin: "liangshan"
    }, {
        city_id: 270001e4,
        city_name: "贵阳市",
        short_name: "贵阳",
        city_pinyin: "guiyang",
        short_pinyin: "gy"
    }, {
        city_id: 270002e4,
        city_name: "六盘水市",
        short_name: "六盘水",
        city_pinyin: "liupanshui",
        short_pinyin: "lps"
    }, {
        city_id: 270003e4,
        city_name: "遵义市",
        short_name: "遵义",
        city_pinyin: "zunyi",
        short_pinyin: "zunyi"
    }, {
        city_id: 270004e4,
        city_name: "安顺市",
        short_name: "安顺",
        city_pinyin: "anshun",
        short_pinyin: "anshun"
    }, {
        city_id: 270005e4,
        city_name: "铜仁地区",
        short_name: "铜仁",
        city_pinyin: "tongren",
        short_pinyin: "tr"
    }, {
        city_id: 270006e4,
        city_name: "黔西南布依族苗族自治州",
        short_name: "黔西南布依族苗族",
        city_pinyin: "qianxinan",
        short_pinyin: "qxn"
    }, {
        city_id: 270007e4,
        city_name: "毕节地区",
        short_name: "毕节",
        city_pinyin: "bijie",
        short_pinyin: "bijie"
    }, {
        city_id: 270009e4,
        city_name: "黔南布依族苗族自治州",
        short_name: "黔南布依族苗族",
        city_pinyin: "qiannan",
        short_pinyin: "qn"
    }, {
        city_id: 280001e4,
        city_name: "昆明市",
        short_name: "昆明",
        city_pinyin: "kunming",
        short_pinyin: "km"
    }, {
        city_id: 280002e4,
        city_name: "曲靖市",
        short_name: "曲靖",
        city_pinyin: "qujing",
        short_pinyin: "qj"
    }, {
        city_id: 280003e4,
        city_name: "玉溪市",
        short_name: "玉溪",
        city_pinyin: "yuxi",
        short_pinyin: "yx"
    }, {
        city_id: 280004e4,
        city_name: "保山市",
        short_name: "保山",
        city_pinyin: "baoshan",
        short_pinyin: "bs"
    }, {
        city_id: 280005e4,
        city_name: "昭通市",
        short_name: "昭通",
        city_pinyin: "zhaotong",
        short_pinyin: "zt"
    }, {
        city_id: 280006e4,
        city_name: "丽江市",
        short_name: "丽江",
        city_pinyin: "lijiang",
        short_pinyin: "lj"
    }, {
        city_id: 280008e4,
        city_name: "临沧市",
        short_name: "临沧",
        city_pinyin: "lincang",
        short_pinyin: "lincang"
    }, {
        city_id: 280009e4,
        city_name: "楚雄彝族自治州",
        short_name: "楚雄彝族",
        city_pinyin: "chuxiong",
        short_pinyin: "cx"
    }, {
        city_id: 28001e5,
        city_name: "红河哈尼族彝族自治州",
        short_name: "红河哈尼族彝族",
        city_pinyin: "honghe",
        short_pinyin: "honghe"
    }, {
        city_id: 280011e4,
        city_name: "文山壮族苗族自治州",
        short_name: "文山壮族苗族",
        city_pinyin: "wenshan",
        short_pinyin: "ws"
    }, {
        city_id: 280012e4,
        city_name: "西双版纳傣族自治州",
        short_name: "西双版纳傣族",
        city_pinyin: "xishuangbanna",
        short_pinyin: "bn"
    }, {
        city_id: 280013e4,
        city_name: "大理白族自治州",
        short_name: "大理白族",
        city_pinyin: "dali",
        short_pinyin: "dali"
    }, {
        city_id: 280015e4,
        city_name: "怒江傈僳族自治州",
        short_name: "怒江傈僳族",
        city_pinyin: "nujianglisuzu",
        short_pinyin: "nujiang"
    }, {
        city_id: 280016e4,
        city_name: "迪庆藏族自治州",
        short_name: "迪庆藏族",
        city_pinyin: "diqing",
        short_pinyin: "diqing"
    }, {
        city_id: 290001e4,
        city_name: "拉萨市",
        short_name: "拉萨",
        city_pinyin: "lasa",
        short_pinyin: "lasa"
    }, {
        city_id: 290002e4,
        city_name: "昌都地区",
        short_name: "昌都",
        city_pinyin: "changdu",
        short_pinyin: "changdu"
    }, {
        city_id: 290003e4,
        city_name: "山南地区",
        short_name: "山南",
        city_pinyin: "shannan",
        short_pinyin: "sn"
    }, {
        city_id: 290004e4,
        city_name: "日喀则地区",
        short_name: "日喀则",
        city_pinyin: "rikaze",
        short_pinyin: "rkz"
    }, {
        city_id: 290005e4,
        city_name: "那曲地区",
        short_name: "那曲",
        city_pinyin: "naqu",
        short_pinyin: "nq"
    }, {
        city_id: 290006e4,
        city_name: "阿里地区",
        short_name: "阿里",
        city_pinyin: "ali",
        short_pinyin: "al"
    }, {
        city_id: 100001e4,
        city_name: "西安市",
        short_name: "西安",
        city_pinyin: "xian",
        short_pinyin: "xa"
    }, {
        city_id: 100002e4,
        city_name: "铜川市",
        short_name: "铜川",
        city_pinyin: "tongchuan",
        short_pinyin: "tc"
    }, {
        city_id: 100003e4,
        city_name: "宝鸡市",
        short_name: "宝鸡",
        city_pinyin: "baoji",
        short_pinyin: "baoji"
    }, {
        city_id: 100004e4,
        city_name: "咸阳市",
        short_name: "咸阳",
        city_pinyin: "xianyang",
        short_pinyin: "xianyang"
    }, {
        city_id: 100005e4,
        city_name: "渭南市",
        short_name: "渭南",
        city_pinyin: "weinan",
        short_pinyin: "wn"
    }, {
        city_id: 100006e4,
        city_name: "延安市",
        short_name: "延安",
        city_pinyin: "yanan",
        short_pinyin: "yanan"
    }, {
        city_id: 100007e4,
        city_name: "汉中市",
        short_name: "汉中",
        city_pinyin: "hanzhong",
        short_pinyin: "hanzhong"
    }, {
        city_id: 100008e4,
        city_name: "榆林市",
        short_name: "榆林",
        city_pinyin: "yulin",
        short_pinyin: "yl"
    }, {
        city_id: 100009e4,
        city_name: "安康市",
        short_name: "安康",
        city_pinyin: "ankang",
        short_pinyin: "ankang"
    }, {
        city_id: 300001e4,
        city_name: "兰州市",
        short_name: "兰州",
        city_pinyin: "lanzhou",
        short_pinyin: "lz"
    }, {
        city_id: 300002e4,
        city_name: "嘉峪关市",
        short_name: "嘉峪关",
        city_pinyin: "jiayuguan",
        short_pinyin: "jiayuguan"
    }, {
        city_id: 300003e4,
        city_name: "金昌市",
        short_name: "金昌",
        city_pinyin: "jinchang",
        short_pinyin: "jinchang"
    }, {
        city_id: 300004e4,
        city_name: "白银市",
        short_name: "白银",
        city_pinyin: "baiyin",
        short_pinyin: "by"
    }, {
        city_id: 300005e4,
        city_name: "天水市",
        short_name: "天水",
        city_pinyin: "tianshui",
        short_pinyin: "tianshui"
    }, {
        city_id: 300006e4,
        city_name: "武威市",
        short_name: "武威",
        city_pinyin: "wuwei",
        short_pinyin: "wuwei"
    }, {
        city_id: 300007e4,
        city_name: "张掖市",
        short_name: "张掖",
        city_pinyin: "zhangye",
        short_pinyin: "zhangye"
    }, {
        city_id: 300008e4,
        city_name: "平凉市",
        short_name: "平凉",
        city_pinyin: "pingliang",
        short_pinyin: "pl"
    }, {
        city_id: 300009e4,
        city_name: "酒泉市",
        short_name: "酒泉",
        city_pinyin: "jiuquan",
        short_pinyin: "jq"
    }, {
        city_id: 30001e5,
        city_name: "庆阳市",
        short_name: "庆阳",
        city_pinyin: "qingyang",
        short_pinyin: "qingyang"
    }, {
        city_id: 300011e4,
        city_name: "定西市",
        short_name: "定西",
        city_pinyin: "dingxi",
        short_pinyin: "dx"
    }, {
        city_id: 300013e4,
        city_name: "临夏回族自治州",
        short_name: "临夏回族",
        city_pinyin: "linxia",
        short_pinyin: "linxia"
    }, {
        city_id: 300014e4,
        city_name: "甘南藏族自治州",
        short_name: "甘南藏族",
        city_pinyin: "gannan",
        short_pinyin: "gn"
    }, {
        city_id: 310001e4,
        city_name: "西宁市",
        short_name: "西宁",
        city_pinyin: "xining",
        short_pinyin: "xn"
    }, {
        city_id: 310002e4,
        city_name: "海东地区",
        short_name: "海东",
        city_pinyin: "haidong",
        short_pinyin: "haidong"
    }, {
        city_id: 310003e4,
        city_name: "海北藏族自治州",
        short_name: "海北藏族",
        city_pinyin: "haibei",
        short_pinyin: "haibei"
    }, {
        city_id: 310004e4,
        city_name: "黄南藏族自治州",
        short_name: "黄南藏族",
        city_pinyin: "huangnan",
        short_pinyin: "huangnan"
    }, {
        city_id: 310006e4,
        city_name: "果洛藏族自治州",
        short_name: "果洛藏族",
        city_pinyin: "guoluo",
        short_pinyin: "guoluo"
    }, {
        city_id: 310007e4,
        city_name: "玉树藏族自治州",
        short_name: "玉树藏族",
        city_pinyin: "yushu",
        short_pinyin: "ys"
    }, {
        city_id: 310008e4,
        city_name: "海西蒙古族藏族自治州",
        short_name: "海西蒙古族藏族",
        city_pinyin: "haixi",
        short_pinyin: "hx"
    }, {
        city_id: 320001e4,
        city_name: "银川市",
        short_name: "银川",
        city_pinyin: "yinchuan",
        short_pinyin: "yinchuan"
    }, {
        city_id: 320002e4,
        city_name: "石嘴山市",
        short_name: "石嘴山",
        city_pinyin: "shizuishan",
        short_pinyin: "szs"
    }, {
        city_id: 320003e4,
        city_name: "吴忠市",
        short_name: "吴忠",
        city_pinyin: "wuzhong",
        short_pinyin: "wuzhong"
    }, {
        city_id: 320004e4,
        city_name: "固原市",
        short_name: "固原",
        city_pinyin: "guyuan",
        short_pinyin: "guyuan"
    }, {
        city_id: 330001e4,
        city_name: "乌鲁木齐市",
        short_name: "乌鲁木齐",
        city_pinyin: "wulumuqi",
        short_pinyin: "xj"
    }, {
        city_id: 330002e4,
        city_name: "克拉玛依市",
        short_name: "克拉玛依",
        city_pinyin: "kelamayi",
        short_pinyin: "klmy"
    }, {
        city_id: 330003e4,
        city_name: "吐鲁番地区",
        short_name: "吐鲁番",
        city_pinyin: "tulufan",
        short_pinyin: "tlf"
    }, {
        city_id: 330004e4,
        city_name: "哈密地区",
        short_name: "哈密",
        city_pinyin: "hami",
        short_pinyin: "hami"
    }, {
        city_id: 330005e4,
        city_name: "昌吉回族自治州",
        short_name: "昌吉回族",
        city_pinyin: "changji",
        short_pinyin: "changji"
    }, {
        city_id: 330012e4,
        city_name: "伊犁哈萨克自治州",
        short_name: "伊犁哈萨克",
        city_pinyin: "yili",
        short_pinyin: "yili"
    }, {
        city_id: 330013e4,
        city_name: "塔城地区",
        short_name: "塔城",
        city_pinyin: "tacheng",
        short_pinyin: "tac"
    }, {
        city_id: 10001e5,
        city_name: "商洛市",
        short_name: "商洛",
        city_pinyin: "shangluo",
        short_pinyin: "sl"
    }, {
        city_id: 120007e4,
        city_name: "常德市",
        short_name: "常德",
        city_pinyin: "changde",
        short_pinyin: "changde"
    }, {
        city_id: 120008e4,
        city_name: "张家界市",
        short_name: "张家界",
        city_pinyin: "zhangjiajie",
        short_pinyin: "zjj"
    }, {
        city_id: 140017e4,
        city_name: "菏泽市",
        short_name: "菏泽",
        city_pinyin: "heze",
        short_pinyin: "heze"
    }, {
        city_id: 150009e4,
        city_name: "黄山市",
        short_name: "黄山",
        city_pinyin: "huangshan",
        short_pinyin: "huangshan"
    }, {
        city_id: 150015e4,
        city_name: "亳州市",
        short_name: "亳州",
        city_pinyin: "bozhou",
        short_pinyin: "bozhou"
    }, {
        city_id: 230007e4,
        city_name: "松原市",
        short_name: "松原",
        city_pinyin: "songyuan",
        short_pinyin: "songyuan"
    }, {
        city_id: 240002e4,
        city_name: "景德镇市",
        short_name: "景德镇",
        city_pinyin: "jindezhen",
        short_pinyin: "jdz"
    }, {
        city_id: 240003e4,
        city_name: "萍乡市",
        short_name: "萍乡",
        city_pinyin: "pingxiang",
        short_pinyin: "px"
    }, {
        city_id: 240004e4,
        city_name: "九江市",
        short_name: "九江",
        city_pinyin: "jiujiang",
        short_pinyin: "jj"
    }, {
        city_id: 250013e4,
        city_name: "来宾市",
        short_name: "来宾",
        city_pinyin: "laibin",
        short_pinyin: "lb"
    }, {
        city_id: 250014e4,
        city_name: "崇左市 ",
        short_name: "崇左",
        city_pinyin: "chongzuo",
        short_pinyin: "chongzuo"
    }, {
        city_id: 270008e4,
        city_name: "黔东南苗族侗族自治州 ",
        short_name: "黔东南苗族侗族",
        city_pinyin: "qiandongnanmiaodongautonomous",
        short_pinyin: "qdn"
    }, {
        city_id: 280007e4,
        city_name: "普洱市 ",
        short_name: "普洱",
        city_pinyin: "puer",
        short_pinyin: "pe"
    }, {
        city_id: 280014e4,
        city_name: "德宏傣族景颇族自治州 ",
        short_name: "德宏傣族景颇族",
        city_pinyin: "daidehongjingpo",
        short_pinyin: "dh"
    }, {
        city_id: 290007e4,
        city_name: "林芝地区 ",
        short_name: "林芝",
        city_pinyin: "nyingchi",
        short_pinyin: "linzhi"
    }, {
        city_id: 300012e4,
        city_name: "陇南市",
        short_name: "陇南",
        city_pinyin: "longnan",
        short_pinyin: "ln"
    }, {
        city_id: 310005e4,
        city_name: "海南藏族自治州 ",
        short_name: "海南藏族",
        city_pinyin: "hainantibetan",
        short_pinyin: "hnz"
    }, {
        city_id: 320005e4,
        city_name: "中卫市",
        short_name: "中卫",
        city_pinyin: "zhongwei",
        short_pinyin: "zw"
    }, {
        city_id: 330006e4,
        city_name: "博尔塔拉蒙古自治州",
        short_name: "博尔塔拉蒙古",
        city_pinyin: "boertalamongol",
        short_pinyin: "btl"
    }, {
        city_id: 330007e4,
        city_name: "巴音郭楞蒙古自治州",
        short_name: "巴音郭楞蒙古",
        city_pinyin: "bayangolmongol",
        short_pinyin: "bygl"
    }, {
        city_id: 330008e4,
        city_name: "阿克苏地区",
        short_name: "阿克苏",
        city_pinyin: "akesu",
        short_pinyin: "aks"
    }, {
        city_id: 330009e4,
        city_name: "克孜勒苏柯尔克孜自治州",
        short_name: "克孜勒苏柯尔克孜",
        city_pinyin: "artux",
        short_pinyin: "kzl"
    }, {
        city_id: 33001e5,
        city_name: "喀什地区",
        short_name: "喀什",
        city_pinyin: "kashgar",
        short_pinyin: "ks"
    }, {
        city_id: 330011e4,
        city_name: "和田地区",
        short_name: "和田",
        city_pinyin: "hetian",
        short_pinyin: "ht"
    }, {
        city_id: 330014e4,
        city_name: "阿勒泰地区",
        short_name: "阿勒泰",
        city_pinyin: "altay",
        short_pinyin: "alt"
    }, {
        city_id: 350001e4,
        city_name: "香港特别行政区",
        short_name: "香港",
        city_pinyin: "xianggang",
        short_pinyin: "hk"
    }, {
        city_id: 360001e4,
        city_name: "澳门特别行政区",
        short_name: "澳门",
        city_pinyin: "aomen",
        short_pinyin: "am"
    }, {
        city_id: 60008e4,
        city_name: "衢州市",
        short_name: "衢州",
        city_pinyin: "quzhou",
        short_pinyin: "quzhou"
    }, {
        city_id: 80007e4,
        city_name: "广元市",
        short_name: "广元",
        city_pinyin: "guangyuan",
        short_pinyin: "guangyuan"
    }, {
        city_id: 80009e4,
        city_name: "内江市",
        short_name: "内江",
        city_pinyin: "neijiang",
        short_pinyin: "scnj"
    }, {
        city_id: 8001e5,
        city_name: "乐山市",
        short_name: "乐山",
        city_pinyin: "leshan",
        short_pinyin: "ls"
    }, {
        city_id: 80012e4,
        city_name: "眉山市",
        short_name: "眉山",
        city_pinyin: "meishan",
        short_pinyin: "ms"
    }, {
        city_id: 80014e4,
        city_name: "广安市",
        short_name: "广安",
        city_pinyin: "guangan",
        short_pinyin: "ga"
    }, {
        city_id: 80016e4,
        city_name: "雅安市",
        short_name: "雅安",
        city_pinyin: "yaan",
        short_pinyin: "ya"
    }, {
        city_id: 80018e4,
        city_name: "资阳市",
        short_name: "资阳",
        city_pinyin: "ziyang",
        short_pinyin: "zy"
    }, {
        city_id: 8002e5,
        city_name: "甘孜藏族自治州",
        short_name: "甘孜藏族",
        city_pinyin: "ganzizhou",
        short_pinyin: "ganzi"
    }, {
        city_id: 340001e4,
        city_name: "塘沽",
        short_name: "塘沽",
        city_pinyin: "tanggu",
        short_pinyin: "tanggu"
    }, {
        city_id: 60012e4,
        city_name: "慈溪市",
        short_name: "慈溪",
        city_pinyin: "cixi",
        short_pinyin: "cixi"
    }, {
        city_id: 70022e4,
        city_name: "昆山市",
        short_name: "昆山",
        city_pinyin: "kunshan",
        short_pinyin: "kunshan"
    }, {
        city_id: 140018e4,
        city_name: "安丘市",
        short_name: "安丘",
        city_pinyin: "anqiu",
        short_pinyin: "anqiu"
    }, {
        city_id: 40013e4,
        city_name: "襄阳市",
        short_name: "襄阳",
        city_pinyin: "xiangyang",
        short_pinyin: "xf"
    }, {
        city_id: 60013e4,
        city_name: "义乌市",
        short_name: "义乌",
        city_pinyin: "yiwu",
        short_pinyin: "yiwu"
    }, {
        city_id: 40014e4,
        city_name: "咸宁市",
        short_name: "咸宁",
        city_pinyin: "xianning",
        short_pinyin: "xianning"
    }, {
        city_id: 70014e4,
        city_name: "吴江市",
        short_name: "吴江",
        city_pinyin: "wujiang",
        short_pinyin: "wj"
    }, {
        city_id: 70015e4,
        city_name: "常熟市",
        short_name: "常熟",
        city_pinyin: "changshu",
        short_pinyin: "cs"
    }, {
        city_id: 70016e4,
        city_name: "江阴市",
        short_name: "江阴",
        city_pinyin: "jiangyin",
        short_pinyin: "jiangyin"
    }, {
        city_id: 200018e4,
        city_name: "济源市",
        short_name: "济源",
        city_pinyin: "jiyuan",
        short_pinyin: "jiyuan"
    }, {
        city_id: 40015e4,
        city_name: "荆州市",
        short_name: "荆州",
        city_pinyin: "jingzhou",
        short_pinyin: "jingzhou"
    }, {
        city_id: 19001e5,
        city_name: "晋江市",
        short_name: "晋江",
        city_pinyin: "jinjiang",
        short_pinyin: "jinjiang"
    }, {
        city_id: 190011e4,
        city_name: "石狮市",
        short_name: "石狮",
        city_pinyin: "shishi",
        short_pinyin: "shishi"
    }, {
        city_id: 180012e4,
        city_name: "涿州市",
        short_name: "涿州",
        city_pinyin: "zhuozhou",
        short_pinyin: "zhuozhou"
    }, {
        city_id: 260003e4,
        city_name: "五指山市",
        short_name: "五指山",
        city_pinyin: "wuzhishan",
        short_pinyin: "wzs"
    }, {
        city_id: 260004e4,
        city_name: "琼海市",
        short_name: "琼海",
        city_pinyin: "qionghai",
        short_pinyin: "qh"
    }, {
        city_id: 260005e4,
        city_name: "儋州市",
        short_name: "儋州",
        city_pinyin: "danzhou",
        short_pinyin: "danzhou"
    }, {
        city_id: 260006e4,
        city_name: "文昌市",
        short_name: "文昌",
        city_pinyin: "wenchang",
        short_pinyin: "wenchang"
    }, {
        city_id: 260007e4,
        city_name: "万宁市",
        short_name: "万宁",
        city_pinyin: "wanning",
        short_pinyin: "wanning"
    }, {
        city_id: 260008e4,
        city_name: "东方市",
        short_name: "东方",
        city_pinyin: "dongfang",
        short_pinyin: "df"
    }, {
        city_id: 260009e4,
        city_name: "澄迈县",
        short_name: "澄迈",
        city_pinyin: "chengmai",
        short_pinyin: "cm"
    }, {
        city_id: 26001e5,
        city_name: "定安县",
        short_name: "定安",
        city_pinyin: "dingan",
        short_pinyin: "da"
    }, {
        city_id: 260011e4,
        city_name: "屯昌县",
        short_name: "屯昌",
        city_pinyin: "tunchang",
        short_pinyin: "tunchang"
    }, {
        city_id: 260012e4,
        city_name: "临高县",
        short_name: "临高",
        city_pinyin: "lingao",
        short_pinyin: "lg"
    }, {
        city_id: 260013e4,
        city_name: "保亭县",
        short_name: "保亭",
        city_pinyin: "baoting",
        short_pinyin: "baoting"
    }, {
        city_id: 40016e4,
        city_name: "黄冈市",
        short_name: "黄冈",
        city_pinyin: "huanggang",
        short_pinyin: "huanggang"
    }, {
        city_id: 330015e4,
        city_name: "石河子市",
        short_name: "石河子",
        city_pinyin: "shihezi",
        short_pinyin: "shz"
    }, {
        city_id: 80023e4,
        city_name: "九寨沟",
        short_name: "九寨沟",
        city_pinyin: "jiuzhaigou",
        short_pinyin: "jzg"
    }, {
        city_id: 60015e4,
        city_name: "象山城",
        short_name: "象山",
        city_pinyin: "xiangshan",
        short_pinyin: "xs"
    }, {
        city_id: 190012e4,
        city_name: "武夷山",
        short_name: "武夷山",
        city_pinyin: "wuyishan",
        short_pinyin: "wys"
    }, {
        city_id: 240012e4,
        city_name: "婺源县",
        short_name: "婺源",
        city_pinyin: "wuyuan",
        short_pinyin: "wy"
    }, {
        city_id: 250015e4,
        city_name: "龙胜市",
        short_name: "龙胜",
        city_pinyin: "longsheng",
        short_pinyin: "longsheng"
    }, {
        city_id: 120015e4,
        city_name: "凤凰市",
        short_name: "凤凰",
        city_pinyin: "fenghuang",
        short_pinyin: "fh"
    }, {
        city_id: 260014e4,
        city_name: "乐东县",
        short_name: "乐东",
        city_pinyin: "ledong",
        short_pinyin: "ledong"
    }, {
        city_id: 40018e4,
        city_name: "鄂州市",
        short_name: "鄂州",
        city_pinyin: "ezhou",
        short_pinyin: "ez"
    }, {
        city_id: 70024e4,
        city_name: "仪征市",
        short_name: "仪征",
        city_pinyin: "yizheng",
        short_pinyin: "yizheng"
    }, {
        city_id: 260015e4,
        city_name: "琼中县",
        short_name: "琼中",
        city_pinyin: "qiongzhong",
        short_pinyin: "qiongzhong"
    }, {
        city_id: 260016e4,
        city_name: "白沙县",
        short_name: "白沙",
        city_pinyin: "baisha",
        short_pinyin: "baisha"
    }, {
        city_id: 260017e4,
        city_name: "昌江县",
        short_name: "昌江",
        city_pinyin: "changjiang",
        short_pinyin: "changjiang"
    }, {
        city_id: 260018e4,
        city_name: "陵水县",
        short_name: "陵水",
        city_pinyin: "lingshui",
        short_pinyin: "lingshui"
    }, {
        city_id: 220013e4,
        city_name: "满洲里市",
        short_name: "满洲里",
        city_pinyin: "manzhouli",
        short_pinyin: "mzl"
    }, {
        city_id: 70027e4,
        city_name: "宜兴市",
        short_name: "宜兴",
        city_pinyin: "yixing",
        short_pinyin: "yixing"
    }, {
        city_id: 60017e4,
        city_name: "瑞安市",
        short_name: "瑞安",
        city_pinyin: "ruian",
        short_pinyin: "ruian"
    }, {
        city_id: 60018e4,
        city_name: "乐清市",
        short_name: "乐清",
        city_pinyin: "yueqing",
        short_pinyin: "yueqing"
    }, {
        city_id: 60019e4,
        city_name: "余姚市",
        short_name: "余姚",
        city_pinyin: "yuyao",
        short_pinyin: "yuyao"
    }, {
        city_id: 60024e4,
        city_name: "长兴市",
        short_name: "长兴",
        city_pinyin: "changxing",
        short_pinyin: "changxing"
    }, {
        city_id: 60027e4,
        city_name: "德清市",
        short_name: "德清",
        city_pinyin: "deqing",
        short_pinyin: "deqing"
    }, {
        city_id: 60028e4,
        city_name: "安吉市",
        short_name: "安吉",
        city_pinyin: "anji",
        short_pinyin: "anji"
    }, {
        city_id: 60029e4,
        city_name: "永康市",
        short_name: "永康",
        city_pinyin: "yongkang",
        short_pinyin: "yongkang"
    }, {
        city_id: 6003e5,
        city_name: "兰溪市",
        short_name: "兰溪",
        city_pinyin: "lanxi",
        short_pinyin: "lanxi"
    }, {
        city_id: 60031e4,
        city_name: "东阳市",
        short_name: "东阳",
        city_pinyin: "dongyang",
        short_pinyin: "dongyang"
    }, {
        city_id: 70028e4,
        city_name: "张家港市",
        short_name: "张家港",
        city_pinyin: "zhangjiagang",
        short_pinyin: "zhjg"
    }, {
        city_id: 70029e4,
        city_name: "太仓市",
        short_name: "太仓",
        city_pinyin: "taicang",
        short_pinyin: "taicang"
    }, {
        city_id: 40019e4,
        city_name: "恩施市",
        short_name: "恩施",
        city_pinyin: "enshi",
        short_pinyin: "enshi"
    }, {
        city_id: 60037e4,
        city_name: "海宁市",
        short_name: "海宁",
        city_pinyin: "haining",
        short_pinyin: "haining"
    }, {
        city_id: 60038e4,
        city_name: "平湖市",
        short_name: "平湖",
        city_pinyin: "pinghu",
        short_pinyin: "pinghu"
    }, {
        city_id: 300015e4,
        city_name: "临夏市",
        short_name: "临夏",
        city_pinyin: "linxiaa",
        short_pinyin: "linxiaa"
    }, {
        city_id: 15002e5,
        city_name: "天长市",
        short_name: "天长",
        city_pinyin: "tianchang",
        short_pinyin: "tianchang"
    }, {
        city_id: 150021e4,
        city_name: "明光市",
        short_name: "明光",
        city_pinyin: "mingguang",
        short_pinyin: "mg"
    }, {
        city_id: 250016e4,
        city_name: "阳朔市",
        short_name: "阳朔",
        city_pinyin: "yangshuo",
        short_pinyin: "yangshuo"
    }, {
        city_id: 100013e4,
        city_name: "杨陵区",
        short_name: "杨陵",
        city_pinyin: "yangling",
        short_pinyin: "yangling"
    }, {
        city_id: 330016e4,
        city_name: "阜康市",
        short_name: "阜康",
        city_pinyin: "fukang",
        short_pinyin: "fukang"
    }, {
        city_id: 80025e4,
        city_name: "万州区",
        short_name: "万州",
        city_pinyin: "wanzhou",
        short_pinyin: "wanzhou"
    }, {
        city_id: 80026e4,
        city_name: "永川区",
        short_name: "永川",
        city_pinyin: "yongchuan",
        short_pinyin: "yongchuan"
    }, {
        city_id: 80027e4,
        city_name: "江津区",
        short_name: "江津",
        city_pinyin: "jiangjin",
        short_pinyin: "jiangjin"
    }, {
        city_id: 80028e4,
        city_name: "合川区",
        short_name: "合川",
        city_pinyin: "hechuan",
        short_pinyin: "hechuan"
    }, {
        city_id: 90002e4,
        city_name: "开县",
        short_name: "开县",
        city_pinyin: "kaixian",
        short_pinyin: "kaixian"
    }, {
        city_id: 90003e4,
        city_name: "綦江区",
        short_name: "綦江",
        city_pinyin: "qijiang",
        short_pinyin: "qijiang"
    }, {
        city_id: 90004e4,
        city_name: "南川区",
        short_name: "南川",
        city_pinyin: "nanchuan",
        short_pinyin: "nanchuan"
    }, {
        city_id: 6004e5,
        city_name: "平阳县",
        short_name: "平阳",
        city_pinyin: "pingyang",
        short_pinyin: "pingyang"
    }, {
        city_id: 60041e4,
        city_name: "苍南县",
        short_name: "苍南",
        city_pinyin: "cangnan",
        short_pinyin: "cangnan"
    }, {
        city_id: 120016e4,
        city_name: "浏阳县",
        short_name: "浏阳",
        city_pinyin: "liuyang",
        short_pinyin: "liuyang"
    }, {
        city_id: 33002e5,
        city_name: "奎屯市",
        short_name: "奎屯",
        city_pinyin: "kuitun",
        short_pinyin: "kuitun"
    }, {
        city_id: 330021e4,
        city_name: "独山子区",
        short_name: "独山子",
        city_pinyin: "dushanzi",
        short_pinyin: "dushanzi"
    }, {
        city_id: 330022e4,
        city_name: "库尔勒市",
        short_name: "库尔勒",
        city_pinyin: "kuerle",
        short_pinyin: "kuerle"
    }, {
        city_id: 330023e4,
        city_name: "乌苏市",
        short_name: "乌苏",
        city_pinyin: "wusu",
        short_pinyin: "wusu"
    }, {
        city_id: 80034e4,
        city_name: "绵竹市",
        short_name: "绵竹",
        city_pinyin: "mianzhu",
        short_pinyin: "mianzhu"
    }, {
        city_id: 80029e4,
        city_name: "南部县",
        short_name: "南部",
        city_pinyin: "nanbu",
        short_pinyin: "nanbu"
    }, {
        city_id: 8003e5,
        city_name: "阆中市",
        short_name: "阆中",
        city_pinyin: "langzhong",
        short_pinyin: "langzhong"
    }, {
        city_id: 80031e4,
        city_name: "江油县",
        short_name: "江油",
        city_pinyin: "jiangyou",
        short_pinyin: "jiangyou"
    }, {
        city_id: 80032e4,
        city_name: "什邡市",
        short_name: "什邡",
        city_pinyin: "shifang",
        short_pinyin: "shifang"
    }, {
        city_id: 80033e4,
        city_name: "广汉市",
        short_name: "广汉",
        city_pinyin: "guanghan",
        short_pinyin: "guanghan"
    }, {
        city_id: 90005e4,
        city_name: "长寿区",
        short_name: "长寿",
        city_pinyin: "changshou",
        short_pinyin: "changshou"
    }, {
        city_id: 90006e4,
        city_name: "涪陵区",
        short_name: "涪陵",
        city_pinyin: "fuling",
        short_pinyin: "fuling"
    }, {
        city_id: 90007e4,
        city_name: "黔江区",
        short_name: "黔江",
        city_pinyin: "qjiang",
        short_pinyin: "qjiang"
    }, {
        city_id: 90008e4,
        city_name: "铜梁区",
        short_name: "铜梁",
        city_pinyin: "tongliang",
        short_pinyin: "tongliang"
    }, {
        city_id: 90009e4,
        city_name: "北碚区",
        short_name: "北碚",
        city_pinyin: "beibei",
        short_pinyin: "beibei"
    }, {
        city_id: 9001e5,
        city_name: "大足区",
        short_name: "大足",
        city_pinyin: "dazu",
        short_pinyin: "dazu"
    }, {
        city_id: 90011e4,
        city_name: "璧山区",
        short_name: "璧山",
        city_pinyin: "bishan",
        short_pinyin: "bishan"
    }, {
        city_id: 190014e4,
        city_name: "长乐市",
        short_name: "长乐",
        city_pinyin: "changle",
        short_pinyin: "changle"
    }, {
        city_id: 190015e4,
        city_name: "平潭县",
        short_name: "平潭",
        city_pinyin: "pingtan",
        short_pinyin: "pingtan"
    }, {
        city_id: 140031e4,
        city_name: "滕州市",
        short_name: "滕州",
        city_pinyin: "tengzhou",
        short_pinyin: "tengzhou"
    }];
    y.exports = t
});;
define("waimai:widget/shoplist/dishlist/dishlist.js", function(require, exports, module) {
    var Tip = require("jsmod/ui/fixElement/tip"),
        cookieDataCenter = require("waimai:static/utils/CookieDataCenter.js"),
        nuomi_city = require("waimai:widget/shoplist/dishlist/nuomi_cityid.js"),
        recommendTpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="nuomi-recommend-shoplist">    ');
                    for (var i in data) {
                        _template_fun_array.push("    ");
                        var item = data[i];
                        _template_fun_array.push('    <div class="nuomi-recommend-block" data-url="', "undefined" == typeof item.deal_url ? "" : baidu.template._encodeHTML(item.deal_url), '">        <div class="nuomi-recommend-image">            <img src="', "undefined" == typeof item.tiny_image ? "" : baidu.template._encodeHTML(item.tiny_image), '" />        </div>        <div class="nuomi-recommend-info">            <p class="nuomi-recommend-info-title">', "undefined" == typeof item.title ? "" : baidu.template._encodeHTML(item.title), '</p>            <p class="nuomi-recommend-info-des">', "undefined" == typeof(item.description.length > 15 ? item.description.substr(0, 16) + "..." : item.description) ? "" : baidu.template._encodeHTML(item.description.length > 15 ? item.description.substr(0, 16) + "..." : item.description), '</p>            <div class="nuomi-recommend-info-price">                <span>￥', "undefined" == typeof(item.promotion_price / 100) ? "" : baidu.template._encodeHTML(item.promotion_price / 100), "</span>                <del>￥", "undefined" == typeof(item.market_price / 100) ? "" : baidu.template._encodeHTML(item.market_price / 100), "</del>            </div>        </div>    </div>    ")
                    }
                    _template_fun_array.push("</div>"), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        convertMC2LL = require("waimai:static/utils/convertMC2LL.js"),
        GlobalTips = require("waimai:static/utils/GlobalTips.js");
    module.exports = Widget.extend({
        el: "#dish-list",
        events: {
            "click [data-node=refresh]": "_doRecommendRefresh",
            "click .nuomi-recommend-block": "_doNuomiJump"
        },
        init: function(e) {
            var i = this;
            i._initParams(e), i._initTip(), i._initImg(), i._recommendAjax()
        },
        _initParams: function(e) {
            var i = this;
            i.$nuomiRecommend = i.$dom.nuomiRecommend, i.$nuomiTip = i.$nuomiRecommend.find(".nuomiRecommend-tip"), i.refInfo = e.refInfo, i.refrshing = !1, i.page = 1
        },
        _initTip: function() {
            new Tip({
                targets: "#dish-list .dish .dishName",
                className: "desc-float",
                trigger: "hover",
                targetType: "bottom,right,left",
                offset: {
                    top: 0,
                    left: 0
                }
            })
        },
        _initImg: function() {
            $(".dishlist img").each(function() {
                var e = $(this);
                e.attr("src", e.data("src"))
            })
        },
        _doNuomiJump: function(e) {
            var i = $(e.currentTarget),
                t = i.data("url");
            window.open(t)
        },
        _doRecommendRefresh: function() {
            var e = this;
            e._recommendAjax()
        },
        _recommendAjax: function() {
            var e = this,
                i = e.refInfo.lat,
                t = e.refInfo.lng,
                a = convertMC2LL({
                    lng: t,
                    lat: i
                }).join(","),
                n = cookieDataCenter.getCity().name || "北京",
                o = 10001e4;
            $.each(nuomi_city, function(e, i) {
                (n == i.city_name || n == i.short_name) && (o = i.city_id)
            }), e.refrshing ? (GlobalTips.hide(), GlobalTips.tip("请耐心等待一下 ~")) : (e.refrshing = !0, $.ajax({
                url: "https://openapi.nuomi.com/v1/tuan/deal/search",
                type: "GET",
                dataType: "jsonp",
                data: {
                    app_id: "74ef82defcebba10e72577209ac31851",
                    location: a,
                    page_size: 5,
                    city_id: o,
                    cat_ids: "326",
                    page: e.page
                },
                success: function(i) {
                    if (GlobalTips.hide(), e.$nuomiTip.hide(), e.refrshing = !1, 0 == i.errno) {
                        var t = i.data.deals,
                            a = e.$el.find(".nuomi-recommend-shoplist");
                        a && a.remove(), e.$nuomiRecommend.append(recommendTpl({
                            data: t
                        })), e.page++
                    } else e.$nuomiTip.show()
                }
            }))
        }
    })
});;
define("waimai:widget/shoplist/filter/filter.js", function(require, exports, module) {
    var CookieDataCenter = require("waimai:static/utils/CookieDataCenter.js"),
        _taste, _promotion, _welfare, _wd = $.href().param("wd"),
        g_sortby = "",
        tipTimer, optiontmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<ul class="filter-option" data-node="filter-cates">    ');
                    var selectedOption = {};
                    _template_fun_array.push("    ");
                    var unselectedOption = {};
                    _template_fun_array.push("    "), $.each(filterOption, function(t, e) {
                        _template_fun_array.push("        "), -1 != $.inArray(e.type, filter_promotion) ? (_template_fun_array.push("            "), selectedOption[t] = e, _template_fun_array.push("        ")) : (_template_fun_array.push("            "), unselectedOption[t] = e, _template_fun_array.push("        ")), _template_fun_array.push("    ")
                    }), _template_fun_array.push("    "), $.each(selectedOption, function(t, e) {
                        _template_fun_array.push('    <li class="option-item f-selected" data-msg="', "undefined" == typeof e.msg ? "" : baidu.template._encodeHTML(e.msg), '" data-type="', "undefined" == typeof e.type ? "" : baidu.template._encodeHTML(e.type), '">        <i></i>        <span>', "undefined" == typeof e.msg ? "" : baidu.template._encodeHTML(e.msg), "</span>    </li>    ")
                    }), _template_fun_array.push("    "), $.each(unselectedOption, function(t, e) {
                        _template_fun_array.push('    <li class="option-item" data-msg="', "undefined" == typeof e.msg ? "" : baidu.template._encodeHTML(e.msg), '" data-type="', "undefined" == typeof e.type ? "" : baidu.template._encodeHTML(e.type), '">        <i></i>        <span>', "undefined" == typeof e.msg ? "" : baidu.template._encodeHTML(e.msg), "</span>    </li>    ")
                    }), _template_fun_array.push('    <img class="arrow" src="', "undefined" == typeof arrowimg ? "" : baidu.template._encodeHTML(arrowimg), '" width="10px" height="10px"></ul>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        arrowimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAMAAADHVLbdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACEUExURQAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqmsLYQ4AAAArdFJOUwACA6k+7eMB8P51mTeO9ZhfRfOBbO6ant09lO9j8i1wJzbb6ogmkn0g6S70kVoBAAAAZ0lEQVQI15WORxLCQBADB5x2SU44kLHBsf//P9aE5Qo6qVWlGYn8KceLrd+Ve0nYuG+sFAeJNGr1xLOHPopsIRsNNgNcpnwBt6v0PnSvXgq+W8P9c3fNpNb+CZYGi+A7Yhae8vlPcx8nMAe3kYetyQAAAABJRU5ErkJggg==";
    module.exports = Widget.extend({
        el: "#f_panel",
        events: {
            "click .cate-item": "_doCateItemClick",
            "click .sort-item": "_doSortItemClick",
            "click .option-item": "_doOptionItemClick",
            "mouseover .filter-outline": "_filterOptionMouseover",
            "mouseleave .filter-outline": "_filterOptionMouseleave"
        },
        channels: {
            "shoplist.filter sort": "setSort",
            "shoplist.filter option": "setOption"
        },
        init: function(t) {
            "baiduwaimai.com.cn" === window.location.hostname && $("[data-id=25]").hide();
            var e = this;
            _welfare = t.welfare, e._initVariable(), e._initSelected(t.filter), e._initOptionItem(), e._initEvent()
        },
        setSort: function(t, e) {
            var i = this;
            g_sortby = e.attr("data-node");
            var a = i.$sortItem.filter("[data-node=" + g_sortby + "]");
            i.$sortItem.removeClass("selected"), a.addClass("selected")
        },
        setOption: function(t, e) {
            var i = this;
            i.$filterOutline.html(optiontmpl({
                filterOption: _welfare,
                filter_promotion: e,
                arrowimg: arrowimg
            })), i._initVariableOption(), $.proxy(i._initOptionItem(), i)
        },
        _initVariable: function() {
            var t = this;
            t.$filterOutline = t.$el.find(".filter-outline"), t.$sortItem = t.$el.find(".sort-item"), t._initVariableOption()
        },
        _initVariableOption: function() {
            var t = this;
            t.$arrow = t.$el.find(".arrow"), t.$optionItem = t.$el.find(".option-item"), t.optionItemLen = t.$optionItem.length, t.singleHeight = t.$optionItem.height(), t.foldHeight = Math.ceil(t.optionItemLen / 4) * t.singleHeight
        },
        _initSelected: function(t) {
            var e = this,
                i = e.$el.find(".sort-item");
            _taste = t.taste || 0, _promotion = t.promotion.length > 0 && t.promotion[0].length > 0 ? t.promotion : [], $.each(i, function(e, i) {
                var a = $(i);
                a.attr("data-node") == t.sortby && a.addClass("selected")
            })
        },
        _initOptionItem: function() {
            var t = this;
            $.each(t.$optionItem.slice(4), function(t, e) {
                $(e).addClass("move")
            }), t.optionItemLen > 4 && t.$arrow.show()
        },
        _initEvent: function() {
            var t = this;
            t.$el.find(".cate-item").not(".f-selected").on({
                mouseover: function(t) {
                    var e = $(t.currentTarget);
                    e.addClass("hover")
                },
                mouseleave: function(t) {
                    var e = $(t.currentTarget);
                    e.removeClass("hover")
                }
            })
        },
        _filterOptionMouseover: function() {
            var t = this;
            t.optionItemLen > 4 && (t.$filterOutline.css("height", t.foldHeight).addClass("tip"), t.$optionItem.addClass("tip"), $.each(t.$optionItem.slice(4), function(t, e) {
                $(e).removeClass("move")
            }), t.$arrow.addClass("transform"))
        },
        _filterOptionMouseleave: function() {
            var t = this;
            t.optionItemLen > 4 && (t.$filterOutline.css("height", t.singleHeight).removeClass("tip"), t.$optionItem.removeClass("tip"), $.each(t.$optionItem.slice(4), function(t, e) {
                $(e).addClass("move")
            }), t.$arrow.removeClass("transform"))
        },
        _goFilter: function() {
            var t = this,
                e = t._getBasicUrl(),
                i = e + "?taste=" + _taste;
            _promotion.length > 0 && (i += "&promotion=" + _promotion.join(",")), !! g_sortby && "totalsort" != g_sortby && (i += "&sortby=" + g_sortby), _wd && (i += "&wd=" + _wd), $.ajax({
                url: i + "&display=json",
                dataType: "json",
                type: "GET",
                success: function(e) {
                    e.ajaxUrl = i + "&display=json", t.$filterOutline.html(optiontmpl({
                        filterOption: _welfare,
                        filter_promotion: e.result.filter.promotion.split(","),
                        arrowimg: arrowimg
                    })), t._initVariableOption(), $.proxy(t._initOptionItem(), t), t.$filterOutline.trigger("mouseover"), t.$filterOutline.trigger("mouseleave"), listener.trigger("shoplist.list", "render", e)
                },
                error: function() {
                    window.location = i
                }
            })
        },
        _getBasicUrl: function() {
            var t = location.href,
                e = t.match(/\/waimai\/([a-z]+)\//i);
            return "/waimai/" + e[1] + "/" + CookieDataCenter.getAddr().__id
        },
        _doCateItemClick: function(t) {
            var e = this,
                i = $(t.currentTarget),
                a = $(".current-city").attr("data-code");
            _taste = i.attr("data-id"), e.$el.find(".cate-item").removeClass("f-selected"), i.addClass("f-selected");
            var o = _taste.split("_");
            addNStat({
                da_src: "cateBk." + o[0],
                da_act: "click",
                c: a
            }), e._goFilter()
        },
        _doSortItemClick: function(t) {
            var e = this,
                i = $(t.currentTarget);
            e.$sortItem.removeClass("selected"), i.addClass("selected"), g_sortby = i.attr("data-node"), listener.trigger("shoplist.filterfixed", "sort", i), e._goFilter()
        },
        _doOptionItemClick: function(t) {
            var e = this,
                i = $(t.currentTarget);
            i.toggleClass("f-selected");
            var a = e.$optionItem.filter(".f-selected");
            _promotion = [], $.each(a, function(t, e) {
                var i = $(e).attr("data-type");
                _promotion.push(i)
            }), listener.trigger("shoplist.filterfixed", "option", _promotion), e._goFilter()
        }
    })
});;
define("waimai:widget/shoplist/filterfixed/filterfixed.js", function(require, exports, module) {
    var CookieDataCenter = require("waimai:static/utils/CookieDataCenter.js"),
        _taste, _promotion, _wd = $.href().param("wd"),
        jumpDirectImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAALCAMAAACqC0YIAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADqUExURQAAACcmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNicmNnqKxrYAAABNdFJOUwCWBQwKCIgBB/7T+1ToAzlHM1CHfZOgcXey4y6+4igJMtcdRics9Tbg37ltSnOp5tXPGufsGA3bFxvJyBEWyrvdwsz9vy1wb+UCp8vAurOuBgAAAJRJREFUCNc9zkUSwzAMQFGnbSInZWZmZmZG3/86VaROtXz+I1mI7UaOprBczMR/YL2yJkNrPu51GHxoO2WP2e86iaQfBOzJBm0XZzKE3ZFMOZj0WBztxGYGASmfSOIjfJTJqNVzVa1h4A64nA8tTlWtqYoVrJ/vx00a7p+mCrT1dcfa47Ulm0nzpSv9Sw9EwtFyieQLDSYaJ3qNHqUAAAAASUVORK5CYII=",
        navSugTpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    if (eval(_template_varName), _template_fun_array.push(""), shop_sug_list && shop_sug_list.length) {
                        _template_fun_array.push('<h5>商户</h5><ul class="nav-sug-list nav-sug-shop-list">');
                        for (var i = 0; i < shop_sug_list.length; i++) {
                            var shop = shop_sug_list[i];
                            _template_fun_array.push("<li>                "), shop.is_store && 1 == shop.is_store ? _template_fun_array.push('                    <a href="/shopui/upc/shopview?shop_id=', "undefined" == typeof shop.id ? "" : baidu.template._encodeHTML(shop.id), '" title="', "undefined" == typeof shop.name ? "" : baidu.template._encodeHTML(shop.name), "，本月销售", "undefined" == typeof shop.sell_month_count ? "" : baidu.template._encodeHTML(shop.sell_month_count), '份" data-type="nav-sug-shop">                        <span class="n-s-left"><img src="', "undefined" == typeof shop.shop_logo ? "" : baidu.template._encodeHTML(shop.shop_logo), '" onerror="util.errorImg(this);"/>', "undefined" == typeof shop.name ? "" : baidu.template._encodeHTML(shop.name), '</span>                        <span class="n-s-right ', "undefined" == typeof shop.classWait ? "" : baidu.template._encodeHTML(shop.classWait), '">', "undefined" == typeof shop.tip ? "" : baidu.template._encodeHTML(shop.tip), "</span>                    </a>                ") : _template_fun_array.push('                    <a href="/waimai/shop/', "undefined" == typeof shop.id ? "" : baidu.template._encodeHTML(shop.id), '" title="', "undefined" == typeof shop.name ? "" : baidu.template._encodeHTML(shop.name), "，本月销售", "undefined" == typeof shop.sell_month_count ? "" : baidu.template._encodeHTML(shop.sell_month_count), '份" data-type="nav-sug-shop">                        <span class="n-s-left"><img src="', "undefined" == typeof shop.shop_logo ? "" : baidu.template._encodeHTML(shop.shop_logo), '" onerror="util.errorImg(this);"/>', "undefined" == typeof shop.name ? "" : baidu.template._encodeHTML(shop.name), '</span>                        <span class="n-s-right ', "undefined" == typeof shop.classWait ? "" : baidu.template._encodeHTML(shop.classWait), '">', "undefined" == typeof shop.tip ? "" : baidu.template._encodeHTML(shop.tip), "</span>                    </a>                "), _template_fun_array.push("</li>")
                        }
                        _template_fun_array.push("</ul>")
                    }
                    if (_template_fun_array.push(""), dish_sug_list && dish_sug_list.length) {
                        _template_fun_array.push('<h5>商品</h5><ul class="nav-sug-list nav-sug-dish-list">');
                        for (var i = 0; i < dish_sug_list.length; i++) {
                            var dish = dish_sug_list[i];
                            _template_fun_array.push('<li>            <a href="/waimai/shop/', "undefined" == typeof dish.rid ? "" : baidu.template._encodeHTML(dish.rid), "?searchdishid=", "undefined" == typeof dish.id ? "" : baidu.template._encodeHTML(dish.id), '" title="', "undefined" == typeof dish.name ? "" : baidu.template._encodeHTML(dish.name), "，", "undefined" == typeof dish.ownshop ? "" : baidu.template._encodeHTML(dish.ownshop), "，¥", "undefined" == typeof dish.price ? "" : baidu.template._encodeHTML(dish.price), '" data-type="nav-sug-dish"><span class="n-s-left"><span>', "undefined" == typeof dish.name ? "" : baidu.template._encodeHTML(dish.name), "</span><span>", "undefined" == typeof dish.ownshop ? "" : baidu.template._encodeHTML(dish.ownshop), '</span></span><span class="n-s-right ', "undefined" == typeof dish.classWait ? "" : baidu.template._encodeHTML(dish.classWait), '">', "undefined" == typeof dish.tip ? "" : baidu.template._encodeHTML(dish.tip), "</span></a></li>")
                        }
                        _template_fun_array.push("</ul>")
                    }
                    _template_fun_array.push(""), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        BUSS_STATUS = ["", "休息中", "可预订", "营业中", "已打烊", "需预定"],
        g_sortby = "",
        recall_info, tipTimer, hashKeyId, _welfare, $document = $(document),
        $filterBottom = $("#filter-bottom"),
        OFFSETTOP = $filterBottom ? $filterBottom.offset().top + 40 : 300,
        optiontmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<ul class="filter-option" data-node="filter-cates">    ');
                    var selectedOption = {};
                    _template_fun_array.push("    ");
                    var unselectedOption = {};
                    _template_fun_array.push("    "), $.each(filterOption, function(e, t) {
                        _template_fun_array.push("        "), -1 != $.inArray(t.type, filter_promotion) ? (_template_fun_array.push("            "), selectedOption[e] = t, _template_fun_array.push("        ")) : (_template_fun_array.push("            "), unselectedOption[e] = t, _template_fun_array.push("        ")), _template_fun_array.push("    ")
                    }), _template_fun_array.push("    "), $.each(selectedOption, function(e, t) {
                        _template_fun_array.push('    <li class="option-item f-selected" data-msg="', "undefined" == typeof t.msg ? "" : baidu.template._encodeHTML(t.msg), '" data-type="', "undefined" == typeof t.type ? "" : baidu.template._encodeHTML(t.type), '">        <i></i>        <span>', "undefined" == typeof t.msg ? "" : baidu.template._encodeHTML(t.msg), "</span>    </li>    ")
                    }), _template_fun_array.push("    "), $.each(unselectedOption, function(e, t) {
                        _template_fun_array.push('    <li class="option-item" data-msg="', "undefined" == typeof t.msg ? "" : baidu.template._encodeHTML(t.msg), '" data-type="', "undefined" == typeof t.type ? "" : baidu.template._encodeHTML(t.type), '">        <i></i>        <span>', "undefined" == typeof t.msg ? "" : baidu.template._encodeHTML(t.msg), "</span>    </li>    ")
                    }), _template_fun_array.push('    <img class="arrow" src="', "undefined" == typeof arrowimg ? "" : baidu.template._encodeHTML(arrowimg), '" width="10px" height="10px"></ul>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        arrowimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAMAAADHVLbdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACEUExURQAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqmsLYQ4AAAArdFJOUwACA6k+7eMB8P51mTeO9ZhfRfOBbO6ant09lO9j8i1wJzbb6ogmkn0g6S70kVoBAAAAZ0lEQVQI15WORxLCQBADB5x2SU44kLHBsf//P9aE5Qo6qVWlGYn8KceLrd+Ve0nYuG+sFAeJNGr1xLOHPopsIRsNNgNcpnwBt6v0PnSvXgq+W8P9c3fNpNb+CZYGi+A7Yhae8vlPcx8nMAe3kYetyQAAAABJRU5ErkJggg==";
    module.exports = Widget.extend({
        el: "#f_panelfixed",
        events: {
            "click .sort-item": "_doSortItemClick",
            "click .option-item": "_doOptionItemClick",
            "mouseover .filter-outline": "_filterOptionMouseover",
            "mouseleave .filter-outline": "_filterOptionMouseleave",
            "input #f-input": "_doSearchInputChange",
            "propertychange #f-input": "_doSearchInputChange",
            "focus #f-input": "_doSearchInputFocus",
            "focusout #f-input": "_doSearchInputfocusout",
            "keydown #f-input": "_doSearchInputKeyDown",
            "click #f-search": "_doSearchClick",
            "click .f-search-list li a": "_doSearchListClick"
        },
        channels: {
            "shoplist.filterfixed sort": "setSort",
            "shoplist.filterfixed option": "setOption"
        },
        init: function(e) {
            var t = this;
            _welfare = e.welfare, recall_info = e.refInfo, hashKeyId = e.hashKey ? e.hashKey : CookieDataCenter.getAddr() ? CookieDataCenter.getAddr().__id : void 0, !hashKeyId && (hashKeyId = ""), t._initVariable(), t._initSelected(e.filter), t._initOptionItem(), t._initEvent()
        },
        setSort: function(e, t) {
            var i = this;
            g_sortby = t.attr("data-node");
            var a = i.$sortItem.filter("[data-node=" + g_sortby + "]");
            i.$sortItem.removeClass("selected"), a.addClass("selected")
        },
        setOption: function(e, t) {
            var i = this;
            i.$filterOutline.html(optiontmpl({
                filterOption: _welfare,
                filter_promotion: t,
                arrowimg: arrowimg
            })), i._initVariableOption(), $.proxy(i._initOptionItem(), i)
        },
        _initVariable: function() {
            var e = this;
            e.$filterOutline = e.$el.find(".filter-outline"), e.$sortItem = e.$el.find(".sort-item"), e.$searchList = e.$el.find(".f-search-list"), e.$searchInput = e.$el.find("#f-input"), e._initVariableOption()
        },
        _initVariableOption: function() {
            var e = this;
            e.$arrow = e.$el.find(".arrow"), e.$optionItem = e.$el.find(".option-item"), e.optionItemLen = e.$optionItem.length, e.singleHeight = e.$optionItem.height(), e.foldHeight = Math.ceil(e.optionItemLen / 2) * e.singleHeight
        },
        _initSelected: function(e) {
            var t = this,
                i = t.$el.find(".sort-item");
            _taste = e.taste || 0, _promotion = e.promotion.length > 0 && e.promotion[0].length > 0 ? e.promotion : [], $.each(i, function(t, i) {
                var a = $(i);
                a.attr("data-node") == e.sortby && a.addClass("selected")
            })
        },
        _initOptionItem: function() {
            var e = this;
            $.each(e.$optionItem.slice(2), function(e, t) {
                $(t).addClass("move")
            }), e.optionItemLen > 2 && e.$arrow.show()
        },
        _initEvent: function() {
            var e = this;
            $document.on("scroll", function() {
                var t = $document.scrollTop();
                t >= OFFSETTOP ? e.$el.fadeIn(200) : e.$el.fadeOut(200)
            }), e.$el.find(".cate-item").not(".f-selected").on({
                mouseover: function(e) {
                    var t = $(e.currentTarget);
                    t.addClass("hover")
                },
                mouseleave: function(e) {
                    var t = $(e.currentTarget);
                    t.removeClass("hover")
                }
            })
        },
        _filterOptionMouseover: function() {
            var e = this;
            e.optionItemLen > 2 && (e.$filterOutline.css("height", e.foldHeight).addClass("tip"), e.$optionItem.addClass("tip"), $.each(e.$optionItem.slice(2), function(e, t) {
                $(t).removeClass("move")
            }), e.$arrow.addClass("transform"))
        },
        _filterOptionMouseleave: function() {
            var e = this;
            e.optionItemLen > 2 && (e.$filterOutline.css("height", e.singleHeight).removeClass("tip"), e.$optionItem.removeClass("tip"), $.each(e.$optionItem.slice(2), function(e, t) {
                $(t).addClass("move")
            }), e.$arrow.removeClass("transform"))
        },
        _goFilter: function() {
            var e = this,
                t = e._getBasicUrl(),
                i = t + "?taste=" + _taste;
            _promotion.length > 0 && (i += "&promotion=" + _promotion.join(",")), !! g_sortby && "totalsort" != g_sortby && (i += "&sortby=" + g_sortby), _wd && (i += "&wd=" + _wd), $.ajax({
                url: i + "&display=json",
                dataType: "json",
                type: "GET",
                success: function(t) {
                    t.ajaxUrl = i + "&display=json", e.$filterOutline.html(optiontmpl({
                        filterOption: _welfare,
                        filter_promotion: t.result.filter.promotion.split(","),
                        arrowimg: arrowimg
                    })), e._initVariableOption(), $.proxy(e._initOptionItem(), e), e.$filterOutline.trigger("mouseover"), e.$filterOutline.trigger("mouseleave"), listener.trigger("shoplist.list", "render", t), $document.scrollTop(0)
                },
                error: function() {
                    window.location = i
                }
            })
        },
        _getBasicUrl: function() {
            var e = location.href,
                t = e.match(/\/waimai\/([a-z]+)\//i);
            return "/waimai/" + t[1] + "/" + CookieDataCenter.getAddr().__id
        },
        _doSortItemClick: function(e) {
            var t = this,
                i = $(e.currentTarget);
            t.$sortItem.removeClass("selected"), i.addClass("selected"), g_sortby = i.attr("data-node"), listener.trigger("shoplist.filter", "sort", i), t._goFilter()
        },
        _doOptionItemClick: function(e) {
            var t = this,
                i = $(e.currentTarget);
            i.toggleClass("f-selected");
            var a = t.$optionItem.filter(".f-selected");
            _promotion = [], $.each(a, function(e, t) {
                var i = $(t).attr("data-type");
                _promotion.push(i)
            }), listener.trigger("shoplist.filter", "option", _promotion), t._goFilter()
        },
        _doSearchInputChange: function(e) {
            var t = this;
            if (hashKeyId) {
                var i = t.$searchInput.val();
                40 !== e.keyCode && 38 !== e.keyCode && 39 !== e.keyCode && 41 !== e.keyCode && $.ajax({
                    url: "/shopui?qt=shopdishsuggest&addr_id=" + hashKeyId + "&word=" + encodeURIComponent(i) + "&pre_only=0&page_num=0&range_num=5&" + Math.random(),
                    type: "GET",
                    dataType: "JSON",
                    success: function(e) {
                        e && 0 == e.error_no && e.result ? $.proxy(t._renderSearchList(e.result), t) : t.$searchList.hide()
                    },
                    error: function() {
                        t.$searchList.hide()
                    }
                })
            } else {
                var a = '<li><span class="f-search-txt"><img class="jumpDirectImg" src="' + jumpDirectImg + '">请先填写您的地址</span></li>';
                t.$searchList.html(a).show()
            }
        },
        _renderSearchList: function(e) {
            var t = this,
                i = navSugTpl(t._convertSug(e));
            t.$searchList.html(i), t.$searchList.children().length > 0 ? (t.$searchList.show(), addNStat({
                da_src: "SugListBk.showSearchList",
                da_act: "show",
                da_trd: "waimai"
            })) : t.$searchList.hide()
        },
        _convertSug: function(e) {
            for (var t = this, i = e.dish_sug_list, a = e.shop_sug_list, o = i.length, n = a.length, s = 0; o > s; s++) {
                var r = i[s];
                t._showTip(r, "dish")
            }
            for (var l = 0; n > l; l++) {
                var r = a[l];
                t._showTip(r, "shop")
            }
            return e.recall_info = recall_info, e
        },
        _showTip: function(e, t) {
            var i = e.businessStatus;
            e.classWait = "", 1 === i || 4 === i ? (e.tip = "店铺" + BUSS_STATUS[i], e.classWait = "wait") : 2 === i || 5 === i ? (e.tip = e.takeout_open_time + "开始配送", e.classWait = "start") : e.tip = "shop" === t ? e.sell_month_count + "份" : "¥ " + e.price
        },
        _doSearchInputFocus: function() {
            var e = this;
            e.$searchList.children().length > 0 && (e.$searchList.show(), addNStat({
                da_src: "SugListBk.showSearchList",
                da_act: "show",
                da_trd: "waimai"
            }))
        },
        _doSearchInputfocusout: function() {
            var e = this;
            setTimeout(function() {
                e.$searchList.hide()
            }, 300)
        },
        _doSearchListClick: function(e) {
            e.preventDefault();
            var t = $(e.currentTarget),
                i = t.attr("href"),
                a = t.data("type"),
                o = "nav-sug-shop" == a,
                n = "nav-sug-dish" == a;
            addNStat({
                da_src: "SugListBk.clickSearchList",
                da_act: "click",
                da_trd: "waimai"
            }), o && addNStat({
                da_src: "SugListBk.clickSearchShopList",
                da_act: "click",
                da_trd: "waimai"
            }), n && addNStat({
                da_src: "SugListBk.clickSearchDishList",
                da_act: "click",
                da_trd: "waimai"
            }), window.location = i
        },
        _doSearchInputKeyDown: function(e) {
            var t = this;
            return 13 == e.keyCode ? void t.$el.find("#f-search").click() : void 0
        },
        _doSearchClick: function() {
            var e = this;
            if (addNStat({
                da_src: "searchShopBk.searchBtn",
                da_act: "click",
                da_trd: "waimai"
            }), e.$searchInput.val()) {
                var t = e._getBasicUrl(),
                    i = t + "?wd=" + e.$searchInput.val();
                window.location = i
            } else e.$searchInput.focus()
        }
    })
});;
define("waimai:widget/shoplist/list/list.js", function(require, exports, module) {
    var shopCard = require("waimai:widget/common/ui/shopcard/shopcard.js"),
        cookie = require("wcommon:static/util/Cookie.js"),
        noresultpng = "data:image/png;base64,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",
        noresulttmpl = [function(_template_object) {
            var _template_fun_array = [],
                fn = function(__data__) {
                    var _template_varName = "";
                    for (var name in __data__) _template_varName += "var " + name + '=__data__["' + name + '"];';
                    eval(_template_varName), _template_fun_array.push('<div class="noresult-list">    <img src="', "undefined" == typeof noresultpng ? "" : baidu.template._encodeHTML(noresultpng), '" alt="">    <p class="msg">抱歉，没有找到相关商户</p>    <p><a href="/waimai/shoplist/', "undefined" == typeof hashKey ? "" : baidu.template._encodeHTML(hashKey), '">返回重新查找</a></p></div>'), _template_varName = null
                }(_template_object);
            return fn = null, _template_fun_array.join("")
        }][0],
        $window = $(window),
        BASE_AJAX = "/waimai/shoplist/",
        LOADMORE_AJAX = "",
        AjAX_RENDER_URL = "",
        flowtest = cookie.get("flowtest") || "default",
        shopCardObj, loadTimer, _hashkey, _pageOption = {
            totalCount: 0,
            pageCount: 0,
            perPage: 40,
            curPage: 1
        },
        dayTime = 864e5,
        todayTime = (new Date).getTime(),
        isAjaxRender = !1,
        Const = {
            COOKIE_LNG_KEY: "wm_callbacklng",
            COOKIE_LAT_KEY: "wm_callbacklat",
            COOKIE_ADDR_KEY: "wm_callbackaddr",
            COOKIE_EXPIRES: todayTime + 7 * dayTime,
            DEFAULT_PATH: "/"
        };
    module.exports = Widget.extend({
        el: "#shop-list",
        channels: {
            "shoplist.list render": "ajaxRender"
        },
        init: function(e) {
            var t = this;
            _hashkey = e.hashKey, "convenientlist" == e.page && (BASE_AJAX = "/waimai/convenientlist/"), t._consoleInfo(), t._initHtml(e.shops, e.displayNewShop, e.dataNotice, e.refInfo), t._bindScroll(), t._initPage(e.total, e.refInfo), t._initUrl(e.hashKey)
        },
        ajaxRender: function(e, t) {
            var o = this,
                i = o.$el.find(".shopcards-list"),
                n = o.$el.find(".noresult-list");
            0 != i.length && i.remove(), 0 != n.length && n.remove(), _pageOption.curPage = 1, 0 == t.error_no && 0 != t.result.shop_info.length ? (isAjaxRender = !0, AjAX_RENDER_URL = t.ajaxUrl, o._initHtml(t.result.shop_info, t.result.display_new_shop, t.result.data_notice, t.result.recall_info), o._initPage(t.result.total, t.result.recall_info)) : o.$el.find(".list").html(noresulttmpl({
                noresultpng: noresultpng,
                hashKey: _hashkey
            }))
        },
        _consoleInfo: function() {
            console._log("好吧，藏在这里都被你发现了！\n说明你不仅是一名吃货，还是一名会敲代码的吃货！\n那么，你一定是我们的菜了，快到碗里来！\n世界那么大，我想都尝尝！"), console._log("请发送简历至：%chr_talent@iwaimai.baidu.com（邮件标题请以“姓名-应聘XX职位-来自console”命名）", "color:red;"), console._log("职位介绍：http://dwz.cn/1jjsJ6")
        },
        _initHtml: function(e, t, o, i) {
            var n = this;
            shopCardObj = null, shopCardObj = new shopCard({
                data: e,
                display_new_shop: t,
                city_info: o,
                $el: n.$el.find(".list"),
                listComplete: $.proxy(n._listComplete, n),
                recall_info: i
            })
        },
        _listComplete: function(e) {
            var t = this,
                o = e.$el,
                i = o.find("li.list-item"),
                n = i.length;
            0 != n && (o.find(".shopimg img").each(function() {
                var e = $(this);
                e.attr("src", e.data("src"))
            }), t._listItemsEvent(i))
        },
        _listItemsEvent: function(e) {
            var t = this,
                o = null;
            e.on({
                mouseover: function() {
                    var t = $(this);
                    clearTimeout(o), o = setTimeout(function() {
                        e.removeClass("hover"), t.addClass("hover")
                    }, 200)
                },
                mouseleave: function() {
                    var e = $(this);
                    setTimeout(function() {
                        e.removeClass("hover")
                    }, 201)
                }
            }), e.on("mouseover", ".overlay", function() {
                var e = $(this),
                    t = e.parents("li.list-item");
                setTimeout(function() {
                    t.removeClass("hover")
                }, 250)
            }), e.on("click", ".overlay", function(e) {
                e.stopPropagation()
            }), $window.on("resize", function() {
                0 != t.$el.find(".shopcards-list").length && $.proxy(t._setHoverPosition(e), t)
            }), 0 != t.$el.find(".shopcards-list").length && setTimeout(function() {
                $.proxy(t._setHoverPosition(e), t)
            }, 0)
        },
        _setHoverPosition: function(e) {
            var t = this,
                o = t.$el.find(".shopcards-list"),
                i = o.outerWidth() + o.offset().left;
            e.each(function() {
                var e = $(this),
                    t = e.outerWidth() + e.offset().left;
                250 > i - t ? e.addClass("hover-left") : e.removeClass("hover-left")
            })
        },
        _bindScroll: function() {
            var e = this;
            $window.on("scroll", $.proxy(e._scrollCb, e))
        },
        _unbindScroll: function() {
            var e = this;
            $window.unbind("scroll", $.proxy(e._scrollCb, e))
        },
        _scrollCb: function() {
            var e = this;
            clearTimeout(loadTimer), loadTimer = setTimeout(function() {
                var t = $("body").height(),
                    o = $window.height();
                $window.scrollTop() + o >= t - 500 && _pageOption.curPage < _pageOption.pageCount && ("baiduwaimai.com.cn" === window.location.hostname || "baiduwaimai.com" === window.location.hostname ? setTimeout(function() {
                    $.proxy(e._loadMore(), e)
                }, 1e4) : $.proxy(e._loadMore(), e))
            }, 200)
        },
        _loadMore: function() {
            var e = this,
                t = _pageOption.curPage + 1;
            e.$el.find(".loading").removeClass("hide"), e._unbindScroll(), isAjaxRender ? e._setAjaxUrl() : e._setUrl(), addNStat({
                da_src: "loadmoreBk." + flowtest,
                da_act: "show"
            }), $.ajax({
                url: LOADMORE_AJAX + "&page=" + t + "&count=" + _pageOption.perPage,
                type: "GET",
                dataType: "json",
                success: function(o) {
                    0 == o.error_no && (e.$el.find(".loading").addClass("hide"), _pageOption.curPage = t, shopCardObj.renderList(o.result.shop_info, o.result.display_new_shop, "", o.result.data_notice), $.proxy(e._bindScroll(), e))
                },
                error: function() {
                    e.$el.find(".loading").addClass("hide"), $.proxy(e._bindScroll(), e)
                }
            })
        },
        _setUrl: function() {
            for (var e = [], t = ($(".filter-section .filter-up").find("li.cate-item.f-selected").attr("data-id"), $(".filter-section").find(".option-item.f-selected")), o = 0, i = t.length; i > o; o++) e.push(t.eq(o).attr("data-type"));
            var n = window.location.href.split("?");
            if (LOADMORE_AJAX = BASE_AJAX + (e.length > 0 ? "&promotion=" + e.join(",") : ""), n[1]) {
                var a = "";
                "&" != n[1][0] && (a = "&"), LOADMORE_AJAX += a + n[1]
            }
        },
        _setAjaxUrl: function() {
            LOADMORE_AJAX = AjAX_RENDER_URL
        },
        _initPage: function(e, t) {
            var o = this;
            _pageOption.totalCount = e, _pageOption.pageCount = Math.ceil(e / _pageOption.perPage), t && o._setCookie(t)
        },
        _setCookie: function(e) {
            cookie.setRaw(Const.COOKIE_LNG_KEY, e.lng, {
                expires: Const.COOKIE_EXPIRES,
                path: Const.DEFAULT_PATH
            }), cookie.setRaw(Const.COOKIE_LAT_KEY, e.lat, {
                expires: Const.COOKIE_EXPIRES,
                path: Const.DEFAULT_PATH
            }), cookie.setRaw(Const.COOKIE_ADDR_KEY, e.address, {
                expires: Const.COOKIE_EXPIRES,
                path: Const.DEFAULT_PATH
            })
        },
        _initUrl: function(e) {
            BASE_AJAX += e + "?display=json"
        }
    })
});;
define("waimai:widget/shoplist/searchresult/dishlist.js", function(i, t, o) {
    var e, n, a = i("waimai:widget/common/ui/dishcard/dishcard.js"),
        r = $("#sr_dish_loading"),
        s = $(window),
        l = {
            total: 0,
            count: 0,
            perPage: 20,
            curPage: 1
        },
        c = "",
        d = window.location.origin + window.location.pathname,
        u = !1,
        h = !1;
    o.exports = Widget.extend({
        el: "#sr_dish_list",
        init: function(i) {
            var t = this;
            l.total = i.total || 0, l.count = Math.ceil(l.total / l.perPage), c = i.wd || "", t._checkNextPage(), e = new a({
                $el: t.$el,
                data: i.dishs,
                listComplete: $.proxy(t._listComplete, t),
                recall_info: i.refInfo
            }), u && $.proxy(t._bindScroll(), t), $(".filter-up").remove()
        },
        _checkNextPage: function() {
            u = l.curPage < l.count
        },
        _listComplete: function() {
            var i = this;
            !u && $.proxy(i._unbindScroll(), i)
        },
        _bindScroll: function() {
            var i = this;
            s.bind("scroll", $.proxy(i._load, i))
        },
        _unbindScroll: function() {
            var i = this;
            s.unbind("scroll", $.proxy(i._load, i))
        },
        _load: function() {
            var i = this;
            clearTimeout(n), n = setTimeout(function() {
                var t = $("body").height(),
                    o = s.height(),
                    e = s.scrollTop(),
                    n = e + o >= t - 300;
                n && $.proxy(i._getDate(), i)
            }, 200)
        },
        _getDate: function() {
            var i = this,
                t = {
                    page: l.curPage + 1,
                    display: "json",
                    wd: c
                };
            h || (i._isLoading(!0), $.ajax({
                url: d,
                type: "get",
                data: t,
                dataType: "json",
                success: function(t) {
                    t && 0 == t.error_no && t.result && t.result.dish_info && (t.result.dish_info.length ? (l.curPage++, i._checkNextPage(), e.renderList(t.result.dish_info)) : u = !1), i._isLoading(!1)
                },
                error: function() {
                    i._isLoading(!1)
                }
            }))
        },
        _isLoading: function(i) {
            i ? (h = !0, r.show()) : (h = !1, r.hide())
        }
    })
});;
define("waimai:widget/shoplist/searchresult/shoplist.js", function(t, e, o) {
    var i = t("waimai:widget/common/ui/shopcard/shopcard.js");
    o.exports = Widget.extend({
        el: "#sr_shop_list",
        init: function(t) {
            var e = this,
                o = t.shops.length > 20 ? t.shops.slice(0, 20) : t.shops;
            new i({
                $el: e.$el,
                data: o,
                display_new_shop: t.displayNewShop,
                listComplete: $.proxy(e._listComplete, e),
                city_info: t.dataNotice,
                recall_info: t.refInfo
            })
        },
        _listComplete: function(t) {
            var e = this,
                o = t.$el,
                i = o.find("li.list-item"),
                s = i.length;
            0 != s && (o.find(".shopimg img").each(function() {
                var t = $(this);
                t.attr("src", t.data("src"))
            }), e._listItemsEvent(i))
        },
        _listItemsEvent: function(t) {
            var e = this,
                o = null;
            t.on({
                mouseover: function() {
                    var e = $(this);
                    clearTimeout(o), o = setTimeout(function() {
                        t.removeClass("hover"), e.addClass("hover")
                    }, 200)
                },
                mouseleave: function() {
                    var t = $(this);
                    setTimeout(function() {
                        t.removeClass("hover")
                    }, 201)
                }
            }), t.on("mouseover", ".overlay", function() {
                var t = $(this),
                    e = t.parents("li.list-item");
                setTimeout(function() {
                    e.removeClass("hover")
                }, 250)
            }), t.on("click", ".overlay", function(t) {
                t.stopPropagation()
            }), $(window).on("resize", function() {
                $.proxy(e._setHoverPosition(t), e)
            }), setTimeout(function() {
                $.proxy(e._setHoverPosition(t), e)
            }, 0)
        },
        _setHoverPosition: function(t) {
            var e = this,
                o = e.$el.find(".shopcards-list"),
                i = o.outerWidth() + o.offset().left;
            t.each(function() {
                var t = $(this),
                    e = t.outerWidth() + t.offset().left;
                250 > i - e ? t.addClass("hover-left") : t.removeClass("hover-left")
            })
        }
    })
});;
define("waimai:widget/shoplist/tab/tab.js", function(i, e, t) {
    var o = i("waimai:widget/common/userinfo/comp/registerDialog.js"),
        n = {
            payShopList: "/waimai/payshoplist"
        },
        a = {
            loactionReg: /waimai\.baidu\.com/g
        },
        s = {
            el: "body",
            events: {
                'click [data-node="tabPreferentialInfo"]': "tabPreferentialInfoHandler"
            },
            init: function(i) {
                console.log(i), this.judgeRealDomain(a.loactionReg) || (this.initInsideValues(), this.initPreferential(), this.initEvents())
            },
            judgeRealDomain: function(i) {
                return i.test(window.location.host) ? !0 : !1
            },
            initInsideValues: function() {
                this.$el = $(this.el || "body"), this.RegisterDialogWidget, this.$dom = this.$dom || {}, this.$dom.tabPreferentialInfo = this.$el.find('[data-node="tabPreferentialInfo"]')
            },
            initPreferential: function() {
                this.$dom.tabPreferentialInfo.show()
            },
            initEvents: function() {
                var i, e, t, o, n = this.events;
                for (var a in n) n.hasOwnProperty(a) && (i = n[a], e = a.split(/\s+/), t = e[0], o = e[1], this.$el.on(t, o, $.proxy(this[i], this)))
            },
            tabPreferentialInfoHandler: function() {
                window.userIsLogin || $("#username")[0] && $("#logout")[0] || window.cookie.get("directorGeneralLogin") ? window.location.href = n.payShopList : this.createRegisterDialog()
            },
            createRegisterDialog: function() {
                this.RegisterDialogWidget ? this.RegisterDialogWidget.show() : this.RegisterDialogWidget = o.createWidget({
                    title: "百度外卖VIP账号注册",
                    createId: "logout_user_register_create_tab"
                })
            }
        };
    t.exports = s
});;
define("waimai:widget/shoplist/tip/tip.js", function(i, e, t) {
    var o = i("wcommon:static/util/Cookie.js"),
        s = 864e5,
        n = 1 * s;
    t.exports = Widget.extend({
        el: ".tip-section",
        events: {
            "click [data-node=tipClose]": "_doTipClose"
        },
        init: function() {
            var i = this;
            i._checkTipSHow(), i._setTipCookie()
        },
        _checkTipSHow: function() {
            var i = this,
                e = o.getRaw("hidetip");
            e || (i.$el.show(), i._setTipCookie())
        },
        _setTipCookie: function() {
            o.setRaw("hidetip", 1, {
                expires: n,
                path: "/"
            })
        },
        _doTipClose: function() {
            var i = this;
            i.$el.hide()
        }
    })
});