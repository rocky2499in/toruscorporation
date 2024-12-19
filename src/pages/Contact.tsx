import { Routes, Route, Navigate } from "react-router-dom";
import WorkWithUs from "./WorkWithUs";
import Schedule from "./Schedule";
import ProcurementAssistance from "./ProcurementAssistance";

const Contact = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/contact/procurement" replace />} />
      <Route path="/procurement" element={<ProcurementAssistance />} />
      <Route path="/work-with-us" element={<WorkWithUs />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
};

export default Contact;