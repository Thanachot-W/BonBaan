import { CreateServiceForm } from "../components/forms/serviceForm";

const serviceData = {
  name: "",
  description: "",
  location: "",
  packages: [{ name: "", price: "", description: "" }],
  customable: false,
  images: [],
  categories: [],
}

const EditServicePage = () => {
  return (
    <div>
      <CreateServiceForm defaultValues={serviceData} submitButtonLabel="แก้ไขบริการ"/>
    </div>
  );
};

export default EditServicePage;