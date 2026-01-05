'use client';
import { SubmitHandler, useForm } from "react-hook-form";
import styles from './ContactForm.module.scss'
import { InputBase } from "@/components/ui/InputBase/InputBase";
import Image from "next/image";

type FormType = {
  site: string;
  email: string;
  telegram: string;
}

export const ContactForm = () => {
  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<FormType>({
    mode: "onChange",
    delayError: 1000,
    defaultValues: {
      site: "",
      email: "",
      telegram: "",
    },
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

      <div className={styles.inputsWrapper}>
        <InputBase
          placeholder="Ваш сайт"
          error={errors.site?.message}
          {...register('site')}
        />

        <InputBase
          placeholder="Ваша почта"
          // error={errors.email?.message}
          error={'поле обязательно к заполнению'}
          icon={
            <Image
              src={'/images/contacts/network.svg'}
              width={18}
              height={18}
              alt="network"
            />
          }
          {...register('email')}
        />

        <InputBase
          placeholder="Ваш telegram"
          error={errors.telegram?.message}
          {...register('telegram')}
        />
      </div>

      <div className={styles.buttonsWrapper}>
        btns
      </div>
    </form>
  )
}
