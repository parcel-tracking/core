import Ilyanglogis from "../../entities/carriers/Ilyanglogis"
import ICarrier from "../../entities/interfaces/ICarrier"
import IlyanglogisFactory from "./IlyanglogisFactory"

describe("IlyanglogisFactory", () => {
  let factory: IlyanglogisFactory

  beforeEach(() => {
    factory = new IlyanglogisFactory()
  })

  it("should create an instance of Ilyanglogis", () => {
    const carrier: ICarrier = factory.newCarrier()
    expect(carrier).toBeInstanceOf(Ilyanglogis)
  })
})
