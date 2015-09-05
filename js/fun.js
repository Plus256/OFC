window.onload=initAll;
function initAll(){
	var y;
	window.onscroll=function(){
		y=window.pageYOffset;
		//console.log(y);
		if(y>=500){
			document.getElementById("banner").style.boxShadow="0 5px 5px rgba(0, 0, 0, 0.2)";
			document.getElementById("banner").style.background="rgba(255, 255, 255, 0.99)";
			document.getElementById("heart").style.fill="#555";
			document.getElementById("letter").style.fill="#555";
			document.getElementById("logo").addEventListener("mouseover", function(){
				document.getElementById("heart").style.fill="#F00";
				document.getElementById("letter").style.fill="#FBAE17";
			}, false);
			document.getElementById("logo").addEventListener("mouseout", function(){
				document.getElementById("heart").style.fill="#555";
				document.getElementById("letter").style.fill="#555";
			}, false);
			var links=document.getElementById("banner").getElementsByTagName("a");
			for(var i=0; i<links.length; i++){
				links[i].style.color="#555";
				links[i].addEventListener("mouseover", function(){
					this.style.borderBottom="3px solid #555";
				});
				links[i].addEventListener("mouseout", function(){
					this.style.borderBottom="none";
				});
			}
			//alert("Add Background");
		}
		else{//less
			//alert("Remove Background");
			document.getElementById("banner").style.boxShadow="none";
			document.getElementById("banner").style.background="none";
			document.getElementById("heart").style.fill="#FFF";
			document.getElementById("letter").style.fill="#FFF";
			document.getElementById("logo").addEventListener("mouseover", function(){
				document.getElementById("heart").style.fill="#F00";
				document.getElementById("letter").style.fill="#FBAE17";
			}, false);
			document.getElementById("logo").addEventListener("mouseout", function(){
				document.getElementById("heart").style.fill="#FFF";
				document.getElementById("letter").style.fill="#FFF";
			}, false);
			var links=document.getElementById("banner").getElementsByTagName("a");
			for(var i=0; i<links.length; i++){
				links[i].style.color="#FFF";
				links[i].addEventListener("mouseover", function(){
					this.style.borderBottom="3px solid #FFF";
				});
				links[i].addEventListener("mouseout", function(){
					this.style.borderBottom="none";
				});
			}
		}
	}
}
