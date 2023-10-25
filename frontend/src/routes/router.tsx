import { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Statistics } from "../components/statistic/Stats";
import { Add } from "../components/add/Add";
import { View } from "../components/view/View";
import { Contact } from "../components/static_pages/Contact";

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}/>
        <Route path={"/view/"} element={<View/>}/>
        <Route path={"/add/"} element={<Add/>} />
        <Route path={"/stats/"} element={<Statistics/>} />
        <Route path={"/contact/"} element={<Contact/>} />
        <Route path={"*"} element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default IndexRouter;

