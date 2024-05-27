import CarrierDTO from "../dtos/CarrierDTO"
import ICarrierDTO from "../dtos/interfaces/ICarrierDTO"
import EPostFactory from "../factories/carriers/EPostFactory"
import ICarrierRepository from "../interfaces/ICarrierRepository"
import CarrierUseCase from "./CarrierUseCase"
import ICarrierUseCase from "./interfaces/ICarrierUseCase"

describe("CarrierUseCase", () => {
  let carrierRepository: jest.Mocked<ICarrierRepository>
  let carrierUseCase: ICarrierUseCase

  beforeEach(() => {
    carrierRepository = {
      getCarriers: jest.fn()
    } as jest.Mocked<ICarrierRepository>

    carrierUseCase = new CarrierUseCase(carrierRepository)
  })

  it("should get carriers", async () => {
    const carrier = new EPostFactory().newCarrier()
    const carriers: ICarrierDTO[] = [
      new CarrierDTO(
        carrier.no,
        carrier.id,
        carrier.name,
        carrier.isCrawlable,
        carrier
      )
    ]

    carrierRepository.getCarriers.mockResolvedValue(carriers)

    const result = await carrierUseCase.getCarriers()

    expect(result).toBe(carriers)
    expect(carrierRepository.getCarriers).toHaveBeenCalled()
  })
})
