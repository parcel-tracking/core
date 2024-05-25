import ICarrier from "../../interfaces/ICarrier"
import Lotte from "../../entities/carriers/Lotte"
import { CarrierFactory } from "../CarrierFactory"

export default class LotteFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new Lotte()
  }
}