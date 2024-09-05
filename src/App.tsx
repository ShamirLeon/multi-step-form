import StepCard from "./components/StepCard";
import Steps from "./components/Steps";
import FormProvider from "./context/FormProvider";

function App() {
  return (
    <>
      <div className="h-[100vh] bg-pastelBlue font-Ubuntu lg:flex lg:justify-center lg:items-center">
        <FormProvider>
          <div className="lg:flex lg:p-[12px] lg:bg-white lg:rounded-[24px] lg:h-[41rem]">
            <Steps />
            <StepCard />
          </div>
        </FormProvider>
      </div>
    </>
  );
}

export default App;
