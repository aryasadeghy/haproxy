Tail = require('tail').Tail;
var fileToTail = "/var/log/haproxy.log";

tail = new Tail(fileToTail);
var re = new RegExp('Server (.*) is (.*), reason');

tail.on("line", function(data) {
  var datas  = data.match(re);  if(datas)
    console.log(datas[1]," : ",datas[2]);
});


tail.on("error", function(error) {
  console.log('ERROR: ', error);
});
