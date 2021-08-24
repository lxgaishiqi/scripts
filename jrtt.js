const jsname='今日头条极速版'
const $ = Env(jsname)
const notify = $.isNode() ?require('./lxgaishiqi_sendNotify') : '';
$.idx = ($.idx = ($.getval("jrttcount") || "1") - 1) > 0 ? `${$.idx + 1}` : ""; // 账号扩展字符
const signurlArr = [],signkeyArr=[]
const farmurlArr = [],farmkeyArr=[]
const readurlArr = [],readkeyArr=[]
let signurl = $.getdata('signurl')
let signkey = $.getdata('signkey')

let farmurl = $.getdata('farmurl')
let farmkey = $.getdata('farmkey')

let readurl = $.getdata('readurl')
let readkey = $.getdata('readkey')
//var articles =''
let tz = ($.getval('tz') || '1');//0关闭通知，1默认开启
const invit=1;//新用户自动邀请，0关闭，1默认开启
const logs =0;//0为关闭日志，1为开启
var coins=''
var article =''
var collect = ''
var invited =''
var hour=''
var minute=''
if ($.isNode()) {
   hour = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getHours();
   minute = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getMinutes();
}else{
   hour = (new Date()).getHours();
   minute = (new Date()).getMinutes();
}
//CK运行

