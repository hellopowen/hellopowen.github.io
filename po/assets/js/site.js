/* Po-Wen Shih — portfolio v2
   Two enhancements, nothing load-bearing:
   1. header clock — Reading, UK with the current London time
   2. archival position — IntersectionObserver marks the entry in view,
      mirrors it in the index, and keeps a running counter
   With JS off the page is complete: the clock line reads the place name,
   the index is plain anchors, the counter never renders. */

(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* 1 — clock */
  var clock = document.getElementById('clock');
  if (clock) {
    var fmt;
    try {
      fmt = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit', minute: '2-digit', hour12: false,
        timeZone: 'Europe/London', timeZoneName: 'short'
      });
    } catch (e) { fmt = null; }
    var tick = function () {
      if (!fmt) return;
      clock.textContent = 'Reading, UK — ' + fmt.format(new Date());
    };
    tick();
    setInterval(tick, 30000);
  }

  /* 2 — position marker + running counter */
  var entries = Array.prototype.slice.call(document.querySelectorAll('.entry[data-no]'));
  var counter = document.getElementById('viewing');
  if (!entries.length || !('IntersectionObserver' in window)) return;

  var rows = {};
  Array.prototype.forEach.call(document.querySelectorAll('.index a[data-no]'), function (a) {
    rows[a.getAttribute('data-no')] = a;
  });

  var total = entries[entries.length - 1].getAttribute('data-no');
  var current = null;

  function setCurrent(el) {
    if (current === el) return;
    if (current) {
      current.classList.remove('is-view');
      var prev = rows[current.getAttribute('data-no')];
      if (prev) prev.classList.remove('is-view');
    }
    current = el;
    var no = el.getAttribute('data-no');
    el.classList.add('is-view');
    if (rows[no]) rows[no].classList.add('is-view');
    if (counter) {
      counter.textContent = 'viewing ' + no + ' / ' + total;
      counter.classList.add('is-on');
    }
  }

  function clearCurrent() {
    if (!current) return;
    current.classList.remove('is-view');
    var row = rows[current.getAttribute('data-no')];
    if (row) row.classList.remove('is-view');
    current = null;
    if (counter) counter.classList.remove('is-on');
  }

  var io = new IntersectionObserver(function (hits) {
    hits.forEach(function (hit) {
      if (hit.isIntersecting) setCurrent(hit.target);
    });
    /* past the last entry (record, about): retire the counter */
    if (current) {
      var r = current.getBoundingClientRect();
      if (current === entries[entries.length - 1] && r.bottom < 0) clearCurrent();
      if (current === entries[0] && r.top > window.innerHeight) clearCurrent();
    }
  }, { rootMargin: '-30% 0px -55% 0px' });

  entries.forEach(function (el) { io.observe(el); });
})();
