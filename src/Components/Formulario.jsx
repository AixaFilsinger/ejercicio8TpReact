import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const Formulario = () => {
  const {
    register,
    handleSubmit, reset,
    formState: { errors },
  } = useForm();

 function enviar (data){
  console.log(data)
  alert();
  reset();

 }
 const alert = ()=>{
    Swal.fire(
      'Enviado', 'Los datos se guardaron correctamente','success'
    )
 }
  return (
    <Form onSubmit={handleSubmit(enviar)}>
      <Form.Group className="mb-3" controlId="nom">
        <Form.Label className="fw-semibold fs-4">Nombre</Form.Label>
        <Form.Control
          type="text"
          {...register("nombre", {
            required: true,
            minLength: 2,
            maxLength: 20,
          })}
          placeholder="Ej: Aixa"
         
        />
         {errors.nombre?.type === "required" && (
               <div className="alert alert-danger m-3 text-center fw-semibold fst-italic" role="alert">
               ❌ Ingrese un nombre
             </div>
              )}
         {errors.nombre?.type === "minLength" && (
               <div className="alert alert-danger m-3 text-center fw-semibold fst-italic" role="alert">
               ❌ El Nombre ingresado debe tener minimo dos caracteres
             </div>
              )}
         {errors.nombre?.type === "maxLength" && (
               <div className="alert alert-danger m-3 text-center fw-semibold fst-italic" role="alert">
               ❌ El Nombre ingresado no debe superar los 20 caracteres
             </div>
              )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="ap">
        <Form.Label className="fw-semibold fs-4">Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ej: Filsinger"  {...register("apellido", {
            required: true,
            minLength: 2,
            maxLength: 20,
          })} />
           {errors.apellido?.type === "required" && (
               <div className="alert alert-danger m-3 text-center fw-semibold fst-italic" role="alert">
               ❌ Ingrese un Apellido
             </div>
              )}
         {errors.apellido?.type === "minLength" && (
               <div className="alert alert-danger m-3 text-center fw-semibold fst-italic" role="alert">
               ❌ El Apellido ingresado debe tener minimo dos caracteres
             </div>
              )}
         {errors.apellido?.type === "maxLength" && (
               <div className="alert alert-danger m-3 text-center fw-semibold fst-italic" role="alert">
               ❌ El Apellido ingresado no debe superar los 20 caracteres
             </div>
              )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="documento">
        <Form.Label className="fw-semibold fs-4">DNI</Form.Label>
        <Form.Control type="number" placeholder="Ej: 42008591"  {...register("dni", { required: true, valueAsNumber: true})} />
        {errors.dni?.type === "required" && (
               <div className="alert alert-danger m-3 text-center fw-semibold fst-italic" role="alert">
               ❌ Ingrese su DNI
             </div>
              )}
              {errors.dni?.type === "valueAsNumber" && (
                <div className="alert alert-danger m-3 text-center fw-semibold fst-italic" role="alert">
                ❌ Debe ingresar numeros
              </div>
              )} 
      </Form.Group>
      <Form.Group className="mb-3" controlId="correo">
        <Form.Label className="fw-semibold fs-4">Email</Form.Label>
        <Form.Control type="email" placeholder="Ej: aixa@gmail.com"  {...register("email", {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,required:true
                })} />
                {errors.email?.type === "pattern" && (
                 <div className="alert alert-danger m-3 text-center fw-semibold fst-italic" role="alert">
                 ❌ Ingrese un correo electronico valido
               </div>
              )}
                {errors.email?.type === "required" && (
                 <div className="alert alert-danger m-3 text-center fw-semibold fst-italic" role="alert">
                 ❌ Ingrese un correo electronico
               </div>
              )}
      </Form.Group>

      <Button variant="danger" type="submit" size="lg">
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;
