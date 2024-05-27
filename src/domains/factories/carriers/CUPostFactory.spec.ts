import CUPost from "../../entities/carriers/CUPost"
import ICarrier from "../../entities/interfaces/ICarrier"
import CUPostFactory from "./CUPostFactory"

describe("CUPostFactory", () => {
  let factory: CUPostFactory

  beforeEach(() => {
    factory = new CUPostFactory()
  })

  it("should create an instance of CUPost", () => {
    const carrier: ICarrier = factory.newCarrier()
    expect(carrier).toBeInstanceOf(CUPost)
  })
})
