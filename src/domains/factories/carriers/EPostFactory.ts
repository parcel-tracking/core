import ICarrier from "../../interfaces/ICarrier"
import EPost from "../../entities/carriers/Epost"
import { CarrierFactory } from "../CarrierFactory"

export default class EPostFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new EPost()
  }
}