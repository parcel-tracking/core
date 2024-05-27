import Carrier from "../Carrier"
import EMS from "./EMS"

describe("EMS Entity", () => {
  it("should create a EMS instance", () => {
    const carrier = new EMS()
    expect(carrier).toBeInstanceOf(Carrier)
    expect(carrier.no).toBe(11)
    expect(carrier.id).toBe("ems")
    expect(carrier.name).toBe("국체우편(EMS)")
    expect(carrier.isCrawlable).toBe(false)

    const trackingNumber = "111"
    expect(carrier.getPopupURL(trackingNumber)).toBe(
      `https://service.epost.go.kr/trace.RetrieveEmsRigiTraceList.comm?displayHeader=N&POST_CODE=${trackingNumber}`
    )
  })
})
