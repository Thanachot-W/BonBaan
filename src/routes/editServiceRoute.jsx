import { useActionData, useLoaderData } from "react-router";

export const serviceLoader = () => {
  //TODO: call API 
  const data = {
    name: "test",
    description: "test",
    location: "test",
    packages: [{ name: "test", price: "1", description: "test" }],
    customable: true,
    images: ["https://picsum.photos/seed/4/200/200", "https://picsum.photos/seed/2/200/200"],
    categories: [],
  };
  return data;
}

export const serviceAction = () => {
  return null;
}

export const useService = () => {
  const loaderData = useLoaderData();
  const actionData = useActionData();

  return actionData || loaderData;
}