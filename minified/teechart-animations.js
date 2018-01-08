/*
 TeeChart(tm) for JavaScript(tm)
 @fileOverview TeeChart for JavaScript(tm)
 v2.2 Jan 2018
 Copyright(c) 2012-2017 by Steema Software SL. All Rights Reserved.
 http://www.steema.com

 Licensed with commercial and non-commercial attributes,
 specifically: http://www.steema.com/licensing/html5

 JavaScript is a trademark of Oracle Corporation.
*/
var Tee=Tee||{};
(function(){"undefined"!==typeof exports&&(exports.Tee=Tee);Tee.FadeAnimation=function(e){Tee.Animation.call(this,e);this.kind="in";var f=this,c;this.fade={};this.setTransp=function(a){"out"==f.kind&&(a=1-a);c.legend&&(f.chart.legend.format.transparency=a);c.walls&&(f.chart.walls.transparency=a);c.series&&f.chart.series.each(function(d){d.format.transparency=a});c.marks&&f.chart.series.each(function(d){d.marks.transparency=a});c.title&&(f.chart.title.format.transparency=a);c.axes&&(f.chart.axes.transparency=
a);c.panel&&(f.chart.panel.format.transparency=a)};this.start=function(){c=this.fade;this.setTransp(1)};this.stop=function(){this.setTransp(0)};this.doStep=function(a){f.setTransp(1-a)}};Tee.FadeAnimation.prototype=new Tee.Animation;Tee.SeriesAnimation=function(e){function f(d,a,c){a.automatic=!1;var b=.5*(d.oldmin+d.oldmax);d=.5*(d.oldmax-d.oldmin);a.maximum=b+c*d;a.minimum=b-c*d}Tee.Animation.call(this,e);e instanceof Tee.Series?(this.series=e,this.chart=e.chart):this.series=null;this.oldmax=this.oldmin=
0;this.oldauto=!0;var c=1,a=this;this.kind="axis";this.getAxis=function(){var a=this.series||this.chart.series.firstVisible();return a?a.mandatoryAxis:null};this.doStep=function(d){var b=a.getAxis();b&&(b.automatic=!1);"axis"==a.kind?f(a,b,1+100*(1-d)):a.chart.series.each(function(b){if(!a.series||a.series===b){var f=b.data.values,e=b.data._old,k=f.length;if(b instanceof Tee.Pie)b.rotation=360*(1-d),c=d;else if("each"==a.kind){var h=k*d|0;for(b=0;b<h;b++)f[b]=e[b];h<k&&(f[h]=e[h]*(k*d-h))}else if("all"==
a.kind)for(b=0;b<k;b++)f[b]=e[b]*d;else"axis"!=a.kind&&(c=d)}})};this.stop=function(){var d=a.getAxis();d&&(d.maximum=a.oldmax,d.minimum=a.oldmin,d.automatic=a.oldauto);a.chart.series.each(function(b){b.transform&&(b.transform=null);"each"!=a.kind&&"all"!=a.kind||!b.data._old||(b.data.values=b.data._old,b.data._old=null)})};this.start=function(){var a=this.getAxis(),b=this.chart,e=b.series.items,m=b.chartRect.width,n=b.chartRect.height,k=b.bounds.width,h=b.bounds.height;if(0===e.length)return!1;this.oldmin=
a.minimum;this.oldmax=a.maximum;this.oldauto=a.automatic;for(b=0;b<e.length;b++){var g=e[b];if(!this.series||this.series===g)if(g instanceof Tee.Pie)g.transform=function(){this.chart.ctx.scale(c,c)};else if("each"==this.kind||"all"==this.kind){var l=g.data.values,p=l.length;g.data._old=l.slice(0);for(g=0;g<p;g++)l[g]=0;a.automatic=!1}else"left"==this.kind?g.transform=function(){this.chart.ctx.translate(-m*(1-c),0)}:"right"==this.kind?g.transform=function(){this.chart.ctx.translate(m*(1-c),0)}:"x"==
this.kind?g.transform=function(){this.chart.ctx.scale(c,1)}:"y"==this.kind?g.transform=function(){this.chart.ctx.scale(1,c)}:"top"==this.kind?g.transform=function(){this.chart.ctx.translate(0,-n*(1-c))}:"bottom"==this.kind?g.transform=function(){this.chart.ctx.translate(0,n*(1-c))}:"zoomin"==this.kind?g.transform=function(){var a=this.chart.ctx;a.translate(.5*k,.5*h);a.scale(c,c);a.translate(.5*-k,.5*-h)}:(this.kind="zoomout",g.transform=function(){var a=this.chart.ctx;a.translate(.5*k,.5*h);a.scale(2-
c,2-c);a.translate(.5*-k,.5*-h)})}"axis"==this.kind&&f(this,a,100)}};Tee.SeriesAnimation.prototype=new Tee.Animation;Tee.MarksAnimation=function(e){function f(b,c,d){return c<=a.current?d:""}Tee.Animation.call(this,e);e&&e instanceof Tee.Series?(this.series=e,this.chart=e.chart):this.series=null;this.current=-1;var c=this.series.marks,a=this,d;this.start=function(){d=c.ongettext;c.ongettext=f};this.stop=function(){c.ongettext=d;this.current=-1};this.doStep=function(b){a.current=a.series.data.values.length*
b|0}};Tee.MarksAnimation.prototype=new Tee.Animation}).call(this);