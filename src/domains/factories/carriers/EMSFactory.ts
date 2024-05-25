import ICarrier from "../../interfaces/ICarrier"
import EMS from "../../entities/carriers/EMS"
import { CarrierFactory } from "../CarrierFactory"

export default class EMSFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new EMS()
  }
}