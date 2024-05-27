import Carrier from "../Carrier"
import KDExp from "./KDExp"

describe("KDExp Entity", () => {
  it("should create a KDExp instance", () => {
    const carrier = new KDExp()
    expect(carrier).toBeInstanceOf(Carrier)
    expect(carrier.no).toBe(8)
    expect(carrier.id).toBe("kdexp")
    expect(carrier.name).toBe("경동 택배")
    expect(carrier.isCrawlable).toBe(true)

    const trackingNumber = "111"
    expect(carrier.getPopupURL(trackingNumber)).toBe("")
  })
})
