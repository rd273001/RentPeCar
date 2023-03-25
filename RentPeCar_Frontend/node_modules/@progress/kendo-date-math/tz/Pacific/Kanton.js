const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "Pacific/Kanton": [
      [
        0,
        "-",
        "-00",
        -1020470400000
      ],
      [
        720,
        "-",
        "-12",
        307584000000
      ],
      [
        660,
        "-",
        "-11",
        788832000000
      ],
      [
        -780,
        "-",
        "+13",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "Pacific/Kanton": {
      "long": null,
      "group": null
    }
  }
});