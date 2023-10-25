import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Statistics } from "../components/statistic/Stats";

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}/>
        <Route path={"/stats/"} element={<Statistics/>} />
        <Route path={"/add/"} element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};
export default IndexRouter;

