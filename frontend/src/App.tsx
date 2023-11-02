// import { AppContextProvider } from "./AppContextProvider";
import { ConfigProvider } from "antd";
import { DesktopLayout } from "./components/layout/DesktopLayout";
export default function App() {
  return (
    <ConfigProvider
    theme={{
        token:{
            colorPrimary: "#ff7875"
        }
    }}
    >
      {/* <AppContextProvider> */}
      <DesktopLayout />
      {/* </AppContextProvider> */}
    </ConfigProvider>
  );
}
