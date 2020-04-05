import cc from 'cky-lunar-calendar'
// Object.defineProperty(Vue.prototype, '$cc', { value: cc });

var CAN = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"]; // 십간 (한자) - Stems (Hanja)
var CHI = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"]; // 십이지 (한자

export default {
    methods: {
        solar2Lunar(y, m, d) {
            var [dd, mm, yyyy, leap] = cc.solar2Lunar(d, m, y, 9);
            return {"year": yyyy, "month": mm, "day": dd, "leap": leap}
        },
        lunar2Solar(y, m, d) {
            var [dd, mm, yyyy] = cc.lunar2Solar(d, m, y);
            return {"year": yyyy, "month": mm, "day": dd}
        },
        getCanChi(y, m, d, t) {
            var lunar = cc.getLunarDate(d, m, y); // 그냥 jd를 구하는 함수

            let hh, dd, mm, yy;
            hh = CAN[((lunar.jd - 4) * 2 + 1) % 10] + " " + CHI[Math.floor((t + 1) / 2) % 12];
            dd = CAN[(lunar.jd + 9) % 10] + " " + CHI[(lunar.jd + 1) % 12];
            mm = CAN[(lunar.year * 12 + lunar.month + 3) % 10] + " " + CHI[(lunar.month + 1) % 12];
            // if (lunar.leap == 1) {
            //     mm += " (nhu\u1EADn)";
            // }
            yy = CAN[(lunar.year + 6) % 10] + " " + CHI[(lunar.year + 8) % 12];
            return {
                "solar": {"year": y, "month": m, "day": d, "time": t},
                "lunar": {"year": lunar.year, "month": lunar.month, "day": lunar.day, "time": t},
                "yearName": yy, "monthName": mm, "dayName": dd, "timeName": hh
            }
        },
        getCanChiLunar(y, m, d, t) {
            [d, m, y] = cc.lunar2Solar(d, m, y);
            return this.getCanChi(y, m, d, t)
        },
        getChaCha(y, m, d, t, type) {

            type = type || 'solar';

            var s1 = (type === 'lunar') ? this.lunar2Solar(y, m, d) : {"year": y, "month": m, "day": d};
            var r1 = this.getCanChi(s1.year, s1.month, s1.day, t);

            var l2 = r1.solar;
            var s2 = this.lunar2Solar(l2.year, l2.month, l2.day);
            var r2 = this.getCanChi(s2.year, s2.month, s2.day, t);

            var l3 = r2.solar;
            var s3 = this.lunar2Solar(l3.year, l3.month, l3.day);
            var r3 = this.getCanChi(s3.year, s3.month, s3.day, t);

            var l4 = r3.solar;
            var s4 = this.lunar2Solar(l4.year, l4.month, l4.day);
            var r4 = this.getCanChi(s4.year, s4.month, s4.day, t);

            return [r1, r2, r3, r4]
        }
    }
}