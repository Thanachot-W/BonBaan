const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div  className="flex flex-col items-center gap-8">
        <img src="src/assets/images/logo3.svg" className="w-32"/>
        <div className="flex form-control w-80 bg-white px-8 py-6 gap-6 border border-[#CECCD5] rounded-xl">
          <div className="flex flex-col gap-1">
            <label htmlFor="username">ชื่อผู้ใช้</label>
            <input id="username" type="text" className="input input-sm input-bordered bg-white rounded-md"/>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">รหัสผ่าน</label>
            <input id="password" type="password" className="input input-sm input-bordered bg-white rounded-md"/>
          </div>
          <button type="submit" className="btn btn-md btn-primary">เข้าสู่ระบบ</button>
        </div>
      </div>
    </div>
  );
};

export default Login;