<html>
<head>
  <title></title>
</head>
<body>

</body>
<script type="text/my-template" id="list-item"><li><a href="%s">%s</a></li></script>
<script type="text/javascript">
  // function sprintf(text) {
  //   var i = 1, args = arguments;
  //   return text.replace(/%s/g, function() {
  //     return (i < args.length) ? args[i ++] : '';
  //   });
  // }
  // var temp = document.getElementById('list-item').text;
  // var result = sprintf(temp, '/item/4', 'Fourth item');
  // console.log(result);
  var a = 'hehe';
  var fun = function() {
    console.log(this.a);
  }
  var obj = {a : 'yoo'};
  fun.call(obj);
</script>
</html>