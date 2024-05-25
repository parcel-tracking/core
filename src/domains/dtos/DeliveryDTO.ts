import IDeliveryDTO from "../interfaces/IDeliveryDTO"
import IDeliveryLocationVO from "../interfaces/IDeliveryLocationVO"
import IDeliveryProgressVO from "../interfaces/IDeliveryProgressVO"
import IDeliveryStateVO from "../interfaces/IDeliveryStateVO"

export default class DeliveryDTO implements IDeliveryDTO {
  constructor(
    readonly from: IDeliveryLocationVO,
    readonly progresses: Array<IDeliveryProgressVO>,
    readonly state: IDeliveryStateVO,
    readonly to: IDeliveryLocationVO
  ) {}
}