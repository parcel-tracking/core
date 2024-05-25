import ICarrier from "../../interfaces/ICarrier"
import Daesin from "../../entities/carriers/Daesin"
import { CarrierFactory } from "../CarrierFactory"

export default class DaesinFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new Daesin()
  }
}