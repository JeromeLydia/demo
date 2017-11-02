$(function(){
	var APPCommon = {
		init: function(){
			this.openApp();
		},
		openApp: function(){
			var this_  =  this;
        	if(this_.isWeixin() || this_.isWeibo()){
          		window.location = 'http://www.21golf.com/app/app_download.html';
          	} else {
	          	if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
	          		var loadDateTime = new Date();
	          		window.setTimeout(function() {
	          			var timeOutDateTime = new Date();
	          			if (timeOutDateTime - loadDateTime < 5000) {
	          				window.location = 'http://www.21golf.com/app/app_download.html';
	          			} else {
	          				window.close();
	          			}
	          		},2000);
	          		window.location = 'golf21://playVideo?videoId=223';
	          	} else if (navigator.userAgent.match(/android/i)) {
	          		try {
	          			window.location = 'golf21://playVideo?videoId=223';
	          			setTimeout(function(){
	          				window.location = 'http://www.21golf.com/app/app_download.html';
	          			},500);
	          		} catch(e) {}
	          	}
	        }
	    },
	    // UA鉴定
	    isWeixin: function(){
	      	var ua = navigator.userAgent.toLowerCase();
	      	if (ua.match(/MicroMessenger/i) == "micromessenger") {
	      		return true;
	      	} else {
	      		return false;
	      	}
	    },
	    isWeibo: function(){
	      	var ua = navigator.userAgent.toLowerCase();
	      	if (ua.match(/WeiBo/i) == "weibo") {
	      		return true;
	      	} else {
	      		return false;
	      	}
	    },
	    isAndroid: function() {
	      return navigator.userAgent.match(/Android/i) ? true : false;
	    },
	    isMobileQQ : function(){
	      var ua = navigator.userAgent;
	      return /(iPad|iPhone|iPod).*? (IPad)?QQ\/([\d\.]+)/.test(ua) || /\bV1_AND_SQI?_([\d\.]+)(.*? QQ\/([\d\.]+))?/.test(ua);
	    },
	    isIOS: function() {
	      return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
	    },
	}
	APPCommon.init();
});
