



var graph_options = {
				fontName : 'BentonSans',
				focusBorderColor: 'none',
				isStacked:true,
				allowHTML: true,
				bar:{groupWidth: '24', strokeWidth:0},
				vAxis: {minValue:0, maxValue:3500, format: '$', textStyle: {fontSize: 11, color: '#000000', fontName: 'BentonSans'},  gridlines:{color: '#7e8083', count: 8 }, format:'$#,###',  textPosition:'in', strokeWidth:0/*, viewWindowMode:'maximized'*/},
				hAxis: { textStyle: {fontSize: 11, color: '#000000', fontName: 'BentonSans'}},
				tooltip: { textStyle: {fontSize: 11, color: '#000000', fontName: 'BentonSans'},  format:'$#,###'},
				chartArea:{left:0, top:20, width:300, height:300  },
				legend: {right: 0, width:"260",  textStyle: {fontSize: 11, color: '#000000', fontName: 'BentonSans'}, alignment: 'end'},

				animation:{
					duration: 1000,
					easing: 'out'
				},
				colors:['#b60150','#b0bb1d','#fbb03f','#008bb0'],
				enableInteractivity:true,
				height:350

			};


var formatter = new google.visualization.NumberFormat({pattern:'$#,###'});



if($(window).width() < 600){
var graph_options = {
				fontName : 'BentonSans',
				focusBorderColor: 'none',
				isStacked:true,
				allowHTML: true,
				bar:{groupWidth: '24', strokeWidth:0},
				vAxis: {minValue:0, maxValue:3500, format: '$', textStyle: {fontSize: 11, color: '#000000', fontName: 'BentonSans'},  gridlines:{color: '#7e8083', count: 8 }, format:'$#,###',  textPosition:'in', strokeWidth:0/*, viewWindowMode:'maximized'*/},
				hAxis: { textStyle: {fontSize: 11, color: '#000000', fontName: 'BentonSans'}},
				tooltip: { textStyle: {fontSize: 11, color: '#000000', fontName: 'BentonSans'}},
				chartArea:{left:0, top:20, width:300, height:300  },
				legend: {right: 0, width:300,  textStyle: {fontSize: 11, color: '#000000', fontName: 'BentonSans'}, alignment: 'end'},

				animation:{
					duration: 1000,
					easing: 'out'
				},
				colors:['#b60150','#b0bb1d','#fbb03f','#008bb0'],
				enableInteractivity:true,
				height:380,
				legend: 'bottom'

			};
}







 var chart = new google.visualization.ColumnChart(document.getElementById('visualization'));

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'x');
    data.addColumn('number', 'Endo Pharmaceuticals');
    data.addColumn('number', 'Qualitest (includes legacy Endo generic products)');
	data.addColumn('number', 'HealthTronics');
	data.addColumn('number', 'American Medical Systems');
    data.addRow(['', 0, 0, 0, 0]);
	data.addRow(['2008', 1168, 92, 0, 0 ]);
    data.addRow(['2009', 1336, 125, 0, 0]);
	data.addRow(['2010', 1468, 147, 102, 0]);
	data.addRow(['2011', 1658, 567, 205, 300]);
	data.addRow(['2012', 1678, 633, 212, 504]);

    function drawChart() {

  formatter.format(data, 1);
  formatter.format(data, 2);
  formatter.format(data, 3);
  formatter.format(data, 4);

      chart.draw(data, graph_options);
    }
	function animationOne() {

		var graph_options_fast = {
				fontName : 'BentonSans',
				focusBorderColor: 'none',
				isStacked:true,
				allowHTML: true,
				bar:{groupWidth: '24', strokeWidth:0},
				vAxis: {minValue:0, maxValue:3500, format: '$', textStyle: {fontSize: 11, color: '#000000', fontName: 'BentonSans'},  gridlines:{color: '#7e8083', count: 8 }, format:'$#,###',  textPosition:'in', strokeWidth:0/*, viewWindowMode:'maximized'*/},
				hAxis: { textStyle: {fontSize: 11, color: '#000000', fontName: 'BentonSans'}},
				tooltip: { textStyle: {fontSize: 11, color: '#000000', fontName: 'BentonSans'}},
				chartArea:{left:0, top:20, width:300, height:300  },
				legend: {right: 0, width:"260",  textStyle: {fontSize: 11, color: '#000000', fontName: 'BentonSans'}, alignment: 'end'},

				animation:{
					duration: 00,
					easing: 'out'
				},
				colors:['#b60150','#b0bb1d','#fbb03f','#008bb0'],
				enableInteractivity:true,
				height:350


			};

		data.setCell(0, 1, 0);
		data.setCell(1, 1, 0);
		data.setCell(2, 1, 0);
		data.setCell(3, 1, 0);
		data.setCell(4, 1, 0);
		data.setCell(5, 1, 0);

		data.setCell(0, 2, 0);
		data.setCell(1, 2, 0);
		data.setCell(2, 2, 0);
		data.setCell(3, 2, 0);
		data.setCell(4, 2, 0);
		data.setCell(5, 2, 0);

		data.setCell(0, 3, 0);
		data.setCell(1, 3, 0);
		data.setCell(2, 3, 0);
		data.setCell(3, 3, 0);
		data.setCell(4, 3, 0);
		data.setCell(5, 3, 0);

		data.setCell(0, 4, 0);
		data.setCell(1, 4, 0);
		data.setCell(2, 4, 0);
		data.setCell(3, 4, 0);
		data.setCell(4, 4, 0);
		data.setCell(5, 4, 0);

	    formatter.format(data, 1);
  formatter.format(data, 2);
  formatter.format(data, 3);
  formatter.format(data, 4);

	    chart.draw(data, graph_options_fast);
		timeoutID = window.setTimeout(animationTwo, 600);



    }
    function animationTwo() {
		data.setCell(0, 1, 0);
		data.setCell(1, 1, 1168);
		data.setCell(2, 1, 1336);
		data.setCell(3, 1, 1468);
		data.setCell(4, 1, 1658);
		data.setCell(5, 1, 1678);

		data.setCell(0, 2, 0);
		data.setCell(1, 2, 92);
		data.setCell(2, 2, 125);
		data.setCell(3, 2, 147);
		data.setCell(4, 2, 567);
		data.setCell(5, 2, 633);

		data.setCell(0, 3, 0);
		data.setCell(1, 3, 0);
		data.setCell(2, 3, 0);
		data.setCell(3, 3, 102);
		data.setCell(4, 3, 205);
		data.setCell(5, 3, 212);

		data.setCell(0, 4, 0);
		data.setCell(1, 4, 0);
		data.setCell(2, 4, 0);
		data.setCell(3, 4, 0);
		data.setCell(4, 4, 300);
		data.setCell(5, 4, 504);

    formatter.format(data, 1);
  formatter.format(data, 2);
  formatter.format(data, 3);
  formatter.format(data, 4);
	    chart.draw(data, graph_options);
    }

	function animationThree() {

	    drawChart();
    }

	drawChart();














	   	 var $window = $(window);

		 var $graph = $("#visualization");
		 var $tgraph = $graph.offset().top;
		 var $bgraph = $graph.offset().top + $graph.height();
		 var $scrolled = false;
	   $window.scroll(function() {


			if($tgraph > $window.scrollTop() && $bgraph < ($window.scrollTop() + $window.innerHeight()) ){
					if($scrolled == false){    animationOne(); $scrolled = true; }

			}
			else{

			}


	    });
