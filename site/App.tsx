import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createElement } from "react";
import CommonLayout from "./components/CommonLayout";
import useMenu from "./components/useMenu";
import IconDemo from './components/Icons';
import React from 'react';
function App(): JSX.Element {
  const list = useMenu();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="/" element={<div>
              <h3>欢迎使用👏</h3>
              <pre>
                  <code>
                      npm i @oc/design
                  </code>
              </pre>
          </div>} />
          <Route path="/icon" element={<IconDemo/>} />
          {list.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={createElement(item.component)}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
