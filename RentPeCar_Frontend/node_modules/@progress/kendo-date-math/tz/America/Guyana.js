const dm = require('@progress/kendo-date-math');
dm.loadTimezone({
  "zones": {
    "America/Guyana": [
      [
        232.65,
        "-",
        "LMT",
        -1843603200000
      ],
      [
        240,
        "-",
        "-04",
        -1730592000000
      ],
      [
        225,
        "-",
        "-0345",
        176083200000
      ],
      [
        180,
        "-",
        "-03",
        701830800000
      ],
      [
        240,
        "-",
        "-04",
        null
      ]
    ]
  },
  "rules": {},
  "titles": {
    "America/Guyana": {
      "long": "SA Western Standard Time",
      "group": "(GMT-04:00) La Paz"
    }
  }
});