import { LoginForm } from "../components/forms/userForm";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div  className="flex flex-col items-center gap-8">
        <img src="src/assets/images/logo3.svg" className="w-32"/>
        <div className="flex form-control w-80 bg-white px-8 py-6 gap-6 border border-[#CECCD5] rounded-xl">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;