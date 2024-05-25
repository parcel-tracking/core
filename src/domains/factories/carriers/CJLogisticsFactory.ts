import ICarrier from "../../interfaces/ICarrier"
import CJLogistics from "../../entities/carriers/CJLogistics"
import { CarrierFactory } from "../CarrierFactory"

export default class CJLogisticsFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new CJLogistics()
  }
}