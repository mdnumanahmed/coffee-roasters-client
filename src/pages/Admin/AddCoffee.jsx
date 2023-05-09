import React from "react";
import { useForm } from "react-hook-form";

const AddCoffee = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="w-[70%] mx-auto p-20 bg-slate-200 rounded-lg shadow-lg">
        <div className="form-title text-center">
          <h2>Add New Coffee</h2>
          <p className="my-4">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <input className="input-class" placeholder="Coffee Name"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p role="alert">First name is required</p>
            )}

            <input className="input-class" placeholder="Chef Name"
              {...register("chef", { required: "Chef Name is required" })}
              aria-invalid={errors.chef ? "true" : "false"}
            />
            {errors.chef && <p role="alert">{errors.chef?.message}</p>}

            <input className="input-class" placeholder="Supplier Name"
              {...register("supplier", { required: "Supplier Name is required" })}
              aria-invalid={errors.supplier ? "true" : "false"}
            />
            {errors.supplier && <p role="alert">{errors.supplier?.message}</p>}

            <input className="input-class" placeholder="Taste "
              {...register("taste", { required: "Taste field is required" })}
              aria-invalid={errors.taste ? "true" : "false"}
            />
            {errors.taste && <p role="alert">{errors.taste?.message}</p>}

            <input className="input-class" placeholder="Price"
              {...register("price", { required: "Price field is required" })}
              aria-invalid={errors.price ? "true" : "false"}
            />
            {errors.price && <p role="alert">{errors.price?.message}</p>}
           
            <input className="input-class" placeholder="Category Name"
              {...register("category", { required: "Category field is required" })}
              aria-invalid={errors.category ? "true" : "false"}
            />
            {errors.category && <p role="alert">{errors.category?.message}</p>}
           
            <input className="input-class" placeholder="Coffee Details"
              {...register("details", { required: "Details field is required" })}
              aria-invalid={errors.details ? "true" : "false"}
            />
            {errors.details && <p role="alert">{errors.details?.message}</p>}
            
            <input className="input-class" placeholder="Photo url of coffee"
              {...register("photo", { required: "Photo field is required" })}
              aria-invalid={errors.photo ? "true" : "false"}
            />
            {errors.photo && <p role="alert">{errors.photo?.message}</p>}

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
