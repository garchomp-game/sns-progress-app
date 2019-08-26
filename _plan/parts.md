### パーツ

日報
    /data {
        int n = 日数の数字が入る
        string club = 部活名が入る
    }
    左<４分の１>に {
        Day ${n}
        ${club} 部
    }
    /const number currentTime = その日の合計時間が入る（２４時になると更新される
    /const number totalTime = 今までの合計時間が入る
    右<４分の３>に {
        Today ${currentTime}  Total ${totalTime}
        ${comment}
    }
    が表示される

日報フォーム
    /props {
        string テキスト = 親から渡ってくるボタンに表示させるテキスト
    }
    フォームグループの中身は {
        input string 部活名
        input number 今日の作業時間
        textarea string 今日やったこと
        button submit ${テキスト}
    }