let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie();
   $.done()
} 
if ($.isNode()) {

    signurlArr.push('version_code=8.1.3&caid1=bbf8992a74af551387e90f7504fd554a&tma_jssdk_version=1.95.0.5&app_name=news_article_lite&vid=4BE0436F-1F88-4054-87AD-E1442DA3D280&device_id=650519073794557&channel=App%20Store&resolution=828*1792&aid=35&ab_version=2424987,668908,2424977,668903,668904,2424941,2424983,668907,668905,2424950,1859937,668906,2424959,2213245&ab_feature=794527&review_flag=0&ab_group=794527&update_version_code=81305&openudid=330f4b7478788306c3a427d66e266740eab10c2e&cdid=40FC2BD7-FFB0-42B8-9038-87A909454068&idfv=4BE0436F-1F88-4054-87AD-E1442DA3D280&ac=WIFI&os_version=13.4.1&ssmix=a&device_platform=iphone&iid=1372611919219261&ab_client=a1,f2,f7,e1&device_type=iPhone12,1&idfa=A42EF058-4148-4FE2-A4F2-EBD0DFFBD73E')

    signkeyArr.push('{"Accept-Encoding":"gzip, deflate","x-Tt-Token":"00c586858a503519c7467bdc7c90c5d2d300bad51843d6e1349696b63ba0a621893a4cb3c7231382241307a4c1af9df3d14a1de72a79eba30a29c5852ad366674c4ab554cb3d784793013cd6a83e8697994506cbfe2c6b6b289926bae0fef2aece374-1.0.1","Host":"api3-normal-c-lf.snssdk.com","x-tt-dt":"AAA6QVP63B4PS6K5IPNC6IKFYHSNDSAUMB5CMYRTUERLDHKJOUUXJ6WKTP4BI3BBSJ7SARCPDYGQ2U42LJCTP4RAZ5EFQT4HJF2GYZJJFGHFUUP7NRTW7NFRFO3HS","x-tt-trace-id":"00-8b3902ef0d24fa4c65029fd5b8090023-8b3902ef0d24fa4c-01","passport-sdk-version":"5.12.1","X-Khronos":"1612948504","Connection":"keep-alive","X-SS-Cookie":"install_id=1372611919219261; ttreq=1$407d4be10a753566b62d08f3bd822f6d7ce415d1; sessionid=c586858a503519c7467bdc7c90c5d2d3; sessionid_ss=c586858a503519c7467bdc7c90c5d2d3; sid_guard=c586858a503519c7467bdc7c90c5d2d3%7C1612139633%7C5095868%7CThu%2C+01-Apr-2021+00%3A05%3A01+GMT; sid_tt=c586858a503519c7467bdc7c90c5d2d3; uid_tt=d3e56be1dd0bb3a61fe99855fab19edd; uid_tt_ss=d3e56be1dd0bb3a61fe99855fab19edd; FRM=new; PIXIEL_RATIO=2; WIN_WH=414_795; d_ticket=a7e8c6946701dba46916d040fb26017fb7a28; n_mh=Z0-ClcEly332efHUlm0bYD0YXSBriP5Jg0JED4cxpK0; odin_tt=206dba1128f4ad3b4b409e7e2362e9faf9016fe26e6cbd35efa2b86f7ca0778b1c3dc6541f41ebd3c28f654983e649e5; passport_csrf_token=eaba1244da58460ed06df6de9bf559e5; passport_csrf_token_default=eaba1244da58460ed06df6de9bf559e5","X-SS-STUB":"D41D8CD98F00B204E9800998ECF8427E","X-Tyhon":"qmCXlPVoobGxTYmEqwjm27JghLi3bpWXi1KyM5Q=","User-Agent":"NewsLite 8.1.3 rv:8.1.3.05 (iPhone; iOS 13.4.1; zh_CN) Cronet","Content-Type":"application/json; encoding=utf-8","Accept":"application/json","sdk-version":"2","X-SS-DP":"35","tt-request-time":"1612948504951","Cookie":"passport_csrf_token=eaba1244da58460ed06df6de9bf559e5; passport_csrf_token_default=eaba1244da58460ed06df6de9bf559e5; d_ticket=a7e8c6946701dba46916d040fb26017fb7a28; n_mh=Z0-ClcEly332efHUlm0bYD0YXSBriP5Jg0JED4cxpK0; odin_tt=206dba1128f4ad3b4b409e7e2362e9faf9016fe26e6cbd35efa2b86f7ca0778b1c3dc6541f41ebd3c28f654983e649e5; FRM=new; PIXIEL_RATIO=2; WIN_WH=414_795; sessionid=c586858a503519c7467bdc7c90c5d2d3; sessionid_ss=c586858a503519c7467bdc7c90c5d2d3; sid_guard=c586858a503519c7467bdc7c90c5d2d3%7C1612139633%7C5095868%7CThu%2C+01-Apr-2021+00%3A05%3A01+GMT; sid_tt=c586858a503519c7467bdc7c90c5d2d3; uid_tt=d3e56be1dd0bb3a61fe99855fab19edd; uid_tt_ss=d3e56be1dd0bb3a61fe99855fab19edd; MONITOR_WEB_ID=9647b783-963b-497a-890c-89950981c203; i18next=score_task; install_id=1372611919219261; ttreq=1$407d4be10a753566b62d08f3bd822f6d7ce415d1","Content-Length":"0","X-Gorgon":"8404a0880000f6a7eb5f2e9faca4ba8d4d94ca612f1b61781317"}')

farmurlArr.push('device_id=650519073794557&device_platform=iphone&aid=35&os_version=13.4.1&update_version_code=81305&tma_jssdk_version=1.95.0.23&sid=&version_code=8.1.3&install_id=1372611919219261&app_name=news_article_lite&device_type=iPhone12,1&channel=App%20Store&host_app_name=undefined&activity_id=&credit_type=&coin_type=gold_coin')

farmkeyArr.push('{"X-SS-DP":"35","Connection":"keep-alive","x-tt-trace-id":"00-8b399aeb0d24fa4c65029fd41ccb0023-8b399aeb0d24fa4c-01","X-SS-Cookie":"install_id=1372611919219261; ttreq=1$407d4be10a753566b62d08f3bd822f6d7ce415d1; sessionid=c586858a503519c7467bdc7c90c5d2d3; sessionid_ss=c586858a503519c7467bdc7c90c5d2d3; sid_guard=c586858a503519c7467bdc7c90c5d2d3%7C1612139633%7C5095868%7CThu%2C+01-Apr-2021+00%3A05%3A01+GMT; sid_tt=c586858a503519c7467bdc7c90c5d2d3; uid_tt=d3e56be1dd0bb3a61fe99855fab19edd; uid_tt_ss=d3e56be1dd0bb3a61fe99855fab19edd; FRM=new; PIXIEL_RATIO=2; WIN_WH=414_795; MONITOR_WEB_ID=71ca13e1-6dd4-4afb-ac02-dcf8cd645ca8; i18next=score_task; d_ticket=a7e8c6946701dba46916d040fb26017fb7a28; n_mh=Z0-ClcEly332efHUlm0bYD0YXSBriP5Jg0JED4cxpK0; odin_tt=206dba1128f4ad3b4b409e7e2362e9faf9016fe26e6cbd35efa2b86f7ca0778b1c3dc6541f41ebd3c28f654983e649e5; passport_csrf_token=eaba1244da58460ed06df6de9bf559e5; passport_csrf_token_default=eaba1244da58460ed06df6de9bf559e5","sdk-version":"2","Accept-Encoding":"gzip, deflate","Content-Type":"application/json","x-Tt-Token":"00c586858a503519c7467bdc7c90c5d2d300bad51843d6e1349696b63ba0a621893a4cb3c7231382241307a4c1af9df3d14a1de72a79eba30a29c5852ad366674c4ab554cb3d784793013cd6a83e8697994506cbfe2c6b6b289926bae0fef2aece374-1.0.1","X-Khronos":"1612948543","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 NewsArticle/8.1.3.05 JsSdk/2.0 NetType/WIFI (NewsLite 8.1.3 13.400000) NewsLite/8.1.3 Mobile ToutiaoMicroApp/1.95.0.23","tt-request-time":"1612948543860","Cookie":"install_id=1372611919219261;ttreq=1$407d4be10a753566b62d08f3bd822f6d7ce415d1;sessionid=c586858a503519c7467bdc7c90c5d2d3;sessionid_ss=c586858a503519c7467bdc7c90c5d2d3;sid_guard=c586858a503519c7467bdc7c90c5d2d3%7C1612139633%7C5095868%7CThu%2C+01-Apr-2021+00%3A05%3A01+GMT;sid_tt=c586858a503519c7467bdc7c90c5d2d3;uid_tt=d3e56be1dd0bb3a61fe99855fab19edd;uid_tt_ss=d3e56be1dd0bb3a61fe99855fab19edd;FRM=new;PIXIEL_RATIO=2;WIN_WH=414_795;d_ticket=a7e8c6946701dba46916d040fb26017fb7a28;n_mh=Z0-ClcEly332efHUlm0bYD0YXSBriP5Jg0JED4cxpK0;odin_tt=206dba1128f4ad3b4b409e7e2362e9faf9016fe26e6cbd35efa2b86f7ca0778b1c3dc6541f41ebd3c28f654983e649e5;passport_csrf_token=eaba1244da58460ed06df6de9bf559e5;passport_csrf_token_default=eaba1244da58460ed06df6de9bf559e5;MONITOR_WEB_ID=71ca13e1-6dd4-4afb-ac02-dcf8cd645ca8;i18next=score_task","Host":"api3-normal-c-lf.snssdk.com","x-tt-dt":"AAA6QVP63B4PS6K5IPNC6IKFYHSNDSAUMB5CMYRTUERLDHKJOUUXJ6WKTP4BI3BBSJ7SARCPDYGQ2U42LJCTP4RAZ5EFQT4HJF2GYZJJFGHFUUP7NRTW7NFRFO3HS","passport-sdk-version":"5.12.1","Referer":"https://tmaservice.developer.toutiao.com/?appid=tta539d3843a134f3d&version=1.1.99","X-Tyhon":"TxzGDb3U8Cj58dgd47S3Qvrc1SH/0sQOw+7jDak=","X-Gorgon":"840440050000e0a791613c0b0ba91d0d6911740c6a54f73a2238"}')

readurlArr.push('version_code=8.1.3&caid1=bbf8992a74af551387e90f7504fd554a&tma_jssdk_version=1.95.0.23&app_name=news_article_lite&vid=4BE0436F-1F88-4054-87AD-E1442DA3D280&device_id=650519073794557&channel=App%20Store&resolution=828*1792&aid=35&ab_version=2424987,668908,2424977,668903,668904,2424941,2424983,668907,668905,2424950,1859937,668906,2424959,2213245&ab_feature=794527&review_flag=0&ab_group=794527&update_version_code=81305&openudid=330f4b7478788306c3a427d66e266740eab10c2e&cdid=40FC2BD7-FFB0-42B8-9038-87A909454068&idfv=4BE0436F-1F88-4054-87AD-E1442DA3D280&ac=WIFI&os_version=13.4.1&ssmix=a&device_platform=iphone&iid=1372611919219261&ab_client=a1,f2,f7,e1&device_type=iPhone12,1&idfa=A42EF058-4148-4FE2-A4F2-EBD0DFFBD73E&group_id=6927542051948986894')

readkeyArr.push('{"x-tt-trace-id":"00-8b39f4480d24fa4c65029fdf0a6c0023-8b39f4480d24fa4c-01","Connection":"keep-alive","X-SS-DP":"35","X-SS-Cookie":"install_id=1372611919219261; ttreq=1$407d4be10a753566b62d08f3bd822f6d7ce415d1; sessionid=c586858a503519c7467bdc7c90c5d2d3; sessionid_ss=c586858a503519c7467bdc7c90c5d2d3; sid_guard=c586858a503519c7467bdc7c90c5d2d3%7C1612139633%7C5095868%7CThu%2C+01-Apr-2021+00%3A05%3A01+GMT; sid_tt=c586858a503519c7467bdc7c90c5d2d3; uid_tt=d3e56be1dd0bb3a61fe99855fab19edd; uid_tt_ss=d3e56be1dd0bb3a61fe99855fab19edd; FRM=new; PIXIEL_RATIO=2; WIN_WH=414_795; d_ticket=a7e8c6946701dba46916d040fb26017fb7a28; n_mh=Z0-ClcEly332efHUlm0bYD0YXSBriP5Jg0JED4cxpK0; odin_tt=206dba1128f4ad3b4b409e7e2362e9faf9016fe26e6cbd35efa2b86f7ca0778b1c3dc6541f41ebd3c28f654983e649e5; passport_csrf_token=eaba1244da58460ed06df6de9bf559e5; passport_csrf_token_default=eaba1244da58460ed06df6de9bf559e5","sdk-version":"2","Accept-Encoding":"gzip, deflate","x-Tt-Token":"00c586858a503519c7467bdc7c90c5d2d300bad51843d6e1349696b63ba0a621893a4cb3c7231382241307a4c1af9df3d14a1de72a79eba30a29c5852ad366674c4ab554cb3d784793013cd6a83e8697994506cbfe2c6b6b289926bae0fef2aece374-1.0.1","X-Khronos":"1612948566","User-Agent":"NewsLite 8.1.3 rv:8.1.3.05 (iPhone; iOS 13.4.1; zh_CN) Cronet","tt-request-time":"1612948566736","Cookie":"passport_csrf_token=eaba1244da58460ed06df6de9bf559e5; passport_csrf_token_default=eaba1244da58460ed06df6de9bf559e5; d_ticket=a7e8c6946701dba46916d040fb26017fb7a28; n_mh=Z0-ClcEly332efHUlm0bYD0YXSBriP5Jg0JED4cxpK0; odin_tt=206dba1128f4ad3b4b409e7e2362e9faf9016fe26e6cbd35efa2b86f7ca0778b1c3dc6541f41ebd3c28f654983e649e5; FRM=new; PIXIEL_RATIO=2; WIN_WH=414_795; sessionid=c586858a503519c7467bdc7c90c5d2d3; sessionid_ss=c586858a503519c7467bdc7c90c5d2d3; sid_guard=c586858a503519c7467bdc7c90c5d2d3%7C1612139633%7C5095868%7CThu%2C+01-Apr-2021+00%3A05%3A01+GMT; sid_tt=c586858a503519c7467bdc7c90c5d2d3; uid_tt=d3e56be1dd0bb3a61fe99855fab19edd; uid_tt_ss=d3e56be1dd0bb3a61fe99855fab19edd; MONITOR_WEB_ID=9647b783-963b-497a-890c-89950981c203; i18next=score_task; install_id=1372611919219261; ttreq=1$407d4be10a753566b62d08f3bd822f6d7ce415d1","Host":"api3-normal-c-lf.snssdk.com","x-tt-dt":"AAA6QVP63B4PS6K5IPNC6IKFYHSNDSAUMB5CMYRTUERLDHKJOUUXJ6WKTP4BI3BBSJ7SARCPDYGQ2U42LJCTP4RAZ5EFQT4HJF2GYZJJFGHFUUP7NRTW7NFRFO3HS","passport-sdk-version":"5.12.1","X-Tyhon":"MlIN9sumO9OPgxPmlcZ8uYyuHtqJoA/1tZwoHNA=","X-Gorgon":"8404809300005db3fff9684dadbf4813d992a64620fb869d2207"}')

    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
 } else {
    signurlArr.push($.getdata('signurl'))
    signkeyArr.push($.getdata('signkey'))
    farmurlArr.push($.getdata('farmurl'))
    farmkeyArr.push($.getdata('farmkey'))
    readurlArr.push($.getdata('readurl'))
    readkeyArr.push($.getdata('readkey'))
    let jrttcount = ($.getval('jrttcount') || '1');
  for (let i = 2; i <= jrttcount; i++) {
    signurlArr.push($.getdata(`signurl${i}`))
    signkeyArr.push($.getdata(`signkey${i}`))
    farmurlArr.push($.getdata(`farmurl${i}`))
    farmkeyArr.push($.getdata(`farmkey${i}`))
    readurlArr.push($.getdata(`readurl${i}`))
    readkeyArr.push($.getdata(`readkey${i}`))
  }
}
!(async () => {
if (!signurlArr[0]) {
    $.msg($.name, '【提示】请先获取今日头条极速版一cookie')
    return;
  }
   console.log(`------------- 共${signurlArr.length}个账号----------------\n`)
  for (let i = 0; i < signurlArr.length; i++) {
    if (signurlArr[i]) {
      other = ''
      signurl = signurlArr[i];
      signkey = signkeyArr[i];
      farmurl = farmurlArr[i];
      farmkey = farmkeyArr[i];
      readurl = readurlArr[i];
      readkey = readkeyArr[i];
      $.index = i + 1;
      console.log(`\n开始【今日头条极速版${$.index}】`)
      await invite()
      await userinfo()
      await profit()
      await sign_in()
      await openbox()
      await reading()
      await farm_sign_in()
      await openfarmbox()
      await landwarer()
      await double_reward()
      await sleepstatus()
      await control()
      //await sleepstart()
      //await sleepstop()
      //await collectcoins(coins)
      await showmsg()
  }
 }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
function GetCookie() {
 if($request&&$request.url.indexOf("info")>=0) {
  const farmurlVal = $request.url.split(`?`)[1]
    if (farmurlVal) $.setdata(farmurlVal,
`farmurl${$.idx}`)
    $.log(`[${jsname}] 获取farm请求: 成功,farmirlVal: ${farmurl}`)
    $.msg(`获取farmurl: 成功🎉`, ``)
   const jrttfarmKey = JSON.stringify($request.headers)
$.log(jrttfarmKey)
  if(jrttfarmKey)        $.setdata(jrttfarmKey,`farmkey${$.idx}`)
    $.log(`[${jsname + $.idx}] 获取farm请求: 成功,jrttfarmKey: ${farmkey}`)
    $.msg(`获取farmkey: 成功🎉`, ``)
}
  if($request&&$request.url.indexOf("sign_in")>=0) {
  const signurlVal = $request.url.split(`?`)[1]
    if (signurlVal) $.setdata(signurlVal,
`signurl${$.idx}`)
    $.log(`[${jsname + $.idx}] 获取sign请求: 成功,signurlVal: ${signurl}`)
    $.msg(`获取signurl: 成功🎉`, ``)
   const jrttsignKey = JSON.stringify($request.headers)
//$.log(jrttsignKey)
  if(jrttsignKey.indexOf("STUB")>=0)
    $.setdata(jrttsignKey,`signkey${$.idx}`)
    $.log(`[${jsname + $.idx}] 获取sign请求: 成功,jrttsignKey: ${signkey}`)
    $.msg(`获取signkey: 成功🎉`, ``)
}

if($request&&$request.url.indexOf("get_read_bonus")>=0) {
  const readurlVal = $request.url.split(`?`)[1]

  //const article = readurlVal.replace(/\d{3}$/,Math.floor(Math.random()*1000));
//article = article.replace(/\d{3}$/, (Math.random()*1e3).toFixed(0).padStart(3,"0"));

    if(article) $.setdata(article,
'article')
    if (readurlVal) $.setdata(readurlVal,
`readurl${$.idx}`)
    $.log(`[${jsname + $.idx}] 获取read请求: 成功,readurlVal: ${readurl}`)
    $.msg(`获取readurl: 成功🎉`, ``)
   const jrttreadKey = JSON.stringify($request.headers)
$.log(jrttreadKey)
  if(jrttreadKey)        $.setdata(jrttreadKey,`readkey${$.idx}`)
    $.log(`[${jsname}] 获取read请求: 成功,jrttreadKey: ${readkey}`)
    $.msg(`获取readkey: 成功🎉`, ``)
    }
  }
function sign_in() {
return new Promise((resolve, reject) => {
  let sign_inurl ={
    url: `https://api3-normal-c-lq.snssdk.com/score_task/v1/task/sign_in/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(sign_inurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
      if(result.err_no == 0) {
          other +='📣首页签到\n'
          other +='签到完成\n'
          other +='获得'+result.data.score_amount+'金币\n'
          other +='连续签到'+result.data.sign_times+'天\n'
  
}else{
          other +='📣首页签到\n'
          other +='今日已完成签到\n'
           }
          resolve()
    })
   })
  } 

async function control(){
   if(collect == 0){
      await sleepstart();
   }
   if(collect == 1){
      await sleepstop();
      await collectcoins(coins);
   }
   if(collect == 2){
      //$.log('no opreation')
      other +='\n\n生前何必久睡，死后自会长眠\n'
   }
   if(collect == 3){
      await collectcoins(coins);
   }
   if(invited == 4 && invit== 1){
      await invitation();
   }
}
function invite() {
return new Promise((resolve, reject) => {
  let inviteurl ={
    url: `https://api3-normal-c-lq.snssdk.com/score_task/v1/user/new_tabs/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.get(inviteurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs)$.log(data)
      if(result.data.section[10].key=='mine_input_code') {
          invited=4;
           }else{
          invited=5;
}
          resolve()
    })
   })
  } 
function invitation() {
return new Promise((resolve, reject) => {
  let invitatonurl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/invite/post_invite_code/?_request_from=web&device_platform=ios&ac=4G&${signurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
    body: JSON.stringify({"invitecode" : "1980436898"})
}

   $.post(invitatonurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs)$.log(data)
          resolve()
    })
   })
  } 

