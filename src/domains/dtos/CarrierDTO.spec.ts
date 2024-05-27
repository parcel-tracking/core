import ICarrier from "../entities/interfaces/ICarrier"
import CarrierDTO from "./CarrierDTO"
import ICarrierDTO from "./interfaces/ICarrierDTO"

class MockCarrier implements ICarrier {
  constructor(
    public readonly no: number,
    public readonly id: string,
    public readonly name: string,
    public readonly isCrawlable: boolean
  ) {}

  getPopupURL(trackingNumber: string): string {
    return `https://mockcarrier.com/track/${trackingNumber}`
  }
}

describe("CarrierDTO", () => {
  let carrier: ICarrier
  let carrierDTO: ICarrierDTO

  beforeEach(() => {
    carrier = new MockCarrier(1, "mock-id", "Mock Carrier", true)
    carrierDTO = Object.freeze(
      new CarrierDTO(
        carrier.no,
        carrier.id,
        carrier.name,
        carrier.isCrawlable,
        carrier
      )
    )
  })

  it("should create a CarrierDTO instance", () => {
    expect(carrierDTO).toBeInstanceOf(CarrierDTO)
  })

  it("should have readonly properties", () => {
    expect(carrierDTO.no).toBe(1)
    expect(carrierDTO.id).toBe("mock-id")
    expect(carrierDTO.name).toBe("Mock Carrier")
    expect(carrierDTO.isCrawlable).toBe(true)
  })

  it("should call getPopupURL method from the carrier", () => {
    const trackingNumber = "123456"
    const expectedURL = `https://mockcarrier.com/track/${trackingNumber}`
    expect(carrierDTO.getPopupURL(trackingNumber)).toBe(expectedURL)
  })

  it("should not allow modifying readonly properties", () => {
    expect(() => {
      ;(carrierDTO as any).no = 2
    }).toThrow()

    expect(() => {
      ;(carrierDTO as any).id = "new-id"
    }).toThrow()

    expect(() => {
      ;(carrierDTO as any).name = "New Carrier"
    }).toThrow()

    expect(() => {
      ;(carrierDTO as any).isCrawlable = false
    }).toThrow()
  })
})
