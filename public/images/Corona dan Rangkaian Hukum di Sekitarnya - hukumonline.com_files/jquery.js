
jQuery.ajaxq=function(queue,options)
{if(typeof document.ajaxq=="undefined")document.ajaxq={q:{},r:null};if(typeof document.ajaxq.q[queue]=="undefined")document.ajaxq.q[queue]=[];if(typeof options!="undefined")
{var optionsCopy={};for(var o in options)optionsCopy[o]=options[o];options=optionsCopy;var originalCompleteCallback=options.complete;options.complete=function(request,status)
{document.ajaxq.q[queue].shift();document.ajaxq.r=null;if(originalCompleteCallback)originalCompleteCallback(request,status);if(document.ajaxq.q[queue].length>0)document.ajaxq.r=jQuery.ajax(document.ajaxq.q[queue][0]);};document.ajaxq.q[queue].push(options);if(document.ajaxq.q[queue].length==1)document.ajaxq.r=jQuery.ajax(options);}
else
{if(document.ajaxq.r)
{document.ajaxq.r.abort();document.ajaxq.r=null;}
document.ajaxq.q[queue]=[];}}