### パーツ

日報(dairy-report)
    /data {
        int n = 日数の数字が入る
        string club = 部活名が入る
    }
    左<４分の１>に {
        Day ${n}
        ${club} 部
    }
    /const number currentTime = その日の合計時間が入る（２４時になると更新される
    /const string comment = その日の出来事とかのコメント
    右<４分の３>に {
        Today ${currentTime}
        ${comment}
    }
    が表示される

日報フォーム(daily-report-form)
    /props {
        string テキスト = 親から渡ってくるボタンに表示させるテキスト
    }
    フォームグループの中身は {
        input string 部活名
        input number 今日の作業時間
        textarea string 今日やったこと
        button submit ${テキスト}
    }
