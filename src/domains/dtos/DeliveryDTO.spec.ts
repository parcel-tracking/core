import DeliveryLocationVO from "../vos/DeliveryLocationVO"
import DeliveryProgressVO from "../vos/DeliveryProgressVO"
import DeliveryStateVO from "../vos/DeliveryStateVO"
import IDeliveryLocationVO from "../vos/interfaces/IDeliveryLocationVO"
import IDeliveryProgressVO from "../vos/interfaces/IDeliveryProgressVO"
import IDeliveryStateVO from "../vos/interfaces/IDeliveryStateVO"
import DeliveryDTO from "./DeliveryDTO"
import IDeliveryDTO from "./interfaces/IDeliveryDTO"

describe("DeliveryDTO", () => {
  let from: IDeliveryLocationVO
  let to: IDeliveryLocationVO
  let progresses: Array<IDeliveryProgressVO>
  let state: IDeliveryStateVO
  let deliveryDTO: IDeliveryDTO

  beforeEach(() => {
    from = Object.freeze(
      new DeliveryLocationVO("Warehouse", "8:00 AM", "123 Warehouse St")
    )
    to = Object.freeze(
      new DeliveryLocationVO("Customer", "5:00 PM", "456 Customer Rd")
    )
    state = Object.freeze(new DeliveryStateVO("1", "In Transit"))
    progresses = [
      new DeliveryProgressVO("Package received", "Warehouse", "8:00 AM", state),
      new DeliveryProgressVO(
        "Package in transit",
        "Distribution Center",
        "12:00 PM",
        state
      )
    ]
    deliveryDTO = Object.freeze(new DeliveryDTO(from, progresses, state, to))
  })

  it("should create a DeliveryDTO instance", () => {
    expect(deliveryDTO).toBeInstanceOf(DeliveryDTO)
  })

  it("should have readonly properties", () => {
    expect(deliveryDTO.from).toBe(from)
    expect(deliveryDTO.to).toBe(to)
    expect(deliveryDTO.state).toBe(state)
    expect(deliveryDTO.progresses).toBe(progresses)
  })

  it("should not allow modifying readonly from property", () => {
    expect(() => {
      deliveryDTO.from = new DeliveryLocationVO(
        "New Location",
        "9:00 AM",
        "789 New St"
      )
    }).toThrow()
  })

  it("should not allow modifying readonly to property", () => {
    expect(() => {
      deliveryDTO.to = new DeliveryLocationVO(
        "New Location",
        "6:00 PM",
        "1010 New Rd"
      )
    }).toThrow()
  })

  it("should not allow modifying readonly state property", () => {
    expect(() => {
      deliveryDTO.state = new DeliveryStateVO("2", "Delivered")
    }).toThrow()
  })

  it("should not allow modifying readonly progresses property", () => {
    expect(() => {
      deliveryDTO.progresses = [
        new DeliveryProgressVO(
          "New progress",
          "New Location",
          "10:00 AM",
          state
        )
      ]
    }).toThrow()
  })

  it("should initialize with provided values", () => {
    expect(deliveryDTO.from.name).toBe("Warehouse")
    expect(deliveryDTO.from.time).toBe("8:00 AM")
    expect(deliveryDTO.from.address).toBe("123 Warehouse St")
    expect(deliveryDTO.to.name).toBe("Customer")
    expect(deliveryDTO.to.time).toBe("5:00 PM")
    expect(deliveryDTO.to.address).toBe("456 Customer Rd")
    expect(deliveryDTO.state.id).toBe("1")
    expect(deliveryDTO.state.name).toBe("In Transit")
    expect(deliveryDTO.progresses.length).toBe(2)
    expect(deliveryDTO.progresses[0].description).toBe("Package received")
    expect(deliveryDTO.progresses[0].location).toBe("Warehouse")
    expect(deliveryDTO.progresses[0].time).toBe("8:00 AM")
    expect(deliveryDTO.progresses[0].status.id).toBe("1")
    expect(deliveryDTO.progresses[0].status.name).toBe("In Transit")
  })

  it("should initialize with default values for properties", () => {
    const defaultDTO = new DeliveryDTO(
      new DeliveryLocationVO(),
      [],
      new DeliveryStateVO(),
      new DeliveryLocationVO()
    )
    expect(defaultDTO.from.name).toBe("")
    expect(defaultDTO.from.time).toBe("")
    expect(defaultDTO.from.address).toBe("")
    expect(defaultDTO.to.name).toBe("")
    expect(defaultDTO.to.time).toBe("")
    expect(defaultDTO.to.address).toBe("")
    expect(defaultDTO.state.id).toBe("")
    expect(defaultDTO.state.name).toBe("")
    expect(defaultDTO.progresses).toEqual([])
  })
})
