import React, { useState, useEffect } from 'react';
import { Project } from '../../../../model/project.model';
import {getProject  } from "../../../../api/project.api";
const ProjectFinish: React.FC<{refresh:boolean}> = (refresh) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await getProject();
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, [refresh]);


  return (
    <div className='styleProject'>

      <div className="table-wrapper" id="finishProject">
        <h2 className='titleFinish'>פרויקטים סגורים</h2>
        <table className="TableClose">
          <thead>
            <tr>
              <th></th>
              <th style={{ width: '20%' }}>שם לקוח</th>
              <th style={{ width: '20%' }}>שם העסק</th>
              <th style={{ width: '20%' }}>לינקים</th>
            </tr>
          </thead>
          <tbody>
            {projects
              .filter((project) => project.status.value == "DONE")
              .map((project, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>
                      <div className='circle'>
                        <br></br>
                        <svg className='v' width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute',  transform: 'translate(-50%, -50%)' }}>
                          <path d="M13.7481 0.182231C13.4423 -0.0852415 12.9766 -0.0550272 12.7084 0.251491L4.86267 9.21799L1.2743 5.39014C0.995782 5.09393 0.530098 5.0792 0.23315 5.35698C-0.0637981 5.63476 -0.0792744 6.10192 0.199244 6.39886L4.34391 10.8198C4.48391 10.9679 4.67769 11.0519 4.88181 11.0519H4.89433C5.10285 11.049 5.29885 10.9576 5.43663 10.8007L13.8181 1.2219C14.0856 0.915386 14.0546 0.450441 13.7481 0.182231Z" fill="#002046" />
                        </svg>
                      </div>
                    </td>
                    <td>{`${project.firstName} ${project.lastName}`}</td>
                    <td>{project.source}</td>
                  </tr>
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </div>

    </div>

  );
};

export default ProjectFinish;
