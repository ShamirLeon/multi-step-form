import StepCard from "./components/StepCard";
import Steps from "./components/Steps";
import FormProvider from "./context/FormProvider";

function App() {
  return (
    <>
      <div className="h-[100vh] bg-pastelBlue font-Ubuntu">
        <FormProvider>
          <div className="">
            <Steps />
            <StepCard />
          </div>
        </FormProvider>
      </div>
    </>
  );
}

export default App;
