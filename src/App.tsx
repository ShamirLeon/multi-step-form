import StepCard from "./components/StepCard";
import Steps from "./components/Steps";
import FormProvider from "./context/FormProvider";

function App() {
  return (
    <>
      <div className="h-[100vh] bg-pastelBlue font-Ubuntu lg:flex lg:items-center lg:justify-center">
        <FormProvider>
          <div className="lg:flex lg:h-[38rem] lg:rounded-[24px] lg:bg-white lg:p-[12px]">
            <Steps />
            <StepCard />
          </div>
        </FormProvider>
      </div>
    </>
  );
}

export default App;
