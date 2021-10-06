// vendor.js 文本替换
// g = (function() {
//   return this;
// })();

// g = (function() {
//   return typeof global !== 'undefined' ? global : this;
// })();

// 支付宝环境中，每个模块打包后在模块内部global会被强制赋值undefined，可以挂载到$global中
// Component变量只有在项目中通过json配置声明组件后，打包的时候才会声明赋值，否则访问不到
// windows 0.27版本的调试工具与macOS不同，这里需要向前兼容
const banner = `
  if (!global) {
    var globalModule = {};
    try {
      globalModule = require('global');
    }
    catch (e) {
      globalModule = require('core-js').global;
    }
    var Component = Component ? Component : globalModule.AFAppX.WorkerComponent;
    var global = globalModule.AFAppX.$global || {};
  }
`;

function mpvueVendorPlugin(options) {
  this.options = options || {};
}

mpvueVendorPlugin.prototype.apply = function(compiler) {
  const isAlipay = this.options.platform && this.options.platform === 'my';
  if (isAlipay) {
    compiler.plugin("emit", (compilation, callback) => {
      const regExp = /\.js$/;
      const filesName = Object.keys(compilation.assets).filter(name =>
        name.match(regExp)
      );
      filesName.forEach(name => {
        let asset = compilation.assets[name];
        let fileContent = asset.source();
        compilation.assets[name] = {
          source: () => {
            return banner + "\n" + fileContent;
          },
          size: () => {
            return Buffer.byteLength(fileContent, "utf8");
          }
        };
      });
      callback();
    });
  }
  compiler.plugin('compilation', (compilation) => {
    compilation.plugin('additional-chunk-assets', () => {
      const fileName = 'common/vendor.js';
      const asset = compilation.assets[fileName];
      if (asset) {
        let fileContent = asset.source();
        compilation.assets[fileName] = Object.assign(asset, {
          source: () => {
            let from = /g\s=\s\(function\(\)\s\{\r?\n?\s+return\sthis;\r?\n?\s*\}\)\(\)\;/;
            let to = `g = (function() { return typeof global !== 'undefined' ? global : this; })();`
            fileContent = fileContent.replace(from, to)
            return fileContent;
          },
          size: () => {
            return Buffer.byteLength(fileContent, 'utf8');
          },
          sourceAndMap: false
        })
      }
    });
  });
};

module.exports = mpvueVendorPlugin;