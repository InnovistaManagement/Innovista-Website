jQuery(document).ready(function(e){e("#toolbar-administration").length&&e("header#topnav").css("top","80px"),e("#navigation > ul.navigation-menu > li.comets-megamenu > ul").addClass("megamenu"),e("#navigation > ul.navigation-menu > li.comets-megamenu > ul.megamenu > li > ul").removeClass("submenu"),e("#navigation > ul.navigation-menu > li.comets-megamenu > ul.megamenu > li.has-submenu").each(function(){var t="<li><span>"+e(this).find("a").html()+"</span></li>";e(this).children("a").remove(),e(this).children("ul").children("li").length?e(this).children("ul").children("li").first().before(t):e(this).children("ul").html(t)}),e("header .search-form form .form-actions input[type=submit]").after('<i class="ti-search"></i>'),e(".single-product-add .inline-form .form-actions input[type=submit]").after('<i class="ti-bag"></i>'),e(".table.cart-comets.responsive-enabled tbody > tr > td:nth-child(2)").addClass("hidden-xs"),e(".table.cart-comets.responsive-enabled thead > tr > th.image").addClass("hidden-xs"),e(".table.cart-comets.responsive-enabled tbody > tr > td:first-child > input[type=submit]").val(""),e(".table.cart-comets.responsive-enabled tbody > tr > td:first-child > input[type=submit]").after('<i class="ti-close"></i>'),e("#page-checkout-comets #cart-pane table.cart-review").attr("class","table cart"),e(".table.cart-comets").addClass("cart"),e(".comets-product-item").each(function(){var t=e(this).find(".comets-hidden-element").html();e(this).find(".shop-product > .product-thumb > .add-to-cart-views").html(t)}),e(".shop-product .product-overlay form.inline-form input[type=submit]").attr("class","btn btn-color-out btn-sm"),e("img").each(function(){e(this).attr("width")!=undefined&&""!=e(this).attr("width")||(e(this).attr("width",e(this).width()),e(this).attr("height",e(this).height()))})});