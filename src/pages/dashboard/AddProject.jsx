import { useForm } from "react-hook-form";
const AddProject = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      className="addProject w-[50%] mx-auto my-10 p-10  flex flex-col gap-5 border border-blue-500 rounded-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-4xl mb-10 font-bold">Add New Project</h1>
      <div className="projectName flex gap-2 flex-col">
        <label htmlFor="projectName">Project Name</label>
        <input
          id="projectName"
          {...register("projectName", { required: true, minLength: 8 })}
          placeholder="Project Name"
          className="px-2 py-2 bg-[#131212] rounded-md outline-none"
        />
      </div>
      <div className="description flex gap-2 flex-col">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          {...register("description", { required: true, minLength: 15 })}
          placeholder="Description"
          className="px-2 py-2 bg-[#131212] rounded-md outline-none"
        />
      </div>
      <div className="projectStatus flex gap-2 flex-col">
        <label htmlFor="projectStatus">Project Status</label>
        <select
          name="projectStatus"
          id="projectStatus"
          {...register("projectStatus")}
        >
          <option value="planning">Planning</option>
          <option value="completed">Completed</option>
          <option value="inProgress">In Progress</option>
        </select>
      </div>
      <div className="submit text-center mt-6">
        <button type="submit" className="w-full bg-blue-500 p-2 rounded-lg">
          {" "}
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddProject;
