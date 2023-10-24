import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TroopResults } from "../components/troop/TroopResults";

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}/>
        <Route path={"/troop/"} element={<TroopResults/>} />
        <Route path={"/add/"} element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};
export default IndexRouter;