function userinfo() {
return new Promise((resolve, reject) => {
  let userinfourl ={
    url: `https://api3-normal-c-hl.snssdk.com/passport/account/info/v2/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.get(userinfourl,(error, response, data) =>{
     const result = JSON.parse(data)
      //$.log(signurl+'\n'+signkey+'\n'+farmurl+'\n'+farmkey+'\n'+readurl+'\n'+readkey)
       if(logs) $.log(data)
      if(result.message == 'success') {
          other +='🎉'+result.data.name+'\n'
  
}     else if(result.message == 'error'){
          other += '⚠️异常:'+result.data.description+'\n'
           }else{
          other += '⚠️异常'
}
          resolve()
    })
   })
  } 

function profit() {
return new Promise((resolve, reject) => {
  let profiturl ={
    url: `https://api3-normal-c-lq.snssdk.com/score_task/v1/user/info/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.get(profiturl,(error, response, data) =>{
     const result = JSON.parse(data)
        if(logs)$.log(data)
      if(result.err_no == 0) {
          other +='🎉金币收益:'+result.data.score.amount+'\n🎉估计兑换现金:'+(result.data.score.amount/30000).toFixed(2)+'\n🎉'+'现金收益:'+result.data.cash.amount+'\n'      
}else{
          other += '⚠️异常\n'
           }
          resolve()
    })
   })
  } 

