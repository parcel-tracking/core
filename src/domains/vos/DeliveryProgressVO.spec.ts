import DeliveryProgressVO from "./DeliveryProgressVO"
import DeliveryStateVO from "./DeliveryStateVO"
import IDeliveryProgressVO from "./interfaces/IDeliveryProgressVO"
import IDeliveryStateVO from "./interfaces/IDeliveryStateVO"

describe("DeliveryProgressVO", () => {
  let deliveryProgressVO: IDeliveryProgressVO
  let status: IDeliveryStateVO

  beforeEach(() => {
    status = Object.freeze(new DeliveryStateVO("1", "In Transit"))
    deliveryProgressVO = Object.freeze(
      new DeliveryProgressVO(
        "Package received",
        "Warehouse",
        "12:00 PM",
        status
      )
    )
  })

  it("should create a DeliveryProgressVO instance", () => {
    expect(deliveryProgressVO).toBeInstanceOf(DeliveryProgressVO)
  })

  it("should have readonly properties", () => {
    expect(deliveryProgressVO.description).toBe("Package received")
    expect(deliveryProgressVO.location).toBe("Warehouse")
    expect(deliveryProgressVO.time).toBe("12:00 PM")
    expect(deliveryProgressVO.status).toBe(status)
  })

  it("should not allow modifying readonly description property", () => {
    expect(() => {
      ;(deliveryProgressVO as any).description = "Package dispatched"
    }).toThrow()
  })

  it("should not allow modifying readonly location property", () => {
    expect(() => {
      ;(deliveryProgressVO as any).location = "Distribution Center"
    }).toThrow()
  })

  it("should not allow modifying readonly time property", () => {
    expect(() => {
      ;(deliveryProgressVO as any).time = "1:00 PM"
    }).toThrow()
  })

  it("should not allow modifying readonly status property", () => {
    expect(() => {
      ;(deliveryProgressVO as any).status = new DeliveryStateVO(
        "2",
        "Delivered"
      )
    }).toThrow()
  })

  it("should initialize with default values", () => {
    const defaultProgress = new DeliveryProgressVO()
    expect(defaultProgress.description).toBe("")
    expect(defaultProgress.location).toBe("")
    expect(defaultProgress.time).toBe("")
    expect(defaultProgress.status).toBeInstanceOf(DeliveryStateVO)
    expect(defaultProgress.status.id).toBe("")
    expect(defaultProgress.status.name).toBe("")
  })
})
