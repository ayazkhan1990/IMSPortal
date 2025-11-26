import React from "react";

const CopyrightFooter = ({
  startYear = 2014,
  endYear = new Date().getFullYear(),
  companyName = "ANK Orbit India",
  developerName = "Ayaz Khan",
}) => {
  return (
    <div className="copyright-footer d-flex align-items-center justify-content-between border-top bg-white gap-3 flex-wrap p-3">
      <p className="fs-13 text-gray-9 mb-0">
        {startYear} - {endYear} © {companyName}. All Rights Reserved
      </p>

      <p className="mb-0">
        Designed &amp; Developed By{" "}
        <a href="javascript:void(0);" className="link-primary">
          {developerName}
        </a>
      </p>
    </div>
  );
};

export default CopyrightFooter;
