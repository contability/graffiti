import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  // 폰 번호 정규표현식
  const phoneRegex = new RegExp(/^\d{3}-\d{3,4}-\d{4}$/);

  const userInfoSchema = z
    .object({
      id: z
        .string()
        .min(1, { message: "필수 값 입니다" })
        .min(6, { message: "6자 이상" }),
      password: z.string().min(4, { message: "4자 이상" }),
      confirmPassword: z
        .string()
        .min(1, { message: "confirm password is required" }),

      // 숫자가 한 개 이상일 것. 즉 필드가 필수인지 확인
      age: z.coerce.number().min(1, { message: "필수 값 입니다" }),
      email: z.string().email(),
      phone: z.string().regex(phoneRegex, { message: "폰 번 맞음?" }),
      date: z.date(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "패스워드를 다시 한 번 입력해주세요.",
    });

  type UserInfo = z.infer<typeof userInfoSchema>;

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserInfo>({
    resolver: zodResolver(userInfoSchema),
  });

  const onSubmit: SubmitHandler<UserInfo> = (data) => console.log(data);

  return (
    <main>
      <form style={{ width: "300px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <label htmlFor="">id</label>
          <input type="text" {...register("id")} />
          {errors.id && <p style={{ color: "red" }}>{errors.id.message}</p>}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <label htmlFor="">password</label>
          <input type="password" {...register("password")} />
        </div>
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <label htmlFor="">confirm password</label>
          <input type="password" {...register("confirmPassword")} />
        </div>
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <label htmlFor="">age</label>
          <input type="number" {...register("age")} />
        </div>
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <label htmlFor="">email</label>
          <input type="email" {...register("email")} />
        </div>
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <label htmlFor="">phone</label>
          <input type="tel" {...register("phone")} />
        </div>
        {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <label htmlFor="">date</label>
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <DatePicker
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <input type="file" />
        </div>
      </form>
      <button onClick={handleSubmit(onSubmit)}>submit</button>
    </main>
  );
};

export default Home;
