"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.replace("/Dashboard/Revenue");
  };

  return (
    <div className="w-full h-dvh grid grid-cols-6">
      <div className="relative bg-[url(/landing_bus_2.jpg)] bg-center bg-cover bg-no-repeat col-span-4 flex flex-col justify-between py-10 px-10">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="flex gap-5 items-center">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <div>
            <h6 className="text-2xl font-extrabold text-white">KTRAC</h6>
            <p className="text-themeBlue text-xs">v2.0</p>
          </div>
        </div>
        <h5 className="text-white font-bold text-4xl mb-14">
          YOUR GATEWAY TOWARDS
          <br />
          GOD'S OWN COUNTRY
        </h5>
      </div>
      <div className="flex flex-col gap-8 justify-between items-center h-full col-span-2">
        <div className="flex flex-col gap-10 rounded-md px-12 py-5 pb-10 w-[28rem] my-auto">
          <div className="flex flex-col gap-1">
            <p className="text-themeBlue text-3xl font-semibold m-0">
              KTRAC
              <span className="text-themeBlue/70 text-xs pl-0.5 font-medium">
                v.2.0
              </span>
            </p>

            <p className="text-sm">Welcome back! Please enter your details</p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-1 ">
              <label className="pl-1">Email</label>
              <input
                type="text"
                className="w-full bg-transparent placeholder:text-themeBlue/20 text-themeBlue text-sm border border-themeBlue/10 rounded-md px-3 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="email"
              />
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <label className="pl-1">Password</label>
              <input
                type="text"
                className="w-full bg-transparent placeholder:text-themeBlue/20 text-themeBlue text-sm border border-themeBlue/10 rounded-md px-3 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="password"
              />
            </div>
            <div className="flex justify-between px-1">
              <div className="flex gap-1 items-center">
                <input
                  id="auth-show-pass"
                  type="checkbox"
                  className="cursor-pointer"
                />
                <label
                  htmlFor="auth-show-pass"
                  className="text-[12px] cursor-pointer text-themeBlue/60"
                >
                  Show Password
                </label>
              </div>
              <p className="text-[12px] cursor-pointer text-blue-950">
                Forget Password
              </p>
            </div>
            <button
              type="submit"
              className="bg-themeBlue py-3 rounded-md text-white mt-5 cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
        <p className="text-xs text-gray-400 pb-5">
          Managed by Whitematrix Software Solutions
        </p>
      </div>
    </div>
  );
}
