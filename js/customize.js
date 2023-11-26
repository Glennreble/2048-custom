var levelSeq = {
  '2': '1',
  '4': '2',
  '8': '3',
  '16': '4',
  '32': 'E',
  '64': 'F',
  '128': 'G',
  '256': 'H',
  '512': 'I',
  '1024': 'J',
  '2048': 'K',
  '4096': 'L',
  '8192': 'M',
  '16384': '14'
};

function goCustom() {
  var query = '/?';
  for (var i = 1; i <= 12; i++) {
    query += 'l' + i + '=';
    query += document.getElementById('level-' + i).value + '&';
  }
  query += 't=' + document.getElementById('site-title').value + '&';
  query += 'd=' + document.getElementById('site-desc').value + '&';
  location.href = query;
}


function getQueryVar(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
}

for (var j = 1; j <= 12; j++) {
  queryVar = getQueryVar('l' + j);
  if (queryVar != null) {
    document.getElementById('level-' + j).value = queryVar;
    levelSeq['' + Math.pow(2, j)] = queryVar;
  }
}

queryVar = getQueryVar('t');
if (queryVar != null)
  document.getElementById('site-title').value = queryVar;
queryVar = getQueryVar('d');
if (queryVar != null)
  document.getElementById('site-desc').value = queryVar;
