import GSPostbox from "../../entities/carriers/GSPostbox"
import ICarrier from "../../entities/interfaces/ICarrier"
import GSPostboxFactory from "./GSPostboxFactory"

describe("GSPostboxFactory", () => {
  let factory: GSPostboxFactory

  beforeEach(() => {
    factory = new GSPostboxFactory()
  })

  it("should create an instance of GSPostbox", () => {
    const carrier: ICarrier = factory.newCarrier()
    expect(carrier).toBeInstanceOf(GSPostbox)
  })
})
