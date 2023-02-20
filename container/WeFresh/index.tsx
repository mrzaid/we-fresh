import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Container from "../../components/common/Container";
import RichTextRenderer from "../../components/common/RichTextRenderer";

import { Loading } from "../../components/common/icon";

//styles
import styles from "./index.module.scss";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup
  .object({
    // firstName: yup.string().required(),
    // age: yup.number().positive().integer().required(),
    phone_number: yup
      .string()
      .required("required")
      .matches(phoneRegExp, "Phone number is not valid")
      .max(11, "Number can't exceed 11 digits")
      .min(11, "Number can't be less than 11 digits"),
  })
  .required();
const WeFresh = ({ data }: any) => {
  const { content } = data.items[0];
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<string>("");
  const [form, setForm] = useState({
    "form-name": "contact",
    name: "",
    email: "",
    company: "",
    phone: "",
    job: "",
    topic: "",
    message: "",
  });

  const createFormDataObj = (data: any): any => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const formSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(createFormDataObj(form)).toString(),
    })
      .then(() => {
        setStatus("success");
      })
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false);
      });
  };
  const reactform = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    // reValidateMode: "onChange",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = reactform;
  const onSubmit = (data: any) => console.log(data);

  return (
    <section id="forbusiness">
      <Container>
        <div className="min-w-[210px] md:max-w-[600px] mx-auto flex items-center justify-center">
          <div
            className={`min-w-[210px] mt-[50px] md:mt-[104px] ${styles.wefresh}`}
          >
            <RichTextRenderer json={content.json} />
            <div className="min-w-[210px] mt-10 flex md:gap-5 gap-2 justify-center ">
              {/* <div className=" text-base ">
                <Input
                  name="phone"
                  className=" h-8 px-4 w-[170px] md:w-[300px]  hover:bg-slate-50 focus:border-sky-500  rounded outline-none border-sgrey border-2"
                  placeholder="Enter phone number"
                  type="text"
                  id="1"
                />
              </div>
              <div className="mb-[88px]">
                <Button>Send</Button>
              </div> */}
              <FormProvider {...reactform}>
                <form
                  className="flex gap-5 justify-center"
                  onSubmit={formSubmit}
                >
                  {/* <input {...register("firstName")} />
                <p>{errors.firstName?.message}</p>
                <input {...register("age")} />
                <p>{errors.age?.message}</p> */}

                  <div className={`text-base pl-[55px]`}>
                    <input
                      {...register("phone_number")}
                      className=" h-8 px-4 w-[170px] md:w-[300px] rounded outline-none hover:bg-slate-50 focus:border-sky-500  border-sgrey border-2"
                      placeholder="Enter phone number"
                    />
                    <p className={`${styles.wefreshp}`}>
                      {errors.phone_number?.message}
                    </p>
                  </div>
                  <div>
                    <Button>
                      {loading ? (
                        <i className=" flex justify-center  items-center">
                          <Loading height={30} width={30} color="#989898" />
                        </i>
                      ) : (
                        <>
                          <p className="hidden xl:block">Send</p>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WeFresh;
