import Carrier from "../Carrier"
import Daesin from "./Daesin"

describe("Daesin Entity", () => {
  it("should create a Daesin instance", () => {
    const carrier = new Daesin()
    expect(carrier).toBeInstanceOf(Carrier)
    expect(carrier.no).toBe(9)
    expect(carrier.id).toBe("daesin")
    expect(carrier.name).toBe("대신 택배")
    expect(carrier.isCrawlable).toBe(true)

    const trackingNumber = "111"
    expect(carrier.getPopupURL(trackingNumber)).toBe("")
  })
})
