import Carrier from "../Carrier"
import EPost from "./EPost"

describe("EPost Entity", () => {
  it("should create a EPost instance", () => {
    const carrier = new EPost()
    expect(carrier).toBeInstanceOf(Carrier)
    expect(carrier.no).toBe(1)
    expect(carrier.id).toBe("epost")
    expect(carrier.name).toBe("우체국 택배")
    expect(carrier.isCrawlable).toBe(true)

    const trackingNumber = "111"
    expect(carrier.getPopupURL(trackingNumber)).toBe(
      `https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?displayHeader=N&sid1=${trackingNumber}`
    )
  })
})
