/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
!function(p){p.fn.appear=function(r,e){var h=p.extend({data:undefined,one:!0,accX:0,accY:0},e);return this.each(function(){var l=p(this);if(l.appeared=!1,r){var d=p(window),a=function(){if(l.is(":visible")){var e=d.scrollLeft(),a=d.scrollTop(),r=l.offset(),p=r.left,n=r.top,t=h.accX,c=h.accY,i=l.height(),f=d.height(),o=l.width(),s=d.width();a<=n+i+c&&n<=a+f+c&&e<=p+o+t&&p<=e+s+t?l.appeared||l.trigger("appear",h.data):l.appeared=!1}else l.appeared=!1},e=function(){if(l.appeared=!0,h.one){d.unbind("scroll",a);var e=p.inArray(a,p.fn.appear.checks);0<=e&&p.fn.appear.checks.splice(e,1)}r.apply(this,arguments)};h.one?l.one("appear",h.data,e):l.bind("appear",h.data,e),d.scroll(a),p.fn.appear.checks.push(a),a()}else l.trigger("appear",h.data)})},p.extend(p.fn.appear,{checks:[],timeout:null,checkAll:function(){var e=p.fn.appear.checks.length;if(0<e)for(;e--;)p.fn.appear.checks[e]()},run:function(){p.fn.appear.timeout&&clearTimeout(p.fn.appear.timeout),p.fn.appear.timeout=setTimeout(p.fn.appear.checkAll,20)}}),p.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(e,a){var r=p.fn[a];r&&(p.fn[a]=function(){var e=r.apply(this,arguments);return p.fn.appear.run(),e})})}(jQuery);