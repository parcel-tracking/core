import Carrier from "../Carrier"
import Hanjin from "./Hanjin"

describe("Hanjin Entity", () => {
  it("should create a Hanjin instance", () => {
    const carrier = new Hanjin()
    expect(carrier).toBeInstanceOf(Carrier)
    expect(carrier.no).toBe(3)
    expect(carrier.id).toBe("hanjin")
    expect(carrier.name).toBe("한진 택배")
    expect(carrier.isCrawlable).toBe(true)

    const trackingNumber = "111"
    expect(carrier.getPopupURL(trackingNumber)).toBe(
      `http://www.hanjinexpress.hanjin.net/customer/hddcw18.tracking?w_num=${trackingNumber}`
    )
  })
})
