import ICarrier from "../../interfaces/ICarrier"
import KDExp from "../../entities/carriers/KDExp"
import { CarrierFactory } from "../CarrierFactory"

export default class KDExpFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new KDExp()
  }
}