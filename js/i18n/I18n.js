Handlebars.registerHelper('i18n', function(key, opts) {
  if (typeof key == "string") {
    // inline - mode {{i18n 'key'}}
    return new Handlebars.SafeString(I18n.translate(key));
  } else {
    // block - mode {{#i18n}}contents{{/i18n}} 
    return new Handlebars.SafeString(I18n.translate(key.fn(this)));
  }
});

// detect current language

class I18n {
  static initializeCurrentLanguage(messagesBasePath) {
    I18n.translations = {};

    function getCookie(cname) {
      var name = cname + '=';
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    }

    if (getCookie('language') !== '') {
      return $.get(messagesBasePath + '/' + getCookie('language') + "_messages.js", null, null, 'text').then((source) => eval(source));
    } else {
      return new Promise((resolve, reject) => resolve());
    }
  }

  static changeLanguage(languageKey) {
    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function deleteCookie(cname) {
      document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
    }

    if (languageKey === 'default') {
      deleteCookie('language');

    } else {
      setCookie('language', languageKey, 365);
    }
  }

  static translate(key) {
    if (I18n.translations[key]) {
      return I18n.translations[key];
    } else {
      return key;
    }
  }
}
