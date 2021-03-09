(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module'"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){"use strict";

function _typeof(obj) {"@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;}; } else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;}; } return _typeof(obj); }

function getDateFormat(lang) {if (typeof lang === 'string') {if (lang.startsWith('zh')) {return 'YYYY 年 MM 月 DD 日 ddd A h:mm:ss';} else {return 'dddd, Do MMM. YYYY, h:mm:ss A';}
  }

  return '';
}

function fillBrand(data) {var brand = document.querySelector('#brand');
  var name = document.querySelector('#name');
  var position = document.querySelector('#position');
  var date = document.querySelector('#date');
  var email = document.querySelector('#email');
  var phone = document.querySelector('#phone');
  var address = document.querySelector('#address');
  var www = document.querySelector('#www');
  var linkedin = document.querySelector('#linkedin');
  var github = document.querySelector('#github');
  var body = document.querySelector('#body');
  var signal = document.querySelector('#signal');
  data.name && (name.innerHTML = data.name);
  data.email && (email.innerHTML = data.email);
  data.phone && (phone.innerHTML = data.phone);
  data.address && (address.innerHTML = data.address);

  if (data.www) {var a = document.createElement('a');
    a.target = '_blank';
    a.innerText = a.href = data.www;
    www.appendChild(a);
  }

  if (data.linkedin) {var a = document.createElement('a');
    a.target = '_blank';
    a.innerText = a.href = data.linkedin;
    linkedin.appendChild(a);
  }

  if (data.github) {var a = document.createElement('a');
    a.target = '_blank';
    a.innerText = a.href = data.github;
    github.appendChild(a);
  }

  brand.querySelectorAll('[data-icon]').forEach(function (icon) {var i = document.createElement('i');
    i.className = icon.getAttribute('data-icon');
    icon.appendChild(i);
  });
  var lang = document.querySelector('html').lang;
  var dateFormat = getDateFormat(lang);
  moment.locale(lang);
  date.innerHTML = moment().format(dateFormat);
  window.setInterval(function () {date.innerHTML = moment().format(dateFormat);
  }, 1000);

  if (data.position && data.position.length) {var select = document.createElement('select');

    select.onchange = function (e) {
      getCL({
        url: this.value,
        success: function success(text) {
          body.contentEditable = true;
          body.innerHTML = marked(text);
          body.style.display = 'inherit';
          signal.style.display = 'inherit';
        }
      });
    };

    position.appendChild(select);
    data.position.forEach(function (pos, i) {if (i === 0) {var placeholder = document.createElement('option');
        placeholder.text = position.getAttribute('data-placeholder');
        placeholder.disabled = true;
        placeholder.selected = true;
        select.appendChild(placeholder);
      }

      var option = document.createElement('option');
      option.value = pos.file;
      option.text = pos.name;
      select.appendChild(option);
    });

    signal.onclick = function () {
      var step = 2;
      var accelerate = 2;
      var current = window.scrollY;
      var ani = requestAnimationFrame(function fn() {if (window.scrollY < body.offsetTop - accelerate) {
          current = current + step;
          step = step + accelerate;
          accelerate = accelerate * 1.2;
          window.scrollTo(0, current);
          ani = requestAnimationFrame(fn);
        } else {window.scrollTo(0, body.offsetTop);
          cancelAnimationFrame(ani);
        }
      });
    };
  }
}

function generate(data) {if (_typeof(data) === 'object') {fillBrand(data);
  }
}

function getCL(options) {if (!options.url) return;
  var request = new XMLHttpRequest();
  request.open('get', options.url);
  request.responseType = 'text';
  request.addEventListener('readystatechange', function () {if (request.readyState === 4 && request.status === 200 && request.response) {options.success && options.success(request.response);
    }
  });
  request.send();}

function getJSON(options) {if (!options.url) return;
  var request = new XMLHttpRequest();
  request.open('get', options.url);
  request.responseType = 'json';
  request.addEventListener('readystatechange', function () {if (request.readyState === 4 && request.status === 200 && request.response) {options.success && options.success(request.response);
    }
  });
  request.send();}

getJSON({
  url: 'data.json',
  success: generate
});

},{}]},{},[1]);