//文章阅读30篇每天
function reading() {
const articles = readurl.replace(/\d{3}$/,Math.floor(Math.random()*1000));
return new Promise((resolve, reject) => {
  let readurl ={
    url: `https://api3-normal-c-lq.snssdk.com/score_task/v1/task/get_read_bonus/?${articles}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(readurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs)  $.log(data)
      other +='📣文章阅读\n'
      if(result.err_no == 0) {
          other +='阅读完成'
          other +='获得'+result.data.score_amount+'金币\n'
          other +='阅读进度'+result.data.icon_data.done_times+'/'+result.data.icon_data.read_limit+'\n'
      }
       if(result.err_no == 4){
          other +='文章阅读已达上限\n'
        }
       if(result.err_no == 1028){
          other +='这篇文章已经读过了\n'
        }
          resolve()
    })
   })
  } 
//农场签到
function farm_sign_in() {
return new Promise((resolve, reject) => {
  let farm_sign_inurl ={
    url: `https://api3-normal-c-lq.snssdk.com/ttgame/game_farm/reward/sign_in?watch_ad=1&${signurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
}

   $.get(farm_sign_inurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
       other +='📣农场签到\n'
      if(result.status_code == 0) {
          other +='签到完成\n'
         
}else{
          other +=result.message+'\n'
           }
          resolve()
    })
   })
  } 

