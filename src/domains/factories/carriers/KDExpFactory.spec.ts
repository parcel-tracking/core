import KDExp from "../../entities/carriers/KDExp"
import ICarrier from "../../entities/interfaces/ICarrier"
import KDExpFactory from "./KDExpFactory"

describe("KDExpFactory", () => {
  let factory: KDExpFactory

  beforeEach(() => {
    factory = new KDExpFactory()
  })

  it("should create an instance of KDExp", () => {
    const carrier: ICarrier = factory.newCarrier()
    expect(carrier).toBeInstanceOf(KDExp)
  })
})
