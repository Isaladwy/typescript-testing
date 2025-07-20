"use strict";
function getHard() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var level;
(function (level) {
    level[level["Kid"] = 15] = "Kid";
    level[level["Easy"] = 9] = "Easy";
    level[level["Medium"] = 6] = "Medium";
    level[level["Hard"] = getHard()] = "Hard";
})(level || (level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level is ${lvl} and No. of Seconds is ${level.Kid}`);
}
//# sourceMappingURL=2enums.js.map