import ICarrier from "../../interfaces/ICarrier"
import CUPost from "../../entities/carriers/CUPost"
import { CarrierFactory } from "../CarrierFactory"

export default class CUPostFactory extends CarrierFactory {
  protected createCarrier(): ICarrier {
    return new CUPost()
  }
}