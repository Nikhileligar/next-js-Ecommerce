import EditTopicForm from "@/app/components/editProductForm"

const getProductsById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'GET',
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }: any) {
  const { id } = params;
  console.log(id,'----><><');
  const { data } = await getProductsById(id);
  const { name, description, qty, price } = data;

  return <EditTopicForm id={id} name={name} description={description} qty= {qty} price= {price}/>;
}