import Lotte from "../../entities/carriers/Lotte"
import ICarrier from "../../entities/interfaces/ICarrier"
import LotteFactory from "./LotteFactory"

describe("LotteFactory", () => {
  let factory: LotteFactory

  beforeEach(() => {
    factory = new LotteFactory()
  })

  it("should create an instance of Lotte", () => {
    const carrier: ICarrier = factory.newCarrier()
    expect(carrier).toBeInstanceOf(Lotte)
  })
})
