import LoginPage from "./views/login/page";

export default function Home() { // página del home, se dejó el login como componente principal en este ejemplo
  return (
    <div className="w-full h-full flex justify-center items-center bg-primary">
      <div className="lg:w-1/4 md:w-3/4 w-full h-screen flex items-center">
        <LoginPage />;
      </div>
    </div>
  );
}


//emilyspass emilys