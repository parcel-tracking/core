import IDeliveryLocation from "./IDeliveryLocationVO"
import IDeliveryProgress from "./IDeliveryProgressVO"
import IDeliveryState from "./IDeliveryStateVO"

export default interface IDeliveryDTO {
  from: IDeliveryLocation
  progresses: Array<IDeliveryProgress>
  state: IDeliveryState
  to: IDeliveryLocation
}