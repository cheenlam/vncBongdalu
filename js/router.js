function Router() {
    this.routes = {};
    this.currentUrl = '';
}

Router.prototype.route = function(path, callback) {
    this.routes[path] = callback || function() {};
    //给不同的hash设置不同的回调函数
};
Router.prototype.refresh = function() {
    // 路由清單
    let routerList = [
        '',
        'football', 'football/score', 'football/live', 'football/news', 'football/results', 'football/today',
        'basketball', 'basketball/score', 'basketball/live', 'basketball/results', 'basketball/today', 'basketball/nba', 'basketball/nbaChart', 'basketball/nbaToday', 'basketball/nbaTeam', 'basketball/nbaPlayer',
        'esports', 'esports/score', 'esports/results', 'esports/today',
    ];

    //获取到相应的hash值
    let index = routerList.indexOf(location.hash.slice(2))
    if (index == -1) {
        this.currentUrl = '/football'
        location.href = "#/football"
    } else {
        this.currentUrl = location.hash.slice(1) || '/football';
    }
    // this.currentUrl = location.hash.slice(1) || '/home'; 
    //如果存在hash值则获取到，否则设置hash值为/
    // console.log(this.currentUrl);
    if (this.currentUrl && this.currentUrl != '/') {
        this.routes[this.currentUrl](); //根据当前的hash值来调用相对应的回调函数
    }

};
Router.prototype.init = function() {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}

//给window对象挂载属性
window.Router = new Router();
window.Router.init();

// 路由呼叫路徑
// ======= 足球 =======
Router.route('/football', function() {
    footballHerf()
    localStorage.setItem('scoreTools', '0');
    setTimeout(function(){
        scoreSocket('page/football/live.html');
    },100) 
});
Router.route('/football/score', function() {
    footballHerf()
    localStorage.setItem('scoreTools', '0');
    setTimeout(function(){
        scoreSocket('page/football/live.html');
    },100) 
});
Router.route('/football/live', function() {
    footballHerf()
    localStorage.setItem('scoreTools', '0');
    setTimeout(function(){
        scoreSocket('page/football/live.html');
    },100) 
});

Router.route('/football/results', function() {
    footballHerf()
    localStorage.setItem('scoreTools', '1');
    setTimeout(function(){
        scoreSocket('page/football/results.html');
    },100) 
});
Router.route('/football/today', function() {
    footballHerf()
    localStorage.setItem('scoreTools', '2');
    setTimeout(function(){
        scoreSocket('page/football/today.html');
    },100) 
});

Router.route('/football/news', function() {
    localStorage.setItem('mainSort', '1');
    mainInclude('page/football.html');
    setTimeout(function(){
        mainSocket('page/football/news.html');
    },100) 
});

function footballHerf() {
    hdSel(0);
    localStorage.setItem('mainSort', '0');
    mainInclude('page/football.html');
    setTimeout(function(){
        mainSocket('page/football/score.html'); 
    },100)
}

// ======= 籃球 =======
Router.route('/basketball', function() {
    basketballHerf()
    localStorage.setItem('scoreTools', '0');
    setTimeout(function(){
        scoreSocket('page/basketball/live.html');
    },100)
});

Router.route('/basketball/score', function() {
    basketballHerf()
    localStorage.setItem('scoreTools', '0');
    setTimeout(function(){
        scoreSocket('page/basketball/live.html');
    },100)
});
Router.route('/basketball/live', function() {
    basketballHerf()
    localStorage.setItem('scoreTools', '0');
    setTimeout(function(){
        scoreSocket('page/basketball/live.html');
    },100)
});

Router.route('/basketball/results', function() {
    basketballHerf()
    localStorage.setItem('scoreTools', '1');
    setTimeout(function(){
        scoreSocket('page/basketball/results.html');
    },100)
});

Router.route('/basketball/today', function() {
    basketballHerf()
    localStorage.setItem('scoreTools', '2');
    setTimeout(function(){
        scoreSocket('page/basketball/today.html');
    },100)
});

function basketballHerf() {
    hdSel(1);
    localStorage.setItem('mainSort', '0');
    mainInclude('page/basketball.html');
    setTimeout(function(){
        mainSocket('page/basketball/score.html'); 
    },100)
}

Router.route('/basketball/nba', function() {
    basketballHerf2();
    localStorage.setItem('scoreTools', '0');
    setTimeout(function(){
        scoreSocket('page/basketball/nbaChart.html');
    },100)
});

Router.route('/basketball/nbaChart', function() {
    basketballHerf2();
    localStorage.setItem('scoreTools', '0');
    setTimeout(function(){
        scoreSocket('page/basketball/nbaChart.html');
    },100)
});

Router.route('/basketball/nbaToday', function() {
    basketballHerf2();
    localStorage.setItem('scoreTools', '1');
    setTimeout(function(){
        scoreSocket('page/basketball/nbaToday.html');
    },100)
});

Router.route('/basketball/nbaTeam', function() {
    basketballHerf2();
    localStorage.setItem('scoreTools', '2');
    setTimeout(function(){
        scoreSocket('page/basketball/nbaTeam.html');
    },100)
});

Router.route('/basketball/nbaPlayer', function() {
    basketballHerf2();
    localStorage.setItem('scoreTools', '3');
    setTimeout(function(){
        scoreSocket('page/basketball/nbaPlayer.html');
    },100)
});

function basketballHerf2() {
    hdSel(1);
    localStorage.setItem('mainSort', '1');
    mainInclude('page/basketball.html');
    setTimeout(function(){
        mainSocket('page/basketball/nba.html');
    },100) 
}


// ======= 電競 =======
Router.route('/esports', function() {
    esportsHerf()
    localStorage.setItem('mainSort', '0');
    setTimeout(function(){
        mainSocket('page/esports/score.html');
    },100) 
});
Router.route('/esports/score', function() {
    esportsHerf()
    localStorage.setItem('mainSort', '0');
    setTimeout(function(){
        mainSocket('page/esports/score.html');
    },100) 
});

Router.route('/esports/results', function() {
    esportsHerf()
    localStorage.setItem('mainSort', '1');
    setTimeout(function(){
        mainSocket('page/esports/results.html');
    },100) 
});

Router.route('/esports/today', function() {
    esportsHerf()
    localStorage.setItem('mainSort', '2');
    setTimeout(function(){
        mainSocket('page/esports/today.html');
    },100)
});

function esportsHerf() {
    hdSel(2);
    localStorage.setItem('scoreTools', '0');
    mainInclude('page/esports.html');
}



// home lottery news broadcast forum resources game

function mainInclude(src) {
    $.ajax({
        url: src,
        success: function(html) {
            $("#content").html(html);
        },
        // 發送前
        beforeSend: function() {

        },
        // 完成
        complete: function() {

        },
        error: function(error) {
            location.href = "#/football"
        }
    });
}

function mainSocket(src) {
    $.ajax({
        url: src,
        success: function(html) {
            $("#mainSocket").html(html);
        }
    });
}

function scoreSocket(src) {
    $.ajax({
        url: src,
        success: function(html) {
            $("#scoreSocket").html(html);
        }
    });
}

// 主要選擇項目
function hdSel(index) {
    $('#hd_checked').removeClass('on');
    let getData = $(`#hd_selList li:eq(${index})`).data('sort');
    let getTxt = $(`#hd_selList li:eq(${index}) .txt`).text();
    $('#hd_checked .icon').removeClass().addClass(`icon ${getData}`)
    $('#hd_checked .txt').text(getTxt)
}