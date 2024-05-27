import Carrier from "./Carrier"
import Tracker from "./Tracker"
import CJLogistics from "./carriers/CJLogistics"
import EPost from "./carriers/EPost"
import ITracker from "./interfaces/ITracker"

describe("Tracker Entity", () => {
  let tracker: ITracker

  beforeEach(() => {
    tracker = new Tracker(new EPost(), "label", "111", [])
  })

  it("should create a Tracker instance", () => {
    expect(tracker).toBeInstanceOf(Tracker)
    expect(tracker.id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    )
    expect(tracker.carrier).toBeInstanceOf(Carrier)
    expect(tracker.label).toBe("label")
    expect(tracker.trackingNumber).toBe("111")
    expect(tracker.memos).toEqual([])
  })

  it("should update the carrier", () => {
    const newCarrier = new CJLogistics()
    tracker.updateCarrier(newCarrier)
    expect(tracker.carrier).toBe(newCarrier)
  })

  it("should update the label", () => {
    const newLabel = "New Label"
    tracker.updateLabel(newLabel)
    expect(tracker.label).toBe(newLabel)
  })

  it("should update the tracking number", () => {
    const newTrackingNumber = "222"
    tracker.updateTrackingNumber(newTrackingNumber)
    expect(tracker.trackingNumber).toBe(newTrackingNumber)
  })

  it("should add a memo", () => {
    tracker.addMemo()
    expect(tracker.memos).toHaveLength(1)
    expect(tracker.memos[0]).toBe("")
  })

  it("should update a memo at a specific index", () => {
    tracker.addMemo()
    tracker.updateMemo(0, "New memo")
    expect(tracker.memos[0]).toBe("New memo")
  })

  it("should not update a memo if the index is out of bounds", () => {
    tracker.updateMemo(1, "New memo")
    expect(tracker.memos).toHaveLength(0)
  })

  it("should delete a memo at a specific index", () => {
    tracker.addMemo()
    tracker.addMemo()
    tracker.updateMemo(0, "Memo 1")
    tracker.updateMemo(1, "Memo 2")

    tracker.deleteMemo(0)
    expect(tracker.memos).toHaveLength(1)
    expect(tracker.memos[0]).toBe("Memo 2")
  })

  it("should not change memos if trying to delete a memo with an out of bounds index", () => {
    tracker.addMemo()
    tracker.updateMemo(0, "Memo 1")
    tracker.deleteMemo(1)
    expect(tracker.memos).toHaveLength(1)
    expect(tracker.memos[0]).toBe("Memo 1")
  })
})
