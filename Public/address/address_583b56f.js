define("waimai:widget/usercenter/address/address.js",function(d,e,a){var i=d("waimai:widget/common/ui/address/address.js");a.exports=Widget.extend({el:"#usercenter-address",events:{},channels:{},init:function(d){var e=this;new i({data:d.data,$listEl:e.$dom.addrList,$addBtn:e.$dom.addrAdd,dialogShow:e._showDialog})},_showDialog:function(d){d.opt.$detailEl.on("click",".saveBtn",function(){d.saveAddress()}),d.opt.$detailEl.on("click",".escBtn",function(){d.cacheDialog.hide({fade:!0})}),d.opt.$detailEl.find(".placeholder-con").placeholder()}})});
$('#writeAddress').click(){
	$('.mod-dialog-frame')[0].style.display="block"}