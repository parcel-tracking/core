import EMS from "../../entities/carriers/EMS"
import ICarrier from "../../entities/interfaces/ICarrier"
import EMSFactory from "./EMSFactory"

describe("EMSFactory", () => {
  let factory: EMSFactory

  beforeEach(() => {
    factory = new EMSFactory()
  })

  it("should create an instance of EMS", () => {
    const carrier: ICarrier = factory.newCarrier()
    expect(carrier).toBeInstanceOf(EMS)
  })
})
