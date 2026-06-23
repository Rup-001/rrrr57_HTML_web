(function () {
  'use strict';

  function setDate() {
    var el = document.getElementById('dateText');
    if (!el) return;
    var now = new Date();
    el.textContent = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate();
  }

  function initLogin() {
    var form = document.getElementById('loginForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var username = document.getElementById('username');
      if (!username || !username.value.trim()) {
        alert('الرجاء إدخال اسم المستخدم');
        return;
      }
      window.location.href = 'portal/index.html';
    });
  }

  function initSidebar() {
    var menu = document.getElementById('newmenu');
    if (!menu) return;

    menu.querySelectorAll(':scope > li > a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (link.getAttribute('href') === '#') {
          e.preventDefault();
        }
        var li = link.parentElement;
        var wasOpen = li.classList.contains('open');
        menu.querySelectorAll(':scope > li.open').forEach(function (item) {
          item.classList.remove('open');
        });
        if (!wasOpen) {
          li.classList.add('open');
        }
      });
    });

    var active = menu.querySelector('a.active');
    if (active) {
      var parentLi = active.closest('li');
      while (parentLi && parentLi !== menu) {
        if (parentLi.parentElement === menu) {
          parentLi.classList.add('open');
        }
        parentLi = parentLi.parentElement.closest('li');
      }
    }
  }

  function initMarqueeControls() {
    var marquee = document.getElementById('marqueeNews');
    if (!marquee) return;
    document.querySelectorAll('.upImage').forEach(function (btn) {
      btn.addEventListener('click', function () { marquee.start(); });
    });
    document.querySelectorAll('.downImage').forEach(function (btn) {
      btn.addEventListener('click', function () { marquee.stop(); });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setDate();
    initLogin();
    initSidebar();
    initMarqueeControls();
  });
})();
