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
        'football', 'football/score', 'football/live', 'football/news', 'football/results', 'football/today','football/leagues',
        'basketball', 'basketball/score', 'basketball/live', 'basketball/results', 'basketball/today','basketball/nba', 'basketball/nbaChart', 'basketball/nbaToday', 'basketball/nbaTeam', 'basketball/nbaPlayer',
        'esports', 'esports/score', 'esports/results', 'esports/today',
    ];

    for (let i = 0; i < 99; i++) {
        routerList.push(`football/news/list=${i}`)
    }

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
    hdSel(0,0);
     mainInclude('page/football/live.html');
});
Router.route('/football/score', function() {
    hdSel(0,0);
    mainInclude('page/football/live.html');
});
Router.route('/football/live', function() {
    hdSel(0,0);
    mainInclude('page/football/live.html');
});

Router.route('/football/results', function() {
    hdSel(0,0);
    mainInclude('page/football/results.html');
});
Router.route('/football/today', function() {
    hdSel(0,0);
    mainInclude('page/football/today.html');
});

Router.route('/football/news', function() {
    hdSel(0,1);
    mainInclude('page/football/news.html');
});

Router.route('/football/leagues', function() {
    hdSel(0,2);
    mainInclude('page/football/leagues.html');
});


for (let i = 0; i < 99; i++) {
    Router.route(`/football/news/list=${i}`, function() {
        hdSel(0,1);
        localStorage.setItem('newsContent',i)
        vue_index.ckBank = false; 
        mainInclude(`page/football/newsContent.html`);
    });
}

// ======= 籃球 =======
Router.route('/basketball', function() {
    hdSel(1,0);
    mainInclude('page/basketball/live.html');
});

Router.route('/basketball/score', function() {
    hdSel(1,0);
    mainInclude('page/basketball/live.html');
});

Router.route('/basketball/live', function() {
    hdSel(1,0);
    mainInclude('page/basketball/live.html');
});

Router.route('/basketball/results', function() {
    hdSel(1,0);
    mainInclude('page/basketball/results.html');
});

Router.route('/basketball/today', function() {
    hdSel(1,0);
    mainInclude('page/basketball/today.html');
});


Router.route('/basketball/nba', function() {
    hdSel(1,1);
    mainInclude('page/basketball/nbaChart.html');
});

Router.route('/basketball/nbaChart', function() {
     hdSel(1,1);
    localStorage.setItem('secondSort', '0');
    mainInclude('page/basketball/nbaChart.html');
});

Router.route('/basketball/nbaToday', function() {
     hdSel(1,1);
    mainInclude('page/basketball/nbaToday.html');
});

Router.route('/basketball/nbaTeam', function() {
     hdSel(1,1);
    mainInclude('page/basketball/nbaTeam.html');
});

Router.route('/basketball/nbaPlayer', function() {
     hdSel(1,1);
     mainInclude('page/basketball/nbaPlayer.html');
});

// ======= 電競 =======
Router.route('/esports', function() {
    hdSel(2,0);
    mainInclude('page/esports/score.html');
});
Router.route('/esports/score', function() {
    hdSel(2,0);
    mainInclude('page/esports/score.html');
});

Router.route('/esports/results', function() {
    hdSel(2,0);
    mainInclude('page/esports/results.html');
});

Router.route('/esports/today', function() {
    hdSel(2,0);
    mainInclude('page/esports/today.html');
});


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

// 主要選擇項目
function hdSel(check,main) {
    vue_index.ckBank = true; 
    vue_index.hd_checkIndex = check;
    vue_index.hd_checked = false;
    vue_index.mainIndex = main;
    vue_index.goTop();
}