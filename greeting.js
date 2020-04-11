function greet(name) {

    if (!name) {
        return "Hello, my friend.";

    } else if (!Array.isArray(name)) {

        return name == name.toUpperCase() ? "HELLO, " + name + "!" : "Hello, " + name + ".";

    } else {
        var names = name;
        var len = names.length;

        var capitalNames = [];
        var split = [];

        names.forEach(n => {
            if (n == n.toUpperCase()) {
                capitalNames.push(n);
                len -= 1;
            } else if (n.includes(',') && !n.includes('\"')) {
                split.push(n);
                len += 1;
            }
        });

        names = names.filter(n => !capitalNames.includes(n));

        names = names.filter(n => !split.includes(n));

        var splitNames = [];
        for (var i = 0; i < split.length; i++) {
            split[i].split(", ").forEach(i => splitNames.push(i));
        }

        var retStr = "Hello, ";

        for (var i = 0; i < names.length; i++) {

            while (names[i].includes('\"')) {
                names[i] = (names[i]).replace('\"', '');
            }


            retStr += names[i];
            if (len == 2 && i != len - 1) {
                retStr += " and ";
            } else {
                if (i == len - 2) {
                    retStr += ", and ";
                } else if (i != len - 1) {
                    retStr += ", ";
                }
            }
        }

        for (var i = 0; i < splitNames.length; i++) {
            retStr += splitNames[i];

            if (i != splitNames.length - 1) {
                retStr += ", and ";
            }
        }

        retStr += ".";

        if (capitalNames.length > 0) {
            retStr += " AND HELLO ";
            for (var i = 0; i < capitalNames.length; i++) {
                retStr += capitalNames[i]+ "!";
                if (i != capitalNames.length - 1) {
                    retStr += ", ";
                }
            }
        }

        return retStr;

    }
}

module.exports = greet;
