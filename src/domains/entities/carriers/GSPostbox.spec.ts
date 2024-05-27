import Carrier from "../Carrier"
import GSPostbox from "./GSPostbox"

describe("GSPostbox Entity", () => {
  it("should create a GSPostbox instance", () => {
    const carrier = new GSPostbox()
    expect(carrier).toBeInstanceOf(Carrier)
    expect(carrier.no).toBe(6)
    expect(carrier.id).toBe("gspostbox")
    expect(carrier.name).toBe("GS 편의점 택배")
    expect(carrier.isCrawlable).toBe(false)

    const trackingNumber = "111"
    expect(carrier.getPopupURL(trackingNumber)).toBe(
      `https://www.cvsnet.co.kr/invoice/tracking.do?invoice_no=${trackingNumber}`
    )
  })
})
