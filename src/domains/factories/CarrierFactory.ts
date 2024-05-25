import ICarrier from '../interfaces/ICarrier'
import ICarrierFactory from '../interfaces/ICarrierFactory'

export abstract class CarrierFactory implements ICarrierFactory {
  newCarrier(): ICarrier {
    const carrier = this.createCarrier()
    return carrier
  }

  protected abstract createCarrier(): ICarrier
}