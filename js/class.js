
var map = new BMap.Map("myMap");

var point1 = new BMap.Point(120.148798, 30.247222);

map.centerAndZoom(point1, 15);

map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("杭州市"); 

var marker = new BMap.Marker(point1);// 创建标注    
map.addOverlay(marker); 


marker.enableDragging();    
marker.addEventListener("dragend", function(e){    
 alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
})


var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "results"
  }
});
transit.search("杭州师范大学-东南门", "宾馆,西湖");


var opts = {
  width: 300, 
  height: 200,    
}

var school_info=[
  [120.020417, 30.295708,"恕园2号楼",'../img/ex09/1.jpg'],
  [120.015193, 30.296382,"博文苑8号楼",'../img/ex09/2.jpg'],
  [120.017228, 30.293736, "杭州师范大学2号食堂",'../img/ex09/3.jpg'],
  [120.014309, 30.295116,"体育场",'../img/ex09/4.jpg'],
  [120.019127,30.296423,"一鸣真鲜奶吧",'../img/ex09/5.jpg']
];

for(var i = 0;i < school_info.length;i++){
	var point= new BMap.Marker(new BMap.Point(school_info[i][0],school_info[i][1]));
	var address = school_info[i][2];
	map.addOverlay(point);
	var div=document.createElement("div");
	div.style.width='200px';
	div.style.height='160px';
	var img=document.createElement('img');
	img.setAttribute('src',school_info[i][3]);
	img.style.width='200px';
	img.style.height='150px';
	div.append(img);
	div.append(address);
	OnClick(div,point);
}

function OnClick(div,point){
	point.addEventListener("click",function(e){
	var p = e.target;
	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var infoWindow = new BMap.InfoWindow(div,opts);
	map.openInfoWindow(infoWindow,point);
	});
}

