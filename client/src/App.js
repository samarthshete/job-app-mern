import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute } from "./pages";
import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from "./pages/dashboard";
import Contacts from "./pages/dashboard/Contacts";
import Documents from "./pages/dashboard/Documents";
import { useState } from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="add-Job" element={<AddJob></AddJob>}></Route>
          <Route path="all-Jobs" element={<AllJobs></AllJobs>}></Route>
          <Route path="contacts" element={<Contacts></Contacts>}></Route>
          <Route path="documents" element={<Documents></Documents>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Route>

        {/* <Route path="/" element={ <Dashboard></Dashboard>} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
