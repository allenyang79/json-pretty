var data  = JSON.parse(document.body.innerHTML);
document.body.innerHTML = "<pre>"+JSON.stringify(data,null,"\t")+"</pre>";