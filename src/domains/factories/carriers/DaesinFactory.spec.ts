import Daesin from "../../entities/carriers/Daesin"
import ICarrier from "../../entities/interfaces/ICarrier"
import DaesinFactory from "./DaesinFactory"

describe("DaesinFactory", () => {
  let factory: DaesinFactory

  beforeEach(() => {
    factory = new DaesinFactory()
  })

  it("should create an instance of Daesin", () => {
    const carrier: ICarrier = factory.newCarrier()
    expect(carrier).toBeInstanceOf(Daesin)
  })
})
