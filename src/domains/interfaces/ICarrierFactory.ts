import ICarrier from "./ICarrier"

export default interface ICarrierFactory {
  newCarrier(): ICarrier
}