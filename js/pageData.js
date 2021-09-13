var selList = [{
        sort: "football",
        txt: "Bóng đá",
        count: 157
    }, {
        sort: "basketball",
        txt: "Bóng rổ",
        count: 40
    }, {
        sort: "esports",
        txt: "Thể thao điện tử",
        count: 70
    }, ]

var sortSel = {
    main: {
        football: [{
            herf: "#/football/score",
            txt: "Tỷ số"
        }, {
            herf: "#/football/news",
            txt: "Nhận định"
        }, {
            herf: "#/football/leagues",
            txt: "Kho dữ liêu"
        }],
        basketball: [{
            herf: "#/basketball/score",
            txt: "Tỷ số"
        }, {
            herf: "#/basketball/nba",
            txt: "NBA"
        }],
        esports: [{
            herf: "#/esports/score",
            txt: "Tỷ số"
        }, {
            herf: "#/esports/results",
            txt: "Kết quả"
        }, {
            herf: "#/esports/today",
            txt: "Lịch thi đấu"
        }]
    },
    second: {
        football: {
            score: [{
                herf: "#/football/live",
                txt: "Trực tuyến"
            }, {
                herf: "#/football/results",
                txt: "Kết quả"
            }, {
                herf: "#/football/today",
                txt: "Lịch thi đấu"
            }],
            news: []
        },
        basketball: {
            score: [{
                herf: "#/basketball/live",
                txt: "Trực tuyến"
            }, {
                herf: "#/basketball/results",
                txt: "Kết quả"
            }, {
                herf: "#/basketball/today",
                txt: "Lịch thi đấu"
            }],
            nba: [{
                herf: "#/basketball/nbaChart",
                txt: "Bảng xếp hạng"
            }, {
                herf: "#/basketball/nbaToday",
                txt: "Lịch thi đấu"
            }, {
                herf: "#/basketball/nbaTeam",
                txt: "Đội bóng"
            }, {
                herf: "#/basketball/nbaPlayer",
                txt: "Cầu thủ"
            }]
        },
        esports: [{
            txt: "Tất cả"
        }, {
            txt: "LOL"
        }, {
            txt: "DOTA2"
        }, {
            txt: "CS:GO"
        }],
    }
}