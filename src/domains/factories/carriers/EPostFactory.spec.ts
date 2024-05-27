import EPost from "../../entities/carriers/EPost"
import ICarrier from "../../entities/interfaces/ICarrier"
import EPostFactory from "./EPostFactory"

describe("EPostFactory", () => {
  let factory: EPostFactory

  beforeEach(() => {
    factory = new EPostFactory()
  })

  it("should create an instance of EPost", () => {
    const carrier: ICarrier = factory.newCarrier()
    expect(carrier).toBeInstanceOf(EPost)
  })
})
