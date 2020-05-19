// let now = new Date();
// let year = now.getFullYear(); //得到年份
// let month = now.getMonth();//得到月份
// let date = now.getDate();//得到日期
// let day = now.getDay();//得到周几
// let hour = now.getHours();//得到小时
// let minu = now.getMinutes();//得到分钟
// month = month + 1;
// if (month < 10) month = "0" + month;
// if (date < 10) date = "0" + date;
// if (hour < 10) hour = "0" + hour;
// if (minu < 10) minu = "0" + minu;
// let time = "";
// time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu;

export default function setWaterMark (time, str) {
  let id = str
  // 判断水印是否存在
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }

  // 创建画布
  let can = document.createElement('canvas')
  can.width = 300
  can.height = 200
  // 创建画笔
  let cans = can.getContext('2d')
  cans.rotate(-20 * Math.PI / 180)
  cans.font = '20px Vedana'
  cans.fillStyle = 'rgba(200, 200, 200, 0.30)'
  cans.textAlign = 'center'
  cans.shadowColor = 'skyblue'
  cans.textBaseline = 'Middle'
  cans.fillText(time, can.width / 2.5, can.height / 2)
  cans.fillText(str, can.width / 2.5, can.height / 2 + 30)

  // 容器
  let div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '0px'
  div.style.left = '0px'
  div.style.position = 'fixed'
  div.style.zIndex = '100000'
  div.style.width = document.documentElement.clientWidth + 'px'
  div.style.height = document.documentElement.clientHeight + 'px'
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(div)
  return id
}

// function watermark(settings) {
//   var txts = new Array();
//   txts = settings.split(",");
//   // var list = document.getElementsByClassName("header");
//   // while(list.length){
//   //     if (list[0] != null)
//   //         list[0].parentNode.removeChild( list[0]);
//   // }
//   //默认设置
//   var defaultSettings = {
//       watermark_txt: settings,
//       watermark_x: 20,//水印起始位置x轴坐标
//       watermark_y: 20,//水印起始位置Y轴坐标
//       watermark_rows: 10,//水印行数
//       watermark_cols: 10,//水印列数
//       watermark_x_space: 200,//水印x轴间隔
//       watermark_y_space: 100,//水印y轴间隔
//       watermark_color: '#46bee9',//水印字体颜色
//       watermark_alpha: 0.2,//水印透明度
//       watermark_fontsize: '16px',//水印字体大小
//       watermark_font: '微软雅黑',//水印字体
//       watermark_width: 210,//水印宽度
//       watermark_height: 90,//水印长度
//       watermark_angle: 20//水印倾斜度数
//   };
//   //采用配置项替换默认值，作用类似jquery.extend
//   if (arguments.length === 1 && typeof arguments[0] === "object") {
//       var src = arguments[0] || {};
//       for (key in src) {
//           if (src[key] && defaultSettings[key] && src[key] === defaultSettings[key])
//               continue;
//           else if (src[key])
//               defaultSettings[key] = src[key];
//       }
//   }

//   var oTemp = document.createDocumentFragment();

//   //获取页面最大宽度
//   var page_width = Math.max(document.documentElement.clientWidth, document.documentElement.clientWidth);
//   var cutWidth = page_width * 0.0150;
//   var page_width = page_width - cutWidth;
//   //获取页面最大高度
//   var page_height = Math.max(document.documentElement.clientHeight, document.documentElement.clientHeight) - 50;
//   // var page_height = document.body.scrollHeight+document.body.scrollTop;
//   //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
//   if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width * defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
//       defaultSettings.watermark_cols = parseInt((page_width - defaultSettings.watermark_x + defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
//       defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
//   }
//   //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
//   if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
//       defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
//       defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
//   }
//   var x;
//   var y;
//   for (var i = 0; i < defaultSettings.watermark_rows; i++) {
//       y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
//       for (var j = 0; j < defaultSettings.watermark_cols; j++) {
//           x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;
//           var mask_div = document.createElement('div');
//           mask_div.id = 'mask_div' + i + j;
//           mask_div.className = 'mask_div';
//           //mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt));

//           for (var k=0;k<txts.length ;k++ )
//           {
//               var mask_div1 =  mask_div.appendChild(document.createElement('span'));
//               mask_div1.setAttribute("style","display: block;");
//               mask_div1.appendChild(document.createTextNode(txts[k]));
//           }

//           //设置水印div倾斜显示
//           mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
//           mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
//           mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
//           mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
//           mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
//           mask_div.style.visibility = "";
//           mask_div.style.position = "absolute";
//           mask_div.style.left = x + 'px';
//           mask_div.style.top = y + 'px';
//           mask_div.style.overflow = "hidden";
//           mask_div.style.zIndex = "99999999";
//           mask_div.style.pointerEvents = 'none';//pointer-events:none  让水印不遮挡页面的点击事件
//           //mask_div.style.border="solid #eee 1px";
//           mask_div.style.opacity = defaultSettings.watermark_alpha;
//           mask_div.style.fontSize = defaultSettings.watermark_fontsize;
//           mask_div.style.fontFamily = defaultSettings.watermark_font;
//           mask_div.style.color = "#46bee9";
//           mask_div.style.textAlign = "center";
//           mask_div.style.width = defaultSettings.watermark_width + 'px';
//           mask_div.style.height = defaultSettings.watermark_height + 'px';
//           mask_div.style.display = "block";
//           oTemp.appendChild(mask_div);
//       }
//   }
//   document.body.appendChild(oTemp);
// }

// function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
//   //compatibility for firefox and chrome
//   var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
//   var pc = new myPeerConnection({
//           iceServers: []
//       }),
//       noop = function() {},
//       localIPs = {},
//       ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
//       key;

//   function iterateIP(ip) {
//       console.log(ip)
//       if (!localIPs[ip]) onNewIP(ip);
//       localIPs[ip] = true;
//   }

//   //create a bogus data channel
//   pc.createDataChannel("");

//   // create offer and set local description
//   pc.createOffer().then(function(sdp) {
//       sdp.sdp.split('\n').forEach(function(line) {
//           if (line.indexOf('candidate') < 0) return;
//           console.log(line)
//           line.match(ipRegex).forEach(iterateIP);
//       });

//       pc.setLocalDescription(sdp, noop, noop);
//   }).catch(function(reason) {
//       // An error occurred, so handle the failure to connect
//   });

//   //sten for candidate events
//   pc.onicecandidate = function(ice) {
//       if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
//       console.log(ice.candidate.candidate)
//       ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
//   };
// }

// // Usage
// // var userIp;
// // getUserIP(function(ip){
// //      userIp = ip;
// //     console.log(userIp)
// // });

// /*window.onload = function () {
//   watermark("检查站综合管理系统"+"   "+userIp);

// }*/
