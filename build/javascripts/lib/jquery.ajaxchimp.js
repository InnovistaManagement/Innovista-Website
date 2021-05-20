/*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi

Use:
===
$('#form_id').ajaxchimp(options);

- Form should have one <input> element with attribute 'type=email'
- Form should have one label element with attribute 'for=email_input_id' (used to display error/success message)
- All options are optional.

Options:
=======
options = {
    language: 'en',
    callback: callbackFunction,
    url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f'
}

Notes:
=====
To get the mailchimp JSONP url (undocumented), change 'post?' to 'post-json?' and add '&c=?' to the end.
For e.g. 'http://blahblah.us1.list-manage.com/subscribe/post-json?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh99f&c=?',
*/
!function(u){"use strict";u.ajaxChimp={responses:{"We have sent you a confirmation email":0,"Please enter a value":1,"An email address must contain a single @":2,"The domain portion of the email address is invalid (the portion after the @: )":3,"The username portion of the email address is invalid (the portion before the @: )":4,"This email address looks fake or invalid. Please enter a real email address":5},translations:{en:null},init:function(a,e){u(a).ajaxChimp(e)}},u.fn.ajaxChimp=function(s){return u(this).each(function(a,e){var t=u(e),r=t.find("input[type=email]"),l=t.find("label[for="+r.attr("id")+"]"),o=u.extend({url:t.attr("action"),language:"en"},s),m=o.url.replace("/post?","/post-json?").concat("&c=?");t.attr("novalidate","true"),r.attr("name","EMAIL"),t.submit(function(){function a(a){if("success"===a.result)n="We have sent you a confirmation email",l.removeClass("error").addClass("valid"),r.removeClass("error").addClass("valid");else{r.removeClass("valid").addClass("error"),l.removeClass("valid").addClass("error");try{var e=a.msg.split(" - ",2);if(e[1]===undefined)n=a.msg;else parseInt(e[0],10).toString()===e[0]?(e[0],n=e[1]):(-1,n=a.msg)}catch(s){-1,n=a.msg}}"en"!==o.language&&u.ajaxChimp.responses[n]!==undefined&&u.ajaxChimp.translations&&u.ajaxChimp.translations[o.language]&&u.ajaxChimp.translations[o.language][u.ajaxChimp.responses[n]]&&(n=u.ajaxChimp.translations[o.language][u.ajaxChimp.responses[n]]),l.html(n),l.show(2e3),o.callback&&o.callback(a)}var n,s={},e=t.serializeArray();u.each(e,function(a,e){s[e.name]=e.value}),u.ajax({url:m,data:s,success:a,dataType:"jsonp",error:function(a,e){console.log("mailchimp ajax submit error: "+e)}});var i="Submitting...";return"en"!==o.language&&u.ajaxChimp.translations&&u.ajaxChimp.translations[o.language]&&u.ajaxChimp.translations[o.language].submit&&(i=u.ajaxChimp.translations[o.language].submit),l.html(i).show(2e3),!1})}),this}}(jQuery);