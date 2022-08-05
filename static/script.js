var coll = document.getElementById("add_drawing_button");
function en(c){var x='charCodeAt',b,e={},f=c.split(""),d=[],a=f[0],g=256;for(b=1;b<f.length;b++)c=f[b],null!=e[a+c]?a+=c:(d.push(1<a.length?e[a]:a[x](0)),e[a+c]=g,g++,a=c);d.push(1<a.length?e[a]:a[x](0));for(b=0;b<d.length;b++)d[b]=String.fromCharCode(d[b]);return d.join("")}

function de(b){var a,e={},d=b.split(""),c=f=d[0],g=[c],h=o=256;for(b=1;b<d.length;b++)a=d[b].charCodeAt(0),a=h>a?d[b]:e[a]?e[a]:f+c,g.push(a),c=a.charAt(0),e[o]=f+c,o++,f=a;return g.join("")}
coll.addEventListener("click", function() {
    var add_info = this.nextElementSibling;
    if (add_info.style.display === "block") {
      add_info.style.display = "none";
    } else {
      add_info.style.display = "block";
    }
  });


var canvases = document.getElementsByTagName('canvas')

for(let c of canvases)
{
	var ctx = c.getContext("2d");
	c.width = c.dataset.width;
	c.height = c.dataset.height;
	var n = ctx.getImageData(0,0,c.dataset.width,c.dataset.height);
	impdata = JSON.parse(c.dataset.data)
	for(let i = 0; i<n.data.length;i+=4)
	{
		if(i in impdata)
		{
			for(let j = 0; j<4;j++)
			{
				n.data[i+j] = impdata[i][j]
			}
		}
	}
	ctx.putImageData(n, 0, 0);
}