import { useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <main>
      <form action="">
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="file" />
        </div>
      </form>
      <button onClick={() => {}}>submit</button>
    </main>
  );
};

export default Home;
