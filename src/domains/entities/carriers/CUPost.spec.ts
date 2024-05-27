import Carrier from "../Carrier"
import CUPost from "./CUPost"

describe("CUPost Entity", () => {
  it("should create a CUPost instance", () => {
    const carrier = new CUPost()
    expect(carrier).toBeInstanceOf(Carrier)
    expect(carrier.no).toBe(7)
    expect(carrier.id).toBe("cupost")
    expect(carrier.name).toBe("CU 편의점 택배")
    expect(carrier.isCrawlable).toBe(false)

    const trackingNumber = "111"
    expect(carrier.getPopupURL(trackingNumber)).toBe(
      `https://www.cupost.co.kr/postbox/delivery/localResult.cupost?invoice_no=${trackingNumber}`
    )
  })
})