function openbox() {
return new Promise((resolve, reject) => {
  let openboxurl ={
    url: `https://it-lq.snssdk.com/score_task/v1/task/open_treasure_box/?${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(openboxurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
       other +='📣首页宝箱\n'
      if(result.err_no == 0) {
        other += '开启成功'
        other += '获得金币'+result.data.score_amount+'个\n'
        }
      else{
         if(result.err_no == 9){
        other += result.err_tips+'\n'
        }else{
        other +="不在开宝箱时间\n"
           }
    }
          resolve()
    })
   })
  }  


function openfarmbox() {
return new Promise((resolve, reject) => {
  let openfarmboxurl ={
    url: `https://api3-normal-c-lq.snssdk.com/ttgame/game_farm/box/open?${farmurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
}

   $.get(openfarmboxurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
       other +='📣农场宝箱\n'
      if(result.status_code == 0) {
        other += "第"+(5-result.data.box_num)+"开启成功"
        other += "还可以开启"+result.data.box_num+"个\n"
        }
      else if(result.status_code == 5003){
        other +="已全部开启\n"
        }
          resolve()
    })
   })
  }  
function landwarer() {
return new Promise((resolve, reject) => {
  let landwaterurl ={
    url: `https://api3-normal-c-lq.snssdk.com/ttgame/game_farm/land_water?tentimes=0${farmurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
}

   $.get(landwaterurl,(error, response, data) =>{
     const result = JSON.parse(data)
        if(logs)$.log(data)
       other +='📣农场浇水\n'
      if(result.status_code == '0') {
        other += result.message+'\n'
        other += '💧水滴剩余'+result.data.water+'\n'
        }
      else{
        other +=result.message+'\n'
           }
          resolve()
    })
   })
  } 
//done 这个离线奖励当宝箱全部开完后，需要进入农场再运行脚本，才能获取离线奖励，应该有一个判定，目前没有找到
//利用浇水激活进农场状态获取离线奖励，目前测试每天离线奖励足够开启农场5个宝箱，不需要做游戏加快生产，具体情况看后期是否需要，再考虑加做除虫，开地，三餐奖励
function double_reward() {
return new Promise((resolve, reject) => {
  let double_rewardurl ={
    url: `https://api3-normal-c-lq.snssdk.com/ttgame/game_farm/double_reward?watch_ad=1&${farmurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
}

   $.get(double_rewardurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
        other +='📣农场视频双倍离线奖励\n'
      if(result.status_code == 0) {
        other += '获得成功\n'
        }else if(result.status_code==5033){
            other += result.message+'\n'
          }
        else{
        other +='📣农场视频双倍离线奖励\n'
        other +="无离线产量可领取\n"
           }
          resolve()
    })
   })
  }  


