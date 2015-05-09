import listen from 'aum-listen';

var current;

listen('search', function (e) {
  current = e.detail;
});

export default function () {
  return current;
}

