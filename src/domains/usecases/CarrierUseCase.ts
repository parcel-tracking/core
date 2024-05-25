import ICarrierFactory from "../interfaces/ICarrierFactory"
import ICarrierUseCase from "../interfaces/ICarrierUseCase"

export default class CarrierUseCase implements ICarrierUseCase {
  private carriers: Map<string, ICarrierFactory>

  constructor(carriers: Map<string, ICarrierFactory>) {
    this.carriers = carriers
  }

  
}