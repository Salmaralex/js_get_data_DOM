var e=document.getElementsByClassName("population"),t=document.getElementsByClassName("total-population"),n=document.getElementsByClassName("average-population"),r=0;function o(e){for(var t=e.toString().split("").reverse(),n="",r=0;r<t.length;r++)r>0&&r%3==0&&(n+=","),n+=t[r];return n.split("").reverse().join("")}for(var a=0;a<e.length;a++)r+=parseInt(e[a].textContent.split(",").reduce(function(e,t){return e+t},""));t[0].innerHTML=o(r),n[0].innerHTML=o(r/e.length);
//# sourceMappingURL=index.d6f6bc55.js.map
