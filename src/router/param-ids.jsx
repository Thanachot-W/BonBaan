import { useMatch } from "react-router"

const ServiceID = () => {
  const match = useMatch("/services/:id");
  return match.params.id
}

const OrderID = () => {
  const match = useMatch("/orders/:id");
  return match.params.id
}

export {
  ServiceID,
  OrderID
}