//睡觉状态
function sleepstatus() {
return new Promise((resolve, reject) => {
  let sleepstatusurl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/sleep/status/?_request_from=web&${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.get(sleepstatusurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs)$.log(data)
      if(result.err_no == 0) {
          other +='📣查询睡觉状态\n🎉查询'+result.err_tips+'\n'
           }
      if(result.data.sleeping == false){
          other +='当前状态:清醒着呢\n'
        if(hour >= 20||hour<=2){
           collect=0 //await sleepstart()
           }else{
if(result.data.history_amount!==0){ 
//即使没有满足3600也在睡觉12小时后停止，以防封号
         coins=result.data.history_amount
         collect =3 //collect coins
          }else{
         collect=2
}
}}
          else{
         other  +='当前状态:酣睡中,已睡'+parseInt(result.data.sleep_last_time/3600)+'小时'+parseInt((result.data.sleep_last_time%3600)/60)+'分钟'+parseInt((result.data.sleep_last_time%3600)%60)+'秒\n'
          other +='预计可得金币'+result.data.sleep_unexchanged_score+'\n'
          coins=result.data.sleep_unexchanged_score
         if(result.data.sleep_unexchanged_score == 3600 || parseInt(result.data.sleep_last_time/3600) >= 12){ 
//即使没有满足3600也在睡觉12小时后停止，以防封号
         collect =1 //collect coins&sleepstop
          }else{
         collect =2
}
   
     }
          resolve()
    })
   })
  } 
