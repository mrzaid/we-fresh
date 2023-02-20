//Packages
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Container from "../../components/common/Container";
import RichTextRenderer from "../../components/common/RichTextRenderer";

// Styles
import styles from "./index.module.scss";

//
import { Loading } from "../../components/common/icon";

interface iconsType {
  socialLink: {
    url: string;
  };
  socialsImage: {
    url: string;
    title: string;
  };
}
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

const HeroBanner = ({ data }: any) => {
  const { heroDescription, heroImage, heroSocialsCollection } = data?.items[0];

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
    <section id="ourapp">
      <div className={styles.herobannerImg1}>
        <img src={"/assets/hero/Fill4.png"} alt="bannerBgImg1" />
      </div>
      <div className={styles.herobannerImg2}>
        <img src={"/assets/hero/Fill1.png"} alt="bannerBgImg2" />
      </div>
      <div className={styles.herobannerImg5}>
        <img src={"/assets/hero/Fill3.png"} alt="bannerBgImg5" />
      </div>
      <Container>
        <div className=" main flex flex-col md:flex-row  ">
          <div
            className={`max-w-[421px] mx-auto md:ml-0 ${styles.herocontainer}`}
          >
            <div
              className={
                "md:hidden absolute top-0 left-0 right-0 translate-y-[-100px]  z-[-1] min-h-[600px] "
              }
            >
              <img
                className=" w-full h-full"
                style={{ height: "600px" }}
                src={"/assets/fill4mq.png"}
              />
            </div>
            <div className={` md:mt-32  ${styles.banner}`}>
              <RichTextRenderer json={heroDescription.json} />
            </div>

            <div className="mt-10 flex gap-5 justify-center	">
              {/* <form
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={formSubmit}
                action="/success"
              >
          
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Dont fill this out: <input name="bot-field" />
                  </label>
                </p>
                {loading && <h1>loading</h1>}
                <div className={`text-base pl-[55px] ${styles.inputfield} `}>
                  <Input
                    className=" h-8 px-4 w-[170px] md:w-[300px] rounded outline-none hover:bg-slate-50 focus:border-sky-500  border-sgrey border-2"
                    placeholder="Enter phone number"
                    type="text"
                    name="phone"
                    id="phone"
                    value={form.phone}
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <Button>
                    {loading ? (
                      <Loading height={50} width={50} color="#989898" />
                    ) : (
                      <>
                        <p className="hidden xl:block">Send</p>
                      </>
                    )}
                  </Button>
                </div>
              </form> */}
              <FormProvider {...reactform}>
                <form
                  className="flex gap-5 justify-center"
                  onSubmit={formSubmit}
                >
                  {/* <input {...register("firstName")} />
                <p>{errors.firstName?.message}</p>
                <input {...register("age")} />
                <p>{errors.age?.message}</p> */}

                  <div className={`text-base pl-[55px] ${styles.inputfield} `}>
                    <input
                      {...register("phone_number")}
                      className=" h-8 px-4 w-[170px] md:w-[300px] rounded outline-none hover:bg-slate-50 focus:border-sky-500  border-sgrey border-2"
                      placeholder="Enter phone number"
                    />
                    <p className=" text-red-600 ">
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

            <p className="text-center md:text-left text-white mt-8">
              Available on
            </p>
            <div className="  mt-6 flex justify-center md:justify-start gap-5 mb-[100px]">
              {heroSocialsCollection.items.map(
                ({ socialLink, socialsImage }: iconsType) => (
                  <a href={socialLink.url} target="_blank">
                    <button>
                      <img src={socialsImage.url} alt={socialsImage.title} />
                    </button>
                  </a>
                )
              )}
            </div>

            <div
              className={` md:relative md:bottom-[300px] md:right-0 md:w-4.5/12 md:z-[-2] ${styles.herobannerImg4} `}
            >
              <img className={"absolute"} src={"/assets/hero/Fill5.png"} />
            </div>
          </div>

          <div className=" flex flex-row mx-auto md:mr-0 right-0 max-w-[481px]  relative  mb-[40px]">
            <div className={styles.herobgYellow}>
              <img
                className="w-full"
                src={"/assets/hero/Fill2.png"}
                alt="bg-yellow"
              />
            </div>
            <div
              className={`right-0 md:pt-0 pt-[40px] ${styles.herobannerImg}`}
            >
              <img src={heroImage.url} alt={heroImage.title} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
