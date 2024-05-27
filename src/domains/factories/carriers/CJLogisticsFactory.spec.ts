import CJLogistics from "../../entities/carriers/CJLogistics"
import ICarrier from "../../entities/interfaces/ICarrier"
import CJLogisticsFactory from "./CJLogisticsFactory"

describe("CJLogisticsFactory", () => {
  let factory: CJLogisticsFactory

  beforeEach(() => {
    factory = new CJLogisticsFactory()
  })

  it("should create an instance of CJLogistics", () => {
    const carrier: ICarrier = factory.newCarrier()
    expect(carrier).toBeInstanceOf(CJLogistics)
  })
})