//开始睡觉
function sleepstart() {
return new Promise((resolve, reject) => {
  let sleepstarturl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/sleep/start/?_request_from=web&${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(sleepstarturl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
      if(result.err_no == 0) {
          other +='📣开始睡觉\n该睡觉了，开始睡觉'+result.err_tips+'\n'
  
}     else if(result.err_no == 1052){
          other +='📣开始睡觉\n'+result.err_tips+'\n'
           }else{
          other += '📣开始睡觉:'+'⚠️异常'
}
          resolve()
    })
   })
  } 
//停止睡觉
function sleepstop() {
return new Promise((resolve, reject) => {
  let sleepstopurl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/sleep/stop/?_request_from=web&${signurl}`,
    headers :JSON.parse(signkey),
      timeout: 60000,
}

   $.post(sleepstopurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
      if(result.err_no == 0) {
          other +='📣停止睡觉\n'+result.err_tips+'\n'
          
}     else if(result.err_no == 1052){
          other += '📣停止睡觉\n'+'还没开始睡觉\n'
           }else{
          other +='📣停止睡觉:'+'\n⚠️异常'
}
          resolve()
    })
   })
  } 
//收取睡觉金币
function collectcoins(coins) {
return new Promise((resolve, reject) => {
  let collectcoinsurl ={
    url: `https://api3-normal-c-lq.snssdk.com/luckycat/lite/v1/sleep/done_task/?_request_from=web&device_platform=undefined&${signurl}`,
    headers :JSON.parse(farmkey),
      timeout: 60000,
    body :JSON.stringify({score_amount: coins}),

}

   $.post(collectcoinsurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs)$.log(data)
      if(result.err_no == 0) {
          other +='📣收取金币\n'+result.err_tips+'     获得金币:'+coins
          
}     else{
          other +='📣收取金币:'+'\n⚠️异常:'+result.err_tips+''
}
          resolve()
    })
   })
  } 
var Time = new Date(new Date().getTime() + 8 * 60 * 60 * 1000);
async function showmsg(){
if(tz==1){
    if ($.isNode()&& (Time.getHours() == 12 && Time.getMinutes() <= 20) || (Time.getHours() == 23 && Time.getMinutes() >= 40)) {
       await notify.sendNotify($.name,other)
     }else{
       $.msg(jsname,'',other)
}
   }else{
       $.log(jsname,'',other)
}

}
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}