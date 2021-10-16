const rewire = require("rewire")
const chore_item = rewire("./chore-item")
const ChoreItem = chore_item.__get__("ChoreItem")
// @ponicode
describe("onCheckPressed", () => {
    let inst

    beforeEach(() => {
        inst = new ChoreItem()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onCheckPressed()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onXPressed", () => {
    let inst

    beforeEach(() => {
        inst = new ChoreItem()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onXPressed()
        }
    
        expect(callFunction).not.toThrow()
    })
})
