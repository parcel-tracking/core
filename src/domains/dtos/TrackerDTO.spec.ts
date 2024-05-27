import EPost from "../entities/carriers/EPost"
import ICarrier from "../entities/interfaces/ICarrier"
import TrackerDTO from "./TrackerDTO"
import ITrackerDTO from "./interfaces/ITrackerDTO"

describe("TrackerDTO", () => {
  let carrier: ICarrier
  let trackerDTO: ITrackerDTO

  beforeEach(() => {
    carrier = new EPost()
    trackerDTO = Object.freeze(
      new TrackerDTO("test-id", carrier, "test-label", "123456", [
        "memo1",
        "memo2"
      ])
    )
  })

  it("should create a TrackerDTO instance", () => {
    expect(trackerDTO).toBeInstanceOf(TrackerDTO)
  })

  it("should have a readonly id property", () => {
    expect(trackerDTO.id).toBe("test-id")
    expect(() => {
      ;(trackerDTO as any).id = "new-id"
    }).toThrow()
  })

  it("should have a readonly carrier property", () => {
    expect(trackerDTO.carrier).toBe(carrier)
    expect(() => {
      ;(trackerDTO as any).carrier = new EPost()
    }).toThrow()
  })

  it("should have a readonly label property", () => {
    expect(trackerDTO.label).toBe("test-label")
    expect(() => {
      ;(trackerDTO as any).label = "new-label"
    }).toThrow()
  })

  it("should have a readonly trackingNumber property", () => {
    expect(trackerDTO.trackingNumber).toBe("123456")
    expect(() => {
      ;(trackerDTO as any).trackingNumber = "654321"
    }).toThrow()
  })

  it("should have a readonly memos property", () => {
    expect(trackerDTO.memos).toEqual(["memo1", "memo2"])
    expect(() => {
      ;(trackerDTO as any).memos = ["new-memo"]
    }).toThrow()
  })
})
