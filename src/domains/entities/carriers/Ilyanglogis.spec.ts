import Carrier from "../Carrier"
import Ilyanglogis from "./Ilyanglogis"

describe("Ilyanglogis Entity", () => {
  it("should create a Ilyanglogis instance", () => {
    const carrier = new Ilyanglogis()
    expect(carrier).toBeInstanceOf(Carrier)
    expect(carrier.no).toBe(10)
    expect(carrier.id).toBe("ilyanglogis")
    expect(carrier.name).toBe("일양로지스")
    expect(carrier.isCrawlable).toBe(false)

    const trackingNumber = "111"
    expect(carrier.getPopupURL(trackingNumber)).toBe(
      `http://www.ilyanglogis.com/functionality/card_form_waybill.asp?hawb_no=${trackingNumber}`
    )
  })
})
