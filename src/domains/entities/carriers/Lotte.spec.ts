import Carrier from "../Carrier"
import Lotte from "./Lotte"

describe("Lotte Entity", () => {
  it("should create a Lotte instance", () => {
    const carrier = new Lotte()
    expect(carrier).toBeInstanceOf(Carrier)
    expect(carrier.no).toBe(4)
    expect(carrier.id).toBe("lotte")
    expect(carrier.name).toBe("롯데 택배")
    expect(carrier.isCrawlable).toBe(true)

    const trackingNumber = "111"
    expect(carrier.getPopupURL(trackingNumber)).toBe(
      `https://www.lotteglogis.com/open/tracking?invno=${trackingNumber}`
    )
  })
})
