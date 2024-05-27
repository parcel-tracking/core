import Hanjin from "../../entities/carriers/Hanjin"
import ICarrier from "../../entities/interfaces/ICarrier"
import HanjinFactory from "./HanjinFactory"

describe("HanjinFactory", () => {
  let factory: HanjinFactory

  beforeEach(() => {
    factory = new HanjinFactory()
  })

  it("should create an instance of Hanjin", () => {
    const carrier: ICarrier = factory.newCarrier()
    expect(carrier).toBeInstanceOf(Hanjin)
  })
})
