import DeliveryDTO from "../dtos/DeliveryDTO"
import IDeliveryDTO from "../dtos/interfaces/IDeliveryDTO"
import IDeliveryRepository from "../interfaces/IDeliveryRepository"
import DeliveryLocationVO from "../vos/DeliveryLocationVO"
import DeliveryStateVO from "../vos/DeliveryStateVO"
import DeliveryUseCase from "./DeliveryUseCase"
import IDeliveryUseCase from "./interfaces/IDeliveryUseCase"

describe("DeliveryUseCase", () => {
  let deliveryRepository: jest.Mocked<IDeliveryRepository>
  let deliveryUseCase: IDeliveryUseCase

  beforeEach(() => {
    deliveryRepository = {
      getDelivery: jest.fn()
    } as jest.Mocked<IDeliveryRepository>

    deliveryUseCase = new DeliveryUseCase(deliveryRepository)
  })

  it("should get delivery details", async () => {
    const carrierId = "carrier-id"
    const trackingNumber = "tracking-number"
    const deliveries: IDeliveryDTO[] = [
      new DeliveryDTO(
        new DeliveryLocationVO("Warehouse", "8:00 AM", "123 Warehouse St"),
        [],
        new DeliveryStateVO("1", "In Transit"),
        new DeliveryLocationVO("Customer", "5:00 PM", "456 Customer Rd")
      )
    ]

    deliveryRepository.getDelivery.mockResolvedValue(deliveries)

    const result = await deliveryUseCase.getDelivery(carrierId, trackingNumber)

    expect(result).toBe(deliveries)
    expect(deliveryRepository.getDelivery).toHaveBeenCalledWith(
      carrierId,
      trackingNumber
    )
  })
})
