/*
 * 使用fis3建构项目配置
 * @author: xjshuang
 */


var appName = "AngularProject",
    deployDirectory = 'deployed',
    deployGlobPatternSet = '!{js/bower_components/**,*.md}';
fis.util.mkdir(deployDirectory);


// 源码排除设置
fis.config.set('project.ignore', [
    //'framework/js/base/**',
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
    // es6
    //.match('app/js/*.js', {
    //    parser: fis.plugin('es6-babel'),
    //    rExt: '.js'
    //})
    // 静态资源优化插件
    //.match('*.js', {
    //    // fis-optimizer-uglify-js 插件进行压缩，已内置
    //    optimizer: fis.plugin('uglify-js')
    //})
    //.match('{*.less,*.css}', {
    //    // fis-optimizer-clean-css 插件进行压缩，已内置
    //    optimizer: fis.plugin('clean-css')
    //})
    //.match('*.png', {
    //    // fis-optimizer-png-compressor 插件进行压缩，已内置
    //    optimizer: fis.plugin('png-compressor', {
    //        type: 'pngquant' //default is pngcrush
    //    })
    //})
    // 配置相对路径的插件，调整所有静态资源引用为相对路径引用
    .hook('relative')
    .match('**', {
        relative: true
    })
    //.match('/*.html', {
    //    relative: '/'+ appName // 调整为基于页面地址的相对路径
    //})
    .match('*.js', {
        relative: '/' + appName // 调整为基于页面地址的相对路径
    })
    //// 为了保持对外访问入口页面url不变，即排除入口html页面的md5后缀设置
    //.match('**', {
    //    useHash: true
    //})
    //.match('*.html', {
    //    useHash: false
    //})
    //.match('*.jpg', {
    //    useHash: false
    //})
    //.match('*.png', {
    //    useHash: false
    //})
    //.match('*.gif', {
    //    useHash: false
    //})
    //.match('*.json', {
    //    useHash: false
    //});
    // 为了保持对外访问h5项目入口页面url不变，即排除入口html页面的md5后缀设置
    //.match('**', {
    //    useHash: true
    //})
    //.match('/{doc*.html,index.html,preload/preload.html,*.zip,*.json}', {
    //    useHash: false
    //})




// 配置本地部署目录
fis.match(deployGlobPatternSet, {
    deploy: fis.plugin('local-deliver', {
        to: deployDirectory
    })
});





