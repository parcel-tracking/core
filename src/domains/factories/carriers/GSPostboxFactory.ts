import ICarrier from "../../interfaces/ICarrier"
import GSPostbox from "../../entities/carriers/GSPostbox"
import { CarrierFactory } from "../CarrierFactory"

export default class GSPostboxFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new GSPostbox()
  }
}