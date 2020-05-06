chrome.tabs.getSelected(null, function(tab) {
   var url = encodeURIComponent(tab.url);
    $("#url").text(format_url(tab.url));
    var string=tab.url;
    var substring="/ca/";
     document.getElementById("url").style.display="block";
     document.getElementById("url").style.display="none";
      if(string.includes(substring)){
    
   var modified_url = $("#url").attr("value").trim().replace(/\n\n/g, "").replace(/\n/g, "&");
       chrome.tabs.update(tab.id, {"url": modified_url.replace(substring,"/us/")});
   }else{
      $("#url").text("hii");

   }

 });
 
 function format_url(url) {
   return url.replace(/&/g, "\n").replace("?","?\n\n");
 }
 
