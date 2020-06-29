import React, { lazy, Suspense, useState, useEffect } from "react";

const CreateModule = lazy(() => import("./com-module-edit.jsx"));
const DeleteModule = lazy(() => import("./com-module-delete.jsx"));

export default function index() {
  const [CreateModuleStatus, setModuleAStatus] = useState(false);
  const [DeleteModuleStatus, setModuleBStatus] = useState(false);

  const handleDyncImportModuleA = () => setModuleAStatus(true);
  const handleDyncImportModuleB = () => setModuleBStatus(true);

  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>name</th>
            <th>id</th>
            <th>more</th>
          </tr>
        </thead>
        <tbody>
          <tr className="active">
            <td>xuetengfei</td>
            <td>001</td>
            <td>
              <button className="btn" onClick={handleDyncImportModuleA}>
                Edit
              </button>
              <button
                className="btn"
                style={{ marginLeft: "10px" }}
                onClick={handleDyncImportModuleB}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Suspense fallback={<div className="loading loading-lg"></div>}>
        {CreateModuleStatus && <CreateModule />}
        {DeleteModuleStatus && <DeleteModule />}
      </Suspense>
    </div>
  );
}
