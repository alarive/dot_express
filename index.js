var dot = require('dot');
var path = require('path');

exports.__express = function(viewPath, options, fn) {
  var viewDir = path.dirname(viewPath);
  var viewName = path.basename(viewPath).replace(path.extname(viewPath), '');
  var dots = dot.process({path: viewDir});
  options = options || {};
  options.templates = dots;
  var res = dots[viewName](options);
  try {
    fn(null, res);
  } catch (err) {
    fn(err);
  }
};
