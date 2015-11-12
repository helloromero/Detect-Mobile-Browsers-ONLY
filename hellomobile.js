// jQuery - mobile only not tablet 

  $(document).ready(function() {

      var a = /iphone/i.test(navigator.userAgent.toLowerCase());
      var b = /android/i.test(navigator.userAgent.toLowerCase());
      var c = /blackberry/i.test(navigator.userAgent.toLowerCase());
      var d = /webos/i.test(navigator.userAgent.toLowerCase());
      var e = /windows phone/i.test(navigator.userAgent.toLowerCase());

      if (a || b || c || d || e) {

          // do something
      }

  });
