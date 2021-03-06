(function(){
	loaded = 0
	total = 0;
    
	function load(url){
		var jq = document.createElement('script');
		jq.src = url;
		jq.onload=function(){
			loaded++;
			if(loaded >= total){
				setTimeout(function(){
					onInjectLoad();
				},100);
			}
		}
		document.getElementsByTagName('head')[0].appendChild(jq);
		total++;
	}
	if(/(http|https):/.test(window.location.protocol)){
		pt = window.location.protocol;
	}else{
		pt = "http:";
	}
	load(pt+"//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js");
	load(pt+"//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js");
	load(pt+"//cdnjs.cloudflare.com/ajax/libs/underscore.string/2.3.3/underscore.string.min.js")
	load(pt+"//cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.7/crossfilter.min.js");
	load(pt+"//cdnjs.cloudflare.com/ajax/libs/moment.js/2.6.0/moment.min.js")
	load(pt+"//cdnjs.cloudflare.com/ajax/libs/numeral.js/1.5.3/numeral.min.js")
	load(pt+"//cdnjs.cloudflare.com/ajax/libs/d3/3.4.11/d3.min.js")
    load(pt+"//cdnjs.cloudflare.com/ajax/libs/async/0.9.0/async.js")

	var onInjectLoad = function(){
		//console.log("onInjectLoad");
		var data  = JSON.parse(document.body.innerText);
		document.body.innerHTML = "<pre>"+JSON.stringify(data,null,"\t")+"</pre>";
		console.dir(data);
	}
})();
