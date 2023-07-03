import { Dropdown, DropdownButton } from "react-bootstrap";
import { DescriptionStyled } from "./StylesComponentsCar";

export const Description = () => {
  return (
    <DescriptionStyled>
      <div>
        <p className="mb-1">{"Carrito de Compras"}</p>
        <p className="mb-0">Tienes {4} Elementos en tu carrito</p>
      </div>
      <div className=" d-flex justify-content-center pt-5 ">
        <DropdownButton
          id="dropdown-basic-button"
          title="Ordenar por"
          variant="bg-light"
          size="sm"
        >
          <Dropdown.Item href="#/action-1">Menor Precio</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Mayor precio</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Cantidad</Dropdown.Item>
        </DropdownButton>
      </div>
    </DescriptionStyled>
  );
};