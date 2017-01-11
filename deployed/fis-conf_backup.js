 /*
* 使用fis3建构项目配置
* @author: xjshuang
*/


var appTitle = "appTitle", // 项目标题
    appName = "h5_angularjs/h5angular3", // 项目名，如部署目录为二级时，需要配置二级目录的拼接字符串，如通用绑卡流程：common/bindcard
    isLocalOptimization = false; // 本地性能测试时可打开

var deployDirectory = 'deployed',
    zipPackageName = 'h5-' + appName.replace(/\//g, '-'),
    deployGlobPatternSet = '!{js/bower_components/**,*.md}';
fis.util.mkdir(deployDirectory);

try{
    var envs = require('./config/envs.js'),
        _ = fis.util;
}catch(e){
    return ;
}


/*
 * 配置建构过程排除文件
 */
// 源码包含设置
fis.config.set('project.files', [
    'framework/**',
    'app/views/**.html',
    'doc/views/**.html',
    '/preload/**',
    'favicon.ico',
    '/*.html',
    '/*.json'
]);
// 源码排除设置
fis.config.set('project.ignore', [
    'framework/less/bower_components/**',
    'framework/less/cerulean/**',
    'framework/less/standard_v1.0/**',
    'node_modules/**',
    'app/less/**',
    'doc/less/**',
    '/server/**',
    deployDirectory + '/**'
]);

/*
 * 配置fis插件
 */
// 设置less的编译
// 注： 配置该插件后，本地的sublime可以不用安装lesstocss插件，建议直接编辑less文件，使用less的扩展动态语法
fis.match('**.less', {
        parser: fis.plugin('less'),
        rExt: '.css'
    })
    // 为了保持对外访问h5项目入口页面url不变，即排除入口html页面的md5后缀设置
    .match('**', {
        useHash: true
    })
    .match('preload.js', {
            // fis-optimizer-uglify-js 插件进行压缩，已内置
            optimizer: fis.plugin('uglify-js')
        })
    .match('/{doc*.html,index.html,preload/preload.html,*.zip,*.json}', {
        useHash: false
    })
    // 为HTML中静态资源引用，替换成预加载文件URL
    .match('/{doc*.html,index.html,app/views/**.html,doc/views/**.html}', {
    })
    // 配置预加载页面的发布路径
    .match('/preload/preload.html',{
        release: '/preload.html'
    })
    .match('/preload/closeView.html',{
        release: '/closeView.html',
        useHash: false
    });


// 根据不同环境配置
_.forEach(envs, function(envObject, envName) {
    var isLocalHostEnv = envName == 'localhost',
        isProEnv = envName == 'uat' || envName == 'production';
    var deployPlugins = [];

    // 设置入口页面的文案替换功能
    fis.media(envName)
        .match('{doc*.html,index.html}', {
            'parser': [
                fis.plugin('replace', {
                    rules: [{
                        search: '__TOKEN_APP_TITLE',
                        replace: appTitle
                    }, {
                        search: '__TOKEN_APP_NAME',
                        replace: appName
                    }, {
                        search: '"__DEBUG_MODEL"',
                        replace: envName == "localhost"
                    }, {
                        search: '"__CURR_ENV_API"',
                        replace: JSON.stringify(envObject)
                    }]
                })
            ]
        })

    // 静态资源性能优化配置
    if(!isLocalHostEnv || isLocalOptimization){
        optimization(envName);
    }

    // deploy 配置
    if (isLocalHostEnv) {
        // 配置本地部署目录
        fis.media(envName)
            .match(deployGlobPatternSet, {
                deploy: fis.plugin('local-deliver', {
                    to: deployDirectory
                })
            });
    } else {
        fis.media(envName)
            .match("**", {
                domain: envObject.msApiRoot_https + '/h5/' + appName
            })
            // 配置并打包出zip包
            .match(deployGlobPatternSet, {
                deploy: [
                    fis.plugin('zip', {
                        filename: zipPackageName + ("_" + envName) + '.zip'
                    }),
                    fis.plugin('local-deliver', {
                        to: deployDirectory
                    })
                ]
            })
            // 每次构建时手动更新入口页面文件的‘last-modified’时间，用于清除本地缓存
            .match('/{doc.html,index.html}', {
                postprocessor: function (content, file, settings) {
                    var fs = require("fs");
                    fs.utimes(String(file), new Date(), new Date(), function(err) {})
                }
            });
    }

});

// utilities 
// 静态资源性能优化处理
function optimization(envName) {
    fis.media(envName)
        .match('{*.js,*.html:js}', {
            // fis-optimizer-uglify-js 插件进行压缩，已内置
            optimizer: fis.plugin('uglify-js')
        })
        .match('{*.less,*.css,*.html:css}', {
            // fis-optimizer-clean-css 插件进行压缩，已内置
            optimizer: fis.plugin('clean-css')
        })
        .match('*.png', {
            // fis-optimizer-png-compressor 插件进行压缩，已内置
            optimizer: fis.plugin('png-compressor')
        })
        .match('*.html', {
            // Minify HTML
            optimizer: fis.plugin('htmlmin', {
                minifyJS: true
            })
        });
}

// create glob pattern set
function createGlobPatternSet(arr) {
    return "{" + arr.join(',') + "}";
}
