'use client';
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputBase } from "@/components/ui/InputBase/InputBase";
import { Button } from "@/components/ui/Button/Button";
import { regExpHelper } from "@/utils/regExp.helper";
import { ButtonLink } from "@/components/ui/ButtonLink/ButtonLink";
import { CONTACT_MANAGER } from "@/utils/links";
import styles from './ContactForm.module.scss'

type FormType = {
  site: string;
  email: string;
  telegram: string;
}

const formValidation = {
  site: {
    required: 'Поле обязательно к заполнению',
    pattern: {
      value: regExpHelper('URL'),
      message: 'Введите корректный URL',
    },
  },
  email: {
    required: 'Поле обязательно к заполнению',
    pattern: {
      value: regExpHelper('EMAIL'),
      message: 'Введите корректный email',
    },
  },
  telegram: {
    required: 'Поле обязательно к заполнению',
    pattern: {
      value: regExpHelper('TELEGRAM'),
      message: 'Введите корректный Telegram-никнейм (например, @username)',
    },
  },
}

export const ContactForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
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
          type="url"
          placeholder="Ваш сайт"
          error={errors.site?.message}
          icon={
            <Image
              src={'/images/contacts/network.svg'}
              width={18}
              height={18}
              alt="network"
            />
          }
          {...register('site', formValidation.site)}
        />

        <InputBase
          type="email"
          placeholder="Ваша почта"
          error={errors.email?.message}
          icon={
            <Image
              src={'/images/contacts/mail.svg'}
              width={18}
              height={18}
              alt="mail"
            />
          }
          {...register('email', formValidation.email)}
        />

        <InputBase
          type="text"
          placeholder="Ваш telegram"
          error={errors.telegram?.message}
          icon={
            <Image
              src={'/images/contacts/telegram.svg'}
              width={18}
              height={18}
              alt="telegram"
            />
          }
          {...register('telegram', formValidation.telegram)}
        />
      </div>

      <div className={styles.buttonsWrapper}>
        <Button
          size="l"
          variant="primary"
          type="submit"
        >
          Оставить заявку
        </Button>

        <ButtonLink
          href={CONTACT_MANAGER}
          variant='secondary'
          size='l'
          target='_blank'
        >
          Перейти в чат с менеджером
        </ButtonLink>
      </div>
    </form>
  )
}
