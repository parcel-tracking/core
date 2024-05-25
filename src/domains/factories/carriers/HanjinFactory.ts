import ICarrier from "../../interfaces/ICarrier"
import Hanjin from "../../entities/carriers/Hanjin"
import { CarrierFactory } from "../CarrierFactory"

export default class HanjinFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new Hanjin()
  }
}