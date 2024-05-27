import Carrier from "../Carrier"
import CJLogistics from "./CJLogistics"

describe("CJLogistics Entity", () => {
  it("should create a CJLogistics instance", () => {
    const carrier = new CJLogistics()
    expect(carrier).toBeInstanceOf(Carrier)
    expect(carrier.no).toBe(2)
    expect(carrier.id).toBe("cjlogistics")
    expect(carrier.name).toBe("CJ 대한통운")
    expect(carrier.isCrawlable).toBe(true)

    const trackingNumber = "111"
    expect(carrier.getPopupURL(trackingNumber)).toBe(
      `http://nplus.doortodoor.co.kr/web/detail.jsp?slipno=${trackingNumber}`
    )
  })
})
