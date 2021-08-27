/**
 * Created by Team HCL.
 * Copyright (c) 2021 HCL  All rights reserved.
 */
technohub = {};
technohub.charts = technohub.charts || {};

technohub.charts.lineChart = function() {

};
/*
technohub.charts.lineChart.prototype.createClass = function(name, rules){
  var style = document.createElement('style');
  style.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(style);
  if(!(style.sheet||{}).insertRule) 
    (style.styleSheet || style.sheet).addRule(name, rules);
  else
    style.sheet.insertRule(name+"{"+rules+"}",0);
};

technohub.charts.lineChart.prototype.drawLineChart = function(title, labelNames, seriesSet1,seriesSet2,seriesSet3,seriesSet4, properties) {
  var chart = new Chartist.Line('.ct-chart', {	
    labels: labelNames,
    series1: seriesSet1,
    series2: seriesSet2,
    series3: seriesSet3,
    series4: seriesSet4
  }, {
    low: parseFloat(properties._lowValue),
    high: parseFloat(properties._highValue),
    fullWidth: true,
    chartPadding: {
      right: 40,
    },
    plugins: [
      Chartist.plugins.ctAxisTitle({
        axisX: {
          axisTitle: properties._xAxisTitle,
          axisClass: 'ct-axis-title',
          offset: {
            x: 0,
            y: 35
          },
          textAnchor: 'middle'
        },
        axisY: {
          axisTitle: properties._yAxisTitle,
          axisClass: 'ct-axis-title',
          offset: {
            x: 0,
            y: 13.5
          },
          textAnchor: 'middle',
          flipTitle: true
        }
      })
    ]
  });

  if(properties._lineColor !== "" && properties._lineColor !== null) {
    this.createClass('.ct-series-a .ct-line', "stroke: " + properties._lineColor);
    this.createClass('.ct-series-a .ct-point', "stroke: " + properties._lineColor);
  }

  document.getElementById("lblTitle").style.color = properties._titleFontColor || '#000000';
  document.getElementById("lblTitle").style.fontSize = properties._titleFontSize !== undefined ? (parseInt(properties._titleFontSize)*10) + '%' : '120%';
  document.getElementById("lblTitle").style.fontFamily = 'Arial, Helvetica, sans-serif';
  document.getElementById("lblTitle").innerHTML = title;
  document.body.style.backgroundColor = properties._bgColor;

  var seq = 0, delays = 80, durations = 500;

  chart.on('created', function() {
    seq = 0;
  });

  chart.on('draw', function(data) {
    if(properties._enableGrid !== true && data.type === 'grid' && data.index !== 0) {
      data.element.remove();
    } 
    if(!properties._enableChartAnimation){
      return;
    }
    if(properties._enableGrid && properties._enableGridAnimation === true) {
      seq++;
    }
    if(data.type === 'line') {
      data.element.animate({
        opacity: {begin: seq * delays + 10,
                  dur: durations,
                  from: 0,
                  to: 1
                 }
      });
    }
    else if(data.type === 'label' && data.axis === 'x') {
      data.element.animate({
        y: {
          begin: seq * delays,
          dur: durations,
          from: data.y + 100,
          to: data.y,
          easing: 'easeOutQuart'
        }
      });
    } 
    else if(data.type === 'label' && data.axis === 'y') {
      data.element.animate({
        x: {
          begin: seq * delays,
          dur: durations,
          from: data.x - 100,
          to: data.x,
          easing: 'easeOutQuart'
        }
      });
    } 
    else if(data.type === 'point') {
      data.element.animate({
        x1: {
          begin: seq * delays,
          dur: durations,
          from: data.x - 10,
          to: data.x,
          easing: 'easeOutQuart'
        },
        x2: {
          begin: seq * delays,
          dur: durations,
          from: data.x - 10,
          to: data.x,
          easing: 'easeOutQuart'
        },
        opacity: {
          begin: seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: 'easeOutQuart'
        }
      });
    } 
    else if(properties._enableGrid===true && properties._enableGridAnimation === true && data.type === 'grid') {
      var pos1Animation = {
        begin: seq * delays,
        dur: durations,
        from: data[data.axis.units.pos + '1'] - 30,
        to: data[data.axis.units.pos + '1'],
        easing: 'easeOutQuart'
      };
      var pos2Animation = {
        begin: seq * delays,
        dur: durations,
        from: data[data.axis.units.pos + '2'] - 100,
        to: data[data.axis.units.pos + '2'],
        easing: 'easeOutQuart'
      };
      var animations = {};
      animations[data.axis.units.pos + '1'] = pos1Animation;
      animations[data.axis.units.pos + '2'] = pos2Animation;
      animations['opacity'] = {
        begin: seq * delays,
        dur: durations,
        from: 0,
        to: 1,
        easing: 'easeOutQuart'
      };
      data.element.animate(animations);
    }
  });

  chart.on('created', function() {
    if(window.__exampleAnimateTimeout) {
      clearTimeout(window.__exampleAnimateTimeout);
      window.__exampleAnimateTimeout = null;
    } 	
  });
};

var drawCanvasChart =  function(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return true;
  }
  var dataSet = [
    {lblName: 'Feb', dataVal: 25934, dataVal2:38239, dataVal3:73888, dataVal4:12345},
    {lblName: 'Mar', dataVal: 25934, dataVal2:38239, dataVal3:73888, dataVal4:12345},
    {lblName: 'Apl', dataVal: 25934, dataVal2:38239, dataVal3:73888, dataVal4:12345},
    {lblName: 'May', dataVal: 25934, dataVal2:38239, dataVal3:73888, dataVal4:12345 },
    {lblName: 'Jun', dataVal: 25934, dataVal2:38239, dataVal3:73888, dataVal4:12345},
    {lblName: 'Jul', dataVal: 25934, dataVal2:38239, dataVal3:73888, dataVal4:12345},
    {lblName: 'Aug', dataVal: 25934, dataVal2:38239, dataVal3:73888, dataVal4:12345}
  ];

  var lineData = [
    {lineName: 'Offshore',lineColor:'#4CAF50'},
    {lineName: 'Onsite',lineColor:'#2196f3'},
    {lineName: 'Off-On',lineColor:'#F4B183'},
    {lineName: 'Nearshore',lineColor:'#E1C233'}
  ];
  var lineName,lineColor;
  lineName = lineData.map(function(obj) {
    return obj.lineName;
  });
  lineColor = dataSet.map(function(obj) {
    return obj.lineColor;
  });
  var labels, series1,series2,series3,series4;
  labels = dataSet.map(function(obj) {
    return obj.lblName;
  });
  series1 = dataSet.map(function(obj) {
    return Number(obj.dataVal);
  });
  series2 = dataSet.map(function(obj) {
    return Number(obj.dataVal2);
  });
  series3 = dataSet.map(function(obj) {
    return Number(obj.dataVal3);
  });
  series4 = dataSet.map(function(obj) {
    return Number(obj.dataVal4);
  });
  var prop = {
    _lineColor: '#1B9ED9',
    _xAxisTitle: 'data', 
    _yAxisTitle: 'value', 
    _titleFontColor: '#000000',
    _titleFontSize: "15",
    _bgColor: '#1c214e',
    _enableGrid: true,
    _enableGridAnimation: true,
    _enableChartAnimation: true,
    _lowValue: "0",
    _highValue: "15",
    _enableStaticPreview: true
  };
  var x = new technohub.charts.lineChart();
  x.drawLineChart('Line Chart', labels, series1,series2,series3,series4,prop);
};*/

technohub.charts.lineChart.prototype.drawLineChart = function(){
  alert("Please send valid data to Chart");
};
window.addEventListener("DOMContentLoaded", function() {
  setTimeout(onbodyload, 0);
}.bind(this), false);
onbodyload = function(){
  if(typeof kony !== "undefined") {
//     kony.evaluateJavaScriptInNativeContext("chart_lineChart_defined_global('ready')");
  } else {
    drawCanvasChart();
  }
}.bind(this);
