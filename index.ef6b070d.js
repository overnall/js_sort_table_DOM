for(var t=document.querySelectorAll("td"),e={},n=0,r=0;r<t.length/4;r++)(function(n,r,a){e[n]=[];for(var o=r;o<a;o++)e[n].push(t[o])})(r,n,n+4),n+=4;function a(n){var r=[];for(var a in e)r.push(e[a]);r.sort(function(t,e){var r=t[n].textContent,a=e[n].textContent;return(3===n&&(r=parseFloat(r.replace(/[^0-9.-]+/g,""))||0,a=parseFloat(a.replace(/[^0-9.-]+/g,""))||0),r<a)?-1:r>a?1:0});var o=t[0].parentElement.parentElement;o.innerHTML="",r.forEach(function(t){var e=document.createElement("tr");t.forEach(function(t){return e.appendChild(t)}),o.appendChild(e)})}document.addEventListener("click",function(t){"Name"===t.target.textContent?a(0):"Position"===t.target.textContent?a(1):"Age"===t.target.textContent?a(2):"Salary"===t.target.textContent&&a(3)});
//# sourceMappingURL=index.ef6b070d.js.map
