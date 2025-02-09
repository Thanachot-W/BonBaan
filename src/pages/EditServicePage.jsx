import { CreateServiceForm } from "../components/forms/serviceForm";
import { useService } from "../routes/editServiceRoute";

const EditServicePage = () => {
  const serviceData = useService();

  //TODO: handle GET DELETE images

  return (
    <div>
      <CreateServiceForm defaultValues={serviceData} submitButtonLabel="แก้ไขบริการ"/>
    </div>
  );
};

export default EditServicePage;