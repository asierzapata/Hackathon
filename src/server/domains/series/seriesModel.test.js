const rewire = require("rewire")
const seriesModel = rewire("./seriesModel")
const createSeries = seriesModel.__get__("createSeries")
const getAllSeries = seriesModel.__get__("getAllSeries")
const getMatchesBySeriesId = seriesModel.__get__("getMatchesBySeriesId")
const getSeriesById = seriesModel.__get__("getSeriesById")
const deleteSeries = seriesModel.__get__("deleteSeries")
const updateSeries = seriesModel.__get__("updateSeries")
const updateSeriesMatches = seriesModel.__get__("updateSeriesMatches")
// @ponicode
describe("createSeries", () => {
    test("0", () => {
        let callFunction = () => {
            createSeries({ name: "Jean-Philippe", slug: "quam-dignissimos-nostrum", matches: "Becky Bednar", matches_type: "year" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createSeries({ name: "Michael", slug: "consequatur-necessitatibus-sit", matches: "Becky Bednar", matches_type: "year" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createSeries({ name: "Michael", slug: "quam-dignissimos-nostrum", matches: "Gail Hoppe", matches_type: "hour" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            createSeries({ name: "Edmond", slug: "consequatur-necessitatibus-sit", matches: "Janet Homenick", matches_type: "week_day" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            createSeries({ name: "Edmond", slug: "praesentium-et-ducimus", matches: "Janet Homenick", matches_type: "week_day" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            createSeries(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getAllSeries", () => {
    test("0", () => {
        let callFunction = () => {
            getAllSeries()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getMatchesBySeriesId", () => {
    test("0", () => {
        let callFunction = () => {
            getMatchesBySeriesId("a85a8e6b-348b-4011-a1ec-1e78e9620782")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getMatchesBySeriesId("bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getMatchesBySeriesId(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getMatchesBySeriesId(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getMatchesBySeriesId(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getMatchesBySeriesId(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getSeriesById", () => {
    test("0", () => {
        let callFunction = () => {
            getSeriesById(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getSeriesById("7289708e-b17a-477c-8a77-9ab575c4b4d8")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getSeriesById(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getSeriesById(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getSeriesById(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getSeriesById(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("deleteSeries", () => {
    test("0", () => {
        let callFunction = () => {
            deleteSeries(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            deleteSeries("bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            deleteSeries(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            deleteSeries(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            deleteSeries(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            deleteSeries(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("updateSeries", () => {
    test("0", () => {
        let callFunction = () => {
            updateSeries({ key: "Dillenberg" }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            updateSeries({ key: "Elio" }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            updateSeries({ key: "elio@example.com" }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            updateSeries(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("updateSeriesMatches", () => {
    test("0", () => {
        let param2 = [[true, false, true], [true, false, false], [false, true, false]]
        let callFunction = () => {
            updateSeriesMatches({ key: "Dillenberg" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [[false, false, false], [false, false, true], [true, true, false]]
        let callFunction = () => {
            updateSeriesMatches({ key: "elio@example.com" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [[false, false, false], [false, true, false], [false, true, true]]
        let callFunction = () => {
            updateSeriesMatches({ key: "Dillenberg" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [[false, true, false], [false, true, false], [true, true, false]]
        let callFunction = () => {
            updateSeriesMatches({ key: "elio@example.com" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [[true, true, true], [false, false, false], [false, true, false]]
        let callFunction = () => {
            updateSeriesMatches({ key: "elio@example.com" }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            updateSeriesMatches(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
