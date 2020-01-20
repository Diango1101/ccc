<?php
require_once "../../../../51job/api/evp/weixin.php";
?>

dataForWx = {
"link": "https://evp.51job.com/2020/oct/", //微信链接
"imgUrl": "https://evp.51job.com/2020/oct/common/wx.png", //微信logo
"title": "一键开启“荒岛求生之旅”！", //微信标题
"desc": "遇到一场意外的“荒岛危机”，你将如何应对？",
};

wx.config({
debug: false,
appId: '<?php echo $signPackage["appId"]; ?>',
timestamp: <?php echo $signPackage["timestamp"]; ?>,
nonceStr: '<?php echo $signPackage["nonceStr"]; ?>',
signature: '<?php echo $signPackage["signature"]; ?>',
jsApiList: [
'onMenuShareAppMessage',
'onMenuShareTimeline'
]
});

wx.ready(function() {
wx.onMenuShareAppMessage({
title: dataForWx.title,
desc: dataForWx.desc,
link: dataForWx.link,
imgUrl: dataForWx.imgUrl,
fail: function (res) {
alert(JSON.stringify(res));
}
});

wx.onMenuShareTimeline({
title: dataForWx.title,
link: dataForWx.link,
imgUrl: dataForWx.imgUrl,
fail: function (res) {
alert(JSON.stringify(res));
}
});
});