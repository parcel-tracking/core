import ICarrier from "../../interfaces/ICarrier"
import Ilyanglogis from "../../entities/carriers/Ilyanglogis"
import { CarrierFactory } from "../CarrierFactory"

export default class IlyanglogisFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new Ilyanglogis()
  }
}