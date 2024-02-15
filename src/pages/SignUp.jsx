import { useState } from "react";
import useSignup from "../features/authentication/useSignup";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { signup, isPending } = useSignup();

  const handleLogin = (e) => {
    e.preventDefault();
    if(!name || !email || !password || !passwordConfirm) return; 
    signup(
      {  email, password, name, passwordConfirm  },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };


  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <div className="bg-white w-96 p-6 rounded-md">
        <div className="bg-white flex justify-center mb-3">
          <img
            src="https://www.vionsys.com/public/assets/img/logo_3.png"
            className="p-2 w-4/6"
            alt="vionsys"
          />
        </div>
        <h2 className="text-2xl">Login to your account</h2>
        <form onSubmit={handleLogin}>
        <div className="flex flex-col my-2">
            <label htmlFor="">Name</label>
            <input
              className="p-2 rounded-md border-[1px] border-slate-400"
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Email</label>
            <input
              className="p-2 rounded-md border-[1px] border-slate-400"
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Password</label>
            <input
              className="p-2 rounded-md border-[1px] border-slate-400"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="">Password</label>
            <input
              className="p-2 rounded-md border-[1px] border-slate-400"
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 text-slate-100 p-2 mt-2"
          >
            {isPending ? "Loading...." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
