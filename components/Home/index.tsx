import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Home = () => {
  // 폰 번호 정규표현식
  const phoneRegex = new RegExp(/^\d{3}-\d{3,4}-\d{4}$/);
  const userInfoSchema = z
    .object({
      id: z.string().min(6, { message: "6자 이상" }),
      password: z.string().min(4, { message: "4자 이상" }),
      confirmPassword: z
        .string()
        .min(1, { message: "confirm password is required" }),
      // 숫자가 한 개 이상일 것. 즉 필드가 필수인지 확인
      age: z.number().min(1),
      email: z.string().email(),
      phone: z.string().regex(phoneRegex, "폰 번 맞음?"),
      date: z.date(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Password don't match",
    });

  type UserInfo = z.infer<typeof userInfoSchema>;

  const {
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
      <form style={{ width: "300px" }} onSubmit={handleSubmit(onSubmit)}>
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
          <input type="password" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <label htmlFor="">confirm password</label>
          <input type="password" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <label htmlFor="">age</label>
          <input type="number" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <label htmlFor="">email</label>
          <input type="email" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <label htmlFor="">phone</label>
          <input type="tel" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <label htmlFor="">date</label>
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
      <button type="submit">submit</button>
    </main>
  );
};

export default Home;
