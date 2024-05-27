import ITrackerDTO from "../dtos/interfaces/ITrackerDTO"
import EPost from "../entities/carriers/EPost"
import ICarrier from "../entities/interfaces/ICarrier"
import ITracker from "../entities/interfaces/ITracker"
import ITrackerRepository from "../interfaces/ITrackerRepository"
import TrackerUseCase from "./TrackerUseCase"
import ITrackerUseCase from "./interfaces/ITrackerUseCase"

describe("TrackerUseCase", () => {
  let trackerRepository: jest.Mocked<ITrackerRepository>
  let trackerUseCase: TrackerUseCase
  let tracker: jest.Mocked<ITracker>

  beforeEach(() => {
    trackerRepository = {
      getTrackers: jest.fn(),
      addTracker: jest.fn(),
      updateTracker: jest.fn(),
      deleteTracker: jest.fn()
    } as jest.Mocked<ITrackerRepository>

    tracker = {
      updateCarrier: jest.fn(),
      updateLabel: jest.fn(),
      updateTrackingNumber: jest.fn(),
      addMemo: jest.fn(),
      updateMemo: jest.fn(),
      deleteMemo: jest.fn()
    } as unknown as jest.Mocked<ITracker>

    trackerUseCase = new TrackerUseCase(trackerRepository)
  })

  it("should add a tracker", async () => {
    trackerRepository.addTracker.mockResolvedValue(true)
    const result = await trackerUseCase.addTracker()
    expect(result).toBe(true)
    expect(trackerRepository.addTracker).toHaveBeenCalled()
  })

  it("should get trackers", async () => {
    const trackers: ITrackerDTO[] = []
    trackerRepository.getTrackers.mockResolvedValue(trackers)
    const result = await trackerUseCase.getTrackers()
    expect(result).toBe(trackers)
    expect(trackerRepository.getTrackers).toHaveBeenCalled()
  })

  it("should update carrier", async () => {
    const carrier: ICarrier = new EPost()

    trackerRepository.updateTracker.mockResolvedValue(true)
    const result = await trackerUseCase.updateCarrier(tracker, carrier)
    expect(result).toBe(true)
    expect(tracker.updateCarrier).toHaveBeenCalledWith(carrier)
    expect(trackerRepository.updateTracker).toHaveBeenCalledWith(tracker)
  })

  it("should update label", async () => {
    const newLabel = "new label"

    trackerRepository.updateTracker.mockResolvedValue(true)
    const result = await trackerUseCase.updateLabel(tracker, newLabel)
    expect(result).toBe(true)
    expect(tracker.updateLabel).toHaveBeenCalledWith(newLabel)
    expect(trackerRepository.updateTracker).toHaveBeenCalledWith(tracker)
  })

  it("should update tracking number", async () => {
    const newTrackingNumber = "123456789"

    trackerRepository.updateTracker.mockResolvedValue(true)
    const result = await trackerUseCase.updateTrackingNumber(
      tracker,
      newTrackingNumber
    )
    expect(result).toBe(true)
    expect(tracker.updateTrackingNumber).toHaveBeenCalledWith(newTrackingNumber)
    expect(trackerRepository.updateTracker).toHaveBeenCalledWith(tracker)
  })

  it("should add a memo", async () => {
    trackerRepository.updateTracker.mockResolvedValue(true)
    const result = await trackerUseCase.addMemo(tracker)
    expect(result).toBe(true)
    expect(tracker.addMemo).toHaveBeenCalled()
    expect(trackerRepository.updateTracker).toHaveBeenCalledWith(tracker)
  })

  it("should update a memo", async () => {
    const index = 0
    const newMemo = "new memo"

    trackerRepository.updateTracker.mockResolvedValue(true)
    const result = await trackerUseCase.updateMemo(tracker, index, newMemo)
    expect(result).toBe(true)
    expect(tracker.updateMemo).toHaveBeenCalledWith(index, newMemo)
    expect(trackerRepository.updateTracker).toHaveBeenCalledWith(tracker)
  })

  it("should delete a memo", async () => {
    const index = 0

    trackerRepository.updateTracker.mockResolvedValue(true)
    const result = await trackerUseCase.deleteMemo(tracker, index)
    expect(result).toBe(true)
    expect(tracker.deleteMemo).toHaveBeenCalledWith(index)
    expect(trackerRepository.updateTracker).toHaveBeenCalledWith(tracker)
  })

  it("should delete a tracker", async () => {
    const trackerId = "tracker-id"
    trackerRepository.deleteTracker.mockResolvedValue(true)
    const result = await trackerUseCase.deleteTracker(trackerId)
    expect(result).toBe(true)
    expect(trackerRepository.deleteTracker).toHaveBeenCalledWith(trackerId)
  })
})
